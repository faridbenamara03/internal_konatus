<template>
  <b-modal
    id="modal-optimize-show"
    ref="my-modal"
    title="optimize"
    centered
    no-fade
    hide-backdrop
    static
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title text-uppercase">
        optimize
      </h5>
      <div class="modal-actions">
        <b-button
          variant="outline-primary"
        >
          <span class="pr-1">Save as Hyp</span>
          <feather-icon
            icon="SaveIcon"
            size="18"
          />
        </b-button>
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
      v-if="isStatus==='initial'"
      class="optimize-modal-body"
    >
      <div class="flex-1">
        <div class="checkbox-slider-group">
          <b-form-checkbox
            v-model="isPriority"
            class="custom-control-primary mb-1"
          >
            Priority
          </b-form-checkbox>
          <b-form-input
            v-model="priorityRange"
            class="slider"
            type="range"
            min="0"
            max="1"
            step="0.25"
          />
        </div>
        <div class="checkbox-slider-group">
          <b-form-checkbox
            v-model="isLoad"
            class="custom-control-primary mb-1"
          >
            Load
          </b-form-checkbox>
          <b-form-input
            v-model="loadRange"
            class="slider"
            type="range"
            min="0"
            max="1"
            step="0.1"
          />
        </div>
        <div class="checkbox-slider-group">
          <b-form-checkbox
            v-model="isValue"
            class="custom-control-primary mb-1"
          >
            Value
          </b-form-checkbox>
          <b-form-input
            v-model="valueRange"
            class="slider"
            type="range"
            min="0"
            max="1"
            step="0.1"
            :disabled="!isValue"
          />
        </div>
      </div>
      <div class="flex-1">
        <v-select
          v-model="selectedPriority"
          :options="['Highest', 'High', 'Low', 'Lowest']"
          placeholder="Select Priority"
          outlined
          class="mb-2"
        />
        <div class="checkbox-slider-group">
          <b-form-checkbox
            v-model="isOngoingProject"
            class="custom-control-primary mb-1"
          >
            Affect ongoing projects
          </b-form-checkbox>
        </div>
        <div class="checkbox-slider-group">
          <b-form-checkbox
            v-model="isWinRate"
            class="custom-control-primary mb-1"
          >
            Win rate
          </b-form-checkbox>
          <b-form-input
            v-model="winRateRange"
            class="slider"
            type="range"
            min="0"
            max="100"
            step="1"
            :disabled="!isWinRate"
          />
        </div>
        <div class="checkbox-slider-group">
          <b-form-checkbox
            v-model="isProject"
            class="custom-control-primary mb-1"
          >
            Potential Project
          </b-form-checkbox>
          <b-form-input
            v-model="projectRange"
            class="slider"
            type="range"
            min="0"
            max="100"
            step="1"
            :disabled="!isProject"
          />
        </div>
      </div>
    </div>
    <div
      v-if="isStatus==='pending'"
      class="optimize-modal-body"
      style="height: 200px;justify-content: center;align-items: center;"
    >
      <div class="flex">
        <b-spinner
          id="spinner1"
          small
          label="Small Spinner"
          type="grow"
          variant="warning"
        />
        <b-spinner
          id="spinner2"
          small
          label="Small Spinner"
          type="grow"
          variant="warning"
        />
        <b-spinner
          id="spinner3"
          small
          label="Small Spinner"
          type="grow"
          variant="warning"
        />
      </div>
    </div>
    <div
      v-if="isStatus==='preview'"
      class="optimize-modal-body"
      style="flex-direction: column;"
    >
      <div class="flex">
        Changes will affect the projects:
      </div>
      <div
        v-for="(item1, index1) in data.affectProjects"
        :key="index1"
      >
        <div class="flex">
          {{ item1.title }} ({{ item1.value }})
        </div>
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
        v-if="isStatus==='initial'"
        variant="primary"
        @click="handleStart"
      >
        Start
      </b-button>
      <b-button
        v-if="isStatus==='preview'"
        variant="primary"
        @click="handlePreview"
      >
        Preview changes
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BModal, BSpinner, BFormCheckbox, BFormInput
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BModal,
    BSpinner,
    BFormCheckbox,
    BFormInput,
    vSelect,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      options: [
        { text: 'Priority', value: 'priority' },
        { text: 'Budget', value: 'budget' },
        { text: 'Deadline', value: 'deadline' },
        { text: 'Engaged', value: 'engaged' },
        { text: 'Quote', value: 'quote' },
      ],
      isPriority: true,
      isLoad: true,
      isValue: false,
      isProject: false,
      priorityRange: 0,
      loadRange: 0,
      valueRange: 0,
      projectRange: 0,
      winRateRange: 0,
      selectedPriority: null,
      isOngoingProject: false,
      isWinRate: false,
      isOtherOption: false,
      isStatus: this.$store.state.globalState.optimizeStates,
      affectProjects: this.$store.state.portfolioState.changeProjects
    }
  },
  mounted() {
    // console.log("TIS:", this.isStatus)
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
      this.$store.commit('globalState/UPDATE_OPTIMIZE_STATES', 'initial')
    },
    async handleStart() {
      this.$store.commit('globalState/UPDATE_OPTIMIZE_STATES', 'pending')
      this.isStatus = this.$store.state.globalState.optimizeStates
      const navObj = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/get_optimized_data', {
        data: {
          selectedPriority: this.selectedPriority,
          isOngoingProject: this.isOngoingProject,
          loadRange: this.loadRange,
          valueRange: this.valueRange,
          projectRange: this.projectRange,
          winRateRange: this.winRateRange,
          portId: navObj.id,
          type: navObj.type
        }
      })
      this.isStatus = this.$store.state.globalState.optimizeStates
    },
    handlePreview() {
      // this.$emit('columnChange', this.selected)
      this.$emit('toggleUpdate')
      this.$store.commit('globalState/UPDATE_OPTIMIZE_STATES', 'initial')
      this.$store.commit('globalState/UPDATE_OPTIMIZE_STATUES', 'optimise')
      this.isStatus = this.$store.state.globalState.optimizeStates
      this.$refs['my-modal'].hide()
    },
  },
}
</script>

<style>
  #spinner1 {
    animation-delay: 0s;
  }

  #spinner2 {
    animation-delay: 0.5s;
  }

  #spinner3 {
    animation-delay: 1s;
  }
</style>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
