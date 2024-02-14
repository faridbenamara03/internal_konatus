<template>
  <div style="width:500px">
    <h3 class="modal-title mb-1">
      Create New Portfolio
    </h3>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="select-box">
        <label>Parent Organization</label>
        <v-select
          v-model="parentOrganization"
          :options="['Konatus Industrie']"
          placeholder="Select Organization"
          outlined
        />
      </div>
      <div class="select-box">
        <label>Portfolio Name</label>
        <b-form-input
          v-model="portfolioName"
          type="text"
        />
      </div>
      <div class="d-flex justify-content-between select-box">
        <div style="width:48%">
          <div class="select-group--sub mb-0">
            <div class="select-box">
              <label>Start Date</label>
              <b-form-datepicker
                :id="`start_date-datepicker`"
                v-model="startDate"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                :max="endDate ? endDate : null"
              />
            </div>
          </div>
        </div>
        <div style="width:48%">
          <div class="select-box">
            <label>End Date</label>
            <b-form-datepicker
              :id="`end_date-datepicker`"
              v-model="endDate"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              :min="startDate ? startDate : null"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <label>Portfolio Budget</label>
        <b-form-input
          v-model="portfolioBudget"
          type="number"
        />
      </div>
    </div>
    <div>
      <b-button
        style="width: 100%"
        variant="primary"
        @click="handleCreate"
      >
        Create
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton, BFormInput, BFormDatepicker,
  //  BInputGroup
  //  BInputGroupPrepend
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormInput,
    vSelect,
    // BInputGroup,
    BFormDatepicker
  },
  props: {
  },
  data() {
    return {
      parentOrganization: null,
      portfolioName: '',
      portfolioBudget: 0,
      startDate: null,
      endDate: null,
      portfolio: null,
      period_start_year: null,
      period_start_month: null,
      period_end_year: null,
      period_end_month: null,
      inputedBudgets: [],
      budget: 0,
      priorityOptions: ['Highest', 'High', 'Low', 'Lowest'],
      currency: 'unit',
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      years: ['2022', '2023', '2024', '2025'],

    }
  },
  methods: {
    handleAdd() {
      const item = {
        currency: this.currency,
        amount: this.budget
      }
      this.inputedBudgets.push(item)
      this.budget = 0
    },
    handleCreate() {
      this.$store.dispatch('globalState/create_new_portfolio',
      {
        parentOrganization: this.parentOrganization,
        portfolioName: this.portfolioName,
        portfolioBudget: this.portfolioBudget,
        startDate: this.startDate,
        endDate: this.endDate
     })
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/components/variables-dark";

.range-slider-fill {
  background-color: #ff9c00;
}

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
