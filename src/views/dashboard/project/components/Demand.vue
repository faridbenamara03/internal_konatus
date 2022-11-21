<template>
  <div class="project-demand-view">
    <div v-if="tabState === 'team'">
      <div v-for="team in teamData" :key="team.id" class="project-team no-border">
        <div class="d-flex justify-content-between align-items-center">
          <p class="text-capitalize m-0 team-name--text">
            {{ team.title }}
          </p>
          <b-button variant="flat-primary" @click="() => handleCheckAll(team)">
            Select All
          </b-button>
        </div>
        <app-collapse class="my-2">
          <app-collapse-item v-for="(phase, index) in team.phases" :key="index" :title="`Phase ${phase.constructor.name === 'Object' ? phase.phaseV : phase[0].phaseV}
          (${phase.constructor.name === 'Object' ? phase.tasks.length : phase[0].tasks.length} element)`"
            class="collapse-card mb-0" is-visible>
            <div v-if="phase.constructor.name === 'Object'">
              <div class="phase-box mb-1">
                <div class="bar" :style="{ 'background': team.color }" />
                <div class="phase-box--content">
                  <div class="d-flex">
                    <div style="width:calc(100% - 20px);cursor:pointer"
                      @click="() => handleActivityDetails(phase, team)">
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
              <div v-for="(phaseItm, jndex) in phase" :key="jndex" class="phase-box mb-1">
                <div class="bar" :style="{ 'background': team.color }" />
                <div class="phase-box--content">
                  <div class="d-flex">
                    <div style="width:calc(100% - 20px);cursor:pointer"
                      @click="() => handleActivityDetails(phaseItm, team)">
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
        <b-button v-if="!teamData.phases" variant="flat-secondary" class="mt-1">
          <feather-icon icon="PlusIcon" />
          <span>Insert New Work Element</span>
        </b-button>
      </div>
    </div>
    <div v-if="tabState === 'phase'" style="padding: 40px 15px">
      <div v-for="(phase, index) in phaseData" :key="index">
        <div class="background-theme-grey p-1 w-100 portf-uppercase color-white portf-bold mb-1"
          style="border-top-left-radius: 7px;border-top-right-radius: 7px;cursor: pointer"
          @click="onPhaseTitleClick(openedPhase.indexOf(index), index)">
          <feather-icon :icon="openedPhase.indexOf(index) > -1 ? 'ChevronDownIcon' : 'ChevronRightIcon'" size="16"
            class="mr-1" />
          phase {{ index + 1 }}
        </div>
        <div class="d-flex" v-if="openedPhase.indexOf(index) > -1">
          <div v-for="(team, index1) in phase.teams" :key="index1" class="project-team no-border">
            <div class="d-flex justify-content-between align-items-center">
              <p class="text-capitalize m-0 team-name--text">
                {{ team.title }}<span class="color-theme-disabled" style="margin-left:5px">(16 hours)</span>
              </p>
              <b-button variant="flat-primary" @click="() => handleCheckAll(team)">
                Select All
              </b-button>
            </div>
            <app-collapse class="my-2">
              <app-collapse-item :title="`${team.activities.length} work element`" class="collapse-card mb-0" is-visible>
                <div class="phase-box mb-1" v-for="(activity, index) in team.activities" :key="index">
                  <div class="bar" :style="`background:${cardBarColorArr[index1]}`" />
                  <div class="phase-box--content">
                    <div class="d-flex">
                      <div style="width:calc(100% - 20px);cursor:pointer"
                        @click="() => handleActivityDetails(activity, team)">
                        <p class="title">
                          {{ activity.title }}
                        </p>
                      </div>
                      <div style="width:20px">
                        <b-form-checkbox v-model="activity.isSelected" />
                      </div>
                    </div>
                    <p class="muted">
                      {{ activity.activityId }}
                    </p>
                    <div class="d-flex">
                      <div class="d-flex w-50 align-items-center">
                        <feather-icon icon="BarChartIcon" />
                        <span>{{ activity.priority }}</span>
                      </div>
                      <div class="d-flex w-50 align-items-center">
                        <b-icon icon="door-closed" />
                        <span>{{ activity.gate }}</span>
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
          </div>
        </div>
      </div>
    </div>
    <activity-detail-modal :is-open="openActivityModal" :selectedActivityData="c_SelectedActivity"
      @hideModal="hideModal" :teamdata="teamarr" />
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
    teamData: {
      type: Array,
      default: () => [],
    },
    phaseData: {
      type: Array,
      default: () => [],
    },
    tabState: {
      type: String,
      default: () => "",
    },
  },
  data() {
    const openedPhase = this.phaseData.map((t, i) => i)
    return {
      selectedActivity: {},
      cardBarColorArr: [
        '#D68232', '#FFEA2C', '#d63232', '#28C76F', '#00CFE8', '#6610F2'
      ],
      openedPhase
    }
  },
  computed: {
    teamarr() {
      return this.teamData.map(team => team.title)
    },
    c_SelectedActivity() {
      return this.selectedActivity
    },
    openActivityModal() {
      return this.$store.state.globalState.activityDetailModalOpen
    },
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
    onPhaseTitleClick(exist, index) {
      if (exist > -1 && this.openedPhase.length > 1) {
        this.openedPhase.splice(exist, 1)
      } else {
        this.openedPhase.push(index)
      }
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio-control.scss";
@import "~@core/scss/base/components/variables-dark";

.color-theme-disabled {
  color: $theme-dark-table-active-bg;
}

.background-theme-grey {
  background-color: $theme-dark-table-active-bg;
}
</style>
