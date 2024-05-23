<template>
  <b-modal
    id="modal-activity-merge"
    ref="my-modal"
    title="Merge Activity"
    centered
    no-fade
    hide-backdrop
    static
    size="xl"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Merge Activity
      </h5>
      <div class="modal-actions">
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
      <div class="activity-split-view">
        <div class="split-box flex-2">
          <div class="d-flex justify-content-end mb-1">
            <b-badge variant="danger">
              To merge
            </b-badge>
          </div>
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
                    v-if="!externalEditable1"
                    style="font-size: 14px; color: #898989;text-transform:none"
                  >
                    External System: {{ externalSystem1 }}
                  </label>
                  <div v-else>
                    <v-select
                      v-model="externalSystem1"
                      :options="['SAP', 'Jira', 'Devops', 'primavera', 'Deviprop']"
                      placeholder="Select External System"
                      outlined
                      @input="updateExternalID(1)"
                    />
                  </div>
                </div>
                <p
                  v-if="!externalEditable1"
                  style="color: #bbbbbb;font-size: 16px;"
                >
                  External Activity Id: {{ externalId1 }}
                </p>
                <div v-else>
                  <b-form-input
                    v-model="externalId1"
                    placeholder="Input External Activity Id"
                  />
                </div>
              </div>
              <div
                style="padding-top: 4px;margin-left: 5px;cursor: pointer;"
                @click="handleExternalEdit(1)"
              >
                <feather-icon
                  :icon="externalEditable1 ? 'SaveIcon' : 'Edit3Icon'"
                  style="color: #7367f0"
                  size="20"
                />
              </div>
            </div>
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
              <b-form-input :value="weTitle" />
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea
                :value="weDescription"
                rows="5"
                readonly
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
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label>Load</label>
                <b-form-input
                  :value="loadEngage1"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration</label>
                <b-form-input
                  :value="durationEngage1"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE</label>
                <b-form-input
                  :value="fteEngage1"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(Demand)</label>
                <b-form-input
                  v-model="loadDemand1"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration(Demand)</label>
                <b-form-input
                  v-model="durationDemand1"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(Demand)</label>
                <b-form-input
                  v-model="fteDemand1"
                  type="number"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(R/E)</label>
                <b-form-input
                  v-model="loadEstimated1"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>Spent</label>
                <b-form-input
                  :value="parseFloat(loadEstimated1) - parseFloat(restData1)"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>%acc</label>
                <b-form-input
                  v-model="accData1"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>Rest To Do</label>
                <b-form-input
                  v-model="restData1"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(R/E)</label>
                <b-form-input
                  v-model="fteEstimated1"
                  type="number"
                  readonly
                />
              </div>
            </div>
            <div
              v-if="opt_skillset !== 0"
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
                  @input="effortChange('skill1', 0, $event)"
                />
              </div>
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
                v-model="selectedParents1"
                :options="activityList1"
                placeholder="Select Task"
                menu-props="auto"
                outlined
                multiple
                :disabled="true"
              />
            </div>
          </div>
          <div class="form-group">
            <b-button
              variant="outline-primary"
              @click="onClickEditPriorityBtn(1)"
            >
              Edit Priority
            </b-button>
            &nbsp;&nbsp;
            <b-button
              variant="outline-primary"
              @click="onClickEditPhaseBtn(1)"
            >
              Edit Phase
            </b-button>
          </div>
          <div
            v-if="showEditPriority1 === true"
            class="form-group"
          >
            <div class="select-box">
              <label>Priority</label>
              <v-select
                v-model="selectedPriority1"
                :options="priorityOptions"
                placeholder="Select Priority"
                menu-props="auto"
                outlined
                :disabled="true"
              />
            </div>
          </div>
          <div
            v-if="showEditPhase1 === true"
            class="form-group"
          >
            <div class="select-box">
              <label>Phase</label>
              <v-select
                v-model="selectedPhase1"
                :options="phaseList"
                placeholder="Select Phase"
                menu-props="auto"
                outlined
                :disabled="true"
              />
            </div>
          </div>
        </div>
        <div class="split-box flex-2">
          <div class="d-flex justify-content-end mb-1">
            <b-badge variant="danger">
              To merge
            </b-badge>
          </div>
          <div class="form-group header d-flex justify-content-between">
            <div>
              <label>ACTIVITY ID</label>
              <p v-if="selectedActivityData.phase">
                {{ toMerge ? toMerge.id : '' }}
              </p>
            </div>
            <div
              v-if="toMerge"
              style="display: flex"
            >
              <div>
                <div style="text-align: end;">
                  <label
                    v-if="!externalEditable2"
                    style="font-size: 14px; color: #898989;text-transform:none"
                  >
                    External System: {{ externalSystem2 }}
                  </label>
                  <div v-else>
                    <v-select
                      v-model="externalSystem2"
                      :options="['SAP', 'Jira', 'Devops', 'primavera', 'Deviprop']"
                      placeholder="Select External System"
                      outlined
                      @input="updateExternalID(2)"
                    />
                  </div>
                </div>
                <p
                  v-if="!externalEditable2"
                  style="color: #bbbbbb;font-size: 16px;"
                >
                  External Activity Id: {{ externalId2 }}
                </p>
                <div v-else>
                  <b-form-input
                    v-model="externalId2"
                    placeholder="Input External Activity Id"
                  />
                </div>
              </div>
              <div
                style="padding-top: 4px;margin-left: 5px;cursor: pointer;"
                @click="handleExternalEdit(2)"
              >
                <feather-icon
                  :icon="externalEditable2 ? 'SaveIcon' : 'Edit3Icon'"
                  style="color: #7367f0"
                  size="20"
                />
              </div>
            </div>
          </div>
          <div
            v-if="toMerge === null"
            class="form-group"
          >
            <div class="select-box">
              <label>Search activity</label>
              <v-select
                v-model="selectedActivity"
                :options="toMergeList"
                placeholder="Select an activity"
                outlined
                @input="onActivitySelect"
              />
            </div>
          </div>
          <div v-else>
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
                <b-form-input :value="toMerge.title" />
              </div>
            </div>
            <div class="form-group">
              <div class="select-box">
                <label>Description</label>
                <b-form-textarea
                  :value="toMerge.description"
                  rows="5"
                  readonly
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
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <!-- <div class="col-6">
                </div> -->
                <div class="col">
                  <label>Load</label>
                  <b-form-input
                    :value="loadEngage2"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>Duration</label>
                  <b-form-input
                    :value="durationEngage2"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>FTE</label>
                  <b-form-input
                    :value="fteEngage2"
                    readonly
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Load(Demand)</label>
                  <b-form-input
                    v-model="loadDemand2"
                    type="number"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>Duration(Demand)</label>
                  <b-form-input
                    v-model="durationDemand2"
                    type="number"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>FTE(Demand)</label>
                  <b-form-input
                    v-model="fteDemand2"
                    type="number"
                    readonly
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Load(R/E)</label>
                  <b-form-input
                    v-model="loadEstimated2"
                    type="number"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>Spent</label>
                  <b-form-input
                    :value="parseFloat(loadEstimated2) - parseFloat(restData2)"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>%acc</label>
                  <b-form-input
                    v-model="accData2"
                    type="number"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>Rest To Do</label>
                  <b-form-input
                    v-model="restData2"
                    type="number"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>FTE(R/E)</label>
                  <b-form-input
                    v-model="fteEstimated2"
                    type="number"
                    readonly
                  />
                </div>
              </div>
              <div
                v-if="opt_skillset !== 0"
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
                    @input="effortChange('skill2', 0, $event)"
                  />
                </div>
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
                  v-model="selectedParents2"
                  :options="activityList2"
                  placeholder="Select Task"
                  menu-props="auto"
                  outlined
                  multiple
                  :disabled="true"
                />
              </div>
            </div>
            <div class="form-group">
              <b-button
                variant="outline-primary"
                @click="onClickEditPriorityBtn(2)"
              >
                Edit Priority
              </b-button>
              &nbsp;&nbsp;
              <b-button
                variant="outline-primary"
                @click="onClickEditPhaseBtn(2)"
              >
                Edit Phase
              </b-button>
            </div>
            <div
              v-if="showEditPriority2 === true"
              class="form-group"
            >
              <div class="select-box">
                <label>Priority</label>
                <v-select
                  v-model="selectedPriority2"
                  :options="priorityOptions"
                  placeholder="Select Priority"
                  menu-props="auto"
                  outlined
                  :disabled="true"
                />
              </div>
            </div>
            <div
              v-if="showEditPhase2 === true"
              class="form-group"
            >
              <div class="select-box">
                <label>Phase</label>
                <v-select
                  v-model="selectedPhase2"
                  :options="phaseList"
                  placeholder="Select Phase"
                  menu-props="auto"
                  outlined
                  :disabled="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="split-box flex-3">
          <div class="d-flex justify-content-end mb-1">
            <b-badge variant="success">
              Merged
            </b-badge>
          </div>
          <div class="form-group header d-flex justify-content-end">
            <div style="display: flex">
              <div>
                <div style="text-align: end;">
                  <label
                    v-if="!externalEditable"
                    style="font-size: 14px; color: #898989;text-transform:none"
                  >
                    External System: {{ externalSystem }}
                  </label>
                  <div v-else>
                    <v-select
                      v-model="externalSystem"
                      :options="['SAP', 'Jira', 'Devops', 'primavera', 'Deviprop']"
                      placeholder="Select External System"
                      outlined
                      @input="updateExternalID(0)"
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
                @click="handleExternalEdit(0)"
              >
                <feather-icon
                  :icon="externalEditable ? 'SaveIcon' : 'Edit3Icon'"
                  style="color: #7367f0"
                  size="20"
                />
              </div>
            </div>
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
              <b-form-input :value="merged.title" />
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea
                :value="merged.description"
                rows="5"
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
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label>Total Load</label>
                <b-form-input
                  :value="loadEngage"
                  readonly
                />
              </div>
              <div class="col">
                <label>Total Duration</label>
                <b-form-input
                  :value="durationEngage"
                  readonly
                />
              </div>
              <div class="col">
                <label>Total FTE</label>
                <b-form-input
                  :value="fteEngage"
                  readonly
                />
              </div>
              <div class="col">
                <b-button
                  style="margin-top:20px"
                  variant="primary"
                  @click="handleCalculate"
                >
                  Calculate
                </b-button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(Demand)</label>
                <b-form-input
                  v-model="loadDemand"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration(Demand)</label>
                <b-form-input
                  v-model="durationDemand"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(Demand)</label>
                <b-form-input
                  v-model="fteDemand"
                  type="number"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(Real/Estimated)</label>
                <b-form-input
                  v-model="loadEstimated"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>Spent</label>
                <b-form-input
                  :value="spentData"
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
                  v-model="restData"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(Real/Estimated)</label>
                <b-form-input
                  v-model="fteEstimated"
                  type="number"
                  readonly
                />
              </div>
            </div>
            <div
              v-if="opt_skillset !== 0"
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
                placeholder="Select Task"
                menu-props="auto"
                outlined
                multiple
              />
            </div>
          </div>
          <div class="form-group">
            <b-button
              variant="outline-primary"
              @click="onClickEditPriorityBtn(0)"
            >
              Edit Priority
            </b-button>
            &nbsp;&nbsp;
            <b-button
              variant="outline-primary"
              @click="onClickEditPhaseBtn(0)"
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
        Merge
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BBadge, BButton, BFormInput, BFormTextarea, BModal,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BBadge,
    BButton,
    BFormInput,
    BFormTextarea,
    BModal,
    vSelect,
  },
  props: {
    selectedActivityData: {
      type: Object,
      default: () => { },
    },
    isOpen: Boolean,
    team_data: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      activity: {},
      weArray: [],
      show: false,
      selectedActivity: null,
      selectedEpic: null,
      toMerge: null,
      loadDemand: 0,
      loadDemand1: 0,
      loadDemand2: 0,
      loadEngage: 0,
      loadEngage1: 0,
      loadEngage2: 0,
      loadEstimated: 0,
      loadEstimated1: 0,
      loadEstimated2: 0,
      durationDemand: 0,
      durationDemand1: 0,
      durationDemand2: 0,
      durationEngage: 0,
      durationEngage1: 0,
      durationEngage2: 0,
      durationEstimated: 0,
      durationEstimated1: 0,
      durationEstimated2: 0,
      fteDemand: 0,
      fteDemand1: 0,
      fteDemand2: 0,
      fteEngage: 0,
      fteEngage1: 0,
      fteEngage2: 0,
      fteEstimated: 0,
      fteEstimated1: 0,
      fteEstimated2: 0,
      opt_skillset: 0,
      spentData: 0,
      priorityOptions: this.$store.state.globalState.priorityOptions,
      phaseList: this.$store.state.globalState.allPhaseTitleData,
      isValid: false,
      selectedPriority: "",
      selectedPhase: "",
      selectedPriority1: "",
      selectedPhase1: "",
      selectedPriority2: "",
      selectedPhase2: "",
      showEditPriority: false,
      showEditPhase: false,
      selectedParents: [],
      showEditPriority1: false,
      showEditPhase1: false,
      selectedParents1: [],
      showEditPriority2: false,
      showEditPhase2: false,
      selectedParents2: [],
      externalSystems: [],
      externalSystem: "Jira",
      externalId: "JIRA-",
      exSystemString: '',
      externalEditable: false,
      externalSystems1: [],
      externalSystem1: "Jira",
      externalId1: "JIRA-",
      exSystemString1: '',
      externalEditable1: false,
      externalSystems2: [],
      externalSystem2: "Jira",
      externalId2: "JIRA-",
      exSystemString2: '',
      externalEditable2: false
    }
  },
  computed: {
    weTitle() {
      return this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.title : ''
    },
    weDescription() {
      return this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.description : ''
    },
    activityList1() {
      const titleArr = []
      if (this.$store.state.globalState.portfolioDemandData.teams && this.$store.state.globalState.portfolioDemandData.teams.length > 0) {
        this.$store.state.globalState.portfolioDemandData.teams.forEach(t => {
          if (t.phases && t.phases.length > 0) {
            t.phases.forEach(p => {
              if (p.activities && p.activities.length > 0) {
                p.activities.forEach(a => {
                  if (this.selectedActivityData.phase !== undefined && this.selectedActivityData.phase.id !== a.id && this.selectedActivityData.phase.projectId === a.projectId) {
                    titleArr.push(a.title)
                  }
                })
              }
            })
          }
        })
      }
      if (this.$store.state.globalState.portfolioDemandData.teams && this.$store.state.globalState.portfolioDemandData.teams.length > 0) {
        this.$store.state.globalState.portfolioDemandData.teams.forEach(t => {
          if (t.phases && t.phases.length > 0) {
            t.phases.forEach(p => {
              if (p.activities && p.activities.length > 0) {
                p.activities.forEach(a => {
                  if (this.selectedActivityData.phase !== undefined && this.selectedActivityData.phase.id !== a.id && this.selectedActivityData.phase.projectId !== a.projectId) {
                    titleArr.push(a.title)
                  }
                })
              }
            })
          }
        })
      }
      return titleArr
    },
    activityList2() {
      const titleArr = []
      if (this.toMerged === null || this.toMerged === undefined) return []
      if (this.$store.state.globalState.portfolioDemandData.teams && this.$store.state.globalState.portfolioDemandData.teams.length > 0) {
        this.$store.state.globalState.portfolioDemandData.teams.forEach(t => {
          if (t.phases && t.phases.length > 0) {
            t.phases.forEach(p => {
              if (p.activities && p.activities.length > 0) {
                p.activities.forEach(a => {
                  if (this.toMerged !== undefined && this.toMerged.id !== a.id && this.toMerged.projectId === a.projectId) {
                    titleArr.push(a.title)
                  }
                })
              }
            })
          }
        })
      }
      if (this.$store.state.globalState.portfolioDemandData.teams && this.$store.state.globalState.portfolioDemandData.teams.length > 0) {
        this.$store.state.globalState.portfolioDemandData.teams.forEach(t => {
          if (t.phases && t.phases.length > 0) {
            t.phases.forEach(p => {
              if (p.activities && p.activities.length > 0) {
                p.activities.forEach(a => {
                  if (this.toMerged !== undefined && this.toMerged.id !== a.id && this.toMerged.projectId !== a.projectId) {
                    titleArr.push(a.title)
                  }
                })
              }
            })
          }
        })
      }
      return titleArr
    },
    activityList() {
      const titleArr = []
      titleArr.push(this.activityList1)
      titleArr.push(this.activityList2)
      return titleArr
    },
    totalEffortData1() {
      let load = 0
      let duration = 0
      let fte = 0
      this.effortData1.forEach(t => {
        load += parseInt(t.load ? t.load : 0, 10)
        duration += parseInt(t.duration ? t.duration : 0, 10)
        fte += parseInt(t.fte ? t.fte : 0, 10)
      })
      return { tLoad: load, tDuration: duration, tFte: fte }
    },
    totalEffortData2() {
      let load = 0
      let duration = 0
      let fte = 0
      this.effortData2.forEach(t => {
        load += parseInt(t.load ? t.load : 0, 10)
        duration += parseInt(t.duration ? t.duration : 0, 10)
        fte += parseInt(t.fte ? t.fte : 0, 10)
      })
      return { tLoad: load, tDuration: duration, tFte: fte }
    },
    totalEffortData3() {
      let load = 0
      let duration = 0
      let fte = 0
      this.effortData3.forEach(t => {
        load += parseInt(t.load ? t.load : 0, 10)
        duration += parseInt(t.duration ? t.duration : 0, 10)
        fte += parseInt(t.fte ? t.fte : 0, 10)
      })
      return { tLoad: load, tDuration: duration, tFte: fte }
    },
    effortData3() {
      const d1 = JSON.parse(JSON.stringify(this.effortData1))
      const d2 = JSON.parse(JSON.stringify(this.effortData2))
      const data = [...d1, ...d2]
      const rd = []
      data.forEach(t => {
        const ad = rd.find(t1 => t1.skill === t.skill)
        if (ad) {
          ad.load = parseInt(t.load ? t.load : 0, 10) + parseInt(ad.load ? ad.load : 0, 10)
          ad.duration = parseInt(t.duration ? t.duration : 0, 10) + parseInt(ad.duration ? ad.duration : 0, 10)
          ad.fte = parseInt(t.fte ? t.fte : 0, 10) + parseInt(ad.fte ? ad.fte : 0, 10)
        } else {
          rd.push(t)
        }
      })
      return rd
    },
    merged() {
      return { ...this.selectedActivityData.phase }
    },
    toMergeList() {
      const titleArr = []
      if (this.$store.state.globalState.portfolioDemandData.teams && this.$store.state.globalState.portfolioDemandData.teams.length > 0) {
        this.$store.state.globalState.portfolioDemandData.teams.forEach(t => {
          if (t.phases && t.phases.length > 0) {
            t.phases.forEach(p => {
              if (p.activities && p.activities.length > 0) {
                p.activities.forEach(a => {
                  if (this.selectedActivityData.phase !== undefined && this.selectedActivityData.phase.id !== a.id) {
                    titleArr.push(a.title)
                  }
                })
              }
            })
          }
        })
      }
      return titleArr
    },
    c_TeamTitle() {
      return this.selectedActivityData.team.title
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
      }
    },
    '$store.globalState.selectedActivityParents': {
      immediate: true,
      handler(newVal) {
        this.selectedParents1 = newVal
        this.selectedParents.push(newVal)
      }
    },
    '$store.globalState.selectedActivityParents2': {
      immediate: true,
      handler(newVal) {
        this.selectedParents2 = newVal
        this.selectedParents.push(newVal)
      }
    }
  },
  methods: {
    async initializeData(newVal) {
      console.log("SD:", newVal)
      const orgData = this.$store.state.globalState.allOrgData
      const { orgId } = this.$store.state.globalState.selectedNavObj
      orgData.map(item => {
        if (item.id === orgId) {
          this.opt_skillset = item.opt_skillset
        }
        return null
      })
      this.loadEngage1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.load_engage : 0
      this.durationEngage1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.duration_engage : 0
      this.fteEngage1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.fte_engage : 0
      this.loadDemand1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.load_demand : 0
      this.durationDemand1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.duration_demand : 0
      this.fteDemand1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.fte_demand : 0
      this.loadEstimated1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.load_estimated : 0
      this.durationEstimated1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.duration_estimated : 0
      this.fteEstimated1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.fte_estimated : 0
      this.accData1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.acc : 0
      this.restData1 = (1 - (parseFloat(this.accData1) / 100)) * parseFloat(this.loadEstimated1)
      this.selectedPriority1 = this.selectedActivityData.phase !== undefined ? this.priorityOptions[this.selectedActivityData.phase.priority - 1] : 0
      this.selectedPhase1 = this.selectedActivityData.phase !== undefined ? this.$store.state.globalState.allPhaseTitleData[this.selectedActivityData.phase.gate - 1] : this.$store.state.globalState.allPhaseTitleData[0]
      const allDepends = this.$store.state.globalState.weDependsList
      const parents = allDepends.filter(t => t.childid === this.selectedActivityData.phase.id)
      parents.forEach(parent => {
        const foundParent = this.$store.state.globalState.allWeData.find(t => t.id === parseInt(parent.parentid, 10))
        if (foundParent && this.selectedParents.indexOf(foundParent.title) < 0) {
          this.selectedParents1.push(foundParent.title)
        }
      })
      this.toMerge = null
      const otype = this.$store.state.globalState.selectedNavObj.type
      let extype = ''
      switch (otype) {
        case 'program':
          extype = 'PROG'
          break
        case 'project':
          extype = 'PROJ'
          break
        case 'subproject':
          extype = 'SUBPROJ'
          break
        default:
          break
      }
      let exID = ''
      const value = this.externalSystem1
      const exData = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.externalSystem : null
      if (exData !== null) {
        switch (value) {
          case 'Jira':
            exID = exData.jira_idprogram
            break
          case 'SAP':
            exID = exData.sap_idprogram
            break
          case 'Devops':
            exID = exData.devops_idprogram
            break
          case 'primavera':
            exID = exData.primavera_idprogram
            break
          case 'Deviprop':
            exID = exData.deviprop_idprogram
            break
          default:
            break
        }
        if (exID === null) this.externalId1 = `${value.toUpperCase()}-${extype}-`
        else this.externalId1 = exID
      } else this.externalId1 = `${value.toUpperCase()}-${extype}-${exID}`
      this.externalId = this.externalId1
      this.externalId2 = this.externalId1
    },
    effortChange1(field, index, e) {
      if (field === "skill" && !e) {
        this.effortData1.splice(index, 1)
      } else {
        this.effortData1[index][field] = e
      }
    },
    effortChange2(field, index, e) {
      if (field === "skill" && !e) {
        this.effortData2.splice(index, 1)
      } else {
        this.effortData2[index][field] = e
      }
    },
    effortChange3(field, index, e) {
      if (field === "skill" && !e) {
        this.effortData3.splice(index, 1)
      } else {
        this.effortData3[index][field] = e
      }
    },
    onEffortAdd1() {
      this.effortData1.push({
        skill: null,
        load: null,
        duration: null,
        fte: null
      })
    },
    onEffortAdd2() {
      this.effortData2.push({
        skill: null,
        load: null,
        duration: null,
        fte: null
      })
    },
    onEffortAdd3() {
      this.effortData3.push({
        skill: null,
        load: null,
        duration: null,
        fte: null
      })
    },
    hideModal() {
      this.$refs['my-modal'].hide()
      this.toMerge = null
    },
    async handleSave() {
      if (this.toMerge === null) {
        this.$toast.warning('Please Select toMerge Activity!')
      } else {
        const progId = this.selectedActivityData.phase.projectId
        const jobId = this.$store.state.globalState.allJobTitleData.find(job => job.title === this.selectedActivityData.phase.job_name).id
        const teams = this.$store.state.globalState.allTeamTitleData.find(team => team.title === this.selectedActivityData.phase.team_name)
        this.merged.priority = this.$store.state.globalState.priorityOptions.findIndex(p => p === this.selectedPriority) + 1
        this.merged.phase = this.$store.state.globalState.allPhaseTitleData.findIndex(phase => phase === this.selectedPhase) + 1
        let selectedParentIDs = []
        this.$store.state.globalState.allWeData.forEach(a => {
          const selected = this.selectedParents.indexOf(a.title) > 0 ? a.id : -1
          if (selected > 0) selectedParentIDs.push(selected)
        })
        selectedParentIDs = selectedParentIDs.filter((value, index, array) => array.indexOf(value) === index)
        this.merged.parents = this.selectedParentIDs
        let teamId = 0
        if (teams !== undefined) teamId = teams.id
        const toMergedId1 = this.selectedActivityData.phase.id
        const toMergedId2 = this.toMerge.id
        const payloads = {
          toMergedId1,
          toMergedId2,
          merged: this.merged,
          job_id: jobId < 0 ? 1 : jobId,
          team_id: teamId < 0 ? 1 : teamId,
          progId
        }
        await this.$store.dispatch('globalState/handle_activity_merge', payloads)
        await this.$store.dispatch('globalState/load_org_data')
        const data = this.$store.state.globalState.selectedNavObj
        await this.$store.dispatch('globalState/get_from_selected_nav_id', {
          data
        })
        await this.$store.dispatch('globalState/get_all_we_depends')
        await this.$store.dispatch('globalState/get_all_workelements')
        this.toMerge = null
        this.$refs['my-modal'].hide()
        this.$store.commit('globalState/HIDE_ACTIVITY_DETAIL_MODAL')
      }
    },
    async onActivitySelect(selectedActivityId) {
      let selectedActivity = {}
      this.$store.state.globalState.allWeData.forEach(a => {
        if (selectedActivityId === a.title) {
          selectedActivity = a
        }
      })
      this.toMerge = selectedActivity
      const allDepends = this.$store.state.globalState.weDependsList
      const parents = allDepends.filter(t => t.childid === selectedActivity.id)
      parents.forEach(parent => {
        const foundParent = this.$store.state.globalState.allWeData.find(t => t.id === parseInt(parent.parentid, 10))
        if (foundParent && this.selectedParents.indexOf(foundParent.title) < 0) {
          this.selectedParents2.push(foundParent.title)
        }
      })
      this.selectedParents = []
      this.selectedParents.push(this.selectedParents1)
      this.selectedParents.push(this.selectedParents2)
      this.loadDemand2 = selectedActivity.effort.load_demand
      this.loadEngage2 = selectedActivity.effort.load_engage
      this.loadEstimated2 = selectedActivity.effort.load_estimated
      this.durationDemand2 = selectedActivity.effort.duration_demand
      this.durationEngage2 = selectedActivity.effort.duration_engage
      this.durationEstimated2 = selectedActivity.effort.duration_estimated
      this.fteDemand2 = selectedActivity.effort.fte_demand
      this.fteEngage2 = selectedActivity.effort.fte_engage
      this.fteEstimated2 = selectedActivity.effort.fte_estimated
      this.accData2 = selectedActivity.acc
      this.restData2 = (1 - (parseFloat(this.accData2) / 100)) * parseFloat(this.loadEstimated2)
      this.loadDemand = parseFloat(this.loadDemand1) + parseFloat(this.loadDemand2)
      this.loadEngage = parseFloat(this.loadEngage1) + parseFloat(this.loadEngage2)
      this.loadEstimated = parseFloat(this.loadEstimated1) + parseFloat(this.loadEstimated2)
      this.durationDemand = parseFloat(this.durationDemand1) + parseFloat(this.durationDemand2)
      this.durationEngage = parseFloat(this.durationEngage1) + parseFloat(this.durationEngage2)
      this.durationEstimated = parseFloat(this.durationEstimated1) + parseFloat(this.durationEstimated2)
      this.fteDemand = (parseFloat(this.loadDemand1) + parseFloat(this.loadDemand2)) / (parseFloat(this.loadDemand1) / parseFloat(this.fteDemand1) + parseFloat(this.loadDemand2) / parseFloat(this.fteDemand2))
      this.fteEngage = (parseFloat(this.loadEngage1) + parseFloat(this.loadEngage2)) / (parseFloat(this.loadEngage1) / parseFloat(this.fteEngage1) + parseFloat(this.loadEngage2) / parseFloat(this.fteEngage2))
      this.fteEstimated = (parseFloat(this.loadEstimated1) + parseFloat(this.loadEstimated2)) / (parseFloat(this.loadEstimated1) / parseFloat(this.fteEstimated1) + parseFloat(this.loadEstimated2) / parseFloat(this.fteEstimated2))
      this.spentData = (parseFloat(this.loadEstimated1) + parseFloat(this.loadEstimated2)) - (parseFloat(this.restData1) + parseFloat(this.restData2))
      this.restData = parseFloat(this.loadEstimated) - parseFloat(this.spentData)
      this.accData = (parseFloat(this.spentData) / parseFloat(this.loadEstimated)) * 100
      this.selectedPriority2 = selectedActivity !== undefined ? this.priorityOptions[selectedActivity.priority - 1] : 0
      this.selectedPhase2 = selectedActivity !== undefined ? this.$store.state.globalState.allPhaseTitleData[selectedActivity.gate - 1] : this.$store.state.globalState.allPhaseTitleData[0]
      this.merged.effort = {
        load_demand: this.loadDemand,
        load_engage: this.loadEngage,
        load_reel: this.loadEstimated,
        duration_demand: this.durationDemand,
        duration_engage: this.durationEngage,
        duration_reel: this.durationEstimated,
        fte_demand: this.fteDemand,
        fte_engage: this.fteEngage,
        fte_reel: this.fteEstimated
      }
      this.merged.acc = this.accData
      // this.merged.title = ''
      this.merged.title = this.selectedActivityData.phase.title === null || this.selectedActivityData.phase.title === undefined
      ? selectedActivity.title : this.selectedActivityData.phase.title.concat(' - ') + selectedActivity.title
      this.merged.description = this.selectedActivityData.phase.description === null || this.selectedActivityData.phase.description === undefined
      ? selectedActivity.description : this.selectedActivityData.phase.description.concat(' - ') + selectedActivity.description
      const otype = this.$store.state.globalState.selectedNavObj.type
      let extype = ''
      switch (otype) {
        case 'program':
          extype = 'PROG'
          break
        case 'project':
          extype = 'PROJ'
          break
        case 'subproject':
          extype = 'SUBPROJ'
          break
        default:
          break
      }
      let exID = ''
      const value = this.externalSystem2
      const exData = selectedActivity.phase.externalSystem
      if (exData !== null) {
        switch (value) {
          case 'Jira':
            exID = exData.jira_idprogram
            break
          case 'SAP':
            exID = exData.sap_idprogram
            break
          case 'Devops':
            exID = exData.devops_idprogram
            break
          case 'primavera':
            exID = exData.primavera_idprogram
            break
          case 'Deviprop':
            exID = exData.deviprop_idprogram
            break
          default:
            break
        }
        if (exID === null) this.externalId2 = `${value.toUpperCase()}-${extype}-`
        else this.externalId2 = exID
      } else this.externalId2 = `${value.toUpperCase()}-${extype}-${exID}`
    },
    handleCalculate() {
      if (this.fteEngage !== '' && this.durationEngage !== '' && this.loadEngage !== '') {
        if (parseFloat(this.loadEngage) === parseFloat(this.durationEngage) * parseFloat(this.fteEngage)) {
          this.showToast('success', 'All values of Merged are valid')
          this.isValid = true
        } else {
          this.showToast('warning', 'Please enter valid values for Merged')
          this.isValid = false
        }
      } else if (this.fteEngage !== '' && this.durationEngage !== '' && this.loadEngage === '') {
        this.loadEngage = parseFloat(this.durationEngage) * parseFloat(this.fteEngage)
        this.isValid = true
      } else if (this.loadEngage !== '' && this.durationEngage !== '' && this.durationEngage !== 0 && this.fteEngage === '') {
        this.fteEngage = parseFloat(this.loadEngage) / parseFloat(this.durationEngage)
        this.isValid = true
      } else if (this.loadEngage !== '' && this.fteEngage !== '' && this.fteEngage !== 0 && this.durationEngage === '') {
        this.durationEngage = parseFloat(this.loadEngag2) / parseFloat(this.fteEngage)
        this.isValid = true
      } else {
        this.showToast('warning', 'Please enter valid values for Merged')
        this.isValid = false
      }
    },
    updateExternalID(index) {
      let type = ''
      switch (this.$store.state.globalState.selectedNavObj.type) {
        case 'program':
          type = 'PROG'
          break
        case 'project':
          type = 'PROJ'
          break
        case 'subproject':
          type = 'SUBPROJ'
          break
        default:
          break
      }
      let value = 0
      const exData1 = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.externalSystem : null
      const exData2 = this.toMerge !== undefined ? this.toMerge.externalSystem : null
      let exID = ''
      switch (index) {
        case 0:
          value = this.externalSystem
          this.externalId = `${value.toUpperCase()}-${type}-${exID}`
          break
        case 1:
          value = this.externalSystem1
          if (exData1 !== null) {
            switch (value) {
              case 'Jira':
                exID = exData1.jira_idprogram
                break
              case 'SAP':
                exID = exData1.sap_idprogram
                break
              case 'Devops':
                exID = exData1.devops_idprogram
                break
              case 'primavera':
                exID = exData1.primavera_idprogram
                break
              case 'Deviprop1':
                exID = exData1.deviprop_idprogram
                break
              default:
                break
            }
            if (exID === null) this.externalId1 = `${value.toUpperCase()}-${type}-`
            else this.externalId1 = exID
          } else this.externalId1 = `${value.toUpperCase()}-${type}-${exID}`
          break
        case 2:
          value = this.externalSystem2
          if (exData2 !== null) {
            switch (value) {
              case 'Jira':
                exID = exData2.jira_idprogram
                break
              case 'SAP':
                exID = exData2.sap_idprogram
                break
              case 'Devops':
                exID = exData2.devops_idprogram
                break
              case 'primavera':
                exID = exData2.primavera_idprogram
                break
              case 'Deviprop':
                exID = exData2.deviprop_idprogram
                break
              default:
                break
            }
            if (exID === null) this.externalId2 = `${value.toUpperCase()}-${type}-`
            else this.externalId2 = exID
          } else this.externalId2 = `${value.toUpperCase()}-${type}-${exID}`
          break
        default:
          break
      }
    },
    handleExternalEdit(type) {
      switch (type) {
        case 0:
          this.externalEditable = !this.externalEditable
          this.externalSystems.push(this.externalSystem)
          this.externalSystems = this.externalSystems.filter((value, index, array) => array.indexOf(value) === index)
          this.exSystemString = this.externalSystems.toString()
          break
        case 1:
          this.externalEditable1 = !this.externalEditable1
          this.externalSystems1.push(this.externalSystem1)
          this.externalSystems1 = this.externalSystems1.filter((value, index, array) => array.indexOf(value) === index)
          this.exSystemString1 = this.externalSystems1.toString()
          break
        case 2:
          this.externalEditable2 = !this.externalEditable2
          this.externalSystems2.push(this.externalSystem2)
          this.externalSystems2 = this.externalSystems2.filter((value, index, array) => array.indexOf(value) === index)
          this.exSystemString2 = this.externalSystems2.toString()
          break
        default:
          break
      }
    },
    onClickEditPriorityBtn(value) {
      switch (value) {
        case 0:
          this.showEditPriority = !this.showEditPriority
          break
        case 1:
          this.showEditPriority1 = !this.showEditPriority1
          break
        case 2:
          this.showEditPriority2 = !this.showEditPriority2
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
    onClickEditPhaseBtn(value) {
      switch (value) {
        case 0:
          this.showEditPhase = !this.showEditPhase
          break
        case 1:
          this.showEditPhase1 = !this.showEditPhase1
          break
        case 2:
          this.showEditPhase2 = !this.showEditPhase2
          break
        default:
          break
      }
    },
  }
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
