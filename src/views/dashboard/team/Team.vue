<template>
  <!-- v-if="!isUN(c_team_demand_data.phases)" -->
  <b-card
    v-if="!isUN(c_team_demand_data.children)"
    no-body
    footer-tag="footer"
    class="card-portfolio card-project mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar justify-content-between">
          <div>
            <div
              v-if="tabIndex === 2"
              class="justify-content-between"
            >
              <b-button variant="flat-primary">
                <circle-icon
                  size="1x"
                  class="custom-class"
                />
                Real
              </b-button>
              <b-button variant="flat-primary">
                <calendar-icon
                  size="1x"
                  class="custom-class"
                />
                Engaged
              </b-button>
              <b-button variant="flat-primary">
                <b-icon
                  icon="diamond-fill"
                  style="font-size:12px;"
                />
                Estimated
              </b-button>
            </div>
          </div>
          <div class="d-flex action-group">
            <!-- <b-button variant="primary">
              <feather-icon icon="BarChartIcon" />&nbsp;
              Priority
            </b-button> -->
            <b-button
              v-if="(tabIndex == 0)"
              class="ml-1"
              variant="primary"
            >
              <feather-icon
                icon="UploadIcon"
                size="16"
              />&nbsp;
              <span>Export</span>
            </b-button>
            <b-button
              v-if="(tabIndex == 0)"
              class="ml-1"
              variant="primary"
              @click="onDemandEditTableClick"
            >
              <feather-icon
                icon="EyeIcon"
                size="16"
              />&nbsp;
              <span>Edit as a Table</span>
            </b-button>
            <b-button
              v-if="(tabIndex == 1)"
              v-b-modal.team-reporting-plan-update
              class="ml-1"
              variant="primary"
            >
              <feather-icon
                icon="RotateCwIcon"
                size="16"
              />&nbsp;
              <span>Update</span>
            </b-button>
            <b-button
              v-if="(tabIndex == 1)"
              class="ml-1"
              variant="primary"
            >
              <feather-icon
                icon="UploadIcon"
                size="16"
              />&nbsp;
              <span>Export</span>
            </b-button>
            <b-button
              v-if="(tabIndex == 1)"
              class="ml-1"
              variant="primary"
              @click="onReportingEditTableClick"
            >
              <feather-icon
                icon="EyeIcon"
                size="16"
              />&nbsp;
              <span>Edit as a Table</span>
            </b-button>
            <b-button
              v-if="tabIndex === 2"
              class="ml-1"
              variant="primary"
            >
              <feather-icon
                icon="UploadIcon"
                size="16"
              />&nbsp;
              <span>Export</span>
            </b-button>
            <b-button
              v-if="tabIndex === 2"
              class="ml-1"
              variant="primary"
            >
              <feather-icon
                icon="CommandIcon"
                size="16"
              />&nbsp;
              Manage
            </b-button>
            <!-- <b-button class="ml-1" variant="primary">
              <feather-icon icon="ZapIcon" size="16" />&nbsp;
              <span>Configure</span>
            </b-button> -->
            <!-- <b-button v-if="tabIndex === 2 && !isChartView" class="ml-1" variant="primary" v-b-modal.modal-add-resource>
              <feather-icon icon="UserPlusIcon" size="16" />&nbsp;
              <span>Add Resource</span>
            </b-button> -->
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
        <b-tab
          title="Demand"
          @click="onClickCPSelectBtn('demand')"
        >
          <Demand
            :data="c_team_demand_data"
            :team-data="projectElementTeamData"
          />
        </b-tab>
        <b-tab
          title="Reporting"
          @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')"
        >
          <Reporting
            :data="c_team_reporting_data"
            :reporting-state="reportingState"
            :selectedmonth="selectedMonth"
          />
          <!-- <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text> -->
        </b-tab>
        <b-tab
          title="Control"
          @click="onClickCPSelectBtn('control-table')"
        >
          <Control :is-chart-view="isChartView" />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon
                icon="CalendarIcon"
                size="16"
                style="margin-right:3px"
              />
              <span>Period</span>
              <div class="ml-1">
                <b-form-input
                  id="popover-manual-1"
                  v-model="selectedMonth"
                  style="width:160px"
                  readonly
                />
                <b-popover
                  ref="popover"
                  placement="bottomleft"
                  target="popover-manual-1"
                  :show.sync="popoverShow"
                >
                  <div
                    v-click-outside="onClose"
                    style="display:flex;"
                  >
                    <div class="mr-1">
                      <month-picker
                        no-default
                        style="width:300px"
                        variant="dark"
                        @input="onRangeFromChange"
                      />
                    </div>
                    <div>
                      <month-picker
                        no-default
                        style="width:300px"
                        variant="dark"
                        @input="onRangeToChange"
                      />
                    </div>
                  </div>
                  <div>
                    <b-button
                      style="width: 100%"
                      variant="primary"
                      @click="handleDone"
                    >
                      Done
                    </b-button>
                  </div>
                </b-popover>
              </div>
            </div>
            <b-button-group
              v-if="(tabIndex === 2)"
              class="ml-1"
            >
              <b-button
                variant="outline-primary"
                :style="`background-color:${isChartView ? '#473ca3' : '#0000'}`"
                @click="handleChangeViewMode(true)"
              >
                Chart
              </b-button>
              <b-button
                variant="outline-primary"
                :style="`background-color:${!isChartView ? '#473ca3' : '#0000'}`"
                @click="handleChangeViewMode(false)"
              >
                Table
              </b-button>
            </b-button-group>
            <b-button-group
              v-if="(tabIndex === 1)"
              class="ml-1"
            >
              <b-button
                variant="outline-primary"
                :style="`background-color:${reportingState === 'cost' ? '#473ca3' : '#0000'}`"
                @click="onClickCPSelectBtn('reporting-cost', 'cost')"
              >
                Cost
              </b-button>
              <b-button
                variant="outline-primary"
                :style="`background-color:${reportingState === 'plan' ? '#473ca3' : '#0000'}`"
                @click="onClickCPSelectBtn('reporting-plan', 'plan')"
              >
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
      <b-button
        v-b-modal.modal-create
        variant="primary"
      >
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
    <create-modal />
    <add-resource-modal />
  </b-card>
  <div v-else>
    <Welcome />
  </div>
</template>

<script>
import {
  BButton, BCard, BCardBody, BTabs, BTab, BIcon, BButtonGroup, BPopover, BFormInput
} from 'bootstrap-vue'
import { CalendarIcon, CircleIcon } from 'vue-feather-icons'
import moment from 'moment'
import ClickOutside from 'vue-click-outside'
import { MonthPicker } from 'vue-month-picker'
import { isEmpty } from "@/views/utils"
import Welcome from '@/views/welcome.vue'
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
    Welcome
  },
  directives: {
    ClickOutside
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
      selectedMonth: `${moment().subtract(2, 'months').format('MM/YYYY')} - ${moment().format('MM/YYYY')}`,
      rangeArray: [],
      reportingState: 'cost',
      arr4chart: [],
      projectElementTeamData: this.$store.state.globalState.teamsState,
    }
  },
  computed: {
    c_team_demand_data() {
      const teamData = this.$store.state.teamState.teamDemandData
      if (teamData !== undefined && teamData !== null && teamData.length > 0) return teamData[0]
      return []
    },
    c_team_reporting_data() {
      return this.$store.state.teamState.teamReportingData
    }
  },
  mounted() {
    // this.$store.dispatch('teamState/get_team_demand_data')
    // this.$store.dispatch('teamState/get_team_reporting_data')
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
    async handleDone() {
      const navObj = this.$store.state.teamState.selectedNavObj
      await this.$store.dispatch('teamState/get_from_selected_nav_id', {
        data: {
          id: navObj.id,
          type: navObj.type,
          nav: navObj,
          startMonth: this.rangeArray[0],
          endMonth: this.rangeArray[1]
        }
      })
      if (!this.isUN(this.rangeArray[0]) && !this.isUN(this.rangeArray[1])) {
        this.popoverShow = false
      }
    },
    isUN(data) {
      return isEmpty(data)
    },
    onRangeFromChange(value) {
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray[0] = v
      this.selectedMonth = this.rangeArray.join(' - ')
      this.$store.commit('teamState/UPDATE_SELECTED_FROM_DATE', value)
    },
    onRangeToChange(value) {
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray[1] = v
      this.selectedMonth = this.rangeArray.join(' - ')
      this.$store.commit('teamState/UPDATE_SELECTED_TO_DATE', value)
    },
    onClose() {
      this.popoverShow = false
    },
    onDemandEditTableClick() {
      const baseUrl = '/organisation-job/demand'
      this.$router.push(baseUrl)
    },
    onReportingEditTableClick() {
      const baseUrl = '/organisation-job/reporting-plan'
      this.$router.push(baseUrl)
    },
    getBetweenMonthsArr(startD, endD) {
      const startDate = moment(startD)
      const endDate = moment(endD)
      const betweenMonths = []
      if (startDate <= endDate) {
        const date = startDate.startOf('month')
        while (date < endDate.endOf('month')) {
          betweenMonths.push(date.format('MM/YYYY'))
          date.add(1, 'month')
        }
      }
      return betweenMonths
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
  }
}
</script>

<style lang="scss">
.popover-body {
  position: absolute;
  left: -576px;
}
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
