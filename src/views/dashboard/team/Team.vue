<template>
  <b-card no-body footer-tag="footer" class="card-portfolio card-project mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div v-if="tabIndex === 0" class="action-bar justify-content-between">
          <b-button variant="flat-primary" @click="handleUpdate">
            <feather-icon icon="RotateCwIcon" />
            Update
          </b-button>
          <div class="d-flex action-group">
            <b-button variant="flat-primary">
              <feather-icon icon="BarChartIcon" />
              Priority
            </b-button>
            <b-button variant="flat-primary">
              <b-icon icon="door-closed" />
              Update
            </b-button>
            <b-button variant="flat-primary">
              <feather-icon icon="ArrowRightIcon" />
              Next Phase
            </b-button>
          </div>
        </div>
        <div v-if="tabIndex === 1" class="action-bar">
          <b-button-group>
            <b-button variant="outline-primary" :class="{'active': isChartView}" @click="handleChangeViewMode(true)">
              <b-icon icon="bar-chart-line" />
            </b-button>
            <b-button variant="outline-primary" :class="{'active': !isChartView}" @click="handleChangeViewMode(false)">
              <b-icon icon="table" />
            </b-button>
          </b-button-group>
          <b-button-group>
            <b-button variant="outline-primary">
              <b-icon icon="pencil" />
            </b-button>
            <b-button variant="outline-primary">
              <feather-icon icon="DollarSignIcon" />
            </b-button>
          </b-button-group>
        </div>
        <div v-if="tabIndex === 2" class="action-bar justify-content-between">
          <b-button variant="flat-primary" @click="handleUpdate">
            <feather-icon icon="RotateCwIcon" />
            Update
          </b-button>
          <b-button-group>
            <div v-if="resourceAddedT  === false">
              <b-button variant="outline-primary" :class="{'active': isChartView}" @click="handleChangeViewMode(false)">
                <b-icon icon="bar-chart-line" />
              </b-button>
              <b-button variant="outline-primary" :class="{'active': !isChartView}" @click="handleChangeViewMode(true)">
                <b-icon icon="table" />
              </b-button>
            </div>
          </b-button-group>
          <div class="d-flex action-group">
            <b-button variant="flat-primary">
              <circle-icon size="1x" class="custom-class" />
              Real
            </b-button>
            <b-button variant="flat-primary">
              <calendar-icon size="1x" class="custom-class" />
              Engaged
            </b-button>
            <b-button variant="flat-primary">
              <layers-icon size="1x" class="custom-class" />
              Estimated
            </b-button>
          </div>
        </div>
        <b-tab title="Demand">
          <Demand :data="team" />
        </b-tab>
        <b-tab title="Reporting">
          <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text>
        </b-tab>
        <b-tab title="Control">
          <Control :is-chart-view="isChartView" />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon icon="CalendarIcon" size="16" class="mr-1" />
              <span>{{ getToday() }}</span>
            </div>
            <b-button v-if="tabIndex != 2" v-b-modal.modal-import class="ml-1" variant="outline-primary">
              <feather-icon icon="ArrowDownIcon" size="16" />
              <span>Import</span>
            </b-button>
            <b-button class="ml-1" variant="outline-primary">
              <feather-icon icon="UploadIcon" size="16" />
              <span>Export</span>
            </b-button>
            <b-button v-if="tabIndex === 0" class="ml-1" variant="primary">
              <feather-icon icon="MapIcon" size="16" />
              <span>Request Quote</span>
            </b-button>
            <b-button v-if="tabIndex === 2" class="ml-1" variant="primary" v-b-modal.modal-add-resource>
              <feather-icon icon="UserPlusIcon" size="16" />
              <span>Add Resource</span>
            </b-button>
          </div>
        </template>
      </b-tabs>
    </b-card-body>
    <template #footer>
      <b-button v-b-modal.modal-create variant="primary">
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
    <create-modal />
    <add-resource-modal />
  </b-card>
</template>

<script>
import {
  BButton, BButtonGroup, BCard, BCardText, BCardBody, BTabs, BTab,
} from 'bootstrap-vue'
import { CalendarIcon, LayersIcon, CircleIcon } from 'vue-feather-icons'
import moment from 'moment'
import Demand from './components/Demand.vue'
import Control from './components/Control.vue'
import CreateModal from './modals/CreateModal.vue'
import AddResourceModal from './modals/AddResourceModal.vue'

export default {
  components: {
    BButtonGroup,
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
    Demand,
    CircleIcon,
    CalendarIcon,
    LayersIcon,
    Control,
    CreateModal,
    AddResourceModal
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
      isChartView: false,
    }
  },
  computed: {
    resourceAddedT() {
      return this.$store.state.teamState.resourceAdded
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
    handleChangeViewMode(mode) {
      this.isChartView = mode
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
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
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
