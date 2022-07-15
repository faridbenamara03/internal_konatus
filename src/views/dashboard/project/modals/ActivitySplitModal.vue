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
              <b-form-input />
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea
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
                  <b-form-input />
                </div>
                <div class="select-box mb-0">
                  <label>Duration</label>
                  <b-form-input />
                </div>
                <div class="select-box mb-0">
                  <label>FTE</label>
                  <b-form-input />
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
                {{ data.phase.activityId }}
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
              <b-form-input />
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea
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
                  <b-form-input />
                </div>
                <div class="select-box mb-0">
                  <label>Duration</label>
                  <b-form-input />
                </div>
                <div class="select-box mb-0">
                  <label>FTE</label>
                  <b-form-input />
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
                {{ data.phase.activityId }}
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
              <b-form-input />
            </div>
          </div>
          <div class="form-group">
            <div class="select-box">
              <label>Description</label>
              <b-form-textarea
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
                  <b-form-input />
                </div>
                <div class="select-box mb-0">
                  <label>Duration</label>
                  <b-form-input />
                </div>
                <div class="select-box mb-0">
                  <label>FTE</label>
                  <b-form-input />
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
    data: {
      type: Object,
      default: () => {},
    },
    isOpen: Boolean,
  },
  data() {
    return {
      activity: {},
      show: false,
      selectedEpic: null,
    }
  },
  watch: {
    isOpen(val) {
      this.show = val
    },
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handleSave() {
      this.$refs['my-modal'].hide()
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
