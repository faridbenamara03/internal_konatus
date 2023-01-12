<template>
  <b-card v-if="!isUN(items.title)" no-body footer-tag="footer" class="card-portfolio mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar d-flex justify-content-between">
          <div class="portf-bold portf-uppercase color-white">
            <span v-if="tabIndex === 0">{{ tableTtle }}</span>
          </div>
          <div>
            <div v-if="!isChartView && tabIndex === 0">
              <b-button v-if="!demandTableEditable" variant="primary">
                <feather-icon icon="UploadIcon" size="16" />&nbsp;
                <span>Import Table</span>
              </b-button>
              <b-button v-if="!demandTableEditable" v-b-modal.modal-edit-column class="ml-1"
                variant="primary">
                <feather-icon icon="EyeIcon" size="16" />&nbsp;
                <span>Edit Columns</span>
              </b-button>
              <b-button class="ml-1" @click="onDemandTableEditableClick" variant="primary">
                <feather-icon icon="Edit2Icon" size="16" />&nbsp;
                <span>Edit as table</span>
              </b-button>
            </div>
            <div v-if="tabIndex === 1">
              <b-button v-b-modal.modal-update class="ml-1" variant="primary">
                <feather-icon icon="RotateCwIcon" size="16" />&nbsp;
                <span>Update</span>
              </b-button>
              <b-button class="ml-1" variant="primary">
                <feather-icon icon="UploadIcon" size="16" />&nbsp;
                <span>Export</span>
              </b-button>
              <b-button v-if="reportingState === 'cost'" class="ml-1" v-b-modal.modal-edit-column
                variant="primary">
                <feather-icon icon="EyeIcon" size="16" />&nbsp;
                <span>Edit Columns</span>
              </b-button>
            </div>
            <div v-if="(tabIndex === 2)">
              <b-button v-b-modal.modal-optimize variant="primary">
                <feather-icon icon="ZapIcon" size="16" />&nbsp;
                <span>Optimize</span>
              </b-button>
              <b-button class="ml-1" variant="primary">
                <feather-icon icon="UploadIcon" size="16" />&nbsp;
                <span>Export</span>
              </b-button>
              <b-button v-if="reportingState === 'cost'" class="ml-1" v-b-modal.modal-edit-column
                variant="primary">
                <feather-icon icon="EyeIcon" size="16" />&nbsp;
                <span>Edit Columns</span>
              </b-button>
            </div>
            <!-- <b-button class="ml-1" variant="outline-primary">
              <feather-icon icon="ArrowDownIcon" size="16" />
              <span>Import</span>
            </b-button> -->
            <!-- <b-button-group>
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
            </b-button-group> -->
          </div>
        </div>
        <b-tab title="Demand" @click="onClickCPSelectBtn(isChartView ? 'demand-chart' : 'demand-table')"
          :class="{ 'has-default-card-bg': !isChartView }">
          <Demand v-if="tableTtle" :otype="selectedNavType" :data="items" :fields="fields"
            :is-chart-view="isChartView" />
        </b-tab>
        <b-tab title="Reporting"
          @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')"
          class="no-action-bar">
          <Reporting :data="items" :otype="selectedNavType" :reportingState="reportingState" />
        </b-tab>
        <b-tab title="Control" @click="onClickCPSelectBtn('control')" class="no-action-bar">
          <Control :data="items.children" :tableTitle="tableTtle" />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto pt-1 pb-1 actions">
            <div class="d-flex align-items-center" v-if="tabIndex !== 0">
              <feather-icon icon="CalendarIcon" size="16" style="margin-right:3px" />
              <span>Period</span>
              <div class="ml-1">
                <b-form-input style="width:160px" id="popover-manual-1" readonly v-model="selectedMonth" />
                <b-popover placement="bottomleft" target="popover-manual-1" ref="popover" :show.sync="popoverShow">
                  <div v-click-outside="onClose" style="display:flex;">
                    <div class="mr-1">
                      <month-picker no-default style="width:300px" variant="dark" @input="onRangeFromChange"></month-picker>
                    </div>
                    <div>
                      <month-picker no-default style="width:300px" variant="dark" @input="onRangeToChange"></month-picker>
                    </div>
                  </div>
                </b-popover>
              </div>
            </div>
            <div class="ml-1">
              <b-button-group v-if="tabIndex === 0">
                <b-button variant="outline-primary" :style="`background-color:${isChartView ? '#473ca3' : '#0000'}`"
                  @click="handleChangeViewMode(true)">
                  Chart
                </b-button>
                <b-button variant="outline-primary" :style="`background-color:${!isChartView ? '#473ca3' : '#0000'}`"
                  @click="handleChangeViewMode(false)">
                  Table
                </b-button>
              </b-button-group>
              <b-button-group v-if="tabIndex === 1">
                <b-button variant="outline-primary"
                  :style="`background-color:${reportingState === 'cost' ? '#473ca3' : '#0000'}`"
                  @click="onClickCPSelectBtn('reporting-cost', 'cost')">
                  Cost
                </b-button>
                <b-button variant="outline-primary"
                  :style="`background-color:${reportingState === 'plan' ? '#473ca3' : '#0000'}`"
                  @click="onClickCPSelectBtn('reporting-plan', 'plan')">
                  Plan
                </b-button>
              </b-button-group>
            </div>
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
import 'flatpickr/dist/themes/dark.css'
import { isEmpty } from "@/views/utils"
import Welcome from '@/views/welcome.vue'
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
    MonthPicker,
    BFormInput,
    BPopover,
    Welcome
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // items: this.$store.state.globalState.globalOperationData.children[0].children,
      // items: this.$store.state.globalState.selectedNavObj,
      activeColumns: ['priority', 'budget', 'deadline'],
      defaultFields: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
      fields: [],
      tabIndex: 0,
      isChartView: false,
      popoverShow: false,
      selectedMonth: `${new Date().getMonth() + 1} / ${new Date().getFullYear()} - ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`,
      rangeArray: [],
      reportingState: 'cost'
    }
  },
  computed: {
    items() {
      const { selectedNavObj } = this.$store.state.globalState
      return selectedNavObj
    },
    tableTtle() {
      const { selectedNavObj } = this.$store.state.globalState
      return selectedNavObj.type ? `${selectedNavObj.type}: ${selectedNavObj.title}` : ''
    },
    selectedNavType() {
      return this.$store.state.globalState.selectedNavObj?.type
    },
    demandTableEditable() {
      return this.$store.state.portfolioState.demandTableEditable
    },
  },
  mounted() {
    this.fields = [...this.defaultFields]
    this.activeColumns.forEach((column, idx) => {
      this.fields.splice(idx + 1, 0, column)
    })
  },
  methods: {
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
    // getToday() {
    //   return `Today ${moment().format('MM/DD/YYYY')}`
    // },
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
    // ontabchange() {
    //   const urlArr = this.$route.path.split('/')
    //   const urls = ['demand-table', 'demand-chart', 'reporting-cost', 'reporting-plan', 'control']
    //   if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
    //     urlArr.pop()
    //     this.$router.push({ path: urlArr.join('/') })
    //   }
    // },
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

@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
