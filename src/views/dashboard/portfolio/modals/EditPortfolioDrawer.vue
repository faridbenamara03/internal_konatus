<template>
  <div style="width:500px">
    <h3 class="modal-title mb-1">
      Edit {{ selectedType }}
    </h3>
    <div class="select-group" style="padding-top: 0px">
      <div class="select-box">
        <label>Parent Organization</label>
        <v-select v-model="parentOrganization" :options="['Konatus Industries']" placeholder="Select Organization"
          outlined />
      </div>
      <div class="select-box">
        <label>Portfolio Name</label>
        <b-form-input v-model="portfolioName" @input="onEdit" type="text" />
      </div>
      <div class="d-flex justify-content-between select-box">
        <div style="width:48%">
          <div class="select-group--sub mb-0">
            <div class="select-box">
              <label>Start Date</label>
              <b-form-datepicker :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                :id="`start_date-datepicker`" @input="onEdit" v-model="startDate" :max="endDate ? endDate : null" />
            </div>
          </div>
        </div>
        <div style="width:48%">
          <div class="select-box">
            <label>End Date</label>
            <b-form-datepicker :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
              :id="`end_date-datepicker`" @input="onEdit" v-model="endDate" :min="startDate ? startDate : null" />
          </div>
        </div>
      </div>
      <div class="select-box">
        <label>Portfolio Budget</label>
        <b-form-input v-model="portfolioBudget" @input="onEdit" type="number" />
      </div>
    </div>
    <div>
      <b-button :disabled="!edited" style="width: 100%" variant="primary" @click="handleSave">
        Save
      </b-button>
    </div>
  </div>
</template>

<script>
import {
  BButton, BFormInput, BFormDatepicker
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormInput,
    BFormDatepicker,
    vSelect,
  },
  props: {
  },
  data() {
    return {
      portfolioName: this.$store.state.globalState.selectedNavObj?.title,
      portfolioBudget: this.$store.state.globalState.selectedNavObj?.budget,
      edited: false,
      parentOrganization: "Konatus Industries",
      startDate: "2023-01-13",
      endDate: "2023-04-30"
    }
  },
  methods: {
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
  },
  computed: {
    selectedType() {
      const type = this.$store.state.globalState.selectedNavObj?.type
      const firstC = type?.charAt(0).toUpperCase()
      const rslt = firstC + type.slice(1)
      return rslt
    }
  }
}
</script>

<style lang="scss">
@import "~@core/scss/base/components/variables-dark";
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
</style>
