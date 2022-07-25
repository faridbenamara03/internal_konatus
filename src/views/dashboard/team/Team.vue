<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio card-project mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div
          v-if="tabIndex === 0"
          class="action-bar justify-content-between"
        >
          <b-button
            variant="flat-primary"
            @click="handleUpdate"
          >
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
        >
          <Demand :data="team" />
        </b-tab>
        <b-tab
          title="Reporting"
        >
          <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text>
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
              v-b-modal.modal-import
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
              class="ml-1"
              variant="primary"
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
import Demand from './components/Demand.vue'

export default {
  components: {
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
    Demand,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      team: {},
      tabIndex: 0,
      openActivityModal: false,
      selectedActivity: {},
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    handleUpdate() {
      this.team = {
        id: 1,
        name: 'team a',
        activities: null,
        estimate: null,
        demand: null,
        deadline: null,
        color: '#D68232',
        phases: [
          {
            phaseV: 1,
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '1.28.17.1.55',
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
          },
          {
            phaseV: 4,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
          },
          {
            phaseV: 5,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
          },
        ],
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
