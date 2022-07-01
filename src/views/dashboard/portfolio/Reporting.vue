<template>
  <div class="report">
    <div class="reporting-side">
      <div class="report-block--head">
        <p class="m-0 text-uppercase">
          Boston Dynamics
        </p>
      </div>
      <div class="report-block--head">
        <feather-icon
          icon="ChevronRightIcon"
          size="16"
          class="mr-1"
        />
        <p class="m-0 text-uppercase">
          Consumer robots
        </p>
      </div>
      <div class="report-block--head">
        <feather-icon
          icon="ChevronRightIcon"
          size="16"
          class="mr-1"
        />
        <p class="m-0 text-uppercase">
          military robots
        </p>
      </div>
    </div>
    <div class="reporting-content">
      <div class="reporting-content--header">
        <b-button variant="flat-primary">
          <feather-icon
            icon="RotateCwIcon"
          />
          Update
        </b-button>
        <div class="reporting-content-header--badge">
          <b-button
            variant="flat-dark"
            class="d-inline-flex align-items-center"
          >
            <span class="badge" />
            <span>Phase</span>
          </b-button>
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
            <b-icon
              icon="circle-fill"
            />
            Demand
          </b-button>
          <b-button
            variant="flat-dark"
            class="badge-engage"
          >
            <b-icon
              icon="circle-fill"
            />
            Engaged
          </b-button>
          <b-button
            variant="flat-dark"
            class="badge-estimate"
          >
            <b-icon
              icon="circle-fill"
            />
            Real Estimated
          </b-button>
        </div>
      </div>
      <div class="reporting-content--body">
        <!-- <div class="timeline-list">
          <div
            v-for="(date, index) in reportingDates"
            :key="index"
            style="margin-right: 10px; padding: 0 5px;"
          >
            <p
              v-if="index > 0 ? getMonth(date) != getMonth(reportingDates[index-1]) : true"
              class="text-uppercase m-0"
            >
              {{ getMonth(date) }}
            </p>
          </div>
        </div> -->
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
      </div>
    </div>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import moment from 'moment'

export default {
  components: {
    BButton,
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
    }
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
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
