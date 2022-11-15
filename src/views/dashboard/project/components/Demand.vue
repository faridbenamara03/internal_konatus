<template>
  <div class="project-demand-view">
    <div v-for="team in data" :key="team.id" class="project-team no-border">
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-capitalize m-0 team-name--text">
          {{ team.title }}
        </p>
        <b-button variant="flat-primary" @click="() => handleCheckAll(team)">
          Select All
        </b-button>
      </div>
      <app-collapse class="my-2">
        <app-collapse-item v-for="(phase, index) in team.phases" :key="index"
          :title="`Phase ${phase.constructor.name === 'Object' ? phase.phaseV : phase[0].phaseV}
          (${phase.constructor.name === 'Object' ?  phase.tasks.length : phase[0].tasks.length} element)`"
          class="collapse-card mb-0" is-visible>
          <div v-if="phase.constructor.name === 'Object'">
            <div class="phase-box mb-1" >
              <div class="bar" :style="{'background': team.color}" />
              <div class="phase-box--content">
                <div class="d-flex">
                  <div style="width:calc(100% - 20px);cursor:pointer" @click="() => handleActivityDetails(phase, team)">
                    <p class="title">
                      {{ phase.title }}
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
          </div>
          <div v-else>
            <div  v-for="(phaseItm, jndex) in phase" :key="jndex" class="phase-box mb-1" >
              <div class="bar" :style="{'background': team.color}" />
              <div class="phase-box--content">
                <div class="d-flex">
                  <div style="width:calc(100% - 20px);cursor:pointer" @click="() => handleActivityDetails(phaseItm, team)">
                    <p class="title">
                      {{ phaseItm.title }}
                    </p>
                  </div>
                  <div style="width:20px">
                    <b-form-checkbox v-model="phaseItm.isSelected" />
                  </div>
                </div>
                <p class="muted">
                  {{ phaseItm.activityId }}
                </p>
                <div class="d-flex">
                  <div class="d-flex w-50 align-items-center">
                    <feather-icon icon="BarChartIcon" />
                    <span>{{ phaseItm.priority }}</span>
                  </div>
                  <div class="d-flex w-50 align-items-center">
                    <b-icon icon="door-closed" />
                    <span>{{ phaseItm.gate }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b-button variant="flat-secondary" class="phase-btn">
            <feather-icon icon="PlusIcon" />
            <span>Insert New Work Element</span>
          </b-button>
        </app-collapse-item>
      </app-collapse>
      <b-button v-if="!data.phases" variant="flat-secondary" class="mt-1">
        <feather-icon icon="PlusIcon" />
        <span>Insert New Work Element</span>
      </b-button>
    </div>
    <activity-detail-modal :is-open="openActivityModal" :selectedActivityData="c_SelectedActivity" @hideModal="hideModal" :teamdata="teamarr" />
  </div>
</template>

<script>
import { BButton, BFormCheckbox } from 'bootstrap-vue'
import { isEmpty } from "@/views/utils"
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
      selectedActivity: {},
    }
  },
  computed: {
    teamarr() {
      return this.data.map(team => team.title)
    },
    c_SelectedActivity() {
      return this.selectedActivity
    },
    openActivityModal() {
      return this.$store.state.globalState.activityDetailModalOpen
    }
  },
  methods: {
    handleCheckAll(team) {
      this.$store.commit('globalState/TEAM_PHASE_SELECT_ALL', team)
    },
    handleActivityDetails(phase, team) {
      this.selectedActivity = { team, phase }
      this.$store.commit('globalState/OPEN_ACTIVITY_DETAIL_MODAL')
    },
    hideModal() {
      this.$store.commit('globalState/HIDE_ACTIVITY_DETAIL_MODAL')
    },
    isUN(data) {
      return isEmpty(data)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
