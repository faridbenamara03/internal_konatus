<template>
  <div
    class="demand-view"
    :class="{'has-chart': isChartView}"
  >
    <!-- <div
      v-if="!isChartView"
      class="portf-demand-view">
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div class="part1">
          Consumer Robots
        </div>
        <div class="part2">
          <div class="data-child mr-1 portf-uppercase">
            priority
          </div>
          <div class="data-child mr-1 portf-uppercase">
            budget
          </div>
          <div class="data-child mr-1 portf-uppercase">
            deadline
          </div>
          <div class="data-child mr-1 portf-uppercase">
            engaged
          </div>
          <div class="data-child mr-1 portf-uppercase">
            quoted
          </div>
        </div>
      </div>
      <div v-for="(item, index) in c_data_a" :key="index">
        <div class="portf-row portf-sub-header portf-bold portf-table-row portf-uppercase color-white header-shadow-btm row-header-bg">
          asdw
        </div>
        <div v-for="(item1, index1) in item.projects" :key="index1">
          <div class="portf-row portf-bold portf-sub-header portf-table-row portf-uppercase color-white row-header-bg border-btm-lgt" :class="{'inner-sdw': index1 === 0}">
            <div class="part1">
              <div class="header mr-1" v-on:click="onCollapseCLick(index1)" style="cursor:pointer">
                <feather-icon :icon="c_opened === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'" size="16" class="mr-1" />
                {{ item1.title }}
              </div>
              <div class="child1 mr-1">
                {{ item1.gate }}
              </div>
              <div class="child2 mr-1">
                {{ item1.next_gate }}
              </div>
            </div>
            <div class="part2">
              <div v-for="(item2, index2) in item1.data" :key="index2" class="data-child mr-1">
                {{ item2 }}
              </div>
            </div>
          </div>
          <div v-if="index1 === c_opened">
            <div v-for="(item3, index3) in item1.phases" :key="index3" class="portf-row portf-table-row font-14 border-bottom-dm">
              <div class="part1">
                <div class="header mr-1 pl-4 portf-bold">
                  {{ item3.title }}
                </div>
                <div class="child1 mr-1">
                  {{ item3.gate }}
                </div>
                <div class="child2 mr-1">
                  {{ item3.next_gate }}
                </div>
              </div>
              <div class="part2">
                <div v-for="(item4, index4) in item3.data" :key="index4" class="data-child mr-1">
                  {{ item4 }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portf-row portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt color-cyan">
        <div class="part1">
          <div class="header mr-1 portf-uppercase">
            Total Team capacity
          </div>
          <div class="child1 mr-1">
            <div class="d-flex" style="height:100%;width:100%;border:1px solid grey;border-radius:5px;justify-content:space-between;">
              <div style="font-size:12px;color:#FFFFFF80;padding:2px 8px;">
                Info
              </div>
              <div>
                <feather-icon icon="PlusIcon" style="color:#FFFFFF80;margin-bottom:2px;margin-right:8px;" />
              </div>
            </div>
          </div>
          <div class="child2 mr-1">
            <div class="d-flex" style="height:100%;width:100%;border:1px solid grey;border-radius:5px;justify-content:space-between;">
              <div style="font-size:12px;color:#FFFFFF80;padding:2px 8px;">
                Info
              </div>
              <div>
                <feather-icon icon="PlusIcon" style="color:#FFFFFF80;margin-bottom:2px;margin-right:8px;" />
              </div>
            </div>
          </div>
        </div>
        <div class="part2">
          <div v-for="(item5, index5) in c_total_data" :key="index5" class="data-child mr-1">
            {{ item5 }}
          </div>
        </div>
      </div>
    </div> -->
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
            {{ row.item.title }}
          </p>
        </div>
      </template>

      <template #cell(budget)="row">
        {{ formatCurrency(row.item.budget) }}
      </template>

      <template #cell(deadline)="row">
        {{ row.item.deadline ? dateFormat(row.item.deadline) : '' }}
      </template>

      <template #cell(quoted)="row">
        {{ row.item.deadline ? formatCurrency(row.item.quoted) : '' }}
      </template>

      <template #cell(engaged)="row">
        {{ row.item.deadline ? formatCurrency(row.item.engaged) : '' }}
      </template>

      <template #row-details="row">
        <div
          v-for="detail in row.item.children"
          :key="detail.title"
          class="row-detail d-flex align-items-center"
        >
          <div class="row-detail--name">
            <span>
              {{ detail.title }}
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
              style="width:270px"
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
          categories: ['spent', 'authorized', 'real estimated', 'budget engaged', ' budget spent', 'portfolio budget']
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
      // console.log(data)
      // console.log(fileds)
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
