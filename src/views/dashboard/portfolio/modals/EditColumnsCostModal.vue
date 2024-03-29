<template>
  <b-modal
    id="modal-edit-column-cost"
    ref="my-modal"
    size="lg"
    title="Edit Columns"
    centered
    no-fade
    hide-backdrop
    static
  >
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
        <b-button
          variant="outline-primary"
          @click="hideModal"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </template>
    <div
      class="d-flex"
      style="border-bottom: 1px solid grey;"
    >
      <div class="col-6 optionBlock">
        <h4>Main</h4>
        <b-form-checkbox-group
          id="checkbox-group-11"
          v-model="selected"
          :options="mainOptions"
          name="columns"
          class="checkbox-group"
          stacked
        />
      </div>
      <div class="col-6 optionBlock">
        <h4>Key Elements</h4>
        <b-form-checkbox-group
          id="checkbox-group-12"
          v-model="selected"
          :options="keyOptions"
          name="columns"
          class="checkbox-group"
          stacked
        />
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button
        variant="outline-primary"
        @click="hideModal"
      >
        Cancel
      </b-button>
      <b-button
        variant="primary"
        @click="handleSave"
      >
        Save
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BFormCheckboxGroup, BModal,
  //  BFormInput,
  //  BFormCheckbox
} from 'bootstrap-vue'
// import vSelect from 'vue-select'
// import moment from 'moment'

export default {
  components: {
    BButton,
    BFormCheckboxGroup,
    BModal,
    // BFormCheckbox,
    // BFormInput,
    // vSelect
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
        { text: 'Budget Demand', value: 'demand' },
        { text: 'Budget Engaged', value: 'engaged' },
        { text: 'Budget Real Estimated', value: 'realEstimated' },
        { text: 'Budget Authorized', value: 'authorized' },
        { text: 'Spent', value: 'spent' },
        { text: 'Earn Value UTD', value: 'earn value' },
        { text: '% lin (vs cost ) compare to engaged', value: 'cost compare' },
        { text: '% accomplissement UTD ', value: 'accomplissement' },
        { text: '% lin (vs time) compare to engaged', value: 'time compare' },
      ],
      keyOptions: [
        { text: 'Priority', value: 'priority' },
        { text: 'Value', value: 'value' },
        { text: 'Current Phase', value: 'currentPhase' }
      ]
    }
  },
  watch: {
      data: {
          immediate: true,
          handler(newVal) {
              this.initializeData(newVal)
          },
      },
  },
  mounted() {
    this.selected = this.checkedData
  },
  methods: {
    initializeData(data) {
      console.log(data)
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handleSave() {
      this.selected = this.selected.filter((value, index, array) => array.indexOf(value) === index)
      this.$emit('columnChange', this.selected)
      this.$refs['my-modal'].hide()
    }
  }
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
