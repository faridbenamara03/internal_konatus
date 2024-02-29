<template>
  <div style="width:600px">
    <h3
      class="modal-title mb-1 text-uppercase"
      style="border-bottom: 2px solid #7367f0"
    >
      {{ otype === 'program' ? 'Edit a program' : otype === 'project' ? 'Edit a project' : otype === 'subproject' ? 'Edit a sub-project' : '' }}
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
            <label>Activity ID</label>
            <div class="d-flex">
              <b-form-input
                v-model="externalId"
                placeholder="Input External Activity Id"
              />
              <div
                style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                @click="handleUpdateExternal"
              >
                <feather-icon
                  :icon="'SaveIcon'"
                  style="color: #7367f0"
                  size="20"
                />
              </div>
              <div
                style="padding-top: 6px;margin-left: 5px;cursor: pointer;"
                @click="handleDeleteExternal"
              >
                <feather-icon
                  :icon="'TrashIcon'"
                  style="color: #7367f0"
                  size="20"
                />
              </div>
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
              @customChange="e => handleCustomChange(e, 'portfolioId')"
              :disabled="true"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Program</label>
            <!-- <InputSelect
              placeholder="Select Program"
              :options="getAllProgs()"
              :value="step1.program === null ? null : step1.program.title"
              @customChange="e => handleCustomChange(e, 'program')"
            /> -->
            <b-form-input
              v-model="step1.program"
              placeholder="Select Program"
              :disabled="true"
            />
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
            <!-- <InputSelect
              placeholder="Select Project"
              :options="getAllProjects()"
              :value="step1.project === null ? null : step1.project.title"
              @customChange="e => handleCustomChange(e, 'project')"
            /> -->
            <b-form-input
              v-model="step1.project"
              placeholder="Select Project"
              :disabled="true"
            />
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
            <b-form-input
              v-model="step1.subproject"
              placeholder="Select Sub Project"
              :disabled="true"
            />
          </div>
          <div class="w-50 pl-1">
            <label>SubProject</label>
            <b-form-input
              v-model="step1.subprojectId"
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
          <label>Budget Engaged</label>
          <b-form-input
            v-model="step2.engaged"
            type="number"
            :disabled="true"
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
          <label>Budget Authorized</label>
          <b-form-input
            v-model="step2.authorized"
            type="number"
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
        <div class="select-box">
          <label>WinRate</label>
          <b-form-input
            v-model="step5.winrate"
            placeholder="Input WinRate"
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
    </div>
    <div
      class="select-group"
    >
      <div class="notice-box">
        <feather-icon
          icon="KeyIcon"
          size="20"
        />
        <h5>RationalE</h5>
      </div>
      <div class="select-group--sub">
        <div class="select-box w-50">
          <label>Deadline</label>
          <b-form-datepicker
            id="program_deadline"
            v-model="step2.deadline"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
        <div class="select-box w-50" >
          <label>Nature of deadline</label>
          <v-select
            v-model="step3.n_deadline"
            :options="nDeadlineOptions"
            placeholder="Select Nature of deadline"
            outlined
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
        <div class="select-box m-0" />
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
            :options="headProductPortOptions"
            placeholder="Select Head of Product Portfolios"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Product Manager</label>
          <v-select
            v-model="step5.product_manager"
            :options="productManagerOptions"
            placeholder="Select Product Manager"
            outlined
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
          />
        </div>
        <div class="select-box">
          <label>Head of Program Direction</label>
          <v-select
            v-model="step5.head_program_direction"
            :options="headProgramDirectorOptions"
            placeholder="Select Head of Program Direction"
            outlined
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
          />
        </div>
        <div class="select-box">
          <label>Head of Architect</label>
          <v-select
            v-model="step5.head_architect"
            :options="headProgramArchitectOptions"
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
            :options="sponsorOptons"
            placeholder="Select Sponsor"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Product Line</label>
          <v-select
            v-model="step5.product_line"
            :options="productLineOptions"
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
            :options="projectManagerOptions"
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
        Update
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
      type: Array || Object,
      default: () => [],
    },
    otype: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      priorityOptions: ['Highest', 'High', 'Medium', 'Low', 'Lowest'],
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
      externalSystems: this.$store.state.globalState.externalSystemData,
      title: '',
      lastPhase: {},
      curIndex: 1,
      externalEditable: false,
      externalId: this.$store.state.globalState.externalSystemData !== undefined ? this.$store.state.globalState.externalSystemData.jira_idprogram : "",
      externalSystem: "Jira",
      programTitle: '',
      projectTitle: '',
      subprojectTitle: '',
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
              this.initializeData(newVal)
          },
      },
  },
  async mounted() {
    await this.$store.dispatch('globalState/get_all_programs')
  },
  methods: {
    async initializeData(data) {
      const initData = data === undefined ? this.$store.state.globalState.selectedProgramObject : data
      this.otype = initData.type
      this.step1.portfolioId = initData.portfolioid || 0
      this.step2.description = initData.description || ''
      this.step2.priority = this.priorityOptions[initData.priority - 1] || 0
      this.step2.deadline = initData.deadline || 0
      this.step2.next_phase = initData.next_gate || 0
      this.step2.spent = initData.spent || 0
      this.step2.value = initData.value || 0
      this.step2.engaged = initData.engaged || 0
      this.step2.demand = initData.demand || 0
      this.step2.authorized = initData.authorized || 0
      this.step2.realestimated = initData.realestimated || 0
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
          this.step1.program = programs[0].title
        }
        await this.$store.dispatch('globalState/get_external_systems', { id: this.step1.programId })
      } else if (initData.type === "project") {
        this.step1.programId = initData.progid
        const programs = allPgs.filter(pg => pg.id === initData.progid)
        if (programs.length > 0) {
          this.step1.program = programs[0].title
        }
        this.step1.projectId = data.id || 0
        const projects = allPjs.filter(pj => pj.id === initData.id)
        if (projects.length > 0) {
          this.step1.project = projects[0].title
        }
        await this.$store.dispatch('globalState/get_external_systems', { id: this.step1.projectId })
      } else if (initData.type === "subproject") {
        this.step1.programId = initData.progid
        const programs = allPgs.filter(pg => pg.id === initData.progid)
        if (programs.length > 0) {
          this.step1.program = programs[0].title
        }
        this.step1.projectId = initData.projid
        const projects = allPjs.filter(pj => pj.id === initData.projid)
        if (projects.length > 0) {
          this.step1.project = projects[0].title
        }
        this.step1.subprojectId = initData.id
        this.step1.subproject = initData.title
        await this.$store.dispatch('globalState/get_external_systems', { id: this.step1.subprojectId })
      }
      const phases = this.$store.state.globalState.allPhaseData
      phases.sort((a, b) => a.id - b.id)
      this.lastPhase = phases.at(-1)
      this.externalSystems = this.$store.state.globalState.externalSystemData
      this.externalId = this.externalSystems.jira_idprogram
    },
    updateExternalID() {
      switch (this.externalSystem) {
        case 'Jira':
          this.externalId = this.externalSystems.jira_idprogram
          break
        case 'SAP':
          this.externalId = this.externalSystems.sap_idprogram
          break
        case 'Devops':
          this.externalId = this.externalSystems.devops_idprogram
          break
        case 'primavera':
          this.externalId = this.externalSystems.primavera_idprogram
          break
        case 'Deviprop':
          this.externalId = this.externalSystems.deviprop_idprogram
          break
        default:
          break
      }
      console.log("ExId:", this.externalId)
      if (this.externalId === '' || this.externalId === null || this.externalId === undefined) {
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
      }
    },
    handleAddExternal() {
      this.externalSystems.push(this.externalId)
      this.externalSystems = this.externalSystems.filter((value, index, array) => array.indexOf(value) === index)
      this.exSystemString = this.externalSystems.toString()
    },
    handleUpdateExternal() {
      switch (this.externalSystem) {
        case 'Jira':
          this.externalSystems.jira_idprogram = this.externalId
          break
        case 'SAP':
          this.externalSystems.sap_idprogram = this.externalId
          break
        case 'Devops':
          this.externalSystems.devops_idprogram = this.externalId
          break
        case 'Deviprop':
          this.externalSystems.deviprop_idprogram = this.externalId
          break
        case 'primavera':
          this.externalSystems.primavera_idprogram = this.externalId
          break
        default:
          break
      }
    },
    async handleDeleteExternal() {
      const value = await this.$bvModal.msgBoxConfirm('Please confirm that you want to delete this.', {
        title: 'Please Confirm',
        size: 'sm',
        okVariant: 'primary',
        okTitle: 'Yes',
        cancelTitle: 'No',
        cancelVariant: 'outline-secondary',
        hideHeaderClose: false,
        centered: true,
      })
      if (value) {
        switch (this.externalSystem) {
          case 'Jira':
            this.externalSystems.jira_idprogram = ""
            break
          case 'SAP':
            this.externalSystems.sap_idprogram = ""
            break
          case 'Devops':
            this.externalSystems.devops_idprogram = ""
            break
          case 'Deviprop':
            this.externalSystems.deviprop_idprogram = ""
            break
          case 'primavera':
            this.externalSystems.primavera_idprogram = ""
            break
          default:
            break
        }
        this.externalId = ""
      }
    },
    async handleSave() {
      if (this.step2.deadline === null || this.step2.deadline === 0) {
        this.$toast.error('Please select correct deadline.')
        return
      }
      if (this.otype === 'program' && this.step1.portfolioId === 0) {
        this.$toast.error('Please select correct portfolio.')
        return
      }
      if (this.otype === 'project' && this.step1.programId === 0) {
        this.$toast.error('Please select correct program.')
        return
      }
      if (this.otype === 'subproject' && this.step1.projectId === 0) {
        this.$toast.error('Please select correct project.')
        return
      }
      if (this.otype === 'program') {
        await this.$store.dispatch('globalState/update_program', {
          data: {
            step1: this.step1,
            step2: this.step2,
            step3: this.step3,
            step4: this.step4,
            step5: this.step5,
            id: this.step1.programId,
            externalSystems: this.externalSystems,
            type: 'program'
          }
        })
        await this.$store.dispatch('globalState/get_external_systems', { id: this.step1.programId })
      } else if (this.otype === 'project') {
        await this.$store.dispatch('globalState/update_project', {
          data: {
            step1: this.step1,
            step2: this.step2,
            step3: this.step3,
            step4: this.step4,
            step5: this.step5,
            externalSystems: this.externalSystems,
            id: this.step1.projectId,
            type: 'project'
          }
        })
        await this.$store.dispatch('globalState/get_external_systems', { id: this.step1.projectId })
      } else if (this.otype === 'subproject') {
        await this.$store.dispatch('globalState/update_subproject', {
          data: {
            step1: this.step1,
            step2: this.step2,
            step3: this.step3,
            step4: this.step4,
            step5: this.step5,
            externalSystems: this.externalSystems,
            id: this.step1.subprojectId,
            type: 'subproject'
          }
        })
        await this.$store.dispatch('globalState/get_external_systems', { id: this.step1.subprojectId })
      }
      const data = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/get_from_selected_nav_id', {
        data
      })

      this.$store.commit('globalState/TOGGLE_EDIT_PROGRAM_DRAWER')
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
    },
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
