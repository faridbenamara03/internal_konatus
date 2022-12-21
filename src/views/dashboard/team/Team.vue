<template>
  <b-card no-body footer-tag="footer" class="card-portfolio card-project mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar justify-content-between">
          <div>
            <div v-if="tabIndex === 2" class="justify-content-between">
              <b-button variant="flat-primary">
                <circle-icon size="1x" class="custom-class" />
                Real
              </b-button>
              <b-button variant="flat-primary">
                <calendar-icon size="1x" class="custom-class" />
                Engaged
              </b-button>
              <b-button variant="flat-primary">
                <span style="font-size:12px;">
                  <b-icon icon="diamond-fill" />
                </span>
                Estimated
              </b-button>
            </div>
          </div>
          <div class="d-flex action-group">
            <!-- <b-button variant="primary">
              <feather-icon icon="BarChartIcon" />&nbsp;
              Priority
            </b-button> -->
            <b-button v-if="(tabIndex == 0)" v-b-modal.modal-import class="ml-1" variant="primary">
              <feather-icon icon="ArrowDownIcon" size="16" />&nbsp;
              <span>Import</span>
            </b-button>
            <b-button v-if="(tabIndex == 0)" @click="handleUpdateDemand" class="ml-1" variant="primary">
              <feather-icon icon="RotateCwIcon" size="16" />&nbsp;
              <span>Update</span>
            </b-button>
            <b-button v-if="(tabIndex == 1)" class="ml-1" variant="primary">
              <feather-icon icon="RotateCwIcon" size="16" />&nbsp;
              <span>Update</span>
            </b-button>
            <!-- <b-button class="ml-1" variant="primary">
              <feather-icon icon="UploadIcon" size="16" />&nbsp;
              <span>Export</span>
            </b-button>
            <b-button class="ml-1" variant="primary">
              <feather-icon icon="ZapIcon" size="16" />&nbsp;
              <span>Configure</span>
            </b-button> -->
            <b-button v-if="tabIndex === 2" class="ml-1" variant="primary" v-b-modal.modal-add-resource>
              <feather-icon icon="UserPlusIcon" size="16" />&nbsp;
              <span>Add Resource</span>
            </b-button>
            <!-- <b-button variant="flat-primary">
              <b-icon icon="door-closed" />
              Update
            </b-button>
            <b-button variant="flat-primary">
              <feather-icon icon="ArrowRightIcon" />&nbsp;
              Next Phase
            </b-button> -->
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
        <b-tab title="Demand" @click="onClickCPSelectBtn('demand')">
          <Demand :data="c_demand_team_data" />
        </b-tab>
        <b-tab title="Reporting"
          @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')">
          <Reporting :reportingState="reportingState" />
          <!-- <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text> -->
        </b-tab>
        <b-tab title="Control" @click="onClickCPSelectBtn('control-table')">
          <Control :is-chart-view="isChartView" />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon icon="CalendarIcon" size="16" style="margin-right:3px" />
              <span>Period</span>
              <div class="ml-1">
                <b-form-input style="width:160px" id="popover-manual-1" readonly v-model="selectedMonth"/>
                <b-popover
                  placement="bottomleft"
                  target="popover-manual-1"
                  ref="popover"
                  :show.sync="popoverShow"
                >
                  <div v-click-outside="onClose" style="display:flex;">
                    <div class="mr-1">
                      <month-picker no-default style="width:300px" variant="dark" @input="onRangeChange"></month-picker>
                    </div>
                    <div>
                      <month-picker no-default style="width:300px" variant="dark" @input="onRangeChange"></month-picker>
                    </div>
                  </div>
                </b-popover>
              </div>
            </div>
            <b-button-group v-if="(tabIndex === 2)" class="ml-1">
              <b-button variant="outline-primary" :style="`background-color:${isChartView ? '#473ca3' : '#0000'}`"
                @click="handleChangeViewMode(true)">
                Chart
              </b-button>
              <b-button variant="outline-primary" :style="`background-color:${!isChartView ? '#473ca3' : '#0000'}`"
                @click="handleChangeViewMode(false)">
                Table
              </b-button>
            </b-button-group>
            <b-button-group v-if="(tabIndex === 1)" class="ml-1">
              <b-button variant="outline-primary" @click="onClickCPSelectBtn('reporting-cost', 'cost')"
                :style="`background-color:${reportingState === 'cost' ? '#473ca3' : '#0000'}`">
                Cost
              </b-button>
              <b-button variant="outline-primary" @click="onClickCPSelectBtn('reporting-plan', 'plan')"
                :style="`background-color:${reportingState === 'plan' ? '#473ca3' : '#0000'}`">
                Plan
              </b-button>
            </b-button-group>
            <!-- <b-button v-if="tabIndex === 0" class="ml-1" variant="primary">
              <feather-icon icon="MapIcon" size="16" />&nbsp;
              <span>Show Work Element To Quote</span>
            </b-button> -->
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
  BButton, BCard, BCardBody, BTabs, BTab, BIcon, BButtonGroup, BPopover, BFormInput
} from 'bootstrap-vue'
import { CalendarIcon, CircleIcon } from 'vue-feather-icons'
import moment from 'moment'
import ClickOutside from 'vue-click-outside'
import { MonthPicker } from 'vue-month-picker'
import Demand from './components/Demand.vue'
import Control from './components/Control.vue'
import Reporting from './components/Reporting.vue'
import CreateModal from './modals/CreateModal.vue'
import AddResourceModal from './modals/AddResourceModal.vue'

export default {
  components: {
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
    BIcon,
    MonthPicker,
    BFormInput,
    BPopover,
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
      popoverShow: false,
      selectedMonth: `${new Date().getMonth()} / ${new Date().getFullYear()} - ${new Date().getMonth()} / ${new Date().getFullYear()}`,
      rangeArray: [],
      reportingState: 'cost',
    }
  },
  computed: {
    c_demand_team_data() {
      return this.$store.state.globalState.demandTeamData
    }
  },
  methods: {
    onClickCPSelectBtn(url, value) {
      if (value) this.reportingState = value
      const urlArr = this.$route.path.split('/')
      const urls = ['demand', 'reporting-cost', 'reporting-plan', 'control-table', 'control-chart']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        this.$router.push({ path: urlArr.join('/').concat(`/${url}`) })
      } else {
        this.$router.push({ path: this.$route.path.concat(`/${url}`) })
      }
    },
    // ontabchange() {
    //   const urlArr = this.$route.path.split('/')
    //   const urls = ['demand', 'reporting-cost', 'reporting-plan', 'control-table', 'control-chart']
    //   if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
    //     urlArr.pop()
    //     this.$router.push({ path: urlArr.join('/') })
    //   }
    // },
    onRangeChange(value) {
      if (this.rangeArray.length === 2) this.rangeArray = []
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray.push(v)
      this.selectedMonth = this.rangeArray.join(' - ')
      if (this.rangeArray.length === 2) {
        this.popoverShow = false
        this.$store.commit('globalState/ON_RANGE_CHANGE', value)
      }
    },
    onClose() {
      this.popoverShow = false
    },
    getToday() {
      return `Today ${moment().format('MM/DD/YYYY')}`
    },
    handleChangeViewMode(mode) {
      this.isChartView = mode
      const urlArr = this.$route.path.split('/')
      const urls = ['demand', 'reporting-cost', 'reporting-plan', 'control-chart', 'control-table']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        this.$router.push({ path: urlArr.join('/').concat(mode ? '/control-chart' : '/control-table') })
      } else {
        this.$router.push({ path: this.$route.path.concat(mode ? '/control-chart' : '/control-table') })
      }
    },
    handleUpdateDemand() {
      this.$store.commit('globalState/HANDLE_TEAM_DEMAND_UPDATE')
    },
  },
  directives: {
    ClickOutside
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
