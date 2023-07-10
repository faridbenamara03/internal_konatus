<template>
  <div v-if="reportingState === 'plan'" class="report-custom">
    <div class="reporting-side-custom">
      <div class="program-title">
        <div class="program-title-child">
          <!-- <feather-icon v-if="!collapsed" icon="ChevronDownIcon" style="cursor:pointer" v-on:click="onCollapse" />
          <feather-icon v-if="collapsed" icon="ChevronUpIcon" style="cursor:pointer" v-on:click="onCollapse" /> -->
          Consumer Robots
          <!-- <span class="ml-1 mr-1">type:</span>
          <div style="display:inline-block">
            <b-form-select v-model="selected" :options="options" size="sm" />
          </div> -->
        </div>
      </div>
      <div class="program-title" style="margin-top:0;box-shadow: 0px -3px 10px 0px rgba(22, 22, 22, 0);margin-top:1px">
        <div class="program-title-child">
          <!-- <feather-icon v-if="!collapsed" icon="ChevronDownIcon" style="cursor:pointer" v-on:click="onCollapse" />
          <feather-icon v-if="collapsed" icon="ChevronUpIcon" style="cursor:pointer" v-on:click="onCollapse" /> -->
          Quadruped robot
        </div>
      </div>
      <div class="program-collapse-header" style="border-bottom: 1px solid grey">
        <div class="header-child">
          <div class="child1">
            <div class="title">
              New Format
            </div>
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            2.29.18.112 <span style="color:white">(10%)</span>
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            2.29.18.113 <span style="color:white">({{ percentage113 }})</span>
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            2.29.18.114 <span style="color:white">({{ percentage114 }})</span>
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            2.29.18.115 <span style="color:white">(100%)</span>
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            2.29.18.116 <span style="color:white">(10%)</span>
          </div>
        </div>
      </div>
    </div>
    <div class="reporting-content-custom">
      <div
        :style="'position:absolute;height:100%;border-right:2px #BD2020 solid;left:' + leftP + 'px;top:118px;z-index:222'">
        <div class="rounded-circle"
          style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"></div>
      </div>
      <div class="reporting-content--header">
        <div class="first-child">
        </div>
        <div class="reporting-content-header--badge">
          <div class="phase">
            <div class="flag" />
            Phase
          </div>
          <div class="milestones">
            <b-icon icon="diamond-fill" variant="success" />
            <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
            Milestones
          </div>
          <div class="demand">
            <b-icon icon="circle-fill" class="flag" />
            Real
          </div>
          <div class="engaged">
            <b-icon icon="circle-fill" class="flag" />
            Engaged
          </div>
          <div class="real-estimated">
            <b-icon icon="circle-fill" class="flag" />
            Estimated
          </div>
        </div>
      </div>
      <div v-if="this.selected === 1" class="reporting-content--body-custom">
        <div class="timeline-list">
          <div v-for="(date, index) in reportingDates" :key="index" class="date" :class="{ 'active': isToday(date) }">
            <p v-if="index > 0 ? getMonth(date) != getMonth(reportingDates[index - 1]) : true" class="month">
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
        <div v-if="!collapsed">
          <div style="height: 88px">
            <b-card no-body class="d-flex flex-column justify-content-around" style="height:87px;padding:7px 10px 7px 3px;width:fit-content;">
              <div :style="`padding-left:${programData[0][0]}px`">
                <ProgramProgressBar :type="1" :width1="programData[0][1]" :width2="leftP - programData[0][0]" />
              </div>
              <div :style="`padding-left:${programData[1][0]}px`">
                <ProgramProgressBar :type="2" :width1="programData[1][1]" :width2="leftP - programData[1][0]" />
              </div>
              <div :style="`padding-left:${programData[2][0]}px`">
                <ProgramProgressBar :type="0" :width1="programData[2][1]" :width2="leftP - programData[2][0]" />
              </div>
            </b-card>
          </div>
          <div style="height:77px">
            <b-card class="d-flex flex-column justify-content-around" no-body style="height:76px;padding:5px 10px 5px 3px;width:fit-content;">
              <div :style="`padding-left:${projectPaddingData[0]}px`">
                <ProjectProgressBar :type="1" :width1="projectData[0][0]" :width2="projectData[0][1]"
                  :width3="projectData[0][2]" :width4="leftP - projectPaddingData[0]" />
              </div>
              <div :style="`padding-left:${projectPaddingData[1]}px`">
                <ProjectProgressBar :type="2" :width1="projectData[1][0]" :width2="projectData[1][1]"
                  :width3="projectData[1][2]" :width4="leftP - projectPaddingData[1]" />
              </div>
              <div :style="`padding-left:${projectPaddingData[2]}px`">
                <ProjectProgressBar :type="0" :width1="projectData[2][0]" :width2="projectData[2][1]"
                  :width3="projectData[2][2]" :width4="leftP - projectPaddingData[2]" />
              </div>
            </b-card>
          </div>
          <div :style="`height:46px;`">
            <b-card class="d-flex flex-column justify-content-around" no-body
              style="height:45px;padding:0 10px 0 3px;width:fit-content;">
              <div :style="`margin-bottom:1px;padding-left:${elementData[0][0][0]}px;`">
                <ElementProgressBar :type="1" :width1="elementData[0][0][1]" :width2="leftP - elementData[0][0][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[0][1][0]}px;`">
                <ElementProgressBar :type="2" :width1="elementData[0][1][1]" :width2="leftP - elementData[0][1][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[0][2][0]}px;`">
                <ElementProgressBar :type="0" :width1="elementData[0][2][1]" :width2="leftP - elementData[0][2][0]" />
              </div>
            </b-card>
          </div>
          <div :style="`height:46px;`">
            <b-card class="d-flex flex-column justify-content-around" no-body
              style="height:45px;padding:0 10px 0 3px;width:fit-content;">
              <div :style="`margin-bottom:1px;padding-left:${elementData[1][0][0]}px;`">
                <ElementProgressBar :type="1" :width1="elementData[1][0][1]" :width2="leftP - elementData[1][0][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[1][1][0]}px;`">
                <ElementProgressBar :type="2" :width1="elementData[1][1][1]" :width2="leftP - elementData[1][1][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[1][2][0]}px;`">
                <ElementProgressBar :type="0" :width1="elementData[1][2][1]" :width2="leftP - elementData[1][2][0]" />
              </div>
            </b-card>
          </div>
          <div :style="`height:46px;`">
            <b-card class="d-flex flex-column justify-content-around" no-body
              style="height:45px;padding:0 10px 0 3px;width:fit-content;">
              <div :style="`margin-bottom:1px;padding-left:${elementData[2][0][0]}px;`">
                <ElementProgressBar :type="1" :width1="elementData[2][0][1]" :width2="leftP - elementData[2][0][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[2][1][0]}px;`">
                <ElementProgressBar :type="2" :width1="elementData[2][1][1]" :width2="leftP - elementData[2][1][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[2][2][0]}px;`">
                <ElementProgressBar :type="0" :width1="elementData[2][2][1]" :width2="leftP - elementData[2][2][0]" />
              </div>
            </b-card>
          </div>
          <div :style="`height:46px;`">
            <b-card class="d-flex flex-column justify-content-around" no-body
              style="height:45px;padding:0 10px 0 3px;width:fit-content;">
              <div :style="`margin-bottom:1px;padding-left:${elementData[3][0][0]}px;`">
                <ElementProgressBar :type="1" :width1="elementData[3][0][1]" :width2="leftP - elementData[3][0][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[3][1][0]}px;`">
                <ElementProgressBar :type="2" :width1="elementData[3][1][1]" :width2="leftP - elementData[3][1][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[3][2][0]}px;`">
                <ElementProgressBar :type="0" :width1="elementData[3][2][1]" :width2="leftP - elementData[3][2][0]" />
              </div>
            </b-card>
          </div>
          <div :style="`height:46px;`">
            <b-card class="d-flex flex-column justify-content-around" no-body
              style="height:45px;padding:0 10px 0 3px;width:fit-content;">
              <div :style="`margin-bottom:1px;padding-left:${elementData[4][0][0]}px;`">
                <ElementProgressBar :type="1" :width1="elementData[4][0][1]" :width2="leftP - elementData[4][0][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[4][1][0]}px;`">
                <ElementProgressBar :type="2" :width1="elementData[4][1][1]" :width2="leftP - elementData[4][1][0]" />
              </div>
              <div :style="`margin-bottom:1px;padding-left:${elementData[4][2][0]}px;`">
                <ElementProgressBar :type="0" :width1="elementData[4][2][1]" :width2="leftP - elementData[4][2][0]" />
              </div>
            </b-card>
          </div>
        </div>
      </div>
      <div v-if="this.selected === 2" class="reporting-content--body-custom">
        <div class="timeline-list">
          <div v-for="(date, index) in reportingDates1" :key="index" class="date" :class="{ 'active': isToday(date) }">
            <p v-if="index > 0 ? getMonth(date) != getMonth(reportingDates1[index - 1]) : true" class="month">
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
        <div v-if="!collapsed">
          <b-card no-body style="padding: 10px 5px">
            <b-card-text class="mb-0">
              Reticulating splines… {{ value1 + '%' }}
            </b-card-text>
            <div class="d-flex">
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                <div :style="`width:${Math.random() * 100 + 150}px`">
                  <b-progress value="100%" max="100" variant="danger" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
              </div>
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                <div :style="`width:${Math.random() * 100 + 150}px`">
                  <b-progress value="100%" max="100" variant="danger" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
              </div>
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                <div :style="`width:${Math.random() * 100 + 150}px`">
                  <b-progress value="100%" max="100" variant="danger" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                <div :style="`width:${Math.random() * 100 + 200}px`">
                  <b-progress value="100%" max="100" variant="success" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
              </div>
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                <div :style="`width:${Math.random() * 100 + 200}px`">
                  <b-progress value="100%" max="100" variant="success" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
              </div>
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                <div :style="`width:${Math.random() * 100 + 200}px`">
                  <b-progress value="100%" max="100" variant="success" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
              </div>
            </div>
            <div class="d-flex">
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                <div :style="`width:${Math.random() * 100 + 250}px`">
                  <b-progress value="100%" max="100" variant="info" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
              </div>
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                <div :style="`width:${Math.random() * 100 + 250}px`">
                  <b-progress value="100%" max="100" variant="info" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
              </div>
              <div class="d-flex">
                <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                <div :style="`width:${Math.random() * 100 + 250}px`">
                  <b-progress value="100%" max="100" variant="info" />
                </div>
                <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
    <b-modal id="project-reporting-plan-update" ref="project_reporting_plan_update" title="Create New" centered no-fade
      hide-backdrop>
      <!-- Modal Header -->
      <template #modal-header>
        <h5 class="modal-title">Update</h5>
        <div class="modal-actions">
          <b-button @click="hideModal" variant="outline-primary">
            <feather-icon icon="XIcon" size="18" />
          </b-button>
        </div>
      </template>
      <div>Are you sure to update?</div>
      <template #modal-footer>
        <b-button variant="outline-primary" @click="hideModal">Cancel</b-button>
        <b-button variant="primary" @click="onUpdate">Update</b-button>
      </template>
    </b-modal>
  </div>
  <div class="w-100" v-else-if="reportingState === 'cost'">
    <ReportingCostVue />
  </div>
</template>

<script>
import {
  BModal, BButton, BProgress, BCard
} from "bootstrap-vue"
import moment from "moment"
import ProgramProgressBar from '../../globalComponent/ProgramProgressBar.vue'
import ProjectProgressBar from '../../globalComponent/ProjectProgressBar.vue'
import ElementProgressBar from '../../globalComponent/ElementProgressBar.vue'
import ReportingCostVue from "./ReportingCost.vue"

export default {
  components: {
    BModal,
    BButton,
    BProgress,
    ReportingCostVue,
    BCard,
    ProgramProgressBar,
    ProjectProgressBar,
    ElementProgressBar
  },
  props: {
    reportingState: {
      type: String,
    },
  },
  data() {
    return {
      percentage113: '60%',
      percentage114: '44%',
      paddingLeft: [90, 150, 280, 255, 180, 270, 50],
      reportingDates: [],
      reportingDates1: [],
      value1: 30,
      value2: 40,
      value3: 80,
      leftP: 0,
      todate: moment().format('YYYY.MM.DD'),
      timelineWinWidth: 76 * 30 + 8 * 2,
      collapsed: false,
      selected: 1,
      options: [
        { value: 1, text: 1 },
        { value: 2, text: 2 },
      ],
      elementData: [
        [
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)]
        ],
        [
          [0, (15 + 31 - 1) * 30],
          [(2 + 31 - 1) * 30, 13 * 30],
          [(2 + 31 - 1) * 30, 28 * 30]
        ],
        [
          [(31 * 30), 14 * 30],
          [(2 + 31 - 1) * 30, 13 * 30],
          [(2 + 31 - 1) * 30, 28 * 30]
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)]
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)]
        ],
      ],
      projectData: [
        [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
      ],
    }
  },
  computed: {
    projectPaddingData() {
      return (
        [
          Math.min(this.elementData[0][0][0], this.elementData[1][0][0], this.elementData[2][0][0], this.elementData[3][0][0], this.elementData[4][0][0]),
          Math.min(this.elementData[0][1][0], this.elementData[1][1][0], this.elementData[2][1][0], this.elementData[3][1][0], this.elementData[4][1][0]),
          Math.min(this.elementData[0][2][0], this.elementData[1][2][0], this.elementData[2][2][0], this.elementData[3][2][0], this.elementData[4][2][0]),
        ]
      )
    },
    programData() {
      return (
        [
          [Math.random() * 1000, this.randomTen(100, 800)],
          [Math.random() * 1000, this.randomTen(100, 900)],
          [Math.random() * 1000, this.randomTen(100, 900)]
        ]
      )
    },
    calcWidth(val1) {
      return this.leftP - val1
    }
  },
  mounted() {
    const currentDate = new Date("2023-01-04")
    const startDate = new Date("2022-11-01")
    const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())

    // Calculate the time difference in milliseconds
    const timeDiff = currentDate.getTime() - startDate.getTime()
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24)
    this.leftP = 30 * daysDiff + 20

    this.reportingDates = [new Date(startDate)]
    while (startDate.getTime() < endDate.getTime()) {
      startDate.setDate(startDate.getDate() + 1)
      this.reportingDates.push(new Date(startDate))
    }

    const startDate1 = new Date("2022-11-01")
    const endDate1 = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())
    this.reportingDates1 = [new Date(startDate1)]
    while (startDate1.getTime() < endDate1.getTime()) {
      startDate1.setDate(startDate1.getDate() + 5)
      this.reportingDates1.push(new Date(startDate1))
    }

    // const startDate = moment(moment()).subtract(15, "days")
    // const endDate = moment(moment()).add(2, "M")
    // this.reportingDates = [startDate.clone()]
    // while (startDate.add(1, "days").diff(endDate) < 0) {
    //   this.reportingDates.push(startDate.clone())
    // }
    // const startDate1 = moment(moment()).subtract(75, "days")
    // const endDate1 = moment(moment()).add(5, "M")
    // this.reportingDates1 = [startDate1.clone()]
    // while (startDate1.add(5, "days").diff(endDate1) < 0) {
    //   this.reportingDates1.push(startDate1.clone())
    // }
  },
  methods: {
    randomTen(val1, val2) {
      return parseInt(Math.random() * 65, 10) * 30 + val2
    },
    isToday(date) {
      const currentDate = new Date("2023-01-04")
      // const currentDate = moment()
      return (
        currentDate.getFullYear() === date.getFullYear() && currentDate.getMonth() === date.getMonth() && currentDate.getDate() === date.getDate()
      )
          // return currentDate.isSame(date, "day")
    },
    getWeek(date) {
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
      const dayOfWeekIndex = date.getDay()
      return daysOfWeek[dayOfWeekIndex].substring(0, 1)
      // return date.format("dd").substring(0, 1)
    },
    getDay(date) {
      return date.getDate().toString()
      // return date.format("D")
    },
    getMonth(date) {
      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ]

      const month = date.getMonth()
      const year = date.getFullYear()
      return `${monthNames[month]} ${year}`
      // return date.format("MMM YYYY")
    },
    onCollapse() {
      this.collapsed = !this.collapsed
    },
    hideModal() {
      this.$refs.project_reporting_plan_update.hide()
    },
    onUpdate() {
      this.percentage113 = '100%'
      this.percentage114 = '100%'
      this.elementData = [
        [
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)]
        ],
        [
          [0, (20 + 31 - 1) * 30],
          [(2 + 31 - 1) * 30, 23 * 30],
          [(2 + 31 - 1) * 30, 23 * 30]
        ],
        [
          [(31 * 30), 19 * 30],
          [(2 + 31 - 1) * 30, 18 * 30],
          [(2 + 31 - 1) * 30, 18 * 30]
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)]
        ],
        [
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)],
          [this.randomTen(200, 100), this.randomTen(200, 300)]
        ],
      ]
      this.projectData = [
        [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
        [this.randomTen(200, 100), this.randomTen(200, 100), this.randomTen(200, 100)],
      ]
      this.$refs.project_reporting_plan_update.hide()
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
