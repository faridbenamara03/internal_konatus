<template>
  <div
    class="demand-view"
    :class="{'has-chart': isChartView}"
  >
    <div style="position:relative;top:8px;left:32px;height:0px;font-weight:bold;">
      Customer Robots
    </div>
    <b-table
      v-if="!isChartView"
      :items="data"
      :fields="fields"
      :tbody-tr-class="rowClass"
      borderless
      responsive
    >
      <template #cell(show_details)="row">
        <div
          class="d-flex detail align-center"
          @click="row.toggleDetails"
        >
          <feather-icon
            v-if="row.item.children"
            :icon="row.detailsShowing ? 'ChevronDownIcon' : 'ChevronRightIcon'"
            size="16"
            class="mr-1"
          />
          <p class="m-0 text-uppercase">
            {{ row.item.name }}
          </p>
        </div>
      </template>

      <template #cell(budget)="row">
        {{ formatCurrency(row.item.budget) }}
      </template>

      <template #cell(deadline)="row">
        {{ row.item.deadline ? dateFormat(row.item.deadline) : '' }}
      </template>

      <template #row-details="row">
        <div
          v-for="detail in row.item.children"
          :key="detail.name"
          class="row-detail d-flex align-items-center"
        >
          <div class="row-detail--name">
            <span>
              {{ detail.name }}
            </span>
          </div>
          <div class="row-detail--form">
            <div class="d-flex w-100">
              <template v-for="(item, index) in fields">
                <div class="d-flex" :key="index" v-if="item === 'priority'" :style="`width:${100 / (fields.length - 2)}%;text-align:end;justify-content:center`">
                  <v-select
                    v-model="detail.priority"
                    :options="['highest', 'high', 'low', 'lowest']"
                    outlined
                  />
                </div>
                <div class="d-flex" :key="index" v-if="item === 'deadline'" :style="`width:${100 / (fields.length - 2)}%;text-align:end;justify-content:center`">
                  <b-form-input
                    :dir="'rtl'"
                    :value="dateFormat(detail.deadline)"
                  />
                </div>
                <div class="d-flex" :key="index" v-if="item === 'budget'" :style="`width:${100 / (fields.length - 2)}%;text-align:end;justify-content:center`">
                  <b-form-input
                    :dir="'rtl'"
                    :value="formatCurrency(detail.budget)"
                  />
                </div>
                <div class="d-flex" :key="index" v-if="item === 'quoted'" :style="`width:${100 / (fields.length - 2)}%;text-align:end;justify-content:center`">
                  <b-form-input
                    :dir="'rtl'"
                    :value="formatCurrency(detail.quoted)"
                  />
                </div>
                <div class="d-flex" :key="index" v-if="item === 'engaged'" :style="`width:${100 / (fields.length - 2)}%;text-align:end;justify-content:center`">
                  <b-form-input
                    :dir="'rtl'"
                    :value="formatCurrency(detail.engaged)"
                  />
                </div>
              </template>
            </div>
            <div
              class="d-flex align-items-center justify-content-end"
            >
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
      </template>
    </b-table>
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
                Total
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
  BButton, BCard, BFormInput, BRow, BCol, BProgress, BProgressBar, BTable,
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
    BTable,
    VueApexCharts,
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
      series: [[{
        title: 'Consumer Robots',
        data: [120, 80, 2040, 1920, 3500, 3720],
      }],
      [{
        title: 'Military Robots',
        data: [220, 240, 2040, 1920, 3960, 3400],
      }],
      [{
        title: 'Project automation',
        data: [120, 600, 2040, 2320, 3960, 3720],
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
        plotOptions: {
          bar: {
            borderRadius: '0px 2px 2px 0px',
            horizontal: true,
            distributed: true,
          },
        },
        colors: ['#7367F0', '#D46D6D', '#FF9F43', '#00CFE8', '#0D6EFD', '#28C76F'],
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          categories: ['spent', 'authorized', 'real estimated', 'budget engaged', ' budget spent', 'portfolio budget',
          ],
          labels: {
            formatter: value => Intl.NumberFormat('en-US', {
              notation: 'compact',
              maximumFractionDigits: 1,
            }).format(value),
          },
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
  methods: {
    dateFormat(date) {
      return moment(new Date(date)).format('MM-DD-YYYY')
    },
    formatCurrency(value) {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
      }).format(value).replace(',', '.')
    },
    rowClass(item, type) {
      const colorClass = 'table-success'
      if (!item || type !== 'row') { return }

      // eslint-disable-next-line consistent-return
      if (item.name === 'total') { return colorClass }
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
</style>
