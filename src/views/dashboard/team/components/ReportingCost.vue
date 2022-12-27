<template>
  <div class="demand-view">
    <div class="w-100">
      <b-card class="chart-card">
        <vue-apex-charts type="line" height="400" :options="chartOptions" :series="series" />
      </b-card>
    </div>
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
      // series: [
      //   {
      //     name: "BUDGET ENGAGED",
      //     type: 'bar',
      //     data: this.$store.state.globalState.chartSeriesData[0]
      //   },
      //   {
      //     name: "REAL ESTIMATED",
      //     type: 'bar',
      //     data: this.$store.state.globalState.chartSeriesData[1]
      //   },
      //   {
      //     name: "QUOTE",
      //     type: 'bar',
      //     data: this.$store.state.globalState.chartSeriesData[2]
      //   },
      //   {
      //     name: "DEMAND",
      //     type: 'bar',
      //     data: this.$store.state.globalState.chartSeriesData[3]
      //   },
      //   {
      //     name: 'ESTIMATED',
      //     type: 'line',
      //     data: this.$store.state.globalState.chartSeriesData[4]
      //   }, {
      //     name: 'ENGAGED',
      //     type: 'line',
      //     data: this.$store.state.globalState.chartSeriesData[5]
      //   }, {
      //     name: 'SPENT',
      //     type: 'line',
      //     data: this.$store.state.globalState.chartSeriesData[6]
      //   }
      // ],
      // chartOptions: {
      //   annotations: {
      //     yaxis: [
      //       {
      //         y: 8800,
      //         borderColor: '#00E396',
      //         label: {
      //           borderColor: '#00E396',
      //           style: {
      //             color: '#fff',
      //             background: '#00E396'
      //           },
      //           text: 'Y-axis annotation on 8800'
      //         }
      //       }
      //     ]
      //   },
      //   plotOptions: {
      //     bar: {
      //       horizontal: false,
      //       columnWidth: '80%',
      //       borderRadius: 10
      //     },
      //   },
      //   stroke: {
      //     width: [10, 10, 10, 10, 4, 4, 4],
      //     dashArray: [0, 0, 0, 0, 8, 8, 8],
      //     colors: ["#FFFFFF00", "#FFFFFF00", "#FFFFFF00", "#FFFFFF00", "#7E36AF", "#008ffb", "#00e396"],
      //   },
      //   title: {
      //     text: 'REPORTING COST VIEW',
      //     align: 'center',
      //     style: {
      //       color: '#555555'
      //     }
      //   },
      //   xaxis: {
      //     // categories: ['', 'Sep', 'Oct', 'Nov', 'Dev', ''],
      //     categories: this.$store.state.globalState.chartXAxisData,
      //     labels: {
      //       style: {
      //         fontWeight: 'bold',
      //         colors: "#FFFFFF"
      //       }
      //     }
      //   },
      //   yaxis: [
      //     {
      //       axisTicks: {
      //         show: true,
      //       },
      //       axisBorder: {
      //         show: true,
      //         color: '#008FFB'
      //       },
      //       labels: {
      //         style: {
      //           colors: '#FFFFFF',
      //         },
      //         formatter(value) {
      //           if (value) {
      //             if (value < 1000) return value.toFixed(0)
      //             return `${(value / 1000).toFixed(2)}k`
      //           }
      //           return 0
      //         },
      //       },
      //       tooltip: {
      //         enabled: true
      //       }
      //     },
      //   ],
      //   colors: ['#ff2200', '#33FF00', '#004eff', '#ffeb00', '#775dd0', '#008ffb', '#00e396'],
      //   tooltip: {
      //     theme: 'dark',
      //     custom: ({
      //       series, dataPointIndex
      //     }) => `<div class="m-1">
      //       <div class="mb-1" style="font-weight:bold">Project X</div>
      //       <div style="color:#ff2200">BUDGET ENGAGED</div>
      //       <div class="mb-1">${series[0][dataPointIndex].toLocaleString('en')}</div>
      //       <div style="color:#33FF00">REAL ESTIMATED</div>
      //       <div class="mb-1">${series[1][dataPointIndex].toLocaleString('en')}</div>
      //       <div style="color:#ffeb00">DEMAND</div>
      //       <div>${series[3][dataPointIndex].toLocaleString('en')}</div>
      //     </div>`
      //   },
      //   legend: {
      //     labels: {
      //       colors: '#888888',
      //       useSeriesColors: false
      //     },
      //   }
      // },
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
        }, {
          name: 'ENGAGED',
          type: 'line',
          data: this.$store.state.globalState.chartSeriesData[5]
        }, {
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
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
