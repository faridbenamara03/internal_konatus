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
                class="ml-1"
                variant="primary"
                @click="onDemandTableEditableClick"
              >
                <feather-icon
                  icon="Edit2Icon"
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
                v-if="updateIndex === true && reportingState === 'plan'"
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
                v-if="updateIndex === true && reportingState === 'plan'"
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
                v-if="updateIndex === true && reportingState === 'plan' && originIndex"
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
                v-if="updateIndex === true && reportingState === 'plan' && !originIndex"
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
              <b-button
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
            v-if="tableTitle"
            :otype="selectedNavType"
            :data="items"
            :fields="fields"
            :is-chart-view="isChartView"
          />
        </b-tab>
        <b-tab
          title="Reporting"
          class="no-action-bar"
          @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')"
        >
          <Reporting
            :data="items"
            :otype="selectedNavType"
            :reporting-state="reportingState"
            :fields="fields"
            @update-clicked="handleToggleUpdateHide"
          />
        </b-tab>
        <b-tab
          title="Control"
          class="no-action-bar"
          @click="onClickCPSelectBtn('control')"
        >
          <Control
            :data="items.children"
            :controlData="controlData"
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
      <!-- <b-button v-b-modal.modal-create variant="primary">
        <feather-icon icon="PlusIcon" />
      </b-button> -->
      <b-button
        variant="primary"
        @click="toggle"
      >
        <feather-icon icon="PlusIcon" />
      </b-button>
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
      <div v-if="openEditPortfolioDrawer && selectedNavType === 'portfolio'">
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

export default {
  components: {
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
      activeColumns: ['priority', 'budget', 'deadline'],
      defaultFields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
      fields: [],
      tabIndex: 0,
      isChartView: false,
      popoverShow: false,
      selectedMonth: `${new Date().getMonth() + 1} / ${new Date().getFullYear()} - ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`,
      rangeArray: [],
      reportingState: 'cost',
      open: false,
      updateIndex: false,
      originIndex: true,
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
      return this.$store.state.portfolioState.demandTableEditable
    },
    demandData() {
      return this.$store.state.portfolioState.demandData
    },
    controlData() {
      return this.$store.state.portfolioState.controlData
    },
    reportingData() {
      return this.$store.state.portfolioState.reportingData
    }
  },
  mounted() {
    this.$store.dispatch('portfolioState/get_portfolio_reporting_data')
    this.$store.dispatch('portfolioState/get_portfolio_demand_data')
    this.$store.dispatch('portfolioState/get_portfolio_control_data')
    this.fields = [...this.defaultFields]
    this.activeColumns.forEach((column, idx) => {
      this.fields.splice(idx + 1, 0, column)
    })
  },
  methods: {
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
    toggleCreateNewPortfolioDrawer() {
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_DRAWER')
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
      if (!this.isUN(this.rangeArray[0]) && !this.isUN(this.rangeArray[1])) {
        this.popoverShow = false
      }
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
      this.$store.commit('portfolioState/UPDATE_DEMAND_TABLE_EDITABLE')
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
        this.$router.push({ path: urlArr.join('/').concat(`/${url}`) })
      } else {
        this.$router.push({ path: this.$route.path.concat(`/${url}`) })
      }
    },
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
$--simple-drawer-bg-color: #212739;
@import "~vue-simple-drawer/src/index";
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
