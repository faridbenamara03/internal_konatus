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
          <div class="form-group header d-flex justify-content-between">
            <div>
              <label>ACTIVITY ID</label>
              <p v-if="data.phase">
                {{ data.phase.activityId }}
              </p>
            </div>
            <b-badge variant="danger">
              To split
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
              <b-form-input :value="data.phase.title" />
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea
                :value="data.phase.description"
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
          <div v-for="(item, index) in data.phase.dependency" :key="index" class="shadow rounded d-flex" style="padding:10px;justify-content:space-between;">
            <div class="d-flex">
              <div class="bg-warning" style="width:8px;height:22px;border-radius:2px;margin-right:8px" />
              <feather-icon icon="LinkIcon" style="margin-top:4px;margin-right:8px" />
              <i>{{ item }}</i>
            </div>
            <div v-on:click="handleDependencyDelete(index)" style="cursor:pointer">
              <feather-icon icon="TrashIcon" />
            </div>
          </div>
        </div>
        <div class="split-box flex-2">
          <div class="form-group header d-flex justify-content-between">
            <div>
              <label>ACTIVITY ID</label>
              <p v-if="data.phase">
                {{ newActivityId1 }}
              </p>
            </div>
            <b-badge variant="success">
              Splited
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
              <b-form-input v-model="title1" id="input-title1" aria-describedby="input-title1-feedback" :state="title1Valid" />
              <b-form-invalid-feedback id="input-title1-feedback" style="float:left">
                Add a new title
              </b-form-invalid-feedback>
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea v-model="description1" id="input-description1" aria-describedby="input-description1-feedback" :state="description1Valid"
                rows="5"
              />
              <b-form-invalid-feedback id="input-description1-feedback" style="float:left">
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
                  <b-form-input :value="load1" />
                </div>
                <div class="select-box mb-0">
                  <label>Duration</label>
                  <b-form-input :value="duration1" />
                </div>
                <div class="select-box mb-0">
                  <label>FTE</label>
                  <b-form-input :value="fte1" />
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
              <p v-if="data.phase">
                {{ newActivityId2 }}
              </p>
            </div>
            <b-badge variant="success">
              Splited
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
              <b-form-input v-model="title2" id="input-title2" aria-describedby="input-title2-feedback" :state="title2Valid" />
              <b-form-invalid-feedback id="input-title2-feedback" style="float:left">
                Add a new title
              </b-form-invalid-feedback>
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea v-model="description2" id="input-description2" aria-describedby="input-description2-feedback" :state="description2Valid"
                rows="5"
              />
              <b-form-invalid-feedback id="input-description2 -feedback" style="float:left">
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
                  <b-form-input :value="load2" />
                </div>
                <div class="select-box mb-0">
                  <label>Duration</label>
                  <b-form-input :value="duration2" />
                </div>
                <div class="select-box mb-0">
                  <label>FTE</label>
                  <b-form-input :value="fte2" />
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
    data: {
      type: Object,
      default: () => {},
    },
    isOpen: Boolean,
  },
  data() {
    const { load, duration, fte } = this.data.phase.effort
    const load1 = parseInt(load / 2, 10)
    const duration1 = parseInt(duration / 2, 10)
    const fte1 = parseInt(fte / 2, 10)
    const load2 = load - load1
    const duration2 = duration - duration1
    const fte2 = fte - fte1
    return {
      activity: {},
      show: false,
      selectedEpic: null,
      title1: '',
      description1: '',
      title2: '',
      description2: '',
      load1,
      duration1,
      fte1,
      load2,
      duration2,
      fte2
    }
  },
  watch: {
    isOpen(val) {
      this.show = val
    },
  },
  computed: {
    title1Valid() {
      return this.title1.length > 0
    },
    description1Valid() {
      return this.description1.length > 0
    },
    title2Valid() {
      return this.title2.length > 0
    },
    description2Valid() {
      return this.description2.length > 0
    },
    newActivityId1() {
      return '1.28.17.1.225'
    },
    newActivityId2() {
      return '1.28.17.1.226'
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handleSave() {
      if (this.title1Valid && this.description1Valid && this.title2Valid && this.description2Valid) {
        this.$refs['my-modal'].hide()
        const newA1 = { ...this.data.phase }
        const newA2 = { ...this.data.phase }
        newA1.title = this.title1
        newA1.name = 'splited phase1'
        newA1.description = this.description1
        newA1.effort = {
          load: this.load1, duration: this.duration1, fte: this.fte1
        }
        newA1.activityId = this.newActivityId1
        newA2.title = this.title2
        newA2.name = 'splited phase2'
        newA2.description = this.description2
        newA2.effort = {
          load: this.load2, duration: this.duration2, fte: this.fte2
        }
        newA2.activityId = this.newActivityId2
        const data = {
          phase: this.data.phase,
          newA1,
          newA2
        }
        this.$store.commit('teamState/HANDLE_ACTIVITY_SPLIT', data)
      } else {
        this.$toast.warning('Input invalid!')
      }
    },
    handleDependencyDelete(index) {
      const dt = this.data.phase.dependency
      dt.splice(index, 1)
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
