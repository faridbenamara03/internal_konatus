<template>
  <div
    class="demand-view"
    :class="{ 'has-chart': isChartView }"
  >
    <!-- <b-table v-if="!isChartView" :items="data" :fields="fields" :tbody-tr-class="rowClass" responsive>
      <template #cell(show_details)="row">
        <div class="d-flex detail align-center" @click="row.toggleDetails">
          <feather-icon v-if="row.item.children" :icon="row.detailsShowing ? 'ChevronDownIcon' : 'ChevronRightIcon'"
            size="16" class="mr-1" />
          <p class="m-0 text-uppercase" v-if="row.item.name === 'SPACE HOLDER FOR AN OTHER BU'">
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
          <div style="flex:32;padding:5px 28px;text-align:start;">
            <span>
              <feather-icon :icon="detail.state === 'up' ? 'ArrowUpIcon' : 'ArrowDownIcon'" class="mr-1"
                :style="`color:${detail.state === 'up' ? 'green' : 'red'}`" />{{ detail.name }}
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
    </b-table> -->
    <div v-if="!isChartView">
      <div
        style="display:flex;background-color: #283046;height: 40px;align-items: center;box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);font-weight: bold;"
      >
        <div style="width: 30%" />
        <div
          v-for="(item, inded) in c_fileds"
          :key="inded"
          :style="`width: ${90 / c_fileds. length}%; text-transform: uppercase`"
        >
          {{ item }}
        </div>
        <!-- <div style="width: 23%">
          BUDGET TEAM
        </div>
        <div style="width: 23%">
          BUDGET ENGAGED
        </div>
        <div style="width: 24%">
          REAL ESTIMATED
        </div> -->
      </div>
      <div
        v-for="(org, oIndex) in data"
        :key="oIndex"
        style="color: white"
      >
        <div
          style="display:flex;background-color: #303952; height: 60px;align-items: center;box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25);"
        >
          <div style="width: 30%; padding-left: 30px; text-transform: uppercase;">
            <feather-icon
              v-if="org.name === 'Konatus Industries'"
              icon="ChevronDownIcon"
              size="16"
              class="mr-1"
            />
            <feather-icon
              v-if="org.name === 'SPACE HOLDER FOR AN OTHER BU'"
              icon="PlusIcon"
              size="16"
              class="mr-1"
            />
            {{ org.name }}
          </div>
          <div
            v-for="(item, inded) in c_fileds"
            :key="inded"
            :style="`width: ${90 / c_fileds. length}%`"
          >
            {{ org[item] }}
          </div>
          <!-- <div style="width: 23%">
            {{ org.budget_team }}
          </div>
          <div style="width: 23%">
            {{ org.budget_engaged }}
          </div>
          <div style="width: 24%">
            {{ org.real_estimated }}
          </div> -->
        </div>
        <div v-if="org.children">
          <div
            v-for="(unit, uIndex) in org.children"
            :key="uIndex"
          >
            <div
              style="display:flex;background-color: #23293a;height: 50px;align-items: center;box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.25); cursor: pointer;"
              @click="onclickunit(uIndex)"
            >
              <div style="width: 30%; padding-left: 30px;">
                <feather-icon
                  :icon="unit.state === 'up' ? 'ArrowUpIcon' : 'ArrowDownIcon'"
                  class="mr-1"
                  :style="`color:${unit.state === 'up' ? 'green' : 'red'}`"
                />
                {{ unit.name }}
              </div>
              <div
                v-for="(item, inded) in c_fileds"
                :key="inded"
                :style="`width: ${90 / c_fileds. length}%`"
              >
                {{ unit[item] }}
              </div>
            </div>
            <div v-if="unit.children">
              <div
                v-for="(team, tIndex) in unit.children"
                :key="tIndex"
              >
                <div
                  v-if="collapsedItems.indexOf(uIndex) === -1"
                  style="display:flex;height: 50px;align-items: center;background-color: #282e41;"
                  @click="onclickunit1(tIndex)"
                >
                  <div style="width: 30%; padding-left: 45px;">
                    <feather-icon
                      :icon="team.state === 'up' ? 'ArrowUpIcon' : 'ArrowDownIcon'"
                      class="mr-1"
                      :style="`color:${team.state === 'up' ? 'green' : 'red'}`"
                    />
                    {{ team.name }}
                  </div>
                  <div
                    v-for="(item, inded) in c_fileds"
                    :key="inded"
                    :style="`width: ${90 / c_fileds. length}%`"
                  >
                    {{ team[item] }}
                  </div>

                </div>
                <div v-if="team.children">
                  <div
                    v-for="(subteam, stIndex) in team.children"
                    :key="stIndex"
                  >
                    <div
                      v-if="collapsedItems.indexOf(uIndex) === -1 && collapsedItems1.indexOf(tIndex) === -1"
                      style="display:flex;height: 50px;align-items: center;"
                    >
                      <div style="width: 30%; padding-left: 60px;">
                        <feather-icon
                          :icon="subteam.state === 'up' ? 'ArrowUpIcon' : 'ArrowDownIcon'"
                          class="mr-1"
                          :style="`color:${subteam.state === 'up' ? 'green' : 'red'}`"
                        />
                        {{ subteam.name }}
                      </div>
                      <div
                        v-for="(item, inded) in c_fileds"
                        :key="inded"
                        :style="`width: ${90 / c_fileds. length}%`"
                      >
                        {{ subteam[item] }}
                      </div>

                    </div>
                  </div>
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
            <h2>Chart Title</h2>
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
  BCard, BProgress, BProgressBar, BRow, BCol
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
    // BTable,
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
      collapsedItems: [],
      collapsedItems1: [],
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
  computed: {
    c_fileds() {
      return this.$store.state.orgnizationState.reportingColumnData ? this.$store.state.orgnizationState.reportingColumnData : ['budget_team', 'budget_engaged', 'real_estimated']
    },
  },
  methods: {
    onclickunit(index) {
      if (this.collapsedItems.indexOf(index) !== -1) { // If the value is found in the array
        this.collapsedItems.splice(this.collapsedItems.indexOf(index), 1) // Remove the value at the found index
      } else {
        this.collapsedItems.push(index)
      }
    },
    onclickunit1(index) {
      if (this.collapsedItems1.indexOf(index) !== -1) { // If the value is found in the array
        this.collapsedItems1.splice(this.collapsedItems1.indexOf(index), 1) // Remove the value at the found index
      } else {
        this.collapsedItems1.push(index)
      }
    },
    function(row) {
      return row === this.data[0]
    },
    dateFormat(date) {
      return moment(new Date(date)).format('MM-DD-YYYY')
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
