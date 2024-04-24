<template>
  <b-modal
    id="modal-activity-detail"
    ref="activity-detail-modal"
    v-model="show"
    title="Activity Details"
    centered
    no-fade
    hide-backdrop
    static
    size="lg"
    @hide="hideModal"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Work Element Details
      </h5>
      <div class="modal-actions">
        <b-button variant="outline-primary">
          <feather-icon
            icon="RefreshCwIcon"
            size="18"
          />
          <span class="pl-1">External Sync</span>
        </b-button>
        <b-button
          variant="outline-primary"
          @click="hideModal"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </template>
    <div class="activity-modal--body">
      <div class="form-group header d-flex justify-content-between">
        <div>
          <label>ACTIVITY ID</label>
          <p v-if="selectedActivityData.phase">
            {{ selectedActivityData.phase.id }}
          </p>
        </div>
        <div style="display: flex">
          <div>
            <div style="text-align: end;">
              <label
                v-if="!externalEditable"
                style="font-size: 14px; color: #898989;text-transform:none"
              >
                External System: {{ externalSystem ? externalSystem[0] : "" }}
              </label>
              <div v-else>
                <!-- <v-select
                  v-model="externalSystem"
                  style="margin-bottom: 3px"
                  :options="['Jira', 'SAP']"
                  placeholder="Select External System"
                  outlined
                /> -->
                <v-select
                  v-model="externalSystem"
                  :options="['SAP', 'Jira', 'P6']"
                  placeholder="Select External System"
                  outlined
                  multiple
                />
              </div>
            </div>
            <p
              v-if="!externalEditable"
              style="color: #bbbbbb;font-size: 16px;"
            >
              External Activity Id: {{ externalId }}
            </p>
            <div v-else>
              <b-form-input
                v-model="externalId"
                placeholder="Input External Activity Id"
              />
            </div>
          </div>
          <div
            style="padding-top: 4px;margin-left: 5px;cursor: pointer;"
            @click="handleExternalEdit"
          >
            <feather-icon
              :icon="externalEditable ? 'SaveIcon' : 'Edit3Icon'"
              style="color: #7367f0"
              size="20"
            />
          </div>
        </div>
      </div>
      <div class="form-group btn-group">
        <b-button
          v-b-modal.modal-activity-split
          variant="outline-primary"
        >
          <feather-icon
            icon="GitPullRequestIcon"
            size="18"
          />
          <span class="pl-1">Split</span>
        </b-button>
        <b-button
          v-b-modal.modal-activity-merge
          variant="outline-primary"
        >
          <feather-icon
            icon="GitMergeIcon"
            size="18"
          />
          <span class="pl-1">Merge</span>
        </b-button>
      </div>
      <div class="form-group">
        <div class="detail-box">
          <feather-icon
            icon="AlignLeftIcon"
            size="18"
          />
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
          <b-form-textarea
            v-model="selectedActivityData.phase.description"
            rows="5"
          />
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
          <feather-icon
            icon="CompassIcon"
            size="18"
          />
          <p class="pl-1 m-0 text-uppercase">
            Dependency
          </p>
        </div>
      </div>
      <div class="form-group">
        <b-button
          variant="outline-primary"
        >
          Edit Priority
        </b-button>
        &nbsp;&nbsp;
        <b-button
          variant="outline-primary"
        >
          Edit Phase
        </b-button>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Activity</label>
          <v-select
            :options="activityList"
            placeholder="Select Task"
            outlined
            multiple
          />
        </div>
      </div>
      <div class="form-group">
        <div class="detail-box">
          <feather-icon
            icon="PaperclipIcon"
            size="18"
          />
          <p class="pl-1 m-0 text-uppercase">
            Job
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Jobs Available</label>
          <v-select
            :options="c_JobData"
            placeholder="Select a job"
            outlined
          />
        </div>
      </div>
      <div class="form-group">
        <div class="detail-box">
          <feather-icon
            icon="UsersIcon"
            size="18"
          />
          <p class="pl-1 m-0 text-uppercase">
            team
          </p>
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Team Assigned</label>
          <v-select
            v-model="selectedTeam"
            :options="c_teamData"
            placeholder="Select Team"
            outlined
            @input="teamSelectHandle"
          />
        </div>
      </div>
      <div
        v-if="opt_skillset !== 0"
        class="form-group has-switch"
      >
        <div class="detail-box">
          <feather-icon
            icon="BarChart2Icon"
            size="18"
          />
          <p class="px-1 m-0 text-uppercase">
            effort
          </p>
          <feather-icon
            icon="PlusIcon"
            size="18"
            style="cursor:pointer"
            @click="onEffortAdd"
          />
        </div>
        <b-form-checkbox
          :checked="effortDetailShow"
          switch
          inline
          @change="effortDetailShowToggle"
        >
          Skillset option
        </b-form-checkbox>
      </div>
      <div
        v-if="opt_skillset !== 0"
        class="form-group"
      >
        <div class="row">
          <!-- <div class="col-6">
          </div> -->
          <div class="col">
            <label>Load</label>
            <b-form-input
              type="number"
              :value="loadData"
              v-model="loadData"
              @input="validateEffortData(loadData, 1)"
            />
          </div>
          <div class="col">
            <label>Duration</label>
            <b-form-input
              type="number"
              :value="durationData"
              v-model="durationData"
              @input="validateEffortData(durationData, 2)"
            />
          </div>
          <div class="col">
            <label>FTE</label>
            <b-form-input
              type="number"
              :value="fteData"
              v-model="fteData"
              @input="validateEffortData(fteData, 3)"
            />
          </div>
        </div>
        <div
          v-if="effortDetailShow"
          class="row pt-1">
          <div class="col-6">
            <label>Skillset</label>
            <v-select
              :options="['Design Workflow', 'Program Engineering', 'Project Management']"
              v-model="skillset"
              placeholder="Select skillset"
              outlined
              @input="effortChange('skill', 0, $event)"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button
        variant="outline-primary"
        @click="hideModal"
      >
        Cancel
      </b-button>
      <b-button
        variant="primary"
        @click="handleSave"
      >
        Save
      </b-button>
    </template>
    <!-- <activity-split-modal :selected-activity-data="c_SelectedActivity" />
    <activity-merge-modal :selected-activity-data="c_SelectedActivity" /> -->
  </b-modal>
</template>

<script>
import {
  BButton, BFormCheckbox, BFormInput, BFormTextarea, BModal
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
// import ActivitySplitModal from './ActivitySplitModal.vue'
// import ActivityMergeModal from './ActivityMergeModal.vue'

export default {
  components: {
    // ActivityMergeModal,
    // ActivitySplitModal,
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
      c_teamData: this.$store.state.globalState?.weTeamData,
      loadData: 0,
      durationData: 0,
      fteData: 0,
      skillset: 0,
      opt_skillset: 0,
      effortDetailShow: true,
      externalEditable: false,
      externalSystem: ["Jira"],
      externalId: "JR-12345"
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
    c_JobData() {
      const dt = ["System auto select", ...this.teamdata]
      return dt
    },
    c_SelectedActivity() {
      console.log("selectedActivityData:", this.selectedActivityData)
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
    props: {
      immediate: true,
      handler(newVal) {
        this.initializeData(newVal) // ??
      },
    },
  },
  methods: {
    initializeData(data) {
      console.log("InitData:", data, "selectedData:", this.selectedActivityData, "teamData:", this.teamdata)
      const orgData = this.$store.state.globalState.allOrgData
      const { orgId } = this.$store.state.globalState.selectedNavObj
      orgData.map(item => {
        if (item.id === orgId) {
          this.opt_skillset = item.opt_skillset
        }
        return null
      })
      this.loadData = this.selectedActivityData.phase.effort.load
      this.durationData = this.selectedActivityData.phase.effort.duration
      this.fteData = this.selectedActivityData.phase.effort.fte
      if (this.durationData === null || this.fteData === null || this.loadData === null || this.fteData === 0 || parseFloat(this.durationData) !== parseFloat(this.loadData) / parseFloat(this.fteData)) {
        this.showToast('warning', 'Your Effort Data is not correct, Please remove one of the values')
      }
    },
    validateEffortData(data, type) {
      if (parseFloat(data) === 0 || data === null) return
      switch (type) {
        case 1:
          if (parseFloat(this.fteData) !== 0 && this.fteData !== null) this.durationData = parseFloat(data) / parseFloat(this.fteData)
          if (parseFloat(this.durationData) !== 0 && this.durationData !== null) this.fteData = parseFloat(data) / parseFloat(this.durationData)
          break
        case 2:
          if (parseFloat(this.fteData) !== 0 && this.fteData !== null) this.loadData = parseFloat(data) * parseFloat(this.fteData)
          if (parseFloat(this.loadData) !== 0 && this.loadData !== null) this.fteData = parseFloat(this.loadData) / parseFloat(data)
          break
        case 3:
          if (parseFloat(this.durationData) !== 0 && this.durationData !== null) this.loadData = parseFloat(data) * parseFloat(this.durationData)
          if (parseFloat(this.loadData) !== 0 && this.loadData !== null) this.durationData = parseFloat(this.loadData) / parseFloat(data)
          break
        default:
          break
      }
    },
    showToast(variant, title) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title,
          icon: 'BellIcon',
          text: null,
          variant,
        },
      })
    },
    handleExternalEdit() {
      this.externalEditable = !this.externalEditable
    },
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
