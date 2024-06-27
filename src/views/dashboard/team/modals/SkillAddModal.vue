<template>
  <b-modal
    id="modal-addSkill"
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
          <div>Add a new skill to job:</div>
          <div> {{ job.job_name }}
          </div>
        </h1>
      </div>
    </template>

    <b-form
      class="mt-3"
      @submit.prevent="insertSkill"
    >
      <b-form-group
        label="Skill Name"
        label-for="skill-name-input"
      >
        <b-form-input
          id="skill-name-input"
          v-model="name"
          type="text"
          placeholder="Enter Skill Name"
          required
        />
      </b-form-group>
      <b-button
        variant="primary"
        type="submit"
        class="mt-3"
      >
        Add Skill
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
    BButton,
    BForm,
    BFormInput,
    BFormGroup,
  },
  props: {
    job: {
      type: Object,
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
    async insertSkill() {
      try {
        // Prepare the data for sending
        const params = {
          name: this.name,
          idjob: this.job.job_id
        }

        const response = await axios.post('/new-base/skillset/add', params)

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
