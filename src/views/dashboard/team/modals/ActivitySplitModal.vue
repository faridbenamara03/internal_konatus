<template>
  <b-modal
    id="modal-activity-split"
    ref="my-modal"
    title="Split Activity"
    centered
    no-fade
    hide-backdrop
    static
    size="xl"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Split Activity
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
        <div class="split-box flex-3">
          <div class="d-flex justify-content-end mb-1">
            <b-badge variant="danger">
              To split
            </b-badge>
          </div>
          <div class="form-group header d-flex justify-content-between">
            <div>
              <label>WE ID</label>
              <p v-if="selectedActivityData.phase">
                {{ selectedActivityData.phase.id }}
              </p>
            </div>
            <div style="display: flex">
              <div class="w-30">
                <label>External System</label>
                <v-select
                  v-model="externalSystem"
                  :options="['SAP', 'Jira', 'Devops', 'primavera', 'Deviprop']"
                  placeholder="Select External System"
                  outlined
                  @input="updateExternalID(0)"
                />
              </div>
              <div class="w-70 pl-1">
                <label>System ID</label>
                <div class="d-flex">
                  <b-form-input
                    v-model="externalId"
                    placeholder="Input External We Id"
                    style="min-width:200px"
                  />
                  <div
                    style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                    @click="handleUpdateExternal(0)"
                  >
                    <feather-icon
                      :icon="'SaveIcon'"
                      style="color: #7367f0"
                      size="20"
                    />
                  </div>
                  <div
                    style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                    @click="handleDeleteExternal(0)"
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
            </div>
            <div class="row">
              <div class="col">
                <label>Load(Demand)</label>
                <b-form-input
                  :value="loadDemand"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration(Demand)</label>
                <b-form-input
                  :value="durationDemand"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(Demand)</label>
                <b-form-input
                  :value="fteDemand"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(R/E)</label>
                <b-form-input
                  :value="loadEstimated"
                  readonly
                />
              </div>
              <div class="col">
                <label>Spent</label>
                <b-form-input
                  :value="parseFloat(loadEstimated) - (1 - parseFloat(accData) / 100) * parseFloat(loadEstimated)"
                  readonly
                />
              </div>
              <div class="col">
                <label>%acc</label>
                <b-form-input
                  :value="accData"
                  readonly
                />
              </div>
              <div class="col">
                <label>Rest To Do</label>
                <b-form-input
                  :value="(1 - parseFloat(accData) / 100) * parseFloat(loadEstimated)"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(R/E)</label>
                <b-form-input
                  :value="fteEstimated"
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
        <div class="split-box flex-2">
          <div class="d-flex justify-content-end mb-1">
            <b-badge variant="success">
              Splited
            </b-badge>
          </div>
          <div class="form-group header d-flex justify-content-end">
            <div style="display: flex">
              <div class="w-30">
                <label>External System</label>
                <v-select
                  v-model="externalSystem1"
                  :options="['SAP', 'Jira', 'Devops', 'primavera', 'Deviprop']"
                  placeholder="Select External System"
                  outlined
                  @input="updateExternalID(1)"
                />
              </div>
              <div class="w-70 pl-1">
                <label>System ID</label>
                <div class="d-flex">
                  <b-form-input
                    v-model="externalId1"
                    placeholder="Input External We Id"
                    style="min-width:200px"
                  />
                  <div
                    style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                    @click="handleUpdateExternal(1)"
                  >
                    <feather-icon
                      :icon="'SaveIcon'"
                      style="color: #7367f0"
                      size="20"
                    />
                  </div>
                  <div
                    style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                    @click="handleDeleteExternal(1)"
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
              <b-form-input
                id="input-title1"
                v-model="title1"
                aria-describedby="input-title1-feedback"
                :state="title1Valid"
              />
              <b-form-invalid-feedback
                id="input-title1-feedback"
                style="float:left"
              >
                Add a new title
              </b-form-invalid-feedback>
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea
                id="input-description1"
                v-model="description1"
                aria-describedby="input-description1-feedback"
                :state="description1Valid"
                rows="5"
              />
              <b-form-invalid-feedback
                id="input-description1-feedback"
                style="float:left"
              >
                Add a new description
              </b-form-invalid-feedback>
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
                  v-model="loadEngage1"
                  type="number"
                />
              </div>
              <div class="col">
                <label>Duration</label>
                <b-form-input
                  v-model="durationEngage1"
                  type="number"
                />
              </div>
              <div class="col">
                <label>FTE</label>
                <b-form-input
                  v-model="fteEngage1"
                  type="number"
                />
              </div>
              <div class="col">
                <b-button
                  style="margin-top:20px"
                  variant="primary"
                  @click="handleCalculate(1)"
                >
                  Calculate
                </b-button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(Demand)</label>
                <b-form-input
                  :value="loadDemand1"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration(Demand)</label>
                <b-form-input
                  :value="durationDemand1"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(Demand)</label>
                <b-form-input
                  :value="fteDemand1"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(R/E)</label>
                <b-form-input
                  :value="loadEstimated1"
                  readonly
                />
              </div>
              <div class="col">
                <label>Spent</label>
                <b-form-input
                  :value="parseFloat(loadEstimated1) - (1 - parseFloat(accData1) / 100) * parseFloat(loadEstimated1)"
                  readonly
                />
              </div>
              <div class="col">
                <label>%acc</label>
                <b-form-input
                  :value="accData1"
                  readonly
                />
              </div>
              <div class="col">
                <label>Rest To Do</label>
                <b-form-input
                  :value="(1 - parseFloat(accData1) / 100) * parseFloat(loadEstimated1)"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(R/E)</label>
                <b-form-input
                  :value="fteEstimated1"
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
              />
            </div>
          </div>
        </div>
        <div class="split-box flex-2">
          <div class="d-flex justify-content-end mb-1">
            <b-badge variant="success">
              Splited
            </b-badge>
          </div>
          <div class="form-group header d-flex justify-content-end">
            <div style="display: flex">
              <div class="w-30">
                <label>External System</label>
                <v-select
                  v-model="externalSystem2"
                  :options="['SAP', 'Jira', 'Devops', 'primavera', 'Deviprop']"
                  placeholder="Select External System"
                  outlined
                  @input="updateExternalID(2)"
                />
              </div>
              <div class="w-70 pl-1">
                <label>System ID</label>
                <div class="d-flex">
                  <b-form-input
                    v-model="externalId2"
                    placeholder="Input External We Id"
                    style="min-width:200px"
                  />
                  <div
                    style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                    @click="handleUpdateExternal(2)"
                  >
                    <feather-icon
                      :icon="'SaveIcon'"
                      style="color: #7367f0"
                      size="20"
                    />
                  </div>
                  <div
                    style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                    @click="handleDeleteExternal(2)"
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
              <b-form-input
                id="input-title2"
                v-model="title2"
                aria-describedby="input-title2-feedback"
                :state="title2Valid"
              />
              <b-form-invalid-feedback
                id="input-title2-feedback"
                style="float:left"
              >
                Add a new title
              </b-form-invalid-feedback>
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea
                id="input-description2"
                v-model="description2"
                aria-describedby="input-description2-feedback"
                :state="description2Valid"
                rows="5"
              />
              <b-form-invalid-feedback
                id="input-description2 -feedback"
                style="float:left"
              >
                Add a new description
              </b-form-invalid-feedback>
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
                  v-model="loadEngage2"
                  type="number"
                />
              </div>
              <div class="col">
                <label>Duration</label>
                <b-form-input
                  v-model="durationEngage2"
                  type="number"
                />
              </div>
              <div class="col">
                <label>FTE</label>
                <b-form-input
                  v-model="fteEngage2"
                  type="number"
                />
              </div>
              <div class="col">
                <b-button
                  style="margin-top:20px"
                  variant="primary"
                  @click="handleCalculate(2)"
                >
                  Calculate
                </b-button>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(Demand)</label>
                <b-form-input
                  :value="loadDemand2"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration(Demand)</label>
                <b-form-input
                  :value="durationDemand2"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(Demand)</label>
                <b-form-input
                  :value="fteDemand2"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Load(R/E)</label>
                <b-form-input
                  :value="loadEstimated2"
                  readonly
                />
              </div>
              <div class="col">
                <label>Spent</label>
                <b-form-input
                  :value="parseFloat(loadEstimated2) - (1 - parseFloat(accData2) / 100) * parseFloat(loadEstimated2)"
                  readonly
                />
              </div>
              <div class="col">
                <label>%acc</label>
                <b-form-input
                  :value="accData2"
                  readonly
                />
              </div>
              <div class="col">
                <label>Rest To Do</label>
                <b-form-input
                  :value="(1 - parseFloat(accData2) / 100) * parseFloat(loadEstimated2)"
                  readonly
                />
              </div>
              <div class="col">
                <label>FTE(R/E)</label>
                <b-form-input
                  :value="fteEstimated2"
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
      <!-- :disabled="!isFirstValid || !isSecondValid" -->
      <b-button
        variant="primary"
        @click="handleSave"
      >
        Split
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BBadge, BButton, BFormInput, BFormTextarea, BModal, BFormInvalidFeedback
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
    BFormInvalidFeedback,
    vSelect,
  },
  props: {
    selectedActivityData: {
      type: Object,
      default: () => { },
    },
    isOpen: Boolean,
  },
  data() {
    return {
      activity: {},
      show: false,
      selectedEpic: null,
      title1: '',
      description1: '',
      title2: '',
      description2: '',
      loadEngage: 0,
      durationEngage: 0,
      fteEngage: 0,
      loadEngage1: 0,
      durationEngage1: 0,
      fteEngage1: 0,
      loadEngage2: 0,
      durationEngage2: 0,
      fteEngage2: 0,
      accData: 0,
      accData1: 0,
      accData2: 0,
      loadDemand: 0,
      durationDemand: 0,
      fteDemand: 0,
      loadDemand1: 0,
      durationDemand1: 0,
      fteDemand1: 0,
      loadDemand2: 0,
      durationDemand2: 0,
      fteDemand2: 0,
      loadEstimated: 0,
      durationEstimated: 0,
      fteEstimated: 0,
      loadEstimated1: 0,
      durationEstimated1: 0,
      fteEstimated1: 0,
      loadEstimated2: 0,
      durationEstimated2: 0,
      fteEstimated2: 0,
      opt_skillset: 0,
      newActivityId1: Math.ceil(Math.random() * 1000000),
      newActivityId2: Math.ceil(Math.random() * 1000000),
      effortData1: [
        {
          skill: null,
          load: null,
          duration: null,
          fte: null
        }
      ],
      effortData2: [
        {
          skill: null,
          load: null,
          duration: null,
          fte: null
        }
      ],
      priorityOptions: this.$store.state.globalState.priorityOptions,
      phaseList: this.$store.state.globalState.allPhaseTitleData,
      isSecondValid: false,
      isFirstValid: false,
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
      externalId: "",
      externalSystem: "Jira",
      externalSystems1: [],
      externalId1: "",
      externalSystem1: "Jira",
      externalSystems2: [],
      externalId2: "",
      externalSystem2: "Jira",
    }
  },
  computed: {
    weTitle() {
      return this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.title : ''
    },
    weDescription() {
      return this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.description : ''
    },
    activityList() {
      const titleArr = []
      this.$store.state.globalState.allWeData.forEach(a => {
        if (this.selectedActivityData.phase.id === a.id && this.selectedActivityData.phase.projectId === a.projectId) {
          titleArr.push(a.title)
        }
      })
      this.$store.state.globalState.allWeData.forEach(a => {
        if (this.selectedActivityData.phase.id === a.id && this.selectedActivityData.phase.projectId !== a.projectId) {
          titleArr.push(a.title)
        }
      })
      return titleArr
    },
    totalEffortData1() {
      let load = 0
      let duration = 0
      let fte = 0
      if (this.effortData1 !== undefined) {
        this.effortData1.forEach(t => {
          load += parseInt(t.load ? t.load : 0, 10)
          duration += parseInt(t.duration ? t.duration : 0, 10)
          fte += parseInt(t.fte ? t.fte : 0, 10)
        })
      }
      return { tLoad: load, tDuration: duration, tFte: fte }
    },
    totalEffortData2() {
      let load = 0
      let duration = 0
      let fte = 0
      if (this.effortData2 !== undefined) {
        this.effortData2.forEach(t => {
          load += parseInt(t.load ? t.load : 0, 10)
          duration += parseInt(t.duration ? t.duration : 0, 10)
          fte += parseInt(t.fte ? t.fte : 0, 10)
        })
      }
      return { tLoad: load, tDuration: duration, tFte: fte }
    },
    totalEffortData3() {
      let load = 0
      let duration = 0
      let fte = 0
      if (this.effortData2 !== undefined) {
        this.effortData3.forEach(t => {
          load += parseInt(t.load ? t.load : 0, 10)
          duration += parseInt(t.duration ? t.duration : 0, 10)
          fte += parseInt(t.fte ? t.fte : 0, 10)
        })
      }
      return { tLoad: load, tDuration: duration, tFte: fte }
    },
    c_TeamTitle() {
      return this.selectedActivityData.team !== undefined ? this.selectedActivityData.team.title : ''
    },
    effortData3() {
      const dt = JSON.parse(JSON.stringify(this.effortData1))
      const data = []
      if (dt !== undefined) {
        dt.forEach(t => {
          const d = { ...t }
          const exist = this.effortData2.find(t1 => t1.skill === t.skill)
          if (exist) {
            d.load = (parseInt(t.load ? t.load : 0, 10) - parseInt(exist.load ? exist.load : 0, 10)) < 0 ? 0 : (parseInt(t.load ? t.load : 0, 10) - parseInt(exist.load ? exist.load : 0, 10))
            d.duration = (parseInt(t.duration ? t.duration : 0, 10) - parseInt(exist.duration ? exist.duration : 0, 10)) < 0 ? 0 : (parseInt(t.duration ? t.duration : 0, 10) - parseInt(exist.duration ? exist.duration : 0, 10))
            d.fte = (parseInt(t.fte ? t.fte : 0, 10) - parseInt(exist.fte ? exist.fte : 0, 10)) < 0 ? 0 : (parseInt(t.fte ? t.fte : 0, 10) - parseInt(exist.fte ? exist.fte : 0, 10))
          }
          if (d.load + d.duration + d.fte > 0) data.push(d)
        })
      }
      return data
    },
    title1Valid() {
      return this.title1 !== undefined && this.title1 !== ''
    },
    title2Valid() {
      return this.title2 !== undefined && this.title2 !== ''
    },
    description1Valid() {
      return this.description1 !== undefined && this.description1 !== ''
    },
    description2Valid() {
      return this.description2 !== undefined && this.description2 !== ''
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
    data: {
      immediate: true,
      handler(newVal) {
        console.log("newData:", newVal)
      }
    }
  },
  methods: {
    async initializeData(newVal) {
      console.log("SD:", newVal)
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
      this.loadEngage = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.load_engage : 0
      this.durationEngage = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.duration_engage : 0
      this.fteEngage = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.fte_engage : 0
      this.loadDemand = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.load_demand : 0
      this.durationDemand = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.duration_demand : 0
      this.fteDemand = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.fte_demand : 0
      this.loadEstimated = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.load_estimated : 0
      this.durationEstimated = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.duration_estimated : 0
      this.fteEstimated = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.effort.fte_estimated : 0
      this.accData = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.acc : 0
      this.accData1 = this.accData
      this.accData2 = this.accData
      this.loadEngage1 = parseInt(this.loadEngage / 2, 10)
      this.durationEngage1 = parseInt(this.durationEngage / 2, 10)
      this.fteEngage1 = this.fteEngage
      this.loadEngage2 = this.loadEngage - this.loadEngage1
      this.durationEngage2 = this.durationEngage - this.durationEngage1
      this.fteEngage2 = this.fteEngage
      this.selectedPriority = this.selectedActivityData.phase !== undefined ? this.priorityOptions[this.selectedActivityData.phase.priority - 1] : 0
      this.selectedPhase = this.selectedActivityData.phase !== undefined ? this.$store.state.globalState.allPhaseTitleData[this.selectedActivityData.phase.gate - 1] : this.$store.state.globalState.allPhaseTitleData[0]
      this.selectedPriority1 = this.selectedPriority
      this.selectedPriority2 = this.selectedPriority
      this.selectedPhase1 = this.selectedPhase
      this.selectedPhase2 = this.selectedPhase
      this.loadDemand1 = parseInt(this.loadDemand / 2, 10)
      this.durationDemand1 = parseInt(this.durationDemand / 2, 10)
      this.fteDemand1 = this.fteDemand
      this.loadDemand2 = this.loadDemand - this.loadDemand1
      this.durationDemand2 = this.durationDemand - this.durationDemand1
      this.fteDemand2 = this.fteDemand
      this.loadEstimated1 = parseInt(this.loadEstimated / 2, 10)
      this.durationEstimated1 = parseInt(this.durationEstimated / 2, 10)
      this.fteEstimated1 = this.fteEstimated
      this.loadEstimated2 = this.loadEstimated - this.loadEstimated1
      this.durationEstimated2 = this.durationEstimated - this.durationEstimated1
      this.fteEstimated2 = this.fteEstimated
      const allDepends = this.$store.state.globalState.weDependsList
      this.selectedParents = []
      this.selectedParents1 = []
      this.selectedParents2 = []
      if (this.selectedActivityData.phase !== undefined) {
        const parents = allDepends.filter(t => t.childid === this.selectedActivityData.phase.id)
        parents.forEach(parent => {
          const foundParent = this.$store.state.globalState.allWeData.find(t => t.id === parseInt(parent.parentid, 10))
          if (foundParent && this.selectedParents.indexOf(foundParent.title) < 0) {
            this.selectedParents.push(foundParent.title)
            this.selectedParents1.push(foundParent.title)
            this.selectedParents2.push(foundParent.title)
          }
        })
      }
      this.externalId1 = ""
      this.externalId2 = ""
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
      this.externalSystems1 = this.externalSystems
      this.externalSystems2 = this.externalSystems
      this.externalId = this.externalSystems.jira_idprogram
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
      this.newActivityId1 = Math.ceil(Math.random() * 1000000)
      this.newActivityId2 = Math.ceil(Math.random() * 1000000)
    },
    async handleSave() {
      const progId = this.selectedActivityData.phase.projectId
      if (this.title1Valid && this.description1Valid && this.title2Valid && this.description2Valid) {
        const priority1 = this.$store.state.globalState.priorityOptions.findIndex(p => p === this.selectedPriority1) + 1
        const priority2 = this.$store.state.globalState.priorityOptions.findIndex(p => p === this.selectedPriority2) + 1
        const jobId = this.$store.state.globalState.allJobTitleData.find(job => job.title === this.selectedActivityData.phase.job_name).id
        const phaseId1 = this.$store.state.globalState.allPhaseTitleData.findIndex(phase => phase === this.selectedPhase1) + 1
        const phaseId2 = this.$store.state.globalState.allPhaseTitleData.findIndex(phase => phase === this.selectedPhase2) + 1
        const teams = this.$store.state.globalState.allTeamTitleData.find(team => team.title === this.selectedActivityData.phase.team_name)
        let teamId = 0
        if (teams !== undefined) teamId = teams.id
        const newA1 = { ...this.selectedActivityData.phase }
        const newA2 = { ...this.selectedActivityData.phase }
        newA1.title = this.title1
        newA1.description = this.description1
        newA1.priority = priority1
        newA1.phase = phaseId1
        newA1.externalSystems = this.externalSystems1
        let selectedParentIDs1 = []
        this.$store.state.globalState.allWeData.forEach(a => {
          const selected = this.selectedParents1.find(p => p === a.title)
          if (selected !== undefined && selected !== null) selectedParentIDs1.push(a.id)
        })
        selectedParentIDs1 = selectedParentIDs1.filter((value, index, array) => array.indexOf(value) === index)
        newA1.parents = selectedParentIDs1
        let selectedParentIDs2 = []
        this.$store.state.globalState.allWeData.forEach(a => {
          const selected = this.selectedParents2.find(p => p === a.title)
          if (selected !== undefined && selected !== null) selectedParentIDs2.push(a.id)
        })
        selectedParentIDs2 = selectedParentIDs2.filter((value, index, array) => array.indexOf(value) === index)
        newA2.parents = selectedParentIDs2
        newA1.effort = {
          load_engage: this.loadEngage1,
          duration_engage: this.durationEngage1,
          fte_engage: this.fteEngage1,
          load_demand: this.loadDemand1,
          duration_demand: this.durationDemand1,
          fte_demand: this.fteDemand1,
          load_reel: this.loadEstimated1,
          duration_reel: this.durationEstimated1,
          fte_reel: this.fteEstimated1,
        }
        newA1.acc = this.accData1
        newA2.acc = this.accData2
        newA2.title = this.title2
        newA2.description = this.description2
        newA2.priority = priority2
        newA2.phase = phaseId2
        newA2.externalSystems = this.externalSystems2
        newA2.effort = {
          load_engage: this.loadEngage2,
          duration_engage: this.durationEngage2,
          fte_engage: this.fteEngage2,
          load_demand: this.loadDemand2,
          duration_demand: this.durationDemand2,
          fte_demand: this.fteDemand2,
          load_reel: this.loadEstimated2,
          duration_reel: this.durationEstimated2,
          fte_reel: this.fteEstimated2,
        }
        const payloads = {
          weID: this.selectedActivityData.phase.id,
          jobId,
          teamId,
          progId,
          newA1,
          newA2
        }
        this.$refs['my-modal'].hide()
        this.description1 = ''
        this.title1 = ''
        this.description2 = ''
        this.title2 = ''
        this.$store.commit('globalState/HIDE_ACTIVITY_DETAIL_MODAL')
        await this.$store.dispatch('globalState/handle_activity_split', payloads)
        await this.$store.dispatch('teamState/load_org_data')
        const data = this.$store.state.globalState.selectedNavObj
        await this.$store.dispatch('teamState/get_from_selected_nav_id', {
          data
        })
        await this.$store.dispatch('globalState/get_all_we_depends')
        await this.$store.dispatch('globalState/get_all_workelements')
        await this.$store.dispatch('globalState/get_external_systems_we', { id: this.selectedActivityData.phase.projectId })
        this.$emit('hideModal')
      } else {
        this.$toast.warning('Input invalid!')
      }
    },
    handleDependencyDelete(index) {
      const dt = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.dependency : []
      dt.splice(index, 1)
    },
    handleCalculate(value) {
      if (value === 1) {
        if (this.fteEngage1 !== '' && this.durationEngage1 !== '' && this.loadEngage1 !== '') {
          if (parseFloat(this.loadEngage1) === parseFloat(this.durationEngage1) * parseFloat(this.fteEngage1)) {
            this.showToast('success', 'All values of First Splited are valid')
            this.isFirstValid = true
          } else {
            this.showToast('warning', 'Please enter valid values for First Splited')
            this.isFirstValid = false
          }
        } else if (this.fteEngage1 !== '' && this.durationEngage1 !== '' && this.loadEngage1 === '') {
          this.loadEngage1 = parseFloat(this.durationEngage1) * parseFloat(this.fteEngage1)
          this.isFirstValid = true
        } else if (this.loadEngage1 !== '' && this.durationEngage1 !== '' && this.durationEngage1 !== 0 && this.fteEngage1 === '') {
          this.fteEngage1 = parseFloat(this.loadData) / parseFloat(this.durationData)
          this.isFirstValid = true
        } else if (this.loadEngage1 !== '' && this.fteEngage1 !== '' && this.fteEngage1 !== 0 && this.durationEngage1 === '') {
          this.durationEngage1 = parseFloat(this.loadEngage1) / parseFloat(this.fteEngage1)
          this.isFirstValid = true
        } else {
          this.showToast('warning', 'Please enter valid values for First Splited')
          this.isFirstValid = false
        }
      } else if (value === 2) {
        if (this.fteEngage2 !== '' && this.durationEngage2 !== '' && this.loadEngage2 !== '') {
          if (parseFloat(this.loadEngage2) === parseFloat(this.durationEngage2) * parseFloat(this.fteEngage2)) {
            this.showToast('success', 'All values of Second Splited are valid')
            this.isSecondValid = true
          } else {
            this.showToast('warning', 'Please enter valid values for Second Splited')
            this.isSecondValid = false
          }
        } else if (this.fteEngage2 !== '' && this.durationEngage2 !== '' && this.loadEngage2 === '') {
          this.loadEngage2 = parseFloat(this.durationEngage2) * parseFloat(this.fteEngage2)
          this.isSecondValid = true
        } else if (this.loadEngage2 !== '' && this.durationEngage2 !== '' && this.durationEngage2 !== 0 && this.fteEngage2 === '') {
          this.fteEngage2 = parseFloat(this.loadEngage2) / parseFloat(this.durationEngage2)
          this.isSecondValid = true
        } else if (this.loadEngage2 !== '' && this.fteEngage2 !== '' && this.fteEngage2 !== 0 && this.durationEngage2 === '') {
          this.durationEngage2 = parseFloat(this.loadEngage2) / parseFloat(this.fteEngage2)
          this.isSecondValid = true
        } else {
          this.showToast('warning', 'Please enter valid values for Second Splited')
          this.isSecondValid = false
        }
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
    updateExternalID(weType) {
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
      if (weType === 0) {
        if (this.externalSystems !== undefined) {
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
        }
        if (this.externalId === '' || this.externalId === null || this.externalId === undefined) {
          const value = this.externalSystem
          this.externalId = `${value.toUpperCase()}-${type}-`
        }
      } else if (weType === 1) {
        if (this.externalSystems1 !== undefined) {
          switch (this.externalSystem1) {
            case 'Jira':
              this.externalId1 = this.externalSystems1.jira_idprogram
              break
            case 'SAP':
              this.externalId1 = this.externalSystems1.sap_idprogram
              break
            case 'Devops':
              this.externalId1 = this.externalSystems1.devops_idprogram
              break
            case 'primavera':
              this.externalId1 = this.externalSystems1.primavera_idprogram
              break
            case 'Deviprop':
              this.externalId1 = this.externalSystems1.deviprop_idprogram
              break
            default:
              break
          }
        }
        if (this.externalId1 === '' || this.externalId1 === null || this.externalId1 === undefined) {
          const value = this.externalSystem1
          this.externalId1 = `${value.toUpperCase()}-${type}-`
        }
      } else if (weType === 2) {
        if (this.externalSystems2 !== undefined) {
          switch (this.externalSystem2) {
            case 'Jira':
              this.externalId2 = this.externalSystems2.jira_idprogram
              break
            case 'SAP':
              this.externalId2 = this.externalSystems2.sap_idprogram
              break
            case 'Devops':
              this.externalId2 = this.externalSystems2.devops_idprogram
              break
            case 'primavera':
              this.externalId2 = this.externalSystems2.primavera_idprogram
              break
            case 'Deviprop':
              this.externalId2 = this.externalSystems2.deviprop_idprogram
              break
            default:
              break
          }
        }
        if (this.externalId2 === '' || this.externalId2 === null || this.externalId2 === undefined) {
          const value = this.externalSystem2
          this.externalId2 = `${value.toUpperCase()}-${type}-`
        }
      }
    },
    handleUpdateExternal(weType) {
      if (weType === 0) {
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
      } else if (weType === 1) {
        switch (this.externalSystem1) {
          case 'Jira':
            this.externalSystems1.jira_idprogram = this.externalId1
            break
          case 'SAP':
            this.externalSystems1.sap_idprogram = this.externalId1
            break
          case 'Devops':
            this.externalSystems1.devops_idprogram = this.externalId1
            break
          case 'Deviprop':
            this.externalSystems1.deviprop_idprogram = this.externalId1
            break
          case 'primavera':
            this.externalSystems1.primavera_idprogram = this.externalId1
            break
          default:
            break
        }
      } else if (weType === 2) {
        switch (this.externalSystem2) {
          case 'Jira':
            this.externalSystems2.jira_idprogram = this.externalId2
            break
          case 'SAP':
            this.externalSystems2.sap_idprogram = this.externalId2
            break
          case 'Devops':
            this.externalSystems2.devops_idprogram = this.externalId2
            break
          case 'Deviprop':
            this.externalSystems2.deviprop_idprogram = this.externalId2
            break
          case 'primavera':
            this.externalSystems2.primavera_idprogram = this.externalId2
            break
          default:
            break
        }
      }
    },
    async handleDeleteExternal(weType) {
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
        if (weType === 0) {
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
        } else if (weType === 1) {
          switch (this.externalSystem1) {
            case 'Jira':
              this.externalSystems1.jira_idprogram = ""
              break
            case 'SAP':
              this.externalSystems1.sap_idprogram = ""
              break
            case 'Devops':
              this.externalSystems1.devops_idprogram = ""
              break
            case 'Deviprop':
              this.externalSystems1.deviprop_idprogram = ""
              break
            case 'primavera':
              this.externalSystems1.primavera_idprogram = ""
              break
            default:
              break
          }
          this.externalId1 = ""
        } else if (weType === 2) {
          switch (this.externalSystem2) {
            case 'Jira':
              this.externalSystems2.jira_idprogram = ""
              break
            case 'SAP':
              this.externalSystems2.sap_idprogram = ""
              break
            case 'Devops':
              this.externalSystems2.devops_idprogram = ""
              break
            case 'Deviprop':
              this.externalSystems2.deviprop_idprogram = ""
              break
            case 'primavera':
              this.externalSystems2.primavera_idprogram = ""
              break
            default:
              break
          }
          this.externalId2 = ""
        }
      }
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
