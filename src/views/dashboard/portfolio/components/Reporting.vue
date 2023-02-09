<template>
  <div v-if="reportingState === 'plan'" class="report">
    <div class="reporting-side">
      <div>
        <div class="report-block--head" style="margin-top:50px;">
          <p class="m-0 text-uppercase">
            {{ data.title }}
          </p>
        </div>
        <div v-for="(item1, index1) in data.children" :key="index1">
          <div class="report-block--head" style="cursor:pointer" @click="onCollapseClick(index1)">
            <feather-icon v-if="item1.children"
              :icon="openedCollapse === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'" size="16" class="mr-1" />
            <p class="m-0 text-uppercase text-overflow-ellipse">
              {{ item1.title }}
            </p>
          </div>
          <template v-if="item1.children && openedCollapse === index1">
            <div v-for="(item2, index2) in item1.children" :key="index2" class="report-block-child">
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item2.title }}
              </p>
            </div>
          </template>
        </div>
      </div>
      <!-- <app-collapse accordion>
        <app-collapse-item title="Accordion Item 1">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </app-collapse-item>
      </app-collapse> -->
    </div>
    <div class="reporting-content">
      <div class="reporting-content--header">
        <div />
        <!-- <b-button v-b-modal.modal-update variant="flat-primary">
          <feather-icon icon="RotateCwIcon" />
          Update
        </b-button> -->
        <div class="reporting-content-header--badge">
          <!-- <b-button
            variant="flat-dark"
            class="d-inline-flex align-items-center"
          >
            <span class="badge" />
            <span>Phase</span>
          </b-button> -->
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
        <div
          :style="'position:absolute;height:calc(100% - 120px);border-right:2px #BD2020 solid;left:' + 365 + 'px;top:122px;z-index:222'">
          <div class="rounded-circle"
            style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"></div>
        </div>
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
        <div v-for="(item1, index1) in data.children" :key="index1">
          <div class="w-100" style="height:77px">
            <b-card no-body class="mb-0" style="height:76px;padding-top:11px;">
              <div style="margin-bottom:5px">
                <ProgramProgressBar :type="0" :width1="index1 === 0 ? da1 : Math.random() * 100 + 500" :width2="367" />
              </div>
              <div style="margin-bottom:5px">
                <ProgramProgressBar :type="1" :width1="index1 === 0 ? da2 : Math.random() * 100 + 600" :width2="367" />
              </div>
              <div>
                <ProgramProgressBar :type="2" :width1="index1 === 0 ? da3 : Math.random() * 100 + 700" :width2="367" />
              </div>
            </b-card>
          </div>
          <template v-if="item1.children && openedCollapse === index1">
            <div v-for="(item2, index2) in item1.children" :key="index2" style="height:51px" class="w-100">
              <b-card no-body class="d-flex flex-column justify-content-around" style="height:50px;padding:1px 3px;">
                <ProjectProgressBar :type="0" :width1="dta[index2][0]" :width2="dta[index2][1]" :width3="dta[index2][2]" :width4="363" />
                <ProjectProgressBar :type="1" :width1="dta[index2][3]" :width2="dta[index2][4]" :width3="dta[index2][5]" :width4="363" />
                <ProjectProgressBar :type="2" :width1="dta[index2][6]" :width2="dta[index2][7]" :width3="dta[index2][8]" :width4="363" />
              </b-card>
            </div>
          </template>
        </div>
      </div>
    </div>
    <b-modal id="modal-update" ref="my-modal" title="Create New" centered no-fade hide-backdrop>
      <!-- Modal Header -->
      <template #modal-header>
        <h5 class="modal-title">
          Update
        </h5>
        <div class="modal-actions">
          <b-button variant="outline-primary">
            <feather-icon icon="XIcon" size="18" />
          </b-button>
        </div>
      </template>
      <div>Are you sure to update?</div>
      <template #modal-footer>
        <b-button variant="outline-primary">Cancel
        </b-button>
        <b-button variant="primary">Update
        </b-button>
      </template>
    </b-modal>
  </div>
  <div style="width:100%" v-else-if="reportingState === 'cost'">
    <ReportingCostVue :data="itemsForDemand" :fields="fields" />
  </div>
</template>

<script>
import {
  BButton,
  BCard,
  // BListGroup,
  // BListGroupItem,
  BModal,
} from 'bootstrap-vue'
import moment from 'moment'
import ReportingCostVue from './ReportingCost.vue'
import ProgramProgressBar from '../../globalComponent/ProgramProgressBar.vue'
import ProjectProgressBar from '../../globalComponent/ProjectProgressBar.vue'
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
    BModal,
    ReportingCostVue,
    ProgramProgressBar,
    ProjectProgressBar
  },
  props: {
    data: {
      type: Object,
      default: () => { },
    },
    otype: {
      type: String
    },
    reportingState: {
      type: String
    },
    fields: {
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
      openedCollapse: 0,
      itemsForDemand: this.$store.state.portfolioState.reportingData,
      // fieldForDemand: ['BUDGET demand', 'BUDGET engaged ', 'Real Estimated'],
      dta: [
        [parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200],
        [parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200],
        [parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200],
        [parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 100, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 150, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200, parseInt(Math.random() * 100, 10) + 200],
      ]
    }
  },
  computed: {
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
    // return Math.random() * 100 + 200 + Math.random() * 100 + 200 + Math.random() * 100 + 200
  },
  mounted() {
    const startDate = moment(moment()).subtract(15, 'days')
    const endDate = moment(moment()).add(1, 'M')
    this.reportingDates = [startDate.clone()]
    while (startDate.add(1, 'days').diff(endDate) < 0) {
      this.reportingDates.push(startDate.clone())
    }
  },
  methods: {
    largest(a, b, c, d) {
      return Math.max(a, b, c, d)
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
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";

.rotate-icon {
  transform: rotate(180deg);
}
</style>
