<template>
  <div style="width:600px">
    <h3
      class="modal-title mb-1 text-uppercase"
      style="border-bottom: 2px solid #7367f0"
    >
      {{ otype ==='project' ? 'Add a project or sub project' : otype === 'subproject' ? 'Add a sub-project' : 'Add a program'}}
    </h3>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <div class="d-flex"
              v-if="!externalEditable"
              style="font-size: 14px; color: #898989;text-transform:none"
            >
              External System: {{ exSystemString }}
            </div>
            <div v-else>
              <v-select
                v-model="externalSystem"
                :options="['SAP', 'Jira', 'P6']"
                placeholder="Select System"
                outlined
              />
            </div>
          </div>
          <div class="w-50 d-flex">
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
            <div v-if="otype === 'program' || otype === 'portfolio'">
              <b-form-input
                v-model="step1.programTitle"
                placeholder="Enter Program name"
              />
            </div>
            <div v-else>
              <InputSelect
                placeholder="Select Program"
                :options="getAllProgs()"
                :value="step1.program === null ? null : step1.program.title"
                @customChange="e => handleCustomChange(e, 'program')"
              />
            </div>
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
            <div v-if="otype === 'project'">
              <b-form-input
                v-model="this.projectTitle"
                placeholder="Enter Project name"
              />
            </div>
            <div v-else>
              <InputSelect
                placeholder="Select Project"
                :options="getAllProjects()"
                :value="step1.project === null ? null : step1.project.title"
                @customChange="e => handleCustomChange(e, 'project')"
                :disabled="true"
              />
            </div>
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
            <div v-if="this.otype === 'subproject'">
              <b-form-input
                v-model="this.subProjectTitle"
                placeholder="Enter SubProject name"
              />
            </div>
            <div v-else-if="this.otype !== 'subproject'">
              <InputSelect
                placeholder="Enter SubProject name"
                :options="getAllProjects()"
                :value="step1.subproject === null ? null : step1.subproject.title"
                :disabled="true"
                @customChange="e => handleCustomChange(e, 'subproject')"
              />
            </div>
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
          <label>Description</label>
          <b-form-input
            v-model="step2.description"
            type="text"
          />
        </div>
        <div class="select-box">
          <label>Priority</label>
          <v-select
            v-model="step2.priority"
            :options="priorityOptions"
            placeholder="Highest"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Budget Authorized</label>
          <b-form-input
            v-model="step2.authorized"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Budget Real Estimated</label>
          <b-form-input
            v-model="step2.realestimated"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Budget Engaged</label>
          <b-form-input
            v-model="step2.engaged"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Budget Spent</label>
          <b-form-input
            v-model="step2.spent"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box w-50">
          <label>Budget Demand</label>
          <b-form-input
            v-model="step2.demand"
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
          <label>Next Phase</label>
          <b-form-input
            id="program_nextphase"
            v-model="step2.next_phase"
            :disabled="true"
          />
        </div>
      </div>
      <div class="select-group-sub">
        <div class="select-box w-50">
          <label>WinRate</label>
          <b-form-input
            v-model="step5.winrate"
            placeholder="Input WinRate"
          />
        </div>
        <div class="select-box" />
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
        <h5>RationalE</h5>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Date Production Deadline</label>
          <b-form-datepicker
            id="production-datepicker"
            v-model="step3.p_deadline"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
        <div class="select-box">
          <label>Nature of deadline</label>
          <b-form-input
            id="nature_deadline"
            v-model="step3.n_deadline"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Customer Ex</label>
          <b-form-input
            id="range-customer"
            v-model="step3.customer_ex"
            class="slider"
            type="range"
            min="0"
            max="10"
          />
        </div>
        <div class="select-box">
          <label>Sales Ex</label>
          <b-form-input
            id="range-sales"
            v-model="step3.sales_ex"
            class="slider"
            type="range"
            min="0"
            max="10"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box mb-0">
          <label>Scoring</label>
          <b-form-input
            id="range-scoring"
            v-model="step3.scoring"
            class="slider"
            type="range"
            min="0"
            max="10"
          />
        </div>
        <div class="select-box m-0">
          <label>ROI</label>
          <b-form-input
            id="range-roi"
            v-model="step3.roi"
            class="slider"
            type="range"
            min="0"
            max="10"
          />
        </div>
      </div>
    </div>
    <div
      v-if="otype !== 'program' && otype !== 'portfolio'"
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="notice-box">
        <feather-icon
          icon="FileTextIcon"
          size="20"
        />
        <h5>planning</h5>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Phase 1 Start Date</label>
          <b-form-datepicker
            id="date_next_gate-datepicker1"
            v-model="step4.phase_start_date"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
        <div class="select-box">
          <label>{{ this.lastPhase === undefined ? 'Last Phase' : this.lastPhase.title }} End Date</label>
          <b-form-datepicker
            id="date_next_gate-datepicker2"
            v-model="step4.phase_end_date"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
      </div>
    </div>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="notice-box">
        <feather-icon
          icon="LayersIcon"
          size="20"
        />
        <h5>Product line</h5>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Head of Product Portfolio</label>
          <v-select
            v-model="step5.head_product_portfolio"
            :options="['SAP', 'Jira', 'P6']"
            placeholder="Select System"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Product Manager</label>
          <v-select
            v-model="step5.product_manager"
            :options="priorityOptions"
            placeholder="Select Portfolio"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Architect</label>
          <v-select
            v-model="step5.architect"
            :options="['SAP', 'Jira', 'P6']"
            placeholder="Select System"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Head of Program Direction</label>
          <v-select
            v-model="step5.head_program_direction"
            :options="priorityOptions"
            placeholder="Select Portfolio"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Program Director</label>
          <v-select
            v-model="step5.program_director"
            :options="priorityOptions"
            placeholder="Select Portfolio"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Head of Architect</label>
          <v-select
            v-model="step5.head_architect"
            :options="priorityOptions"
            placeholder="Select Head of Architect"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Sponsor</label>
          <v-select
            v-model="step5.sponsor"
            :options="priorityOptions"
            placeholder="Select Sponsor"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Product Line</label>
          <v-select
            v-model="step5.product_line"
            :options="priorityOptions"
            placeholder="Select Product Line"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Project Manager</label>
          <v-select
            v-model="step5.project_manager"
            :options="priorityOptions"
            placeholder="Select Project Manager"
            outlined
          />
        </div>
        <div class="select-box" />
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
      priorityOptions: ['Highest', 'High', 'Low', 'Lowest'],
      curIndex: 1,
      lastPhase: null,
      subProjectTitle: null,
      projectTitle: null,
      programTitle: null,
      externalEditable: false,
      externalSystems: ["Jira"],
      externalSystem: "Jira",
      externalId: "JR-12345",
      exSystemString: '',
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
        description: null,
        priority: null,
        value: 0,
        budget: 0,
        // quote: 0,
        deadline: null,
        next_phase: null,
        realestimated: 0,
        spent: 0,
        demand: 0,
        authorized: 0,
        engaged: 0,
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
        roi: 0,
      },
      step4: {
        phase_start_date: null,
        phase_end_date: null
      },
      step5: {
        head_product_portfolio: null,
        product_manager: null,
        project_manager: null,
        architect: null,
        head_program_direction: null,
        program_director: null,
        product_line: null,
        sponsor: null,
        head_architect: null,
        winrate: 0
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
      console.log("INITD:", data, "OTYPE:", this.otype)
      const initData = data === undefined ? this.$store.state.globalState.selectedProgramObject : data
      if (initData === undefined) {
        this.step1.portfolio = this.$store.state.globalState.selectedNavObj
        if (this.$store.state.globalState.selectedNavObj.type === 'portfolio') this.otype = 'portfolio'
        if (this.$store.state.globalState.selectedNavObj.type === 'program') this.otype = 'program'
      } else {
        this.otype = this.$store.state.globalState.selectedProgramType
        // if (this.otype === 'program') this.programTitle = initData.title
        // else if (this.otype === 'project') this.projectTitle = initData.title
        // else if (this.otype === 'subproject') this.subProjectTitle = initData.title
        this.step1.portfolioId = initData.portfolioid || 0
        this.step2.description = initData.description
        this.step2.priority = this.priorityOptions[initData.priority - 1]
        this.step2.deadline = initData.deadline
        this.step2.next_phase = initData.next_gate
        this.step2.spent = initData.spent
        this.step2.value = initData.value
        this.step2.engaged = initData.engaged
        this.step2.demand = initData.budget
        // this.step2.quote = initData.quote
        this.step2.authorized = initData.authorized
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
      }
      const phases = this.$store.state.globalState.allPhaseData
      phases.sort((a, b) => a.id - b.id)
      this.lastPhase = phases.at(-1)
    },
    handleExternalEdit() {
      this.externalEditable = !this.externalEditable
      this.externalSystems.push(this.externalSystem)
      this.externalSystems = this.externalSystems.filter((value, index, array) => array.indexOf(value) === index)
      this.exSystemString = this.externalSystems.toString()
    },
    async handleSave() {
      const newProgramData = {
        step1: this.step1,
        step2: this.step2,
        step3: this.step3,
        step4: this.step4,
        step5: this.step5,
        subProjectTitle: this.subProjectTitle,
        projectTitle: this.projectTitle,
        programTitle: this.programTitle,
        type: this.otype
      }
      if (this.step1.portfolio === null || this.step2.title === null || this.step2.priority === null || this.step2.deadline === null) {
        this.$toast.error('Please input all correctly.')
      } else {
        if (this.otype === 'program') {
          await this.$store.dispatch('globalState/create_new_program', {
            data: {
              ...newProgramData
            }
          })
        } else if (this.otype === 'project') {
          await this.$store.dispatch('globalState/create_new_project', {
            data: {
              ...newProgramData
            }
          })
        } else if (this.otype === 'subproject') {
          await this.$store.dispatch('globalState/create_new_subproject', {
            data: {
              ...newProgramData
            }
          })
        }
        await this.$store.dispatch('globalState/load_org_data')
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
      switch (field) {
        case 'portfolio':
          this.step1.portfolioId = e.id
          break
        case 'program':
          this.step1.programId = e.id
          break
        case 'project':
          this.step1.projectId = e.id
          break
        default:
          break
      }
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
