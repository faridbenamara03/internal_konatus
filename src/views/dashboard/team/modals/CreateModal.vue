<<<<<<< HEAD
<template>
  <b-modal id="modal-create" ref="my-modal" title="Create New" centered no-fade hide-backdrop static>
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Add New Resource
      </h5>
      <div class="modal-actions">
        <!-- <b-button
          variant="outline-primary"
        >
          <feather-icon
            icon="SettingsIcon"
            size="18"
          />
          <span class="pl-1">Select Fields</span>
        </b-button> -->
        <b-button variant="outline-primary" @click="hideModal">
          <feather-icon icon="XIcon" size="18" />
        </b-button>
      </div>
    </template>
    <div class="progress-group">
      <div class="progress-group--bars">
        <div v-for="i in 3" :key="i" class="progress" :class="{'active': curIndex >= i}" />
      </div>
      <p class="text-uppercase">
        {{ progressDescription[curIndex - 1] }}
      </p>
    </div>
    <div v-if="curIndex === 1">
      <b-form-group label="Name" label-for="input-formatter" class="mb-2">
        <b-form-input id="input-formatter" placeholder="Paul Michel" />
      </b-form-group>
      <div class="d-flex">
        <div style="flex:1;padding-right:3px;">
          <b-form-group label="Role" label-for="input-formatter" class="mb-0">
            <b-form-input id="input-formatter" placeholder="Developer" />
          </b-form-group>
        </div>
        <div style="flex:1;padding-left:3px;">
          <b-form-group label="Hours/Day" label-for="input-formatter" class="mb-0">
            <b-form-input id="input-formatter" placeholder="8" />
          </b-form-group>
        </div>
      </div>
    </div>
    <div v-if="curIndex === 2" class="select-group">
      <div class="notice-box">
        <feather-icon icon="KeyIcon" size="20" />
        <h5>SKILLSETS</h5>
      </div>
      <div class="d-flex">
        <div style="flex:1;padding-right:3px;">
          <label>Management & Study</label>
          <v-select v-model="step2.priority" :options="['Highest', 'High', 'Medium', 'Low', 'Lowest']" placeholder="Highest"
            outlined />
        </div>
        <div style="flex:1;padding-left:3px;">
          <label>Developer</label>
          <v-select v-model="step2.value" :options="['0', '100']" placeholder="100" outlined />
        </div>
      </div>
      <div class="d-flex">
        <div style="flex:1;padding-right:3px;">
          <label>Internal Test</label>
          <v-select v-model="step2.budget" :options="['100', '200', '300', '400']" placeholder="300" outlined />
        </div>
        <div style="flex:1;padding-left:3px;">
          <label>Test Management</label>
          <v-select v-model="step2.quote" :options="['0', '100']" placeholder="0" outlined />
        </div>
      </div>
      <div class="d-flex">
        <div style="flex:1;padding-right:3px;">
          <label>Test</label>
          <v-select v-model="step2.phase" :options="['research']" placeholder="Research" outlined />
        </div>
        <div style="flex:1;padding-left:3px;">
        </div>
      </div>
    </div>
    <div v-if="curIndex === 3" class="select-group">
      <div class="notice-box">
        <feather-icon icon="KeyIcon" size="20" />
        <h5>TEMAS</h5>
      </div>
      <div class="select-box">
        <label>Teams Assigned</label>
        <v-select v-model="step3.n_deadline" :options="['Team A', 'Team B', 'Team C', 'Team D']" placeholder="Select Teams" outlined />
      </div>
      <div class="shadow rounded d-flex" style="padding:10px;justify-content:space-between;">
        <div class="d-flex">
          <div class="bg-warning mr-1" style="width:10px;height:20px;border-radius:4px;" />Team B
        </div>
        <div>
          <feather-icon icon="TrashIcon" style="color:darkred" />
        </div>
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <div style="flex:1">
        <b-button block variant="outline-primary" @click="handlePrev">
          {{ curIndex === 1 ? 'Cancel' : 'Previous' }}
        </b-button>
      </div>
      <div style="flex:1">
        <b-button block variant="primary" @click="handleNext">
          {{ curIndex === 3 ? 'Save' : 'Next' }}
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BFormInput, BModal, BFormGroup
  // BInputGroup, BInputGroupPrepend, BFormDatepicker
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    // BFormDatepicker,
    BFormInput,
    // BRow,
    // BCol,
    BFormGroup,
    // BInputGroup,
    // BInputGroupPrepend,
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
      progressDescription: [
        'ADD resources details',
        'ADD skillsets',
        'Assign a team',
      ],
      step1: {
        system: null,
        portfolio: null,
        program: null,
        project: null,
        subProject: null,
      },
      step2: {
        priority: null,
        value: 0,
        budget: 0,
        quote: 0,
        phase: null,
        budgetOpen: 0,
        date: null,
      },
      step3: {
        p_deadline: null,
        n_deadline: null,
        customer_ex: 0,
        sales_ex: 0,
        scoring: 0,
      },
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'],
      years: ['2022', '2023'],
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
      if (this.curIndex < 3) {
        this.curIndex += 1
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
=======
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
        Add New Resource
      </h5>
      <div class="modal-actions">
        <!-- <b-button
          variant="outline-primary"
        >
          <feather-icon
            icon="SettingsIcon"
            size="18"
          />
          <span class="pl-1">Select Fields</span>
        </b-button> -->
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
          v-for="i in 3"
          :key="i"
          class="progress"
          :class="{'active': curIndex >= i}"
        />
      </div>
      <p class="text-uppercase">
        {{ progressDescription[curIndex - 1] }}
      </p>
    </div>
    <div v-if="curIndex === 1">
      <b-form-group
        label="Name"
        label-for="input-formatter"
        class="mb-2"
      >
        <b-form-input
          id="input-formatter"
          placeholder="Paul Michel"
        />
      </b-form-group>
      <div class="d-flex">
        <div style="flex:1;padding-right:3px;">
          <b-form-group
            label="Role"
            label-for="input-formatter"
            class="mb-0"
          >
            <b-form-input
              id="input-formatter"
              placeholder="Developer"
            />
          </b-form-group>
        </div>
        <div style="flex:1;padding-left:3px;">
          <b-form-group
            label="Hours/Day"
            label-for="input-formatter"
            class="mb-0"
          >
            <b-form-input
              id="input-formatter"
              placeholder="8"
            />
          </b-form-group>
        </div>
      </div>
    </div>
    <div
      v-if="curIndex === 2"
      class="select-group"
    >
      <div class="notice-box">
        <feather-icon
          icon="KeyIcon"
          size="20"
        />
        <h5>SKILLSETS</h5>
      </div>
      <div class="d-flex">
        <div style="flex:1;padding-right:3px;">
          <label>Management & Study</label>
          <v-select
            v-model="step2.priority"
            :options="['Highest', 'High', 'Medium', 'Low', 'Lowest']"
            placeholder="Highest"
            outlined
          />
        </div>
        <div style="flex:1;padding-left:3px;">
          <label>Developer</label>
          <v-select
            v-model="step2.value"
            :options="['0', '100']"
            placeholder="100"
            outlined
          />
        </div>
      </div>
      <div class="d-flex">
        <div style="flex:1;padding-right:3px;">
          <label>Internal Test</label>
          <v-select
            v-model="step2.budget"
            :options="['100', '200', '300', '400']"
            placeholder="300"
            outlined
          />
        </div>
        <div style="flex:1;padding-left:3px;">
          <label>Test Management</label>
          <v-select
            v-model="step2.quote"
            :options="['0', '100']"
            placeholder="0"
            outlined
          />
        </div>
      </div>
      <div class="d-flex">
        <div style="flex:1;padding-right:3px;">
          <label>Test</label>
          <v-select
            v-model="step2.phase"
            :options="['research']"
            placeholder="Research"
            outlined
          />
        </div>
        <div style="flex:1;padding-left:3px;" />
      </div>
    </div>
    <div
      v-if="curIndex === 3"
      class="select-group"
    >
      <div class="notice-box">
        <feather-icon
          icon="KeyIcon"
          size="20"
        />
        <h5>TEMAS</h5>
      </div>
      <div class="select-box">
        <label>Teams Assigned</label>
        <v-select
          v-model="step3.n_deadline"
          :options="['Team A', 'Team B', 'Team C', 'Team D']"
          placeholder="Select Teams"
          outlined
        />
      </div>
      <div
        class="shadow rounded d-flex"
        style="padding:10px;justify-content:space-between;"
      >
        <div class="d-flex">
          <div
            class="bg-warning mr-1"
            style="width:10px;height:20px;border-radius:4px;"
          />Team B
        </div>
        <div>
          <feather-icon
            icon="TrashIcon"
            style="color:darkred"
          />
        </div>
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <div style="flex:1">
        <b-button
          block
          variant="outline-primary"
          @click="handlePrev"
        >
          {{ curIndex === 1 ? 'Cancel' : 'Previous' }}
        </b-button>
      </div>
      <div style="flex:1">
        <b-button
          block
          variant="primary"
          @click="handleNext"
        >
          {{ curIndex === 3 ? 'Save' : 'Next' }}
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BFormInput, BModal, BFormGroup
  // BInputGroup, BInputGroupPrepend, BFormDatepicker
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    // BFormDatepicker,
    BFormInput,
    // BRow,
    // BCol,
    BFormGroup,
    // BInputGroup,
    // BInputGroupPrepend,
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
      progressDescription: [
        'ADD resources details',
        'ADD skillsets',
        'Assign a team',
      ],
      step1: {
        system: null,
        portfolio: null,
        program: null,
        project: null,
        subProject: null,
      },
      step2: {
        priority: null,
        value: 0,
        budget: 0,
        quote: 0,
        phase: null,
        budgetOpen: 0,
        date: null,
      },
      step3: {
        p_deadline: null,
        n_deadline: null,
        customer_ex: 0,
        sales_ex: 0,
        scoring: 0,
      },
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemeber'],
      years: ['2022', '2023'],
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
      if (this.curIndex < 3) {
        this.curIndex += 1
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
