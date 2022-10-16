<template>
  <div class="demand-view" :class="{'has-chart': isChartView}">
    <b-table v-if="!isChartView" :items="data" :fields="fields" :tbody-tr-class="rowClass" responsive>
      <template #cell(show_details)="row">
        <div class="d-flex detail align-center" @click="row.toggleDetails">
          <feather-icon v-if="row.item.children" :icon="row.detailsShowing ? 'ChevronDownIcon' : 'ChevronRightIcon'"
            size="16" class="mr-1" />
          <p class="m-0 text-uppercase" v-if="row.item.name==='SPACE HOLDER FOR AN OTHER BU'">
            <feather-icon class="mr-1" icon="PlusIcon" /> {{ row.item.name }}
          </p>
          <p class="m-0 text-uppercase" v-else>
            {{ row.item.name }}
          </p>
        </div>
      </template>

      <template #cell(budget_team)="row">
        {{ row.item.budget_team }}
      </template>

      <template #cell(budget_engaged)="row">
        {{ row.item.budget_engaged ? row.item.budget_engaged : '' }}
      </template>

      <template #row-details="row">
        <div v-for="detail in row.item.children" :key="detail.name" class="row-detail d-flex">
          <div style="flex:32;padding:5px 28px;text-align:start;" >
            <span>
              <feather-icon icon="ArrowUpIcon" class="mr-1" style="color:green" />{{ detail.name }}
            </span>
          </div>
          <div style="flex:16;padding:5px 28px;text-align:end;">
            {{ detail.budget_team }}
          </div>
          <div style="flex:20;padding:5px 28px;text-align:end;">
            {{ detail.budget_engaged }}
          </div>
          <div style="flex:18;padding:5px 28px;text-align:end;">
            {{ detail.real_estimated }}
          </div>
          <div style="flex:16;padding:5px 28px;">

          </div>
        </div>
      </template>
    </b-table>
    <div v-if="isChartView" class="d-flex flex-column w-100">
      <b-card v-for="(serie, idx) in series" :key="idx" no-body no-footer class="chart-card">
        <b-row>
          <b-col>
            <h2>Chart Title</h2>
            <div class="d-flex justify-content-between align-center mt-1">
              <p class="text-uppercase m-0">
                Total
              </p>
              <p class="m-0">
                {{ formatCurrency(getTotalValue(serie)) }}
              </p>
            </div>
            <vue-apex-charts type="bar" height="248" :options="chartOptions" :series="serie" />
          </b-col>
          <b-col>
            <b-row cols="2">
              <b-col v-for="(color, index) in chartOptions.colors" :key="index" class="mb-1">
                <div class="d-flex justify-content-between align-center mb-1">
                  <p class="text-capitalize m-0">
                    {{ chartOptions.xaxis.categories[index] }}
                  </p>
                  <p class="m-0">
                    {{ getPercent(serie[0].data[index], getTotalValue(serie)) }}%
                  </p>
                </div>
                <b-progress :max="getTotalValue(serie)">
                  <b-progress-bar :value="serie[0].data[index]" :style="{ 'background-color': color }" />
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
  BCard, BProgress, BProgressBar, BTable, BRow, BCol
} from 'bootstrap-vue'
import moment from 'moment'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    BCard,
    BRow,
    BCol,
    BProgress,
    BProgressBar,
    BTable,
    VueApexCharts,
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
        data: [120, 240, 2040, 1920, 3960, 3720],
      }],
      [{
        data: [120, 240, 2040, 1920, 3960, 3720],
      }],
      [{
        data: [120, 240, 2040, 1920, 3960, 3720],
      }],
      [{
        data: [400, 430, 448, 470, 540, 580],
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
          categories: ['spend', 'authorized', 'real estimated', 'budget engaged', 'budget demand spend', 'portfolio budget',
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
            offsetX: '-20',
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
