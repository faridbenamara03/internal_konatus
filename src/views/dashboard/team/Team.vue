<template>
  <b-card no-body footer-tag="footer" class="card-portfolio card-project mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div v-if="tabIndex === 0" class="action-bar justify-content-between">
          <div></div>
          <!-- <b-button variant="flat-primary" @click="handleUpdateDemand">
            <feather-icon icon="RotateCwIcon" />
            Update
          </b-button> -->
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
        <!-- <div v-if="tabIndex === 1" class="action-bar">
          <b-button-group>
            <b-button variant="outline-primary" :class="{'active': !isChartView}" @click="handleChangeViewMode(false)">
              <b-icon icon="bar-chart-line" />
            </b-button>
            <b-button variant="outline-primary" :class="{'active': isChartView}" @click="handleChangeViewMode(true)">
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
        </div> -->
        <div v-if="tabIndex === 2" class="action-bar justify-content-between">
          <b-button variant="flat-primary" @click="handleUpdate">
            <feather-icon icon="RotateCwIcon" />
            Update
          </b-button>
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
              <span style="font-size:12px;" >
                <b-icon icon="diamond-fill" />
              </span>
              <!-- <layers-icon size="1x" class="custom-class" /> -->
              Estimated
            </b-button>
          </div>
        </div>
        <b-tab title="Demand">
          <Demand :data="c_demand_team_data" />
        </b-tab>
        <b-tab title="Reporting">
          <Reporting :is-chart-view="isChartView" />
          <!-- <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text> -->
        </b-tab>
        <b-tab title="Control">
          <Control :is-chart-view="isChartView" />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon icon="CalendarIcon" size="16" class="mr-1" />
              <span>{{ getToday() }}</span>
              <b-form-datepicker
                class="ml-1"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                id="example-datepicker"
                style="width:140px"
                placeholder="Select Date"
              />
            </div>
            <b-button-group v-if="(tabIndex === 1)" class="ml-1">
              <b-button variant="outline-primary">
                Cost
              </b-button>
              <b-button variant="outline-primary" >
                Plan
              </b-button>
            </b-button-group>
            <b-button v-if="tabIndex != 2" v-b-modal.modal-import class="ml-1" variant="outline-primary">
              <feather-icon icon="ArrowDownIcon" size="16" />
              <span>Import</span>
            </b-button>
            <b-button class="ml-1" variant="outline-primary">
              <feather-icon icon="UploadIcon" size="16" />
              <span>Export</span>
            </b-button>
            <b-button class="ml-1" variant="primary">
              <feather-icon icon="ZapIcon" size="16" />
              <span>Configure</span>
            </b-button>
            <!-- <b-button v-if="tabIndex === 0" class="ml-1" variant="primary">
              <feather-icon icon="MapIcon" size="16" />
              <span>Show Work Element To Quote</span>
            </b-button> -->
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
  BButton, BCard, BCardBody, BTabs, BTab, BIcon, BButtonGroup, BFormDatepicker
} from 'bootstrap-vue'
import { CalendarIcon, CircleIcon } from 'vue-feather-icons'
import moment from 'moment'
import Demand from './components/Demand.vue'
import Control from './components/Control.vue'
import Reporting from './components/Reporting.vue'
import CreateModal from './modals/CreateModal.vue'
import AddResourceModal from './modals/AddResourceModal.vue'

export default {
  components: {
    BFormDatepicker,
    BButtonGroup,
    BButton,
    BCard,
    BCardBody,
    BTabs,
    BTab,
    Demand,
    CircleIcon,
    CalendarIcon,
    Control,
    CreateModal,
    AddResourceModal,
    Reporting,
    BIcon
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tabIndex: 0,
      openActivityModal: false,
      selectedActivity: {},
      isChartView: false,
    }
  },
  computed: {
    c_demand_team_data() {
      return this.$store.state.globalState.demandTeamData
    }
  },
  methods: {
    getToday() {
      return `Today ${moment().format('MM/DD/YYYY')}`
    },
    handleChangeViewMode(mode) {
      this.isChartView = mode
    },
    handleUpdateDemand() {
      this.$store.commit('globalState/HANDLE_TEAM_DEMAND_UPDATE')
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
