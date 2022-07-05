<template>
  <b-modal
    id="modal-create"
    ref="my-modal"
    title="Create New"
    centered
    no-fade
    hide-backdrop
    static
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Create New
      </h5>
      <div class="modal-actions">
        <b-button
          variant="outline-primary"
        >
          <feather-icon
            icon="SettingsIcon"
            size="18"
          />
          <span class="pl-1">Select Fields</span>
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
    <div class="progress-group">
      <div class="progress-group--bars">
        <div
          v-for="i in 5"
          :key="i"
          class="progress"
          :class="{'active': curIndex === i}"
        />
      </div>
      <p>SELECT OR ADD A NEW PORTFOLIO</p>
    </div>
    <div
      v-if="curIndex === 1"
      class="select-group"
    >
      <div class="select-box">
        <label>Nomenclature System</label>
        <v-select
          v-model="system"
          :options="['SAP', 'Jira', 'Konatus']"
          placeholder="Select System"
          outlined
        />
      </div>
      <div class="select-box">
        <label>Portfolio</label>
        <v-select
          v-model="portfolio"
          :options="['highest', 'high', 'low', 'lowest']"
          placeholder="Select Portfolio"
          outlined
        />
      </div>
      <div class="select-box">
        <label>Program</label>
        <v-select
          v-model="program"
          :options="['highest', 'high', 'low', 'lowest']"
          placeholder="Select Program"
          outlined
        />
      </div>
      <div class="select-box">
        <label>Project</label>
        <v-select
          v-model="project"
          :options="['highest', 'high', 'low', 'lowest']"
          placeholder="Select Project"
          outlined
        />
      </div>
      <div class="select-box">
        <div class="d-flex justify-content-between">
          <label>Sub Project</label>
          <label>(Optional)</label>
        </div>
        <v-select
          v-model="subProject"
          :options="['highest', 'high', 'low', 'lowest']"
          placeholder="Select Sub Project"
          outlined
        />
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button
        variant="outline-primary"
        @click="handlePrev"
      >
        {{ curIndex === 1 ? 'Cancel' : 'Previous' }}
      </b-button>
      <b-button
        variant="primary"
        @click="handleNext"
      >
        {{ curIndex === 5 ? 'Save' : 'Next' }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import { BButton, BModal } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BModal,
    vSelect,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      curIndex: 1,
      system: null,
      portfolio: null,
      program: null,
      project: null,
      subProject: null,
    }
  },
  methods: {
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    handlePrev() {
      if (this.curIndex === 1) {
        this.$refs['my-modal'].hide()
      } else {
        this.curIndex -= 1
      }
    },
    handleNext() {
      if (this.curIndex < 5) {
        this.curIndex += 1
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
