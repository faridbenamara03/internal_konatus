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
            1.28.11.1.1
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            1.28.11.1.2
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            1.28.11.1.3
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            1.28.11.1.4
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            1.28.11.1.5
          </div>
        </div>
      </div>
      <div class="program-collapse-sub-project" style="border-bottom: 1px solid grey">
        <div class="sub-project">
          <div class="child1 ml-1">
            1.28.11.1.6
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
            <b-card no-body style="height:87px;padding-top:15px;">
              <div class="d-flex">
                <CustomProgramBar color="#ea5455" :width="655" />
              </div>
              <div class="d-flex">
                <CustomProgramBar color="#28c76f" :width="700" />
              </div>
              <div class="d-flex">
                <CustomProgramBar color="#00cfe8" :width="767" />
              </div>
            </b-card>
          </div>
          <div style="height:77px">
            <b-card class="mb-0" no-body style="height:76px;">
              <div style="height:21px" />
              <div class="d-flex">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${210}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${180}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${200}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${200}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${220}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${210}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${250}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${230}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${220}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
              </div>
            </b-card>
          </div>
          <div :style="`height:46px;padding-left:140px;`">
            <div class="mb-0" style="height:45px;width:500px">
              <ProgressComponent :index="0" />
            </div>
          </div>
          <div :style="`height:46px;padding-left:240px;`">
            <div class="mb-0" style="height:45px;width:500px">
              <ProgressComponent :index="1" />
            </div>
          </div>
          <div :style="`height:46px;padding-left:250px;`">
            <div class="mb-0" style="height:45px;width:500px">
              <ProgressComponent :index="2" />
            </div>
          </div>
          <div :style="`height:46px;padding-left:100px;`">
            <div class="mb-0" style="height:45px;width:500px">
              <ProgressComponent :index="3" />
            </div>
          </div>
          <div :style="`height:46px;padding-left:230px;`">
            <div class="mb-0" style="height:45px;width:500px">
              <ProgressComponent :index="4" />
            </div>
          </div>
          <div :style="`height:46px;padding-left:180px;`">
            <div class="mb-0" style="height:45px;width:500px">
              <ProgressComponent :index="5" />
            </div>
          </div>
          <!-- <div v-for="(item, index) in datt" :key="index">
            <div v-for="(item1, index1) in item.children" :key="index1">
              <div class="progress-wrapper" :style="'width:' + timelineWinWidth + 'px;'">
                <progress-component :sDate="item1.start_date" :eDate="item1.end_date" :s1Date="item1.start_date1" :e1Date="item1.end_date1"
                  :s2Date="item1.start_date2" :e2Date="item1.end_date2" :s3Date="item1.start_date3" :e3Date="item1.end_date3" :exist="item1.start_date"
                  :title="`${item1.title} (${item1.progress}%)`" :isSub="false" :offsetBase="15" />
              </div>
              <template v-for="(item2, index2) in item1.children" >
                <div class="progress-wrapper-child" :style="`width:${timelineWinWidth}px;height:${item2.phases ? (46 + item2.phases.length * 30.3) : 46}px`"
                  :key="index2" >
                  <progress-component :sDate="item2.start_date" :eDate="item2.end_date" :s1Date="item2.start_date1" :e1Date="item2.end_date1"
                    :s2Date="item2.start_date2" :e2Date="item2.end_date2" :s3Date="item2.start_date3" :e3Date="item2.end_date3" :exist="item2.start_date"
                    :title="`${item2.title} (${item2.progress}%)`" :isSub="true" :offsetBase="15" />
                </div>
              </template>
            </div>
          </div> -->
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
          <!-- <div v-for="(item, index) in datt" :key="index">
            <div v-for="(item1, index1) in item.children" :key="index1">
              <div class="progress-wrapper" :style="'width:' + timelineWinWidth + 'px'">
                <progress-component :sDate="item1.start_date" :eDate="item1.end_date" :s1Date="item1.start_date1" :e1Date="item1.end_date1"
                  :s2Date="item1.start_date2" :e2Date="item1.end_date2" :s3Date="item1.start_date3" :e3Date="item1.end_date3" :exist="item1.start_date"
                  :title="`${item1.title} (${item1.progress}%)`" :isSub="false" :offsetBase="75" />
              </div>
              <div class="progress-wrapper-child" :style="'width:' + timelineWinWidth + 'px'" v-for="(item2, index2) in item1.children" :key="index2" >
                <progress-component :sDate="item2.start_date" :eDate="item2.end_date" :s1Date="item2.start_date1" :e1Date="item2.end_date1"
                  :s2Date="item2.start_date2" :e2Date="item2.end_date2" :s3Date="item2.start_date3" :e3Date="item2.end_date3" :exist="item2.start_date"
                  :title="`${item2.title} (${item2.progress}%)`" :isSub="true" :offsetBase="75" />
              </div>
            </div>
          </div> -->
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
    <b-modal id="modal-project-plan-update" ref="my-modal" title="Create New" centered no-fade hide-backdrop>
      <!-- Modal Header -->
      <template #modal-header>
        <h5 class="modal-title">Update</h5>
        <div class="modal-actions">
          <b-button variant="outline-primary">
            <feather-icon icon="XIcon" size="18" v-on:click="hideModal()" />
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
import ProgressComponent from './sub-component/ProgressComponent.vue'
import CustomProgramBar from './CustomProgramBar.vue'
import ReportingCostVue from "./ReportingCost.vue"

export default {
  components: {
    BModal,
    BButton,
    ProgressComponent,
    BProgress,
    ReportingCostVue,
    BCard,
    CustomProgramBar
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
      reportingDates1: [],
      value1: 30,
      value2: 40,
      value3: 80,
      leftP: 15 * 30 + 8,
      lineStartDate: moment(moment()).subtract(15, "days").format('YYYY.MM.DD'),
      todate: moment().format('YYYY.MM.DD'),
      timelineWinWidth: 76 * 30 + 8 * 2,
      collapsed: false,
      selected: 1,
      options: [
        { value: 1, text: 1 },
        { value: 2, text: 2 },
      ],
      updatedd: false
    }
  },
  computed: {
    datt() {
      return this.$store.state.orgnizationState.unitReportingData
    }
  },
  mounted() {
    const startDate = moment(moment()).subtract(15, "days")
    const endDate = moment(moment()).add(2, "M")
    this.reportingDates = [startDate.clone()]
    while (startDate.add(1, "days").diff(endDate) < 0) {
      this.reportingDates.push(startDate.clone())
    }
    const startDate1 = moment(moment()).subtract(75, "days")
    const endDate1 = moment(moment()).add(5, "M")
    this.reportingDates1 = [startDate1.clone()]
    while (startDate1.add(5, "days").diff(endDate1) < 0) {
      this.reportingDates1.push(startDate1.clone())
    }
  },
  methods: {
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
    onCollapse() {
      this.collapsed = !this.collapsed
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    onUpdate() {
      this.$store.commit('orgnizationState/UPDATE_REPORTING_DATA')
      this.$refs['my-modal'].hide()
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
