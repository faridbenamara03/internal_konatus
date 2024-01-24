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
      <div class="col-6 optionBlock">
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
      <div class="col-6 optionBlock">
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
          :disabled="selected.includes('phase') ? true : false"
          @input="onPhaseSelect(phaseStartDate, 1)"
        />
        <label>Phase End Date</label>
        <v-select
          v-model="phaseEndDate"
          class="pb-2"
          :options="option_phases"
          outlined
          multiple
          :disabled="selected.includes('phase') ? true : false"
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
        <!-- <div class="d-flex">
          <div class="col-1">
            <b-form-checkbox
              v-model="isSelectedExSystem"
              name="check-button"
              inline
              @change="handleSelectExSystemChange"
            />
          </div>
          <div class="col-11">
            <v-select
              v-model="externalSystem"
              :options="['SAP', 'Jira', 'Konatus']"
              placeholder="Select External System"
              :disabled="isSelectedExSystem"
              outlined
              multiple
            />
          </div>
        </div> -->
        <!-- <div class="d-flex">
          <div class="col-1 mt-2">
            <b-form-checkbox
              v-model="isSelectedExId"
              name="check-button"
              inline
              @change="handleSelectExIdChange"
            />
          </div>
          <div class="col-11">
            <b-form-input
              v-model="externalId"
              placeholder="Input External Activity Id"
              class="mt-2"
              :disabled="isSelectedExId"
            />
          </div>
        </div> -->
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
      winrateSelectable: false,
      isSelectedExId: false,
      isSelectedExSystem: false,
      mainOptions: [
        // { text: 'Budget', value: 'budget' },
        { text: 'Budget Demand', value: 'budget_demand' },
        { text: 'Budget Engaged', value: 'budget_engaged' },
        { text: 'Budget Real Estimated', value: 'budget_realEstimated' },
        { text: 'Budget Authorized', value: 'budget_authorized' },
        { text: 'Budget Spent', value: 'budget_spent' },
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
      // option_phases: this.$store.state.globalState.allPhaseTitleData,
      option_phases: ['Not Selected', 'phase1', 'phase2', 'phase3', 'phase4', 'phase5', 'phase6', 'phase7', 'phase8', 'phase9', 'phase10'],
      option_winrate: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
        36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 67, 68, 69, 70, 71, 72, 73, 74, 75,
        76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100],
      options3: [
        { text: 'Product Deadline', value: 'deadline' },
        { text: 'Nature of deadline', value: 'natureOfDeadline' },
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
      ]
    }
  },
  mounted() {
    this.selected = this.checkedData
  },
  methods: {
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
      this.$emit('columnChange', this.selected)
      this.$refs['my-modal'].hide()
    },
    onPhaseSelect(selectedPhase, type) {
      if (selectedPhase !== "Not Selected") {
        this.winrate = 100
        this.winrateSelectable = true
        if (!this.selected.includes('phaseStartDate')) {
          this.selected.push('phaseStartDate')
        }
        if (!this.selected.includes('phaseEndDate')) {
            this.selected.push('phaseEndDate')
        }
      } else {
        this.winrate = 0
        this.winrateSelectable = false
        if (type === 1) {
          if (!this.selected.includes('phaseStartDate')) {
            this.selected.push('phaseStartDate')
          }
        } else if (!this.selected.includes('phaseEndDate')) {
            this.selected.push('phaseEndDate')
        }
      }
      const { allPhaseData } = this.$store.state.globalState
      const selectedData = allPhaseData.filter(phase => phase.title === selectedPhase)
      if (selectedData) {
        this.phaseStartDate = selectedData[0].start_date
        this.phaseEndDate = selectedData[0].end_date
      }
      if (!this.selected.includes('winrate')) {
        this.selected.push('winrate')
        this.$store.commit('globalState/SELECT_WIN_RATE', this.winrate)
      }
    }
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
