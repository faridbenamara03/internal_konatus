<template>
  <div class="project-demand-view">
    <div
      v-for="phase in data.phases"
      :key="phase.phaseV"
      class="project-team"
    >
      <div class="d-flex justify-content-between align-items-center">
        <p class="text-capitalize m-0 team-name--text">
          {{ phase.id }}
          <span style="color:#303952;margin-left:4px">
            ({{ phase.time ? phase.time : 0 }} hours)
          </span>
        </p>
        <b-button
          variant="flat-primary"
          @click="() => handleSelectAll(phase.id)"
        >
          Select All
        </b-button>
      </div>
      <div class="collapse-card">
        <div
          v-for="(activity, idx) in phase.elements"
          :key="idx"
          class="phase-box my-2 position-relative"
        >
          <div
            v-if="activity.quoted"
            :id="`tooltip-target-${idx}`"
            style="
              box-sizing: border-box;
              border-top: solid 10px #7367f0;
              border-right: solid 10px #7367f0;
              border-top-right-radius: 5px;
              border-left: solid 10px transparent;
              border-bottom: solid 10px transparent;
              position:absolute;
              top:0;
              right:0;
            "
          />
          <b-tooltip
            :target="`tooltip-target-${idx}`"
            triggers="hover"
          >
            Quote requested
          </b-tooltip>
          <div
            class="bar"
            :style="{ 'background': data.color}"
          />
          <div class="phase-box--content">
            <div class="d-flex">
              <div
                v-b-modal.task-detail-modal
                style="width:calc(100% - 20px);cursor:pointer;"
                @click="taskDetailMethod(activity, phase)"
              >
                <p
                  v-if="isUN(activity.title)"
                  class="title"
                >
                  {{ activity.activityId }}
                </p>
                <p
                  v-else
                  class="title"
                >
                  {{ activity.title }}
                </p>
              </div>
              <div style="width:20px;">
                <b-form-checkbox v-model="activity.isSelected" />
              </div>
            </div>
            <p class="muted">
              {{ activity.activityId }}
            </p>
            <div class="d-flex">
              <div class="d-flex w-50 align-items-center">
                <feather-icon
                  icon="BarChartIcon"
                />
                <span>{{ activity.priority }}</span>
              </div>
              <div class="d-flex w-50 align-items-center">
                <b-icon icon="door-closed" />
                <span>{{ activity.gate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-button
        v-b-modal.modal-add-new-task
        variant="flat-secondary"
        class="w-100"
        @click="onInsertClick(phase.id)"
      >
        <feather-icon icon="PlusIcon" />
        <span>Insert New Work Element</span>
      </b-button>
    </div>
    <insert-new-task-modal :phase-id="phaseIdToInsert" />
    <activity-detail-modal
      :is-open="openActivityModal"
      :selected-activity-data="taskDetail"
      :teamdata="teamarr"
      @hideModal="hideModal"
    />
  </div>
</template>

<script>
import {
  BButton, BFormCheckbox, BTooltip
} from 'bootstrap-vue'
import moment from 'moment'
import { isEmpty } from '@/views/utils'
import InsertNewTaskModal from '../modals/insertNewTaskModal.vue'
import ActivityDetailModal from '../../project/modals/ActivityDetailModal.vue'

export default {
  components: {
    BButton,
    BFormCheckbox,
    InsertNewTaskModal,
    ActivityDetailModal,
    BTooltip
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
    return {
      selectedActivity: {},
      phaseIdToInsert: null,
      openDetailModal: false,
      taskDetail: {}
    }
  },
  computed: {
    openActivityModal() {
      return this.$store.state.globalState.activityDetailModalOpen
    },
    teamarr() {
      return this.teamData.map(team => team.title)
    },
  },
  methods: {
    isUN(data) {
      return isEmpty(data)
    },
    getToday() {
      return `Today ${moment().format('MM/DD/YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
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
    hideModal() {
      this.$store.commit('globalState/HIDE_ACTIVITY_DETAIL_MODAL')
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
