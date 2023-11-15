<template>
  <div style="width:600px">
    <h3 class="modal-title mb-1">
      Edit project
    </h3>
    <p
      class="text-uppercase"
      style="border-bottom: 2px solid #7367f0"
    >
      Edit project
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
            <label>Program</label>
            <InputSelect
              placeholder="Select Program"
              :options="getAllPrograms()"
              :value="step1.program === null ? null : step1.program.title"
              @customChange="e => handleCustomChange(e, 'program')"
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
            v-model="data.title"
            type="text"
          />
        </div>
        <div class="select-box">
          <label>Priority</label>
          <v-select
            v-model="data.priority"
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
            v-model="data.demand"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Quote</label>
          <b-form-input
            v-model="data.quote"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Authorised</label>
          <b-form-input
            v-model="data.authorised"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>RealEstimated</label>
          <b-form-input
            v-model="data.realestimated"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Engaged</label>
          <b-form-input
            v-model="data.engaged"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Spent</label>
          <b-form-input
            v-model="data.spent"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Budget</label>
          <b-form-input
            v-model="data.budget"
            type="number"
          />
        </div>
        <div class="select-box">
          <label>Value</label>
          <b-form-input
            v-model="data.value"
            type="number"
          />
        </div>
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Deadline</label>
          <b-form-datepicker
            id="program_deadline"
            v-model="data.deadline"
            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
          />
        </div>
        <div class="select-box">
          <label>Next_Gate</label>
          <b-form-datepicker
            id="program_nextgate"
            v-model="data.next_gate"
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
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      title: '',
      curIndex: 1,
      step1: {
        system: null,
        program: null
      },
      step2: {
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
        title: null
      },
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      years: ['2022', '2023', '2024', '2025'],
    }
  },
  async mounted() {
    await this.$store.dispatch('globalState/get_all_programs')
  },
  methods: {
    async handleSave() {
      if (this.data.title === null || this.data.deadline === null || this.data.next_gate === null || this.data.priority === null) {
        this.$toast.error('Please input all correctly')
      } else {
        const navObj = this.$store.state.globalState.selectedNavObj
        await this.$store.dispatch('globalState/update_project', {
          data: {
            ...this.data,
            portId: navObj.id,
            type: navObj.type
          }
        })
        await this.$store.dispatch('globalState/load_org_data')
        this.$refs['my-modal'].hide()
      }
    },
    getAllPrograms() {
      const pgs = Array.from(this.$store.state.globalState.allProgData)
      return pgs
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
