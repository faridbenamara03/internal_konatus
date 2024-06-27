<template>
  <b-modal
    id="modal-holidays"
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
    <template #modal-title>
      <div>Ressource holidays - {{ selectedRessource.nomRessource }}</div>
    </template>

    <div>
      <!-- Your content -->
      <div>
        <b-form @submit.prevent="insertDate">
          Begin:
          <b-form-input
            v-model="startdate"
            type="date"
            required
          />
          End:
          <b-form-input
            v-model="enddate"
            type="date"
            required
          />
          <b-button
            type="submit"
            variant="primary"
          >
            Add holidays
          </b-button>
        </b-form>
      </div>
      <div>
        <ul>
          <li
            v-for="date in selectedRessource.dates_holidays"
            :key="date.id"
          >
            Starting date: {{ date.start }} - End date: {{ date.end }}
            <b-button
              variant="danger"
              @click="supprimer(date.id)"
            >
              Delete
            </b-button>
          </li>
        </ul>
        <div>{{ messageinsert }}</div>
        <div>{{ messagedelete }}</div>
      </div>
    </div>

    <template #modal-footer>
      <b-button
        variant="info"
        @click="closeModal"
      >
        Got it, thanks!
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import axios from 'axios'
import {
 BModal, BButton, BFormInput, BForm
} from 'bootstrap-vue'

export default {
  components: {
    BModal,
    BButton,
    BFormInput,
    BForm,
  },
  props: {
    selectedRessource: {
      type: Object,
      default: null,
    },
    fetchDataR: {
      type: Function,
      default: null,
    },
    fetchDataT: {
      type: Function,
      default: null,
    }
  },
  data() {
    return {
      isOpen: true,
      startdate: '',
      enddate: '',
      messageinsert: '',
      messagedelete: ''
    }
  },
  mounted() {
    console.log("la ressource en question", this.selectedRessource)
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    async insertDate() {
      if (!this.startdate || !this.enddate) {
        this.messageinsert = 'Both dates are required!'
        return
      }

      const dataToSend = {
        startDate: this.startdate,
        endDate: this.enddate,
        idRessource: this.selectedRessource.idRessource
      }

      try {
        const response = await axios.post('/new-base/holidays', dataToSend)
        const newVacancy = {
          start: this.startdate,
          end: this.enddate,
          id: response.data.id // Ensure this is returned from the server
        }
        this.selectedRessource.dates_holidays.push(newVacancy)
        this.startdate = ''
        this.enddate = ''
        await this.fetchDataR()
        await this.fetchDataT()
      } catch (error) {
        console.error('Error adding holiday:', error)
        this.messageinsert = 'Error adding holiday'
      }
    },
    async supprimer(holidayId) {
      try {
        await axios.delete(`/new-base/holidays/delete/${holidayId}`)
        this.selectedRessource.dates_holidays = this.selectedRessource.dates_holidays.filter(holiday => holiday.id !== holidayId)
        await this.fetchDataR()
        await this.fetchDataT()
      } catch (error) {
        console.error('Error deleting holiday:', error)
        this.messagedelete = 'Error deleting holiday'
      }
    },
  }
}
</script>
