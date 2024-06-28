<template>
  <b-modal
    id="modal-updateUnit"
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
          <div>Update Unit</div>
          <div>{{ selectedUnit.unit_name }}</div>
        </h1>
      </div>
    </template>

    <b-form
      class="mt-3"
      @submit.prevent="updateUnit"
    >
      <b-form-group
        label="Unit Name"
        label-for="skill-name-input"
      >
        <b-form-input
          id="Unit-name-input"
          v-model="name"
          type="text"
          placeholder="Enter New Unit Name"
          required
        />
      </b-form-group>
      <b-form-group
        label="Unit Cost"
        label-for="Unit-Cost-input"
      >
        <b-form-input
          id="Unit-cost-input"
          v-model="unit_cost"
          type="number"
          placeholder="Enter Unit Cost per Hour"
          required
        />
      </b-form-group>
      <b-button
        variant="primary"
        type="submit"
        class="mt-3"
      >
        Update Unit
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
    },
    fetchDataOrga: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      isOpen: false,
      unit_cost: '',
      name: '',
    }
  },
  methods: {
    closeModal() {
      this.isOpen = false
    },
    async updateUnit() {
      try {
        // Prepare the data for sending
        const params = {
          name: this.name,
          organization_id: this.selectedUnit.organization_id,
          h_cost_unit: this.unit_cost,
        }
        await axios.put(`/new-base/unit/update/${this.selectedUnit.unit_id}`, params)
        await this.fetchDataOrga()
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
