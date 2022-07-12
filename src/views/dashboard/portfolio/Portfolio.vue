<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar">
          <b-button-group>
            <b-button
              variant="outline-primary"
              :class="{'active': isChartView}"
              @click="handleChangeViewMode(true)"
            >
              <b-icon icon="bar-chart-line" />
            </b-button>
            <b-button
              variant="outline-primary"
              :class="{'active': !isChartView}"
              @click="handleChangeViewMode(false)"
            >
              <b-icon icon="table" />
            </b-button>
          </b-button-group>
          <b-button-group>
            <b-button
              variant="outline-primary"
            >
              <b-icon icon="pencil" />
            </b-button>
            <b-button
              variant="outline-primary"
            >
              <feather-icon
                icon="DollarSignIcon"
              />
            </b-button>
          </b-button-group>
        </div>
        <b-tab
          title="Demand"
          :class="{'has-default-card-bg': !isChartView}"
        >
          <Demand
            :data="items"
            :fields="fields"
            :is-chart-view="isChartView"
          />
        </b-tab>
        <b-tab
          title="Reporting"
        >
          <Reporting />
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
              v-if="!isChartView && tabIndex === 0"
              v-b-modal.modal-edit-column
              class="ml-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="EyeIcon"
                size="16"
              />
              <span>Edit Columns</span>
            </b-button>
            <b-button
              v-if="isChartView && tabIndex === 0"
              class="ml-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="Edit2Icon"
                size="16"
              />
              <span>Edit as table</span>
            </b-button>
            <b-button
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
    <edit-columns-modal
      :checked-data="activeColumns"
      @columnChange="columnChange"
    />
  </b-card>
</template>

<script>
import {
  BButton, BButtonGroup, BCard, BCardText, BCardBody, BTabs, BTab,
} from 'bootstrap-vue'
import moment from 'moment'
import Demand from './Demand.vue'
import Reporting from './Reporting.vue'
import CreateModal from './modals/CreateModal.vue'
import EditColumnsModal from './modals/EditColumnsModal.vue'

export default {
  components: {
    BButton,
    BButtonGroup,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
    CreateModal,
    Demand,
    EditColumnsModal,
    Reporting,
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
          priority: 'highest',
          budget: '1100',
          deadline: '06/01/2021',
          children: [
            {
              name: 'New format',
              priority: 'high',
              budget: '350',
              deadline: '06/01/2021',
            },
            {
              name: 'Enhanced motricity',
              priority: 'highest',
              budget: '240',
              deadline: '03/28/2021',
            },
            {
              name: 'Enhanced authonomy',
              priority: 'highest',
              budget: '350',
              deadline: '06/01/2021',
            },
            {
              name: 'Dual sourcing for Q',
              priority: 'lowest',
              budget: '150',
              deadline: '12/31/2021',
            },
          ],
        },
        {
          name: 'micro robot observation nbc',
          priority: 'high',
          budget: '13633.69',
          deadline: '05/20/2018',
        },
        {
          name: 'handling robot',
          priority: 'low',
          budget: '13076.28',
          deadline: '03/24/2018',
        },
        {
          name: 'power and programing station',
          priority: 'lowest',
          budget: '12336.17',
          deadline: '12/03/2017',
        },
        {
          name: 'total',
          budget: '40146.14',
        }],
      activeColumns: ['priority', 'budget', 'deadline'],
      defaultFields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
      fields: [],
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
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
