<template>
  <div class="report">
    <div class="reporting-side">
      <div>
        <div class="report-block--head">
          <p class="m-0 text-uppercase">
            {{ item.title }}
          </p>
        </div>
        <div v-for="(item1, index1) in item.children" :key="index1" class="report-block--head">
          <feather-icon
            icon="ChevronRightIcon"
            size="16"
            class="mr-1"
          />
          <p class="m-0 text-uppercase">
            {{ item1.title }}
          </p>
        </div>
      </div>
      <app-collapse accordion>
        <app-collapse-item title="Accordion Item 1">
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
        </app-collapse-item>
      </app-collapse>
    </div>
    <div class="reporting-content">
      <div class="reporting-content--header">
        <b-button
          v-b-modal.modal-update
          variant="flat-primary"
        >
          <feather-icon icon="RotateCwIcon" />
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
        <div class="progress-wrapper w-100">
          <b-card no-body>
            <b-card-text class="mb-0">
              Reticulating splines… {{ value1+'%' }}
            </b-card-text>
            <b-progress
              v-model="value1"
              max="100"
            />
            <b-progress
              v-model="value2"
              max="100"
              variant="success"
            />
            <b-progress
              v-model="value3"
              max="100"
              variant="secondary"
            />
          </b-card>
        </div>
        <div class="progress-wrapper w-100">
          <b-card no-body>
            <b-card-text class="mb-0">
              Reticulating splines… {{ value1+'%' }}
            </b-card-text>
            <b-progress
              v-model="value1"
              max="100"
            />
            <b-progress
              v-model="value2"
              max="100"
              variant="success"
            />
            <b-progress
              v-model="value3"
              max="100"
              variant="secondary"
            />
          </b-card>
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
        <h5 class="modal-title">
          Update
        </h5>
        <div class="modal-actions">
          <b-button variant="outline-primary">
            <feather-icon
              icon="XIcon"
              size="18"
            />
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
</template>

<script>
import {
  BButton,
  BProgress,
  BCard,
  BCardText,
  BListGroup,
  BListGroupItem,
  BModal,
} from 'bootstrap-vue'
import moment from 'moment'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    BButton,
    BProgress,
    BCard,
    BCardText,
    AppCollapse,
    AppCollapseItem,
    BListGroup,
    BListGroupItem,
    BModal,
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
      item: this.$store.state.globalState.globalData[0]
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
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
</style>
