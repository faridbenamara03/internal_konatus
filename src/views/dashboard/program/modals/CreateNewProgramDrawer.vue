<template>
  <div style="width:600px">
    <h3 class="modal-title mb-1">
      Create New
    </h3>
    <p
      class="text-uppercase"
      style="border-bottom: 2px solid #7367f0"
    >
      Create a new Program or Project
    </p>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Nomenclature System</label>
            <InputSelect
              placeholder="Select System"
              :options="[{ title: 'SAP', id: '1'}, { title: 'Jira', id: '2'}, { title: 'Konatus', id: '3'}]"
              :value="step1.system === null ? null : step1.system.title"
              @customChange="e => handleCustomChange(e, 'system')"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Portfolio</label>
            <InputSelect
              placeholder="Select Portfolio"
              :options="getAllPorts()"
              :value="step1.portfolio === null ? null : step1.portfolio.title"
              @customChange="e => handleCustomChange(e, 'portfolio')"
            />
          </div>
          <div class="w-50 pl-1">
            <label>PortfolioID</label>
            <b-form-input
              v-model="step1.portfolioId"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Program</label>
            <InputSelect
              placeholder="Select Program"
              :options="getAllProgs()"
              :value="step1.program === null ? null : step1.program.title"
              @customChange="e => handleCustomChange(e, 'program')"
            />
          </div>
          <div class="w-50 pl-1">
            <label>ProgramID</label>
            <b-form-input
              v-model="step1.programId"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Project</label>
            <InputSelect
              placeholder="Select Project"
              :options="getAllProjects()"
              :value="step1.project === null ? null : step1.project.title"
              @customChange="e => handleCustomChange(e, 'project')"
            />
          </div>
          <div class="w-50 pl-1">
            <label>ProjectID</label>
            <b-form-input
              v-model="step1.projectId"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Sub Project(Optional)</label>
            <InputSelect
              placeholder="Select Sub Project"
              :options="getAllProjects()"
              :value="step1.subproject === null ? null : step1.subproject.title"
              @customChange="e => handleCustomChange(e, 'subproject')"
            />
          </div>
          <div class="w-50 pl-1">
            <label>SubProject</label>
            <b-form-input
              v-model="step1.subProjectId"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="notice-box">
        <feather-icon
          icon="KeyIcon"
          size="20"
        />
        <h5>Key elements</h5>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Title</label>
          <b-form-input
            v-model="step2.title"
            type="text"
          />
        </div>
        <div class="select-box">
          <label>Priority</label>
          <v-select
            v-model="step2.priority"
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Highest"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Demand</label>
          <b-form-input
            v-model="step2.demand"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Quote</label>
          <b-form-input
            v-model="step2.quote"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Authorised</label>
          <b-form-input
            v-model="step2.authorised"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>RealEstimated</label>
          <b-form-input
            v-model="step2.realestimated"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Engaged</label>
          <b-form-input
            v-model="step2.engaged"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Spent</label>
          <b-form-input
            v-model="step2.spent"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Budget</label>
          <b-form-input
            v-model="step2.budget"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Value</label>
          <b-form-input
            v-model="step2.value"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Deadline</label>
          <b-form-datepicker
            id="program_deadline"
            v-model="step2.deadline"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
        <div class="select-box">
          <label>Next_Gate</label>
          <b-form-datepicker
            id="program_nextgate"
            v-model="step2.next_gate"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
      </div>
    </div>
    <div>
      <b-button
        style="width: 100%"
        variant="primary"
        @click="handleSave"
      >
        Save
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton, BFormDatepicker, BFormInput
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import InputSelect from './InputSelect.vue'

export default {
  components: {
    BButton,
    BFormDatepicker,
    BFormInput,
    vSelect,
    InputSelect
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    otype: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      curIndex: 1,
      step1: {
        system: null,
        portfolio: null,
        program: null,
        project: null,
        subproject: null,
        portfolioId: 0,
        programId: 0,
        projectId: 0,
        subProjectId: 0
      },
      step2: {
        title: null,
        priority: null,
        value: 0,
        budget: 0,
        quote: 0,
        deadline: null,
        next_gate: null,
        realestimated: 0,
        spent: 0,
        demand: 0,
        authorised: 0,
        engaged: 0,
        phase: null,
        budgetOpen: 0,
        date: null,
      },
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      years: ['2022', '2023', '2024', '2025'],
    }
  },
  watch: {
      data: {
          immediate: true,
          handler(newVal) {
            this.initializeData(newVal) // ??
          },
      },
  },
  async mounted() {
    await this.$store.dispatch('globalState/get_all_portfolios')
  },
  methods: {
    initializeData(data) {
      const initData = data === undefined ? this.$store.state.globalState.selectedProgramObject : data
      this.step1.portfolioId = initData.portfolioid || 0
      this.step2.title = initData.title
      this.step2.budget = initData.budget
      this.step2.priority = initData.priority
      this.step2.deadline = initData.deadline
      this.step2.next_gate = initData.next_gate
      this.step2.spent = initData.spent
      this.step2.value = initData.value
      this.step2.engaged = initData.engaged
      this.step2.demand = initData.demand
      this.step2.quote = initData.quote
      this.step2.authorised = initData.authorised
      this.step2.realestimated = initData.realestimated
      const allPts = this.getAllPorts()
      const allPgs = this.getAllProgs()
      const allPjs = this.getAllProjects()
      const portfolios = allPts.filter(port => port.id === initData.portfolioid)
      if (portfolios.length > 0) {
        [this.step1.portfolio] = portfolios
      }
      if (initData.type === "program") {
        this.step1.programId = initData.id || 0
        const programs = allPgs.filter(pg => pg.id === initData.id)
        if (programs.length > 0) {
          [this.step1.program] = programs
        }
      } else if (initData.type === "project") {
        this.step1.programId = initData.progid
        const programs = allPgs.filter(pg => pg.id === initData.progid)
        if (programs.length > 0) {
          [this.step1.program] = programs
        }
        this.step1.projectId = initData.id || 0
        const projects = allPjs.filter(pj => pj.id === initData.id)
        if (projects.length > 0) {
          [this.step1.project] = projects
        }
      }
    },
    async handleSave() {
      const newProgramData = {
        step1: this.step1,
        step2: this.step2
      }
      if (this.step1.portfolio === null || this.step2.title === null || this.step2.priority === null || this.step2.deadline === null || this.step2.next_gate === null) {
        this.$toast.error('Please input all correctly.')
      } else {
        if (this.otype === 'program') {
          await this.$store.dispatch('globalState/create_new_program', {
            data: {
              ...newProgramData
            }
          })
        } else {
          await this.$store.dispatch('globalState/create_new_project', {
            data: {
              ...newProgramData
            }
          })
        }
        await this.$store.dispatch('globalState/load_org_data')
        // this.$refs['my-modal'].hide()
      }
    },
    getAllPorts() {
      const pts = Array.from(this.$store.state.globalState.allPortData)
      return pts
    },
    getAllProgs() {
      const pgs = Array.from(this.$store.state.globalState.allProgData)
      return pgs
    },
    getAllProjects() {
      const pjs = Array.from(this.$store.state.globalState.allProjData)
      return pjs
    },
    handleAddPhase() {
      if (this.step4.phaseData[this.step4.phaseData.length - 1].phase_start_date === null) {
        this.$toast.warning('Please select phase start date')
      } else {
        this.step4.phaseData.push(
          {
            phase: null,
            phase_start_date: this.step4.phaseData[this.step4.phaseData.length - 1].phase_end_date ? this.step4.phaseData[this.step4.phaseData.length - 1].phase_end_date : null,
            phase_end_date: null
          }
        )
      }
    },
    handleCustomChange(e, field) {
      this.step1[field] = e
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/components/variables-dark";
.range-slider-fill{ background-color: #ff9c00; }
.select-group {
  padding: 27px 0;
  .divider {
    width: 63px;
    height: 0px;
    border: 1px solid $theme-dark-border-color;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0) rotate(90deg);
    top: 16px;
  }
  .select-box {
    label {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      &.notice {
        color: $theme-dark-body-color;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
      }
    }
    .vs__dropdown-toggle {
      background: $theme-dark-card-bg;
      border-radius: 6px;
    }
    .v-select {
      flex: 1;
    }
    margin-bottom: 27px;
    &:last-child {
      margin: 0;
    }
    .b-form-btn-label-control {
      background: $theme-dark-card-bg;
      label {
        font-size: inherit;
        line-height: 200%;
      }
    }
    // .slider {

    // }
  }
  .notice-box {
    padding: 10px 0;
    display: flex;
    align-items: center;
    margin-bottom: 27px;
    border-bottom: 1px solid $theme-dark-border-color;
    svg {
      color: $theme-dark-navigation-li-icon-color;
    }
    h5 {
      font-weight: 700;
      font-size: 15px;
      line-height: 24px;
      margin: 0 0 0 8px;
      text-transform: uppercase;
    }
  }
  .select-group--sub {
    display: flex;
    justify-content: space-between;
    position: relative;
    .select-box {
      margin-right: 16px;
      flex: 1;
      &:last-child {
        margin: 0;
      }
    }
  }
}
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
