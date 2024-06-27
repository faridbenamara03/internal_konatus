<template>
  <b-modal
    id="modal-addTeam"
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
          <div>Add a new team to the unit</div>
          <div>{{ selectedUnit.unit_name }}</div>
        </h1>
      </div>
    </template>
    <b-form
      class="text-white mt-5"
      @submit.prevent="insertTeam"
    >
      <b-form-group
        label="Team Name"
        label-for="name"
      >
        <b-form-input
          id="name"
          v-model="name"
          type="text"
          placeholder="Enter Team Name"
          required
        />
      </b-form-group>

      <b-form-group
        label="Enter a libelle"
        label-for="libelle"
      >
        <b-form-input
          id="libelle"
          v-model="libelle"
          type="text"
          placeholder="Enter a libelle"
          required
        />
      </b-form-group>

      <b-form-group
        label="Select a job"
        label-for="job"
      >
        <b-form-input
          id="job"
          v-model="job"
          type="number"
          placeholder="Enter a number"
          required
        />
      </b-form-group>
      <b-button
        type="submit"
        variant="primary"
        class="mt-3"
      >
        Add Team
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
    BFormInput,
    BFormGroup,
    BForm,
  },
  props: {
    selectedUnit: {
      type: Array,
      default: null,
    }
  },
  data() {
    return {
      isOpen: false,
      name: '',
      libelle: '',
      job: '',
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    async insertTeam() {
      try {
        // Prepare the data for sending
        const params = new URLSearchParams({
          name: this.name,
          idjob: this.unit_cost
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
