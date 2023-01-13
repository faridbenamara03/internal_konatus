<template>
  <div v-if="reportingState === 'plan'" class="report-custom">
    <div class="reporting-side-custom" v-for="(item, index) in datt" :key="index">
      <div class="program-title">
        <div class="program-title-child">
          <feather-icon v-if="!collapsed" icon="ChevronDownIcon" style="cursor:pointer" v-on:click="onCollapse" />
          <feather-icon v-if="collapsed" icon="ChevronUpIcon" style="cursor:pointer" v-on:click="onCollapse" />
          {{ item.title }}
          <span class="ml-3 mr-1">type:</span>
          <div style="display:inline-block">
            <b-form-select v-model="selected" :options="options" size="sm" />
          </div>
        </div>
      </div>
      <div v-if="!collapsed">
        <div v-for="(item1, index1) in item.children" :key="index1">
          <div class="program-collapse-header">
            <div class="header-child">
              <div class="child1">
                <div class="title">
                  {{ item1.child_title }}
                </div>
                <div class="id">
                  {{ item1.id }}
                </div>
              </div>
              <div class="child2">
                <div class="content">
                  <feather-icon icon="XIcon" style="cursor:pointer" />
                </div>
              </div>
            </div>
          </div>
          <div class="program-collapse-sub-project" v-for="(item2, index2) in item1.sub_project" :key="index2">
            <div class="sub-project">
              <div class="child1">
                {{ item2.id }}
              </div>
              <div class="child2">
                ({{ item2.progress ? item2.progress : 0 }}%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reporting-content-custom">
      <div :style="'position:absolute;height:100%;border-right:2px #BD2020 solid;left:' + leftP + 'px;top:118px;z-index:222'">
        <div class="rounded-circle" style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"></div>
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
          <div
            v-for="(date, index) in reportingDates"
            :key="index"
            class="date"
            :class="{'active': isToday(date)}"
          >
            <p
              v-if="index > 0 ? getMonth(date) != getMonth(reportingDates[index-1]) : true"
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
        <div v-if="!collapsed">
          <div v-for="(item, index) in datt" :key="index">
            <div v-for="(item1, index1) in item.children" :key="index1">
              <div class="progress-wrapper" :style="'width:' + timelineWinWidth + 'px'">
                <progress-component :sDate="item1.start_date" :eDate="item1.end_date" :s1Date="item1.start_date1" :e1Date="item1.end_date1"
                  :s2Date="item1.start_date2" :e2Date="item1.end_date2" :s3Date="item1.start_date3" :e3Date="item1.end_date3" :exist="item1.start_date"
                  :title="`${item1.id} (${item1.progress}%)`" :isSub="false" :offsetBase="15" />
              </div>
              <div class="progress-wrapper-child" :style="'width:' + timelineWinWidth + 'px'" v-for="(item2, index2) in item1.sub_project" :key="index2" >
                <progress-component :sDate="item2.start_date" :eDate="item2.end_date" :s1Date="item2.start_date1" :e1Date="item2.end_date1"
                  :s2Date="item2.start_date2" :e2Date="item2.end_date2" :s3Date="item2.start_date3" :e3Date="item2.end_date3" :exist="item2.start_date"
                  :title="`${item2.id} (${item2.progress}%)`" :isSub="true" :offsetBase="15" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="this.selected === 2" class="reporting-content--body-custom">
        <div class="timeline-list">
          <div
            v-for="(date, index) in reportingDates1"
            :key="index"
            class="date"
            :class="{'active': isToday(date)}"
          >
            <p
              v-if="index > 0 ? getMonth(date) != getMonth(reportingDates1[index-1]) : true"
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
        <div v-if="!collapsed">
          <div v-for="(item, index) in datt" :key="index">
            <div v-for="(item1, index1) in item.children" :key="index1">
              <div class="progress-wrapper" :style="'width:' + timelineWinWidth + 'px'">
                <progress-component :sDate="item1.start_date" :eDate="item1.end_date" :s1Date="item1.start_date1" :e1Date="item1.end_date1"
                  :s2Date="item1.start_date2" :e2Date="item1.end_date2" :s3Date="item1.start_date3" :e3Date="item1.end_date3" :exist="item1.start_date"
                  :title="`${item1.id} (${item1.progress}%)`" :isSub="false" :offsetBase="75" />
              </div>
              <div class="progress-wrapper-child" :style="'width:' + timelineWinWidth + 'px'" v-for="(item2, index2) in item1.sub_project" :key="index2" >
                <progress-component :sDate="item2.start_date" :eDate="item2.end_date" :s1Date="item2.start_date1" :e1Date="item2.end_date1"
                  :s2Date="item2.start_date2" :e2Date="item2.end_date2" :s3Date="item2.start_date3" :e3Date="item2.end_date3" :exist="item2.start_date"
                  :title="`${item2.id} (${item2.progress}%)`" :isSub="true" :offsetBase="75" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-project-plan-update"
      ref="my-modal"
      title="Create New"
      centered
      no-fade
      hide-backdrop
    >
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
  BModal, BButton, BFormSelect
} from "bootstrap-vue"
import moment from "moment"
import ProgressComponent from './sub-component/ProgressComponent.vue'
import ReportingCostVue from "./ReportingCost.vue"

export default {
  components: {
    BModal,
    BButton,
    ProgressComponent,
    BFormSelect,
    ReportingCostVue
  },
  props: {
    reportingState: {
      type: String,
    },
  },
  data() {
    return {
      reportingDates: [],
      reportingDates1: [],
      value1: 30,
      value2: 40,
      value3: 80,
      // reportingData: this.$store.state.orgnizationState.reportingData,
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
      return this.$store.state.orgnizationState.reportingData
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
