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
          <label>WE ID</label>
          <p v-if="selectedActivityData.phase">
            {{ selectedActivityData.phase.id }}
          </p>
        </div>
        <div style="display: flex;">
          <div class="w-30">
            <label>External System</label>
            <v-select
              v-model="externalSystem"
              :options="['SAP', 'Jira', 'Devops', 'primavera', 'Deviprop']"
              placeholder="Select External System"
              outlined
              @input="updateExternalID"
            />
          </div>
          <div class="w-70 pl-1">
            <label>System ID</label>
            <div class="d-flex">
              <b-form-input
                v-model="externalId"
                placeholder="Input External Id"
                style="min-width:200px"
              />
              <div
                style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                @click="handleUpdateExternal"
              >
                <feather-icon
                  :icon="'SaveIcon'"
                  style="color: #7367f0"
                  size="20"
                />
              </div>
              <div
                style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                @click="handleDeleteExternal"
              >
                <feather-icon
                  :icon="'TrashIcon'"
                  style="color: #7367f0"
                  size="20"
                />
              </div>
            </div>
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
          <b-form-input v-model="weTitle" />
        </div>
      </div>
      <div class="form-group">
        <div class="select-box">
          <label>Description</label>
          <b-form-textarea
            v-model="weDescription"
            rows="5"
          />
        </div>
      </div>
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
        <div class="select-box">
          <label>Activity</label>
          <v-select
            v-model="selectedParents"
            :options="activityList"
            placeholder="Select Activity"
            menu-props="auto"
            outlined
            multiple
          />
        </div>
      </div>
      <div class="form-group">
        <b-button
          variant="outline-primary"
          @click="onClickEditPriorityBtn()"
        >
          Edit Priority
        </b-button>
        &nbsp;&nbsp;
        <b-button
          variant="outline-primary"
          @click="onClickEditPhaseBtn()"
        >
          Edit Phase
        </b-button>
      </div>
      <div
        v-if="showEditPriority === true"
        class="form-group"
      >
        <div class="select-box">
          <label>Priority</label>
          <v-select
            v-model="selectedPriority"
            :options="priorityOptions"
            placeholder="Select Priority"
            menu-props="auto"
            outlined
          />
        </div>
      </div>
      <div
        v-if="showEditPhase === true"
        class="form-group"
      >
        <div class="select-box">
          <label>Phase</label>
          <v-select
            v-model="selectedPhase"
            :options="phaseList"
            placeholder="Select Phase"
            menu-props="auto"
            outlined
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
            v-model="selectedJob"
            :options="c_JobData"
            menu-props="auto"
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
            menu-props="auto"
            placeholder="Select Team"
            outlined
            @input="teamSelectHandle"
          />
        </div>
      </div>
      <div class="form-group has-switch">
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
          :disabled="opt_skillset === 0"
          @change="effortDetailShowToggle"
        >
          Skillset option
        </b-form-checkbox>
      </div>
      <div class="form-group">
        <div class="row">
          <div class="col">
            <b-button
              style="margin-top:20px"
              variant="primary"
              @click="handleCalculate"
            >
              Calculate
            </b-button>
          </div>
          <div class="col">
            <label>Total Load</label>
            <b-form-input
              v-model="loadData"
              type="number"
              :value="loadData"
            />
          </div>
          <div class="col">
            <label>Total Duration</label>
            <b-form-input
              v-model="durationData"
              type="number"
              :value="durationData"
            />
          </div>
          <div class="col">
            <label>Total FTE</label>
            <b-form-input
              v-model="fteData"
              type="number"
              :value="fteData"
            />
          </div>
        </div>
        <div class="row">
          <!-- <div class="col-6">
          </div> -->
          <div class="col">
            <label>Load(Demand)</label>
            <b-form-input
              v-model="loadDemandData"
              type="number"
              readonly
            />
          </div>
          <div class="col">
            <label>Duration(Demand)</label>
            <b-form-input
              v-model="durationDemandData"
              type="number"
              readonly
            />
          </div>
          <div class="col">
            <label>FTE(Demand)</label>
            <b-form-input
              v-model="fteDemandData"
              type="number"
              readonly
            />
          </div>
          <div class="col">
            <label>%acc</label>
            <b-form-input
              v-model="accData"
              type="number"
              readonly
            />
          </div>
          <div class="col">
            <label>Rest To Do</label>
            <b-form-input
              v-model="restToDoData"
              type="number"
              readonly
            />
          </div>
        </div>
        <div class="row">
          <!-- <div class="col-6">
          </div> -->
          <div class="col">
            <label>Load(Real/Estimated)</label>
            <b-form-input
              v-model="loadEstimateData"
              type="number"
              readonly
            />
          </div>
          <div class="col">
            <label>Duration(Real/Estimated)</label>
            <b-form-input
              v-model="durationEstimateData"
              type="number"
              readonly
            />
          </div>
          <div class="col">
            <label>FTE(Real/Estimated)</label>
            <b-form-input
              v-model="fteEstimateData"
              type="number"
              readonly
            />
          </div>
        </div>
        <div
          v-if="opt_skillset !== 0 && effortDetailShow"
          class="row pt-1"
        >
          <div class="col-6">
            <label>Skillset</label>
            <v-select
              v-model="skillset"
              :options="['Design Workflow', 'Program Engineering', 'Project Management']"
              menu-props="auto"
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
        Update
      </b-button>
    </template>
    <activity-split-modal :selected-activity-data="c_SelectedActivity" />
    <activity-merge-modal :selected-activity-data="c_SelectedActivity" />
  </b-modal>
</template>

<script>
import {
  BButton, BFormCheckbox, BFormInput, BFormTextarea, BModal
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
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
      selectedJob: " ",
      selectedPriority: "",
      selectedPhase: "",
      priorityOptions: this.$store.state.globalState.priorityOptions,
      phaseList: this.$store.state.globalState.allPhaseTitleData,
      c_teamData: this.$store.state.globalState?.weTeamData,
      loadData: 0,
      durationData: 0,
      fteData: 0,
      loadDemandData: 0,
      durationDemandData: 0,
      fteDemandData: 0,
      loadEstimateData: 0,
      durationEstimateData: 0,
      fteEstimateData: 0,
      accData: 0,
      isValid: false,
      restToDoData: 0,
      weTitle: '',
      weDescription: '',
      skillset: 0,
      opt_skillset: 0,
      effortDetailShow: true,
      externalSystems: {},
      externalId: "",
      externalSystem: "Jira",
      showEditPriority: false,
      showEditPhase: false,
      selectedParents: []
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
      const resultArr = []
      this.$store.state.globalState.allJobTitleData.forEach(j => {
        resultArr.push(j.title)
      })
      return resultArr
    },
    c_SelectedActivity() {
      return this.selectedActivityData
    },
    activityList() {
      const titleArr = []
      this.$store.state.globalState.allWeData.forEach(a => {
        if (this.selectedActivityData.phase !== undefined && this.selectedActivityData.phase.id !== a.id && this.selectedActivityData.phase.projectId === a.projectId) {
          titleArr.push(a.title)
        }
      })
      this.$store.state.globalState.allWeData.forEach(a => {
        if (this.selectedActivityData.phase !== undefined && this.selectedActivityData.phase.id !== a.id && this.selectedActivityData.phase.projectId !== a.projectId) {
          titleArr.push(a.title)
        }
      })
      return titleArr
    }
  },
  watch: {
    isOpen(val) {
      this.show = val
    },
    selectedActivityData: {
      immediate: true,
      handler(newVal) {
        this.initializeData(newVal) // ??
      },
    },
    selectedJob: {
      immediate: true,
      handler(newVal) {
        this.jobSelectHandle(newVal) // ??
      },
    },
    '$store.state.globalState.weDependsList': {
      immediate: true,
      handler(newValue) {
        const allDepends = newValue
        const parents = allDepends.filter(t => t.childid === this.selectedActivityData.phase?.id)
        parents.forEach(parent => {
          const foundParent = this.$store.state.globalState.allWeData.find(t => t.id === parent.parentid)
          if (foundParent && this.selectedParents.indexOf(foundParent.title) < 0) {
            this.selectedParents.push(foundParent.title)
          }
        })
      },
    },
  },
  methods: {
    async initializeData(data) {
      console.log("InitData:", data, "selectedData:", this.selectedActivityData, "teamData:", this.teamdata)
      if (this.selectedActivityData.phase !== undefined) {
        await this.$store.dispatch('globalState/get_external_systems_we', { id: this.selectedActivityData.phase.projectId })
      }
      const orgData = this.$store.state.globalState.allOrgData
      const { orgId } = this.$store.state.globalState.selectedNavObj
      orgData.map(item => {
        if (item.id === orgId) {
          this.opt_skillset = item.opt_skillset
        }
        return null
      })
      this.isValid = false
      const allDepends = this.$store.state.globalState.weDependsList
      this.selectedParents = []
      if (this.selectedActivityData.phase !== undefined) {
        this.weTitle = this.selectedActivityData.phase.title
        this.weDescription = this.selectedActivityData.phase.description
        this.loadData = this.selectedActivityData.phase.effort.load_engage
        this.durationData = this.selectedActivityData.phase.effort.duration_engage
        this.fteData = this.selectedActivityData.phase.effort.fte_engage
        this.loadDemandData = this.selectedActivityData.phase.effort.load_demand
        this.durationDemandData = this.selectedActivityData.phase.effort.duration_demand
        this.fteDemandData = this.selectedActivityData.phase.effort.fte_demand
        this.accData = this.selectedActivityData.phase.acc
        this.loadEstimateData = this.selectedActivityData.phase.effort.load_estimated
        this.restToDoData = (1 - parseFloat(this.accData) / 100) * this.loadEstimateData
        this.durationEstimateData = this.selectedActivityData.phase.effort.duration_estimated
        this.fteEstimateData = this.selectedActivityData.phase.effort.fte_estimated
        this.selectedJob = this.selectedActivityData.phase.job_name
        this.selectedTeam = this.selectedActivityData.phase.team_name
        this.selectedPriority = this.priorityOptions[this.selectedActivityData.phase.priority - 1]
        this.selectedPhase = this.$store.state.globalState.allPhaseTitleData[this.selectedActivityData.phase.gate - 1]
        const parents = allDepends.filter(t => t.childid === this.selectedActivityData.phase.id)
        parents.forEach(parent => {
          const foundParent = this.$store.state.globalState.allWeData.find(t => t.id === parseInt(parent.parentid, 10))
          if (foundParent && this.selectedParents.indexOf(foundParent.title) < 0) {
            this.selectedParents.push(foundParent.title)
          }
        })
        this.externalSystems = this.$store.state.globalState.externalWeSystemData.find(t => t.idwe === this.selectedActivityData.phase.id)
        if (this.externalSystems === undefined) {
          this.externalSystems = {
            driver_type: 2,
            idprogram: this.selectedActivityData.phase.projectId,
            idwe: this.selectedActivityData.phase.id,
            jira_idprogram: null,
            jira_idwe: null,
            sap_idprogram: null,
            sap_idwe: null,
            deviprop_idprogram: null,
            deviprop_idwe: null,
            primavera_idprogram: null,
            primavera_idwe: null,
            devops_idprogram: null,
            devops_idwe: null,
            type: 2,
            parent: null
          }
        }
        this.externalId = this.externalSystems.jira_idprogram
      }
    },
    onClickEditPriorityBtn() {
      this.showEditPriority = !this.showEditPriority
    },
    onClickEditPhaseBtn() {
      this.showEditPhase = !this.showEditPhase
    },
    jobSelectHandle(data) {
      const globalTeams = this.$store.state.globalState.globalOrganizationJobData[0]
      const tempTeamData = ['auto selection']
      if (globalTeams !== undefined && globalTeams.children && globalTeams.children.length > 0) {
        globalTeams.children.map(item => {
          if (item.title === data) {
            if (item.children && item.children.length > 0) {
              item.children.map(t => {
                tempTeamData.push(t.title)
                return null
              })
            }
          }
          return null
        })
      }
      this.c_teamData = tempTeamData
      this.selectedTeam = tempTeamData && tempTeamData.length > 0 ? tempTeamData[0] : ""
    },
    handleCalculate() {
      if (this.fteData !== '' && this.durationData !== '' && this.loadData !== '') {
        if (parseFloat(this.loadData) === 0 && parseFloat(this.durationData) === 0 && parseFloat(this.fteData) === 0) {
          this.showToast('warning', 'Please enter valid values')
          this.isValid = false
          return
        }
        if (parseFloat(this.fteData) !== 0) {
          this.durationData = parseFloat(this.loadData) / parseFloat(this.fteData)
          this.isValid = true
        } else if (parseFloat(this.fteData) === 0 && parseFloat(this.durationData) !== 0) {
          this.fteData = parseFloat(this.loadData) / parseFloat(this.durationData)
          this.isValid = true
        } else if (parseFloat(this.loadData) === 0 && parseFloat(this.durationData) !== 0 && parseFloat(this.durationData) !== 0) {
          this.loadData = parseFloat(this.durationData) * parseFloat(this.fteData)
          this.isValid = true
        }
        if (parseFloat(this.loadData) === parseFloat(this.durationData) * parseFloat(this.fteData)) {
          this.showToast('success', 'All values are valid')
          this.isValid = true
        }
      }
      if (this.fteData !== '' && this.durationData !== '' && this.loadData === '') {
        this.loadData = parseFloat(this.durationData) * parseFloat(this.fteData)
        this.isValid = true
      } else if (this.loadData !== '' && this.durationData !== '' && this.durationData !== 0 && this.fteData === '') {
        this.fteData = parseFloat(this.loadData) / parseFloat(this.durationData)
        this.isValid = true
      } else if (this.loadData !== '' && this.fteData !== '' && this.fteData !== 0 && this.durationData === '') {
        this.durationData = parseFloat(this.loadData) / parseFloat(this.fteData)
        this.isValid = true
      }
    },
    validateEffortData(data, type) {
      if (parseInt(data, 10) === 0 && parseInt(type, 10) === 3) {
        this.showToast('warning', 'Please enter a non-zero value for FTE')
        this.fteData = 1
        return
      }
      if (data === '' || data === null || data === undefined || Number.isNaN(data)) return
      switch (type) {
        case 1:
          if (parseFloat(this.fteData) !== 0 && this.fteData !== '' && this.fteData !== null && this.fteData !== undefined && !Number.isNaN(this.fteData)) this.durationData = parseFloat(data) / parseFloat(this.fteData)
          if (parseFloat(this.durationData) !== 0 && this.durationData !== '' && this.durationData !== null && this.durationData !== undefined && !Number.isNaN(this.durationData)) this.fteData = parseFloat(data) / parseFloat(this.durationData)
          break
        case 2:
          if (parseFloat(this.fteData) !== 0 && this.fteData !== '' && this.fteData !== null && this.fteData !== undefined && !Number.isNaN(this.fteData)) this.loadData = parseFloat(data) * parseFloat(this.fteData)
          if (parseFloat(this.loadData) !== 0 && this.loadData !== '' && this.loadData !== null && this.loadData !== undefined && !Number.isNaN(this.loadData)) this.fteData = parseFloat(this.loadData) / parseFloat(data)
          break
        case 3:
          if (parseFloat(this.durationData) !== 0 && this.durationData !== '' && this.durationData !== null && this.durationData !== undefined && !Number.isNaN(this.durationData)) this.loadData = parseFloat(data) * parseFloat(this.durationData)
          if (parseFloat(this.loadData) !== 0 && this.loadData !== '' && this.loadData !== null && this.loadData !== undefined && !Number.isNaN(this.loadData)) this.durationData = parseFloat(this.loadData) / parseFloat(data)
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
    hideModal() {
      this.$emit('hideModal')
    },
    async handleSave() {
      const priorityIndex = this.$store.state.globalState.priorityOptions.findIndex(p => p === this.selectedPriority) + 1
      const jobId = this.$store.state.globalState.allJobTitleData.find(job => job.title === this.selectedJob).id
      const phaseId = this.$store.state.globalState.allPhaseTitleData.findIndex(phase => phase === this.selectedPhase) + 1
      const teams = this.$store.state.globalState.allTeamTitleData.find(team => team.title === this.selectedTeam)
      let selectedParentIDs = []
      this.$store.state.globalState.allWeData.forEach(a => {
        const selected = this.selectedParents.find(p => p === a.title)
        if (selected !== undefined && selected !== null) selectedParentIDs.push(a.id)
      })
      selectedParentIDs = selectedParentIDs.filter((value, index, array) => array.indexOf(value) === index)
      let teamId = 0
      if (teams !== undefined) teamId = teams.id
      if (this.selectedTeam === 'auto selection') teamId = 0
      const payloads = {
        we_id: this.selectedActivityData.phase?.id,
        detail_mode: true,
        name: this.weTitle,
        job_id: jobId < 0 ? 1 : jobId,
        phase_id: phaseId < 0 ? 1 : phaseId,
        team_id: teamId < 0 ? 1 : teamId,
        priority: priorityIndex < 0 ? 1 : priorityIndex,
        load_engage: this.loadData,
        duration_engage: this.durationData,
        description: this.weDescription,
        fte_engage: this.fteData,
        parents: selectedParentIDs,
        projectId: this.selectedActivityData.phase?.projectId,
        externalSystems: this.externalSystems,
      }
      const requotedElements = this.$store.state.globalState.selectedWorkElement
      const index = requotedElements.indexOf(this.selectedActivityData.phase.id)
      if (index > -1) {
        requotedElements.splice(index, 1)
      }
      this.$store.commit('globalState/WORK_ELEMENT_CHECK', requotedElements)
      this.$store.commit('globalState/SUBMIT_TEAM_REQUEST_QUOTE')
      await this.$store.dispatch('globalState/submit_manual_update', payloads)
      await this.$store.dispatch('globalState/load_org_data')
      await this.$store.dispatch('globalState/get_external_systems_we', { id: this.selectedActivityData.phase.projectId })
      const data = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/get_from_selected_nav_id', {
        data
      })
      await this.$store.dispatch('globalState/get_all_we_depends')
      await this.$store.dispatch('globalState/get_all_workelements')
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
    },
    updateExternalID() {
      switch (this.externalSystem) {
        case 'Jira':
          this.externalId = this.externalSystems.jira_idprogram
          break
        case 'SAP':
          this.externalId = this.externalSystems.sap_idprogram
          break
        case 'Devops':
          this.externalId = this.externalSystems.devops_idprogram
          break
        case 'primavera':
          this.externalId = this.externalSystems.primavera_idprogram
          break
        case 'Deviprop':
          this.externalId = this.externalSystems.deviprop_idprogram
          break
        default:
          break
      }
    },
    handleUpdateExternal() {
      switch (this.externalSystem) {
        case 'Jira':
          this.externalSystems.jira_idprogram = this.externalId
          break
        case 'SAP':
          this.externalSystems.sap_idprogram = this.externalId
          break
        case 'Devops':
          this.externalSystems.devops_idprogram = this.externalId
          break
        case 'Deviprop':
          this.externalSystems.deviprop_idprogram = this.externalId
          break
        case 'primavera':
          this.externalSystems.primavera_idprogram = this.externalId
          break
        default:
          break
      }
    },
    async handleDeleteExternal() {
      const value = await this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this.', {
        title: 'Please Confirm',
        size: 'sm',
        okVariant: 'primary',
        okTitle: 'Yes',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true,
      })
      if (value) {
        switch (this.externalSystem) {
          case 'Jira':
            this.externalSystems.jira_idprogram = ""
            break
          case 'SAP':
            this.externalSystems.sap_idprogram = ""
            break
          case 'Devops':
            this.externalSystems.devops_idprogram = ""
            break
          case 'Deviprop':
            this.externalSystems.deviprop_idprogram = ""
            break
          case 'primavera':
            this.externalSystems.primavera_idprogram = ""
            break
          default:
            break
        }
        this.externalId = ""
      }
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
