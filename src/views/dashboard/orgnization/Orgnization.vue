<template>
  <b-card no-body footer-tag="footer" class="card-portfolio mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar justify-content-between">
          <div />
          <div>
            <b-button v-if="tabIndex === 0" variant="primary">
              <feather-icon icon="ArrowDownIcon" size="16" />&nbsp;
              <span>Import</span>
            </b-button>
            <b-button v-if="tabIndex === 0" class="ml-1" variant="primary">
              <feather-icon icon="UploadIcon" size="16" />&nbsp;
              <span>Export</span>
            </b-button>
            <!-- <b-button v-if="tabIndex === 0" v-b-modal.modal-edit-column class="ml-1"
              variant="primary">
              <feather-icon icon="EyeIcon" size="16" />&nbsp;
              <span>Edit Columns</span>
            </b-button> -->
            <b-button v-if="tabIndex === 0" class="ml-1" variant="primary">
              <feather-icon icon="EyeIcon" size="16" />&nbsp;
              <span>Edit Columns</span>
            </b-button>
            <b-button v-if="tabIndex === 0" class="ml-1" variant="primary">
              <feather-icon icon="Edit2Icon" size="16" />
              <span>Edit as table</span>
            </b-button>
            <b-button v-if="(tabIndex === 1)" v-b-modal.unit-reporting-update-modal class="ml-1" variant="primary">
              <feather-icon icon="RotateCwIcon" size="16" />&nbsp;
              <span>Update</span>
            </b-button>
            <b-button v-if="tabIndex === 1" class="ml-1" variant="primary">
              <feather-icon icon="UploadIcon" size="16" />&nbsp;
              <span>Export</span>
            </b-button>
            <b-button v-if="tabIndex === 2" class="ml-1" variant="primary">
              <feather-icon icon="UploadIcon" size="16" />&nbsp;
              <span>Export</span>
            </b-button>
            <b-button v-if="tabIndex === 2" class="ml-1" variant="primary">
              <feather-icon icon="CommandIcon" size="16" />&nbsp;
              Manage
            </b-button>
            <!-- <b-button class="ml-1" variant="primary">
              <feather-icon icon="ZapIcon" size="16" />&nbsp;
              <span>Configure</span>
            </b-button> -->
          </div>
          <!-- <b-button-group>
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
          </b-button-group> -->
        </div>
        <!-- <div v-if="tabIndex === 2" class="action-bar justify-content-between">
          <b-button variant="flat-primary" @click="handleUpdate">
            <feather-icon icon="RotateCwIcon" />
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
        <b-tab title="Demand" @click="onClickCPSelectBtn('demand')" :class="{ 'has-default-card-bg': !isChartView }">
          <Demand :data="itemsForReport" :fields="fieldsForReport" />
        </b-tab>
        <b-tab title="Reporting"
          @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')">
          <Reporting />
        </b-tab>
        <b-tab title="Control" @click="onClickCPSelectBtn('control-table')" class="no-action-bar">
          <Control :isChartView="isChartView" />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon icon="CalendarIcon" size="16" style="margin-right:3px" />
              <div style="white-space:nowrap">Period</div>
              <div class="ml-1">
                <b-form-input style="width:160px" id="popover-manual-1" readonly v-model="selectedMonth" />
                <b-popover placement="bottomleft" target="popover-manual-1" ref="popover" :show.sync="popoverShow">
                  <div v-click-outside="onClose" style="display:flex;">
                    <div class="mr-1">
                      <month-picker no-default style="width:300px" variant="dark"
                        @input="onRangeFromChange"></month-picker>
                    </div>
                    <div>
                      <month-picker no-default style="width:300px" variant="dark" @input="onRangeToChange"></month-picker>
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
            <!-- <b-button-group v-if="tabIndex === 1" class="ml-1">
              <b-button variant="outline-primary"
                :style="`background-color:${reportingState === 'cost' ? '#473ca3' : '#0000'}`"
                @click="onClickCPSelectBtn('reporting-cost', 'cost')">
                Cost
              </b-button>
              <b-button variant="outline-primary" @click="onClickCPSelectBtn('reporting-plan', 'plan')"
                :style="`background-color:${reportingState === 'plan' ? '#473ca3' : '#0000'}`">
                Plan
              </b-button>
            </b-button-group> -->
            <!-- <b-button v-if="tabIndex === 0" v-b-modal.modal-optimize class="ml-1" variant="primary">
              <feather-icon icon="ZapIcon" size="16" />
              <span>Optimize</span>
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
    <edit-columns-modal :checked-data="activeColumns" @columnChange="columnChange" />
    <optimize-modal />
    <Drawer @close="toggleCreateNewUnitDrawer" align="right" :closeable="false" :maskClosable="true">
      <div v-if="openCreateNewUnitDrawer">
        <CreateNewUnitDrawer />
      </div>
    </Drawer>
  </b-card>
</template>

<script>
import {
  BButton, BCard, BCardBody, BTabs, BTab, BFormInput, BPopover, BButtonGroup
} from 'bootstrap-vue'
import Drawer from "vue-simple-drawer"
import moment from 'moment'
import ClickOutside from 'vue-click-outside'
import { MonthPicker } from 'vue-month-picker'
import { isEmpty } from "@/views/utils"
import Demand from './components/Demand.vue'
import Reporting from './components/Reporting.vue'
import Control from './components/Control.vue'
import CreateModal from './modals/CreateModal.vue'
import EditColumnsModal from './modals/EditColumnsModal.vue'
import OptimizeModal from './modals/OptimizeModal.vue'
import CreateNewUnitDrawer from './modals/CreateNewUnitDrawer.vue'

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
    CreateModal,
    EditColumnsModal,
    OptimizeModal,
    MonthPicker,
    BFormInput,
    BPopover,
    CreateNewUnitDrawer,
    Drawer
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
      rangeDate: [],
      items: [
        {
          name: 'Quadruped robot',
          priority: 'Highest',
          budget: '1100',
          deadline: '06/01/2021',
          children: [
            {
              name: 'New format',
              priority: 'High',
              budget: '350',
              deadline: '06/01/2021',
            },
            {
              name: 'Enhanced motricity',
              priority: 'Highest',
              budget: '240',
              deadline: '03/28/2021',
            },
            {
              name: 'Enhanced authonomy',
              priority: 'Highest',
              budget: '350',
              deadline: '06/01/2021',
            },
            {
              name: 'Dual sourcing for Q',
              priority: 'Lowest',
              budget: '150',
              deadline: '12/31/2021',
            },
          ],
        },
        {
          name: 'micro robot observation nbc',
          priority: 'High',
          budget: '13633.69',
          deadline: '05/20/2018',
        },
        {
          name: 'handling robot',
          priority: 'Low',
          budget: '13076.28',
          deadline: '03/24/2018',
        },
        {
          name: 'power and programing station',
          priority: 'Lowest',
          budget: '12336.17',
          deadline: '12/03/2017',
        },
        {
          name: 'total',
          budget: '40146.14',
        }
      ],
      activeColumns: ['priority', 'budget', 'deadline'],
      defaultFields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
      fields: ['priority', 'budget', 'deadline'],
      itemsForDemand: [
        {
          name: 'Konatus Industries',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [
            {
              name: 'TEAM A',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM B',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM C',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM D',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM C',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM C',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM E',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
          ],
        },
        {
          name: 'SPACE HOLDER FOR ANOTHER BU',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [],
        },
      ],
      itemsForReport: [
        {
          name: 'Konatus Industries',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [
            {
              name: 'TEAM A',
              budget_team: '1390',
              budget_engaged: '601.9',
              real_estimated: '601.9',
            },
            {
              name: 'TEAM B',
              budget_team: '500',
              budget_engaged: '210.6',
              real_estimated: '210.6',
            },
            {
              name: 'TEAM C',
              budget_team: '500',
              budget_engaged: '210.6',
              real_estimated: '210.6',
            },
            {
              name: 'TEAM D',
              budget_team: '500',
              budget_engaged: '210.6',
              real_estimated: '210.6',
            },
          ],
        },
        {
          name: 'SPACE HOLDER FOR AN OTHER BU',
        },
        {
          name: 'total',
          budget_team: '5240',
          budget_engaged: '2241.2',
          real_estimated: '2241.2',
        }
      ],
      fieldsForReport: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, 'budget_team', 'budget_engaged', 'real_estimated', { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
      fieldForDemand: ['BUDGET of team', 'BUDGET engaged', 'Budget Real Engaged'],
      tabIndex: 0,
      isChartView: false,
      popoverShow: false,
      selectedMonth: `${new Date().getMonth() + 1} / ${new Date().getFullYear()} - ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`,
      rangeArray: []
    }
  },
  computed: {
    openCreateNewUnitDrawer() {
      return this.$store.state.globalState.openCreateNewUnitDrawer
    },
  },
  mounted() {
    this.fields = [...this.defaultFields]
    this.activeColumns.forEach((column, idx) => {
      this.fields.splice(idx + 1, 0, column)
    })
  },
  methods: {
    // ontabchange() {
    //   const urlArr = this.$route.path.split('/')
    //   const urls = ['demand', 'reporting-cost', 'reporting-plan', 'control-table']
    //   if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
    //     urlArr.pop()
    //     this.$router.push({ path: urlArr.join('/') })
    //   }
    // },
    toggleCreateNewUnitDrawer() {
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_DRAWER')
    },
    onClickCPSelectBtn(url, value) {
      if (value) this.reportingState = value
      const urlArr = this.$route.path.split('/')
      const urls = ['demand', 'reporting-cost', 'reporting-plan', 'control-table']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        this.$router.push({ path: urlArr.join('/').concat(`/${url}`) })
      } else {
        this.$router.push({ path: this.$route.path.concat(`/${url}`) })
      }
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
    onClose() {
      this.popoverShow = false
    },
    getToday() {
      return `Today ${moment().format('MM/DD/YYYY')}`
    },
    handleChangeViewMode(mode) {
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
    handleDemandUpdate() {
      this.$store.commit('orgnizationState/UPDATE_DATA')
    }
  },
  directives: {
    ClickOutside
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

@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
