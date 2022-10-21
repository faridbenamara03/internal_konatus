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
        <b-button variant="flat-primary" @click="() => handleSelectAll(phase.phaseV)">
          Select All
        </b-button>
      </div>
      <div class="collapse-card">
        <div
          v-for="(task, idx) in phase.tasks"
          :key="idx"
          class="phase-box my-2"
        >
          <div
            class="bar"
            :style="{ 'background': data.color}"
          />
          <div class="phase-box--content">
            <div class="d-flex">
              <div style="width:calc(100% - 20px);cursor:pointer;" >
                <p class="title">
                  Task {{ task.taskId }}
                </p>
              </div>
              <div style="width:20px;">
                <b-form-checkbox v-model="task.isSelected" />
              </div>
            </div>
            <p class="muted">
              {{ task.taskId }}
            </p>
            <div class="d-flex">
              <div class="d-flex w-50 align-items-center">
                <feather-icon
                  icon="BarChartIcon"
                />
                <span>{{ task.priority }}</span>
              </div>
              <div class="d-flex w-50 align-items-center">
                <b-icon icon="door-closed" />
                <span>{{ task.gate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-button
        variant="flat-secondary"
        class="w-100"
        v-b-modal.modal-add-new-task
        @click="onInsertClick(phase.phaseV)"
      >
        <feather-icon icon="PlusIcon" />
        <span>Insert new task</span>
      </b-button>
    </div>
    <insert-new-task-modal :phaseV="phaseVToInsert" />
  </div>
</template>

<script>
import { BButton, BFormCheckbox } from 'bootstrap-vue'
import moment from 'moment'
import InsertNewTaskModal from '../modals/insertNewTaskModal.vue'

export default {
  components: {
    BButton,
    BFormCheckbox,
    InsertNewTaskModal
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
      phaseVToInsert: null,
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
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
    onInsertClick(phaseV) {
      this.phaseVToInsert = phaseV
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
