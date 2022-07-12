<template>
  <b-modal
    id="modal-request-quote"
    ref="my-modal"
    title="Request Quote"
    centered
    no-fade
    hide-backdrop
    static
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Request Quote
      </h5>
      <div class="modal-actions">
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
      v-for="(item, idx) in data"
      :key="idx"
      class="collapse-zone"
    >
      <b-button
        v-b-toggle="'collapse-' + item.id"
        variant="flat-primary"
        class="collapse-toggle-btn"
      >
        <div class="d-flex align-items-center">
          <feather-icon
            icon="UsersIcon"
            size="24"
          />
          <p>{{ item.name }}</p>
        </div>
        <feather-icon
          icon="ChevronDownIcon"
          size="24"
          class="muted-svg"
        />
      </b-button>
      <b-collapse
        :id="'collapse-' + item.id"
      >
        <div class="select-group">
          <div class="select-box">
            <label>Number of Elementary Activity</label>
            <b-form-input
              v-model="item.activities"
              placeholder="0"
            />
          </div>
          <div class="select-box">
            <label>Current Estimate</label>
            <b-form-input
              v-model="item.estimate"
              placeholder="0"
            />
          </div>
          <div class="select-box">
            <label>Demand</label>
            <b-form-input
              v-model="item.demand"
              placeholder="New Demand"
            />
          </div>
          <div class="select-box">
            <label>New Deadline</label>
            <b-form-input
              v-model="item.deadline"
              placeholder="Deadline"
            />
          </div>
        </div>
      </b-collapse>
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
        Request
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BCollapse, BFormInput, BModal, VBToggle,
} from 'bootstrap-vue'

export default {
  directives: {
    'b-toggle': VBToggle,
  },
  components: {
    BButton,
    BCollapse,
    BFormInput,
    BModal,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      collapsed: [],
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handleSave() {
      this.$emit('onSubmit', this.data)
      this.$refs['my-modal'].hide()
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
