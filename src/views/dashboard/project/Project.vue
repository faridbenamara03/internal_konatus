<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio card-project mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar justify-content-between">
          <b-button variant="flat-primary">
            <feather-icon
              icon="RotateCwIcon"
            />
            Update
          </b-button>
          <div class="d-flex action-group">
            <b-button variant="flat-primary">
              <feather-icon
                icon="BarChartIcon"
              />
              Priority
            </b-button>
            <b-button variant="flat-primary">
              <b-icon icon="door-closed" />
              Update
            </b-button>
            <b-button variant="flat-primary">
              <feather-icon
                icon="ArrowRightIcon"
              />
              Next Phase
            </b-button>
          </div>
        </div>
        <b-tab
          title="Demand"
          :class="{'border-0': !items.length}"
        >
          <div
            v-if="!items.length"
            class="no-data"
          >
            <feather-icon
              icon="FileIcon"
              size="48"
            />
            <p>No activities for this project yet.<br>
              Finish setting up the project by creating a elementary activity or importing your data in .wbs format</p>
          </div>
        </b-tab>
        <b-tab
          title="Reporting"
        >
          <p>Reporting</p>
        </b-tab>
        <b-tab
          title="Control"
        >
          <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text>
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon
                icon="CalendarIcon"
                size="16"
                class="mr-1"
              />
              <span>{{ getToday() }}</span>
            </div>
            <b-button
              class="ml-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="ArrowDownIcon"
                size="16"
              />
              <span>Import</span>
            </b-button>
            <b-button
              class="ml-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="UploadIcon"
                size="16"
              />
              <span>Export</span>
            </b-button>
            <b-button
              v-b-modal.modal-request-quote
              class="ml-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="MapIcon"
                size="16"
              />
              <span>Request Quote</span>
            </b-button>
          </div>
        </template>
      </b-tabs>
    </b-card-body>
    <template #footer>
      <b-button
        variant="primary"
      >
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
  </b-card>
</template>

<script>
import {
  BButton, BCard, BCardText, BCardBody, BTabs, BTab,
} from 'bootstrap-vue'
import moment from 'moment'

export default {
  components: {
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      items: [],
      tabIndex: 0,
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
