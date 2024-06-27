<template>
  <b-modal
    id="modal-export"
    ref="my-modal"
    title="Export File"
    centered
    no-fade
    hide-backdrop
    static
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Export File
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

    <!-- Dropzones Container -->
    <div class="dropzones-container d-flex">
      <!-- Excel Dropzone -->
      <dropzone
        id="excel-dropzone"
        ref="excelDropzone"
        :use-custom-slot="true"
        :options="dropzoneOptionsExcel"
        class="dropzone"
        @vdropzone-upload-progress="uploadProgress"
        @vdropzone-file-added="fileAddedExcel"
        @vdropzone-sending-multiple="sendingFiles"
        @vdropzone-success-multiple="success"
      >
        <div class="dropzone-container">
          <div class="file-selector">
            <p class="separator">
              <b-button
                variant="primary"
                @click="exportToCsv"
              >
                Export csv
              </b-button>
            </p>
          </div>
        </div>
      </dropzone>

      <!-- Jira Dropzone -->
      <dropzone
        id="jira-dropzone"
        ref="jiraDropzone"
        :use-custom-slot="true"
        :options="dropzoneOptionsJira"
        class="dropzone"
        @vdropzone-upload-progress="uploadProgress"
        @vdropzone-file-added="fileAddedJira"
        @vdropzone-sending-multiple="sendingFiles"
        @vdropzone-success-multiple="success"
      >
        <div class="dropzone-container">
          <div class="file-selector">
            <p class="separator">
              <b-button
                variant="primary"
                @click="exportToJira"
              >
                Export to Jira
              </b-button>
            </p>
          </div>
        </div>
      </dropzone>
    </div>

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
    csv() {
    axios.get('http://localhost:8501/we-csv')
      .then(response => {
        console.log('Script output:', response.data.output)
        console.log('Script error:', response.data.error)
        this.$toast.success("Init successful!")
      })
      .catch(error => {
        console.error('Error running script:', error)
        this.$toast.error("Init failed!")
      })

    this.$refs['my-modal'].hide()
    },
    exportToCsv() {
      const downloadUrl = 'http://localhost:8501/we-csv'

      const link = document.createElement('a')
      link.href = downloadUrl
      link.style.display = 'none'
      document.body.appendChild(link)
      link.click()

      // Nettoyer après le téléchargement
      document.body.removeChild(link)
    },
    exportToJira() {
    axios.get('http://localhost:8501/workelementjira')
      .then(response => {
        console.log('Script output:', response.data.output)
        console.log('Script error:', response.data.error)
        this.$toast.success("Export successful!")
      })
      .catch(error => {
        console.error('Error running script:', error)
        this.$toast.error("Export failed!")
      })

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
.dropzones-container {
  display: flex;
  justify-content: space-between;
}

.dropzone {
  flex: 1;
  margin: 0 10px;
}
</style>
