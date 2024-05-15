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
                      style="margin-bottom: 3px"
                      :options="['Jira', 'SAP']"
                      placeholder="Select External System"
                      outlined
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
                @click="handleExternalEdit1"
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
              <!-- <feather-icon
                icon="PlusIcon"
                size="18"
                style="cursor:pointer"
                @click="onEffortAdd1"
              /> -->
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label>Total Load</label>
                <b-form-input
                  :value="loadEngage1"
                  readonly
                />
              </div>
              <div class="col">
                <label>Total Duration</label>
                <b-form-input
                  :value="durationEngage1"
                  readonly
                />
              </div>
              <div class="col">
                <label>Total FTE</label>
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
              <div class="col">
                <label>%acc</label>
                <b-form-input
                  v-model="accData1"
                  type="number"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Rest To Do</label>
                <b-form-input
                  v-model="restData1"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>Load(R/E)</label>
                <b-form-input
                  v-model="loadEstimated1"
                  type="number"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration(R/E)</label>
                <b-form-input
                  v-model="durationEstimated1"
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
            <div class="select-box">
              <label>Epic</label>
              <v-select
                v-model="selectedEpic"
                :options="['Epic A', 'Epic B']"
                placeholder="Select Epic"
                outlined
              />
            </div>
          </div>
          <div class="form-group d-flex justify-content-end">
            <b-button variant="outline-primary">
              <feather-icon icon="PlusIcon" />
              <span class="pl-1">Add dependency</span>
            </b-button>
          </div>
          <div class="form-group">
            <div class="detail-box">
              <custom-icon name="hexahedron" />
              <p class="pl-1 m-0 text-uppercase">
                Dependencies
              </p>
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
                      style="margin-bottom: 3px"
                      :options="['Jira', 'SAP']"
                      placeholder="Select External System"
                      outlined
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
                @click="handleExternalEdit2"
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
                <!-- <feather-icon
                  icon="PlusIcon"
                  size="18"
                  style="cursor:pointer"
                  @click="onEffortAdd2"
                /> -->
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <!-- <div class="col-6">
                </div> -->
                <div class="col">
                  <label>Total Load</label>
                  <b-form-input
                    :value="loadEngage2"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>Total Duration</label>
                  <b-form-input
                    :value="durationEngage2"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>Total FTE</label>
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
                <div class="col">
                  <label>%acc</label>
                  <b-form-input
                    v-model="accData2"
                    type="number"
                    readonly
                  />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Rest To Do</label>
                  <b-form-input
                    v-model="restData2"
                    type="number"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>Load(R/E)</label>
                  <b-form-input
                    v-model="loadEstimated2"
                    type="number"
                    readonly
                  />
                </div>
                <div class="col">
                  <label>Duration(R/E)</label>
                  <b-form-input
                    v-model="durationEstimated2"
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
              <div class="select-box">
                <label>Epic</label>
                <v-select
                  v-model="selectedEpic"
                  :options="['Epic A', 'Epic B']"
                  placeholder="Select Epic"
                  outlined
                />
              </div>
            </div>
            <div class="form-group d-flex justify-content-end">
              <b-button variant="outline-primary">
                <feather-icon icon="PlusIcon" />
                <span class="pl-1">Add dependency</span>
              </b-button>
            </div>
            <div class="form-group">
              <div class="detail-box">
                <custom-icon name="hexahedron" />
                <p class="pl-1 m-0 text-uppercase">
                  Dependencies
                </p>
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
                    v-if="!externalEditable3"
                    style="font-size: 14px; color: #898989;text-transform:none"
                  >
                    External System: {{ externalSystem3 }}
                  </label>
                  <div v-else>
                    <v-select
                      v-model="externalSystem3"
                      style="margin-bottom: 3px"
                      :options="['Jira', 'SAP']"
                      placeholder="Select External System"
                      outlined
                    />
                  </div>
                </div>
                <p
                  v-if="!externalEditable3"
                  style="color: #bbbbbb;font-size: 16px;"
                >
                  External Activity Id: {{ externalId3 }}
                </p>
                <div v-else>
                  <b-form-input
                    v-model="externalId3"
                    placeholder="Input External Activity Id"
                  />
                </div>
              </div>
              <div
                style="padding-top: 4px;margin-left: 5px;cursor: pointer;"
                @click="handleExternalEdit3"
              >
                <feather-icon
                  :icon="externalEditable3 ? 'SaveIcon' : 'Edit3Icon'"
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
              <!-- <feather-icon icon="PlusIcon" size="18" style="cursor:pointer" @click="onEffortAdd3" /> -->
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
                <label>Duration(Real/Estimated)</label>
                <b-form-input
                  v-model="durationEstimated"
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
            <div class="select-box">
              <label>Epic</label>
              <v-select
                v-model="selectedEpic"
                :options="['Epic A', 'Epic B']"
                placeholder="Select Epic"
                outlined
              />
            </div>
          </div>
          <div class="form-group d-flex justify-content-end">
            <b-button variant="outline-primary">
              <feather-icon icon="PlusIcon" />
              <span class="pl-1">Add dependency</span>
            </b-button>
          </div>
          <div class="form-group">
            <div class="detail-box">
              <custom-icon name="hexahedron" />
              <p class="pl-1 m-0 text-uppercase">
                Dependencies
              </p>
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
      externalEditable1: false,
      externalSystem1: "Jira",
      externalId1: "JR-12345",
      externalEditable2: false,
      externalSystem2: "Jira",
      externalId2: "JR-12345",
      externalEditable3: false,
      externalSystem3: "Jira",
      externalId3: "JR-12345",
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
      opt_skillset: 0
    }
  },
  computed: {
    weTitle() {
      return this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.title : ''
    },
    weDescription() {
      return this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.description : ''
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
  },
  methods: {
    initializeData(newVal) {
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
      this.toMerge = null
    },
    handleExternalEdit1() {
      this.externalEditable1 = !this.externalEditable1
    },
    handleExternalEdit2() {
      this.externalEditable2 = !this.externalEditable2
    },
    handleExternalEdit3() {
      this.externalEditable3 = !this.externalEditable3
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
        const priorityIndex = this.selectedActivityData.phase.priority
        const jobId = this.$store.state.globalState.allJobTitleData.find(job => job.title === this.selectedActivityData.phase.job_name).id
        const phaseId = this.selectedActivityData.phase.gate
        const teams = this.$store.state.globalState.allTeamTitleData.find(team => team.title === this.selectedActivityData.phase.team_name)
        let teamId = 0
        if (teams !== undefined) teamId = teams.id
        const payloads = {
          toMergeId1: this.selectedActivityData.phase.id,
          toMergeId2: this.toMerge.id,
          merged: this.merged,
          acc: this.accData,
          priorityIndex,
          jobId,
          phaseId,
          teamId,
          progId,
        }
        // this.$store.commit('globalState/HANDLE_ACTIVITY_MERGE', data)
        await this.$store.dispatch('globalState/handle_activity_merge', payloads)
        await this.$store.dispatch('globalState/load_org_data')
        const data = this.$store.state.globalState.selectedNavObj
        await this.$store.dispatch('globalState/get_from_selected_nav_id', {
          data
        })
        this.toMerge = null
        this.$refs['my-modal'].hide()
        this.$store.commit('globalState/HIDE_ACTIVITY_DETAIL_MODAL')
      }
    },
    onActivitySelect(selectedActivityId) {
      let selectedActivity = {}
      if (this.$store.state.globalState.portfolioDemandData.teams && this.$store.state.globalState.portfolioDemandData.teams.length > 0) {
        this.$store.state.globalState.portfolioDemandData.teams.forEach(t => {
          if (t.phases && t.phases.length > 0) {
            t.phases.forEach(p => {
              if (p.activities && p.activities.length > 0) {
                p.activities.forEach(a => {
                  if (selectedActivityId === a.title) {
                    selectedActivity = a
                  }
                })
              }
            })
          }
        })
      }
      this.toMerge = selectedActivity
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
      this.fteDemand = parseFloat(this.fteDemand1) + parseFloat(this.fteDemand2)
      this.fteEngage = parseFloat(this.fteEngage1) + parseFloat(this.fteEngage2)
      this.fteEstimated = parseFloat(this.fteEstimated1) + parseFloat(this.fteEstimated2)
      this.accData = parseFloat(this.accData1) + parseFloat(this.accData2)
      this.restData = (1 - (parseFloat(this.accData) / 100)) * parseFloat(this.loadEstimated)
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
      // this.merged.title = ''
      this.merged.title = this.selectedActivityData.phase.title.concat(' - ') + selectedActivity.title
      this.merged.description = this.selectedActivityData.phase.description.concat(' - ') + selectedActivity.description
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
