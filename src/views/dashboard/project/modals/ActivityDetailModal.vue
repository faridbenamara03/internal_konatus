<template>
  <b-modal id="modal-activity-detail" v-model="show" title="Activity Details" centered no-fade hide-backdrop static
    ref="activity-detail-modal" @hide="hideModal">
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
        <p v-if="data.phase">
          {{ data.phase.activityId }}
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
          <b-form-input :value="data.phase.title" @input="handleInput('title', $event)" />
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Description</label>
          <b-form-textarea :value="data.phase.description" @input="handleInput('description', $event)" rows="5" />
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
          <p class="pl-1 m-0 text-uppercase">
            effort
          </p>
        </div>
        <b-form-checkbox checked="true" switch inline>
          Show details
        </b-form-checkbox>
      </div>
      <div class="form-group">
        <div class="select-group p-0">
          <div class="select-group--sub">
            <div class="select-box mb-0">
              <label>Load</label>
              <b-form-input :value="data.phase.effort.load" />
            </div>
            <div class="select-box mb-0">
              <label>Duration</label>
              <b-form-input :value="data.phase.effort.duration" />
            </div>
            <div class="select-box mb-0">
              <label>FTE</label>
              <b-form-input :value="data.phase.effort.fte" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex" style="justify-content:end">
        <div>
          <b-dropdown size="sm" variant="link" id="dropdown-1" style="margin-right:-24px;" toggle-class="text-decoration-none" no-caret>
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
    <activity-split-modal :data="data" />
    <activity-merge-modal :data="data" />
  </b-modal>
</template>

<script>
import {
  BButton, BFormCheckbox, BFormInput, BFormTextarea, BModal, BDropdown, BDropdownItem
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
    BDropdown,
    BDropdownItem
  },
  props: {
    data: {
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
    }
  },
  watch: {
    isOpen(val) {
      this.show = val
    },
  },
  methods: {
    handleInput(field, value) {
      this.data.phase[field] = value
    },
    hideModal() {
      this.$emit('hideModal')
    },
    handleSave() {
      this.$store.commit('teamState/HANDLE_ACTIVITY_DETAIL_SAVE', this.data.phase)
      this.$emit('hideModal')
    },
    teamSelectHandle(value) {
      console.log(value)
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
