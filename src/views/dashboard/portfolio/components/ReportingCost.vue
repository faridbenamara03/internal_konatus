<template>
  <div class="demand-view">
    <!-- <div class="p-1">
      <b-button variant="flat-primary">
        <feather-icon icon="RotateCwIcon" />
        Update
      </b-button>
    </div> -->
    <div class="border-top border-bottom">
      <div v-for="(item, index) in data.children" :key="index" class="d-flex">
        <div style="flex:6" class="border-right pr-2 pl-2">
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
                {{ item.title }}
              </div>
            </div>
            <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
              :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
              <div class="dataitem dataSubTitleItem">
                <feather-icon :style="`color:${colorArr[jndex]}`" :icon="`${iconArr[jndex]}`" class="mr-1" />{{
                  item1.title
                }}
              </div>
            </div>
          </div>
        </div>
        <div v-for="(item2, i) in c_fields" :key="i" style="flex:3" class="border-right">
          <div v-if="index === 0" class="row-custom">
            <div class="dataitem">{{ item2 }}</div>
          </div>
          <div v-else class="row-custom"></div>
          <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
            :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
            <div class="dataitem"> {{ item2 === 'priority' ? priorities[item1[item2] - 1] : item2 === 'deadline' || item2 === 'phase1startdate' || item2 == 'phase1enddate' || item2 === 'phase2startdate' || item2 == 'phase2enddate' || item2 === 'phase3startdate' || item2 == 'phase3enddate' || item2 === 'phase4startdate' || item2 == 'phase4enddate' ? dateFormat(item1[item2]) : item2 === 'architect' || item2 === 'portfolioHead' || item2 === 'productManager' || item2 === 'directionHead' || item2 === 'programDirector' || item2 === 'projectManager' || item2 === 'architectHead' || item2 === 'sponsor' || item2 === 'productLine' ? item1[item2] : formatCurrency(item1[item2]) }}</div>
          </div>
        </div>
        <!-- <div style="flex:3" class="border-right">
          <div v-if="index === 0" class="row-custom">
            <div class="dataitem">{{ c_fields[0] }}</div>
          </div>
          <div v-else class="row-custom"></div>
          <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
            :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
            <div class="dataitem">{{ item1.demand }}</div>
          </div>
        </div>
        <div style="flex:3" class="border-right">
          <div v-if="index === 0" class="row-custom">
            <div class="dataitem">{{ c_fields[1] }}</div>
          </div>
          <div v-else class="row-custom"></div>
          <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
            :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
            <div class="dataitem">{{ item1.engaged }}</div>
          </div>
        </div>
        <div style="flex:3" class="border-right">
          <div v-if="index === 0" class="row-custom">
            <div class="dataitem">{{ c_fields[2] }}</div>
          </div>
          <div v-else class="row-custom"></div>
          <div v-for="(item1, jndex) in item.children" :key="jndex" class="row-custom boldTxt"
            :style="'display:' + index === computedOpenState.index ? computedOpenState.openState : 'flex'">
            <div class="dataitem">{{ item1.realEstimated }}</div>
          </div>
        </div> -->
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
</style>

<script>
import moment from 'moment'
// import { BButton } from 'bootstrap-vue'

export default {
  components: {
    // BButton
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
  },
  data() {
    return {
      priorities: ['Highest', 'High', 'Medium', 'Low', 'Lowest'],
      colorArr: ['darkgreen', 'darkred', 'darkcyan'],
      iconArr: ['ArrowUpIcon', 'ArrowDownIcon', 'MinusIcon'],
      collapseOpen: { index: 0, openState: 'flex' },
    }
  },
  computed: {
    computedOpenState() {
      return this.collapseOpen
    },
    c_fields() {
      return this.fields.slice(1, this.fields.length - 1)
    }
  },
  methods: {
    onCollapseHandle(index, state) {
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
@import '@core/scss/vue/pages/dashboard-portfolio-reporting-plan.scss';
</style>
