<template>
  <div style="width:500px">
    <h3 class="modal-title mb-1">
      Edit {{ selectedType }}
    </h3>
    <div class="select-group" style="padding-top: 0px">
      <div class="select-box">
        <label>Portfolio</label>
        <b-form-input v-model="portfolio" @input="onEdit" />
        <!-- <v-select v-model="portfolio" :options="portfolioList" placeholder="Select Portfolio" outlined /> -->
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
  BButton, BFormInput
} from 'bootstrap-vue'
// import vSelect from 'vue-select'

export default {
  components: {
    BButton,
    BFormInput,
    // vSelect,
  },
  props: {
  },
  data() {
    return {
      readonly: true,
      portfolio: this.$store.state.globalState.selectedNavObj?.title,
      portfolioBudget: this.$store.state.globalState.selectedNavObj?.budget,
      edited: false
    }
  },
  methods: {
    handleSave() {
      this.readonly = true
      this.$store.commit('globalState/EDIT_PORTFOLIO',
        { portfolio: this.portfolio, portfolioBudget: this.portfolioBudget })
    },
    handleEdit() {
      this.readonly = false
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
