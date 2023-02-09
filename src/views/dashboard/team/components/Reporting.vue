<template>
  <div v-if="reportingState === 'plan'" class="report-custom-team-report">
    <div class="reporting-side-custom">
      <div>
        <div class="program-title">
          <div class="program-title-child">
            CONSUMER ROBOTS
          </div>
        </div>
      </div>
      <div v-for="(item, index) in datt.children" :key="index">
        <div class="program-title-cld" :class="{ 'active': index === 0 }">
          <div class="program-title-child">
            <feather-icon v-if="!collapsed" icon="ChevronDownIcon" style="cursor:pointer" v-on:click="onCollapse" />
            <feather-icon v-if="collapsed" icon="ChevronUpIcon" style="cursor:pointer" v-on:click="onCollapse" />
            {{ item.title }}
          </div>
        </div>
        <template v-for="(item1, index1) in item.children">
          <div class="program-title-cld1" :key="index1">
            <div class="program-title-child">
              <div class="title">{{ item1.title }}</div>
              <div class="id">{{ item1.id }}</div>
            </div>
          </div>
          <template v-if="item1.phases" >
            <div v-for="(item2, index2) in item1.phases" :key="index2" class="work-element-child" >
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item2.id }} <span style="color:white">({{ item2.progress }})</span>
              </p>
            </div>
          </template>
        </template>
      </div>
    </div>
    <div class="reporting-content-custom">
      <div
        :style="'position:absolute;height:calc(100% - 120px);border-right:2px #BD2020 solid;left:' + leftP + 'px;top:118px;z-index:222'">
        <div class="rounded-circle"
          style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"></div>
      </div>
      <div class="reporting-content--header">
        <div class="first-child">
          <div v-b-modal.modal-update style="color:#D68232">
            <feather-icon icon="AlertCircleIcon" style="margin-bottom:3px" />
            Update Available
          </div>
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
            Demand
          </div>
          <div class="engaged">
            <b-icon icon="circle-fill" class="flag" />
            Engaged
          </div>
          <div class="real-estimated">
            <b-icon icon="circle-fill" class="flag" />
            Real Estimated
          </div>
        </div>
      </div>
      <div class="reporting-content--body-custom">
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
        <div v-for="(item, index) in datt.children" :key="index" style="margin-left:1px">
          <div style="height:77px;">
            <div class="d-flex flex-column justify-content-around" style="height:76px;background-color:#283046;border-radius:5px;padding:5px 3px;">
              <div style="margin-bottom:5px">
                <ProgramProgressBar :type="0" :width1="810" :width2="455" />
              </div>
              <div style="margin-bottom:5px">
                <ProgramProgressBar :type="1" :width1="900" :width2="455" />
              </div>
              <div>
                <ProgramProgressBar :type="2" :width1="953" :width2="455" />
              </div>
            </div>
          </div>
          <template v-for="(item1, index1) in item.children">
            <div style="height:77px" :key="index1">
              <div class="d-flex flex-column justify-content-around" style="height:76px;padding:5px 3px;background-color: #283046;border-radius:5px;">
                <ProjectProgressBar :type="0" :width1="250" :width2="250" :width3="250" :width4="456" />
                <ProjectProgressBar :type="1" :width1="280" :width2="320" :width3="240" :width4="456" />
                <ProjectProgressBar :type="2" :width1="290" :width2="330" :width3="270" :width4="456" />
              </div>
            </div>
            <template v-if="item1.phases">
              <div v-for="(item2, index2) in item1.phases" :key="index2" :style="`height:51px;padding-left:${paddingLeft[index2]}px;`">
                <div class="d-flex flex-column justify-content-around" style="height:50px;width:500px;padding:0 3px;background-color: #283046;border-radius:5px;">
                  <div style="margin-bottom:1px">
                    <ElementProgressBar :type="0" :width1="500" :width2="455 - paddingLeft[index2]" />
                  </div>
                  <div style="margin-bottom:1px">
                    <ElementProgressBar :type="1" :width1="500" :width2="455 - paddingLeft[index2]" />
                  </div>
                  <ElementProgressBar :type="2" :width1="500" :width2="455 - paddingLeft[index2]" />
                </div>
              </div>
              <!-- <div v-for="(item2, index2) in item1.phases" :key="index2" :style="`height:51px;padding-left:${paddingLeft[index2]}px;`">
                <div class="mb-0" style="height:50px;width:500px">
                  <ProgressComponent :index="index2" />
                </div>
              </div> -->
            </template>
          </template>
        </div>
      </div>
    </div>
    <b-modal id="modal-update" ref="my-modal" title="Create New" centered no-fade hide-backdrop>
      <!-- Modal Header -->
      <template #modal-header>
        <h5 class="modal-title">Update</h5>
        <div class="modal-actions">
          <b-button variant="outline-primary">
            <feather-icon icon="XIcon" size="18" v-on:click="hideModal()" />
          </b-button>
        </div>
      </template>
      <div style="font-size:11px;color:#D0D2D6">There is an update for <b style="color:white">Next Generation
          (2.29.18.1)</b>. Are you sure to update?</div>
      <template #modal-footer>
        <b-button variant="outline-primary" @click="hideModal">Cancel</b-button>
        <b-button variant="primary" @click="onUpdate">Update</b-button>
      </template>
    </b-modal>
    <import-loader-modal />
  </div>
  <div class="w-100" v-else-if="reportingState === 'cost'">
    <ReportingCostVue />
  </div>
</template>

<script>
import {
  BModal, BButton
} from "bootstrap-vue"
import moment from "moment"
import { isEmpty } from '@/views/utils'
import ImportLoaderModal from '@/views/dashboard/project/modals/ImportLoaderModal.vue'
import ProjectProgressBar from '../../globalComponent/ProjectProgressBar.vue'
import ElementProgressBar from '../../globalComponent/ElementProgressBar.vue'
import ProgramProgressBar from '../../globalComponent/ProgramProgressBar.vue'
import ReportingCostVue from "./ReportingCost.vue"

export default {
  components: {
    BModal,
    BButton,
    ImportLoaderModal,
    ReportingCostVue,
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
      paddingLeft: [90, 150, 280, 255, 180, 270, 50],
      reportingDates: [],
      value1: 30,
      value2: 40,
      value3: 80,
      leftP: 15 * 30 + 8,
      lineStartDate: moment(moment()).subtract(15, "days").format('YYYY.MM.DD'),
      todate: moment().format('YYYY.MM.DD'),
      timelineWinWidth: 76 * 30 + 8 * 2,
      collapsed: false,
      dta: [
        [parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200],
        [parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200],
        [parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200],
        [parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200],
      ]
    }
  },
  computed: {
    datt() {
      return this.$store.state.teamState.teamReportingData
    },
    da1() {
      const a1 = this.dta[0][0] + this.dta[0][1] + this.dta[0][2]
      const a2 = this.dta[1][0] + this.dta[1][1] + this.dta[1][2]
      const a3 = this.dta[2][0] + this.dta[2][1] + this.dta[2][2]
      const a4 = this.dta[3][0] + this.dta[3][1] + this.dta[3][2]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24
    },
    da2() {
      const a1 = this.dta[0][3] + this.dta[0][4] + this.dta[0][5]
      const a2 = this.dta[1][3] + this.dta[1][4] + this.dta[1][5]
      const a3 = this.dta[2][3] + this.dta[2][4] + this.dta[2][5]
      const a4 = this.dta[3][3] + this.dta[3][4] + this.dta[3][5]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24
    },
    da3() {
      const a1 = this.dta[0][6] + this.dta[0][7] + this.dta[0][8]
      const a2 = this.dta[1][6] + this.dta[1][7] + this.dta[1][8]
      const a3 = this.dta[2][6] + this.dta[2][7] + this.dta[2][8]
      const a4 = this.dta[3][6] + this.dta[3][7] + this.dta[3][8]
      return this.largest(a1, a2, a3, a4) + 14 * 6 - 24
    }
  },
  mounted() {
    const startDate = moment(moment()).subtract(15, "days")
    const endDate = moment(moment()).add(2, "M")
    this.reportingDates = [startDate.clone()]
    while (startDate.add(1, "days").diff(endDate) < 0) {
      this.reportingDates.push(startDate.clone())
    }
  },
  methods: {
    largest(a, b, c, d) {
      return Math.max(a, b, c, d)
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
    getLength(startDate, endDate) {
      const date1 = new Date(startDate.split('.')[0], startDate.split('.')[1], startDate.split('.')[2])
      const date2 = new Date(endDate.split('.')[0], endDate.split('.')[1], endDate.split('.')[2])
      const differenceInTime = date2.getTime() - date1.getTime()
      const differenceInDays = differenceInTime / (1000 * 3600 * 24)
      const ret = differenceInDays * 30 > 0 ? (differenceInDays + 1) * 30 + 5 : 0
      return ret
    },
    onCollapse() {
      this.collapsed = !this.collapsed
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    onUpdate() {
      this.$store.commit('teamState/TOGGLE_IMPORT_LOADER_MODAL_V', true)
      this.$store.commit('globalState/UPDATE_TEAM_REPORT_DATA')
      this.$refs['my-modal'].hide()
    },
    isUN(data) {
      return isEmpty(data)
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-team-reporting.scss";
</style>
