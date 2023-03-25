<template>
  <b-modal id="modal-activity-detail" v-model="show" title="Activity Details" centered no-fade hide-backdrop static
    ref="activity-detail-modal" @hide="hideModal" size="lg">
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Activity Details
      </h5>
      <div class="modal-actions">
        <b-button variant="outline-primary">
          <feather-icon icon="RefreshCwIcon" size="18" />
          <span class="pl-1">External Sync</span>
        </b-button>
        <b-button variant="outline-primary" @click="hideModal">
          <feather-icon icon="XIcon" size="18" />
        </b-button>
      </div>
    </template>
    <div class="activity-modal--body">
      <div class="form-group header d-flex justify-content-between">
        <div>
          <label>ACTIVITY ID</label>
          <p v-if="selectedActivityData.phase">
            {{ selectedActivityData.phase.activityId }}
          </p>
        </div>
        <div>
          <div style="text-align: end;"><label style="font-size: 14px; color: #898989;text-transform:none">External
              System: Jira</label></div>
          <p style="color: #bbbbbb;font-size: 16px;">
            External Activity Id: JR-12345
          </p>
        </div>
      </div>
      <div class="form-group btn-group">
        <b-button v-b-modal.modal-activity-split variant="outline-primary">
          <feather-icon icon="GitPullRequestIcon" size="18" />
          <span class="pl-1">Split</span>
        </b-button>
        <b-button v-b-modal.modal-activity-merge variant="outline-primary">
          <feather-icon icon="GitMergeIcon" size="18" />
          <span class="pl-1">Merge</span>
        </b-button>
      </div>
      <div class="form-group">
        <div class="detail-box">
          <feather-icon icon="AlignLeftIcon" size="18" />
          <p class="pl-1 m-0 text-uppercase">
            Details
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Title</label>
          <b-form-input v-model="selectedActivityData.phase.title" />
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Description</label>
          <b-form-textarea v-model="selectedActivityData.phase.description" rows="5" />
        </div>
      </div>
      <!-- <div class="form-group">
        <div class="detail-box">
          <feather-icon icon="CompassIcon" size="18" />
          <p class="pl-1 m-0 text-uppercase">
            Predecessor
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Program</label>
          <v-select
            :options="['Quadruped robot', 'Micro robot observation NBC', 'Handling robot', 'Power & programming station']"
            placeholder="Select Program" outlined />
        </div>
        <div class="select-box">
          <label>Project</label>
          <v-select :options="['New Format', 'Enhanced motricity', 'Enhanced autonomy', 'Dual sourcing for Quadruped']"
            placeholder="Select Project" outlined />
        </div>
        <div class="select-box">
          <label>Subproject</label>
          <v-select :options="['Template', 'System programming', 'Checking', 'Illustration']"
            placeholder="Select skillset" outlined />
        </div>
        <div class="select-box">
          <label>Task</label>
          <v-select :options="['Design temp', 'Workflow', 'Graphic design']" placeholder="Select Task" outlined />
        </div>
      </div> -->
      <div class="form-group">
        <div class="detail-box">
          <feather-icon icon="CompassIcon" size="18" />
          <p class="pl-1 m-0 text-uppercase">
            Dependency
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Activity</label>
          <v-select :options="activityList" placeholder="Select Task" outlined />
        </div>
      </div>
      <div class="form-group">
        <div class="detail-box">
          <feather-icon icon="PaperclipIcon" size="18" />
          <p class="pl-1 m-0 text-uppercase">
            Job
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Jobs Available</label>
          <v-select :options="['Design', 'Program', 'Manage']" placeholder="Select a job" outlined />
        </div>
      </div>
      <div class="form-group">
        <div class="detail-box">
          <feather-icon icon="UsersIcon" size="18" />
          <p class="pl-1 m-0 text-uppercase">
            team
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Team Assigned</label>
          <v-select @input="teamSelectHandle" v-model="selectedTeam" :options="c_teamData" placeholder="Select Team"
            outlined />
        </div>
      </div>
      <div class="form-group has-switch">
        <div class="detail-box">
          <feather-icon icon="BarChart2Icon" size="18" />
          <p class="px-1 m-0 text-uppercase">
            effort
          </p>
          <feather-icon icon="PlusIcon" size="18" style="cursor:pointer" @click="onEffortAdd" />
        </div>
        <b-form-checkbox @change="effortDetailShowToggle" :checked="effortDetailShow" switch inline>
          Show details
        </b-form-checkbox>
      </div>
      <div class="form-group" v-if="effortDetailShow">
        <div class="row">
          <div class="col-6">
          </div>
          <div class="col">
            <label>Total Load</label>
            <b-form-input :value="totalEffortData.tLoad" readonly />
          </div>
          <div class="col">
            <label>Total Duration</label>
            <b-form-input :value="totalEffortData.tDuration" readonly />
          </div>
          <div class="col">
            <label>Total FTE</label>
            <b-form-input :value="totalEffortData.tFte" readonly />
          </div>
        </div>
        <div class="row" v-for="(t, i) in effortData" :key="i">
          <div class="col-6">
            <label>Skillset</label>
            <v-select :options="['Design Workflow', 'Program Engineering', 'Project Management']" :value="t.skill"
              placeholder="Select skillset" outlined @input="effortChange('skill', i, $event)" />
          </div>
          <div class="col">
            <label>Load</label>
            <b-form-input :value="t.load" @input="effortChange('load', i, $event)" />
          </div>
          <div class="col">
            <label>Duration</label>
            <b-form-input :value="t.duration" @input="effortChange('duration', i, $event)" />
          </div>
          <div class="col">
            <label>FTE</label>
            <b-form-input :value="t.fte" @input="effortChange('fte', i, $event)" />
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button variant="outline-primary" @click="hideModal">
        Cancel
      </b-button>
      <b-button variant="primary" @click="handleSave">
        Save
      </b-button>
    </template>
    <activity-split-modal :selectedActivityData="c_SelectedActivity" />
    <activity-merge-modal :selectedActivityData="c_SelectedActivity" />
  </b-modal>
</template>

<script>
import {
  BButton, BFormCheckbox, BFormInput, BFormTextarea, BModal
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import ActivitySplitModal from './ActivitySplitModal.vue'
import ActivityMergeModal from './ActivityMergeModal.vue'

export default {
  components: {
    ActivityMergeModal,
    ActivitySplitModal,
    BButton,
    BFormCheckbox,
    BFormInput,
    BFormTextarea,
    BModal,
    vSelect,
    // BDropdown,
    // BDropdownItem
  },
  props: {
    selectedActivityData: {
      type: Object,
      default: () => { },
    },
    teamdata: {
      type: Array,
      default: () => []
    },
    isOpen: Boolean,
  },
  data() {
    return {
      activity: {},
      show: false,
      selectedTeam: "System auto select",
      effortData: [
        {
          skill: null,
          load: null,
          duration: null,
          fte: null
        }
      ],
      effortDetailShow: true
    }
  },
  computed: {
    totalEffortData() {
      let load = 0
      let duration = 0
      let fte = 0
      this.effortData.forEach(t => {
        load += parseInt(t.load ? t.load : 0, 10)
        duration += parseInt(t.duration ? t.duration : 0, 10)
        fte += parseInt(t.fte ? t.fte : 0, 10)
      })
      return { tLoad: load, tDuration: duration, tFte: fte }
    },
    c_teamData() {
      const dt = ["System auto select", ...this.teamdata]
      return dt
    },
    c_SelectedActivity() {
      return this.selectedActivityData
    },
    activityList() {
      const activityArray = []
      const teamState = this.$store.state.globalState?.teamsState
      if (teamState) {
        teamState.map(t => t.phases?.map(t1 => t1.activities?.map(t3 => activityArray.push(t3.activityId.concat("-").concat(t3.title)))))
      }
      return activityArray
    }
  },
  watch: {
    isOpen(val) {
      this.show = val
    },
  },
  methods: {
    hideModal() {
      this.$emit('hideModal')
    },
    handleSave() {
      this.$store.commit('globalState/HANDLE_ACTIVITY_DETAIL_SAVE', this.selectedActivityData.phase)
      this.$emit('hideModal')
    },
    teamSelectHandle(value) {
      console.log(value)
    },
    effortChange(field, index, e) {
      this.effortData[index][field] = e
    },
    onEffortAdd() {
      this.effortData.push({
        skill: null,
        load: null,
        duration: null,
        fte: null
      })
    },
    effortDetailShowToggle(e) {
      this.effortDetailShow = e
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
