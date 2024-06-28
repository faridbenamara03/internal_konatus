<template>
  <b-modal
    id="modal-updateSkill"
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
          <div>Update skill :</div>
          <div> {{ skill.skill_name }}</div>
        </h1>
      </div>
    </template>
    <b-form
      class="mt-3"
      @submit.prevent="updateSkill"
    >
      <b-form-group
        label="Skill Name"
        label-for="Skill-name-input"
      >
        <b-form-input
          id="skill-name-input"
          v-model="name"
          type="text"
          placeholder="Enter a new Skill Name"
          required
        />
      </b-form-group>
      <b-button
        variant="primary"
        type="submit"
        class="mt-3"
      >
        Update Skill Name
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
    skill: {
      type: Object,
      default: null,
    },
    fetchData: {
      type: Function,
      default: null,
    },
    job: {
      type: Object,
      default: null,
    },
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
    async updateSkill() {
      try {
        // Prepare the data for sending
        const params = {
          name: this.name,
          idjob: this.job.job_id
        }
        await axios.post(`/new-base/skillset/update/${this.skill.skillset_id}`, params)
        await this.fetchData()
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
