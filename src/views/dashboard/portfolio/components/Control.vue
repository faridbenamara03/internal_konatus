<template>
  <div style="overflow-x:auto">
    <div class="portf-demand-view">
      <div
        style="background-color:#1A2239;height:40px"
        :style="`min-width: ${200 * c_fields.length}px`"
      />
      <div
        class="portf-row portf-bold portf-table-header portf-uppercase"
        :style="`min-width: ${200 * c_fields.length}px`"
      >
        <div
          class="part1"
          :style="`min-width: 200px`"
        >
          {{ data === null ? c_navobj.title : data.title === '' || data.title === null || data.title === undefined ? c_navobj.title : data.title }}
        </div>
        <div
          class="part2 mr-2"
          :style="`min-width: ${150 * c_fields.length}px`"
        >
          <div
            v-for="(ft, fi) in c_fields"
            :key="fi"
            class="data-child mr-1 portf-uppercase"
            :style="`min-width:150px`"
          >
            {{ ft }}
          </div>
        </div>
        <div
          v-for="(item, index) in teams"
          :key="index"
          :style="`width:${collapsedT.indexOf(index) > -1 ? 120 : 400}px;text-align:center;`"
          class="mr-1 ml-1"
        >
          <div
            style="position:relative;top:-43px;height:0px;cursor:pointer"
            @click="onTeamCollapse(index)"
          >
            <feather-icon
              style="margin-top:-3px"
              :icon="`${collapsedT.indexOf(index) > -1 ? 'PlusIcon' : 'MinusIcon'}`"
              size="16"
            />
            {{ item }}
          </div>
          <div :style="`position:relative;top:-20px;height:4px;background-color:${colorsA[index]};border-radius:3px`" />
          <div style="display:flex;justify-content:space-between;">
            <template v-if="collapsedT.indexOf(index) > -1">
              <div style="width:100%;text-align:center">
                total
              </div>
            </template>
            <template v-else>
              <div
                v-for="(item1, jndex) in team_fields"
                :key="jndex"
                style="width:25%;text-align:center"
              >
                {{ item1 }}
              </div>
            </template>
          </div>
        </div>
      </div>
      <div
        v-if="data !== null"
      >
        <div
          v-for="(item, index) in c_data"
          :key="index"
        >
          <div
            class="portf-row portf-bold portf-sub-header portf-table-row color-white row-header-bg border-btm-lgt"
            :class="{'inner-sdw': index === 0}"
            :style="`min-width: ${200 * c_fields.length}px`"
          >
            <div
              class="part1 portf-uppercase"
              style="cursor:pointer"
              @click="onCollapseCLick(index)"
              :style="`min-width: 200px`"
            >
              <feather-icon
                v-if="item.children"
                :icon="opened === index ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                size="16"
                class="mr-1"
              />
              {{ item.title }}
            </div>
            <div
              class="part2 mr-2"
              :style="`min-width: ${150 * c_fields.length}px`"
            >
              <div
                v-for="(ft, fi) in c_fields"
                :key="fi"
                class="data-child mr-1"
                :style="`min-width:150px`"
              >
                <span v-if="ft === 'priority'">{{ priorityOptions[item[ft] - 1] }}</span>
                <span v-else-if="ft === 'next_gate'">{{ dateFormat(item[ft]) }}</span>
                <span v-else-if="ft === 'demand' || ft === 'value' || ft === 'authorized'">{{ formatCurrency(item[ft]) }}</span>
                <span v-else>{{ item[ft] }}</span>
              </div>
            </div>
            <div
              v-for="(item, index1) in teams"
              :key="index1"
              :style="`width:${collapsedT.indexOf(index1) > -1 ? 120 : 400}px;text-align:center;`"
              class="mr-1 ml-1"
            >
              <div style="display:flex;justify-content:space-between;">
                <template v-if="collapsedT.indexOf(index1) > -1">
                  <div style="width:100%;text-align:center">
                    {{ teamD1[index].length > 0 ? teamD1[index][index1][3] : null }}
                  </div>
                </template>
                <template v-else>
                  <div
                    v-for="(item1, jndex) in team_fields"
                    :key="jndex"
                    style="width:25%;text-align:center"
                  >
                    {{ teamD1[index].length > 0 ? teamD1[index][index1][jndex] : null }}
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div v-if="opened === index">
            <div
              v-for="(item1, index1) in item.children"
              :key="index1"
            >
              <div
                class="portf-row portf-table-row font-14 border-bottom-dm"
                :class="{'inner-sdw': index1 === 0}"
                :style="`min-width: ${200 * c_fields.length}px`"
              >
                <div
                  class="part1 portf-bold pl-2"
                  :style="`min-width: 200px`"
                >
                  {{ item1.title }}
                </div>
                <div
                  class="part2 mr-2"
                  :style="`min-width: ${150 * c_fields.length}px`"
                >
                  <div
                    v-for="(ft, fi) in c_fields"
                    :key="fi"
                    class="data-child mr-1"
                    :style="`min-width: 150px`"
                  >
                    <span v-if="ft === 'priority'">{{ priorityOptions[item1[ft] - 1] }}</span>
                    <span v-else-if="ft === 'next_gate'">{{ dateFormat(item1[ft]) }}</span>
                    <span v-else-if="ft === 'demand' || ft === 'value' || ft === 'authorized'">{{ formatCurrency(item1[ft]) }}</span>
                    <span v-else>{{ item1[ft] }}</span>
                  </div>
                </div>
                <div
                  v-for="(item, tndex) in teams"
                  :key="tndex"
                  :style="`width:${collapsedT.indexOf(tndex) > -1 ? 120 : 400}px;text-align:center;`"
                  class="mr-1 ml-1"
                >
                  <div style="display:flex;justify-content:space-between;">
                    <template v-if="collapsedT.indexOf(tndex) > -1">
                      <div style="width:100%;text-align:center">
                        {{ teamD[index][index1].length > 0 ? teamD[index][index1][index][3] : null }}
                      </div>
                    </template>
                    <template v-else>
                      <div
                        v-for="(item1, jndex) in team_fields"
                        :key="jndex"
                        style="width:25%;text-align:center"
                      >
                        {{ teamD[index][index1].length > 0 ? teamD[index][index1][tndex][jndex] : null }}
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="portf-row portf-bold portf-table-header portf-uppercase">
        <div
          class="part1"
          style="color:#66ffff"
        >
          Total Team Capacity
        </div>
        <div class="part2 mr-2">
          <div
            v-for="(ft, fi) in c_fields"
            :key="fi"
            class="data-child mr-1 portf-uppercase"
            :style="`width:${100 / c_fields.length}%`"
          >
            <div
              class="d-flex"
              style="height:100%;width:100%;border:1px solid grey;border-radius:5px;justify-content:space-between;"
            >
              <div style="font-size:12px;color:#FFFFFF80;padding:2px 8px;">
                Info
              </div>
              <div>
                <feather-icon
                  icon="PlusIcon"
                  style="color:#FFFFFF80;margin-bottom:2px;margin-right:8px;"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(item, index) in teams"
          :key="index"
          :style="`width:${collapsedT.indexOf(index) > -1 ? 120 : 400}px;text-align:center;`"
          class="mr-1 ml-1"
        >
          <div style="display:flex;justify-content:space-between;">
            <template v-if="collapsedT.indexOf(index) > -1">
              <div style="width:100%;text-align:center">
                <span :style="`color: hsl(${170 - (percentD[index][3] / 200 * 170)}, 100%, 50%)`">{{ percentD[index][3] }}%</span>
              </div>
            </template>
            <template v-else>
              <div
                v-for="(item1, jndex) in team_fields"
                :key="jndex"
                style="width:25%;text-align:center"
              >
                <span :style="`color: hsl(${170 - (percentD[index][jndex] / 200 * 170)}, 100%, 50%)`">{{ percentD[index][jndex] }}%</span>
              </div>
            </template>
          </div>
        </div>
      </div>
      <b-pagination
        :total-rows="140"
        :per-page="10"
        first-number
        last-number
        class="mb-1 mt-2"
        prev-class="prev-item"
        next-class="next-item"
      >
        <template #prev-text>
          <feather-icon
            icon="ChevronLeftIcon"
            size="18"
          />
        </template>
        <template #next-text>
          <feather-icon
            icon="ChevronRightIcon"
            size="18"
          />
        </template>
      </b-pagination>
    </div>
  </div>
</template>

<script>
import {
  BPagination
} from 'bootstrap-vue'
import moment from 'moment'

export default {
  components: {
    BPagination
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    controlData: {
      type: Array,
      default: () => [],
    },
    fields: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      collapsedT: [],
      opened: 0,
      priorityOptions: ['Highest', 'High', 'Medium', 'Low', 'Lowest'],
      // c_fields: ['priority', 'value', 'budget', 'engaged', 'quote', 'demand', 'realEstimated', 'authorised', 'spent', 'next_gate'],
      // c_fields: ['priority', 'value', 'budget', 'next_gate'],
      // fields: ['priority', 'value', 'demand'],
      team_fields: ['mgt & study', 'dev', 'test', 'total'],
      colorsA: ['red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      teamD1: [],
      teamD: [],
      teams: [],
      percentD: [
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
        [parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10), parseInt(Math.random() * 200, 10)],
      ]
      // percentD: []
    }
  },
  watch: {
      data: {
          immediate: true,
          handler(newVal) {
            this.initializeData(newVal) // ??
          },
      },
  },
  computed: {
    c_data() {
      // console.log("CCC:", this.data)
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
                    t2Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    t2Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    t2RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    t2Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    t2Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    t2customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    t2salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    t2scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    t2roi += parseInt(t3.roi ? t3.roi : 0, 10)
                    t1Engaged += parseInt(t3.engaged ? t3.engaged : 0, 10)
                    t1Demand += parseInt(t3.demand ? t3.demand : 0, 10)
                    t1RealEstimated += parseInt(t3.realEstimated ? t3.realEstimated : 0, 10)
                    t1Authorized += parseInt(t3.authorized ? t3.authorized : 0, 10)
                    t1Spent += parseInt(t3.spent ? t3.spent : 0, 10)
                    t1customerEx += parseInt(t3.customerEx ? t3.customerEx : 0, 10)
                    t1salesEx += parseInt(t3.salesEx ? t3.salesEx : 0, 10)
                    t1scoring += parseInt(t3.scoring ? t3.scoring : 0, 10)
                    t1roi += parseInt(t3.roi ? t3.roi : 0, 10)
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
                t1Engaged += parseInt(t2.engaged ? t2.engaged : 0, 10)
                t1Demand += parseInt(t2.demand ? t2.demand : 0, 10)
                t1RealEstimated += parseInt(t2.realEstimated ? t2.realEstimated : 0, 10)
                t1Authorized += parseInt(t2.authorized ? t2.authorized : 0, 10)
                t1Spent += parseInt(t2.spent ? t2.spent : 0, 10)
                t1customerEx += parseInt(t2.customerEx ? t2.customerEx : 0, 10)
                t1salesEx += parseInt(t2.salesEx ? t2.salesEx : 0, 10)
                t1scoring += parseInt(t2.scoring ? t2.scoring : 0, 10)
                t1roi += parseInt(t2.roi ? t2.roi : 0, 10)
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
          nd.children = updatedT1s
          return nd
        }
        return t
      })
      return ndt
    },
    c_navobj() {
      return this.$store.state.globalState.selectedNavObj
    },
    c_fields() {
      let tempFields = this.fields.slice(1, this.fields.length - 1)
      if (this.data === null) return tempFields
      if (this.data.type === 'portfolio' && this.data.children && this.data.children.length > 0) {
        this.data.children.map(program => {
          if (program.children && program.children.length > 0) {
            program.children.map(project => {
              if (project.children.length > 0) {
                project.children.map(subproject => {
                  if (subproject.job_names !== undefined) tempFields = tempFields.concat(subproject.job_names)
                  return null
                })
              }
              if (project.job_names !== undefined) tempFields = tempFields.concat(project.job_names)
              return null
            })
          }
          if (program.job_names !== undefined) tempFields = tempFields.concat(program.job_names)
          return null
        })
      } else if (this.data.type === 'company' && this.data.children && this.data.children.length > 0) {
        this.data.children.map(portfolio => {
          if (portfolio.children && portfolio.children.length > 0) {
            portfolio.children.map(program => {
              if (program.children.length > 0) {
                program.children.map(project => {
                  if (project.children.length > 0) {
                    project.children.map(subproject => {
                      if (subproject.job_names !== undefined) tempFields = tempFields.concat(subproject.job_names)
                      return null
                    })
                  }
                  if (project.job_names !== undefined) tempFields = tempFields.concat(project.job_names)
                  return null
                })
              }
              if (program.job_names !== undefined) tempFields = tempFields.concat(program.job_names)
              return null
            })
          }
          return null
        })
      }
      tempFields = tempFields.filter((value, index, array) => array.indexOf(value) === index)
      tempFields.push('total')
      return tempFields
    },
  },
  methods: {
    initializeData(data) {
      // console.log("CInitData:", data)
      const temp = data !== null ? data.children : []
      const tempTeams = []
      const tempTeamData1 = []
      const tempTeamData = []
      for (let i = 0; i < temp.length; i += 1) {
        const item = temp[i]
        const tempData = []
        if (item.assignee !== undefined && item.assignee.length > 0) {
          const tempAssignee = item.assignee
          for (let j = 0; j < tempAssignee.length; j += 1) {
            const assignee = tempAssignee[j]
            if (!tempTeams.includes(assignee.title)) {
              tempTeams.push(assignee.title)
            }
            tempData.push(assignee.data)
          }
        }
        tempTeamData.push(tempData)
        const tempData1 = []
        if (item.children !== undefined && item.children.length > 0) {
          for (let j = 0; j < item.children.length; j += 1) {
            const tempChildren = item.children[j]
            const tempChildrenData = []
            if (tempChildren.assignee !== undefined && tempChildren.assignee.length > 0) {
              for (let k = 0; k < tempChildren.assignee.length; k += 1) {
                const assignee = tempChildren.assignee[k]
                if (!tempTeams.includes(assignee.title)) {
                  tempTeams.push(assignee.title)
                }
                tempChildrenData.push(assignee.data)
              }
            }
            tempData1.push(tempChildrenData)
          }
        }
        tempTeamData1.push(tempData1)
      }
      this.teams = tempTeams
      this.teamD1 = tempTeamData
      this.teamD = tempTeamData1
      // console.log("Teams:", tempTeams, "TeamD1:", tempTeamData, "TeamD:", tempTeamData1)
    },
    onTeamCollapse(i) {
      const index = this.collapsedT.findIndex(x => x === i)
      if (index > -1) {
        this.collapsedT.splice(index, 1)
      } else {
        this.collapsedT.push(i)
      }
    },
    onCollapseCLick(index) {
      if (index === this.opened) {
        this.opened = -1
      } else {
        this.opened = index
      }
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
    // rowClass(item, type) {
    //   const colorClass = 'table-success'
    //   if (!item || type !== 'row') { return }

    //   // eslint-disable-next-line consistent-return
    //   if (item.title === 'total') { return colorClass }
    // },
  }
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio-control.scss';
</style>
