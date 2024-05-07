<template>
  <div v-if="reportingState === 'plan'" class="report">
    <div class="reporting-side">
      <div>
        <div v-if="itemsForReporting !== undefined && navType === 'program'">
          <div class="report-block--head" style="margin-top: 50px;background-color: #384056">
            <p class="m-0 text-uppercase">
              {{
                itemsForReporting === undefined || itemsFormReporting === null
                  ? ""
                  : itemsForReporting.portfolioName
              }}
            </p>
          </div>
          <div
            class="report-block--head"
            style="background-color: #384056;height:77px"
            @click="onParentCollapseClick()"
          >
            <feather-icon
              v-if="itemsForReporting.children && itemsForReporting.children.length > 0"
              :icon="parentCollapse === true ? 'ChevronDownIcon' : 'ChevronRightIcon'"
              size="16"
              class="mr-1"
            />
            <p class="m-0 text-uppercase">
              {{
                itemsForReporting === undefined || itemsFormReporting === null
                  ? ""
                  : itemsForReporting.title
              }}
            </p>
          </div>
          <div v-for="(item1, index1) in itemsForReporting.children" :key="index1">
            <div
              class="report-block--head"
              style="cursor: pointer;height:77px"
              @click="onCollapseClick(index1)"
            >
              <feather-icon
                v-if="item1.work_elements.length > 0"
                :icon="openedCollapse === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
                size="16"
                class="mr-1"
              />
              <p class="m-0 ml-1" style="line-height: 24px; font-size: 15px;">
                {{ item1.title }}
              </p>
            </div>
            <template
              v-if="
                item1 !== undefined && item1.work_elements && openedCollapse === index1
              "
            >
              <div
                v-for="(item2, index2) in item1.work_elements"
                :key="index2"
                class="report-block-child d-flex justify-content-between"
                style="background-color: #212739;border-bottom: 1px solid grey;height:51px"
              >
                <p class="m-0 text-overflow-ellipse" style="font-size:12px">
                  {{ item2.title }}({{ item2.acc }}%)
                </p>
                <b-button style="height: 40px;padding:0px">
                  manual update
                </b-button>
              </div>
            </template>
          </div>
        </div>
        <div
          v-else-if=" itemsForReporting !== undefined && navType === 'project'"
        >
          <div class="report-block--head" style="margin-top: 50px;background-color: #384056">
            <p class="m-0 text-uppercase">
              {{
                itemsForReporting === undefined || itemsFormReporting === null
                  ? ""
                  : itemsForReporting.portName
              }}
            </p>
          </div>
          <div class="report-block--head" style="background-color: #384056;height:77px">
            <p class="m-0 text-uppercase">
              {{
                itemsForReporting === undefined || itemsFormReporting === null
                  ? ""
                  : itemsForReporting.progName
              }}
            </p>
          </div>
          <div class="report-block--head" style="cursor: pointer;height:77px">
            <p class="m-0">
              {{
                itemsForReporting === undefined || itemsFormReporting === null
                  ? ""
                  : itemsForReporting.title
              }}
            </p>
          </div>
          <div v-for="(item1, index1) in itemsForReporting.work_elements" :key="index1">
            <div class="report-block-child d-flex justify-content-between" style="background-color: #212739;border-bottom: 1px solid grey;height:51px">
              <p class="m-0 text-overflow-ellipse" style="font-size:12px">
                {{ item1.title }}({{ item1.acc }}%)
              </p>
              <b-button style="height: 40px;padding:0px">
                manual update
              </b-button>
            </div>
          </div>
        </div>
        <div
          v-else-if=" itemsForReporting !== undefined && navType === 'subproject'"
        >
          <div class="report-block--head" style="margin-top: 50px;background-color: #384056">
            <p class="m-0 text-uppercase">
              {{
                itemsForReporting === undefined || itemsFormReporting === null
                  ? ""
                  : itemsForReporting.portName
              }}
            </p>
          </div>
          <div class="report-block--head" style="background-color: #384056;height:77px">
            <p class="m-0 text-uppercase">
              {{
                itemsForReporting === undefined || itemsFormReporting === null
                  ? ""
                  : itemsForReporting.progName
              }}
            </p>
          </div>
          <div class="report-block--head" style="cursor: pointer;height:77px">
            <p class="m-0">
              {{
                itemsForReporting === undefined || itemsFormReporting === null
                  ? ""
                  : itemsForReporting.title
              }}
            </p>
          </div>
          <div v-for="(item1, index1) in itemsForReporting.work_elements" :key="index1">
            <div class="report-block-child d-flex justify-content-between" style="background-color: #212739;border-bottom: 1px solid grey;height:51px">
              <p class="m-0 text-overflow-ellipse" style="font-size:12px">
                {{ item1.title }}({{ item1.acc }}%)
              </p>
              <b-button style="height: 40px;padding:0px">
                manual update
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reporting-content">
      <div class="reporting-content--header">
        <div class="reporting-content-header--badge">
          <div class="phase">
            <div class="flag" />
            Phase
          </div>
          <b-button variant="flat-dark">
            <b-icon icon="diamond-fill" variant="success" />
            <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
            Milestones
          </b-button>
          <b-button variant="flat-dark" class="badge-demand">
            <b-icon icon="circle-fill" />
            Demand
          </b-button>
          <b-button variant="flat-dark" class="badge-engage">
            <b-icon icon="circle-fill" />
            Engaged
          </b-button>
          <b-button variant="flat-dark" class="badge-estimate">
            <b-icon icon="circle-fill" />
            Real Estimated
          </b-button>
        </div>
      </div>
      <div class="reporting-content--body">
        <!-- <div
          :style="'position:absoluteheight:calc(100% - 120px)border-right:2px #BD2020 solidleft:' + 400 + 'pxtop:122pxz-index:222'"
        >
          <div
            class="rounded-circle"
            style="width:6pxheight:6pxbackground-color:#BD2020position:absolutetop:-2pxleft:-2px"
          />
        </div> -->
        <div class="timeline-list" :style="`width:${windowWidth / 2}px`">
          <div
            v-for="(date, index) in reportingDates"
            :key="index"
            class="date"
            :class="{ active: isToday(date) }"
          >
            <p
              v-if="
                index > 0 ? getMonth(date) != getMonth(reportingDates[index - 1]) : true
              "
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
          v-if="
            itemsForReporting !== undefined &&
            navType === 'program' &&
            parentCollapse === true
          "
        >
          <b-card
            no-body
            class="d-flex flex-column justify-content-around"
            style="height:77px;padding:5px 10px 5px 3px;width:fit-content;margin-bottom:0!important"
          >
            <div :style="`margin-bottom:5px;padding-left:${getStartPadding(itemsForReporting, 0, false)}px`">
              <ProgramProgressBar
                :type="0"
                :width1="getValue(itemsForReporting, 0, false)"
                :isstartmark="isStartMark(itemsForReporting, 0, false)"
                :isendmark="isEndMark(itemsForReporting, 0, false)"
              />
            </div>
            <div :style="`margin-bottom:5px;padding-left:${getStartPadding(itemsForReporting, 1, false)}px`">
              <ProgramProgressBar
                :type="1"
                :width1="getValue(itemsForReporting, 1, false)"
                :istartmark="isStartMark(itemsForReporting, 1, false)"
                :isendmark="isEndMark(itemsForReporting, 1, false)"
              />
            </div>
            <div :style="`margin-bottom:5px;padding-left:${getStartPadding(itemsForReporting, 2, false)}px`">
              <ProgramProgressBar
                :type="2"
                :width1="getValue(itemsForReporting, 2, false)"
                :isstartmark="isStartMark(itemsForReporting, 2, false)"
                :isendmark="isEndMark(itemsForReporting, 2, false)"
              />
            </div>
          </b-card>
          <div v-for="(item1, index1) in itemsForReporting.children" :key="index1">
            <div class="w-100" style="height: 77px">
              <b-card
                no-body
                class="d-flex flex-column justify-content-around"
                style="height:76px;padding:5px 10px 5px 3px;width:fit-content;"
              >
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    0,
                    true
                  )}px`"
                >
                  <ProjectProgressBar
                    :type="0"
                    :widths="getValue(item1, 0, true)"
                    :paddings="getStartPadding(item1, 0, true)"
                    :isstartmark="isStartMark(item1, 0, true)"
                    :isendmark="isEndMark(item1, 0, true)"
                  />
                </div>
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    1,
                    true
                  )}px`"
                >
                  <ProjectProgressBar
                    :type="1"
                    :widths="getValue(item1, 1, true)"
                    :paddings="getStartPadding(item1, 1, true)"
                    :isstartmark="isStartMark(item1, 1, true)"
                    :isendmark="isEndMark(item1, 1, true)"
                  />
                </div>
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    2,
                    true
                  )}px`"
                >
                  <ProjectProgressBar
                    :type="2"
                    :widths="getValue(item1, 2, true)"
                    :paddings="getStartPadding(item1, 2, true)"
                    :isstartmark="isStartMark(item1, 2, true)"
                    :isendmark="isEndMark(item1, 2, true)"
                  />
                </div>
              </b-card>
            </div>
            <template
              v-if="
                item1 !== undefined && item1.work_elements && openedCollapse === index1
              "
            >
              <div v-for="(item2, index2) in item1.work_elements" :key="index2">
                <div style="height: 51px" class="w-100">
                  <b-card
                    no-body
                    class="d-flex flex-column justify-content-around"
                    style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
                  >
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 0, false)}px`">
                      <ProgramProgressBar
                        :type="0"
                        :width1="getValue(item2, 0, false)"
                        :isstartmark="isStartMark(item2, 0, false)"
                        :isendmark="isEndMark(item2, 0, false)"
                      />
                    </div>
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 1, false)}px`">
                      <ProgramProgressBar
                        :type="1"
                        :width1="getValue(item2, 1, false)"
                        :isstartmark="isStartMark(item2, 1, false)"
                        :isendmark="isEndMark(item2, 1, false)"
                      />
                    </div>
                    <div :style="`margin-bottom:5px;padding-left:${getStartPadding(item2, 2, false)}px`">
                      <ProgramProgressBar
                        :type="2"
                        :width1="getValue(item2, 2, false)"
                        :isstartmark="isStartMark(item2, 2, false)"
                        :isendmark="isEndMark(item2, 2, false)"
                      />
                    </div>
                  </b-card>
                </div>
              </div>
            </template>
          </div>
        </div>
        <div
          v-else-if="
            itemsForReporting !== undefined && navType === 'project'
          "
        >
          <b-card
            no-body
            class="d-flex flex-column justify-content-around"
            style="margin-top:77px;height:76px;padding:5px 10px 5px 3px;width:fit-content;margin-bottom:0!important"
          >
            <div
              :style="`margin-bottom:5px;padding-left:${getStartPadding(
                itemsForReporting,
                0,
                false
              )}px`"
            >
              <ProjectProgressBar
                :type="0"
                :widths="getValue(itemsForReporting, 0, true)"
                :paddings="getStartPadding(itemsForReporting, 0, true)"
                :isstartmark="isStartMark(itemsForReporting, 0, true)"
                :isendmark="isEndMark(itemsForReporting, 0, true)"
              />
            </div>
            <div
              :style="`margin-bottom:5px;padding-left:${getStartPadding(
                itemsForReporting,
                1,
                false
              )}px`"
            >
              <ProjectProgressBar
                :type="1"
                :widths="getValue(itemsForReporting, 1, true)"
                :paddings="getStartPadding(itemsForReporting, 1, true)"
                :isstartmark="isStartMark(itemsForReporting, 1, true)"
                :isendmark="isEndMark(itemsForReporting, 1, true)"
              />
            </div>
            <div
              :style="`margin-bottom:5px;padding-left:${getStartPadding(
                itemsForReporting,
                2,
                false
              )}px`"
            >
              <ProjectProgressBar
                :type="2"
                :widths="getValue(itemsForReporting, 2, true)"
                :paddings="getStartPadding(itemsForReporting, 2, true)"
                :isstartmark="isStartMark(itemsForReporting, 2, true)"
                :isendmark="isEndMark(itemsForReporting, 2, true)"
              />
            </div>
          </b-card>
          <div v-for="(item1, index1) in itemsForReporting.work_elements" :key="index1">
            <div style="height: 51px" class="w-100">
              <b-card
                no-body
                class="d-flex flex-column justify-content-around"
                style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
              >
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    0,
                    false
                  )}px`"
                >
                  <ProgramProgressBar
                    :type="0"
                    :width1="getValue(item1, 0, false)"
                    :isstartmark="isStartMark(item1, 0, false)"
                    :isendmark="isEndMark(item1, 0, false)"
                  />
                </div>
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    1,
                    false
                  )}px`"
                >
                  <ProgramProgressBar
                    :type="1"
                    :width1="getValue(item1, 1, false)"
                    :isstartmark="isStartMark(item1, 1, false)"
                    :isendmark="isEndMark(item1, 1, false)"
                  />
                </div>
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    2,
                    false
                  )}px`"
                >
                  <ProgramProgressBar
                    :type="2"
                    :width1="getValue(item1, 2, false)"
                    :isstartmark="isStartMark(item1, 2, false)"
                    :isendmark="isEndMark(item1, 2, false)"
                  />
                </div>
              </b-card>
            </div>
          </div>
        </div>
        <div
          v-else-if="
            itemsForReporting !== undefined && navType === 'subproject'
          "
        >
          <b-card
            no-body
            class="d-flex flex-column justify-content-around"
            style="margin-top:77px;height:76px;padding:5px 10px 5px 3px;width:fit-content;margin-bottom:0!important"
          >
            <div
              :style="`margin-bottom:5px;padding-left:${getStartPadding(
                itemsForReporting,
                0,
                false
              )}px`"
            >
              <ProjectProgressBar
                :type="0"
                :widths="getValue(itemsForReporting, 0, true)"
                :paddings="getStartPadding(itemsForReporting, 0, true)"
                :isstartmark="isStartMark(itemsForReporting, 0, true)"
                :isendmark="isEndMark(itemsForReporting, 0, true)"
              />
            </div>
            <div
              :style="`margin-bottom:5px;padding-left:${getStartPadding(
                itemsForReporting,
                1,
                false
              )}px`"
            >
              <ProjectProgressBar
                :type="1"
                :widths="getValue(itemsForReporting, 1, true)"
                :paddings="getStartPadding(itemsForReporting, 1, true)"
                :isstartmark="isStartMark(itemsForReporting, 1, true)"
                :isendmark="isEndMark(itemsForReporting, 1, true)"
              />
            </div>
            <div
              :style="`margin-bottom:5px;padding-left:${getStartPadding(
                itemsForReporting,
                2,
                false
              )}px`"
            >
              <ProjectProgressBar
                :type="2"
                :widths="getValue(itemsForReporting, 2, true)"
                :paddings="getStartPadding(itemsForReporting, 2, true)"
                :isstartmark="isStartMark(itemsForReporting, 2, true)"
                :isendmark="isEndMark(itemsForReporting, 2, true)"
              />
            </div>
          </b-card>
          <div v-for="(item1, index1) in itemsForReporting.work_elements" :key="index1">
            <div style="height: 51px" class="w-100">
              <b-card
                no-body
                class="d-flex flex-column justify-content-around"
                style="height:50px;padding:1px 10px 1px 3px;width:fit-content;"
              >
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    0,
                    false
                  )}px`"
                >
                  <ProgramProgressBar
                    :type="0"
                    :width1="getValue(item1, 0, false)"
                    :isstartmark="isStartMark(item1, 0, false)"
                    :isendmark="isEndMark(item1, 0, false)"
                  />
                </div>
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    1,
                    false
                  )}px`"
                >
                  <ProgramProgressBar
                    :type="1"
                    :width1="getValue(item1, 1, false)"
                    :isstartmark="isStartMark(item1, 1, false)"
                    :isendmark="isEndMark(item1, 1, false)"
                  />
                </div>
                <div
                  :style="`margin-bottom:5px;padding-left:${getStartPadding(
                    item1,
                    2,
                    false
                  )}px`"
                >
                  <ProgramProgressBar
                    :type="2"
                    :width1="getValue(item1, 2, false)"
                    :isstartmark="isStartMark(item1, 2, false)"
                    :isendmark="isEndMark(item1, 2, false)"
                  />
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
    <update-confirm-modal @onUpdate="onUpdate" />
  </div>
  <div v-else-if="reportingState === 'cost'" style="width: 100%">
    <ReportingCostVue :data="itemsForReporting" :fields="costfields" />
  </div>
</template>

<script>
import { BButton, BCard } from "bootstrap-vue"
import moment from "moment"
import ReportingCostVue from "./ReportingCost.vue"
import ProgramProgressBar from "../../globalComponent/ProgramProgressBar.vue"
import ProjectProgressBar from "../../globalComponent/ProjectProgressBar.vue"
import UpdateConfirmModal from "../modals/UpdateConfirmModal.vue"

export default {
  components: {
    BButton,
    BCard,
    ReportingCostVue,
    ProgramProgressBar,
    ProjectProgressBar,
    UpdateConfirmModal,
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
    }
  },
  computed: {
    isOptimizeIndex() {
      return this.$store.state.globalState.optimizeStatus
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
      console.log("INITD:", data, "st:", this.$store.state.globalState.selectedToDate.toString())
      this.startGraphData = moment(this.$store.state.globalState.selectedFromDate)
      this.endGraphData = moment(this.$store.state.globalState.selectedToDate)
      const tempStartDate = this.startGraphData.clone()
      this.reportingDates = [tempStartDate.clone()]

      while (tempStartDate.add(1, 'days').diff(this.endGraphData) < 0) {
        this.reportingDates.push(tempStartDate.clone())
      }
      this.navType = this.$store.state.globalState.selectedNavObj.type
      this.itemsForReporting = this.$store.state.globalState.portfolioReportingData
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
            result.push(duration.asDays() * 24)
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
        result = (duration.asDays() + 1) * 24
        if (item.id === 14) console.log("VST:", startMoment, "VEND:", endMoment, "Vduration:", duration)
      }
      return result
    },
    getStartPadding(item, type, isChild) {
      let result = 0
      if (isChild) {
        // if (item.id === 9 && type === 1) console.log('Item:', item)
        if (item.phases) {
          const pstarts = []
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
            // if (item.id === 9 && type === 1) console.log('start:', startMoment.toString('YYYY-MM-DD'), 'first:', firstMoment.toString('YYYY-MM-DD'))
            const duration = startMoment > firstMoment ? moment.duration(startMoment.diff(firstMoment)).asDays() : 0
            result = duration === 0 ? 0 : duration * 24
            pstarts.push(result)
            phIndex += 1
          }
          // if (item.id === 9 && type === 1) console.log('pstart:', pstarts)
          return pstarts
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
        result = duration * 24
        if (item.id === 14) console.log("PST:", startMoment, "PEND:", firstMoment, "Pduration:", result)
        return result
      }
      return result
    },
    onOptimizeIndex() {
      this.isOptimizeIndex = this.$store.state.globalState.optimizeStatus
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
