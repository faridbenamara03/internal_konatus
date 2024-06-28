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
        <b-form-select
          id="job"
          v-model="job"
          :options="jobOptions"
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
 BFormGroup, BFormInput, BButton, BForm, BFormSelect
} from 'bootstrap-vue'
import axios from 'axios'

export default {
  components: {
    BButton,
    BFormInput,
    BFormGroup,
    BForm,
    BFormSelect,
  },
  props: {
    selectedUnit: {
      type: Array,
      default: null,
    },
    fetchDataOrga: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
      name: '',
      libelle: '',
      job: '',
      list_job: null,
    }
  },
  computed: {
    jobOptions() {
      return this.list_job ? this.list_job.map(job => ({ value: job.id, text: job.name })) : []
    }
  },
  mounted() {
    this.fetchJobList()
  },
  methods: {
    resetForm() {
      this.name = ''
      this.libelle = ''
      this.job = ''
    },
    closeModal() {
      this.isOpen = false
    },
    async fetchJobList() {
      try {
        const response = await axios.get('/new-base/job/list')
        this.list_job = response.data
        console.log("retour server", this.list_job)
      } catch (error) {
        console.error('Error fetching orga data', error)
      }
    },
    async insertTeam() {
      try {
        // Prepare the data for sending
        const params = {
          libelle: this.libelle,
          name: this.name,
          job: this.job,
          unitid: this.selectedUnit.unit_id
        }
        await axios.post('/new-base/team/insert', params)
        await this.fetchDataOrga()
       await this.resetForm()
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
