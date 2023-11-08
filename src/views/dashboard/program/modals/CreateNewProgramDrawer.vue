<template>
  <div style="width:600px">
    <h3 class="modal-title mb-1">
      Create New
    </h3>
    <p
      class="text-uppercase"
      style="border-bottom: 2px solid #7367f0"
    >
      Add new program
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
          <div class="w-50">
            <label>Portfolio</label>
            <InputSelect
              placeholder="Select Portfolio"
              :options="[{ title: 'Consumer Robots', id: '1'}, { title: 'Military Robots', id: '2'}]"
              :value="step1.portfolio === null ? null : step1.portfolio.title"
              @customChange="e => handleCustomChange(e, 'portfolio')"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <div class="d-flex">
          <!-- <div class="w-50 pl-1">
            <label>PortfolioID</label>
            <b-form-input
              v-model="step1.portfolioId"
            />
          </div> -->
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
          <label>Authorized</label>
          <b-form-input
            v-model="step2.authorized"
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
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      curIndex: 1,
      step1: {
        system: null,
        portfolio: null,
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
        authorized: 0,
        engaged: 0,
        phase: null,
        budgetOpen: 0,
        date: null,
      },
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      years: ['2022', '2023', '2024', '2025'],
    }
  },
  methods: {
    async handleSave() {
      const newProgramData = {
        step1: this.step1,
        step2: this.step2
      }
      const navObj = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/create_new_program', {
        data: {
          ...newProgramData,
          portId: navObj.id,
          type: navObj.type
        }
      })
      await this.$store.dispatch('globalState/load_org_data')
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
