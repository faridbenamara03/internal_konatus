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
          v-for="i in 6"
          :key="i"
          class="progress"
          :class="{'active': curIndex >= i}"
        />
      </div>
      <p class="text-uppercase">
        {{ progressDescription[curIndex - 1] }}
      </p>
    </div>
    <div
      v-if="curIndex === 1"
      class="select-group"
    >
      <div class="select-box">
        <label>Nomenclature System</label>
        <v-select
          v-model="step1.system"
          :options="['SAP', 'Jira', 'Konatus']"
          placeholder="Select System"
          outlined
        />
      </div>
      <div class="select-box">
        <label>Portfolio</label>
        <v-select
          v-model="step1.portfolio"
          :options="['Highest', 'High', 'Low', 'Lowest']"
          placeholder="Select Portfolio"
          outlined
        />
      </div>
      <div class="select-box">
        <label>Program</label>
        <v-select
          v-model="step1.program"
          :options="['Highest', 'High', 'Low', 'Lowest']"
          placeholder="Select Program"
          outlined
        />
      </div>
      <div class="select-box">
        <label>Project</label>
        <v-select
          v-model="step1.project"
          :options="['Highest', 'High', 'Low', 'Lowest']"
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
          v-model="step1.subProject"
          :options="['Highest', 'High', 'Low', 'Lowest']"
          placeholder="Select Sub Project"
          outlined
        />
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
          <v-select
            v-model="step2.value"
            :options="['0', '100']"
            placeholder="100"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Budget</label>
          <v-select
            v-model="step2.budget"
            :options="['100', '200', '300', '400']"
            placeholder="300"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Budget Engaged / Quote</label>
          <v-select
            v-model="step2.quote"
            :options="['0', '100']"
            placeholder="0"
            outlined
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Current Phase</label>
          <v-select
            v-model="step2.phase"
            :options="['research', 'work', 'finish']"
            placeholder="Research"
            outlined
          />
        </div>
        <div class="select-box">
          <label>Budget Open</label>
          <v-select
            v-model="step2.budgetOpen"
            :options="['0', '100']"
            placeholder="0"
            outlined
          />
        </div>
      </div>
      <div class="select-box">
        <label>Date Production Deadline</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="step2.date"
          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        />
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
          <b-form-datepicker
            id="production-datepicker1"
            v-model="step3.n_deadline"
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
      v-if="curIndex === 4"
      class="select-group"
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
        <div class="select-box m-0" />
      </div>
    </div>
    <div
      v-if="curIndex === 5"
      class="select-group"
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
            :options="['Highest', 'High', 'Low', 'Lowest']"
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
            :options="['Highest', 'High', 'Low', 'Lowest']"
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
            :options="['Highest', 'High', 'Low', 'Lowest']"
            placeholder="Select Portfolio"
            outlined
          />
        </div>
        <div class="select-box m-0" />
      </div>
    </div>
    <div
      v-if="curIndex === 6"
      class="select-group"
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
          :options="['Highest', 'High', 'Low', 'Lowest']"
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
        {{ curIndex === 6 ? 'Save' : 'Next' }}
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton, BFormDatepicker, BFormInput, BInputGroup, BInputGroupPrepend, BModal,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormDatepicker,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
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
        'SELECT OR ADD A NEW PORTFOLIO',
        'fill the Key elements',
        'rationalE',
        'fill the planning',
        'fill the product line',
        'Almost finished! Fill the budget',
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
      if (this.curIndex < 6) {
        this.curIndex += 1
      }
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
