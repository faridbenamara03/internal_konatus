<template>
  <div class="demand-view">
    <div class="p-1">
      <b-button variant="flat-primary">
        <feather-icon icon="RotateCwIcon" />
        Update
      </b-button>
    </div>
    <div class="border-top border-bottom">
      <div v-for="(item, index) in data" :key="index" class="d-flex">
        <div style="flex:4" class="border-right pr-2 pl-2">
          <div class="border-bottom">
            <div class="row-custom boldTxt">
              <div class="dataitem dataTitleItem d-flex">
                <div class="mr-1" style="cursor:pointer"
                  v-on:click="onCollapseHandle(index, computedOpenState.openState)">
                  <div v-if="index === computedOpenState.index && computedOpenState.openState === 'none'">
                    <feather-icon icon="ChevronRightIcon" />
                  </div>
                  <div v-else>
                    <feather-icon icon="ChevronDownIcon" />
                  </div>
                </div>
                {{ item.name }}
              </div>
            </div>
            <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
              :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
              <div class="dataitem dataSubTitleItem">{{ item1.name }}</div>
            </div>
          </div>
        </div>
        <div style="flex:3" class="border-right">
          <div v-if="index === 0" class="row-custom">
            <div class="dataitem">{{ fields[0] }}</div>
          </div>
          <div v-else class="row-custom"></div>
          <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
            :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
            <div class="dataitem">{{ item1.budget_team }}</div>
          </div>
        </div>
        <div style="flex:3" class="border-right">
          <div v-if="index === 0" class="row-custom">
            <div class="dataitem">{{ fields[1] }}</div>
          </div>
          <div v-else class="row-custom"></div>
          <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
            :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
            <div class="dataitem">{{ item1.budget_engaged }}</div>
          </div>
        </div>
        <div style="flex:3">
          <div v-if="index === 0" class="row-custom">
            <div class="dataitem">{{ fields[2] }}</div>
          </div>
          <div v-else class="row-custom"></div>
          <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
            :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
            <div class="dataitem">{{ item1.real_estimated }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.row-custom {
  height: 50px;
  width: 100%;
  display: flex;
}

.dataTitleItem {
  margin-left: 0px !important;
}

.dataSubTitleItem {
  margin-left: 30px !important;
}

.boldTxt {
  font-weight: bold;
  color: white;
}

.dataitem {
  margin: auto;
}

.border-top {
  border-top: 1px solid grey;
}

.border-bottom {
  border-bottom: 1px solid grey;
}

.border-right {
  border-right: 1px solid grey;
}

.border-left {
  border-left: 1px solid grey;
}
</style>

<script>
import moment from 'moment'
import { BButton } from 'bootstrap-vue'

export default {
  components: {
    BButton
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
      collapseOpen: { index: 0, openState: 'flex' },
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
    computedOpenState() {
      return this.collapseOpen
    }
  },
  methods: {
    onCollapseHandle(index, state) {
      console.log(index, state)
      this.collapseOpen = { index, openState: state === 'none' ? 'flex' : 'none' }
    },
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
