<template>
  <div
    class="demand-view"
    :class="{'has-chart': isChartView}"
  >
    <div
      v-if="!isChartView"
      class="portf-demand-view">
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div class="part1">
          <!-- Consumer Robots -->
        </div>
        <div class="part2" >
          <div class="data-child mr-1 portf-uppercase pr-1" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
            {{ ft }}
          </div>
        </div>
      </div>
      <div v-for="(item, index) in this.c_data" :key="index">
        <div class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt" :class="{'inner-sdw': index === 0}">
          <div class="part1 portf-uppercase" style="cursor:pointer" v-on:click="onCollapseCLick(index)">
            <feather-icon :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'" v-if="item.children" size="16" class="mr-1" />
            {{ item.title }}
          </div>
          <div class="part2" >
            <div class="data-child mr-1 pr-1" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
              <span v-if="ft === 'priority'">{{ item[ft] }}</span>
              <span v-else-if="ft === 'deadline'">{{ dateFormat(item[ft]) }}</span>
              <span v-else>{{ formatCurrency(item[ft]) }}</span>
            </div>
          </div>
        </div>
        <div v-if="opened === index">
          <div v-for="(item1, index1) in item.children" :key="index1">
            <div class="portf-row portf-table-row font-14 border-bottom-dm"  :class="{'inner-sdw': index1 === 0}">
              <div class="part1 portf-bold pl-2" style="padding-top:7px">
                {{ item1.title }}
              </div>
              <div class="part2">
                <div class="data-child mr-1" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
                  <div v-if="demandTableEditable">
                    <v-select
                      v-if="ft === 'priority'"
                      v-model="item1[ft]"
                      :options="['highest', 'high', 'low', 'lowest']"
                      outlined
                    />
                    <b-form-input
                      v-else-if="ft === 'deadline'"
                      v-model="item1[ft]"
                      style="text-align:end"
                    />
                    <b-input-group v-else>
                      <b-form-input
                        type="number"
                        style="text-align:end"
                        v-model="item1[ft]"
                      />
                      <b-input-group-append>
                        <b-input-group-text class="bg-transparent font-weight-bold">
                          US$
                        </b-input-group-text>
                      </b-input-group-append>
                    </b-input-group>
                  </div>
                  <div v-else>
                    <div v-if="ft === 'priority'" class="mr-1" style="margin-top:6px;">
                      {{ item1[ft] }}
                    </div>
                    <div v-else-if="ft === 'deadline'" class="mr-1" style="margin-top:6px;">
                      {{ dateFormat(item1[ft]) }}
                    </div>
                    <div v-else class="mr-1" style="margin-top:6px;">
                      {{ formatCurrency(item1[ft]) }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="part3">
                <b-button variant="flat-primary">
                  <feather-icon icon="Edit2Icon" />
                </b-button>
                <b-button variant="flat-primary">
                  <feather-icon icon="DollarSignIcon" />
                </b-button>
                <b-button variant="flat-primary">
                  <feather-icon icon="ChevronsRightIcon" />
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portf-row portf-bold portf-table-header portf-uppercase" style="font-size:18px">
        <div class="part1 portf-uppercase">
          Total
        </div>
        <div class="part2" >
          <div class="data-child mr-1 portf-uppercase pr-1" v-for="(ft, fi) in c_fields" :key="fi" :style="`width:${100 / c_fields.length}%`">
            <div v-if="ft === 'budget'">
              {{ formatCurrency(c_totalBudget) }}
            </div>
            <div v-else-if="ft === 'engaged'">
              {{ formatCurrency(c_totalEngaged) }}
            </div>
            <div v-else-if="ft === 'quoted'">
              {{ formatCurrency(c_totalQuoted) }}
            </div>
            <div v-else-if="ft === 'demand'">
              {{ formatCurrency(c_totalDemand) }}
            </div>
            <div v-else-if="ft === 'realEstimated'">
              {{ formatCurrency(c_totalReal) }}
            </div>
            <div v-else-if="ft === 'authorised'">
              {{ formatCurrency(c_totalAuthor) }}
            </div>
            <div v-else-if="ft === 'spent'">
              {{ formatCurrency(c_totalSpent) }}
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
        v-for="(serie, idx) in series"
        :key="idx"
        no-body
        no-footer
        class="chart-card"
      >
        <b-row>
          <b-col>
            <h2>{{serie[0].title}}</h2>
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
  </div>
</template>

<script>
import {
  BButton, BCard, BFormInput, BRow, BCol, BProgress, BProgressBar, BInputGroup, BInputGroupAppend, BInputGroupText
} from 'bootstrap-vue'
import moment from 'moment'
import VueApexCharts from 'vue-apexcharts'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BCard,
    BFormInput,
    BRow,
    BCol,
    BProgress,
    BProgressBar,
    VueApexCharts,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupText,
    vSelect,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    fields: {
      type: Array,
      default: () => [],
    },
    isChartView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      opened: 0,
      series: [[{
        title: 'Consumer Robots',
        data: [3720, 3500, 1920, 2040, 80, 120, 150],
      }],
      [{
        title: 'Military Robots',
        data: [3400, 3960, 1920, 2040, 240, 220, 250],
      }],
      [{
        title: 'Project automation',
        data: [3720, 3960, 2320, 2040, 600, 120, 190],
      }],
      ],
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
          categories: ['demand', 'engaged + quoted', 'engaged (to add)', 'engaged', 'real estimated', 'authorised', 'spent']
          // categories: ['spent', 'authorized', 'real estimated', 'budget engaged', ' budget spent', 'portfolio budget']
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
    c_fields() {
      return this.fields.slice(1, this.fields.length - 1)
    },
    demandTableEditable() {
      return this.$store.state.portfolioState.demandTableEditable
    },
    c_data() {
      const ndt = this.data.map(t => {
        let budget = 0
        let engaged = 0
        let quoted = 0
        let demand = 0
        let realEstimated = 0
        let authorised = 0
        let spent = 0
        if (t.children) {
          t.children.map(t1 => {
            budget += parseInt(t1.budget, 10)
            engaged += parseInt(t1.engaged, 10)
            quoted += parseInt(t1.quoted, 10)
            demand += parseInt(t1.demand, 10)
            realEstimated += parseInt(t1.realEstimated, 10)
            authorised += parseInt(t1.authorised, 10)
            spent += parseInt(t1.spent, 10)
            return null
          })
        }
        const nd = { ...t }
        nd.budget = budget
        nd.engaged = engaged
        nd.quoted = quoted
        nd.demand = demand
        nd.realEstimated = realEstimated
        nd.authorised = authorised
        nd.spent = spent
        return nd
      })
      return ndt
    },
    c_totalBudget() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += parseInt(t.budget, 10)
      })
      return bd
    },
    c_totalEngaged() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += parseInt(t.engaged, 10)
      })
      return bd
    },
    c_totalQuoted() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += parseInt(t.quoted, 10)
      })
      return bd
    },
    c_totalDemand() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += parseInt(t.demand, 10)
      })
      return bd
    },
    c_totalReal() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += parseInt(t.realEstimated, 10)
      })
      return bd
    },
    c_totalSpent() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += parseInt(t.spent, 10)
      })
      return bd
    },
    c_totalAuthor() {
      let bd = 0
      this.c_data.forEach(t => {
        bd += parseInt(t.authorised, 10)
      })
      return bd
    },
  },
  methods: {
    onCollapseCLick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
    },
    dateFormat(date) {
      return moment(new Date(date)).format('MM-DD-YYYY')
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "decimal",
      }).format(value).concat(' US$')
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
