<template>
  <b-card
    v-if="!isUN(items.title)"
    no-body
    footer-tag="footer"
    class="card-portfolio mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar d-flex justify-content-between">
          <div class="portf-bold portf-uppercase color-white">
            <span v-if="tabIndex === 0">{{ tableTitle }}</span>
            <div
              v-if="updateIndex === true && reportingState === 'plan' && tabIndex === 1"
              style="display: flex;align-items: center;color: orange;"
            >
              <feather-icon
                icon="ZapIcon"
                size="16"
              />&nbsp;
              <span>Currently viewing the proposed optimised state of the data</span>
            </div>
          </div>
          <div>
            <div v-if="!isChartView && tabIndex === 0">
              <b-button
                v-if="!demandTableEditable"
                variant="primary"
                class="ml-1"
              >
                <feather-icon
                  icon="ArrowUpIcon"
                  size="16"
                />&nbsp;
                <span>Import Table</span>
              </b-button>
              <b-button
                v-if="!demandTableEditable"
                v-b-modal.modal-edit-column
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="EyeIcon"
                  size="16"
                />&nbsp;
                <span>Edit Columns</span>
              </b-button>
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
                <span>Update</span>
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
                <span>Optimize</span>
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
                variant="primary"
                class="ml-1"
              >
                <feather-icon
                  icon="ArrowDownIcon"
                  size="16"
                />&nbsp;
                <span>Export Table</span>
              </b-button>
            </div>
            <div v-if="tabIndex === 1">
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
              <b-button
                v-if="updateIndex === true && reportingState === 'plan' && !reportingTableEditable"
                class="ml-1"
                variant="primary"
                @click="onClickAction('accept')"
              >
                <feather-icon
                  icon="UpdateIcon"
                  size="16"
                />&nbsp;
                <span>Accept</span>
              </b-button>
              <b-button
                v-if="updateIndex === true && reportingState === 'plan' && !reportingTableEditable"
                class="ml-1"
                variant="primary"
                @click="onClickAction('reject')"
              >
                <feather-icon
                  icon="UpdateIcon"
                  size="16"
                />&nbsp;
                <span>Reject</span>
              </b-button>
              <b-button
                v-if="updateIndex === true && reportingState === 'plan' && originIndex && !reportingTableEditable"
                class="ml-1"
                variant="primary"
                @click="onClickAction('origin')"
              >
                <feather-icon
                  icon="UpdateIcon"
                  size="16"
                />&nbsp;
                <span>Show original</span>
              </b-button>
              <b-button
                v-if="updateIndex === true && reportingState === 'plan' && !originIndex && !reportingTableEditable"
                class="ml-1"
                variant="primary"
                @click="onClickAction('optimise')"
              >
                <feather-icon
                  icon="UpdateIcon"
                  size="16"
                />&nbsp;
                <span>Show optimised</span>
              </b-button>
              <!-- <b-button
                v-b-modal.portfolio-reporting-plan-update
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="EditIcon"
                  size="16"
                />&nbsp;
                <span>Edit as table</span>
              </b-button> -->
              <b-button
                v-if="!reportingTableEditable"
                v-b-modal.portfolio-reporting-plan-update
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
                v-if="!reportingTableEditable"
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
                v-if="!reportingTableEditable"
                v-b-modal.modal-edit-column
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="EyeIcon"
                  size="16"
                />&nbsp;
                <span>Edit Columns</span>
              </b-button>
            </div>
            <div v-if="(tabIndex === 2)">
              <b-button
                class="ml-1"
                variant="primary"
                @click="showOptimizeModal"
              >
                <feather-icon
                  icon="ZapIcon"
                  size="16"
                />&nbsp;
                <span>Optimize</span>
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
              <b-button
                v-b-modal.modal-edit-column
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="EyeIcon"
                  size="16"
                />&nbsp;
                <span>Edit Columns</span>
              </b-button>
            </div>
          </div>
        </div>
        <b-tab
          title="Demand"
          :class="{ 'has-default-card-bg': !isChartView }"
          @click="onClickCPSelectBtn(isChartView ? 'demand-chart' : 'demand-table')"
        >
          <Demand
            v-if="tableTitle && !demandTableEditable"
            :otype="selectedNavType"
            :data="demandData"
            :fields="fields"
            :is-chart-view="isChartView"
          />
          <TableEditable
            v-if="demandTableEditable"
            :data="projectDemandEditableData"
            :fields="d_fields"
          />
        </b-tab>
        <b-tab
          title="Reporting"
          class="no-action-bar"
          @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')"
        >
          <Reporting
            v-if="!reportingTableEditable"
            :data="reportingData"
            :otype="selectedNavType"
            :reporting-state="reportingState"
            :fields="fields"
            @update-clicked="handleToggleUpdateHide"
          />
          <TableEditable
            v-if="reportingTableEditable"
            :data="projectReportingEditableData"
            :fields="r_fields"
          />
        </b-tab>
        <b-tab
          title="Control"
          class="no-action-bar"
          @click="onClickCPSelectBtn('control')"
        >
          <Control
            :data="controlData"
            :table-title="tableTitle"
          />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon
                icon="CalendarIcon"
                size="16"
                style="margin-right:3px"
              />
              <span>Period</span> <!-- ?????-->
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
            <div class="ml-1">
              <b-button-group v-if="tabIndex === 0">
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
              <b-button-group v-if="tabIndex === 1">
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
            </div>
          </div>
        </template>
      </b-tabs>
    </b-card-body>
    <template #footer>
      <b-button
        variant="primary"
        class="fixed-create-button"
        @click="toggleCreateNewProgramDrawer"
      >
        <feather-icon icon="PlusIcon" />
      </b-button>
      <!-- <b-button
        variant="primary"
        class="fixed-edit-button"
        @click="toggleEditPortfolioDrawer"
      >
        <feather-icon icon="EditIcon" />
      </b-button> -->
    </template>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggle"
    >
      <div v-if="open">
        <CreateDrawer />
      </div>
    </Drawer>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleCreateNewProgramDrawer"
    >
      <div v-if="openCreateNewProgramDrawer">
        <CreateNewProgramDrawer
          :otype="project"
        />
      </div>
    </Drawer>
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
      <div v-if="openEditPortfolioDrawer && (selectedNavType === 'portfolio' || selectedNavType === 'company')">
        <EditPortfolioDrawer />
      </div>
    </Drawer>
    <optimize-modal
      ref="optimizeModal"
      @toggleUpdate="handleToggleUpdateShow"
      @columnChange="columnChange"
    />
    <edit-columns-modal
      :checked-data="activeColumns"
      @columnChange="columnChange"
    />
  </b-card>
  <div v-else>
    <Welcome />
  </div>
</template>

<script>
import {
  BButton, BButtonGroup, BCard, BCardBody, BTabs, BTab, BFormInput, BPopover
} from 'bootstrap-vue'
import ClickOutside from 'vue-click-outside'
import { MonthPicker } from 'vue-month-picker'
import Drawer from "vue-simple-drawer"
import 'flatpickr/dist/themes/dark.css'
import { isEmpty } from "@/views/utils"
import Welcome from '@/views/welcome.vue'
import Demand from './components/Demand.vue'
import Reporting from './components/Reporting.vue'
import Control from './components/Control.vue'
import CreateDrawer from './modals/CreateDrawer.vue'
import EditColumnsModal from './modals/EditColumnsModal.vue'
import OptimizeModal from './modals/OptimizeModal.vue'
import CreateNewPortfolioDrawer from './modals/CreateNewPortfolioDrawer.vue'
import EditPortfolioDrawer from './modals/EditPortfolioDrawer.vue'
import TableEditable from './components/TableEditable.vue'
import CreateNewProgramDrawer from '../program/modals/CreateNewProgramDrawer.vue'
// import EditProgramDrawer from '../program/modals/EditProgramDrawer.vue'

export default {
  components: {
    TableEditable,
    BButton,
    BButtonGroup,
    BCard,
    BCardBody,
    BTabs,
    BTab,
    Demand,
    Reporting,
    Control,
    EditColumnsModal,
    OptimizeModal,
    MonthPicker,
    BFormInput,
    BPopover,
    Welcome,
    Drawer,
    CreateDrawer,
    CreateNewPortfolioDrawer,
    EditPortfolioDrawer,
    // EditProgramDrawer,
    CreateNewProgramDrawer
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
      activeColumns: ['priority', 'demand', 'deadline'],
      defaultFields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
      fields: [],
      tabIndex: 0,
      isChartView: false,
      popoverShow: false,
      selectedMonth: `${new Date().getMonth() + 1} / ${new Date().getFullYear()} - ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`,
      rangeArray: [],
      reportingState: 'cost',
      open: false,
      openCreateNewProgramDrawer: false,
      openEditProgramDrawer: false,
      updateIndex: false,
      originIndex: true,
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
      ]
    }
  },
  computed: {
    openCreateNewPortfolioDrawer() {
      return this.$store.state.globalState.openCreateNewPortfolioDrawer
    },
    openEditPortfolioDrawer() {
      return this.$store.state.globalState.openEditPortfolioDrawer
    },
    items() {
      const { selectedNavObj } = this.$store.state.globalState
      return selectedNavObj
    },
    tableTitle() {
      const { selectedNavObj } = this.$store.state.globalState
      return selectedNavObj.type ? `${selectedNavObj.type}: ${selectedNavObj.title}` : ''
    },
    selectedNavType() {
      return this.$store.state.globalState.selectedNavObj?.type
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
    },
    demandData() {
      return this.$store.state.globalState.portfolioDemandData
    },
    controlData() {
      return this.$store.state.globalState.portfolioControlData
    },
    reportingData() {
      return this.$store.state.globalState.portfolioReportingData
    }
  },
  mounted() {
    // this.$store.dispatch('portfolioState/get_portfolio_demand_data', { portId: selectedNavObj.id, type: selectedNavObj.type })
    // this.$store.dispatch('portfolioState/get_portfolio_reporting_data')
    // this.$store.dispatch('portfolioState/get_portfolio_control_data')
    this.fields = [...this.defaultFields]
    this.activeColumns.forEach((column, idx) => {
      this.fields.splice(idx + 1, 0, column)
    })
  },
  methods: {
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
    showOptimizeModal() {
      this.$refs.optimizeModal.$refs['my-modal'].show()
    },
    toggle() {
      this.open = !this.open
    },
    handleToggleUpdateShow() {
      this.updateIndex = true
      this.onClickCPSelectBtn('reporting-plan', 'plan')

      let m = 0
      const stateCheck = setInterval(() => {
        const elements = document.getElementsByClassName('nav-link')
        let tableElement = null
        for (let i = 0; i < elements.length; i += 1) {
          if (elements[i].innerText.trim() === 'Reporting') {
            tableElement = elements[i]
            break
          }
        }
        if (tableElement) {
          tableElement.click()
        }
        m += 1
        if (m === 1) {
          clearInterval(stateCheck)
        }
      }, 500)
    },
    handleToggleUpdateHide() {
      this.updateIndex = false
    },
    toggleCreateNewProgramDrawer() {
      this.openCreateNewProgramDrawer = !this.openCreateNewProgramDrawer
    },
    toggleCreateNewPortfolioDrawer() {
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_PORTFOLIO_DRAWER')
    },
    toggleEditPortfolioDrawer() {
      this.$store.commit('globalState/TOGGLE_EDIT_PORTFOLIO_DRAWER')
    },
    isUN(data) {
      return isEmpty(data)
    },
    onRangeFromChange(value) {
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray[0] = v
      this.selectedMonth = this.rangeArray.join(' - ')
    },
    onRangeToChange(value) {
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray[1] = v
      this.selectedMonth = this.rangeArray.join(' - ')
    },
    handleChangeViewMode(mode) {
      const urlArr = this.$route.path.split('/')
      const urls = ['demand-table', 'demand-chart', 'reporting-cost', 'reporting-plan', 'control']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        this.$router.push({ path: urlArr.join('/').concat(mode ? '/demand-chart' : '/demand-table') })
      } else {
        this.$router.push({ path: this.$route.path.concat(mode ? '/demand-chart' : '/demand-table') })
      }
      this.isChartView = mode
    },
    columnChange(columns) {
      const temp = [...this.defaultFields]
      columns.forEach((column, idx) => {
        temp.splice(idx + 1, 0, column)
      })
      this.fields = temp
      this.activeColumns = columns
    },
    onDemandTableEditableClick() {
      // this.$store.dispatch('globalState/get_project_demand_editable')
      this.$store.commit('portfolioState/UPDATE_DEMAND_TABLE_EDITABLE')
    },
    onReportingTableEditableClick() {
      this.$store.dispatch('globalState/get_project_reporting_editable')
    },
    onClose() {
      this.popoverShow = false
    },
    onClickAction(value) {
      if (value === 'accept') {
        this.updateIndex = false
        this.$store.optimiseState = 'optimise'
        this.$store.commit('portfolioState/UPDATE_OPTIMIZE_STATUES', 'optimise')
      } else if (value === 'reject') {
        this.updateIndex = false
        this.$store.commit('portfolioState/UPDATE_OPTIMIZE_STATUES', 'origin')
        this.$store.optimiseState = 'origin'
      } else if (value === 'origin') {
        this.$store.optimiseState = 'origin'
        this.$store.commit('portfolioState/UPDATE_OPTIMIZE_STATUES', 'origin')
        this.originIndex = !this.originIndex
      } else if (value === 'optimise') {
        this.$store.optimiseState = 'optimise'
        this.originIndex = !this.originIndex
        this.$store.commit('portfolioState/UPDATE_OPTIMIZE_STATUES', 'optimise')
      }
    },
    onClickCPSelectBtn(url, value) {
      if (value) this.reportingState = value
      const urlArr = this.$route.path.split('/')
      const urls = ['demand-table', 'demand-chart', 'reporting-cost', 'reporting-plan', 'control']
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
    }
  }
}
</script>

<style lang="scss">
.popover-body {
  position: absolute;
  left: -576px;
}
.mask {
  background: #000 !important;
}
.fixed-create-button {
  position: fixed!important;;
  bottom: 20px!important; /* Distance from bottom */
  right: 140px!important; /* Distance from right */
  z-index: 1000;
}
.fixed-edit-button {
  position: fixed!important;;
  bottom: 20px!important; /* Distance from bottom */
  right: 80px!important; /* Distance from right */
  z-index: 1000;
}
$--simple-drawer-bg-color: #212739;
@import "~vue-simple-drawer/src/index";
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
