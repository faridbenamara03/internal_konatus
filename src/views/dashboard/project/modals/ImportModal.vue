<template>
  <b-modal
    id="modal-import"
    ref="my-modal"
    title="Import file"
    centered
    no-fade
    hide-backdrop
    static
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Import file
      </h5>
      <div class="modal-actions">
        <b-button
          variant="outline-primary"
          @click="hideModal"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </template>
    <dropzone
      id="dropzone"
      ref="myVueDropzone"
      :use-custom-slot="true"
      :options="dropzoneOptions"
      @vdropzone-upload-progress="uploadProgress"
      @vdropzone-file-added="fileAdded"
    >
      <div class="dropzone-container">
        <div class="file-selector">
          Drop files here or
          <p class="separator">
            <span> click to import </span>
          </p>
          <figure>
            <feather-icon
              icon="UploadCloudIcon"
              size="48"
            />
          </figure>
        </div>
      </div>
    </dropzone>
    <div
      v-if="tempAttachments.length > 0"
      class="mt-1"
    >
      <div
        v-for="tempAttachment in tempAttachments"
        :key="tempAttachment.id"
        class="file-details"
      >
        <div class="file-name">
          <figure>
            <feather-icon
              icon="CheckIcon"
              class="text-success"
            />
          </figure>
          <p
            ref="attachmentTitle"
            class="pl-1"
          >
            {{ tempAttachment.title }} ({{ tempAttachment.size }} bytes)
          </p>
        </div>
        <figure @click="cancelUpload">
          <feather-icon
            icon="Trash2Icon"
            class="text-danger"
          />
        </figure>
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button
        variant="outline-primary"
        @click="hideModal"
      >
        Cancel
      </b-button>
      <b-button
        variant="primary"
        @click="handleSave"
      >
        Upload
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { BButton, BModal } from 'bootstrap-vue'
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import axios from 'axios'

export default {
  components: {
    BButton,
    BModal,
    Dropzone: vue2Dropzone,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      dropzoneOptions: {
        url: '#', // Pas besoin d'URL car nous utilisons une requête GET
        maxFilesize: 1024, // Limite de taille des fichiers en MB
        paramName() {
          return 'file[]'
        },
        dictDefaultMessage: 'Upload Files Here',
        includeStyling: false,
        previewsContainer: false,
        thumbnailWidth: 250,
        thumbnailHeight: 140,
        uploadMultiple: false,
        parallelUploads: 20,
      },
      tempAttachments: [],
      attachments: [],
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handleSave() {
      if (this.tempAttachments.length === 0) {
        this.$toast.warning("Please select a file!")
      } else {
        this.executeUploadScript()
      }
    },
    fileAdded(file) {
      console.log('File Dropped => ', file)

      const attachment = {
        id: file.upload.uuid,
        title: file.name,
        size: file.size,
      }
      this.tempAttachments = [attachment]
    },
    executeUploadScript() {
      axios.get('http://127.0.0.1:8501/upload')
        .then(response => {
          if (response.data.error) {
            this.$toast.error(`Error: ${response.data.error}`)
          } else {
            this.$toast.success("Importation du fichier avec succées")
            console.log('Script output:', response.data.output)
            this.hideModal()
          }
        })
        .catch(error => {
          this.$toast.error(`Failed to execute script: ${error.message}`)
        })
    },
    uploadProgress(file, progress) {
      console.log('File Upload Progress', progress)
      this.tempAttachments = this.tempAttachments.map(attachment => {
        if (attachment.title === file.name) {
          return { ...attachment, progress: `${Math.floor(progress)}` }
        }
        return attachment
      })
    },
    cancelUpload() {
      this.tempAttachments = []
      this.attachments = []
    },
  },
}
</script>
