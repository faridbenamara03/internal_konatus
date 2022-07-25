<template>
  <div class="project-demand-view">
    <div
      v-for="phase in data.phases"
      :key="phase.phaseV"
      class="project-team"
    >
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-capitalize m-0 team-name--text">
          Phase {{ phase.phaseV }}
        </p>
        <b-button variant="flat-primary">
          Select All
        </b-button>
      </div>
      <div class="collapse-card">
        <div
          v-for="(task, idx) in phase.tasks"
          :key="idx"
          class="phase-box my-2"
        >
          <div
            class="bar"
            :style="{ 'background': data.color}"
          />
          <div class="phase-box--content">
            <p class="title">
              Task {{ task.taskId }}
            </p>
            <p class="muted">
              {{ task.taskId }}
            </p>
            <div class="d-flex">
              <div class="d-flex w-50 align-items-center">
                <feather-icon
                  icon="BarChartIcon"
                />
                <span>{{ task.priority }}</span>
              </div>
              <div class="d-flex w-50 align-items-center">
                <b-icon icon="door-closed" />
                <span>{{ task.gate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-button
        variant="flat-secondary"
        class="w-100"
      >
        <feather-icon icon="PlusIcon" />
        <span>Insert new task</span>
      </b-button>
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
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      openActivityModal: false,
      selectedActivity: {},
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    hideModal() {
      this.openActivityModal = false
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
