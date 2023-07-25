<template>
  <b-modal
    id="modal-optimize"
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
    <div class="optimize-modal-body">
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
            step="0.1"
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
            v-model="isOtherOption"
            class="custom-control-primary mb-1"
          >
            Other option here
          </b-form-checkbox>
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
        variant="primary"
        @click="handleSave"
      >
        Start
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BFormCheckbox, BFormInput, BModal,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormCheckbox,
    BFormInput,
    BModal,
    vSelect,
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
      priorityRange: 0,
      loadRange: 0,
      valueRange: 0,
      selectedPriority: null,
      isOngoingProject: false,
      isOtherOption: false,
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
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
