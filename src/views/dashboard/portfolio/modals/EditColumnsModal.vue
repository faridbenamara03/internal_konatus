<template>
  <b-modal size="lg" id="modal-edit-column" ref="my-modal" title="Edit Columns" centered no-fade hide-backdrop static>
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Edit Columns
      </h5>
      <div class="modal-actions">
        <!-- <b-button
          variant="outline-primary"
        >
          <feather-icon
            icon="PlusIcon"
            size="18"
          />
          <span class="pl-1">Add New</span>
        </b-button> !-->
        <b-button variant="outline-primary" @click="hideModal">
          <feather-icon icon="XIcon" size="18" />
        </b-button>
      </div>
    </template>
    <div class="d-flex" style="border-bottom: 1px solid grey;">
      <div class="col-6 optionBlock">
        <h4>Main</h4>
        <b-form-checkbox-group id="checkbox-group-1" v-model="selected" :options="mainOptions" name="columns"
          class="checkbox-group" stacked />
      </div>
      <div class="col-6 optionBlock">
        <h4>Product line</h4>
        <b-form-checkbox-group id="checkbox-group-2" v-model="selected" :options="options5" name="columns"
          class="checkbox-group" stacked />
      </div>
    </div>
    <div class="d-flex" style="border-bottom: 1px solid grey;">
      <div class="col-6 optionBlock">
        <h4>Key elements</h4>
        <b-form-checkbox-group id="checkbox-group-3" v-model="selected" :options="options2" name="columns"
          class="checkbox-group" stacked />
      </div>
      <div class="col-6 optionBlock">
        <h4>Planning</h4>
        <b-form-checkbox-group id="checkbox-group-4" v-model="selected" :options="options4" name="columns"
          class="checkbox-group" stacked />
      </div>
    </div>
    <div class="d-flex">
      <div class="col-6 optionBlock">
        <h4>Meta</h4>
        <b-form-checkbox-group id="checkbox-group-5" v-model="selected" :options="options1" name="columns"
          class="checkbox-group" stacked />
      </div>
      <div class="col-6 optionBlock">
        <h4>Rationale</h4>
        <b-form-checkbox-group id="checkbox-group-6" v-model="selected" :options="options3" name="columns"
          class="checkbox-group" stacked />
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button variant="outline-primary" @click="hideModal">
        Cancel
      </b-button>
      <b-button variant="primary" @click="handleSave">
        Save
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BFormCheckboxGroup, BModal,
} from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BFormCheckboxGroup,
    BModal,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    checkedData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: [],
      mainOptions: [
        { text: 'Budget', value: 'budget' },
        { text: 'Value', value: 'value' },
        { text: 'Quote', value: 'quote' },
        { text: 'Engaged', value: 'engaged' },
        { text: 'Previous engaged', value: 'previousEngaged' },
        { text: 'Quote + engaged', value: 'quoteEngaged' },
        { text: 'Real estimated', value: 'realEstimated' },
        { text: 'Spend', value: 'spend' },
      ],
      options1: [
        { text: 'Nomenclature System', value: 'nomenclatureSystem' },
        { text: 'Portfolio', value: 'portfolio' },
        { text: 'Program', value: 'program' },
        { text: 'Project', value: 'project' },
        { text: 'Sub project', value: 'subProject' },
      ],
      options2: [
        { text: 'Priority', value: 'priority' },
        { text: 'Budget demand', value: 'demand' },
        { text: 'Authorised', value: 'authorised' },
      ],
      options3: [
        { text: 'Product Deadline', value: 'deadline' },
        { text: 'Nature of deadline', value: 'natureOfDeadline' },
        { text: 'Customer Ex', value: 'customerEx' },
        { text: 'Sales Ex', value: 'salesEx' },
        { text: 'Scoring', value: 'scoring' },
      ],
      options4: [
        { text: 'Phase', value: 'phase' },
        { text: 'Phase start date', value: 'phaseStartDate' },
        { text: 'Phase end date', value: 'phaseEndDate' },
      ],
      options5: [
        { text: 'Head of the product portfolio', value: 'portfolioHead' },
        { text: 'Product manager', value: 'productManager' },
        { text: 'Architect', value: 'architect' },
        { text: 'Head of program direction', value: 'directionHead' },
        { text: 'Program director', value: 'programDirector' },
        { text: 'Project manager', value: 'projectManager' },
      ]
    }
  },
  mounted() {
    this.selected = this.checkedData
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handleSave() {
      this.$emit('columnChange', this.selected)
      this.$refs['my-modal'].hide()
    },
  },
}
</script>

<style lang="scss">
.optionBlock {
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
}

@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
