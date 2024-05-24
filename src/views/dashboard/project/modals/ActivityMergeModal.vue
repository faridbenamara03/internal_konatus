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
              <label>WE ID</label>
              <p v-if="selectedActivityData.phase">
                {{ selectedActivityData.phase.id }}
              </p>
            </div>
            <div style="display: flex">
              <div class="w-30">
                <label>Ex System</label>
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
                    placeholder="Input External Id"
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
                placeholder="Select Activity"
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
              <label>WE ID</label>
              <p v-if="selectedActivityData.phase">
                {{ toMerge ? toMerge.id : '' }}
              </p>
            </div>
            <div
              v-if="toMerge"
              style="display: flex"
            >
              <div class="w-30">
                <label>Ex System</label>
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
                    placeholder="Input External Id"
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
                  placeholder="Select Activity"
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
              <div class="w-30">
                <label>Ex System</label>
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
                    placeholder="Input External Id"
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
              <b-form-input v-model="merged.title" />
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
                  v-model="loadEngage"
                  type="number"
                />
              </div>
              <div class="col">
                <label>Total Duration</label>
                <b-form-input
                  v-model="durationEngage"
                  type="number"
                />
              </div>
              <div class="col">
                <label>Total FTE</label>
                <b-form-input
                  v-model="fteEngage"
                  type="number"
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
    activityList1() {
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
    },
    activityList2() {
      const titleArr = []
      if (this.toMerged === null || this.toMerged === undefined) return []
      this.$store.state.globalState.allWeData.forEach(a => {
        if (this.toMerged !== undefined && this.toMerged.id !== a.id && this.toMerged.projectId === a.projectId) {
          titleArr.push(a.title)
        }
      })
      this.$store.state.globalState.allWeData.forEach(a => {
        if (this.toMerged !== undefined && this.toMerged.id !== a.id && this.toMerged.projectId !== a.projectId) {
          titleArr.push(a.title)
        }
      })
      return titleArr
    },
    activityList() {
      const titleArr = []
      titleArr.push(...this.activityList1)
      titleArr.push(...this.activityList2)
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
      this.$store.state.globalState.allWeData.forEach(a => {
        if (this.selectedActivityData.phase !== undefined && this.selectedActivityData.phase.id !== a.id) {
          titleArr.push(a.title)
        }
      })
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
      this.spentData1 = parseFloat(this.loadEstimated1) - parseFloat(this.restData1)
      this.selectedPriority1 = this.selectedActivityData.phase !== undefined ? this.priorityOptions[this.selectedActivityData.phase.priority - 1] : 0
      this.selectedPhase1 = this.selectedActivityData.phase !== undefined ? this.$store.state.globalState.allPhaseTitleData[this.selectedActivityData.phase.gate - 1] : this.$store.state.globalState.allPhaseTitleData[0]
      this.selectedPriority = this.selectedPriority1
      this.selectedPhase = this.selectedPhase1
      this.selectedParents1 = []
      this.selectedParents2 = []
      this.selectedParents = []
      const allDepends = this.$store.state.globalState.weDependsList
      if (this.selectedActivityData.phase !== undefined) {
        const parents = allDepends.filter(t => t.childid === this.selectedActivityData.phase.id)
        parents.forEach(parent => {
          const foundParent = this.$store.state.globalState.allWeData.find(t => t.id === parseInt(parent.parentid, 10))
          if (foundParent && this.selectedParents1.indexOf(foundParent.title) < 0) {
            this.selectedParents1.push(foundParent.title)
            this.selectedParents.push(foundParent.title)
          }
        })
        this.selectedParents1 = this.selectedParents1.filter((value, index, array) => array.indexOf(value) === index)
        this.selectedParents = this.selectedParents.filter((value, index, array) => array.indexOf(value) === index)
        this.externalSystems2 = []
        this.externalId2 = ""
        this.externalSystems1 = this.$store.state.globalState.externalWeSystemData.find(t => t.idwe === this.selectedActivityData.phase.id)
        if (this.externalSystems1 === undefined) {
          this.externalSystems1 = {
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
        this.externalSystems = this.externalSystems1
        this.externalId = this.externalSystems !== undefined ? this.externalSystems.jira_idprogram : ""
        this.externalId1 = this.externalSystems1.jira_idprogram
      }
      this.toMerge = null
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
          const selected = this.selectedParents.find(p => p === a.title)
          if (selected !== undefined && selected !== null) selectedParentIDs.push(a.id)
        })
        selectedParentIDs = selectedParentIDs.filter((value, index, array) => array.indexOf(value) === index)
        this.merged.parents = selectedParentIDs
        this.merged.externalSystems = this.externalSystems
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
        await this.$store.dispatch('globalState/get_external_systems_we', { id: this.selectedActivityData.phase.projectId })
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
      if (selectedActivity !== undefined) {
        const parents = allDepends.filter(t => t.childid === selectedActivity.id)
        parents.forEach(parent => {
          const foundParent = this.$store.state.globalState.allWeData.find(t => t.id === parseInt(parent.parentid, 10))
          if (foundParent && this.selectedParents2.indexOf(foundParent.title) < 0) {
            this.selectedParents2.push(foundParent.title)
          }
        })
        this.selectedParents2 = this.selectedParents2.filter((value, index, array) => array.indexOf(value) === index)
      }
      this.selectedParents = []
      this.selectedParents.push(...this.selectedParents1)
      this.selectedParents.push(...this.selectedParents2)
      this.selectedParents = this.selectedParents.filter((value, index, array) => array.indexOf(value) === index)
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
      this.spentData2 = parseFloat(this.loadEstimated2) - parseFloat(this.restData2)
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
      if (this.selectedActivityData.phase.title !== null && this.selectedActivityData.phase.title !== undefined) {
        if (selectedActivity.title !== undefined && selectedActivity.title !== null) {
          this.merged.title = this.selectedActivityData.phase.title.concat(' - ') + selectedActivity.title
        } else this.merged.title = this.selectedActivityData.phase.title
      } else if (this.selectedActivityData.phase.title === null || this.selectedActivityData.phase.title === undefined) {
        if (selectedActivity.title !== undefined && selectedActivity.title !== null) {
          this.merged.title = selectedActivity.title
        } else this.merged.title = ""
      }
      if (this.selectedActivityData.phase.description !== null && this.selectedActivityData.phase.description !== undefined) {
        if (selectedActivity.description !== undefined && selectedActivity.description !== null) {
          this.merged.description = this.selectedActivityData.phase.description.concat(' - ') + selectedActivity.description
        } else this.merged.description = this.selectedActivityData.phase.description
      } else if (this.selectedActivityData.phase.description === null || this.selectedActivityData.phase.description === undefined) {
        if (selectedActivity.description !== undefined && selectedActivity.description !== null) {
          this.merged.description = selectedActivity.description
        } else this.merged.description = ""
      }
      if (selectedActivity !== undefined) {
        await this.$store.dispatch('globalState/get_external_systems2_we', { id: selectedActivity.prog_id })
        this.externalSystems2 = this.$store.state.globalState.externalWeSystemData2.find(t => t.idwe === selectedActivity.id)
        if (this.externalSystems2 === undefined) {
          this.externalSystems2 = {
            driver_type: 2,
            idprogram: selectedActivity.prog_id,
            idwe: selectedActivity.id,
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
        this.externalId2 = this.externalSystems2 !== undefined ? this.externalSystems2.jira_idprogram : ""
      }
    },
    handleCalculate() {
      if (this.fteEngage !== '' && !Number.isNaN(this.fteEngage) && !Number.isNaN(this.durationEngage) && !Number.isNaN(this.loadEngage) && this.durationEngage !== '' && this.loadEngage !== '') {
        if (parseFloat(this.loadEngage) === 0 && parseFloat(this.durationEngage) === 0 && parseFloat(this.fteEngage) === 0) {
          this.showToast('warning', 'Please enter valid values')
          this.isValid = false
          return
        }
        if (parseFloat(this.fteEngage) !== 0) {
          this.durationEngage = parseFloat(this.loadEngage) / parseFloat(this.fteEngage)
          this.isValid = true
        } else if (parseFloat(this.fteEngage) === 0 && parseFloat(this.durationEngage) !== 0) {
          this.fteEngage = parseFloat(this.loadEngage) / parseFloat(this.durationEngage)
          this.isValid = true
        } else if (parseFloat(this.loadEngage) === 0 && parseFloat(this.durationEngage) !== 0 && parseFloat(this.durationEngage) !== 0) {
          this.loadEngage = parseFloat(this.durationEngage) * parseFloat(this.fteEngage)
          this.isValid = true
        }
        if (parseFloat(this.loadEngage) === parseFloat(this.durationEngage) * parseFloat(this.fteEngage)) {
          this.showToast('success', 'All values are valid')
          this.isValid = true
        }
      }
      if (this.fteEngage !== '' && this.durationEngage !== '' && (this.loadEngage === '' || Number.isNaN(this.loadEngage))) {
        this.loadEngage = parseFloat(this.durationEngage) * parseFloat(this.fteEngage)
        this.isValid = true
      } else if (this.loadEngage !== '' && this.durationEngage !== '' && this.durationEngage !== 0 && (this.fteEngage === '' || Number.isNaN(this.fteEngage))) {
        this.fteEngage = parseFloat(this.loadEngage) / parseFloat(this.durationEngage)
        this.isValid = true
      } else if (this.loadEngage !== '' && this.fteEngage !== '' && this.fteEngage !== 0 && (this.durationEngage === '' || Number.isNaN(this.durationEngage))) {
        this.durationEngage = parseFloat(this.loadEngage) / parseFloat(this.fteEngage)
        this.isValid = true
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
  }
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
