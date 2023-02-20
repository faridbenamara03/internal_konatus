<template>
  <div style="width:100%;" :class="{ 'has-chart': isChartView }">
    <!-- <app-echart-stacked-area v-if="isChartView" :option-data="option" :header-visible="false"
      style="width:100%;height:calc(100vh - 400px)" /> -->
    <vue-apex-charts v-if="isChartView" type="bar" height="400" :options="chartOptions" :series="series" />
    <div v-if="!isChartView">
      <TableComponent />
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.sub-main {
  flex: 1;
  text-align: center;
}
</style>

<script>
// import AppEchartStackedArea from '@core/components/charts/echart/AppEchartStackedArea.vue'
import VueApexCharts from 'vue-apexcharts'
import TableComponent from './sub-component/table.vue'

export default {
  components: {
    // AppEchartStackedArea,
    VueApexCharts,
    TableComponent
  },
  props: {
    isChartView: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    series() {
      return [{
        name: 'ENGAGED',
        data: [170, 170, 120, 90, 150]
      }, {
        name: 'QUOTE',
        data: [180, 180, 130, 100, 160]
      }, {
        name: 'ESTIMATED',
        data: [160, 160, 110, 80, 140]
      }, {
        name: 'REQUESTED NOT ENGAGED',
        data: [150, 150, 100, 70, 130]
      }]
    },
    chartOptions() {
      return {
        chart: {
          type: 'column',
          height: 350,
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0
            }
          }
        }],
        plotOptions: {
          bar: {
            horizontal: false,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: '13px',
                  fontWeight: 900
                }
              }
            }
          },
        },
        xaxis: {
          type: 'string',
          categories: ['W1', 'W2', 'W3', 'W4', 'W5'],
        },
        legend: {
          labels: {
            colors: '#888888',
            useSeriesColors: false
          },
        },
        fill: {
          opacity: 1
        }
      }
    }
  },
  data() {
    return {}
  },
}
</script>
