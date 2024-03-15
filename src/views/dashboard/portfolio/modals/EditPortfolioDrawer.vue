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
    </div>
    <div class="d-flex">
      <b-button
        class="w-50"
        :disabled="!edited"
        variant="primary"
        @click="handleSave"
      >
        Save
      </b-button>
      <b-button
        class="ml-1 w-50"
        variant="primary"
        @click="handleDelete"
      >
        <feather-icon icon="TrashIcon" />&nbsp;&nbsp;<span>Delete</span>
      </b-button>
    </div>
    <h3 class="modal-title mb-1 mt-3">
      <!-- Edit {{ selectedType }} -->
      Add Budget
    </h3>
    <div
      class="select-group"
      style="padding-top: 0px"
    >
      <div class="d-flex justify-content-between select-box">
        <div style="width:48%">
          <div class="select-group--sub mb-0">
            <div class="select-box">
              <label>Budget Start Date</label>
              <b-form-datepicker
                :id="`start_budget_date-datepicker`"
                v-model="budget_startDate"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                @input="onEdit"
              />
            </div>
          </div>
        </div>
        <div style="width:48%">
          <div class="select-box">
            <label>Budget End Date</label>
            <b-form-datepicker
              :id="`end_budget_date-datepicker`"
              v-model="budget_endDate"
              :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              @input="onEdit"
            />
          </div>
        </div>
      </div>
      <div class="select-box">
        <label>Portfolio Budget</label>
        <b-form-input
          v-model="newPortfolioBudget"
          type="number"
          @input="onEdit"
        />
      </div>
      <b-button
        class="w-100"
        variant="primary"
        @click="handleAdd"
      >
        Add Budget
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton, BFormInput, BFormDatepicker
  //  BInputGroup
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormInput,
    BFormDatepicker,
    // BInputGroup,
    vSelect,
  },
  props: {
  },
  data() {
    return {
      portfolioBudget: this.$store.state.globalState.selectedNavObj?.budget,
      edited: false,
      parentOrganization: "Konatus Industries",
      budget_startDate: "2024-01-01",
      budget_endDate: "2024-12-31",
      newPortfolioBudget: 0,
      priorityOptions: ['Highest', 'High', 'Medium', 'Low', 'Lowest'],
      months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      years: ['2022', '2023', '2024', '2025'],
      currency: 'unit',
      budget: 0,
      portfolio: null,
      period_start_year: null,
      period_start_month: null,
      period_end_year: null,
      period_end_month: null,
      portfolioName: ''
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
  computed: {
    // portfolioName() {
    //   if (this.$store.state.globalState.selectedNavObj.type === 'portfolio') {
    //     return this.$store.state.globalState.selectedNavObj.title
    //   }
    //   const portId = this.$store.state.globalState.selectedNavObj.portfolioId
    //   const ports = this.$store.state.globalState.allPortData.filter(item => item.id === portId)
    //   if (ports.length > 0) return ports[0].title
    //   return ''
    // },
    selectedType() {
      const type = this.$store.state.globalState.selectedNavObj?.type
      const firstC = type?.charAt(0).toUpperCase()
      const rslt = firstC + type.slice(1)
      return rslt
    }
  },
  methods: {
    initializeData(data) {
      console.log("Init:", this.$store.state.globalState.selectedNavObj, data)
      if (this.$store.state.globalState.selectedNavObj.type === 'portfolio') {
        this.portfolioName = this.$store.state.globalState.selectedNavObj.title
      } else {
        const portId = this.$store.state.globalState.selectedNavObj.portfolioId
        const ports = this.$store.state.globalState.allPortData.filter(item => item.id === portId)
        if (ports.length > 0) this.portfolioName = ports[0].title
      }
    },
    async handleAdd() {
      const data = this.$store.state.globalState.selectedNavObj
      const payloads = {
        id: data.id,
        startDate: this.budget_startDate,
        endDate: this.budget_endDate,
        portfolioBudget: this.newPortfolioBudget
      }
      await this.$store.dispatch('globalState/add_portfolio_budget', { payloads })
      this.newPortfolioBudget = 0
    },
    getAllPorts() {
      const pts = Array.from(this.$store.state.globalState.allPortData)
      return pts
    },
    async handleDelete() {
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
        const data = this.$store.state.globalState.selectedNavObj
        const payloads = {
          id: data.id
        }
        await this.$store.dispatch('globalState/delete_portfolio', { payloads })
        await this.$store.dispatch('globalState/get_from_selected_nav_id', {
          data
        })
        await this.$store.dispatch('globalState/load_org_data')
        await this.$store.commit('globalState/TOGGLE_EDIT_PORTFOLIO_DRAWER')
      }
    },
    async handleSave() {
      await this.$store.dispatch('globalState/update_portfolio', {
        data: {
          id: this.$store.state.globalState.selectedNavObj.type === 'portfolio' ? this.$store.state.globalState.selectedNavObj.id : this.$store.state.globalState.selectedNavObj.portfolioId,
          parentOrganization: this.parentOrganization,
          portfolioName: this.portfolioName
        }
      })
      await this.$store.commit('globalState/load_org_data')
      const data = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/get_from_selected_nav_id', {
        data
      })
      await this.$store.commit('globalState/TOGGLE_EDIT_PORTFOLIO_DRAWER')
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
