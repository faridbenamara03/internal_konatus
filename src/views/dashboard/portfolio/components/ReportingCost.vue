<<<<<<< HEAD
<template>
  <div class="demand-view">
    <!-- <div class="p-1">
      <b-button variant="flat-primary">
        <feather-icon icon="RotateCwIcon" />
        Update
      </b-button>
    </div> -->
    <div
      class="border-top border-bottom"
      :style="`overflow-x:auto;`"
    >
      <div v-if="data !== null && data.type === 'portfolio'">
        <div
          v-for="(item, index) in c_data"
          :key="index"
          class="d-flex"
        >
          <div
            style="flex:8"
            class="border-right pr-2 pl-2"
            :style="`min-width:400px`"
          >
            <div v-if="index === 0">
              <br /><br />
            </div>
            <div class="border-bottom">
              <div class="row-custom boldTxt">
                <div
                  class="dataitem dataTitleItem d-flex portf-uppercase"
                  @click="onCollapseCLick(index)"
                >
                  <feather-icon
                    v-if="item.children.length > 0"
                    :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1"
                  />
                  {{ item.title }}
                </div>
              </div>
              <div v-if="opened === index">
                <div
                  v-for="(item1, jndex) in item.children"
                  :key="jndex"
                  class="boldTxt"
                >
                  <div
                    class="dataitem dataSubTitleItem"
                    @click="onChildCollapseCLick(jndex)"
                  >
                    <feather-icon
                      v-if="item1.children.length > 0"
                      :icon="openedChild === jndex ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                      size="16"
                      class="mr-1"
                    />
                    {{ item1.title }}
                  </div>
                  <div v-if="openedChild === jndex">
                    <div
                      v-for="(item2, jndex1) in item1.children"
                      :key="jndex1"
                      class="row-custom boldTxt"
                    >
                      <div class="dataitem dataSubTitleItem ">
                        {{ item2.title }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="(ft, i) in c_fields"
            :key="i"
            style="flex:3;"
            class="border-right"
          >
            <div
              v-if="index === 0"
              class="row-custom"
            >
              <div class="dataitem portf-uppercase text-center">
                {{ ft }}
              </div>
            </div>
            <div class="boldTxt valueitem">
              {{ ft === 'priority' ? priorities[item[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item[ft] : ft === 'currentPhase' ? item[ft] : formatCurrency(item[ft]) }}
            </div>
            <div v-if="opened === index">
              <div
                v-for="(item1, jndex) in item.children"
                :key="jndex"
                class="boldTxt"
              >
                <div class="valueitem">
                  {{ ft === 'priority' ? item1[ft] === null ? ' ' : priorities[item1[ft] - 1]  : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item1[ft] : ft === 'currentPhase' ? item1[ft] : formatCurrency(item1[ft]) }}
                </div>
                <div v-if="openedChild === jndex">
                  <div
                    v-for="(item2, jndex1) in item1.children"
                    :key="jndex1"
                    class="boldTxt"
                  >
                    <div class="valueitem">
                      {{ ft === 'priority' ? item2[ft] === null ? ' ' : priorities[item2[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item2[ft] : ft === 'currentPhase' ? item2[ft] : formatCurrency(item2[ft]) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="data !== null && data.type === 'company'">
        <div
          v-for="(item, index) in c_data"
          :key="index"
          class="d-flex"
        >
          <div
            style="flex:8"
            class="border-right pr-2 pl-2"
          >
            <div v-if="index === 0">
              <br /><br />
            </div>
            <div class="border-bottom">
              <div class="row-custom boldTxt">
                <div
                  class="dataitem dataTitleItem d-flex portf-uppercase"
                  @click="onCollapseCLick(index)"
                >
                  <feather-icon
                    v-if="item.children.length > 0"
                    :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1"
                  />
                  {{ item.title }}
                </div>
              </div>
              <div v-if="opened === index">
                <div
                  v-for="(item1, jndex) in item.children"
                  :key="jndex"
                  class="boldTxt"
                >
                  <div
                    class="dataitem dataSubTitleItem"
                    @click="onChildCollapseCLick(jndex)"
                  >
                    <feather-icon
                      v-if="item1.children.length > 0"
                      :icon="openedChild === jndex ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                      size="16"
                      class="mr-1"
                    />
                    {{ item1.title }}
                  </div>
                  <div v-if="openedChild === jndex">
                    <div
                      v-for="(item2, jndex1) in item1.children"
                      :key="jndex1"
                      class="row-custom boldTxt"
                    >
                      <div
                        class="dataitem dataSubTitleItem"
                        @click="onSubCollapseCLick(jndex)"
                      >
                        {{ item2.title }}
                      </div>
                      <div v-if="openedSub === jndex1">
                        <div
                          v-for="(item3, jndex2) in item2.children"
                          :key="jndex2"
                          class="row-custom boldTxt"
                        >
                          <div class="dataitem dataSubTitleItem">
                            {{ item3.title }}
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
            v-for="(ft, i) in c_fields"
            :key="i"
            style="flex:3;"
            class="border-right"
          >
            <div
              v-if="index === 0"
              class="row-custom"
            >
              <div class="dataitem portf-uppercase text-center">
                {{ ft }}
              </div>
            </div>
            <div class="boldTxt valueitem">
              {{ ft === 'priority' ? priorities[item[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item[ft] : ft === 'currentPhase' ? item[ft] : formatCurrency(item[ft]) }}
            </div>
            <div v-if="opened === index">
              <div
                v-for="(item1, jndex) in item.children"
                :key="jndex"
                class="boldTxt"
              >
                <div class="valueitem">
                  {{ ft === 'priority' ? item1[ft] === null ? ' ' : priorities[item1[ft] - 1]  : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item1[ft] : ft === 'currentPhase' ? item1[ft] : formatCurrency(item1[ft]) }}
                </div>
                <div v-if="openedChild === jndex">
                  <div
                    v-for="(item2, jndex1) in item1.children"
                    :key="jndex1"
                    class="boldTxt"
                  >
                    <div class="valueitem">
                      {{ ft === 'priority' ? item2[ft] === null ? ' ' : priorities[item2[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item2[ft] : ft === 'currentPhase' ? item2[ft] : formatCurrency(item2[ft]) }}
                    </div>
                    <div v-if="openedSub === jndex1">
                      <div
                        v-for="(item3, jndex2) in item2.children"
                        :key="jndex2"
                        class="boldTxt"
                      >
                        <div class="valueitem">
                          {{ ft === 'priority' ? item3[ft] === null ? ' ' : priorities[item3[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item3[ft] : ft === 'currentPhase' ? item3[ft] : formatCurrency(item3[ft]) }}
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
  padding: 16px;
}

.boldTxt {
  font-weight: bold;
  color: white;
}

.dataitem {
  margin: auto;
  padding: 16px;
  min-width: 170px;
}

.valueitem {
  margin: auto;
  padding: 16px;
  text-align: center;
  min-height: 50px;
  min-width: 170px;
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
      priorities: this.$store.state.globalState.priorityOptions,
      colorArr: ['darkgreen', 'darkred', 'darkcyan'],
      iconArr: ['ArrowUpIcon', 'ArrowDownIcon', 'MinusIcon'],
      collapseOpen: { index: 0, openState: 'flex' },
      opened: 0,
      openedChild: 0,
      openedSub: 0,
    }
  },
  computed: {
    c_data() {
      if (this.data === null) return []
      if (this.data.type === 'portfolio' && this.data.children && this.data.children.length > 0) {
        const ndt = this.data.children.map(program => {
          let programEngaged = 0
          let programDemand = 0
          let programRealEstimated = 0
          let programAuthorized = 0
          let programSpent = 0
          let programCustomerEx = 0
          let programSalesEx = 0
          let programScoring = 0
          let programRoi = 0
          let programValue = 0
          let programEarnValue = 0
          if (program.children && program.children.length > 0) {
            program.children.map(project => {
              if (project.children.length > 0) {
                project.children.map(subproject => {
                  programEngaged += parseInt(subproject.engaged ? subproject.engaged : 0, 10)
                  programDemand += parseInt(subproject.demand ? subproject.demand : 0, 10)
                  programRealEstimated += parseInt(subproject.realEstimated ? subproject.realEstimated : 0, 10)
                  programAuthorized += parseInt(subproject.authorized ? subproject.authorized : 0, 10)
                  programSpent += parseInt(subproject.spent ? subproject.spent : 0, 10)
                  programCustomerEx += parseInt(subproject.customerEx ? subproject.customerEx : 0, 10)
                  programSalesEx += parseInt(subproject.salesEx ? subproject.salesEx : 0, 10)
                  programScoring += parseInt(subproject.scoring ? subproject.scoring : 0, 10)
                  programRoi += parseInt(subproject.roi ? subproject.roi : 0, 10)
                  programValue += parseInt(subproject.value ? subproject.value : 0, 10)
                  programEarnValue += parseInt(subproject['earn value'] ? subproject['earn value'] : 0, 10)
                  return null
                })
              }
              programEngaged += parseInt(project.engaged ? project.engaged : 0, 10)
              programDemand += parseInt(project.demand ? project.demand : 0, 10)
              programRealEstimated += parseInt(project.realEstimated ? project.realEstimated : 0, 10)
              programAuthorized += parseInt(project.authorized ? project.authorized : 0, 10)
              programSpent += parseInt(project.spent ? project.spent : 0, 10)
              programCustomerEx += parseInt(project.customerEx ? project.customerEx : 0, 10)
              programSalesEx += parseInt(project.salesEx ? project.salesEx : 0, 10)
              programScoring += parseInt(project.scoring ? project.scoring : 0, 10)
              programRoi += parseInt(project.roi ? project.roi : 0, 10)
              programValue += parseInt(project.value ? project.value : 0, 10)
              programEarnValue += parseInt(project['earn value'] ? project['earn value'] : 0, 10)
              return null
            })
          }
          const nd = { ...program }
          nd.engaged = programEngaged
          nd.demand = programDemand
          nd.realEstimated = programRealEstimated
          nd.authorized = programAuthorized
          nd.spent = programSpent
          nd.customerEx = programCustomerEx
          nd.salesEx = programSalesEx
          nd.scoring = programScoring
          nd.roi = programRoi
          nd.value = programValue
          nd['earn value'] = programEarnValue
          return nd
        })
        return ndt
      }
      const ndt = this.data.children.map(t => {
        let engaged = 0
        let demand = 0
        let realEstimated = 0
        let authorized = 0
        let spent = 0
        let customerEx = 0
        let salesEx = 0
        let scoring = 0
        let roi = 0
        let value = 0
        let earnvalue = 0
        if (t.children && t.children.length > 0) {
          const updatedT1s = []
          t.children.map(t1 => {
            const updatedT1 = { ...t1 }
            let t1Engaged = 0
            let t1Demand = 0
            let t1RealEstimated = 0
            let t1Authorized = 0
            let t1Spent = 0
            let t1customerEx = 0
            let t1salesEx = 0
            let t1scoring = 0
            let t1roi = 0
            let t1value = 0
            let t1earnvalue = 0
            if (t1.children && t1.children.length > 0) {
              const updatedT2s = []
              t1.children.map(t2 => {
                const updatedT2 = { ...t2 }
                if (t2.children && t2.children.length > 0) {
                  let t2Engaged = 0
                  let t2Demand = 0
                  let t2RealEstimated = 0
                  let t2Authorized = 0
                  let t2Spent = 0
                  let t2customerEx = 0
                  let t2salesEx = 0
                  let t2scoring = 0
                  let t2roi = 0
                  let t2value = 0
                  let t2earnvalue = 0
                  t2.children.map(t3 => {
                    engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    realEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    roi += parseInt(t3.roi ? t3.roi : 0, 10)
                    value += parseInt(t3.value ? t3.value : 0, 10)
                    earnvalue += parseInt(t3['earn value'] ? t3['earn value'] : 0, 10)
                    t2Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    t2Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    t2RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    t2Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    t2Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    t2customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    t2salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    t2scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    t2roi += parseInt(t3.roi ? t3.roi : 0, 10)
                    t2value += parseInt(t3.value ? t3.value : 0, 10)
                    t2earnvalue += parseInt(t3['earn value'] ? t3['earn value'] : 0, 10)
                    t1Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    t1Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    t1RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    t1Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    t1Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    t1customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    t1salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    t1scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    t1roi += parseInt(t3.roi ? t3.roi : 0, 10)
                    t1value += parseInt(t3.value ? t3.value : 0, 10)
                    t1earnvalue += parseInt(t3['earn value'] ? t3['earn value'] : 0, 10)
                    return null
                  })
                  updatedT2.engaged = t2Engaged
                  updatedT2.demand = t2Demand
                  updatedT2.realEstimated = t2RealEstimated
                  updatedT2.authorized = t2Authorized
                  updatedT2.spent = t2Spent
                  updatedT2.customerEx = t2customerEx
                  updatedT2.salesEx = t2salesEx
                  updatedT2.scoring = t2scoring
                  updatedT2.roi = t2roi
                  updatedT2.value = t2value
                  updatedT2['earn value'] = t2earnvalue
                }
                engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                demand += parseInt(t2.demand ? t2.demand : 0, 10)
                realEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                spent += parseInt(t2.spent ? t2.spent : 0, 10)
                customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                roi += parseInt(t2.roi ? t2.roi : 0, 10)
                value += parseInt(t2.value ? t2.value : 0, 10)
                earnvalue += parseInt(t2['earn value'] ? t2['earn value'] : 0, 10)
                t1Engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                t1Demand += parseInt(t2.demand ? t2.demand : 0, 10)
                t1RealEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                t1Authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                t1Spent += parseInt(t2.spent ? t2.spent : 0, 10)
                t1customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                t1salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                t1scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                t1roi += parseInt(t2.roi ? t2.roi : 0, 10)
                t1value += parseInt(t2.value ? t2.value : 0, 10)
                t1earnvalue += parseInt(t2['earn value'] ? t2['earn value'] : 0, 10)
                updatedT2s.push(updatedT2)
                return null
              })
              updatedT1.engaged = t1Engaged
              updatedT1.demand = t1Demand
              updatedT1.realEstimated = t1RealEstimated
              updatedT1.authorized = t1Authorized
              updatedT1.spent = t1Spent
              updatedT1.customerEx = t1customerEx
              updatedT1.salesEx = t1salesEx
              updatedT1.scoring = t1scoring
              updatedT1.roi = t1roi
              updatedT1.value = t1value
              updatedT1['earn value'] = t1earnvalue
            }
            updatedT1s.push(updatedT1)
            return null
          })
          const nd = { ...t }
          nd.engaged = engaged
          nd.demand = demand
          nd.realEstimated = realEstimated
          nd.authorized = authorized
          nd.spent = spent
          nd.customerEx = customerEx
          nd.salesEx = salesEx
          nd.scoring = scoring
          nd.roi = roi
          nd.value = value
          nd['earn value'] = earnvalue
          nd.children = updatedT1s
          return nd
        }
        return t
      })
      return ndt
    },
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
      if (value === undefined || value === null) return 0
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
    onCollapseCLick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
    },
    onChildCollapseCLick(index) {
      if (index === this.openedChild) {
        this.openedChild = -1
      } else {
        this.openedChild = index
      }
    },
    onSubCollapseCLick(index) {
      if (index === this.openedSub) {
        this.openedSub = -1
      } else {
        this.openedSub = index
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio-reporting-plan.scss';
</style>
=======
<template>
  <div class="demand-view">
    <!-- <div class="p-1">
      <b-button variant="flat-primary">
        <feather-icon icon="RotateCwIcon" />
        Update
      </b-button>
    </div> -->
    <div
      class="border-top border-bottom"
      :style="`overflow-x:auto;`"
    >
      <div v-if="data !== null && data.type === 'portfolio'">
        <div
          v-for="(item, index) in c_data"
          :key="index"
          class="d-flex"
        >
          <div
            style="flex:8"
            class="border-right pr-2 pl-2"
            :style="`min-width:400px`"
          >
            <div v-if="index === 0">
              <br><br>
            </div>
            <div class="border-bottom">
              <div class="row-custom boldTxt">
                <div
                  class="dataitem dataTitleItem d-flex portf-uppercase"
                  @click="onCollapseCLick(index)"
                >
                  <feather-icon
                    v-if="item.children.length > 0"
                    :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1"
                  />
                  {{ item.title }}
                </div>
              </div>
              <div v-if="opened === index">
                <div
                  v-for="(item1, jndex) in item.children"
                  :key="jndex"
                  class="boldTxt"
                >
                  <div
                    class="dataitem dataSubTitleItem"
                    @click="onChildCollapseCLick(jndex)"
                  >
                    <feather-icon
                      v-if="item1.children.length > 0"
                      :icon="openedChild === jndex ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                      size="16"
                      class="mr-1"
                    />
                    {{ item1.title }}
                  </div>
                  <div v-if="openedChild === jndex">
                    <div
                      v-for="(item2, jndex1) in item1.children"
                      :key="jndex1"
                      class="row-custom boldTxt"
                    >
                      <div class="dataitem dataSubTitleItem ">
                        {{ item2.title }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-for="(ft, i) in c_fields"
            :key="i"
            style="flex:3;"
            class="border-right"
          >
            <div
              v-if="index === 0"
              class="row-custom"
            >
              <div class="dataitem portf-uppercase text-center">
                {{ ft }}
              </div>
            </div>
            <div class="boldTxt valueitem">
              {{ ft === 'priority' ? priorities[item[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item[ft] : ft === 'currentPhase' ? item[ft] : formatCurrency(item[ft]) }}
            </div>
            <div v-if="opened === index">
              <div
                v-for="(item1, jndex) in item.children"
                :key="jndex"
                class="boldTxt"
              >
                <div class="valueitem">
                  {{ ft === 'priority' ? item1[ft] === null ? ' ' : priorities[item1[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item1[ft] : ft === 'currentPhase' ? item1[ft] : formatCurrency(item1[ft]) }}
                </div>
                <div v-if="openedChild === jndex">
                  <div
                    v-for="(item2, jndex1) in item1.children"
                    :key="jndex1"
                    class="boldTxt"
                  >
                    <div class="valueitem">
                      {{ ft === 'priority' ? item2[ft] === null ? ' ' : priorities[item2[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item2[ft] : ft === 'currentPhase' ? item2[ft] : formatCurrency(item2[ft]) }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else-if="data !== null && data.type === 'company'">
        <div
          v-for="(item, index) in c_data"
          :key="index"
          class="d-flex"
        >
          <div
            style="flex:8"
            class="border-right pr-2 pl-2"
          >
            <div v-if="index === 0">
              <br><br>
            </div>
            <div class="border-bottom">
              <div class="row-custom boldTxt">
                <div
                  class="dataitem dataTitleItem d-flex portf-uppercase"
                  @click="onCollapseCLick(index)"
                >
                  <feather-icon
                    v-if="item.children.length > 0"
                    :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                    size="16"
                    class="mr-1"
                  />
                  {{ item.title }}
                </div>
              </div>
              <div v-if="opened === index">
                <div
                  v-for="(item1, jndex) in item.children"
                  :key="jndex"
                  class="boldTxt"
                >
                  <div
                    class="dataitem dataSubTitleItem"
                    @click="onChildCollapseCLick(jndex)"
                  >
                    <feather-icon
                      v-if="item1.children.length > 0"
                      :icon="openedChild === jndex ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                      size="16"
                      class="mr-1"
                    />
                    {{ item1.title }}
                  </div>
                  <div v-if="openedChild === jndex">
                    <div
                      v-for="(item2, jndex1) in item1.children"
                      :key="jndex1"
                      class="row-custom boldTxt"
                    >
                      <div
                        class="dataitem dataSubTitleItem"
                        @click="onSubCollapseCLick(jndex)"
                      >
                        {{ item2.title }}
                      </div>
                      <div v-if="openedSub === jndex1">
                        <div
                          v-for="(item3, jndex2) in item2.children"
                          :key="jndex2"
                          class="row-custom boldTxt"
                        >
                          <div class="dataitem dataSubTitleItem">
                            {{ item3.title }}
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
            v-for="(ft, i) in c_fields"
            :key="i"
            style="flex:3;"
            class="border-right"
          >
            <div
              v-if="index === 0"
              class="row-custom"
            >
              <div class="dataitem portf-uppercase text-center">
                {{ ft }}
              </div>
            </div>
            <div class="boldTxt valueitem">
              {{ ft === 'priority' ? priorities[item[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item[ft] : ft === 'currentPhase' ? item[ft] : formatCurrency(item[ft]) }}
            </div>
            <div v-if="opened === index">
              <div
                v-for="(item1, jndex) in item.children"
                :key="jndex"
                class="boldTxt"
              >
                <div class="valueitem">
                  {{ ft === 'priority' ? item1[ft] === null ? ' ' : priorities[item1[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item1[ft] : ft === 'currentPhase' ? item1[ft] : formatCurrency(item1[ft]) }}
                </div>
                <div v-if="openedChild === jndex">
                  <div
                    v-for="(item2, jndex1) in item1.children"
                    :key="jndex1"
                    class="boldTxt"
                  >
                    <div class="valueitem">
                      {{ ft === 'priority' ? item2[ft] === null ? ' ' : priorities[item2[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item2[ft] : ft === 'currentPhase' ? item2[ft] : formatCurrency(item2[ft]) }}
                    </div>
                    <div v-if="openedSub === jndex1">
                      <div
                        v-for="(item3, jndex2) in item2.children"
                        :key="jndex2"
                        class="boldTxt"
                      >
                        <div class="valueitem">
                          {{ ft === 'priority' ? item3[ft] === null ? ' ' : priorities[item3[ft] - 1] : ft === 'cost compare' || ft === 'time compare' || ft === 'accomplishment' ? "%" + item3[ft] : ft === 'currentPhase' ? item3[ft] : formatCurrency(item3[ft]) }}
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
  padding: 16px;
}

.boldTxt {
  font-weight: bold;
  color: white;
}

.dataitem {
  margin: auto;
  padding: 16px;
  min-width: 170px;
}

.valueitem {
  margin: auto;
  padding: 16px;
  text-align: center;
  min-height: 50px;
  min-width: 170px;
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
      priorities: this.$store.state.globalState.priorityOptions,
      colorArr: ['darkgreen', 'darkred', 'darkcyan'],
      iconArr: ['ArrowUpIcon', 'ArrowDownIcon', 'MinusIcon'],
      collapseOpen: { index: 0, openState: 'flex' },
      opened: 0,
      openedChild: 0,
      openedSub: 0,
    }
  },
  computed: {
    c_data() {
      if (this.data === null) return []
      if (this.data.type === 'portfolio' && this.data.children && this.data.children.length > 0) {
        const ndt = this.data.children.map(program => {
          let programEngaged = 0
          let programDemand = 0
          let programRealEstimated = 0
          let programAuthorized = 0
          let programSpent = 0
          let programCustomerEx = 0
          let programSalesEx = 0
          let programScoring = 0
          let programRoi = 0
          let programValue = 0
          let programEarnValue = 0
          if (program.children && program.children.length > 0) {
            program.children.map(project => {
              if (project.children.length > 0) {
                project.children.map(subproject => {
                  programEngaged += parseInt(subproject.engaged ? subproject.engaged : 0, 10)
                  programDemand += parseInt(subproject.demand ? subproject.demand : 0, 10)
                  programRealEstimated += parseInt(subproject.realEstimated ? subproject.realEstimated : 0, 10)
                  programAuthorized += parseInt(subproject.authorized ? subproject.authorized : 0, 10)
                  programSpent += parseInt(subproject.spent ? subproject.spent : 0, 10)
                  programCustomerEx += parseInt(subproject.customerEx ? subproject.customerEx : 0, 10)
                  programSalesEx += parseInt(subproject.salesEx ? subproject.salesEx : 0, 10)
                  programScoring += parseInt(subproject.scoring ? subproject.scoring : 0, 10)
                  programRoi += parseInt(subproject.roi ? subproject.roi : 0, 10)
                  programValue += parseInt(subproject.value ? subproject.value : 0, 10)
                  programEarnValue += parseInt(subproject['earn value'] ? subproject['earn value'] : 0, 10)
                  return null
                })
              }
              programEngaged += parseInt(project.engaged ? project.engaged : 0, 10)
              programDemand += parseInt(project.demand ? project.demand : 0, 10)
              programRealEstimated += parseInt(project.realEstimated ? project.realEstimated : 0, 10)
              programAuthorized += parseInt(project.authorized ? project.authorized : 0, 10)
              programSpent += parseInt(project.spent ? project.spent : 0, 10)
              programCustomerEx += parseInt(project.customerEx ? project.customerEx : 0, 10)
              programSalesEx += parseInt(project.salesEx ? project.salesEx : 0, 10)
              programScoring += parseInt(project.scoring ? project.scoring : 0, 10)
              programRoi += parseInt(project.roi ? project.roi : 0, 10)
              programValue += parseInt(project.value ? project.value : 0, 10)
              programEarnValue += parseInt(project['earn value'] ? project['earn value'] : 0, 10)
              return null
            })
          }
          const nd = { ...program }
          nd.engaged = programEngaged
          nd.demand = programDemand
          nd.realEstimated = programRealEstimated
          nd.authorized = programAuthorized
          nd.spent = programSpent
          nd.customerEx = programCustomerEx
          nd.salesEx = programSalesEx
          nd.scoring = programScoring
          nd.roi = programRoi
          nd.value = programValue
          nd['earn value'] = programEarnValue
          return nd
        })
        return ndt
      }
      const ndt = this.data.children.map(t => {
        let engaged = 0
        let demand = 0
        let realEstimated = 0
        let authorized = 0
        let spent = 0
        let customerEx = 0
        let salesEx = 0
        let scoring = 0
        let roi = 0
        let value = 0
        let earnvalue = 0
        if (t.children && t.children.length > 0) {
          const updatedT1s = []
          t.children.map(t1 => {
            const updatedT1 = { ...t1 }
            let t1Engaged = 0
            let t1Demand = 0
            let t1RealEstimated = 0
            let t1Authorized = 0
            let t1Spent = 0
            let t1customerEx = 0
            let t1salesEx = 0
            let t1scoring = 0
            let t1roi = 0
            let t1value = 0
            let t1earnvalue = 0
            if (t1.children && t1.children.length > 0) {
              const updatedT2s = []
              t1.children.map(t2 => {
                const updatedT2 = { ...t2 }
                if (t2.children && t2.children.length > 0) {
                  let t2Engaged = 0
                  let t2Demand = 0
                  let t2RealEstimated = 0
                  let t2Authorized = 0
                  let t2Spent = 0
                  let t2customerEx = 0
                  let t2salesEx = 0
                  let t2scoring = 0
                  let t2roi = 0
                  let t2value = 0
                  let t2earnvalue = 0
                  t2.children.map(t3 => {
                    engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    realEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    roi += parseInt(t3.roi ? t3.roi : 0, 10)
                    value += parseInt(t3.value ? t3.value : 0, 10)
                    earnvalue += parseInt(t3['earn value'] ? t3['earn value'] : 0, 10)
                    t2Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    t2Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    t2RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    t2Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    t2Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    t2customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    t2salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    t2scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    t2roi += parseInt(t3.roi ? t3.roi : 0, 10)
                    t2value += parseInt(t3.value ? t3.value : 0, 10)
                    t2earnvalue += parseInt(t3['earn value'] ? t3['earn value'] : 0, 10)
                    t1Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    t1Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    t1RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    t1Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    t1Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    t1customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    t1salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    t1scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    t1roi += parseInt(t3.roi ? t3.roi : 0, 10)
                    t1value += parseInt(t3.value ? t3.value : 0, 10)
                    t1earnvalue += parseInt(t3['earn value'] ? t3['earn value'] : 0, 10)
                    return null
                  })
                  updatedT2.engaged = t2Engaged
                  updatedT2.demand = t2Demand
                  updatedT2.realEstimated = t2RealEstimated
                  updatedT2.authorized = t2Authorized
                  updatedT2.spent = t2Spent
                  updatedT2.customerEx = t2customerEx
                  updatedT2.salesEx = t2salesEx
                  updatedT2.scoring = t2scoring
                  updatedT2.roi = t2roi
                  updatedT2.value = t2value
                  updatedT2['earn value'] = t2earnvalue
                }
                engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                demand += parseInt(t2.demand ? t2.demand : 0, 10)
                realEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                spent += parseInt(t2.spent ? t2.spent : 0, 10)
                customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                roi += parseInt(t2.roi ? t2.roi : 0, 10)
                value += parseInt(t2.value ? t2.value : 0, 10)
                earnvalue += parseInt(t2['earn value'] ? t2['earn value'] : 0, 10)
                t1Engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                t1Demand += parseInt(t2.demand ? t2.demand : 0, 10)
                t1RealEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                t1Authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                t1Spent += parseInt(t2.spent ? t2.spent : 0, 10)
                t1customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                t1salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                t1scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                t1roi += parseInt(t2.roi ? t2.roi : 0, 10)
                t1value += parseInt(t2.value ? t2.value : 0, 10)
                t1earnvalue += parseInt(t2['earn value'] ? t2['earn value'] : 0, 10)
                updatedT2s.push(updatedT2)
                return null
              })
              updatedT1.engaged = t1Engaged
              updatedT1.demand = t1Demand
              updatedT1.realEstimated = t1RealEstimated
              updatedT1.authorized = t1Authorized
              updatedT1.spent = t1Spent
              updatedT1.customerEx = t1customerEx
              updatedT1.salesEx = t1salesEx
              updatedT1.scoring = t1scoring
              updatedT1.roi = t1roi
              updatedT1.value = t1value
              updatedT1['earn value'] = t1earnvalue
            }
            updatedT1s.push(updatedT1)
            return null
          })
          const nd = { ...t }
          nd.engaged = engaged
          nd.demand = demand
          nd.realEstimated = realEstimated
          nd.authorized = authorized
          nd.spent = spent
          nd.customerEx = customerEx
          nd.salesEx = salesEx
          nd.scoring = scoring
          nd.roi = roi
          nd.value = value
          nd['earn value'] = earnvalue
          nd.children = updatedT1s
          return nd
        }
        return t
      })
      return ndt
    },
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
      if (value === undefined || value === null) return 0
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
    onCollapseCLick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
    },
    onChildCollapseCLick(index) {
      if (index === this.openedChild) {
        this.openedChild = -1
      } else {
        this.openedChild = index
      }
    },
    onSubCollapseCLick(index) {
      if (index === this.openedSub) {
        this.openedSub = -1
      } else {
        this.openedSub = index
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio-reporting-plan.scss';
</style>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
