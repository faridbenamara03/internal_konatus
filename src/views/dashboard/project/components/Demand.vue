<template>
  <div class="project-demand-view w-100">
    <div
      v-if="tabState === 'job'"
      style="padding: 40px 15px"
    >
      <div v-if="teamData.length > 0">
        <div
          v-for="(team, index) in c_TeamData"
          :key="index"
        >
          <div
            class="background-theme-grey p-1 w-100 portf-uppercase color-white portf-bold mb-1"
            style="border-top-left-radius: 7px;border-top-right-radius: 7px;cursor: pointer"
            @click="onPhaseTitleClick(openedPhase.indexOf(index), index)"
          >
            <feather-icon
              :icon="openedPhase.indexOf(index) > -1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
              size="16"
              class="mr-1"
            />
            {{ team.title }}
          </div>
          <div
            v-if="openedPhase.indexOf(index) > -1"
            class="d-flex"
          >
            <div
              v-for="(item1, index1) in team.phases"
              :key="index1"
              class="project-team no-border"
            >
              <CustomCollapse
                :team="item1"
                :index="index1"
                :index0="index"
                state="team"
                :teamttle="team.title"
                @openDetailActivity="(activity, team) => handleActivityDetails(activity, team)"
                @selectActivity="(e, activityId) => handleSelectActivity(e, activityId)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="tabState === 'phase'"
      style="padding: 40px 15px"
    >
      <div v-if="c_PhaseData.length > 0">
        <div
          v-for="(phase, index) in c_PhaseData"
          :key="index"
        >
          <div
            class="background-theme-grey p-1 w-100 portf-uppercase color-white portf-bold mb-1"
            style="border-top-left-radius: 7px;border-top-right-radius: 7px;cursor: pointer"
            @click="onPhaseTitleClick(openedPhase.indexOf(index), index)"
          >
            <feather-icon
              :icon="openedPhase.indexOf(index) > -1 ? 'ChevronDownIcon' : 'ChevronRightIcon'"
              size="16"
              class="mr-1"
            />
            phase {{ phase.id }}
          </div>
          <div
            v-if="openedPhase.indexOf(index) > -1"
            class="d-flex"
          >
            <div
              v-for="(item1, index1) in phase.teams"
              :key="index1"
              class="project-team no-border"
            >
              <CustomCollapse
                :team="item1"
                :index="index1"
                :index0="index"
                :teamttle="item1.title"
                state="phase"
                @openDetailActivity="(activity, team) => handleActivityDetails(activity, team)"
                @selectActivity="(e, activityId) => handleSelectActivity(e, activityId)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <activity-detail-modal
      v-if="c_SelectedActivity !== undefined"
      :is-open="openActivityModal"
      :selected-activity-data="c_SelectedActivity"
      :teamdata="teamarr"
      @hideModal="hideModal"
    />
  </div>
</template>

<script>
// import {
//   BButton
// } from 'bootstrap-vue'
import { isEmpty } from "@/views/utils"
import ActivityDetailModal from '../modals/ActivityDetailModal.vue'
import CustomCollapse from '../../globalComponent/CustomCollapse.vue'

export default {
  components: {
    ActivityDetailModal,
    CustomCollapse,
    // BButton
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
      openedPhase,
      checkedActivity: []
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
    c_TeamData() {
      const allPhases = this.$store.state.globalState.allPhaseData
      const allJobs = this.$store.state.globalState.allJobTitleData
      let resultJobData = []
      allJobs.forEach(job => {
        let tempJob = this.teamData.find(x => x.title === job.title)
        if (tempJob === undefined) {
          tempJob = {
            id: job.id,
            title: job.title,
            type: 'team',
            phases: []
          }
          resultJobData.push(tempJob)
        } else {
          resultJobData.push(tempJob)
        }
      })
      resultJobData = resultJobData.map(t => {
        const currentPhaseData = t.phases
        const tempPhases = []
        allPhases.forEach(p => {
          let tempPhase = currentPhaseData.find(x => x.id === p.id)
          if (tempPhase === undefined) {
            tempPhase = {
              id: p.id,
              title: `Phase${p.id}`,
              activities: []
            }
            tempPhases.push(tempPhase)
          } else {
            tempPhases.push(tempPhase)
          }
        })
        const tempTeam = { ...t }
        tempTeam.phases = tempPhases
        return tempTeam
      })
      return resultJobData
    },
    c_PhaseData() {
      const currentPhaseData = this.phaseData
      const allPhases = this.$store.state.globalState.allPhaseData
      const allJobs = this.$store.state.globalState.allJobTitleData
      const resultPhases = []
      allPhases.forEach(p => {
        let tempPhase = currentPhaseData.find(x => x.id === p.id)
        if (tempPhase === undefined) {
          tempPhase = {
            id: p.id,
            title: `Phase${p.id}`,
            teams: []
          }
          allJobs.forEach(job => {
            let tempJob = tempPhase.teams.find(x => x.title === job.title)
            if (tempJob === undefined) {
              tempJob = {
                id: job.id,
                title: job.title,
                phase: `Phase${p.id}`,
                type: 'team',
                activities: []
              }
              tempPhase.teams.push(tempJob)
            }
          })
        } else {
          allJobs.forEach(job => {
            let tempJob = tempPhase.teams.find(x => x.title === job.title)
            if (tempJob === undefined) {
              tempJob = {
                id: job.id,
                title: job.title,
                phase: `Phase${p.id}`,
                type: 'team',
                activities: []
              }
              tempPhase.teams.push(tempJob)
            }
          })
        }
        resultPhases.push(tempPhase)
      })
      return resultPhases
    }
  },
  methods: {
    handleSelectActivity(e, activityId) {
      if (e) {
        this.checkedActivity.push(activityId)
      } else {
        this.checkedActivity.splice(this.checkedActivity.indexOf(activityId), 1)
      }
      this.$store.commit('globalState/WORK_ELEMENT_CHECK', this.checkedActivity)
    },
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
