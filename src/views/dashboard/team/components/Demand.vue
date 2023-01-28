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
        <b-button variant="flat-primary" @click="() => handleSelectAll(phase.id)">
          Select All
        </b-button>
      </div>
      <div class="collapse-card">
        <div
          v-for="(activity, idx) in phase.elements"
          :key="idx"
          class="phase-box my-2"
        >
          <div
            class="bar"
            :style="{ 'background': data.color}"
          />
          <div class="phase-box--content">
            <div class="d-flex">
              <div style="width:calc(100% - 20px);cursor:pointer;" v-b-modal.task-detail-modal @click="taskDetailMethod(activity)">
                <p v-if="isUN(activity.title)" class="title">
                  {{ activity.activityId }}
                </p>
                <p v-else class="title">
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
        variant="flat-secondary"
        class="w-100"
        v-b-modal.modal-add-new-task
        @click="onInsertClick(phase.id)"
      >
        <feather-icon icon="PlusIcon" />
        <span>Insert new work element</span>
      </b-button>
    </div>
    <insert-new-task-modal :phaseId="phaseIdToInsert" />
    <b-modal
      :visible="c_openDetailModal"
      ref="t-d-modal"
      id="task-detail-modal"
      title="Work Element Detail"
      centered
      no-fade
    >
      <template #modal-header>
        <h5 class="modal-title">Work Element Detail</h5>
      </template>
      <div class="d-flex mb-1">
        <div style="width:150px;font-weight:bold;padding-top:9px">Work Element ID</div>
        <div>
          <b-form-input
            v-model="taskDetail.activityId"
            style="width:300px"
          />
        </div>
      </div>
      <div class="d-flex mb-1">
        <div style="width:150px;font-weight:bold;padding-top:9px">PRIORITY</div>
        <div >
          <v-select v-model="taskDetail.priority" :options="['Highest', 'High', 'Low', 'Lowest']" style="width:300px" outlined />
        </div>
      </div>
      <div class="d-flex mb-1">
        <div style="width:150px;font-weight:bold;padding-top:9px">GATE</div>
        <div>
          <v-select v-model="taskDetail.gate" :options="['1', '2', '3', '4', '5']" style="width:300px" outlined />
        </div>
      </div>
      <template #modal-footer>
        <b-button variant="outline-primary" @click="hideDetailModal">Cancel</b-button>
        <b-button variant="primary" @click="hideDetailModal">Update</b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton, BFormCheckbox, BModal, BFormInput
} from 'bootstrap-vue'
import moment from 'moment'
import vSelect from 'vue-select'
import { isEmpty } from '@/views/utils'
import InsertNewTaskModal from '../modals/insertNewTaskModal.vue'

export default {
  components: {
    BModal,
    BButton,
    BFormCheckbox,
    InsertNewTaskModal,
    vSelect,
    BFormInput
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
      phaseIdToInsert: null,
      openDetailModal: false,
      taskDetail: {}
    }
  },
  computed: {
    c_openDetailModal() {
      return this.openDetailModal
    }
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
    hideModal() {
      this.openActivityModal = false
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
    taskDetailMethod(task) {
      this.taskDetail = task
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
