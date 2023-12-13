<template>
  <div
    class="demand-view"
    :class="{ 'has-chart': isChartView }"
  >
    <div
      v-if="!isChartView"
      class="portf-demand-view"
    >
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div class="part1">
          <!-- Consumer Robots -->
        </div>
        <div class="part2">
          <div
            v-for="(ft, fi) in c_fields"
            :key="fi"
            class="data-child mr-1 portf-uppercase pr-1"
            :style="`width:${100 / c_fields.length}%`"
          >
            {{ ft }}
          </div>
        </div>
      </div>
      <!-- <div v-if="otype !== 'program'"> -->
      <div>
        <div
          v-for="(item, index) in c_data"
          :key="index"
        >
          <div
            class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt"
            :class="{ 'inner-sdw': index === 0 }"
          >
            <div
              class="part1 portf-uppercase"
              style="cursor:pointer"
              @click="onCollapseCLick(index)"
            >
              <feather-icon
                v-if="item.phases"
                :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                size="16"
                class="mr-1"
              />
              {{ item.title }}
            </div>
            <div class="part2">
              <div
                v-for="(ft, fi) in c_fields"
                :key="fi"
                class="data-child mr-1 pr-1"
                :style="`width:${100 / c_fields.length}%`"
              >
                <span v-if="ft === 'priority'">{{ item[ft] }}</span>
                <span v-else-if="ft === 'deadline'">{{ dateFormat(item[ft]) }}</span>
                <span v-else>{{ formatCurrency(item[ft]) }}</span>
              </div>
            </div>
            <div class="part3 d-flex justify-content-center">
              <b-button
                variant="flat-primary"
                @click="toggleEditProgramDrawerOpen(item, 'project')"
              >
                <feather-icon icon="Edit2Icon" />
              </b-button>
              <b-button
                variant="flat-primary"
                @click="toggleCreateNewProgramDrawer('project')"
              >
                <feather-icon icon="PlusIcon" />
              </b-button>
              <!-- <b-button variant="flat-primary">
                <feather-icon icon="ChevronsRightIcon" />
              </b-button> -->
            </div>
          </div>
          <div v-if="opened === index">
            <div
              v-for="(item1, index1) in item.phases"
              :key="index1"
            >
              <div
                class="portf-row portf-table-row font-14 border-bottom-dm"
                :class="{ 'inner-sdw': index1 === 0 }"
              >
                <div
                  class="part1 portf-bold pl-2"
                  style="padding-top:7px"
                >
                  {{ item1.title }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="isChartView"
      class="d-flex flex-column w-100"
      style
    >
      <b-card
        v-for="(serie, idx) in c_series"
        :key="idx"
        no-body
        no-footer
        class="chart-card"
      >
        <b-row>
          <b-col>
            <h2>{{ serie[0].title }}</h2>
            <div class="d-flex justify-content-between align-center mt-1">
              <p class="text-uppercase m-0">
                Budget Portfolio
              </p>
              <p class="m-0">
                {{ formatCurrency(getTotalValue(serie)) }}
              </p>
            </div>
            <vue-apex-charts
              type="bar"
              height="248"
              :options="chartOptions"
              :series="serie"
            />
          </b-col>
          <b-col>
            <b-row cols="2">
              <b-col
                v-for="(color, index) in chartOptions.colors"
                :key="index"
                class="mb-1"
              >
                <div class="d-flex justify-content-between align-center mb-1">
                  <p class="text-capitalize m-0">
                    {{ chartOptions.xaxis.categories[index] }}
                  </p>
                  <p class="m-0">
                    {{ getPercent(serie[0].data[index], getTotalValue(serie)) }}%
                  </p>
                </div>
                <b-progress :max="getTotalValue(serie)">
                  <b-progress-bar
                    :value="serie[0].data[index]"
                    :style="{ 'background-color': color }"
                  />
                </b-progress>
                <p class="mt-1">
                  {{ formatCurrency(serie[0].data[index]) }}
                </p>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleDrawerOpen"
    >
      <div v-if="budgetDrawerOpen">
        <BudgetDrawer />
      </div>
    </Drawer>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleEditProgramDrawerOpen"
    >
      <div v-if="editProgramDrawerOpen">
        <EditProgramDrawer
          :data="selectedObject"
          :otype="selectedType"
        />
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
          :otype="selectedType"
        />
      </div>
    </Drawer>
  </div>
</template>

<script>
import {
  BButton, BCard, BRow, BCol, BProgress, BProgressBar
} from 'bootstrap-vue'
import moment from 'moment'
import Drawer from "vue-simple-drawer"
import VueApexCharts from 'vue-apexcharts'
import BudgetDrawer from '../../portfolio/modals/BudgetDrawer.vue'
import EditProgramDrawer from '../modals/EditProgramDrawer.vue'
import CreateNewProgramDrawer from '../modals/CreateNewProgramDrawer.vue'

export default {
  components: {
    BButton,
    BCard,
    BRow,
    BCol,
    BProgress,
    BProgressBar,
    VueApexCharts,
    Drawer,
    BudgetDrawer,
    EditProgramDrawer,
    CreateNewProgramDrawer
  },
  props: {
    data: {
      type: Object,
      default: () => { },
    },
    fields: {
      type: Array,
      default: () => [],
    },
    isChartView: {
      type: Boolean,
      default: false,
    },
    otype: {
      type: String
    }
  },
  data() {
    return {
      budgetDrawerOpen: false,
      editProgramDrawerOpen: false,
      selectedType: null,
      opened: 0,
      openedPj: 0,
      chartOptions: {
        chart: {
          type: 'bar',
          foreColor: 'rgba(255, 255, 255, 0.8)',
          toolbar: {
            show: false,
          },
        },
        grid: {
          borderColor: '#595E71',
          padding: {
            left: 50,
          },
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
        colors: ['#7367F0', '#D46D6D', '#BC00F9', '#00CFE8', '#0D6EFD', '#28C76F'],
        dataLabels: {
          enabled: true,
          formatter: val => `€${val}`
        },
        legend: {
          show: true,
        },
        tooltip: {
          enabled: true,
        },
        plotOptions: {
          bar: {
            distributed: true, // this line is mandatory
            horizontal: true,
          },
        },
        xaxis: {
          categories: ['budget', 'demand', 'quote + engaged', 'real estimated', 'authorised', 'spent'],
          labels: {
            formatter: val => `€${val}`
          }
        },
        yaxis: {
          labels: {
            show: true,
            align: 'left',
            offsetX: '0',
            style: {
              cssClass: 'text-uppercase',
            },
          },
        },
      },
    }
  },
  computed: {
    openCreateNewProgramDrawer() {
      return this.$store.state.globalState.openCreateNewProgramDrawer
    },
    c_fields() {
      return this.fields.slice(1, this.fields.length - 1)
    },
    demandTableEditable() {
      return this.$store.state.portfolioState.demandTableEditable
    },
    c_data() {
      if (this.data.children) {
        const ndt = this.data.children.map(t => {
          let budget = 0
          let engaged = 0
          let quote = 0
          let demand = 0
          let realEstimated = 0
          let authorised = 0
          let spent = 0
          if (t.children) {
            t.children.map(t1 => {
              budget += parseInt(t1.budget ? t1.budget : 0, 10)
              engaged += parseInt(t1.engaged ? t1.engaged : 0, 10)
              quote += parseInt(t1.quote ? t1.quote : 0, 10)
              demand += parseInt(t1.demand ? t1.demand : 0, 10)
              realEstimated += parseInt(t1.realEstimated ? t1.realEstimated : 0, 10)
              authorised += parseInt(t1.authorised ? t1.authorised : 0, 10)
              spent += parseInt(t1.spent ? t1.spent : 0, 10)
              return null
            })
          } else {
            budget = t.budget
            engaged = t.engaged
            quote = t.quote
            demand = t.demand
            realEstimated = t.realEstimated
            authorised = t.authorised
            spent = t.spent
          }
          const nd = { ...t }
          nd.budget = budget
          nd.engaged = engaged
          nd.quote = quote
          nd.demand = demand
          nd.realEstimated = realEstimated
          nd.authorised = authorised
          nd.spent = spent
          return nd
        })
        return ndt
      }
      return []
    },
    c_totalBudget() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.budget ? parseInt(t.budget, 10) : 0
      })
      return bd
    },
    c_totalEngaged() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.engaged ? parseInt(t.engaged, 10) : 0
      })
      return bd
    },
    c_totalQuote() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.quote ? parseInt(t.quote, 10) : 0
      })
      return bd
    },
    c_totalDemand() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.demand ? parseInt(t.demand, 10) : 0
      })
      return bd
    },
    c_totalReal() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.realEstimated ? parseInt(t.realEstimated, 10) : 0
      })
      return bd
    },
    c_totalSpent() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.spent ? parseInt(t.spent, 10) : 0
      })
      return bd
    },
    c_totalAuthor() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += t.authorised ? parseInt(t.authorised, 10) : 0
      })
      return bd
    },
    c_series() {
      return [
        [{
          title: 'Consumer Robots',
          data: [this.c_totalBudget, this.c_totalDemand, this.c_totalQuote + this.c_totalEngaged, this.c_totalReal, this.c_totalAuthor, this.c_totalSpent],
        }]
      ]
    }
  },
  methods: {
    toggleCreateNewProgramDrawer(type) {
      console.log("Selected type before update:", this.selectedType) // Debugging
      this.selectedType = type
      console.log("Selected type after update:", this.selectedType)
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_PROGRAM_DRAWER')
    },
    toggleDrawerOpen() {
      this.budgetDrawerOpen = !this.budgetDrawerOpen
    },
    toggleEditProgramDrawerOpen(item, type) {
      this.selectedObject = item
      this.selectedType = type
      this.editProgramDrawerOpen = !this.editProgramDrawerOpen
    },
    onCollapseCLick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
    },
    onCollapseProjectCLick(index) {
      if (index === this.openedPj) {
        this.openedPj = -1
      } else {
        this.openedPj = index
      }
    },
    dateFormat(date) {
      if (date) return moment(new Date(date)).format('MM-DD-YYYY')
      return null
    },
    formatCurrency(value) {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'EUR',
      }).format(value)
    },
    rowClass(item, type) {
      const colorClass = 'table-success'
      if (!item || type !== 'row') { return }

      // eslint-disable-next-line consistent-return
      if (item.title === 'total') { return colorClass }
    },
    getTotalValue(data) {
      let totalValue = 0
      data[0].data.forEach(val => {
        totalValue += val
      })
      return totalValue
    },
    getPercent(val, total) {
      return Math.round((val / total) * 100)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-portfolio-demand.scss';
</style>
