<template>
  <b-modal
    id="modal-addJob"
    v-model="isOpen"
    centered
    hide-backdrop
    no-close-on-backdrop
    no-close-on-esc
    content-class="shadow"
    title-class="text-white"
    header-bg-variant="dark"
    header-text-variant="white"
    modal-class="my-modal"
  >
    <template v-slot:modal-title>
      <div class="d-flex justify-content-between align-items-center">
        <h1 class="mb-0">
          Add a new job
        </h1>
      </div>
    </template>

    <b-form
      class="mt-3"
      @submit.prevent="insertJob"
    >
      <b-form-group
        label="Job Name"
        label-for="job-name-input"
      >
        <b-form-input
          id="job-name-input"
          v-model="name"
          type="text"
          placeholder="Enter Job Name"
          required
        />
      </b-form-group>
      <b-button
        variant="primary"
        type="submit"
        class="mt-3"
      >
        Add Job
      </b-button>
    </b-form>
  </b-modal>

</template>

<script>
import {
 BFormGroup, BFormInput, BButton, BForm
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BFormGroup,
    BForm,
    BFormInput,
    BButton,
  },
  props: {
    orgaInfo: {
      type: Array,
      default: null,
    }
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    async insertJob() {
      try {
        // Prepare the data for sending
        const params = new URLSearchParams({
          jobname: this.name,
          organization_id: this.orgaInfo[0].org_id
        })

        const response = await axios.post('', params)

        // The response is automatically parsed as JSON
        const { data } = response

        // Check for a specific condition or handle generically if no 'success' element
        // For example, let's check if there's a specific message key
        if (data.message) {
          console.log('Server Response:', data.message)
          // Here, continue with any specific handling, such as updating the UI
        } else {
          console.error('Unexpected server response:', data)
          // Handle unexpected response structure
        }
      } catch (error) {
        console.error('Error during job insertion:', error)
        // Handle connection errors or server response with a status code outside the 2xx range
      }
    },
  }
}
</script>

<style scoped>

</style>
