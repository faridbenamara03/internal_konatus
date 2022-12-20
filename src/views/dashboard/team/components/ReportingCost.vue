g<template>
  <div class="demand-view" >
    <div class="w-100">
      <b-card
        class="chart-card"
      >
        <vue-apex-charts
          type="line"
          height="350"
          :options="chartOptions"
          :series="series"
        />
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
      series: [
        {
          name: "BUDGET1",
          type: 'column',
          data: [0, 0, 1700, 0]
        },
        {
          name: "BUDGET2",
          type: 'column',
          data: [0, 0, 1600, 0]
        },
        {
          name: 'BUDGET DEMAND',
          type: 'line',
          data: [2000, 2000, 2000, 2000]
        }, {
          name: 'BUDGET ENGAGED',
          type: 'line',
          data: [2800, 2600, 2700, 2800]
        }, {
          name: 'BUDGET ESTIMATED',
          type: 'line',
          data: [1600, 1400, 1200, 1500]
        },
        {
          name: "BUDGET3",
          type: 'column',
          data: [0, 0, 1800, 0, 1000, 1500]
        },
        {
          name: "BUDGET4",
          type: 'column',
          data: [0, 0, 2100, 0]
        }],
      chartOptions: {
        // legend: {
        //   show: false,
        //   labels: {
        //     colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
        //   },
        //   customLegendItems: [],
        //   position: 'bottom',
        //   horizontalAlign: 'left',
        //   offsetX: 0,
        //   offsetY: 10
        // },
        // chart: {
        //   height: 350,
        //   type: 'line',
        // },
        // plotOptions: {
        //   bar: {
        //     horizontal: false,
        //     columnWidth: '155%',
        //     endingShape: 'rounded'
        //   },
        // },
        // colors: ["#20C997", "#D46D6D", "#20C997", "#20C997", "#20C997", "#7367F0", "F5A623"],
        stroke: {
          width: [1, 1, 2, 2, 2, 1, 1],
          curve: 'straight',
          dashArray: [0, 0, 0, 0, 0, 0, 0]
        },
        // title: {
        //   text: 'CONSUMER ROBOTS',
        //   style: {
        //     color: '#ffffff'
        //   }
        // },
        dataLabels: {
          enabled: true
        },
        grid: {
          borderColor: '#B9B9C3',
        },
        markers: {
          discrete: [{
            seriesIndex: 3,
            dataPointIndex: 11,
            fillColor: '#ff0000',
            strokeColor: '#ff0000',
            size: 4,
            radius: 5,
            shape: "square" // "circle" | "square" | "rect"
          }, {
            seriesIndex: 4,
            dataPointIndex: 11,
            fillColor: '#20C997',
            strokeColor: '#20C997',
            size: 4,
            shape: "circle" // "circle" | "square" | "rect"
          }]
        },
        // fill: {
        //   colors: ['#20C997', '#D46D6D', '#0000FF', '#0000FF', '#0000FF', '#7367F0', '#F5A623']
        // },
        labels: ['Sep/21', 'Oct/21', 'Nov/21', 'Dev/21'],
        xaxis: {
          labels: {
            style: {
              colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]
            },
            formatter(value) {
              if (value < 1000) return value
              return `${value / 1000}k`
            },
          }
        }
      },
    }
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
