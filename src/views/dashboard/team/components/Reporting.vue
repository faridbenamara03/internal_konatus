<template>
  <div
    v-if="reportingState === 'plan'"
    class="report"
  >
    <div class="reporting-side">
      <div v-if="itemsForReporting !== undefined">
        <div
          class="report-block--head"
          style="margin-top: 50px;background-color: #384056"
        >
          <p class="m-0 text-uppercase">
            {{
              itemsForReporting === undefined || itemsFormReporting === null
                ? ""
                : itemsForReporting.portfolioName
            }}
          </p>
        </div>
        <div
          v-for="(item1, index1) in itemsForReporting.children"
          :key="index1"
        >
          <div
            class="report-block--head"
            style="cursor: pointer;height:77px"
            @click="onCollapseClick(index1)"
          >
            <feather-icon
              v-if="item1.work_elements !== undefined && item1.work_elements.length > 0"
              :icon="openedCollapse === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
              size="16"
              class="mr-1"
            />
            <p
              class="m-0 ml-1"
              style="line-height: 24px; font-size: 15px;"
            >
              {{ item1.title }}
            </p>
          </div>
          <template v-if="item1 !== undefined && item1.work_elements && openedCollapse === index1">
            <div
              v-for="(item2, index2) in item1.work_elements"
              :key="index2"
              class="report-block-child d-flex justify-content-between"
              style="background-color: #212739;border-bottom: 1px solid grey;height:51px"
            >
              <p
                class="m-0 text-overflow-ellipse"
                style="font-size:12px"
                :style="`color:${parseInt(item2.acc) === 100 ? 'gray' : parseInt(item2.acc) > 0 && parseInt(item2.acc) < 100 ? '#66ffff' : '#ffffff'}`"
              >
                {{ item2.title }}({{ item2.acc }}%)
              </p>
              <b-button
                v-b-modal.modal-manual-update
                style="height: 40px;padding:0px"
                @click="handleSelectWe(item2)"
              >
                manual update
              </b-button>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="reporting-content">
      <div class="reporting-content--header">
        <b-form-spinbutton
          id="sb-days"
          v-model="currentInterval"
          :formatter-fn="handleZoomInterval"
          style="height:25px;width:200px;"
          min="0"
          max="3"
          :wrap="false"
        />
        <div class="reporting-content-header--badge justify-content-end">
          <div class="phase">
            <div class="flag" />
            Phase
          </div>
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
        <div :style="'position:absolute;height:calc(100% - 120px);border-right:2px #BD2020 solid;left:' + getTodayValue() + 'px;top:122px;z-index:222'">
          <div
            class="rounded-circle"
            style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"
          />
        </div>
        <div
          class="timeline-list"
          :style="`width:${windowWidth / 2}px`"
        >
          <div
            v-for="(date, index) in reportingDates"
            :key="index"
            class="date"
            :class="{ active: isToday(date) }"
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
        <div v-if="itemsForReporting !== undefined">
          <div
            v-for="(item1, index1) in itemsForReporting.children"
            :key="index1"
          >
            <div
              class="w-100"
              style="height: 77px"
            >
              <b-card
                no-body
                class="d-flex flex-column justify-content-around"
                style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
              >
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 0, true )}px`">
                  <ProjectProgressBar
                    :type="0"
                    :widths="getValue(item1, 0, true)"
                    :paddings="getStartPadding(item1, 0, true)"
                    :isstartmark="isStartMark(item1, 0, true)"
                    :isendmark="isEndMark(item1, 0, true)"
                    :width4="getStartPadding(item1, 0, true)"
                  />
                </div>
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 1, true )}px`">
                  <ProjectProgressBar
                    :type="1"
                    :widths="getValue(item1, 1, true)"
                    :paddings="getStartPadding(item1, 1, true)"
                    :isstartmark="isStartMark(item1, 1, true)"
                    :isendmark="isEndMark(item1, 1, true)"
                    :width4="getStartPadding(item1, 1, true)"
                  />
                </div>
                <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item1, 2, true)}px`">
                  <ProjectProgressBar
                    :type="2"
                    :widths="getValue(item1, 2, true)"
                    :paddings="getStartPadding(item1, 2, true)"
                    :isstartmark="isStartMark(item1, 2, true)"
                    :isendmark="isEndMark(item1, 2, true)"
                    :width4="getStartPadding(item1, 2, true)"
                  />
                </div>
              </b-card>
            </div>
            <template
              v-if="
                item1 !== undefined && item1.work_elements && openedCollapse === index1
              "
            >
              <div
                v-for="(item2, index2) in item1.work_elements"
                :key="index2"
              >
                <div
                  class="w-100"
                  style="height: 51px"
                >
                  <b-card
                    no-body
                    class="d-flex flex-column justify-content-around"
                    :style="`height:50px;padding:1px 10px 1px 3px;width:fit-content;left:${getPadding(item2)}px`"
                  >
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 0, false) > getPadding(item2) ? getStartPadding(item2, 0, false) - getPadding(item2) : 0}px`">
                      <WeProgressBar
                        :type="0"
                        :width1="getValue(item2, 0, false)"
                        :width2="getStartPadding(item2, 0, false)"
                        :width3="getTodayValue()"
                        :width4="getPadding(item2)"
                      />
                    </div>
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 1, false) > getPadding(item2) ? getStartPadding(item2, 1, false) - getPadding(item2) : 0}px`">
                      <WeProgressBar
                        :type="1"
                        :width1="getValue(item2, 1, false)"
                        :width2="getStartPadding(item2, 1, false)"
                        :width3="getTodayValue()"
                        :width4="getPadding(item2)"
                      />
                    </div>
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 2, false) > getPadding(item2) ? getStartPadding(item2, 2, false) - getPadding(item2) : 0}px`">
                      <WeProgressBar
                        :type="2"
                        :width1="getValue(item2, 2, false)"
                        :width2="getStartPadding(item2, 2, false)"
                        :width3="getTodayValue()"
                        :width4="getPadding(item2)"
                      />
                    </div>
                  </b-card>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
    <update-confirm-modal @onUpdate="onUpdate" />
    <manual-update-modal
      :selectedWE="selectedWE"
      @onSubmit="handleManualUpdate"
    />
  </div>
  <div
    v-else-if="reportingState === 'cost'"
    style="width: 100%">
    <ReportingCostVue
      :data="itemsForReporting"
      :fields="costfields"
    />
  </div>
</template>

<script>
import { BButton, BCard, BFormSpinbutton } from "bootstrap-vue"
import moment from "moment"
import ReportingCostVue from "./ReportingCost.vue"
import ProjectProgressBar from "../../globalComponent/ProjectProgressBar.vue"
import WeProgressBar from "../../globalComponent/WeProgressBar.vue"
import ManualUpdateModal from "../../globalComponent/ManualUpdateModal.vue"

export default {
  components: {
    BButton,
    BCard,
    BFormSpinbutton,
    ReportingCostVue,
    ProjectProgressBar,
    WeProgressBar,
    ManualUpdateModal
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    reportingState: {
      type: String,
      default: () => "",
    },
    costfields: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      reportingDates: [],
      openedCollapse: 0,
      childCollapse: 1,
      subChildCollapse: 0,
      parentCollapse: true,
      navType: 'portfolio',
      windowWidth: window.innerWidth,
      itemsForReporting: 0,
      startGraphDate: moment('2024-01-01'),
      endGraphDate: moment('2024-12-31'),
      selectedWE: {},
      currentInterval: 0,
      zoomIntervals: ['1 days', '2 days', '7 days', '30 days'],
      zoomIntervalNumbers: [1, 2, 7, 30],
      selectedInterval: 1,
    }
  },
  computed: {
    isOptimizeIndex() {
      return this.$store.state.teamState.optimizeStatus
    }
  },
  watch: {
    data: {
      immediate: true,
      handler(newVal) {
        this.initializeData(newVal) // ??
      },
    },
    currentInterval: {
      immediate: true,
        handler(newVal) {
          this.initializeData(newVal)
        },
    },
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize)
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize)
    })
  },
  methods: {
    initializeData(data) {
      console.log("TeamD:", data)
      this.selectedInterval = typeof data === 'number' && data !== undefined && data !== null ? this.zoomIntervalNumbers[data] : this.zoomIntervalNumbers[this.$store.state.teamState.selectedZoomInterval]
      this.startGraphData = moment(this.$store.state.teamState.selectedFromDate)
      this.endGraphData = moment(this.$store.state.teamState.selectedToDate)
      const tempStartDate = this.startGraphData.clone()
      this.reportingDates = [tempStartDate.clone()]
      while (tempStartDate.add(this.selectedInterval, 'days').diff(this.endGraphData) < 0) {
        this.reportingDates.push(tempStartDate.clone())
      }
      this.navType = this.$store.state.teamState.selectedNavObj.type
      this.itemsForReporting = this.$store.state.teamState.teamReportingData
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
    isStartMark(item, type, isChild) {
      let startMoment
      if (isChild) {
        const results = []
        if (item.phases) {
          let phIndex = 0
          while (phIndex < item.phases.length) {
            const phase = item.phases[phIndex]
            switch (type) {
              case 0:
                startMoment = moment(phase.start_date_demand, "YYYY-MM-DD").startOf(
                  "day"
                )
                break
              case 1:
                startMoment = moment(phase.start_date_engage, "YYYY-MM-DD").startOf(
                  "day"
                )
                break
              case 2:
                startMoment = moment(phase.start_date_estimated, "YYYY-MM-DD").startOf(
                  "day"
                )
                break
              default:
                break
            }
            const firstMoment = moment(this.reportingDates[0], "YYYY-MM-DD") === this.startGraphData ? moment(this.reportingDates[0], "YYYY-MM-DD") : this.startGraphData
            if (startMoment >= firstMoment) results.push(true)
            results.push(false)
            phIndex += 1
          }
        }
        return results
      }
      switch (type) {
        case 0:
          startMoment = moment(item.start_date_demand, "YYYY-MM-DD").startOf("day")
          break
        case 1:
          startMoment = moment(item.start_date_engage, "YYYY-MM-DD").startOf("day")
          break
        case 2:
          startMoment = moment(item.start_date_estimated, "YYYY-MM-DD").startOf("day")
          break
        default:
          break
      }
      const firstMoment = moment(this.reportingDates[0], "YYYY-MM-DD") === this.startGraphData ? moment(this.reportingDates[0], "YYYY-MM-DD") : this.startGraphData
      if (startMoment >= firstMoment) return true
      return false
    },
    handleSelectWe(we) {
      this.selectedWE = we
      // console.log("selectedWE:", we)
      this.$store.commit('teamState/SELECT_WORK_ELEMENT_TO_UPDATE', we)
    },
    handleManualUpdate(res) {
      console.log("ManualUpdated:", res)
    },
    isEndMark(item, type, isChild) {
      let endMoment
      if (isChild) {
        const results = []
        if (item.phases) {
          let phIndex = 0
          while (phIndex < item.phases.length) {
            const phase = item.phases[phIndex]
            switch (type) {
              case 0:
                endMoment = moment(phase.end_date_demand, "YYYY-MM-DD").startOf("day")
                break
              case 1:
                endMoment = moment(phase.end_date_engage, "YYYY-MM-DD").startOf("day")
                break
              case 2:
                endMoment = moment(phase.end_date_estimated, "YYYY-MM-DD").startOf("day")
                break
              default:
                break
            }
            const lastMoment = moment(this.reportingDates[this.reportingDates.length - 1], "YYYY-MM-DD") === this.endGraphData ? moment(this.reportingDates[this.reportingDates.length - 1], "YYYY-MM-DD") : this.endGraphData
            if (endMoment >= lastMoment) results.push(false)
            results.push(true)
            phIndex += 1
          }
        }
        return results
      }
      switch (type) {
        case 0:
          endMoment = moment(item.end_date_demand, "YYYY-MM-DD").startOf("day")
          break
        case 1:
          endMoment = moment(item.end_date_engage, "YYYY-MM-DD").startOf("day")
          break
        case 2:
          endMoment = moment(item.end_date_estimated, "YYYY-MM-DD").startOf("day")
          break
        default:
          break
      }
      const lastMoment = moment(this.reportingDates[this.reportingDates.length - 1], "YYYY-MM-DD") === this.endGraphData ? moment(this.reportingDates[this.reportingDates.length - 1], "YYYY-MM-DD") : this.endGraphData
      if (endMoment >= lastMoment) return false
      return true
    },
    getValue(item, type, isChild) {
      let result = 0
      if (isChild) {
        if (item.phases) {
          result = []
          let phIndex = 0
          // let totalWidth = 0
          while (phIndex < item.phases.length) {
            const phase = item.phases[phIndex]
            let startMoment = 0
            let endMoment = 0
            if (type === 0) {
              startMoment = moment(phase.start_date_demand, "YYYY-MM-DD").startOf("day")
              if (phIndex !== 0 && startMoment < moment(item.phases[phIndex - 1].end_date_demand, "YYYY-MM-DD").startOf("day")) {
                startMoment = moment(item.phases[phIndex - 1].end_date_demand, "YYYY-MM-DD").startOf("day")
              }
              endMoment = moment(phase.end_date_demand, "YYYY-MM-DD").startOf("day")
            } else if (type === 1) {
              startMoment = moment(phase.start_date_engage, "YYYY-MM-DD").startOf("day")
              if (phIndex !== 0 && startMoment < moment(item.phases[phIndex - 1].end_date_engage, "YYYY-MM-DD").startOf("day")) {
                startMoment = moment(item.phases[phIndex - 1].end_date_engage, "YYYY-MM-DD").startOf("day")
              }
              endMoment = moment(phase.end_date_engage, "YYYY-MM-DD").startOf("day")
            } else if (type === 2) {
              startMoment = moment(phase.start_date_estimated, "YYYY-MM-DD").startOf("day")
              if (phIndex !== 0 && startMoment < moment(item.phases[phIndex - 1].end_date_estimated, "YYYY-MM-DD").startOf("day")) {
                startMoment = moment(item.phases[phIndex - 1].end_date_estimated, "YYYY-MM-DD").startOf("day")
              }
              endMoment = moment(phase.end_date_estimated, "YYYY-MM-DD").startOf("day")
            }
            if (startMoment < moment(this.reportingDates[0], "YYYY-MM-DD")) startMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
            if (endMoment < moment(this.reportingDates[0], "YYYY-MM-DD")) endMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
            if (startMoment < this.startGraphData) startMoment = this.startGraphData
            if (endMoment > this.endGraphData) endMoment = this.endGraphData
            const duration = moment.duration(endMoment.diff(startMoment))
            result.push((duration.asDays() * 24) / this.selectedInterval)
            phIndex += 1
          }
        }
      } else {
        let startMoment = 0
        let endMoment = 0
        switch (type) {
          case 0:
            startMoment = moment(item.start_date_demand, "YYYY-MM-DD").startOf("day")
            endMoment = moment(item.end_date_demand, "YYYY-MM-DD").startOf("day")
            break
          case 1:
            startMoment = moment(item.start_date_engage, "YYYY-MM-DD").startOf("day")
            endMoment = moment(item.end_date_engage, "YYYY-MM-DD").startOf("day")
            break
          case 2:
            startMoment = moment(item.start_date_estimated, "YYYY-MM-DD").startOf("day")
            endMoment = moment(item.end_date_estimated, "YYYY-MM-DD").startOf("day")
            break
          default:
            break
        }
        if (startMoment < moment(this.reportingDates[0], "YYYY-MM-DD")) startMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
        if (endMoment < moment(this.reportingDates[0], "YYYY-MM-DD")) endMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
        if (startMoment < this.startGraphData) startMoment = this.startGraphData
        if (endMoment > this.endGraphData) endMoment = this.endGraphData
        const duration = moment.duration(endMoment.diff(startMoment))
        result = ((duration.asDays()) * 24) / this.selectedInterval
      }
      return result
    },
    getTodayValue() {
      const startMoment = moment()
      // const startMoment = moment('2024-01-04')
      const firstMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
      const duration = startMoment > firstMoment ? moment.duration(startMoment.diff(firstMoment)).asDays() : 0
      return duration === 0 ? 0 : parseInt((duration * 24) / this.selectedInterval, 10)
    },
    getPadding(item) {
      const mDates = [moment(item.start_date_demand), moment(item.start_date_engage), moment(item.start_date_estimated)]
      const firstDate = moment.min(mDates)
      const firstMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
      const duration = firstDate > firstMoment ? moment.duration(firstDate.diff(firstMoment)).asDays() : 0
      const result = duration === 0 ? 0 : parseInt(duration * 24, 10) / this.selectedInterval
      // if (item.id === 35) console.log("getPadding", result, "Item:", item)
      return result
    },
    handleZoomInterval(value) {
      if (value > 0) {
        this.$store.commit('teamState/SET_ZOOM_INTERVAL', value)
      }
      return this.zoomIntervals[value]
    },
    getStartPadding(item, type, isChild) {
      let result = 0
      if (isChild) {
        if (item.phases) {
          const pStarts = []
          let phIndex = 0
          let startMoment
          while (phIndex < item.phases.length) {
            const phase = item.phases[phIndex]
            let firstMoment
            if (type === 0) {
              startMoment = moment(phase.start_date_demand, "YYYY-MM-DD").startOf("day")
              firstMoment = phIndex === 0 ? moment(this.reportingDates[0], "YYYY-MM-DD") : moment(item.phases[phIndex - 1].end_date_demand, "YYYY-MM-DD").startOf("day")
            } else if (type === 1) {
              startMoment = moment(phase.start_date_engage, "YYYY-MM-DD").startOf("day")
              firstMoment = phIndex === 0 ? moment(this.reportingDates[0], "YYYY-MM-DD") : moment(item.phases[phIndex - 1].end_date_engage, "YYYY-MM-DD").startOf("day")
            } else if (type === 2) {
              startMoment = moment(phase.start_date_estimated, "YYYY-MM-DD").startOf("day")
              firstMoment = phIndex === 0 ? moment(this.reportingDates[0], "YYYY-MM-DD") : moment(item.phases[phIndex - 1].end_date_estimated, "YYYY-MM-DD").startOf("day")
            }
            if (startMoment < moment(this.reportingDates[0], "YYYY-MM-DD")) startMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
            if (firstMoment < moment(this.reportingDates[0], "YYYY-MM-DD")) firstMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
            const duration = startMoment > firstMoment ? moment.duration(startMoment.diff(firstMoment)).asDays() : 0
            result = duration === 0 ? 0 : (duration * 24) / this.selectedInterval
            pStarts.push(result)
            phIndex += 1
          }
          return pStarts
        }
      } else {
        let startMoment
        switch (type) {
          case 0:
            startMoment = moment(item.start_date_demand, "YYYY-MM-DD")
            break
          case 1:
            startMoment = moment(item.start_date_engage, "YYYY-MM-DD")
            break
          case 2:
            startMoment = moment(item.start_date_estimated, "YYYY-MM-DD")
            break
          default:
            break
        }
        const firstMoment = moment(this.reportingDates[0], "YYYY-MM-DD")
        const duration = startMoment > firstMoment ? moment.duration(startMoment.diff(firstMoment)).asDays() : 0
        result = (duration * 24) / this.selectedInterval
        return result
      }
      return result
    },
    onOptimizeIndex() {
      this.isOptimizeIndex = this.$store.state.teamState.optimizeStatus
      return this.isOptimizeIndex
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
    onParentCollapseClick() {
      this.parentCollapse = !this.parentCollapse
    },
    onCollapseClick(index) {
      if (this.openedCollapse === index) this.openedCollapse = -1
      else this.openedCollapse = index
    },
    onChildCollapseClick(index) {
      if (this.childCollapse === index) this.childCollapse = -1
      else this.childCollapse = index
    },
    onSubChildCollapseClick(index) {
      if (this.subChildCollapse === index) this.subChildCollapse = -1
      else this.subChildCollapse = index
    },
    isToday(date) {
      return moment().isSame(date, "day")
    },
    getWeek(date) {
      return date.format("dd").substring(0, 1)
    },
    getDay(date) {
      return date.format("D")
    },
    getMonth(date) {
      return date.format("MMM YYYY")
    },
    hideModal() {
      this.$refs.portfolio_reporting_plan_update.hide()
    },
    onUpdate() {
      this.$emit("update-clicked")
      // this.$refs.portfolio_reporting_plan_update.hide()
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";

.rotate-icon {
  transform: rotate(180deg);
}
</style>
