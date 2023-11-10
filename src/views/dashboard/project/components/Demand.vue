<template>
  <div class="project-demand-view">
    <div
      v-if="tabState === 'team'"
      style="padding: 40px 15px"
    >
      <div
        v-for="(team, index) in teamData"
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
    <div
      v-else-if="tabState === 'phase'"
      style="padding: 40px 15px"
    >
      <div
        v-for="(phase, index) in phaseData"
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
          phase {{ index + 1 }}
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
              state="phase"
              @openDetailActivity="(activity, team) => handleActivityDetails(activity, team)"
              @selectActivity="(e, activityId) => handleSelectActivity(e, activityId)"
            />
          </div>
        </div>
      </div>
    </div>
    <activity-detail-modal
      :is-open="openActivityModal"
      :selected-activity-data="c_SelectedActivity"
      :teamdata="teamarr"
      @hideModal="hideModal"
    />
  </div>
</template>

<script>
import { isEmpty } from "@/views/utils"
import ActivityDetailModal from '../modals/ActivityDetailModal.vue'
import CustomCollapse from '../../globalComponent/CustomCollapse.vue'

export default {
  components: {
    ActivityDetailModal,
    CustomCollapse
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
  },
  methods: {
    handleSelectActivity(e, activityId) {
      if (e) {
        this.checkedActivity.push(activityId)
      } else {
        this.checkedActivity.splice(this.checkedActivity.indexOf(activityId), 1)
      }
      this.$store.commit('globalState/WOEK_ELEMENT_CHECK', this.checkedActivity)
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
