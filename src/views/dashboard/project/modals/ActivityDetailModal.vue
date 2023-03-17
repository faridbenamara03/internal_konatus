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
      <div class="form-group header">
        <label>ACTIVITY ID</label>
        <p v-if="selectedActivityData.phase">
          {{ selectedActivityData.phase.activityId }}
        </p>
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
            placeholder="Select Subproject" outlined />
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
          <label>Tasks</label>
          <v-select :options="['Design temp', 'Workflow', 'Graphic design']" placeholder="Select Task" outlined />
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
          <v-select @input="teamSelectHandle" v-model="selectedTeam" :options="teamdata" placeholder="Select Team"
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
        <b-form-checkbox checked="true" switch inline>
          Show details
        </b-form-checkbox>
      </div>
      <div class="form-group">
        <div class="row" v-for="(t, i) in effortData" :key="i">
          <div class="col-6">
            <label>Skill</label>
            <v-select :options="['Design Workflow', 'Program Engineering', 'Project Management']" :value="t.skill"
              placeholder="Select Subproject" outlined @input="effortChange('skill', i, $event)" />
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
      <!-- <div class="form-group">
        <div class="select-group p-0">
          <div class="select-group--sub">
            <div class="select-box mb-0">
              <label>Subproject</label>
              <v-select :options="['Design', 'Program', 'Manage']" placeholder="Select Subproject" outlined />
            </div>
            <div class="select-box mb-0">
              <label>Load</label>
              <b-form-input :value="selectedActivityData.phase.effort.load" />
            </div>
            <div class="select-box mb-0">
              <label>Duration</label>
              <b-form-input :value="selectedActivityData.phase.effort.duration" />
            </div>
            <div class="select-box mb-0">
              <label>FTE</label>
              <b-form-input :value="selectedActivityData.phase.effort.fte" />
            </div>
          </div>
        </div>
      </div> -->
      <!-- <div class="d-flex" style="justify-content:end">
        <div>
          <b-dropdown size="sm" variant="link" id="dropdown-1" style="margin-right:-24px;"
            toggle-class="text-decoration-none" no-caret>
            <template #button-content>
              <span style="color:#7367F0">
                Effort per Skill
                <feather-icon icon="ChevronDownIcon" class="ml-1" />
              </span>
            </template>
            <b-dropdown-item>Skill 1</b-dropdown-item>
            <b-dropdown-item>Skill 2</b-dropdown-item>
            <b-dropdown-item active>Skill 3</b-dropdown-item>
            <b-dropdown-item disabled>Skill 4</b-dropdown-item>
          </b-dropdown>
        </div>
      </div> -->
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
      selectedTeam: null,
      effortData: [
        {
          skill: null,
          load: null,
          duration: null,
          fte: null
        }
      ]
    }
  },
  computed: {
    c_SelectedActivity() {
      return this.selectedActivityData
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
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
