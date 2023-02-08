<template>
  <div v-if="reportingState === 'plan'" class="report">
    <div class="reporting-side">
      <div>
        <div class="report-block--head" style="margin-top:128px;">
          <p class="m-0 text-uppercase">
            {{ data.title }}
          </p>
        </div>
        <div v-for="(item1, index1) in data.children" :key="index1">
          <div class="report-block--head" style="cursor:pointer" @click="onCollapseClick(index1)">
            <feather-icon v-if="item1.children"
              :icon="openedCollapse === index1 ? 'ChevronDownIcon' : 'ChevronRightIcon'" size="16" class="mr-1" />
            <p class="ml-1 m-0 text-overflow-ellipse">
              {{ item1.title }}
            </p>
          </div>
          <template v-if="item1.phases">
            <div v-for="(item2, index2) in item1.phases" :key="index2" class="report-block-child">
              <p class="m-0 text-uppercase text-overflow-ellipse">
                {{ item2.id }} <span style="color:white">({{ item2.progress }})</span>
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
        <div style="height:77px;">
          <b-card no-body class="mb-0" style="height:76px;padding-top:11px;">
            <div class="d-flex">
              <CustomProgramBar color="#ea5455" :width="da1" />
            </div>
            <div class="d-flex">
              <CustomProgramBar color="#28c76f" :width="da2" />
            </div>
            <div class="d-flex">
              <CustomProgramBar color="#00cfe8" :width="da3" />
            </div>
          </b-card>
        </div>
        <div v-for="(item1, index1) in data.children" :key="index1">
          <div style="height: 77px">
            <b-card no-body class="mb-0" style="padding-top:15px;height:76px;padding-left:3px">
              <div class="d-flex" style="margin-bottom: 4px">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${dta[index1][0]}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${dta[index1][1]}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="danger" />
                  <div :style="`width:${dta[index1][2]}px`">
                    <b-progress value="100%" max="100" variant="danger" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="danger" />
                </div>
              </div>
              <div class="d-flex" style="margin-bottom: 4px">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${dta[index1][3]}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${dta[index1][4]}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="success" />
                  <div :style="`width:${dta[index1][5]}px`">
                    <b-progress value="100%" max="100" variant="success" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${dta[index1][6]}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${dta[index1][7]}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
                <div class="d-flex">
                  <b-icon style="padding-bottom:2px" icon="diamond-fill" variant="info" />
                  <div :style="`width:${dta[index1][8]}px`">
                    <b-progress value="100%" max="100" variant="info" />
                  </div>
                  <b-icon icon="triangle-fill" class="rotate-icon" variant="info" />
                </div>
              </div>
            </b-card>
          </div>
          <template v-if="item1.phases">
            <div v-for="(item2, index2) in item1.phases" :key="index2" style="height:51px">
              <b-card no-body class="mb-0" style="padding-top:5px;height:50px;padding-left:3px">
                <div :style="`width:${Math.random() * 200 + 200}px;margin-bottom:2px`">
                  <b-progress value="100%" max="100" variant="danger" />
                </div>
                <div :style="`width:${Math.random() * 200 + 250}px;margin-bottom:2px`">
                  <b-progress value="100%" max="100" variant="success" />
                </div>
                <div :style="`width:${Math.random() * 200 + 300}px;margin-bottom:2px`">
                  <b-progress value="100%" max="100" variant="info" />
                </div>
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
        <b-button variant="outline-primary">Cancel</b-button>
        <b-button variant="primary">Update</b-button>
      </template>
    </b-modal>
  </div>
  <div style="width:100%" v-else-if="reportingState === 'cost'">
    <ReportingCostVue :data="itemsForDemand" :fields="fieldForDemand" />
  </div>
</template>

<script>
import {
  BButton,
  BProgress,
  BCard,
  // BListGroup,
  // BListGroupItem,
  BModal,
} from 'bootstrap-vue'
import moment from 'moment'
import ReportingCostVue from './ReportingCost.vue'
import CustomProgramBar from './CustomProgramBar.vue'
// import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
// import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BButton,
    BProgress,
    BCard,
    // AppCollapse,
    // AppCollapseItem,
    // BListGroup,
    // BListGroupItem,
    BModal,
    ReportingCostVue,
    CustomProgramBar
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
    }
  },
  data() {
    return {
      reportingDates: [],
      value1: 30,
      value2: 40,
      value3: 80,
      openedCollapse: 0,
      itemsForDemand: [
        {
          name: 'Consumer ROBOTS',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [
            {
              name: 'quadruped robot',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'handling robot',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'power & programming station',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
          ],
        },
        {
          name: 'MILITARY ROBOTS',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [
            {
              name: 'hardened quadruped robot',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'microrobot observation NBC',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
          ],
        },
      ],
      fieldForDemand: ['BUDGET demand', 'BUDGET engaged ', 'Real Estimated'],
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
