<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio card-project mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar justify-content-between">
          <div />
          <div class="d-flex action-group">
            <!-- <b-button variant="flat-primary">
              <feather-icon icon="BarChartIcon" />
              Priority
            </b-button> -->
            <div v-if="tabIndex === 0">
              <b-button
                v-if="demandTableEditable"
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="PlusIcon"
                  size="16"
                />&nbsp;
                <span>Add WE</span>
              </b-button>
              <b-button
                v-if="demandTableEditable"
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="Edit3Icon"
                  size="16"
                />&nbsp;
                <span>{{ decodeURIComponent("%3CO%3E update") }}</span>
              </b-button>
              <b-button
                v-if="demandTableEditable"
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="SunriseIcon"
                  size="16"
                />&nbsp;
                <span>{{ decodeURIComponent("%3CO%3E optimize") }}</span>
              </b-button>
              <b-button
                class="ml-1"
                variant="primary"
                @click="onDemandTableEditableClick"
              >
                <feather-icon
                  icon="EditIcon"
                  size="16"
                />&nbsp;
                <span>Edit as table</span>
              </b-button>
              <b-button
                v-if="!demandTableEditable"
                v-b-modal.modal-import
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="ArrowDownIcon"
                  size="16"
                />&nbsp;
                <span>Import</span>
              </b-button>
              <b-button
                v-if="!demandTableEditable"
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
                v-if="!demandTableEditable"
                v-b-modal.modal-request-quote
                :disabled="selectedWorkElement.length === 0"
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="MapIcon"
                  size="16"
                />&nbsp;
                <span>Request Quote</span>
              </b-button>
            </div>
            <div v-if="(tabIndex === 1)">
              <b-button
                v-if="reportingState === 'plan'"
                class="mr-1"
                variant="primary"
                @click="onReportingTableEditableClick"
              >
                <feather-icon
                  icon="EditIcon"
                  size="16"
                />&nbsp;
                <span>Edit as table</span>
              </b-button>
              <b-button
                v-if="!reportingTableEditable"
                v-b-modal.project-reporting-plan-update
                class="mr-1"
                variant="primary"
              >
                <feather-icon
                  icon="RotateCwIcon"
                  size="16"
                />&nbsp;
                <span>Update</span>
              </b-button>
              <b-button
                v-if="!reportingTableEditable"
                class="mr-1"
                variant="primary"
              >
                <feather-icon
                  icon="UploadIcon"
                  size="16"
                />&nbsp;
                <span>Export</span>
              </b-button>
              <b-button
                v-if="!reportingTableEditable"
                variant="primary"
              >
                <feather-icon
                  icon="ArrowRightIcon"
                  size="16"
                />&nbsp;
                Next Phase
              </b-button>
              <b-button
                v-if="reportingTableEditable"
                variant="primary"
              >
                <feather-icon
                  icon="RefreshCwIcon"
                  size="16"
                />&nbsp;
                Update and Recalculate
              </b-button>
              <b-button
                v-if="reportingTableEditable"
                variant="primary"
              >
                <feather-icon
                  icon="RotateCcwIcon"
                  size="16"
                />&nbsp;
                Recalculate
              </b-button>
            </div>
            <div v-if="tabIndex === 2">
              <b-button variant="primary">
                <feather-icon
                  icon="CommandIcon"
                  size="16"
                />&nbsp;
                Manage
              </b-button>
              <b-button
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="UploadIcon"
                  size="16"
                />&nbsp;
                <span>Export</span>
              </b-button>
            </div>
            <!-- <b-button variant="flat-primary">
              <b-icon icon="door-closed" />
              Update
            </b-button> -->
          </div>
        </div>
        <!-- <div v-if="tabIndex === 2" class="action-bar justify-content-between">
          <b-button variant="flat-primary" @click="handleUpdate">
            <feather-icon icon="RotateCwIcon" />&nbsp;
            Update
          </b-button>
          <b-button-group>
            <b-button variant="outline-primary" :class="{'active': !isChartView}" @click="handleChangeViewMode(false)">
              <b-icon icon="bar-chart-line" />
            </b-button>
            <b-button variant="outline-primary" :class="{'active': isChartView}" @click="handleChangeViewMode(true)">
              <b-icon icon="table" />
            </b-button>
          </b-button-group>
          <div class="d-flex action-group">
            <div class="d-flex">
              <div class="rounded"
                style="background-color:#8b3b4e;height:15px;width:15px;margin-top:3px;margin-right: 3px;" />
              <div>ENGAGED</div>
            </div>
            <div class="d-flex">
              <div class="ml-2 rounded"
                style="background-color:#448739;height:15px;width:15px;margin-top:3px;margin-right: 3px;" />
              <div>QUOTE</div>
            </div>
            <div class="d-flex">
              <div class="ml-2 rounded"
                style="background-color:#0a5666;height:15px;width:15px;margin-top:3px;margin-right: 3px;" />
              <div>ESTIMATED</div>
            </div>
          </div>
        </div> -->
        <b-tab
          title="Demand"
          :class="{'border-0': !projectElementTeamData.length}"
          @click="onClickCPSelectBtn(demandTabState === 'phase' ? 'demand-phase' : 'demand-team')"
        >
          <Demand
            v-if="!demandTableEditable"
            :team-data="projectElementTeamData"
            :tab-state="demandTabState"
            :phase-data="projectElementPhaseData"
          />
          <TableEditable
            v-if="demandTableEditable"
            :data="projectDemandEditableData"
            :fields="d_fields"
          />
        </b-tab>
        <b-tab
          title="Reporting"
          @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')"
        >
          <Reporting
            v-if="!reportingTableEditable"
            :reporting-state="reportingState"
          />
          <TableEditable
            v-if="reportingTableEditable"
            :data="projectReportingEditableData"
            :fields="r_fields"
          />
        </b-tab>
        <b-tab
          title="Control"
          @click="onClickCPSelectBtn('control')"
        >
          <Control />
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
            <b-button-group
              v-if="tabIndex === 0"
              class="ml-1"
            >
              <b-button
                variant="outline-primary"
                :style="`background:${demandTabState === 'team' ? '#473ca3' : '#fff0'}`"
                @click="handleDemandState('team')"
              >
                Team
              </b-button>
              <b-button
                variant="outline-primary"
                :style="`background:${demandTabState === 'phase' ? '#473ca3' : '#fff0'}`"
                @click="handleDemandState('phase')"
              >
                Phase
              </b-button>
            </b-button-group>
          </div>
        </template>
      </b-tabs>
    </b-card-body>
    <template #footer>
      <b-button
        variant="primary"
        class="fixed-create-button"
        @click="toggleCreateNewProjectDrawer"
      >
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleCreateNewPortfolioDrawer"
    >
      <div v-if="openCreateNewPortfolioDrawer">
        <CreateNewPortfolioDrawer />
      </div>
    </Drawer>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleEditPortfolioDrawer"
    >
      <div v-if="openEditPortfolioDrawer">
        <EditPortfolioDrawer />
      </div>
    </Drawer>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleCreateNewProjectDrawer"
    >
      <div v-if="openCreateNewProjectDrawer">
        <CreateProgramDrawer />
      </div>
    </Drawer>
    <modal-request-quote
      :data="projectElementTeamData"
      @onSubmit="handleRequestQuote"
    />
    <import-modal />
    <import-loader-modal />
    <InsertNewTaskModal />
  </b-card>
</template>

<script>
import {
  BButton,
  BCard,
  BCardBody,
  BTabs,
  BTab,
  BButtonGroup,
  BFormInput,
  BPopover
} from 'bootstrap-vue'
import moment from 'moment'
import ClickOutside from 'vue-click-outside'
import { MonthPicker } from 'vue-month-picker'
import { isEmpty } from "@/views/utils"
import Drawer from "vue-simple-drawer"
import ModalRequestQuote from '../globalComponent/RequestQuoteModal.vue'
import ImportModal from './modals/ImportModal.vue'
import ImportLoaderModal from './modals/ImportLoaderModal.vue'
import Demand from './components/Demand.vue'
import TableEditable from './components/TableEditable.vue'
import CreateProgramDrawer from '../program/modals/CreateNewProgramDrawer.vue'
import Reporting from './components/Reporting.vue'
import Control from './components/Control.vue'
import InsertNewTaskModal from '../program/modals/insertNewTaskModal.vue'
import CreateNewPortfolioDrawer from '../portfolio/modals/CreateNewPortfolioDrawer.vue'
import EditPortfolioDrawer from '../portfolio/modals/EditPortfolioDrawer.vue'

export default {
  components: {
    BButtonGroup,
    BButton,
    BCard,
    BCardBody,
    BTabs,
    BTab,
    TableEditable,
    Demand,
    Reporting,
    Control,
    ImportModal,
    ImportLoaderModal,
    ModalRequestQuote,
    Drawer,
    CreateProgramDrawer,
    MonthPicker,
    BFormInput,
    BPopover,
    InsertNewTaskModal,
    CreateNewPortfolioDrawer,
    EditPortfolioDrawer
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
      reportingState: 'cost',
      teams: [], // initial state is empty
      tabIndex: 0,
      openActivityModal: false,
      selectedActivity: {},
      demandTabState: 'team',
      projectElementTeamData: this.$store.state.globalState.teamsState,
      projectElementPhaseData: this.$store.state.globalState.phaseState,
      popoverShow: false,
      selectedMonth: `${new Date().getMonth() + 1} / ${new Date().getFullYear()} - ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`,
      rangeArray: [],
      arr4chart: [],
      isChartView: false,
      d_fields: [{ title: "portfolio", key: "portfolio" },
        { title: "program", key: "program" },
        { title: "name program", key: "program_name" },
        { title: "project id", key: "project" },
        { title: "name project", key: "project_name" },
        { title: "idactel", key: "idactel" },
        { title: "priority", key: "priority" },
        { title: "gate", key: "gate" },
        { title: "load D", key: "load_d" },
        { title: "load E", key: "load_e" },
        { title: "load R/E", key: "load_r_e" },
        { title: "rest to do R/E", key: "rest_todo_r_e" },
        { title: "fte D", key: "fte_d" },
        { title: "fte E", key: "fte_e" },
        { title: "fte R", key: "fte_r" },
        { title: "startdate D", key: "startdate_d" },
        { title: "enddate D", key: "enddate_d" },
        { title: "new startdate E", key: "new_startdate_e" },
        { title: "new enddate E", key: "new_enddate_e" },
      ],
      r_fields: [{ title: "portfolio", key: "portfolio" },
        { title: "program", key: "program" },
        { title: "name program", key: "program_name" },
        { title: "project id", key: "project" },
        { title: "name project", key: "project_name" },
        { title: "idactel", key: "idactel" },
        { title: "priority", key: "priority" },
        { title: "gate", key: "gate" },
        { title: "load E", key: "load_e" },
        { title: "load R/E", key: "load_r_e" },
        { title: "fte E", key: "fte_e" },
        { title: "fte R", key: "fte_r" },
        { title: "spent", key: "spent" },
        { title: "rest to do R/E", key: "rest_todo_r_e" },
        { title: "acc R/E", key: "acc_r_e" },
        { title: "startdate R", key: "startdate_r" },
        { title: "enddate R", key: "enddate_r" },
        { title: "new startdate R", key: "new_startdate_r" },
        { title: "new enddate R", key: "new_enddate_r" },
      ],
    }
  },
  computed: {
    selectedWorkElement() {
      return this.$store.state.globalState.selectedWorkElement
    },
    openCreateNewProjectDrawer() {
      return this.$store.state.globalState.openCreateNewProjectDrawer
    },
    openCreateNewPortfolioDrawer() {
      return this.$store.state.globalState.openCreateNewPortfolioDrawer
    },
    openEditPortfolioDrawer() {
      return this.$store.state.globalState.openEditPortfolioDrawer
    },
    demandTableEditable() {
      return this.$store.state.globalState.projectDemandTableEditable
    },
    reportingTableEditable() {
      return this.$store.state.globalState.projectReportingTableEditable && this.reportingState === 'plan'
    },
    projectDemandEditableData() {
      return this.$store.state.globalState.projectDemandEditableData
    },
    projectReportingEditableData() {
      return this.$store.state.globalState.projectReportingEditableData
    }
  },
  methods: {
    isUN(data) {
      return isEmpty(data)
    },
    toggleEditPortfolioDrawer() {
      this.$store.commit('globalState/TOGGLE_EDIT_PORTFOLIO_DRAWER')
    },
    async handleDone() {
      const navObj = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/get_from_selected_nav_id', {
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
    onDemandTableEditableClick() {
      this.$store.dispatch('globalState/get_project_demand_editable')
    },
    onReportingTableEditableClick() {
      this.$store.dispatch('globalState/get_project_reporting_editable')
    },
    toggleCreateNewProjectDrawer() {
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_PROGRAM_DRAWER')
    },
    toggleCreateNewPortfolioDrawer() {
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_PORTFOLIO_DRAWER')
    },
    onRangeFromChange(value) {
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray[0] = v
      this.arr4chart[0] = `${value.year}-${value.monthIndex}-15`
      this.selectedMonth = this.rangeArray.join(' - ')
      if (!this.isUN(this.rangeArray[0]) && !this.isUN(this.rangeArray[1])) {
        const betweenMonths = this.getBetweenMonthsArr(this.arr4chart[0], this.arr4chart[1])
        this.$store.commit('globalState/ON_RANGE_CHANGE', betweenMonths)
      }
    },
    onRangeToChange(value) {
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray[1] = v
      this.arr4chart[1] = `${value.year}-${value.monthIndex}-15`
      this.selectedMonth = this.rangeArray.join(' - ')
      // if (!this.isUN(this.rangeArray[0]) && !this.isUN(this.rangeArray[1])) {
      //   const betweenMonths = this.getBetweenMonthsArr(this.arr4chart[0], this.arr4chart[1])
      //   this.$store.commit('globalState/ON_RANGE_CHANGE', betweenMonths)
      //   this.popoverShow = false
      // }
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
    handleChangeViewMode(mode) {
      this.isChartView = mode
    },
    onClose() {
      this.popoverShow = false
    },
    getToday() {
      return `Today ${moment().format('MM/DD/YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    handleDemandState(tabState) {
      this.demandTabState = tabState
      const urlArr = this.$route.path.split('/')
      const urls = ['demand-team', 'demand-phase']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        const baseUrl = urlArr.join('/').concat(`/demand-${tabState}`)
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl) return
        this.$router.push({ path: baseUrl })
      } else {
        const baseUrl = this.$route.path.concat(`/demand-${tabState}`)
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl) return
        this.$router.push({ path: baseUrl })
      }
    },
    onClickCPSelectBtn(url, value) {
      if (value) this.reportingState = value
      const urlArr = this.$route.path.split('/')
      const urls = ['demand-team', 'demand-phase', 'reporting-cost', 'reporting-plan', 'control']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        const baseUrl = urlArr.join('/').concat(`/${url}`)
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl) return
        this.$router.push({ path: baseUrl })
      } else {
        const baseUrl = this.$route.path.concat(`/${url}`)
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl) return
        this.$router.push({ path: baseUrl })
      }
    },
  }
  // computed: {
  //   filteredTeam() {
  //     const filteredTeams = this.teams
  //     const result = []
  //     for (let index = 0; index < filteredTeams.length; index += 1) { // team loop
  //       const team = filteredTeams[index]
  //       const newphases = []
  //       const parsedIndex = []
  //       for (let jndex = 0; jndex < team.phases.length; jndex += 1) { // phase loop
  //         const newphase = []
  //         const phase = team.phases[jndex]
  //         if (parsedIndex.indexOf(jndex) === -1) {
  //           newphase.push(phase)
  //           parsedIndex.push(jndex)
  //         }
  //         //
  //         for (let kndex = 0; kndex < team.phases.length; kndex += 1) { // phase loop for compare
  //           const phaseToCompare = team.phases[kndex]
  //           if (phaseToCompare.phaseV === phase.phaseV && parsedIndex.indexOf(kndex) === -1 && jndex !== kndex) {
  //             newphase.push(phaseToCompare)
  //             parsedIndex.push(kndex)
  //           }
  //         }
  //         //
  //         if (newphase.length > 0) newphases.push(newphase)
  //       }
  //       team.phases = newphases
  //       result.push(team)
  //     }
  //     return result
  //   }
  // }
}
</script>

<style lang="scss">
.popover-body {
  position: absolute;
  left: -576px;
}
.fixed-create-button {
  position: fixed!important;;
  bottom: 20px!important; /* Distance from bottom */
  right: 80px!important; /* Distance from right */
  z-index: 1000;
}
.fixed-edit-button {
  position: fixed!important;;
  bottom: 20px!important; /* Distance from bottom */
  right: 140px!important; /* Distance from right */
  z-index: 1000;
}
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
