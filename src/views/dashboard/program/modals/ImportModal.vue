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
      @vdropzone-sending-multiple="sendingFiles"
      @vdropzone-success-multiple="success"
    >
      <div class="dropzone-container">
        <div class="file-selector">
          Drop files here or
          <p class="separator">
            <span> click to import farid </span>
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
      collapsed: [],
      dropzoneOptions: {
        // The Url Where Dropped or Selected files will be sent
        url: 'https://httpbin.org/post',
        // File Size allowed in MB
        maxFilesize: 102400000,
        // Authentication Headers like Access_Token of your application
        // headers: {
        //   Authorization: 'Access Token',
        // },
        // The way you want to receive the files in the server
        paramName() {
          return 'file[]'
        },
        dictDefaultMessage: 'Upload Files Here xD',
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
      if (this.attachments.length === 0) {
        this.$toast.warning("Please select file!")
        // this.$store.commit('teamState/IMPORT_WBS', this.attachments)
      } else {
        // this.$emit('onSubmit', this.data)
        this.$refs['my-modal'].hide()
        this.$store.commit('teamState/IMPORT_WBS', this.attachments)
        this.$store.commit('globalState/IMPORT_WBS_2')
        this.$store.commit('teamState/TOGGLE_IMPORT_LOADER_MODAL_V')
      }
    },
    fileAdded(file) {
      console.log('File Dropped => ', file)

      const reader = new FileReader()
      reader.onload = e => {
        this.attachments = e.target.result
      }
      reader.readAsText(file)

      // Construct your file object to render in the UI
      const attachment = {}
      attachment.id = file.upload.uuid
      attachment.title = file.name
      attachment.type = 'file'
      attachment.extension = `.${file.type.split('/')[1]}`
      attachment.user = JSON.parse(localStorage.getItem('user'))
      attachment.content = 'File Upload by Select or Drop'
      attachment.thumb = file.dataURL
      attachment.thumb_list = file.dataURL
      attachment.isLoading = true
      attachment.progress = null
      attachment.size = file.size
      this.tempAttachments = [attachment]
    },
    // checkProgress(attachment) {
    //   return attachment.progress !== null
    // },
    // a middle layer function where you can change the XHR request properties
    sendingFiles(files) {
      console.log(
        'if you want to change the upload time or add data to the formData you can do it here.',
      )
      console.log('Files sending', files)
    },
    // function where we get the upload progress
    uploadProgress(file, progress) {
      console.log('File Upload Progress', progress)
      this.tempAttachments.map(attachment => {
        if (attachment.title === file.name) {
          // eslint-disable-next-line no-param-reassign
          attachment.progress = `${Math.floor(progress)}`
        }
        return true
      })
    },
    // called on successful upload of a file
    success(file, response) {
      console.log('File uploaded successfully')
      console.log('Response is ->', response)
    },
    cancelUpload() {
      this.tempAttachments = []
      this.attachments = []
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
