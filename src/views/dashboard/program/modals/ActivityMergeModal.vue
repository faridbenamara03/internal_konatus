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
          <div class="form-group header d-flex justify-content-between">
            <div>
              <label>ACTIVITY ID</label>
              <p v-if="selectedActivityData.phase">
                {{ selectedActivityData.phase.activityId }}
              </p>
            </div>
            <b-badge variant="danger">
              To merge
            </b-badge>
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
              <feather-icon
                icon="BarChart2Icon"
                size="18"
              />
              <p class="pl-1 m-0 text-uppercase">
                effort
              </p>
            </div>
          </div>
          <div class="form-group">
            <div class="select-group p-0">
              <div class="select-group--sub">
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
            <b-button
              variant="outline-primary"
            >
              <feather-icon icon="PlusIcon" />
              <span class="pl-1">Add dependency</span>
            </b-button>
          </div>
          <div class="form-group">
            <div class="detail-box">
              <custom-icon
                name="hexahedron"
              />
              <p class="pl-1 m-0 text-uppercase">
                Dependencies
              </p>
            </div>
          </div>
        </div>
        <div class="split-box flex-2">
          <div class="form-group header d-flex justify-content-between">
            <div>
              <label>ACTIVITY ID</label>
              <p v-if="selectedActivityData.phase">
                {{ toMerge ? toMerge.activityId : '' }}
              </p>
            </div>
            <b-badge variant="danger">
              To merge
            </b-badge>
          </div>
          <div class="form-group" v-if="this.toMerge === null">
            <div class="select-box">
              <label>Search activity</label>
              <v-select
                v-model="selectedActivity"
                :options="this.toMergeList"
                @input="onActivitySelect"
                placeholder="Select an activity"
                outlined
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
                <b-form-input :value="this.toMerge.title" />
              </div>
            </div>
            <div class="form-group">
              <div class="select-box">
                <label>Description</label>
                <b-form-textarea
                  :value="this.toMerge.description"
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
                <p class="pl-1 m-0 text-uppercase">
                  effort
                </p>
              </div>
            </div>
            <div class="form-group">
              <div class="select-group p-0">
                <div class="select-group--sub">
                  <div class="select-box mb-0">
                    <label>Load</label>
                    <b-form-input :value="this.toMerge.effort.load" />
                  </div>
                  <div class="select-box mb-0">
                    <label>Duration</label>
                    <b-form-input :value="this.toMerge.effort.duration" />
                  </div>
                  <div class="select-box mb-0">
                    <label>FTE</label>
                    <b-form-input :value="this.toMerge.effort.fte" />
                  </div>
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
              <b-button
                variant="outline-primary"
              >
                <feather-icon icon="PlusIcon" />
                <span class="pl-1">Add dependency</span>
              </b-button>
            </div>
            <div class="form-group">
              <div class="detail-box">
                <custom-icon
                  name="hexahedron"
                />
                <p class="pl-1 m-0 text-uppercase">
                  Dependencies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="split-box flex-3">
          <div class="form-group header d-flex justify-content-between">
            <div>
              <label>ACTIVITY ID</label>
              <p v-if="selectedActivityData.phase">
                {{ merged.activityId }}
              </p>
            </div>
            <b-badge variant="success">
              Merged
            </b-badge>
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
              <p class="pl-1 m-0 text-uppercase">
                effort
              </p>
            </div>
          </div>
          <div class="form-group">
            <div class="select-group p-0">
              <div class="select-group--sub">
                <div class="select-box mb-0">
                  <label>Load</label>
                  <b-form-input :value="merged.effort.load" />
                </div>
                <div class="select-box mb-0">
                  <label>Duration</label>
                  <b-form-input :value="merged.effort.duration" />
                </div>
                <div class="select-box mb-0">
                  <label>FTE</label>
                  <b-form-input :value="merged.effort.fte" />
                </div>
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
            <b-button
              variant="outline-primary"
            >
              <feather-icon icon="PlusIcon" />
              <span class="pl-1">Add dependency</span>
            </b-button>
          </div>
          <div class="form-group">
            <div class="detail-box">
              <custom-icon
                name="hexahedron"
              />
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
      default: () => {},
    },
    isOpen: Boolean,
    team_data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      activity: {},
      show: false,
      selectedActivity: null,
      selectedEpic: null,
      toMerge: null,
    }
  },
  watch: {
    isOpen(val) {
      this.show = val
    },
  },
  computed: {
    merged() {
      return { ...this.selectedActivityData.phase, activityId: Vue.faker().internet.ip() }
    },
    toMergeList() {
      const arr = []
      this.selectedActivityData.team.phases.flat().forEach(t => {
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
      const selectedActivity = this.selectedActivityData.team.phases.flat().find(t => t.activityId === selectedActivityId)
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
