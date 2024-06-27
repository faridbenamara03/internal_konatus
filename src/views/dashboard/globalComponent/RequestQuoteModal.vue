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
      class="accordion"
      role="tablist"
    >
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
            icon="ChevronUpIcon"
            size="24"
            class="muted-svg"
          />
        </b-button>
        <b-collapse
          :id="'collapse-' + item.id"
          visible
          accordion="my-accordion"
          role="tabpanel"
        >
          <div class="select-group">
            <div class="select-box">
              <label>Number of WE requested</label>
              <b-form-input
                v-model="item.requested_wes"
                placeholder="0"
              />
            </div>
            <div class="select-box">
              <label>Date</label>
              <b-form-datepicker
                :id="`start_date-datepicker`"
                v-model="modified_dates[idx]"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              />
            </div>
            <!-- <div class="select-box">
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
            </div> -->
          </div>
        </b-collapse>
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
        Request
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BCollapse, BFormInput, BModal, VBToggle, BFormDatepicker
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  directives: {
    'b-toggle': VBToggle,
  },
  components: {
    BButton,
    BCollapse,
    BFormInput,
    BModal,
    BFormDatepicker
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
      modified_dates: [],
      // data: [
      //   {
      //     id: 1,
      //     name: 'Job A'
      //   },
      //   {
      //     id: 2,
      //     name: 'Job B'
      //   },
      //   {
      //     id: 3,
      //     name: 'Job C'
      //   },
      //   {
      //     id: 4,
      //     name: 'Job D'
      //   },
      //   {
      //     id: 5,
      //     name: 'Job E'
      //   },
      //   {
      //     id: 6,
      //     name: 'Job F'
      //   },
      // ]
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handleSave() {
      this.$store.commit('globalState/SUBMIT_TEAM_REQUEST_QUOTE')
      this.showToast('success', 'Success Request Quote.')
      this.$refs['my-modal'].hide()
    },
    showToast(variant, title) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title,
          icon: 'BellIcon',
          text: null,
          variant,
        },
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
