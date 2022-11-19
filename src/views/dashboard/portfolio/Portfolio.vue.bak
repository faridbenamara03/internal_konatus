<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div
          v-if="tabIndex === 0"
          class="action-bar"
        >
          <div style="position:absolute;left:20px" class="portf-bold portf-uppercase color-white">
            {{ tableTtle }}
          </div>
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
          <div style="position:absolute;right:16px">
            <b-button
              @click="onDemandTableEditableClick"
              v-if="tabIndex === 0"
              class="mr-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="Edit2Icon"
                size="16"
              />
              <span>Edit as table</span>
            </b-button>
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
        </div>
        <b-tab
          title="Demand"
          :class="{'has-default-card-bg': !isChartView}"
        >
          <Demand
            v-if="tableTtle"
            :data="items"
            :fields="fields"
            :is-chart-view="isChartView"
          />
        </b-tab>
        <b-tab
          title="Reporting"
          class="no-action-bar"
        >
          <Reporting />
        </b-tab>
        <b-tab
          title="Control"
          class="no-action-bar"
        >
          <Control :data="items" :tableTitle="tableTtle" />
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
              v-if="tabIndex === 0"
              class="ml-1"
              variant="outline-primary"
            >
              <feather-icon
                icon="ArrowDownIcon"
                size="16"
              />
              <span>Import</span>
            </b-button>
            <b-button-group
              v-if="tabIndex === 1"
              class="ml-1"
            >
              <b-button
                variant="outline-primary"
              >
                Cost
              </b-button>
              <b-button
                variant="outline-primary"
              >
                Plan
              </b-button>
            </b-button-group>
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
            <b-button
              v-if="tabIndex === 2"
              v-b-modal.modal-optimize
              class="ml-1"
              variant="primary"
            >
              <feather-icon
                icon="ZapIcon"
                size="16"
              />
              <span>Optimize</span>
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
    <optimize-modal />
  </b-card>
</template>

<script>
import {
  BButton, BButtonGroup, BCard, BCardBody, BTabs, BTab,
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
      // items: this.$store.state.globalState.globalData[0].children[0].children,
      // items: this.$store.state.globalState.selectedNavObj,
      activeColumns: ['priority', 'budget', 'deadline'],
      defaultFields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
      fields: [],
      tabIndex: 0,
      isChartView: false,
    }
  },
  computed: {
    items() {
      return this.$store.state.globalState.selectedNavObj ? this.$store.state.globalState.selectedNavObj.children : []
    },
    tableTtle() {
      return this.$store.state.globalState.selectedNavObj ? this.$store.state.globalState.selectedNavObj.title : ''
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
    onDemandTableEditableClick() {
      this.$store.commit('portfolioState/UPDATE_DEMAND_TABLE_EDITABLE')
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
