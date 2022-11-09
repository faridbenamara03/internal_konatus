<template>
  <div class="project-demand-view">
    <div v-for="team in data" :key="team.id" class="project-team no-border">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-capitalize m-0 team-name--text">
          {{ team.name }}
        </p>
        <b-button variant="flat-primary" @click="() => handleCheckAll(team)">
          Select All
        </b-button>
      </div>
      <app-collapse class="my-2">
        <app-collapse-item v-for="(phaseArr, index) in team.phases" :key="index" :title="'Phase ' + phaseArr[0].phaseV + ' (' + phaseArr.length + ' work element)'"
          class="collapse-card mb-0" is-visible>
          <div v-for="(phase, jndex) in phaseArr" :key="jndex" class="phase-box mb-1" >
            <div class="bar" :style="{'background': team.color}" />
            <div class="phase-box--content">
              <div class="d-flex">
                <div style="width:calc(100% - 20px);cursor:pointer" @click="() => handleActivityDetails(phase, team)">
                  <p class="title">
                    {{ phase.name }}
                  </p>
                </div>
                <div style="width:20px">
                  <b-form-checkbox v-model="phase.isSelected" />
                </div>
              </div>
              <p class="muted">
                {{ phase.activityId }}
              </p>
              <div class="d-flex">
                <div class="d-flex w-50 align-items-center">
                  <feather-icon icon="BarChartIcon" />
                  <span>{{ phase.priority }}</span>
                </div>
                <div class="d-flex w-50 align-items-center">
                  <b-icon icon="door-closed" />
                  <span>{{ phase.gate }}</span>
                </div>
              </div>
            </div>
          </div>
          <b-button variant="flat-secondary" class="phase-btn">
            <feather-icon icon="PlusIcon" />
            <span>New Elementary Activity</span>
          </b-button>
        </app-collapse-item>
      </app-collapse>
      <b-button v-if="!data.phases" variant="flat-secondary" class="mt-1">
        <feather-icon icon="PlusIcon" />
        <span>New Elementary Activity</span>
      </b-button>
    </div>
    <activity-detail-modal :is-open="openActivityModal" :data="selectedActivity" @hideModal="hideModal" :teamdata="teamarr" />
  </div>
</template>

<script>
import { BButton, BFormCheckbox } from 'bootstrap-vue'
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
    BFormCheckbox
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
  computed: {
    teamarr() {
      return this.data.map(team => team.name)
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    handleCheckAll(team) {
      this.$store.commit('teamState/TEAM_PHASE_SELECT_ALL', team)
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
