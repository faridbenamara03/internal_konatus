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
                    External System: {{ externalSystem }}
                  </label>
                  <div v-else>
                    <v-select
                      v-model="externalSystem"
                      style="margin-bottom: 3px"
                      :options="['Jira', 'SAP']"
                      placeholder="Select External System"
                      outlined
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
              <!-- <feather-icon icon="PlusIcon" size="18" style="cursor:pointer" @click="onEffortAdd1" /> -->
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
                  :value="(1 - parseFloat(accData) / 100) * loadEstimated"
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
                <label>Duration(R/E)</label>
                <b-form-input
                  :value="durationEstimated"
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
          <div v-if="selectedActivityData.phase !== undefined">
            <div
              v-for="(item, index) in selectedActivityData.phase.dependency"
              :key="index"
              class="shadow rounded d-flex"
              style="padding:10px;justify-content:space-between;"
            >
              <div class="d-flex">
                <div
                  class="bg-warning"
                  style="width:8px;height:22px;border-radius:2px;margin-right:8px"
                />
                <feather-icon
                  icon="LinkIcon"
                  style="margin-top:4px;margin-right:8px"
                />
                <i>{{ item }}</i>
              </div>
              <div
                style="cursor:pointer"
                @click="handleDependencyDelete(index)"
              >
                <feather-icon icon="TrashIcon" />
              </div>
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
            <div style="display: flex; justify-content: end;">
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
              <div class="col">
                <label>Total Load</label>
                <b-form-input
                  v-model="loadEngage1"
                  type="number"
                />
              </div>
              <div class="col">
                <label>Total Duration</label>
                <b-form-input
                  v-model="durationEngage1"
                  type="number"
                />
              </div>
              <div class="col">
                <label>Total FTE</label>
                <b-form-input
                  v-model="fteEngage1"
                  type="number"
                />
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
              <div class="col">
                <label>%acc</label>
                <b-form-input
                  :value="accData1"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Rest To Do</label>
                <b-form-input
                  :value="(1 - parseFloat(accData1) / 100) * loadEstimated1"
                  readonly
                />
              </div>
              <div class="col">
                <label>Load(R/E)</label>
                <b-form-input
                  :value="loadEstimated1"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration(R/E)</label>
                <b-form-input
                  :value="durationEstimated1"
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
            <b-badge variant="success">
              Splited
            </b-badge>
          </div>
          <div class="form-group header d-flex justify-content-end">
            <div style="display: flex;justify-content: end;">
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
              <!-- <feather-icon icon="PlusIcon" size="18" style="cursor:pointer" @click="onEffortAdd3" /> -->
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <div class="col">
                <label>Total Load</label>
                <b-form-input
                  v-model="loadEngage2"
                  type="number"
                />
              </div>
              <div class="col">
                <label>Total Duration</label>
                <b-form-input
                  v-model="durationEngage2"
                  type="number"
                />
              </div>
              <div class="col">
                <label>Total FTE</label>
                <b-form-input
                  v-model="fteEngage2"
                  type="number"
                />
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
              <div class="col">
                <label>%acc</label>
                <b-form-input
                  :value="accData2"
                  readonly
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label>Rest To Do</label>
                <b-form-input
                  :value="(1 - parseFloat(accData2) / 100) * loadEstimated2"
                  readonly
                />
              </div>
              <div class="col">
                <label>Load(R/E)</label>
                <b-form-input
                  :value="loadEstimated2"
                  readonly
                />
              </div>
              <div class="col">
                <label>Duration(R/E)</label>
                <b-form-input
                  :value="durationEstimated2"
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
      externalEditable: false,
      externalSystem: "Jira",
      externalId: "JR-12345",
      externalEditable1: false,
      externalSystem1: "Jira",
      externalId1: "JR-12345",
      externalEditable2: false,
      externalSystem2: "Jira",
      externalId2: "JR-12345",
      // effortData3: [
      //   {
      //     skill: null,
      //     load: null,
      //     duration: null,
      //     fte: null
      //   }
      // ],
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
      this.accData1 = parseInt(this.accData / 2, 10)
      this.accData2 = this.accData - this.accData1
      this.loadEngage1 = parseInt(this.loadEngage / 2, 10)
      this.durationEngage1 = parseInt(this.durationEngage / 2, 10)
      this.fteEngage1 = parseInt(this.fteEngage / 2, 10)
      this.loadEngage2 = this.loadEngage - this.loadEngage1
      this.durationEngage2 = this.durationEngage - this.durationEngage1
      this.fteEngage2 = this.fteEngage - this.fteEngage1

      this.loadDemand1 = parseInt(this.loadDemand / 2, 10)
      this.durationDemand1 = parseInt(this.durationDemand / 2, 10)
      this.fteDemand1 = parseInt(this.fteDemand / 2, 10)
      this.loadDemand2 = this.loadDemand - this.loadDemand1
      this.durationDemand2 = this.durationDemand - this.durationDemand1
      this.fteDemand2 = this.fteDemand - this.fteDemand1

      this.loadEstimated1 = parseInt(this.loadEstimated / 2, 10)
      this.durationEstimated1 = parseInt(this.durationEstimated / 2, 10)
      this.fteEstimated1 = parseInt(this.fteEstimated / 2, 10)
      this.loadEstimated2 = this.loadEstimated - this.loadEstimated1
      this.durationEstimated2 = this.durationEstimated - this.durationEstimated1
      this.fteEstimated2 = this.fteEstimated - this.fteEstimated1
    },
    handleExternalEdit() {
      this.externalEditable = !this.externalEditable
    },
    handleExternalEdit1() {
      this.externalEditable1 = !this.externalEditable1
    },
    handleExternalEdit2() {
      this.externalEditable2 = !this.externalEditable2
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
        const priorityIndex = this.selectedActivityData.phase.priority
        const jobId = this.$store.state.globalState.allJobTitleData.find(job => job.title === this.selectedActivityData.phase.job_name).id
        const phaseId = this.selectedActivityData.phase.gate
        const teams = this.$store.state.globalState.allTeamTitleData.find(team => team.title === this.selectedActivityData.phase.team_name)
        let teamId = 0
        if (teams !== undefined) teamId = teams.id
        const newA1 = { ...this.selectedActivityData.phase }
        const newA2 = { ...this.selectedActivityData.phase }
        newA1.title = this.title1
        newA1.description = this.description1
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
          priorityIndex,
          jobId,
          phaseId,
          teamId,
          progId,
          newA1,
          newA2
        }
        // this.$store.commit('globalState/HANDLE_ACTIVITY_SPLIT', data)
        this.$refs['my-modal'].hide()
        this.description1 = ''
        this.title1 = ''
        this.description2 = ''
        this.title2 = ''
        this.$store.commit('globalState/HIDE_ACTIVITY_DETAIL_MODAL')
        await this.$store.dispatch('globalState/handle_activity_split', payloads)
        await this.$store.dispatch('globalState/load_org_data')
        const data = this.$store.state.globalState.selectedNavObj
        await this.$store.dispatch('globalState/get_from_selected_nav_id', {
          data
        })
      this.$emit('hideModal')
      } else {
        this.$toast.warning('Input invalid!')
      }
    },
    handleDependencyDelete(index) {
      const dt = this.selectedActivityData.phase !== undefined ? this.selectedActivityData.phase.dependency : []
      dt.splice(index, 1)
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
