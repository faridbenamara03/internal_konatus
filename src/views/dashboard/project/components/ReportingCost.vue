<template>
  <div class="demand-view">
    <div class="w-100 p-1">
      <vue-apex-charts type="line" height="400" :options="chartOptions" :series="series" />
    </div>
    <b-card class="mr-5 ml-5">
      <div style="font-weight:bold" class="table-wrap p-1">
        <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"  class="work-e">
          WORK ELEMENT
        </div>
        <div class="data-p">
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;" class="chld">
            TEAM
          </div>
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"  class="chld">
            PROGRESS
          </div>
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"  class="chld">
            BUDGET ENGAGED
          </div>
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"  class="chld">
            READY FOR TEST
          </div>
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"  class="chld">
            TITLE
          </div>
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"  class="chld">
            READY FOR PROGRAM
          </div>
          <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"  class="chld">
            NEXT PHASE
          </div>
        </div>
      </div>
      <div v-for="(item, i) in tableData" :key="i" class="pt-2 pb-2 pl-1 pr-1" :style="`background-color:${i % 2 === 0 ? '#303952' : '#283046'};border-left:solid ${bColors[i]} 4px`">
        <div style="color:white;" class="table-wrap">
          <div style="font-weight:bold;" class="work-e">
            {{ item[0] }}
          </div>
          <div class="data-p">
            <div class="chld">
              {{ item[1] }}
            </div>
            <div class="chld">
              {{ item[2] }}
            </div>
            <div class="chld">
              {{ item[3] }}
            </div>
            <div class="chld">
              {{ item[4] }}
            </div>
            <div class="chld">
              {{ item[5] }}
            </div>
            <div class="chld">
              {{ item[6] }}
            </div>
            <div class="chld">
              {{ item[7] }}
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'

export default {
  components: {
    BCard,
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
      bColors: ['#20C997', '#D46D6D', '#7367F0', '#F5A623'],
      tableData: [
        ['Research viable materials', 'Team A', '95', '10.000', '20-10-2021', 'info', '20-10-2021', '20-10-2021'],
        ['Design and consturction of landing pad', 'Team B', '75', '12.000', '20-10-2021', 'info', '20-10-2021', '20-10-2021'],
        ['Autonomous flight control systems and software', 'Team C', '0', '4.500', '20-10-2021', 'info', '20-10-2021', '20-10-2021'],
        ['Legal certification and permissions', 'Team D', '20', '1.200', '20-10-2021', 'info', '20-10-2021', '20-10-2021'],
      ]
    }
  },
  computed: {
    series() {
      return [
        {
          name: "BUDGET ENGAGED",
          type: 'bar',
          data: this.$store.state.globalState.chartSeriesData[0]
        },
        {
          name: "REAL ESTIMATED",
          type: 'bar',
          data: this.$store.state.globalState.chartSeriesData[1]
        },
        {
          name: "QUOTE",
          type: 'bar',
          data: this.$store.state.globalState.chartSeriesData[2]
        },
        {
          name: "DEMAND",
          type: 'bar',
          data: this.$store.state.globalState.chartSeriesData[3]
        },
        {
          name: 'ESTIMATED',
          type: 'line',
          data: this.$store.state.globalState.chartSeriesData[4]
        },
        {
          name: 'ENGAGED',
          type: 'line',
          data: this.$store.state.globalState.chartSeriesData[5]
        },
        {
          name: 'SPENT',
          type: 'line',
          data: this.$store.state.globalState.chartSeriesData[6]
        }
      ]
    },
    chartOptions() {
      return {
        annotations: {
          yaxis: [
            {
              y: 8800,
              borderColor: '#00E396',
              label: {
                borderColor: '#00E396',
                style: {
                  color: '#fff',
                  background: '#00E396'
                },
                text: 'Y-axis annotation on 8800'
              }
            }
          ]
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '80%',
            borderRadius: 10
          },
        },
        stroke: {
          width: [10, 10, 10, 10, 4, 4, 4],
          dashArray: [0, 0, 0, 0, 8, 8, 8],
          colors: ["#FFFFFF00", "#FFFFFF00", "#FFFFFF00", "#FFFFFF00", "#7E36AF", "#008ffb", "#00e396"],
        },
        title: {
          text: 'REPORTING COST VIEW',
          align: 'center',
          style: {
            color: '#555555'
          }
        },
        xaxis: {
          // categories: ['', 'Sep', 'Oct', 'Nov', 'Dev', ''],
          categories: this.$store.state.globalState.chartXAxisData,
          labels: {
            style: {
              fontWeight: 'bold',
              colors: "#FFFFFF"
            }
          }
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#008FFB'
            },
            labels: {
              style: {
                colors: '#FFFFFF',
              },
              formatter(value) {
                if (value) {
                  if (value < 1000) return value.toFixed(0)
                  return `${(value / 1000).toFixed(2)}k`
                }
                return 0
              },
            },
            tooltip: {
              enabled: true
            }
          },
        ],
        colors: ['#ff2200', '#33FF00', '#004eff', '#ffeb00', '#775dd0', '#008ffb', '#00e396'],
        tooltip: {
          theme: 'dark',
          custom: ({
            series, dataPointIndex
          }) => `<div class="m-1">
            <div class="mb-1" style="font-weight:bold">Project X</div>
            <div style="color:#ff2200">BUDGET ENGAGED</div>
            <div class="mb-1">${series[0][dataPointIndex].toLocaleString('en')}</div>
            <div style="color:#33FF00">REAL ESTIMATED</div>
            <div class="mb-1">${series[1][dataPointIndex].toLocaleString('en')}</div>
            <div style="color:#ffeb00">DEMAND</div>
            <div>${series[3][dataPointIndex].toLocaleString('en')}</div>
          </div>`
        },
        legend: {
          labels: {
            colors: '#888888',
            useSeriesColors: false
          },
        }
      }
    }
  }
}
</script>

<style lang="scss">
.table-wrap {
  display: flex;
  .work-e {
    width: 200px;
  }
  .data-p {
    width: calc(100% - 200px);
    padding-left: 80px;
    display: flex;
    justify-content: space-between;
    .chld {
      text-align: right;
      width: 10%;
    }
  }
}
.card-body {
  padding: 0
}
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
