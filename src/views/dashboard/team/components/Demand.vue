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
      <b-button
        v-if="!data.phases"
        variant="flat-secondary"
        class="mt-1"
      >
        <feather-icon icon="PlusIcon" />
        <span>New Elementary Activity</span>
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
    handleActivityDetails(phase, team) {
      this.selectedActivity = { team, phase }
      this.openActivityModal = true
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
