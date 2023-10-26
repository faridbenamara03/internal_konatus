<template>
  <div
    v-if="reportingState === 'plan'"
    class="report"
  >
    <div class="reporting-side">
      <div>
        <div
          class="report-block--head"
          style="margin-top:50px;"
        >
          <p class="m-0 text-uppercase">
            {{ itemsForReporting[0].title }}
          </p>
        </div>
        <div
          v-for="(item1, index1) in itemsForReporting[0].children"
          :key="index1"
        >
          <div
            class="report-block--head"
            style="cursor:pointer"
            @click="onCollapseClick(index1)"
          >
            <feather-icon
              v-if="item1.children"
              :icon="openedCollapse === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
              size="16"
              class="mr-1"
            />
            <p class="m-0 text-uppercase text-overflow-ellipse">
              {{ item1.title }}
            </p>
          </div>
          <template v-if="item1.children && openedCollapse === index1">
            <div
              v-for="(item2, index2) in item1.children"
              :key="index2"
              class="report-block-child"
            >
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item2.title }}
              </p>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="reporting-content">
      <div class="reporting-content--header">
        <div />
        <div class="reporting-content-header--badge">
          <b-button variant="flat-dark">
            <b-icon
              icon="diamond-fill"
              variant="success"
            />
            <b-icon
              icon="triangle-fill"
              class="rotate-icon"
              variant="success"
            />
            Milestones
          </b-button>
          <b-button
            variant="flat-dark"
            class="badge-demand"
          >
            <b-icon icon="circle-fill" />
            Demand
          </b-button>
          <b-button
            variant="flat-dark"
            class="badge-engage"
          >
            <b-icon icon="circle-fill" />
            Engaged
          </b-button>
          <b-button
            variant="flat-dark"
            class="badge-estimate"
          >
            <b-icon icon="circle-fill" />
            Real Estimated
          </b-button>
        </div>
      </div>
      <div class="reporting-content--body">
        <div
          :style="'position:absolute;height:calc(100% - 120px);border-right:2px #BD2020 solid;left:' + 365 + 'px;top:122px;z-index:222'"
        >
          <div
            class="rounded-circle"
            style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"
          />
        </div>
        <div class="timeline-list">
          <div
            v-for="(date, index) in reportingDates"
            :key="index"
            class="date"
            :class="{ 'active': isToday(date) }"
          >
            <p
              v-if="index > 0 ? getMonth(date) != getMonth(reportingDates[index - 1]) : true"
              class="month"
            >
              {{ getMonth(date) }}
            </p>
            <p class="week">
              {{ getWeek(date) }}
            </p>
            <p class="day">
              {{ getDay(date) }}
            </p>
          </div>
        </div>

        <div
          v-for="(item1, index1) in itemsForReporting[0].children"
          :key="index1"
        >
          <div
            v-if="onOptimiseIndex() === 'optimise'"
            class="w-100"
            style="height:77px"
          >
            <b-card
              no-body
              class="d-flex flex-column justify-content-around"
              style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
            >
              <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1)}px`">
                <ProgramProgressBar
                  :type="0"
                  :width1="getValue(item1, 0, false)"
                  :width2="364 - getStartPadding(item1)"
                />
              </div>
              <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1)}px`">
                <ProgramProgressBar
                  :type="1"
                  :width1="getValue(item1, 1, false)"
                  :width2="364 - getStartPadding(item1)"
                />
              </div>
              <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1)}px`">
                <ProgramProgressBar
                  :type="2"
                  :width1="getValue(item1, 1, false)"
                  :width2="364 - getStartPadding(item1)"
                />
              </div>
            </b-card>
          </div>
          <template v-if="onOptimiseIndex() === 'optimise' && item1.children && openedCollapse === index1">
            <div
              v-for="(item2, index2) in item1.children"
              :key="index2"
              style="height:51px"
              class="w-100"
            >
              <b-card
                no-body
                class="d-flex flex-column justify-content-around"
                style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
              >
                <div :style="`padding-left:${getStartPadding(item2, 0, true)}px`">
                  <ProjectProgressBar
                    :type="0"
                    :widths="getValue(item2, 0, true)"
                    :width4="363 - getStartPadding(item2, 0, true)"
                  />
                </div>
                <div :style="`padding-left:${getStartPadding(item2, 2, true)}px`">
                  <ProjectProgressBar
                    :type="1"
                    :widths="getValue(item2, 2, true)"
                    :width4="363 - getStartPadding(item2, 2, true)"
                  />
                </div>
                <div :style="`padding-left:${getStartPadding(item2, 2, true)}px`">
                  <ProjectProgressBar
                    :type="2"
                    :widths="getValue(item2, 2, true)"
                    :width4="363 - getStartPadding(item2, 2, true)"
                  />
                </div>
              </b-card>
            </div>
          </template>

          <div
            v-if="onOptimiseIndex() === 'origin'"
            class="w-100"
            style="height:77px"
          >
            <b-card
              no-body
              class="d-flex flex-column justify-content-around"
              style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
            >
              <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1)}px`">
                <ProgramProgressBar
                  :type="0"
                  :width1="getValue(item1, 0, false)"
                  :width2="364 - getStartPadding(item1)"
                />
              </div>
              <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1)}px`">
                <ProgramProgressBar
                  :type="1"
                  :width1="getValue(item1, 1, false)"
                  :width2="364 - getStartPadding(item1)"
                />
              </div>
              <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1)}px`">
                <ProgramProgressBar
                  :type="2"
                  :width1="getValue(item1, 2, false)"
                  :width2="364 - getStartPadding(item1)"
                />
              </div>
            </b-card>
          </div>
          <template v-if="onOptimiseIndex() === 'origin' && item1.children && openedCollapse === index1">
            <div
              v-for="(item2, index2) in item1.children"
              :key="index2"
              style="height:51px"
              class="w-100"
            >
              <b-card
                no-body
                class="d-flex flex-column justify-content-around"
                style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
              >
                <div :style="`padding-left:${getStartPadding(item2, 0, true)}px`">
                  <ProjectProgressBar
                    :type="0"
                    :widths="getValue(item2, 0, true)"
                    :width4="363 - getStartPadding(item2, 0, true)"
                  />
                </div>
                <div :style="`padding-left:${getStartPadding(item2, 1, true)}px`">
                  <ProjectProgressBar
                    :type="1"
                    :widths="getValue(item2, 1, true)"
                    :width4="363 - getStartPadding(item2, 1, true)"
                  />
                </div>
                <div :style="`padding-left:${getStartPadding(item2, 2, true)}px`">
                  <ProjectProgressBar
                    :type="2"
                    :widths="getValue(item2, 2, true)"
                    :width4="363 - getStartPadding(item2, 2, true)"
                  />
                </div>
              </b-card>
            </div>
          </template>

        </div>
      </div>
    </div>
    <update-confirm-modal @onUpdate="onUpdate" />
  </div>
  <div
    v-else-if="reportingState === 'cost'"
    style="width:100%"
  >
    <ReportingCostVue
      :data="itemsForReporting"
      :fields="fields"
    />
  </div>
</template>

<script>
import {
  BButton,
  BCard,
  // BListGroup,
  // BListGroupItem,
} from 'bootstrap-vue'
import moment from 'moment'
import ReportingCostVue from './ReportingCost.vue'
import ProgramProgressBar from '../../globalComponent/ProgramProgressBar.vue'
import ProjectProgressBar from '../../globalComponent/ProjectProgressBar.vue'
import UpdateConfirmModal from '../modals/UpdateConfirmModal.vue'
// import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
// import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BButton,
    BCard,
    // AppCollapse,
    // AppCollapseItem,
    // BListGroup,
    // BListGroupItem,
    ReportingCostVue,
    ProgramProgressBar,
    ProjectProgressBar,
    UpdateConfirmModal
  },
  props: {
    data: {
      type: Object,
      default: () => { }
    },
    reportingState: {
      type: String,
      default: () => ""
    },
    fields: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      reportingDates: [],
      openedCollapse: 0,
      itemsForReporting: this.$store.state.portfolioState.reportingData,
      isOptimiseIndex: this.$store.state.portfolioState.optimizeStatus,
      // fieldForDemand: ['BUDGET demand', 'BUDGET engaged ', 'Real Estimated'],
      dta1: [
        [193, 125, 184, 151, 248, 183, 224, 270, 207],
        [110, 179, 125, 238, 229, 193, 232, 210, 250],
        [184, 198, 188, 206, 210, 207, 219, 283, 249],
        [181, 164, 137, 224, 188, 172, 242, 272, 208]
      ],
      // paddingV0: [
      //   [107, 116, 83],
      //   [136, 50, 114],
      //   [75, 96, 106],
      //   [120, 121, 63]
      // ],
      paddingV11: [
        [78, 89, 80],
        [53, 97, 88],
        [51, 99, 77]
      ],
      dta0: [
        [172, 156, 138, 216, 218, 163, 233, 261, 279],
        [176, 145, 131, 157, 197, 164, 244, 264, 287],
        [152, 121, 108, 172, 224, 231, 298, 257, 212],
        [164, 178, 190, 164, 211, 195, 290, 204, 240]
      ],
      paddingV0: [
        [143, 50, 129],
        [62, 52, 95],
        [139, 135, 53],
        [78, 65, 87]
      ],
      paddingV10: [
        [114, 59, 130],
        [90, 57, 141],
        [130, 58, 129]
      ],
      dta: [
        [193, 125, 184, 151, 248, 183, 224, 270, 207],
        [110, 179, 125, 238, 229, 193, 232, 210, 250],
        [184, 198, 188, 206, 210, 207, 219, 283, 249],
        [181, 164, 137, 224, 188, 172, 242, 272, 208]
      ],
      paddingV: [
        [107, 116, 83],
        [136, 50, 114],
        [75, 96, 106],
        [120, 121, 63]
      ],
      paddingV1: [
        [78, 89, 80],
        [53, 97, 88],
        [51, 99, 77]
      ],
    }
  },
  computed: {
    da1() {
      const a1 = this.dta[0][0] + this.dta[0][1] + this.dta[0][2] + this.paddingV[0][0]
      const a2 = this.dta[1][0] + this.dta[1][1] + this.dta[1][2] + this.paddingV[1][0]
      const a3 = this.dta[2][0] + this.dta[2][1] + this.dta[2][2] + this.paddingV[2][0]
      const a4 = this.dta[3][0] + this.dta[3][1] + this.dta[3][2] + this.paddingV[3][0]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24 - this.paddingDa1
    },
    da2() {
      const a1 = this.dta[0][3] + this.dta[0][4] + this.dta[0][5] + this.paddingV[0][1]
      const a2 = this.dta[1][3] + this.dta[1][4] + this.dta[1][5] + this.paddingV[1][1]
      const a3 = this.dta[2][3] + this.dta[2][4] + this.dta[2][5] + this.paddingV[2][1]
      const a4 = this.dta[3][3] + this.dta[3][4] + this.dta[3][5] + this.paddingV[3][1]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24 - this.paddingDa2
    },
    da3() {
      const a1 = this.dta[0][6] + this.dta[0][7] + this.dta[0][8] + this.paddingV[0][2]
      const a2 = this.dta[1][6] + this.dta[1][7] + this.dta[1][8] + this.paddingV[1][2]
      const a3 = this.dta[2][6] + this.dta[2][7] + this.dta[2][8] + this.paddingV[2][2]
      const a4 = this.dta[3][6] + this.dta[3][7] + this.dta[3][8] + this.paddingV[3][2]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24 - this.paddingDa3
    },
    paddingDa1() {
      return this.smallest(this.paddingV[0][0], this.paddingV[1][0], this.paddingV[2][0], this.paddingV[3][0])
    },
    paddingDa2() {
      return this.smallest(this.paddingV[0][1], this.paddingV[1][1], this.paddingV[2][1], this.paddingV[3][1])
    },
    paddingDa3() {
      return this.smallest(this.paddingV[0][2], this.paddingV[1][2], this.paddingV[2][2], this.paddingV[3][2])
    },
    da10() {
      const a1 = this.dta0[0][0] + this.dta0[0][1] + this.dta0[0][2] + this.paddingV0[0][0]
      const a2 = this.dta0[1][0] + this.dta0[1][1] + this.dta0[1][2] + this.paddingV0[1][0]
      const a3 = this.dta0[2][0] + this.dta0[2][1] + this.dta0[2][2] + this.paddingV0[2][0]
      const a4 = this.dta0[3][0] + this.dta0[3][1] + this.dta0[3][2] + this.paddingV0[3][0]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24 - this.paddingDa10
    },
    da20() {
      const a1 = this.dta0[0][3] + this.dta0[0][4] + this.dta0[0][5] + this.paddingV0[0][1]
      const a2 = this.dta0[1][3] + this.dta0[1][4] + this.dta0[1][5] + this.paddingV0[1][1]
      const a3 = this.dta0[2][3] + this.dta0[2][4] + this.dta0[2][5] + this.paddingV0[2][1]
      const a4 = this.dta0[3][3] + this.dta0[3][4] + this.dta0[3][5] + this.paddingV0[3][1]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24 - this.paddingDa20
    },
    da30() {
      const a1 = this.dta0[0][6] + this.dta0[0][7] + this.dta0[0][8] + this.paddingV0[0][2]
      const a2 = this.dta0[1][6] + this.dta0[1][7] + this.dta0[1][8] + this.paddingV0[1][2]
      const a3 = this.dta0[2][6] + this.dta0[2][7] + this.dta0[2][8] + this.paddingV0[2][2]
      const a4 = this.dta0[3][6] + this.dta0[3][7] + this.dta0[3][8] + this.paddingV0[3][2]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24 - this.paddingDa30
    },
    paddingDa10() {
      return this.smallest(this.paddingV0[0][0], this.paddingV0[1][0], this.paddingV0[2][0], this.paddingV0[3][0])
    },
    paddingDa20() {
      return this.smallest(this.paddingV0[0][1], this.paddingV0[1][1], this.paddingV0[2][1], this.paddingV0[3][1])
    },
    paddingDa30() {
      return this.smallest(this.paddingV0[0][2], this.paddingV0[1][2], this.paddingV0[2][2], this.paddingV0[3][2])
    }
    // return Math.random() * 100 + 200 + Math.random() * 100 + 200 + Math.random() * 100 + 200
  },
  mounted() {
    console.log("RDT:", this.data.id)
    this.$store.dispatch('portfolioState/get_portfolio_reporting_data', { portId: this.data.id })
    const startDate = moment(moment()).subtract(15, 'days').startOf('day')
    const endDate = moment(moment()).add(1, 'M').startOf('day')
    this.reportingDates = [startDate.clone()]

    while (startDate.add(1, 'days').diff(endDate) < 0) {
      this.reportingDates.push(startDate.clone())
    }
  },
  methods: {
    getValue(item, type, isChild) {
      let result = 0
      if (isChild) {
        if (item.phases) {
          result = []
          let phIndex = 0
          while (phIndex < item.phases.length) {
            const phase = item.phases[phIndex]
            const startMoment = moment(phase.start_date, 'YYYY-MM-DD').startOf('day')
            const endMoment = moment(phase.end_date, 'YYYY-MM-DD').startOf('day')
            const duration = moment.duration(endMoment.diff(startMoment))
            const fullValue = this.largest(phase.fte, phase.load, phase.duration, 0) === 0 ? 1 : this.largest(phase.fte, phase.load, phase.duration, 0)
            const fullWidth = duration.asDays() * 25
            let barRect = 0
            if (type === 0) {
              const typeValue = (phase.fte / fullValue) === 0 ? 1 : phase.fte / fullValue
              barRect = typeValue * fullWidth * (phase.progress / 100)
            } else if (type === 1) {
              const typeValue = (phase.fte / fullValue) === 0 ? 1 : phase.duration / fullValue
              barRect = typeValue * fullWidth * (phase.progress / 100)
            } else if (type === 2) {
              const typeValue = (phase.fte / fullValue) === 0 ? 1 : phase.load / fullValue
              barRect = typeValue * fullWidth * (phase.progress / 100)
            }
            console.log('Phase:', phase, 'FW:', fullWidth, 'BR:', barRect)
            result.push(barRect)
            phIndex += 1
          }
        }
        console.log('Item:', item, 'Result:', result)
      } else {
        const startMoment = moment(item.startDate, 'YYYY-MM-DD').startOf('day')
        const endMoment = moment(item.endDate, 'YYYY-MM-DD').startOf('day')
        const duration = moment.duration(endMoment.diff(startMoment))
        const fullWidth = duration.asDays() * 25
        const fullValue = this.largest(item.demand, item.engaged, item.realestimated, 0)
        if (type === 0) {
          result = (item.demand / fullValue) * fullWidth
        } else if (type === 1) {
          result = (item.engaged / fullValue) * fullWidth
        } else if (type === 2) {
          result = (item.realestimated / fullValue) * fullWidth
        }
      }
      return result
    },
    getStartPadding(item, type, isChild) {
      let result = 0
      if (isChild) {
        if (item.phases) {
          const pstarts = []
          let phIndex = 0
          while (phIndex < item.phases.length) {
            const phase = item.phases[phIndex]
            const startMoment = moment(phase.start_date, 'YYYY-MM-DD').startOf('day')
            pstarts.push(startMoment)
            phIndex += 1
          }
          const pStartMoment = moment.min(pstarts)
          const firstMoment = moment(this.reportingDates[0], 'YYYY-MM-DD')
          const duration = pStartMoment > firstMoment ? (moment.duration(pStartMoment.diff(firstMoment)).asDays()) : (moment.duration(firstMoment.diff(pStartMoment)).asDays())
          const pd = duration * 25
          result = pd
        }
      } else {
        const startMoment = moment(item.startDate, 'YYYY-MM-DD')
        const firstMoment = moment(this.reportingDates[0], 'YYYY-MM-DD')
        const duration = startMoment > firstMoment ? (moment.duration(startMoment.diff(firstMoment)).asDays()) : (moment.duration(firstMoment.diff(startMoment)).asDays())
        const pd = duration * 25
        result = pd
      }
      return result
    },
    onOptimiseIndex() {
      this.isOptimiseIndex = this.$store.state.portfolioState.optimizeStatus
      return this.isOptimiseIndex
    },
    randomTen(val1, val2) {
      return parseInt(Math.random() * val1, 10) + val2
    },
    largest(a, b, c, d) {
      return Math.max(a, b, c, d)
    },
    smallest(a, b, c, d) {
      return Math.min(a, b, c, d)
    },
    onCollapseClick(index) {
      if (this.openedCollapse === index) this.openedCollapse = -1
      else this.openedCollapse = index
    },
    isToday(date) {
      return moment().isSame(date, 'day')
    },
    getWeek(date) {
      return date.format('dd').substring(0, 1)
    },
    getDay(date) {
      return date.format('D')
    },
    getMonth(date) {
      return date.format('MMM YYYY')
    },
    hideModal() {
      this.$refs.portfolio_reporting_plan_update.hide()
    },
    onUpdate() {
      this.dta = [
        [this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 200), this.randomTen(100, 200), this.randomTen(100, 200)],
        [this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 200), this.randomTen(100, 200), this.randomTen(100, 200)],
        [this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 200), this.randomTen(100, 200), this.randomTen(100, 200)],
        [this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 100), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 150), this.randomTen(100, 200), this.randomTen(100, 200), this.randomTen(100, 200)],
      ]
      this.paddingV = [
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
      ]
      this.paddingV1 = [
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
        [this.randomTen(100, 50), this.randomTen(100, 50), this.randomTen(100, 50)],
      ]

      this.$emit('update-clicked')
      // this.$refs.portfolio_reporting_plan_update.hide()
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";

.rotate-icon {
  transform: rotate(180deg);
}</style>
