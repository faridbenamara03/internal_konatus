<template>
  <b-card no-body footer-tag="footer" class="card-portfolio mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <!-- <div v-if="tabIndex === 1" class="action-bar">
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
        </div> -->
        <b-button v-if="tabIndex === 0" variant="flat-primary" @click="handleDemandUpdate" style="margin:10px">
          <feather-icon icon="RotateCwIcon" />
          Update
        </b-button>
        <div v-if="tabIndex === 2" class="action-bar justify-content-between">
          <b-button variant="flat-primary" @click="handleUpdate">
            <feather-icon icon="RotateCwIcon" />
            Update
          </b-button>
          <b-button-group>
            <b-button variant="outline-primary" :class="{'active': isChartView}" @click="handleChangeViewMode(false)">
              <b-icon icon="bar-chart-line" />
            </b-button>
            <b-button variant="outline-primary" :class="{'active': !isChartView}" @click="handleChangeViewMode(true)">
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
        </div>
        <b-tab title="Demand" :class="{'has-default-card-bg': !isChartView}">
          <Demand :data="itemsForReport" :fields="fieldsForReport" />
        </b-tab>
        <b-tab title="Reporting" class="no-action-bar">
          <Reporting :data="itemsForReport" :fields="fieldsForReport" :is-chart-view="isChartView" />
        </b-tab>
        <b-tab title="Control" class="no-action-bar">
          <Control :data="items" :is-chart-view="isChartView" />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <b-button-group v-if="tabIndex === 1" class="ml-1">
              <b-button variant="outline-primary">
                Cost
              </b-button>
              <b-button variant="outline-primary" disabled style="background: grey">
                Plan
              </b-button>
            </b-button-group>
          </div>
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
            <!-- <b-button v-if="!isChartView && tabIndex === 1" v-b-modal.modal-edit-column class="ml-1"
              variant="outline-primary">
              <feather-icon icon="EyeIcon" size="16" />
              <span>Edit Columns</span>
            </b-button> -->
            <!-- <b-button v-if="isChartView && tabIndex === 0" class="ml-1" variant="outline-primary">
              <feather-icon icon="Edit2Icon" size="16" />
              <span>Edit as table</span>
            </b-button> -->
            <b-button v-if="tabIndex === 0" class="ml-1" variant="outline-primary">
              <feather-icon icon="ArrowDownIcon" size="16" />
              <span>Import</span>
            </b-button>
            <b-button class="ml-1" variant="outline-primary">
              <feather-icon icon="UploadIcon" size="16" />
              <span>Export</span>
            </b-button>
            <b-button v-if="tabIndex === 2 || tabIndex === 0" v-b-modal.modal-optimize class="ml-1" variant="primary">
              <feather-icon icon="ZapIcon" size="16" />
              <span>Optimize</span>
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
    <edit-columns-modal :checked-data="activeColumns" @columnChange="columnChange" />
    <optimize-modal />
  </b-card>
</template>

<script>
import {
  BButton, BButtonGroup, BCard, BCardBody, BTabs, BTab, BFormDatepicker
} from 'bootstrap-vue'
import moment from 'moment'
import Demand from './components/Demand.vue'
import Reporting from './components/Reporting.vue'
import Control from './components/Control.vue'
import CreateModal from './modals/CreateModal.vue'
import EditColumnsModal from './modals/EditColumnsModal.vue'
import OptimizeModal from './modals/OptimizeModal.vue'

export default {
  components: {
    BFormDatepicker,
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
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
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
          name: 'SPACE HOLDER FOR AN OTHER BU',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [
          ],
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
    }
  },
  mounted() {
    this.fields = [...this.defaultFields]
    this.activeColumns.forEach((column, idx) => {
      this.fields.splice(idx + 1, 0, column)
    })
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
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
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
