<template>
  <b-modal
    id="modal-updateTeam"
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
          <div>Update Team:</div>
          <div>{{ selectedTeam.team_name }}
          </div>
        </h1>
      </div>
    </template>

    <b-form
      class="mt-3"
      @submit.prevent="updateTeam"
    >
      <b-form-group
        label="Team Name"
        label-for="team-name-input"
      >
        <b-form-input
          id="Team-name-input"
          v-model="name"
          type="text"
          placeholder="Enter New Team Name"
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
      <b-button
        variant="primary"
        type="submit"
        class="mt-3"
      >
        Update Team
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
    BForm
  },
  props: {
    selectedTeam: {
      type: Array,
      default: null,
    },
    fetchDataOrga: {
      type: Function,
      default: null,
    },
    selectedUnit: {
      type: Array,
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
      name: '',
      libelle: '',
      h_cost_unit: '',
      list_job: null,
      jobId: null,
    }
  },
  mounted() {
    this.fetchJobList()
  },
  methods: {
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
    getJobIdByName(jobName) {
      if (this.list_job) {
        const job = this.list_job.find(j => j.name === jobName)
        this.jobId = job ? job.id : null
        return this.jobId
      }
      return null
    },
    async updateTeam() {
      const jobId = this.getJobIdByName(this.selectedTeam.job_name)
      try {
        // Prepare the data for sending
        const params = {
          libelle: this.libelle,
          name: this.name,
          job: jobId,
          unitid: this.selectedUnit.unit_id
        }
        await axios.put(`/new-base/team/update/${this.selectedTeam.team_id}`, params)
        await this.fetchDataOrga()
        this.libelle = ''
        this.name = ''
      } catch (error) {
        console.error('Error during job insertion:', error)
        // Handle connection errors or server response with a status code outside the 2xx range
      }
    }
  }
}
</script>
<style scoped>

</style>
