<template>
  <b-modal
    id="modal-overload"
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
      <div>Ressource Add Hours - {{ selectedRessource.nomRessource }}</div>
    </template>

    <b-form @submit.prevent="insertDate">
      <div class="mb-3">
        <label
          for="start_date"
          class="form-label text-white"
        >
          Begin
        </label>
        <b-form-input
          id="start_date"
          v-model="startdate"
          type="date"
          required
        />
      </div>
      <div class="mb-3">
        <label
          for="overload"
          class="form-label text-white"
        >
          Overload (%)
        </label>
        <b-form-input
          id="overload"
          v-model="overload"
          type="number"
          required
        />
      </div>
      <div class="mb-3">
        <label
          for="end_date"
          class="form-label text-white"
        >
          End
        </label>
        <b-form-input
          id="end_date"
          v-model="enddate"
          type="date"
          required
        />
      </div>
      <b-button
        type="submit"
        variant="primary"
      >
        Add work overload
      </b-button>
    </b-form>

    <div class="mt-3">
      <ul>
        <li
          v-for="date in selectedRessource.dates_overload"
          :key="date.id"
        >
          {{ date.start }} to {{ date.end }} - {{ date.value }}%
          <b-button
            variant="danger"
            @click="deleteDate(date.id)"
          >
            Delete
          </b-button>
        </li>
      </ul>
      <p class="text-success">
        {{ messageinsert }}
      </p>
      <p class="text-danger">
        {{ messagedelete }}
      </p>
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
import {
 BModal, BButton, BFormInput, BForm
} from 'bootstrap-vue'
import axios from 'axios'

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
  },
  data() {
    return {
      isOpen: false,
      startdate: '',
      enddate: '',
      overload: '',
      messageinsert: '',
      messagedelete: ''
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    insertDate() {
      const dataToSend = {
        startDate: this.startdate,
        endDate: this.enddate,
        overload: this.overload,
        idRessource: this.selectedRessource.idRessource
      }

      axios.post('/new-base/add-hours/add', dataToSend)
        .then(response => {
          console.log(response)
          if (response.data.success) {
            this.selectedResource.dates_overload.push({
              start: this.startdate,
              end: this.enddate,
              value: this.overload
            })
          } else {
            this.startdate = ''
            this.enddate = ''
            this.overload = ''
            this.messageinsert = 'Overload added successfully.'
          }
        })
        .catch(error => {
          console.error('Error adding overload:', error)
          this.messagedelete = 'Error adding overload'
        })
    },
    deleteDate(id) {
      console.log("id de la date a supp", id)
      axios.delete(`/new-base/add_hours/delete/${id}`)
        .then(response => {
          if (response) {
            const index = this.selectedResource.dates_overload.findIndex(d => d.id === id)
            if (index !== -1) {
              this.selectedResource.dates_overload.splice(index, 1)
              this.messagedelete = 'Overload deleted successfully.'
            }
          }
        })
    },
  }
}
</script>
