<template>
  <b-modal
    id="modal-edit-column"
    ref="my-modal"
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
    <b-form-checkbox-group
      id="checkbox-group-1"
      v-model="selected"
      :options="options"
      name="columns"
      class="checkbox-group"
      stacked
    />
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
      options: [
        { text: 'Priority', value: 'priority' },
        { text: 'Budget', value: 'budget' },
        { text: 'Deadline', value: 'deadline' },
        { text: 'Engaged', value: 'engaged' },
        { text: 'Quote', value: 'quote' },
        { text: 'Demand', value: 'demand' },
        { text: 'Real_Estimated', value: 'realEstimated' },
        { text: 'Authorised', value: 'authorised' },
        { text: 'Spent', value: 'spent' },
      ],
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
