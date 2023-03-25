<template>
  <b-modal id="modal-activity-merge" ref="my-modal" title="Merge Activity" centered no-fade hide-backdrop static
    size="xl">
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Merge Activity
      </h5>
      <div class="modal-actions">
        <b-button variant="outline-primary" @click="hideModal">
          <feather-icon icon="XIcon" size="18" />
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
                {{ selectedActivityData.phase.activityId }}
              </p>
            </div>
            <div>
              <div style="text-align: end;"><label style="font-size: 14px; color: #898989;text-transform:none">
                  External System: Jira</label></div>
              <p style="color: #bbbbbb;font-size: 16px;">
                External Activity Id: JR-12345
              </p>
            </div>
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
              <b-form-input :value="selectedActivityData.phase.title" />
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea :value="selectedActivityData.phase.description" rows="5" />
            </div>
          </div>
          <div class="form-group has-switch">
            <div class="detail-box">
              <feather-icon icon="BarChart2Icon" size="18" />
              <p class="px-1 m-0 text-uppercase">
                effort
              </p>
              <feather-icon icon="PlusIcon" size="18" style="cursor:pointer" @click="onEffortAdd1" />
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <!-- <div class="col-6">
              </div> -->
              <div class="col">
                <label>Total Load</label>
                <b-form-input :value="totalEffortData1.tLoad" readonly />
              </div>
              <div class="col">
                <label>Total Duration</label>
                <b-form-input :value="totalEffortData1.tDuration" readonly />
              </div>
              <div class="col">
                <label>Total FTE</label>
                <b-form-input :value="totalEffortData1.tFte" readonly />
              </div>
            </div>
            <div class="row" v-for="(t, i) in effortData1" :key="i">
              <div class="col-6">
                <label>Skillset</label>
                <v-select :options="['Design', 'Engineering', 'Management']" :value="t.skill"
                  placeholder="Select skillset" outlined @input="effortChange1('skill', i, $event)" />
              </div>
              <div class="col">
                <label>Load</label>
                <b-form-input :value="t.load" @input="effortChange1('load', i, $event)" />
              </div>
              <div class="col">
                <label>Duration</label>
                <b-form-input :value="t.duration" @input="effortChange1('duration', i, $event)" />
              </div>
              <div class="col">
                <label>FTE</label>
                <b-form-input :value="t.fte" @input="effortChange1('fte', i, $event)" />
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Epic</label>
              <v-select v-model="selectedEpic" :options="['Epic A', 'Epic B']" placeholder="Select Epic" outlined />
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
                {{ toMerge ? toMerge.activityId : '' }}
              </p>
            </div>
            <div v-if="toMerge">
              <div style="text-align: end;"><label style="font-size: 14px; color: #898989;text-transform:none">
                  External System: Jira</label></div>
              <p style="color: #bbbbbb;font-size: 16px;">
                External Activity Id: JR-12345
              </p>
            </div>
          </div>
          <div class="form-group" v-if="this.toMerge === null">
            <div class="select-box">
              <label>Search activity</label>
              <v-select v-model="selectedActivity" :options="this.toMergeList" @input="onActivitySelect"
                placeholder="Select an activity" outlined />
            </div>
          </div>
          <div v-else>
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
                <b-form-input :value="this.toMerge.title" />
              </div>
            </div>
            <div class="form-group">
              <div class="select-box">
                <label>Description</label>
                <b-form-textarea :value="this.toMerge.description" rows="5" />
              </div>
            </div>
            <div class="form-group has-switch">
              <div class="detail-box">
                <feather-icon icon="BarChart2Icon" size="18" />
                <p class="px-1 m-0 text-uppercase">
                  effort
                </p>
                <feather-icon icon="PlusIcon" size="18" style="cursor:pointer" @click="onEffortAdd2" />
              </div>
            </div>
            <div class="form-group">
              <div class="row">
                <!-- <div class="col-6">
                </div> -->
                <div class="col">
                  <label>Total Load</label>
                  <b-form-input :value="totalEffortData2.tLoad" readonly />
                </div>
                <div class="col">
                  <label>Total Duration</label>
                  <b-form-input :value="totalEffortData2.tDuration" readonly />
                </div>
                <div class="col">
                  <label>Total FTE</label>
                  <b-form-input :value="totalEffortData2.tFte" readonly />
                </div>
              </div>
              <div class="row" v-for="(t, i) in effortData2" :key="i">
                <div class="col-6">
                  <label>Skillset</label>
                  <v-select :options="['Design', 'Engineering', 'Management']" :value="t.skill"
                    placeholder="Select skillset" outlined @input="effortChange2('skill', i, $event)" />
                </div>
                <div class="col">
                  <label>Load</label>
                  <b-form-input :value="t.load" @input="effortChange2('load', i, $event)" />
                </div>
                <div class="col">
                  <label>Duration</label>
                  <b-form-input :value="t.duration" @input="effortChange2('duration', i, $event)" />
                </div>
                <div class="col">
                  <label>FTE</label>
                  <b-form-input :value="t.fte" @input="effortChange2('fte', i, $event)" />
                </div>
              </div>
            </div>
            <div class="form-group">
              <div class="select-box">
                <label>Epic</label>
                <v-select v-model="selectedEpic" :options="['Epic A', 'Epic B']" placeholder="Select Epic" outlined />
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
          <div class="form-group header d-flex justify-content-between">
            <div>
              <label>ACTIVITY ID</label>
              <p v-if="selectedActivityData.phase">
                {{ merged.activityId }}
              </p>
            </div>
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
              <b-form-input :value="merged.title" />
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea :value="merged.description" rows="5" />
            </div>
          </div>
          <div class="form-group has-switch">
            <div class="detail-box">
              <feather-icon icon="BarChart2Icon" size="18" />
              <p class="px-1 m-0 text-uppercase">
                effort
              </p>
              <!-- <feather-icon icon="PlusIcon" size="18" style="cursor:pointer" @click="onEffortAdd3" /> -->
            </div>
          </div>
          <div class="form-group">
            <div class="row">
              <!-- <div class="col-6">
              </div> -->
              <div class="col">
                <label>Total Load</label>
                <b-form-input :value="totalEffortData3.tLoad" readonly />
              </div>
              <div class="col">
                <label>Total Duration</label>
                <b-form-input :value="totalEffortData3.tDuration" readonly />
              </div>
              <div class="col">
                <label>Total FTE</label>
                <b-form-input :value="totalEffortData3.tFte" readonly />
              </div>
            </div>
            <div class="row" v-for="(t, i) in effortData3" :key="i">
              <div class="col-6">
                <label>Skillset</label>
                <b-form-input readonly :value="t.skill" />
                <!-- <v-select readonly :options="['Design', 'Engineering', 'Management']" :value="t.skill"
                  placeholder="Select skillset" outlined @input="effortChange3('skill', i, $event)" /> -->
              </div>
              <div class="col">
                <label>Load</label>
                <b-form-input readonly :value="t.load" @input="effortChange3('load', i, $event)" />
              </div>
              <div class="col">
                <label>Duration</label>
                <b-form-input readonly :value="t.duration" @input="effortChange3('duration', i, $event)" />
              </div>
              <div class="col">
                <label>FTE</label>
                <b-form-input readonly :value="t.fte" @input="effortChange3('fte', i, $event)" />
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Epic</label>
              <v-select v-model="selectedEpic" :options="['Epic A', 'Epic B']" placeholder="Select Epic" outlined />
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
      <b-button variant="outline-primary" @click="hideModal">
        Cancel
      </b-button>
      <b-button variant="primary" @click="handleSave">
        Save
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import Vue from 'vue'
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
      show: false,
      selectedActivity: null,
      selectedEpic: null,
      toMerge: null,
      effortData1: [
        {
          skill: "Design",
          load: 15,
          duration: 23,
          fte: 56
        }
      ],
      effortData2: [
        {
          skill: "Design",
          load: 45,
          duration: 22,
          fte: 14
        },
        {
          skill: "Engineering",
          load: 41,
          duration: 21,
          fte: 17
        },
      ],
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
  watch: {
    isOpen(val) {
      this.show = val
    },
  },
  computed: {
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
      return { ...this.selectedActivityData.phase, activityId: Vue.faker().internet.ip() }
    },
    toMergeList() {
      const arr = []
      this.$store.state.globalState.teamsState[0].phases[2].activities.flat().forEach(t => {
        if (this.selectedActivityData.phase.activityId !== t.activityId) {
          arr.push(t.activityId)
        }
      })
      return arr
    },
    c_TeamTitle() {
      return this.selectedActivityData.team.title
    }
  },
  methods: {
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
      this.merged.activityId = Vue.faker().internet.ip()
    },
    handleSave() {
      if (this.toMerge === null) {
        this.$toast.warning('Please Select toMerge Activity!')
      } else {
        const data = {
          toMergeId1: this.selectedActivityData.phase.activityId,
          toMergeId2: this.toMerge.activityId,
          merged: this.merged,
          teamTitle: this.c_TeamTitle
        }
        this.$store.commit('globalState/HANDLE_ACTIVITY_MERGE', data)
        this.toMerge = null
        this.merged.activityId = Vue.faker().internet.ip()
        this.$refs['my-modal'].hide()
        this.$store.commit('globalState/HIDE_ACTIVITY_DETAIL_MODAL')
      }
    },
    onActivitySelect(selectedActivityId) {
      const selectedActivity = this.$store.state.globalState.teamsState[0].phases[2].activities.flat().find(t => t.activityId === selectedActivityId)
      this.toMerge = selectedActivity
      const mergedLoad = this.merged.effort.load + selectedActivity.effort.load
      const mergedDuration = this.merged.effort.duration + selectedActivity.effort.duration
      const mergedFte = this.merged.effort.fte + selectedActivity.effort.fte
      const effort = { load: mergedLoad, duration: mergedDuration, fte: mergedFte }
      this.merged.effort = effort
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
