<template>
  <div class="report-custom">
    <div class="reporting-side-custom" >
      <div class="program-title">
        <div class="program-title-child">
          <feather-icon v-if="!collapsed" icon="ChevronDownIcon" style="cursor:pointer" v-on:click="onCollapse" />
          <feather-icon v-if="collapsed" icon="ChevronUpIcon" style="cursor:pointer" v-on:click="onCollapse" />
          {{ datt.title }}
        </div>
      </div>
      <div v-if="!collapsed">
        <div v-for="(item1, index1) in datt.children" :key="index1">
          <div class="program-collapse-header">
            <div class="header-child">
              <div class="child1">
                <div class="title">
                  {{ item1.title }}
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
                ({{ item2.data.progress ? item2.data.progress : 0 }}%)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="reporting-content-custom">
      <div :style="'position:absolute;height:-webkit-fill-available;border-right:2px #BD2020 solid;left:' + leftP + 'px;top:118px;z-index:222'">
        <div class="rounded-circle" style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"></div>
      </div>
      <div class="reporting-content--header">
        <div class="first-child">
          <div v-b-modal.modal-update >
            <feather-icon icon="RotateCwIcon" style="margin-bottom:3px" />
            Update
          </div>
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
      <div class="reporting-content--body-custom">
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
          <div v-for="(item1, index1) in datt.children" :key="index1">
            <div v-if="!isUN(item1.start_date)">
              <div class="progress-wrapper" :style="'width:' + timelineWinWidth + 'px'">
                <div :style="'position:absolute;left:' + (getLength(lineStartDate, item1.start_date) + 8) + 'px;width:' + getLength(item1.start_date, item1.end_date) + 'px'">
                  <progress-component :exist="'2022.11.11'" :value="getLength(item1.start_date, todate) - 4" :title="`${item1.id} (${item1.progress}%)`" :isSub="false" />
                </div>
              </div>
              <div class="progress-wrapper-child" :style="'width:' + timelineWinWidth + 'px'" v-for="(item2, index2) in item1.sub_project" :key="index2" >
                <div :style="'position:absolute;left:' + (getLength(lineStartDate, item2.data.start_date) + 8) + 'px;width:' + getLength(item2.data.start_date, item2.data.end_date) + 'px'">
                  <progress-component :exist="item2.data.start_date" :value="getLength(item2.data.start_date, todate) - 4" :title="`${item2.id} (${item2.data.progress}%)`" :isSub="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-update"
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
</template>

<script>
import {
  BModal, BButton
} from "bootstrap-vue"
import moment from "moment"
import ProgressComponent from './sub-component/ProgressComponent.vue'
import { isEmpty } from "@/views/utils"

export default {
  components: {
    BModal,
    BButton,
    ProgressComponent,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      reportingDates: [],
      value1: 30,
      value2: 40,
      value3: 80,
      leftP: 15 * 30 + 8,
      lineStartDate: moment(moment()).subtract(15, "days").format('YYYY.MM.DD'),
      todate: moment().format('YYYY.MM.DD'),
      timelineWinWidth: 76 * 30 + 8 * 2,
      collapsed: false
    }
  },
  computed: {
    datt() {
      return this.$store.state.globalState.projectReportingData
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
    isUN(data) {
      return isEmpty(data)
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
      const ret = differenceInDays * 30 > 0 ? differenceInDays * 30 : 0
      return ret
    },
    onCollapse() {
      this.collapsed = !this.collapsed
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    onUpdate() {
      this.$store.commit('globalState/UPDATE_PROJECT_REPORTING_DATA')
      this.$refs['my-modal'].hide()
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
