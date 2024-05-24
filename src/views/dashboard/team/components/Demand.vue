<template>
  <div class="project-demand-view w-100">
    <div v-if="c_PhaseData !== undefined && c_PhaseData.length > 0">
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
            v-for="(item1, index1) in phase.projects"
            :key="index1"
            class="project-team no-border"
          >
            <CustomCollapse
              :team="item1"
              :index="index1"
              :index0="index"
              state="job"
              :teamttle="item1.job"
              @openDetailActivity="(activity, team) => handleActivityDetails(activity, team)"
              @selectActivity="(e, activityId) => handleSelectActivity(e, activityId)"
            />
          </div>
        </div>
      </div>
    </div>
    <insert-new-task-modal :phase-id="phaseIdToInsert" />
    <activity-detail-modal
      v-if="c_SelectedActivity !== undefined"
      :is-open="openActivityModal"
      :selected-activity-data="c_SelectedActivity"
      @hideModal="hideModal"
    />
  </div>
</template>

<script>
// import {
//   BButton, BFormCheckbox, BTooltip
// } from 'bootstrap-vue'
import moment from 'moment'
import { isEmpty } from '@/views/utils'
import InsertNewTaskModal from '../modals/insertNewTaskModal.vue'
import ActivityDetailModal from '../modals/ActivityDetailModal.vue'
import CustomCollapse from '../../globalComponent/CustomCollapse.vue'

export default {
  components: {
    // BButton,
    // BFormCheckbox,
    InsertNewTaskModal,
    ActivityDetailModal,
    // BTooltip,
    CustomCollapse
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    teamData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    const openedPhase = this.data.phases.map((t, i) => i)
    return {
      selectedActivity: {},
      phaseIdToInsert: null,
      openDetailModal: false,
      taskDetail: {},
      openedPhase,
      checkedActivity: []
    }
  },
  computed: {
    openActivityModal() {
      return this.$store.state.teamState.activityDetailModalOpen
    },
    c_SelectedActivity() {
      return this.selectedActivity
    },
    c_PhaseData() {
      const currentData = this.data
      const allPhases = this.$store.state.globalState.allPhaseData
      const allProjects = this.$store.state.globalState.allProjData
      const resultPhases = []
      allPhases.forEach(p => {
        let tempPhase = currentData.phases.find(x => x.id === p.id)
        if (tempPhase === undefined) {
          tempPhase = {
            id: p.id,
            title: `Phase${p.id}`,
            projects: []
          }
          allProjects.forEach(project => {
            const tempProject = tempPhase.projects.find(x => x.id === project.id)
            if (tempProject !== undefined) tempPhase.projects.push(tempProject)
          })
        }
        resultPhases.push(tempPhase)
      })
      console.log('result', resultPhases)
      return resultPhases
    }
  },
  methods: {
    isUN(data) {
      return isEmpty(data)
    },
    handleActivityDetails(phase, team) {
      this.selectedActivity = { team, phase }
      this.$store.commit('teamState/OPEN_ACTIVITY_DETAIL_MODAL')
    },
    hideModal() {
      this.$store.commit('teamState/HIDE_ACTIVITY_DETAIL_MODAL')
    },
    getToday() {
      return `Today ${moment().format('MM/DD/YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    handleSelectActivity(e, activityId) {
      if (e) {
        this.checkedActivity.push(activityId)
      } else {
        this.checkedActivity.splice(this.checkedActivity.indexOf(activityId), 1)
      }
      this.$store.commit('globalState/WORK_ELEMENT_CHECK', this.checkedActivity)
    },
    handleSelectAll(dt) {
      this.$store.commit('teamState/SELECT_ALL_PHASE_ACTS', dt)
    },
    onInsertClick(phaseId) {
      this.phaseIdToInsert = phaseId
    },
    hideDetailModal() {
      this.$refs['t-d-modal'].hide()
    },
    taskDetailMethod(activity) {
      this.taskDetail = { phase: activity }
      this.$store.commit('globalState/OPEN_ACTIVITY_DETAIL_MODAL')
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
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
