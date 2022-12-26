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
      //     type: 'column',
      //     data: [1000, 500, 1700, 300]
      //   },
      //   {
      //     name: "REAL ESTIMATED",
      //     type: 'column',
      //     data: [1800, 1200, 1000, 1500]
      //   },
      //   {
      //     name: "QUOTE",
      //     type: 'column',
      //     data: [1300, 800, 2100, 1400]
      //   },
      //   {
      //     name: "DEMAND",
      //     type: 'column',
      //     data: [300, 500, 1600, 200]
      //   },
      //   {
      //     name: 'ESTIMATED',
      //     type: 'line',
      //     data: [2000, 2000, 2000, 2000]
      //   }, {
      //     name: 'ENGAGED',
      //     type: 'line',
      //     data: [2800, 2800, 2800, 2800]
      //   }, {
      //     name: 'SPENT',
      //     type: 'line',
      //     data: [1600, 1600, 1600, 1600]
      //   }
      // ],
      // chartOptions: {
      //   legend: {
      //     show: false,
      //     labels: {
      //       colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
      //     },
      //     customLegendItems: [],
      //     position: 'bottom',
      //     horizontalAlign: 'left',
      //     offsetX: 0,
      //     offsetY: 10
      //   },
      //   chart: {
      //     height: 350,
      //     type: 'line',
      //   },
      //   plotOptions: {
      //     bar: {
      //       horizontal: false,
      //       columnWidth: '155%',
      //       borderRadius: 10
      //     },
      //   },
      //   colors: ["green", "red", "yellow", "purple", "blue", "darkgreen", "orange"],
      //   stroke: {
      //     width: [1, 1, 2, 2, 2, 1, 1],
      //     curve: 'straight',
      //     dashArray: [0, 0, 0, 0, 8, 8, 8]
      //   },
      //   title: {
      //     text: 'CONSUMER ROBOTS',
      //     style: {
      //       color: '#ffffff'
      //     }
      //   },
      //   dataLabels: {
      //     enabled: false
      //   },
      //   grid: {
      //     borderColor: '#B9B9C320',
      //   },
      //   // markers: {
      //   //   discrete: [{
      //   //     seriesIndex: 3,
      //   //     dataPointIndex: 11,
      //   //     fillColor: '#ff0000',
      //   //     strokeColor: '#ff0000',
      //   //     size: 4,
      //   //     radius: 5,
      //   //     shape: "square" // "circle" | "square" | "rect"
      //   //   }, {
      //   //     seriesIndex: 4,
      //   //     dataPointIndex: 11,
      //   //     fillColor: '#20C997',
      //   //     strokeColor: '#20C997',
      //   //     size: 4,
      //   //     shape: "circle" // "circle" | "square" | "rect"
      //   //   }]
      //   // },
      //   fill: {
      //     colors: ['#20C997', '#D46D6D', '#0000FF', '#0000FF', '#0000FF', '#7367F0', '#F5A623']
      //   },
      //   labels: ['Sep/21', 'Oct/21', 'Nov/21', 'Dev/21'],
      //   xaxis: {
      //     labels: {
      //       style: {
      //         colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
      //       }
      //     }
      //   },
      //   yaxis: {
      //     labels: {
      //       style: {
      //         colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
      //       },
      //       formatter(value) {
      //         if (value < 1000) return value
      //         return `${value / 1000}k`
      //       },
      //     }
      //   }
      // },
      series: [
        {
          name: "BUDGET ENGAGED",
          type: 'bar',
          data: [null, 1000, 500, 1700, 300, null]
        },
        {
          name: "REAL ESTIMATED",
          type: 'bar',
          data: [null, 1800, 1200, 1000, 1500, null]
        },
        {
          name: "QUOTE",
          type: 'bar',
          data: [null, 1300, 800, 2100, 1400, null]
        },
        {
          name: "DEMAND",
          type: 'bar',
          data: [null, 300, 500, 1600, 500, null]
        },
        {
          name: 'ESTIMATED',
          type: 'line',
          data: [2000, 2000, 2000, 2000, 2000, 2000]
        }, {
          name: 'ENGAGED',
          type: 'line',
          data: [2800, 2800, 2800, 2800, 2800, 2800]
        }, {
          name: 'SPENT',
          type: 'line',
          data: [1600, 1600, 1600, 1600, 1600, 1600]
        }
      ],
      chartOptions: {
        // chart: {
        //   animations: {
        //     enabled: true,
        //     easing: 'easeinout',
        //     speed: 100,
        //     animateGradually: {
        //       enabled: true,
        //       delay: 150
        //     },
        //     dynamicAnimation: {
        //       enabled: true,
        //       speed: 350
        //     }
        //   },
        //   background: '#fff'
        //   sparkline: {
        //     enabled: false,
        //   }
        // },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '80%',
            borderRadius: 10
          },
        },
        // dataLabels: {
        //   enabled: false
        // },
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
          categories: ['', 'Sep/21', 'Oct/21', 'Nov/21', 'Dev/21', ''],
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
            // title: {
            //   text: "Income (thousand crores)",
            //   style: {
            //     color: '#008FFB',
            //   }
            // },
            tooltip: {
              enabled: true
            }
          },
          // {
          //   seriesName: 'Income',
          //   opposite: true,
          //   axisTicks: {
          //     show: true,
          //   },
          //   axisBorder: {
          //     show: true,
          //     color: '#00E396'
          //   },
          //   labels: {
          //     style: {
          //       colors: '#00E396',
          //     }
          //   },
          //   title: {
          //     text: "Operating Cashflow (thousand crores)",
          //     style: {
          //       color: '#00E396',
          //     }
          //   },
          // },
          // {
          //   seriesName: 'Revenue',
          //   opposite: true,
          //   axisTicks: {
          //     show: true,
          //   },
          //   axisBorder: {
          //     show: true,
          //     color: '#FEB019'
          //   },
          //   labels: {
          //     style: {
          //       colors: '#FEB019',
          //     },
          //   },
          //   title: {
          //     text: "Revenue (thousand crores)",
          //     style: {
          //       color: '#FEB019',
          //     }
          //   }
          // },
        ],
        colors: ['#ff2200', '#33FF00', '#004eff', '#ffeb00', '#775dd0', '#008ffb', '#00e396'],
        tooltip: {
          theme: 'dark',
          custom: ({
            series, seriesIndex, dataPointIndex, w
          }) => {
            console.log('series ----', series)
            console.log('seriesIndex ----', seriesIndex)
            console.log('dataPointIndex ----', dataPointIndex)
            console.log('w ----', w)
            return (
              `<div class="m-1">
                <div class="mb-1">Project X</div>
                <div style="color:#ff2200">BUDGET ENGAGED</div>
                <div class="mb-1">${series[0][dataPointIndex].toLocaleString('en')}</div>
                <div style="color:#33FF00">REAL ESTIMATED</div>
                <div class="mb-1">${series[1][dataPointIndex].toLocaleString('en')}</div>
                <div style="color:#ffeb00">DEMAND</div>
                <div>${series[3][dataPointIndex].toLocaleString('en')}</div>
              </div>`
            )
            // var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            // return '<ul>' +
            // '<li><b>Price</b>: ' + data.x + '</li>' +
            // '<li><b>Number</b>: ' + data.y + '</li>' +
            // '<li><b>Product</b>: \'' + data.product + '\'</li>' +
            // '<li><b>Info</b>: \'' + data.info + '\'</li>' +
            // '<li><b>Site</b>: \'' + data.site + '\'</li>' +
            // '</ul>';
          }
        },
        // tooltip: {
        //   theme: 'dark',
        //   // style: {
        //   //   fontSize: '12px',
        //   //   fontFamily: undefined
        //   // },
        //   // fixed: {
        //   //   enabled: true,
        //   //   // position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        //   //   offsetY: 30,
        //   //   offsetX: 60
        //   // },
        // },
        legend: {
          labels: {
            colors: '#888888',
            useSeriesColors: false
          },
        }
      },
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
