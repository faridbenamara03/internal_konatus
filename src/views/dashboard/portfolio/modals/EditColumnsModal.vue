<template>
  <b-modal
    id="modal-edit-column"
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
          id="checkbox-group-1"
          v-model="selected"
          :options="mainOptions"
          name="columns"
          class="checkbox-group"
          stacked
        />
      </div>
      <div class="col-6 optionBlock">
        <h4>Product line</h4>
        <b-form-checkbox-group
          id="checkbox-group-2"
          v-model="selected"
          :options="options5"
          name="columns"
          class="checkbox-group"
          stacked
        />
      </div>
    </div>
    <div
      class="d-flex"
      style="border-bottom: 1px solid grey;"
    >
      <div class="col-4 optionBlock">
        <h4>Key elements</h4>
        <b-form-checkbox-group
          id="checkbox-group-3"
          v-model="selected"
          :options="options2"
          name="columns"
          class="checkbox-group"
          stacked
        />
        <!-- <label>WinRate</label>
        <v-select
          v-model="winrate"
          :options="option_winrate"
          :disabled="winrateSelectable"
          outlined
        /> -->
      </div>
      <div class="col-4 optionBlock">
        <h4>Phases</h4>
        <b-form-checkbox-group
          id="checkbox-group-8"
          v-model="selected"
          :options="options6"
          name="columns"
          class="checkbox-group"
          stacked
        />
      </div>
      <div class="col-4 optionBlock">
        <h4>Planning</h4>
        <b-form-checkbox-group
          id="checkbox-group-4"
          v-model="selected"
          :options="options4"
          name="columns"
          class="checkbox-group"
          stacked
        />
        <label>Phase Start Date</label>
        <v-select
          v-model="phaseStartDate"
          :options="option_phases"
          outlined
          multiple
          @input="onPhaseSelect(phaseStartDate, 1)"
        />
        <label>Phase End Date</label>
        <v-select
          v-model="phaseEndDate"
          class="pb-2"
          :options="option_phases"
          outlined
          multiple
          @input="onPhaseSelect(phaseEndDate, 2)"
        />
      </div>
    </div>
    <div class="d-flex">
      <div class="col-6 optionBlock">
        <h4>Meta</h4>
        <b-form-checkbox-group
          id="checkbox-group-5"
          v-model="selected"
          :options="options1"
          name="columns"
          class="checkbox-group"
          stacked
        />
      </div>
      <div class="col-6 optionBlock">
        <h4>Rationale</h4>
        <b-form-checkbox-group
          id="checkbox-group-6"
          v-model="selected"
          :options="options3"
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
import vSelect from 'vue-select'
// import moment from 'moment'

export default {
  components: {
    BButton,
    BFormCheckboxGroup,
    BModal,
    // BFormCheckbox,
    // BFormInput,
    vSelect
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
      phaseStartDate: 0,
      phaseEndDate: 0,
      selected: [],
      selectedPhaseStart: [],
      selectedPhaseEnd: [],
      winrateSelectable: false,
      isSelectedExId: false,
      isSelectedExSystem: false,
      mainOptions: [
        { text: 'Budget Demand', value: 'demand' },
        { text: 'Budget Engaged', value: 'engaged' },
        { text: 'Budget Real Estimated', value: 'realEstimated' },
        { text: 'Budget Authorized', value: 'authorized' },
        { text: 'Budget Spent', value: 'spent' },
        { text: 'Value', value: 'value' },
      ],
      options1: [
        { text: 'Description', value: 'description' },
        { text: 'Nomenclature System', value: 'nomenclatureSystem' },
        { text: 'System ID', value: 'systemId' },
        // { text: 'Portfolio', value: 'portfolio' },
        // { text: 'Program', value: 'program' },
        // { text: 'Project', value: 'project' },
        // { text: 'Sub project', value: 'subProject' },
      ],
      externalId: "JR-12345",
      externalSystem: ["Jira"],
      options2: [
        { text: 'Priority', value: 'priority' },
        { text: 'WinRate', value: 'winrate' }
      ],
      option_phases: this.$store.state.globalState.allPhaseTitleData,
      option_winrate: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
        36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 67, 68, 69, 70, 71, 72, 73, 74, 75,
        76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
      options3: [
        { text: 'Deadline', value: 'deadline' },
        { text: 'Nature of deadline', value: 'natDeadline' },
        { text: 'Customer Ex', value: 'customerEx' },
        { text: 'Sales Ex', value: 'salesEx' },
        { text: 'Scoring', value: 'scoring' },
        { text: 'ROI', value: 'roi' },
      ],
      options4: [
        { text: 'Next Phase', value: 'nextphase' },
        // { text: 'Phase start date', value: 'phaseStartDate' },
        // { text: 'Phase end date', value: 'phaseEndDate' },
      ],
      options5: [
        { text: 'Head of the product portfolio', value: 'portfolioHead' },
        { text: 'Product manager', value: 'productManager' },
        { text: 'Architect', value: 'architect' },
        { text: 'Head of program direction', value: 'directionHead' },
        { text: 'Program director', value: 'programDirector' },
        { text: 'Project manager', value: 'projectManager' },
        { text: 'Head of architect', value: 'architectHead' },
        { text: 'Sponsor', value: 'sponsor' },
        { text: 'Product line', value: 'productLine' },
      ],
      options6: [
        { text: 'Current Phase', value: 'currentPhase' },
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
      this.selectedPhase = []
      console.log(data)
    },
    handleSelectExIdChange() {
      console.log("ExId:", this.isSelectedExId)
    },
    handleSelectExSystemChange() {
      console.log("ExSystem:", this.isSelectedExSystem)
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handleSave() {
      if (this.selectedPhaseStart.length > 0) {
        this.selected.push(...this.selectedPhaseStart)
      } else {
        this.selected = this.selected.filter(item => item.indexOf('startdate') <= 0)
      }
      if (this.selectedPhaseEnd.length > 0) {
        this.selected.push(...this.selectedPhaseEnd)
      } else {
        this.selected = this.selected.filter(item => item.indexOf('enddate') <= 0)
      }
      this.selected = this.selected.filter((value, index, array) => array.indexOf(value) === index)
      this.$emit('columnChange', this.selected)
      this.$refs['my-modal'].hide()
    },
    onPhaseSelect(selectedPhase, type) {
      if (selectedPhase.length === 0) {
        if (type === 1) this.selectedPhaseStart = []
        if (type === 2) this.selectedPhaseEnd = []
      } else {
        selectedPhase.forEach(t => {
          let item = ''
          if (type === 1) {
            item = `${t.toLowerCase()}startdate`
            this.selectedPhaseStart.push(item)
          } else {
            item = `${t.toLowerCase()}enddate`
            this.selectedPhaseEnd.push(item)
          }
        })
      }
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
