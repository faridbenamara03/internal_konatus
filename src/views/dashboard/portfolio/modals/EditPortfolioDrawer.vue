<template>
  <div style="width:500px">
    <h3 class="modal-title mb-1">
      <!-- Edit {{ selectedType }} -->
      Edit Portfolio
    </h3>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="select-box">
        <label>Parent Organization</label>
        <v-select
          v-model="parentOrganization"
          :options="['Konatus Industries']"
          placeholder="Select Organization"
          outlined
        />
      </div>
      <div class="select-box">
        <label>Portfolio Name</label>
        <b-form-input
          v-model="portfolioName"
          type="text"
          @input="onEdit"
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
                @input="onEdit"
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
              @input="onEdit"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <label>Portfolio Budget</label>
        <b-form-input
          v-model="portfolioBudget"
          type="number"
          @input="onEdit"
        />
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
          v-model="portfolio"
          :options="getAllPorts"
          placeholder="Select Portfolio"
          outlined
        />
      </div>
      <div class="select-group--sub">
        <div class="select-box">
          <label>Period start</label>
          <div class="d-flex">
            <v-select
              v-model="period_start_year"
              :options="years"
              class="mr-1"
              :placeholder="years[0]"
              outlined
            />
            <v-select
              v-model="period_start_month"
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
              v-model="period_end_year"
              :options="years"
              class="mr-1"
              :placeholder="years[0]"
              outlined
            />
            <v-select
              v-model="period_end_month"
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
        <b-button
          variant="primary"
          @click="handleAdd"
        >
          Add
        </b-button>
      </div>
      <div class="select-box">
        <label>Budget</label>
        <b-input-group>
          <v-select
            v-model="currency"
            :options="['EUR', 'USD']"
            placeholder="unit"
            outlined
          />
          <b-form-input
            v-model="budget"
            placeholder="300"
          />
        </b-input-group>
      </div>
      <div class="select-box">
        <span v-if="inputedBudgets.length > 0" >
          Budgets:
        </span>
        <span v-for="(item, index) of inputedBudgets"
          :key="index">
          <div class="d-flex">
            <label>{{item.amount}}</label>
            <label>{{item.currency === 'USD' ? '$' : '€'}}</label>
          </div>
        </span>
      </div>
    </div>
    <div>
      <b-button
        :disabled="!edited"
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
  BButton, BFormInput, BFormDatepicker, BInputGroup,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormInput,
    BFormDatepicker,
    BInputGroup,
    vSelect,
  },
  props: {
  },
  data() {
    return {
      portfolioBudget: this.$store.state.globalState.selectedNavObj?.budget,
      edited: false,
      parentOrganization: "Konatus Industries",
      inputedBudgets: [],
      startDate: "2023-01-13",
      endDate: "2023-04-30",
      priorityOptions: ['Highest', 'High', 'Low', 'Lowest'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      years: ['2022', '2023', '2024', '2025'],
      currency: 'unit',
      budget: 0,
      portfolio: null,
      period_start_year: null,
      period_start_month: null,
      period_end_year: null,
      period_end_month: null
    }
  },
  computed: {
    portfolioName() {
      if (this.$store.state.globalState.selectedNavObj.type === 'portfolio') {
        return this.$store.state.globalState.selectedNavObj.title
      }
      const portId = this.$store.state.globalState.selectedNavObj.portfolioId
      const ports = this.$store.state.globalState.allPortData.filter(item => item.id === portId)
      if (ports.length > 0) return ports[0].title
      return ''
    },
    selectedType() {
      const type = this.$store.state.globalState.selectedNavObj?.type
      const firstC = type?.charAt(0).toUpperCase()
      const rslt = firstC + type.slice(1)
      return rslt
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
    getAllPorts() {
      const pts = Array.from(this.$store.state.globalState.allPortData)
      return pts
    },
    handleSave() {
      this.edited = false
      this.$store.commit('globalState/EDIT_PORTFOLIO',
        {
          portfolio: this.portfolioName, portfolioBudget: this.portfolioBudget, startDate: this.startDate, endDate: this.endDate
        })
    },
    onEdit() {
      this.edited = true
    }
  }
}
</script>

<style lang="scss">
@import "~@core/scss/base/components/variables-dark";
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
