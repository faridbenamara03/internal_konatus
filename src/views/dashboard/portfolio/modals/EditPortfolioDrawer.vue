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
      inputedBudgets: [],
      startDate: "2023-01-13",
      endDate: "2023-04-30",
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
      console.log("Init:", data)
      if (this.$store.state.globalState.selectedNavObj.type === 'portfolio') {
        this.portfolioName = this.$store.state.globalState.selectedNavObj.title
      } else {
        const portId = this.$store.state.globalState.selectedNavObj.portfolioId
        const ports = this.$store.state.globalState.allPortData.filter(item => item.id === portId)
        if (ports.length > 0) this.portfolioName = ports[0].title
      }
    },
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
          id: data.id, portfolio: this.portfolioName, portfolioBudget: this.portfolioBudget, startDate: this.startDate, endDate: this.endDate
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
          portfolioName: this.portfolioName,
          portfolioBudget: this.portfolioBudget,
          startDate: this.startDate,
          endDate: this.endDate
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
