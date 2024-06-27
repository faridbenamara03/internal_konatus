<template>
  <div style="width:600px">
    <h3
      class="modal-title mb-1 text-uppercase"
      style="border-bottom: 2px solid #7367f0"
    >
      {{ otype ==='project' ? 'Add a project or sub project' : otype === 'subproject' ? 'Add a sub-project' : 'Add a program' }}
    </h3>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>External System</label>
            <v-select
              v-model="externalSystem"
              :options="['SAP', 'Jira', 'Devops', 'primavera', 'Deviprop']"
              placeholder="Select External System"
              outlined
              @input="updateExternalID"
            />
          </div>
          <div class="w-50 pl-1">
            <label>System ID</label>
            <div class="d-flex">
              <b-form-input
                v-model="externalId"
                placeholder="Input External Activity Id"
              />
              <div
                style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                @click="handleAddExternal"
              >
                <feather-icon
                  :icon="'PlusIcon'"
                  style="color: #7367f0"
                  size="20"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="exSystemString !== ''"
          class="d-flex mt-2"
          style="font-size: 14px; color: #898989;text-transform:none"
        >
          External System: {{ exSystemString }}
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
              :disabled="true"
              @customChange="e => handleCustomChange(e, 'portfolio')"
            />
          </div>
          <div class="w-50 pl-1">
            <label>PortfolioID</label>
            <b-form-input
              v-model="step1.portfolioId"
              :disabled="true"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Program</label>
            <div v-if="otype === 'program' || otype === 'portfolio' || otype === 'company'">
              <b-form-input
                v-model="programTitle"
                placeholder="Enter Program name"
                type="text"
              />
            </div>
            <div v-else>
              <InputSelect
                placeholder="Select Program"
                :options="getAllProgs()"
                :value="step1.program === null ? null : step1.program.title"
                :disabled="true"
                @customChange="e => handleCustomChange(e, 'program')"
              />
            </div>
          </div>
          <div class="w-50 pl-1">
            <label>ProgramID</label>
            <b-form-input
              v-model="step1.programId"
              :disabled="true"
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
                v-model="projectTitle"
                placeholder="Enter Project name"
                type="text"
              />
            </div>
            <div v-else>
              <InputSelect
                placeholder="Select Project"
                :options="getAllProjects()"
                :value="step1.project === null ? null : step1.project.title"
                :disabled="true"
                @customChange="e => handleCustomChange(e, 'project')"
              />
            </div>
          </div>
          <div class="w-50 pl-1">
            <label>ProjectID</label>
            <b-form-input
              v-model="step1.projectId"
              :disabled="true"
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
                v-model="subProjectTitle"
                type="text"
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
              :disabled="true"
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
            :disabled="true"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Budget Engaged</label>
          <b-form-input
            v-model="step2.engaged"
            type="number"
            :disabled="true"
          />
        </div>
        <div class="select-box">
          <label>Budget Spent</label>
          <b-form-input
            v-model="step2.spent"
            type="number"
            :disabled="true"
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
          <label>WinRate</label>
          <b-form-input
            v-model="step5.winrate"
            placeholder="Input WinRate"
          />
        </div>
        <div class="select-box">
          <div
            v-if="otype === 'program' || otype === 'portfolio' || otype === 'company'"
          />
          <div
            v-else
          >
            <label>Current Phase</label>
            <b-form-input
              id="program_nextphase"
              v-model="step2.next_phase"
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
        <h5>RationalE</h5>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Nature of deadline</label>
          <v-select
            v-model="step3.n_deadline"
            :options="nDeadlineOptions"
            placeholder="Select Nature of deadline"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Deadline</label>
          <b-form-datepicker
            id="program_deadline"
            v-model="step2.deadline"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
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
            max="100"
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
            max="100"
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
            max="100"
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
            max="100"
          />
        </div>
      </div>
    </div>
    <div
      v-if="otype !== 'program' && otype !== 'portfolio' && otype !== null && otype !== 'company'"
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
            :options="headProductPortOptions"
            placeholder="Select Head of Product Portfolios"
            outlined
            taggable
          />
        </div>
        <div class="select-box">
          <label>Product Manager</label>
          <v-select
            v-model="step5.product_manager"
            :options="productManagerOptions"
            placeholder="Select Product Manager"
            outlined
            taggable
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Architect</label>
          <v-select
            v-model="step5.architect"
            :options="architectOptions"
            placeholder="Select Architect"
            outlined
            taggable
          />
        </div>
        <div class="select-box">
          <label>Head of Program Direction</label>
          <v-select
            v-model="step5.head_program_direction"
            :options="headProgramDirectorOptions"
            placeholder="Select Head of Program Direction"
            outlined
            taggable
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Program Director</label>
          <v-select
            v-model="step5.program_director"
            :options="programDirectorOptions"
            placeholder="Select Program Director"
            outlined
            taggable
          />
        </div>
        <div class="select-box">
          <label>Head of Architect</label>
          <v-select
            v-model="step5.head_architect"
            :options="headProgramArchitectOptions"
            placeholder="Select Head of Architect"
            outlined
            taggable
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Sponsor</label>
          <v-select
            v-model="step5.sponsor"
            :options="sponsorOptons"
            placeholder="Select Sponsor"
            outlined
            taggable
          />
        </div>
        <div class="select-box">
          <label>Product Line</label>
          <v-select
            v-model="step5.product_line"
            :options="productLineOptions"
            placeholder="Select Product Line"
            outlined
            taggable
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Project Manager</label>
          <v-select
            v-model="step5.project_manager"
            :options="projectManagerOptions"
            placeholder="Select Project Manager"
            outlined
            taggable
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
      priorityOptions: this.$store.state.globalState.priorityOptions,
      nDeadlineOptions: this.$store.state.globalState.natureDeadLines,
      sponsorOptons: this.$store.state.globalState.sponsors,
      productLineOptions: this.$store.state.globalState.productlines,
      headProductPortOptions: this.$store.state.globalState.hproductportfolios,
      productManagerOptions: this.$store.state.globalState.productmanagers,
      headProgramArchitectOptions: this.$store.state.globalState.hprogramarchitects,
      architectOptions: this.$store.state.globalState.architects,
      headProgramDirectorOptions: this.$store.state.globalState.hprogramdirectors,
      programDirectorOptions: this.$store.state.globalState.programdirectors,
      projectManagerOptions: this.$store.state.globalState.projectmanagers,
      curIndex: 1,
      lastPhase: null,
      subProjectTitle: '',
      projectTitle: '',
      programTitle: '',
      externalEditable: false,
      externalSystems: [],
      externalSystem: "Jira",
      externalId: "JIRA-",
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
      const initData = data === undefined ? this.$store.state.globalState.selectedProgramObject : data
      if (initData === undefined) {
        this.step1.portfolio = this.$store.state.globalState.selectedNavObj
        if (this.$store.state.globalState.selectedNavObj.type === 'portfolio') this.otype = 'portfolio'
        if (this.$store.state.globalState.selectedNavObj.type === 'program') this.otype = 'program'
        this.step1.portfolioId = this.$store.state.globalState.selectedNavObj.type === 'portfolio' ? this.$store.state.globalState.selectedNavObj.id : 0
      } else {
        this.otype = this.$store.state.globalState.selectedProgramType
        // if (this.otype === 'program') this.programTitle = initData.title
        // else if (this.otype === 'project') this.projectTitle = initData.title
        // else if (this.otype === 'subproject') this.subProjectTitle = initData.title
        this.step1.portfolioId = initData.type === 'portfolio' ? initData.id : initData.portfolioid || 0
        this.step2.description = initData.description || ''
        this.step2.priority = this.priorityOptions[initData.priority - 1] || 0
        this.step2.deadline = initData.deadline || 0
        this.step2.next_phase = initData.currentPhase || 0
        this.step2.spent = 0
        this.step2.value = initData.value || 0
        this.step2.engaged = 0
        this.step2.demand = initData.demand || 0
        // this.step2.quote = initData.quote
        this.step2.authorized = initData.authorized || 0
        this.step2.realestimated = 0
        this.step5.sponsor = initData.sponsor || ''
        this.step5.head_product_portfolio = initData.portfolioHead || ''
        this.step5.product_manager = initData.productManager || ''
        this.step5.product_line = initData.productLine || ''
        this.step5.head_program_direction = initData.directionHead || ''
        this.step5.architect = initData.architect || ''
        this.step5.head_architect = initData.architectHead || ''
        this.step5.program_director = initData.programDirector || ''
        this.step5.project_manager = initData.projectManager || ''
        this.step3.customer_ex = initData.customerEx || 0
        this.step3.roi = initData.roi || 0
        this.step3.sales_ex = initData.salesEx || 0
        this.step3.scoring = initData.scoring || 0
        this.step3.n_deadline = this.nDeadlineOptions[initData.natDeadline - 1] || ''
        this.step4.phase_start_date = initData.phase1startdate
        this.step4.phase_end_date = initData.phase4enddate
        this.step5.winrate = initData.winrate || 0
        const allPts = this.getAllPorts()
        const allPgs = this.getAllProgs()
        const allPjs = this.getAllProjects()
        const portfolios = allPts.filter(port => port.id === this.step1.portfolioId)
        if (portfolios.length > 0) {
          [this.step1.portfolio] = portfolios
          this.step1.portfolioId = this.step1.portfolio.id
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
      if (this.otype === null) this.otype = 'company'
      let extype = ''
      switch (this.otype) {
        case 'program':
          extype = 'PROG'
          break
        case 'project':
          extype = 'PROJ'
          break
        case 'subproject':
          extype = 'SUBPROJ'
          break
        default:
          break
      }
      const value = this.externalSystem
      this.externalId = `${value.toUpperCase()}-${extype}-`
    },
    handleAddExternal() {
      this.externalSystems.push(this.externalId)
      this.externalSystems = this.externalSystems.filter((value, index, array) => array.indexOf(value) === index)
      this.exSystemString = this.externalSystems.toString()
    },
    updateExternalID() {
      let type = ''
      switch (this.otype) {
        case 'program':
          type = 'PROG'
          break
        case 'project':
          type = 'PROJ'
          break
        case 'subproject':
          type = 'SUBPROJ'
          break
        default:
          break
      }
      const value = this.externalSystem
      this.externalId = `${value.toUpperCase()}-${type}-`
    },
    handleExternalEdit() {
      this.externalEditable = !this.externalEditable
      this.externalSystems.push(this.externalSystem)
      this.externalSystems = this.externalSystems.filter((value, index, array) => array.indexOf(value) === index)
      this.exSystemString = this.externalSystems.toString()
    },
    async handleSave() {
      this.step2.priority = this.priorityOptions.indexOf(this.step2.priority) + 1
      this.step3.n_deadline = this.nDeadlineOptions.indexOf(this.step3.n_deadline) + 1
      const newProgramData = {
        step1: this.step1,
        step2: this.step2,
        step3: this.step3,
        step4: this.step4,
        step5: this.step5,
        subProjectTitle: this.subProjectTitle,
        projectTitle: this.projectTitle,
        programTitle: this.programTitle,
        type: this.otype,
        externalSystems: this.externalSystems
      }
      if (this.step2.deadline === null || this.step2.deadline === 0) {
        this.$toast.error('Please select correct deadline.')
        return
      }
      if (this.otype === 'program' && this.step1.portfolioId === 0) {
        this.$toast.error('Please select correct portfolio.')
        return
      }
      if (this.otype === 'program' && this.programTitle === '') {
        this.$toast.error('Please input correct program name.')
        return
      }

      if (this.otype === 'project' && this.step1.programId === 0) {
        this.$toast.error('Please select correct program.')
        return
      }
      if (this.otype === 'project' && this.projectTitle === '') {
        this.$toast.error('Please input correct project name.')
        return
      }
      if (this.otype === 'subproject' && this.step1.projectId === 0) {
        this.$toast.error('Please select correct project.')
        return
      }
      if (this.otype === 'subproject' && this.subprojectTitle === '') {
        this.$toast.error('Please input correct subproject name.')
        return
      }

      // if (this.step1.portfolio === null || this.step2.title === null || this.step2.priority === null || this.step2.deadline === null) {
      //   this.$toast.error('Please input all correctly.')
      // } else
      if (this.otype === 'program' || this.otype === 'portfolio' || this.otype === 'company') {
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
      const data = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/get_from_selected_nav_id', {
        data
      })
      // this.$store.commit('globalState/TOGGLE_CREATE_NEW_PROGRAM_DRAWER')
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
