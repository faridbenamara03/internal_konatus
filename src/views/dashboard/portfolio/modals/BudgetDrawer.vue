<template>
  <div style="width:300px">
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
              v-model="currency"
              style="width:120px"
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
  BButton, BFormInput, BInputGroup, BInputGroupPrepend
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
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
