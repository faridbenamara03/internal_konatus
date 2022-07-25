<template>
  <div class="project-demand-view">
    <div
      v-for="team in data"
      :key="team.id"
      class="project-team no-border"
    >
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-capitalize m-0 team-name--text">
          {{ team.name }}
        </p>
        <b-button variant="flat-primary">
          Select All
        </b-button>
      </div>
      <app-collapse class="my-2">
        <app-collapse-item
          v-for="phase in team.phases"
          :key="phase.phaseV"
          :title="'Phase ' + phase.phaseV"
          class="collapse-card"
          is-visible
        >
          <div
            class="phase-box"
            @click="() => handleActivityDetails(phase, team)"
          >
            <div
              class="bar"
              :style="{ 'background': team.color}"
            />
            <div class="phase-box--content">
              <p class="title">
                {{ phase.name }}
              </p>
              <p class="muted">
                {{ phase.activityId }}
              </p>
              <div class="d-flex">
                <div class="d-flex w-50 align-items-center">
                  <feather-icon
                    icon="BarChartIcon"
                  />
                  <span>{{ phase.priority }}</span>
                </div>
                <div class="d-flex w-50 align-items-center">
                  <b-icon icon="door-closed" />
                  <span>{{ phase.gate }}</span>
                </div>
              </div>
            </div>
          </div>
          <b-button
            variant="flat-secondary"
            class="mt-1 phase-btn"
          >
            <feather-icon icon="PlusIcon" />
            <span>New Elementary Activity</span>
          </b-button>
        </app-collapse-item>
      </app-collapse>
      <b-button
        v-if="!data.phases"
        variant="flat-secondary"
        class="mt-1"
      >
        <feather-icon icon="PlusIcon" />
        <span>New Elementary Activity</span>
      </b-button>
    </div>
    <activity-detail-modal
      :is-open="openActivityModal"
      :data="selectedActivity"
      @hideModal="hideModal"
    />
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import moment from 'moment'
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'
import ActivityDetailModal from '../modals/ActivityDetailModal.vue'

export default {
  components: {
    AppCollapse,
    AppCollapseItem,
    BButton,
    ActivityDetailModal,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
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
