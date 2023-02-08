<template>
  <div style="width:600px">
    <h3 class="modal-title mb-1">
      Create New
    </h3>
    <!-- <div class="modal-actions">
      <b-button
        style="width: 200px"
        variant="outline-primary"
      >
        <feather-icon
          icon="SettingsIcon"
          size="18"
        />
        <span class="pl-1">Select Fields</span>
      </b-button>
    </div> -->
    <p class="text-uppercase" style="border-bottom: 2px solid #7367f0">
      {{ progressDescription[0] }}
    </p>
    <!-- </div> -->
    <div
      class="select-group" style="padding-top: 0px"
    >
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Nomenclature System</label>
            <InputSelect
              placeholder="Select System"
              :options="['SAP', 'Jira', 'Konatus']"
              :value="step1.system"
              @customChange="e => handleCustomChange(e, 'system')" />
          </div>
          <div class="w-50 pl-1">
            <label>SystemId</label>
            <b-form-input
              v-model="step1.systemId"
            />
          </div>
        </div>
        <!-- <v-select
          v-model="step1.system"
          :options="['SAP', 'Jira', 'Konatus']"
          placeholder="Select System"
          outlined
        /> -->
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Portfolio</label>
            <InputSelect
              placeholder="Select Portfolio"
              :options="['Consumer Robots', 'Military Robots']"
              :value="step1.portfolio"
              @customChange="e => handleCustomChange(e, 'portfolio')" />
          </div>
          <div class="w-50 pl-1">
            <label>PortfolioID</label>
            <b-form-input
              v-model="step1.portfolioId"
            />
          </div>
        </div>
        <!-- <v-select
          v-model="step1.portfolio"
          :options="['Highest', 'High', 'Low', 'Lowest']"
          placeholder="Select Portfolio"
          outlined
        /> -->
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Program</label>
            <InputSelect
              placeholder="Select Program"
              :options="['Quadrupted robot', 'New program', 'Hardened quadruped', 'Handling robot']"
              :value="step1.program"
              @customChange="e => handleCustomChange(e, 'program')" />
          </div>
          <div class="w-50 pl-1">
            <label>ProgramId</label>
            <b-form-input
              v-model="step1.programId"
            />
          </div>
        </div>
        <!-- <v-select
          v-model="step1.program"
          :options="['Highest', 'High', 'Low', 'Lowest']"
          placeholder="Select Program"
          outlined
        /> -->
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <label>Project</label>
            <InputSelect
              placeholder="Select Project"
              :options="['Full Model Design', 'Enhanced motricity', 'Enhanced authonomy', 'Dual sourcing for Quadruped']"
              :value="step1.project"
              @customChange="e => handleCustomChange(e, 'project')" />
          </div>
          <div class="w-50 pl-1">
            <label>ProjectId</label>
            <b-form-input
              v-model="step1.projectId"
            />
          </div>
        </div>
        <!-- <v-select
          v-model="step1.project"
          :options="['Highest', 'High', 'Low', 'Lowest']"
          placeholder="Select Project"
          outlined
        /> -->
      </div>
      <div class="select-box">
        <div class="d-flex">
          <div class="w-50">
            <div class="d-flex justify-content-between">
              <label>Sub Project(Optional)</label>
            </div>
            <InputSelect
              placeholder="Select Sub Project"
              :options="[]"
              :value="step1.subProject"
              @customChange="e => handleCustomChange(e, 'subProject')" />
          </div>
          <div class="w-50 pl-1">
            <label>SubProject</label>
            <b-form-input
              v-model="step1.subProjectId"
            />
          </div>
        </div>
        <!-- <v-select
          v-model="step1.subProject"
          :options="['Highest', 'High', 'Low', 'Lowest']"
          placeholder="Select Sub Project"
          outlined
        /> -->
      </div>
    </div>
    <div
      class="select-group" style="padding-top: 0px"
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
          <label>Priority</label>
          <v-select
            v-model="step2.priority"
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Highest"
            outlined
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
          <label>Budget demand</label>
          <b-form-input
            v-model="step2.budget_demand"
            type="number"
          />
          <!-- <v-select
            v-model="step2.budget_demand"
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Highest"
            outlined
          /> -->
        </div>
        <div class="select-box">
          <label>Unit</label>
          <v-select
            v-model="step2.unit1"
            :options="['hours', '$']"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Budget autorized</label>
          <b-form-input
            v-model="step2.budget_autorized"
            type="number"
          />
          <!-- <v-select
            v-model="step2.budget_demand"
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Highest"
            outlined
          /> -->
        </div>
        <div class="select-box">
          <label>Unit</label>
          <v-select
            v-model="step2.unit2"
            :options="['hours', '$']"
            outlined
          />
        </div>
      </div>
      <!-- <div class="select-group--sub">
        <div class="select-box">
          <label>Priority</label>
          <v-select
            v-model="step2.priority"
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Highest"
            outlined
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
          <label>Budget</label>
          <b-form-input
            v-model="step2.budget"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Budget Engaged / Quote</label>
          <b-form-input
            v-model="step2.quote"
            type="number"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Current Phase</label>
          <v-select
            v-model="step2.phase"
            :options="['research', 'evaluation', 'development', 'testing', 'deployment', 'maintenance']"
            placeholder="Research"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Budget Open</label>
          <b-form-input
            v-model="step2.budgetOpen"
            type="number"
          />
          <v-select
            v-model="step2.budgetOpen"
            :options="['0', '100']"
            placeholder="0"
            outlined
          />
        </div>
      </div> -->
    </div>
    <div
      class="select-group" style="padding-top: 0px"
    >
      <div class="notice-box">
        <feather-icon
          icon="KeyIcon"
          size="20"
        />
        <h5>Rationale</h5>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Date Production Deadline</label>
          <b-form-datepicker
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            id="production-datepicker"
            v-model="step3.p_deadline"
          />
        </div>
        <div class="select-box">
          <label>Nature of deadline</label>
          <v-select
            v-model="step3.n_deadline"
            :options="['desired', 'time to market', 'legal constraint', 'other']"
            id="production-datepicker1"
            outlined
          />
          <!-- <b-form-datepicker
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            id="production-datepicker1"
            v-model="step3.n_deadline"
          /> -->
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Customer Ex ({{ step3.customer_ex }})</label>
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
          <label>Sales Ex ({{ step3.sales_ex }})</label>
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
          <label>Scoring ({{ step3.scoring }})</label>
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
      class="select-group" style="padding-top: 0px"
    >
      <div class="notice-box">
        <feather-icon
          icon="FileTextIcon"
          size="20"
        />
        <h5>planning</h5>
      </div>
      <div v-for="(t, i) in step4.phaseData" :key="i">
        <div class="d-flex justify-content-between">
          <div style="width:32%">
            <div class="select-group--sub">
              <div class="select-box mb-2">
                <label>Select Phase</label>
                <v-select
                  style="padding-top:2px"
                  :options="['Phase 1', 'Phase 2', 'Phase 3', 'Phase 4']"
                  placeholder="Select Phase"
                  v-model="t.phase"
                  outlined
                />
              </div>
            </div>
          </div>
          <div style="width:32%">
            <div class="select-group--sub mb-0">
              <div class="select-box">
                <label>Phase Start Date</label>
                <b-form-datepicker
                  :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                  :id="`phase_start_date-datepicker${i}`"
                  v-model="t.phase_start_date"
                  :min="i > 0 && step4.phaseData[i - 1].phase_end_date ? step4.phaseData[i - 1].phase_end_date : null"
                  :max="step4.phaseData[i].phase_end_date ? step4.phaseData[i].phase_end_date : null"
                />
              </div>
            </div>
          </div>
          <div style="width:32%">
            <div class="select-box">
              <label>Phase End Date</label>
              <b-form-datepicker
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                :id="`phase_end_date-datepicker${i}`"
                v-model="t.phase_end_date"
                :min="step4.phaseData[i].phase_start_date ? step4.phaseData[i].phase_start_date : null"
                :max="step4.phaseData[i + 1] && step4.phaseData[i + 1].phase_start_date ? step4.phaseData[i + 1].phase_start_date : null"
              />
            </div>
          </div>
        </div>
      </div>
      <b-button
        style="width: 100%"
        variant="primary"
        @click="handleAddPhase"
      >
        Add phase
      </b-button>
    </div>
    <div
      class="select-group" style="padding-top: 0px"
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
          <label>Head of the product portfolio</label>
          <b-form-input
            v-model="step5.head_product_portfolio"
          />
          <!-- <v-select
            v-model="step5.head_product_portfolio"
            :options="['SAP', 'Jira', 'Konatus']"
            placeholder="Select System"
            outlined
          /> -->
        </div>
        <div class="select-box">
          <label>Product manager</label>
          <b-form-input
            v-model="step5.product_manager"
          />
          <!-- <v-select
            v-model="step5.product_manager"
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Select Portfolio"
            outlined
          /> -->
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Architect</label>
          <b-form-input
            v-model="step5.architect"
          />
          <!-- <v-select
            v-model="step5.architect"
            :options="['SAP', 'Jira', 'Konatus']"
            placeholder="Select System"
            outlined
          /> -->
        </div>
        <div class="select-box">
          <label>Head of program direction</label>
          <b-form-input
            v-model="step5.head_program_direction"
          />
          <!-- <v-select
            v-model="step5.head_program_direction"
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Select Portfolio"
            outlined
          /> -->
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Program director</label>
          <b-form-input
            v-model="step5.program_director"
          />
          <!-- <v-select
            v-model="step5.architect"
            :options="['SAP', 'Jira', 'Konatus']"
            placeholder="Select System"
            outlined
          /> -->
        </div>
        <div class="select-box">
          <label>Project manager</label>
          <b-form-input
            v-model="step5.project_manager"
          />
          <!-- <v-select
            v-model="step5.head_program_direction"
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Select Portfolio"
            outlined
          /> -->
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
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      curIndex: 1,
      progressDescription: [
        'SELECT OR ADD A NEW PORTFOLIO',
        'fill the Key elements',
        'rationale',
        'fill the planning',
        'fill the product line',
        'Almost finished! Fill the budget',
      ],
      step1: {
        system: '',
        portfolio: '',
        program: '',
        project: '',
        subProject: '',
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
      step4: {
        phaseData: [
          {
            phase: null,
            phase_start_date: null,
            phase_end_date: null
          }
        ]
      },
      step5: {
        head_product_portfolio: null,
        product_manager: null,
        architect: null,
        head_program_direction: null,
        program_director: null,
        project_manager: null,
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
      years: ['2022', '2023'],
    }
  },
  methods: {
    handleSave() {
      const data = {
        step1: this.step1,
        step2: this.step2,
        step3: this.step3,
        step4: this.step4,
        step5: this.step5,
        step6: this.step6
      }
      this.$store.commit('globalState/OPERATION_NEW_SAVE', data)
      this.$store.commit('globalState/ADD_PROJECT')
      this.$refs['my-modal'].hide()
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
