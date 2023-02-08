<template>
  <div style="width:450px">
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
      <div class="select-group--sub mb-1">
        <div class="select-box">
          <label>Date Production Deadline</label>
          <b-form-datepicker
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
            id="production-datepicker"
            v-model="p_deadline"
          />
        </div>
      </div>
      <div class="d-flex justify-content-between mb-1">
        <div style="width:60%">
          <label>Nature of deadline</label>
          <v-select
            v-model="n_deadline"
            :options="['desired', 'time to market', 'legal constraint', 'other']"
            id="production-datepicker1"
            outlined
          />
        </div>
        <div style="width:35%">
          <label>Multiplier</label>
          <v-select
            v-model="n_deadline_weight"
            :options="[0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4]"
            id="deadline-multiplier"
            outlined
          />
        </div>
      </div>
      <div class="d-flex justify-content-between mb-1">
        <div style="width:60%">
          <label>Customer Ex ({{ customer_ex }})</label>
          <b-form-input
            id="range-customer"
            v-model="customer_ex"
            class="slider pt-1"
            type="range"
            min="0"
            max="10"
          />
        </div>
        <div style="width:35%">
          <label>Weight</label>
          <v-select
            v-model="customer_ex_weight"
            :options="[0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4]"
            id="customer-ex-weight"
            outlined
          />
        </div>
      </div>
      <div class="d-flex justify-content-between mb-1">
        <div style="width:60%">
          <label>Sales Ex ({{ sales_ex }})</label>
          <b-form-input
            id="range-sales"
            v-model="sales_ex"
            class="slider pt-1"
            type="range"
            min="0"
            max="10"
          />
        </div>
        <div style="width:35%">
          <label>Weight</label>
          <v-select
            v-model="sales_ex_weight"
            :options="[0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4]"
            id="sales-ex-weight"
            outlined
          />
        </div>
      </div>
      <div class="d-flex justify-content-between mb-1">
        <div style="width:60%">
          <label>Scoring ({{ scoring }})</label>
          <b-form-input
            id="range-scoring"
            v-model="scoring"
            class="slider pt-1"
            type="range"
            min="0"
            max="10"
          />
        </div>
        <div style="width:35%">
          <label>Weight</label>
          <v-select
            v-model="scoring_weight"
            :options="[0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4]"
            id="scoring-weight"
            outlined
          />
        </div>
      </div>
      <div>
        Final project score: {{ projectTotalScore }}
      </div>
    </div>
    <div
      class="select-group" style="padding-top: 0px"
    >
      <div class="notice-box">
        <feather-icon
          icon="DollarSignIcon"
          size="20"
        />
        <h5>budget</h5>
      </div>
      <div class="select-group--sub mb-2">
        <div class="select-box">
          <label>Period start</label>
          <div class="d-flex">
            <v-select
              v-model="period_start_year"
              :options="years"
              class="mr-1"
              placeholder="year"
              outlined
            />
            <v-select
              v-model="period_start_month"
              :options="months"
              placeholder="month"
              outlined
            />
          </div>
        </div>
      </div>
      <div class="select-group--sub mb-2">
        <div class="select-box">
          <label>Period End</label>
          <div class="d-flex">
            <v-select
              v-model="period_end_year"
              :options="years"
              class="mr-1"
              placeholder="year"
              outlined
            />
            <v-select
              v-model="period_end_month"
              :options="months"
              placeholder="month"
              outlined
            />
          </div>
        </div>
      </div>
      <div class="select-box d-flex justify-content-center">
        <label class="notice">Period duration: {{ this.monthPeriod }}</label>
      </div>
      <div class="select-box">
        <label>Budget</label>
        <b-input-group>
          <b-input-group-prepend>
            <v-select
              style="width:120px"
              v-model="currency"
              :options="['EUR', 'USD']"
              placeholder="unit"
              outlined
            />
          </b-input-group-prepend>
          <b-form-input
            v-model="budget"
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
        Save
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton, BFormInput, BInputGroup, BInputGroupPrepend, BFormDatepicker
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BFormDatepicker,
    BButton,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    vSelect,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    monthPeriod() {
      if (this.period_start_year && this.period_start_month && this.period_end_year && this.period_end_month) {
        const yc = this.period_end_year - this.period_start_year
        const startM = this.months.indexOf(this.period_start_month) + 1
        const endM = this.months.indexOf(this.period_end_month) + 1
        return `${endM - startM + yc * 12} months`
      }
      return ''
    },
    projectTotalScore() {
      return this.n_deadline_weight * ((this.customer_ex * this.customer_ex_weight) + ((this.sales_ex * this.sales_ex_weight)) + ((this.scoring * this.scoring_weight)))
    }
  },
  data() {
    return {
      period_start_year: null,
      period_start_month: null,
      period_end_year: null,
      period_end_month: null,
      budget: 0,
      currency: 'unit',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      years: ['2022', '2023'],
      p_deadline: null,
      n_deadline: null,
      n_deadline_weight: 0,
      customer_ex: 0,
      customer_ex_weight: 0,
      sales_ex: 0,
      sales_ex_weight: 0,
      scoring: 0,
      scoring_weight: 0
    }
  },
  methods: {
    handleSave() {
      console.log('handle save')
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
