<template>
  <div class="demand-view">
    <div class="w-100 p-1">
      <vue-apex-charts
        type="line"
        height="400"
        :options="chartOptions"
        :series="series"
      />
    </div>
    <b-card class="mr-5 ml-5">
      <div
        style="font-weight:bold"
        class="table-wrap p-1"
      >
        <div
          style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
          class="work-e"
        >
          PROJECT
        </div>
        <div class="data-p">
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            PROGRESS
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            BUDGET ENGAGED
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            ESTIMATED
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            SPENT
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            AUTHORIZED
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            CURRENT PHASE
          </div>
        </div>
      </div>
      <div
        v-for="(item, i) in tableData"
        :key="i"
        class="pt-2 pb-2 pl-1 pr-1"
        :style="`background-color:${i % 2 === 0 ? '#303952' : '#283046'};border-left:solid ${bColors[i]} 4px`"
      >
        <div
          style="color:white;"
          class="table-wrap"
        >
          <div
            style="font-weight:bold;"
            class="work-e"
          >
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
          </div>
        </div>
      </div>
      <div
        style="font-weight:bold"
        class="table-wrap p-1"
      >
        <div
          style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
          class="work-e"
        >
          TOTAL
        </div>
        <div class="data-p">
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          />
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            27,900
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            27,350
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            23,900
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          >
            26,500
          </div>
          <div
            style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;"
            class="chld"
          />
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
        ['New Format', '95', '10,200', '10,400', '10,000', '10,000', '3'],
        ['Enhanced motricity', '75', '12,000', '11,000', '10,400', '12,000', '4'],
        ['Enhanced autonomy', '50', '4,500', '4,450', '2,000', '3,000', '1'],
        ['Dual sourcing for Quadruped', '100', '1,200', '1,500', '1,500', '1,500', '2'],
      ]
    }
  },
  computed: {
    series() {
      return [
        {
          name: "New Format",
          color: '#20C997',
          type: 'bar',
          data: this.$store.state.globalState.chartSeriesData[0]
          // data: [
          //   null,
          //   null,
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   null,
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   null,
          // ],
        },
        {
          name: "Enhanced motricity",
          color: '#D46D6D',
          type: 'bar',
          data: this.$store.state.globalState.chartSeriesData[1]
          // data: [
          //   null,
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   null,
          //   null,
          // ],
        },
        {
          name: "Enhanced autonomy",
          color: '#7367F0',
          type: 'bar',
          data: this.$store.state.globalState.chartSeriesData[2]
          // data: [
          //   null,
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   null,
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   null,
          // ],
        },
        {
          name: "Dual sourcing for Quadruped",
          type: 'bar',
          columnWidth: '70%',
          color: '#F5A623',
          data: this.$store.state.globalState.chartSeriesData[3]
          // data: [
          //   null,
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   null,
          //   parseInt(Math.random() * 5000 + 18000, 10),
          //   null,
          // ],
        },
        {
          name: 'ESTIMATED',
          color: '#00BBF5',
          type: 'line',
          data: this.$store.state.globalState.chartSeriesData[4],
          // data: [
          //   25500,
          //   25500,
          //   25500,
          //   25500,
          //   25500,
          //   25500
          // ],
        },
        {
          name: 'ENGAGED',
          type: 'line',
          color: '#20C997',
          data: this.$store.state.globalState.chartSeriesData[5]
          // data: [
          //   20500,
          //   20500,
          //   20500,
          //   20500,
          //   20500,
          //   20500
          // ],
        },
        {
          name: 'SPENT',
          color: '#d96e00',
          type: 'line',
          data: this.$store.state.globalState.chartSeriesData[6]
          // data: [
          //   16000,
          //   16000,
          //   16000,
          //   16000,
          //   16000,
          //   16000,
          // ],
        }
      ]
    },
    chartOptions() {
      return {
        dataLabels: {
          enabled: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '80%',
            borderRadius: 5,
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
          // categories: ['', 'Aug/21', 'Sep/21', 'Oct/21', 'Nov/21', ''],
          categories: this.$store.state.globalState.chartXAxisData,
          labels: {
            style: {
              fontWeight: 'bold',
              colors: "#FFFFFF"
            }
          },
          tooltip: {
            enabled: false
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
        tooltip: {
          theme: 'dark',
          custom: data => {
            if (data.seriesIndex > 3) {
              return (
                `<div class="m-1">
                  <div style="color:#00BBF5;font-weight:bold">ESTIMATED</div>
                  <div class="mb-1" style="color:#00BBF5">${data.series[4][data.dataPointIndex]}</div>
                  <div style="color:#20C997;font-weight:bold">ENGAGED</div>
                  <div class="mb-1" style="color:#20C997">${data.series[5][data.dataPointIndex]}</div>
                  <div style="color:#d96e00;font-weight:bold">SPENT</div>
                  <div style="color:#d96e00;font-weight:bold">${data.series[6][data.dataPointIndex]}</div>
                </div>`
              )
            }
            if (data.series[0][data.dataPointIndex] && data.series[1][data.dataPointIndex] && data.series[2][data.dataPointIndex] && data.series[3][data.dataPointIndex]) {
              return (
                `<div class="m-1">
                  <div style="color:rgb(32, 201, 151);font-weight:bold">New Format</div>
                  <div class="mb-1" style="color:rgb(32, 201, 151);font-weight:bold">${data.series[0][data.dataPointIndex]}</div>
                  <div style="color:rgb(212, 109, 109);font-weight:bold">Enhanced motricity</div>
                  <div class="mb-1" style="color:rgb(212, 109, 109);font-weight:bold">${data.series[1][data.dataPointIndex]}</div>
                  <div style="color:rgb(115, 103, 240);font-weight:bold">Enhanced autonomy</div>
                  <div class="mb-1" style="color:rgb(115, 103, 240);font-weight:bold">${data.series[2][data.dataPointIndex]}</div>
                  <div style="color:rgb(245, 166, 35);font-weight:bold">Dual sourcing for Quadruped</div>
                  <div style="color:rgb(245, 166, 35);font-weight:bold">${data.series[3][data.dataPointIndex]}</div>
                </div>`
              )
            }
            return ''
          }
        },
        legend: {
          customLegendItems: ['New Format', 'Enhanced motricity', 'Enhanced autonomy', 'Dual sourcing for Quadruped'],
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
    width: 300px;
  }

  .data-p {
    width: calc(100% - 300px);
    padding-left: 30px;
    display: flex;
    justify-content: space-between;

    .chld {
      text-align: 'center';
      width: 15%;
    }
  }
}

.card-body {
  padding: 0
}

@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
