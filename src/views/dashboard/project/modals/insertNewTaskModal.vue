<template>
  <b-modal
    id="modal-add-new-task-program"
    centered
    hide-backdrop
    content-class="shadow"
    hide-header
    size="sm"
    @ok="handleOk"
  >
    <div class="mb-2">
      <b>Insert Work Element</b>
    </div>
    <b-dropdown
      id="checkbox-dropdown"
      class="mb-1"
      text="Select Options"
      variant="outline-secondary"
      toggle-class="form-control"
      style="width: 100%;"
    >
      <template #button-content>
        <span>{{ selectedOptionsString }}</span>
      </template>
      <b-dropdown-item
        v-for="(option, index) in options"
        :key="option.value"
      >
        <b-form-checkbox
          :id="'checkbox_' + index"
          v-model="option.selected"
          :value="option.value"
          class="m-0"
        >
          {{ option.label }}
        </b-form-checkbox>
      </b-dropdown-item>
    </b-dropdown>
    <!-- <b-form-select id="input-taskId" v-model="taskId" class="mb-1" placeholder="WorK Element Id" :options="['JIRA', 'SAP']" /> -->
    <!-- <b-form-input id="input-taskId" v-model="taskId" placeholder="WorK Element Id" class="mb-1" /> -->
    <label>Work Element Name:</label>
    <b-form-input
      id="input-name"
      v-model="name"
      placeholder="WorK Element Name"
      class="mb-1"
    />
    <label>Job:</label>
    <b-form-select
      id="select-job"
      v-model="selectedJob"
      class="mb-1"
      placeholder="Select Job"
      :options="allJobTitleData"
    />
    <label>Phase:</label>
    <b-form-select
      id="select-phase"
      v-model="selectedPhase"
      class="mb-1"
      placeholder="Select Phase"
      :options="allPhaseTitleData"
    />
    <label>Priority:</label>
    <b-form-select
      v-model="selectedPriority"
      :options="priorityOptions"
    />
  </b-modal>
</template>

<style scoped>
.containerSelf {
  display: flex;
  flex-direction: row;
}

.sub-main {
  flex: 1;
  text-align: center;
}
</style>

<script>
import {
  BModal, VBModal, BFormInput, BFormSelect, BFormCheckbox, BDropdown
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { isEmpty } from '../../../utils'

export default {
  components: {
    BModal,
    BFormInput,
    BFormSelect,
    BFormCheckbox,
    BDropdown
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  props: {
    phaseV: {
      type: Number
    },
  },
  data() {
    return {
      taskId: 'JIRA',
      gate: '',
      name: '',
      selectedOptions: '',
      allPhaseTitleData: this.$store.state.globalState.allPhaseTitleData,
      priorityOptions: this.$store.state.globalState.priorityOptions,
      selectedJob: this.$store.state.globalState.parentTeamTitle?.job,
      selectedPhase: this.$store.state.globalState.parentTeamTitle?.phase,
      selectedPriority: '',
      options: [
        { label: 'Jira', value: 'Jira' },
        { label: 'SAP', value: 'SAP' },
      ]
    }
  },
  computed: {
    selectedOptionsString() {
      const selectedOptions = this.options
        .filter(option => option.selected)
        .map(option => option.value)
        .join('+')
      return selectedOptions
    },
    allJobTitleData() {
      const titleData = []
      const allJobs = this.$store.state.globalState.allJobTitleData
      allJobs.forEach(j => {
        titleData.push(j.title)
      })
      return titleData
    }
  },
  watch: {
      data: {
          immediate: true,
          handler(newVal) {
            this.initializeData(newVal) // ??
          },
      },
  },
  methods: {
    initializeData(data) {
      console.log("ID:", data)
      console.log("TT:", this.$store.state.globalState.parentTeamTitle)
      this.selectedJob = this.$store.state.globalState.parentTeamTitle?.job
      this.selectedPhase = this.$store.state.globalState.parentTeamTitle?.phase
    },
    handleOk(e) {
      if (isEmpty(this.name) || isEmpty(this.selectedJob) || isEmpty(this.selectedPhase) || isEmpty(this.selectedPriority)) {
        e.preventDefault()
        this.$toast.warning('Value is invalid!')
      } else {
        this.$bvModal.hide('modal-add-new-task-program')
        const priorityIndex = this.$store.state.globalState.priorityOptions.findIndex(p => p === this.selectedPriority)
        const jobId = this.$store.state.globalState.allJobTitleData.find(job => job.title === this.selectedJob).id
        const phaseId = this.$store.state.globalState.allPhaseTitleData.findIndex(phase => phase === this.selectedPhase)
        this.$store.dispatch('globalState/insert_new_task', {
          priority: priorityIndex !== -1 ? priorityIndex + 1 : 1,
          name: this.name,
          job_id: jobId,
          phase: phaseId !== -1 ? phaseId + 1 : 0,
          exsystem: this.selectedOptionsString
        })
        this.taskId = ''
        this.gate = ''
      }
    }
  }
}
</script>
