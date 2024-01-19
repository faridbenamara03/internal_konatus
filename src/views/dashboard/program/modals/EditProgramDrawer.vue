<template>
  <div style="width:600px">
    <h3 class="modal-title mb-1">
      Edit program or project
    </h3>
    <p
      class="text-uppercase"
      style="border-bottom: 2px solid #7367f0"
    >
      Edit program or project
    </p>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Nomenclature System</label>
            <!-- <InputSelect
              placeholder="Select System"
              :options="[{ title: 'SAP', id: '1'}, { title: 'Jira', id: '2'}, { title: 'Konatus', id: '3'}]"
              :value="step1.system === null ? null : step1.system.title"
              @customChange="e => handleCustomChange(e, 'system')"
            /> -->
            <v-select
              v-model="step1.system"
              :options="['SAP', 'Jira', 'Konatus']"
              placeholder="Select System"
              outlined
              multiple
            />
          </div>
          <div class="w-50 pl-1">
            <label>SystemID</label>
            <b-form-input
              v-model="step1.systemId"
              @customChange="e => handleCustomChange(e, 'systemId')"
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
              @customChange="e => handleCustomChange(e, 'portfolioId')"
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
        <!-- <div class="select-box">
          <label>Description</label>
          <b-form-input
            v-model="step2.description"
            type="string"
          />
        </div> -->
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
          <label>Budget Real Estimated</label>
          <b-form-input
            v-model="step2.realestimated"
            type="number"
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
          />
        </div>
      </div>
      <!-- <div class="select-group--sub">
        <div class="select-box">
          <label>Value</label>
          <b-form-input
            v-model="step2.value"
            type="number"
          />
        </div>
        <div class="select-box" />
      </div> -->
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
          <b-form-input
            id="nature_deadline"
            v-model="step3.n_deadline"
          />
        </div>
        <div class="select-box">
          <label>Date Production Deadline</label>
          <b-form-datepicker
            id="production-datepicker"
            v-model="step3.p_deadline"
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
          <label>Date Next Gate Demand</label>
          <b-form-datepicker
            id="date_next_gate-datepicker1"
            v-model="step4.date_next_gate"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
        <div class="select-box">
          <label>Date Ready for Test Demand</label>
          <b-form-datepicker
            id="date_next_gate-datepicker2"
            v-model="step4.date_ready_test"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box mb-0">
          <label>Date Production Demand</label>
          <b-form-datepicker
            id="date_next_gate-datepicker3"
            v-model="step4.date_production"
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
            :options="['SAP', 'Jira', 'Konatus']"
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
            :options="['SAP', 'Jira', 'Konatus']"
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
        <div class="select-box mb-0">
          <label>Program Director</label>
          <v-select
            v-model="step5.program_director"
            :options="priorityOptions"
            placeholder="Select Portfolio"
            outlined
          />
        </div>
        <div class="select-box m-0" />
      </div>
    </div>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="notice-box">
        <feather-icon
          icon="DollarSignIcon"
          size="20"
        />
        <h5>budget</h5>
      </div>
      <div class="select-box">
        <label>Portfolio</label>
        <v-select
          v-model="step6.portfolio"
          :options="priorityOptions"
          placeholder="Select Portfolio"
          outlined
        />
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Period start</label>
          <div class="d-flex">
            <v-select
              v-model="step6.period_start_year"
              :options="years"
              class="mr-1"
              :placeholder="years[0]"
              outlined
            />
            <v-select
              v-model="step6.period_start_month"
              :options="months"
              :placeholder="months[0]"
              outlined
            />
          </div>
        </div>
        <div class="divider" />
        <div class="select-box">
          <label>Period End</label>
          <div class="d-flex">
            <v-select
              v-model="step6.period_end_year"
              :options="years"
              class="mr-1"
              :placeholder="years[0]"
              outlined
            />
            <v-select
              v-model="step6.period_end_month"
              :options="months"
              :placeholder="months[0]"
              outlined
            />
          </div>
        </div>
      </div>
      <div class="select-box d-flex justify-content-center">
        <label class="notice">Period duration: 12 months</label>
      </div>
      <div class="select-box">
        <label>Budget</label>
        <b-input-group>
          <b-input-group-prepend>
            <v-select
              v-model="step6.currency"
              :options="['EUR', 'USD']"
              placeholder="unit"
              outlined
            />
          </b-input-group-prepend>
          <b-form-input
            v-model="step6.budget"
            placeholder="300"
          />
        </b-input-group>
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
      priorityOptions: ['Highest', 'High', 'Low', 'Lowest'],
      title: '',
      curIndex: 1,
      step1: {
        system: null,
        program: null,
        portfolio: null,
        project: null,
        subproject: null,
        portfolioId: 0,
        programId: 0,
        projectId: 0,
      },
      step2: {
        priority: null,
        value: 0,
        budget: 0,
        description: null,
        deadline: null,
        next_gate: null,
        realestimated: 0,
        spent: 0,
        demand: 0,
        authorized: 0,
        engaged: 0,
        phase: null,
        budgetOpen: 0,
        date: null,
        title: null
      },
      step3: {
        p_deadline: null,
        n_deadline: null,
        customer_ex: 0,
        sales_ex: 0,
        scoring: 0,
      },
      step4: {
        date_next_gate: null,
        date_ready_test: null,
        date_production: null,
      },
      step5: {
        head_product_portfolio: null,
        product_manager: null,
        architect: null,
        head_program_direction: null,
        program_director: null,
      },
      step6: {
        portfolio: null,
        period_start_year: null,
        period_start_month: null,
        period_end_year: null,
        period_end_month: null,
        budget: 0,
        currency: 'unit',
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
    initializeData(data) {
      const initData = data === undefined ? this.$store.state.globalState.selectedProgramObject : data
      this.step1.portfolioId = initData.portfolioid || 0
      this.step2.title = initData.title
      this.step2.budget = initData.budget
      this.step2.priority = this.priorityOptions[initData.priority - 1]
      this.step2.deadline = initData.deadline
      this.step2.next_gate = initData.next_gate
      this.step2.spent = initData.spent
      this.step2.value = initData.value
      this.step2.engaged = initData.engaged
      this.step2.demand = initData.demand
      this.step2.quote = initData.quote
      this.step2.authorized = initData.authorized
      this.step2.realestimated = initData.realestimated
      const allPts = this.getAllPorts()
      const allPgs = this.getAllProgs()
      const allPjs = this.getAllProjects()
      const portfolios = allPts.filter(port => port.id === initData.portfolioid)
      if (portfolios.length > 0) {
        [this.step1.portfolio] = portfolios
        console.log("SPSP:", this.step1.portfolio)
      }
      if (initData.type === "program") {
        this.step1.programId = initData.id || 0
        const programs = allPgs.filter(pg => pg.id === initData.id)
        if (programs.length > 0) {
          this.step1.program = programs[0].title
        }
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
      }
    },
    async handleSave() {
      if (this.step2.title === null || this.step2.deadline === null || this.step2.next_gate === null || this.step2.priority === null) {
        this.$toast.error('Please input all correctly')
      } else {
        if (this.otype === 'program') {
          await this.$store.dispatch('globalState/update_program', {
            data: {
              step1: this.step1,
              step2: this.step2,
              step3: this.step3,
              step4: this.step4,
              step5: this.step5,
              step6: this.step6
            }
          })
        } else if (this.otype === 'project') {
          await this.$store.dispatch('globalState/update_project', {
            data: {
              step1: this.step1,
              step2: this.step2,
              step3: this.step3,
              step4: this.step4,
              step5: this.step5,
              step6: this.step6
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
