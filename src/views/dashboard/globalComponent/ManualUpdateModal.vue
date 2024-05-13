<template>
  <b-modal
    id="modal-manual-update"
    ref="my-modal"
    title="Update Work Element"
    centered
    no-fade
    hide-backdrop
    static
    size="lg"
  >
    <!-- Modal Header -->
    <template #modal-header>
      <h5 class="modal-title">
        Update Work Element
      </h5>
      <div class="modal-actions">
        <b-button
          variant="outline-primary"
          @click="hideModal"
        >
          <feather-icon
            icon="XIcon"
            size="18"
          />
        </b-button>
      </div>
    </template>
    <div class="form-group">
      <div class="row">
        <div class="col">
          <label>Load E</label>
          <b-form-input
            v-model="loadEngageData"
            type="number"
            :disabled="true"
          />
        </div>
        <div class="col">
          <label>Fte E</label>
          <b-form-input
            v-model="fteEngageData"
            type="number"
            :disabled="true"
          />
        </div>
        <div class="col">
          <label>Spent</label>
          <b-form-input
            v-model="spentData"
            type="number"
            :disabled="true"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Load R/E</label>
          <b-form-input
            v-model="loadEstimatedData"
            type="number"
            :disabled="true"
          />
        </div>
        <div class="col">
          <label>Fte R</label>
          <b-form-input
            v-model="fteEstimatedData"
            type="number"
            :disabled="true"
          />
        </div>
        <div class="col">
          <label>% acc R/E</label>
          <b-form-input
            v-model="accEstimatedData"
            type="number"
            :disabled="true"
          />
        </div>
        <div class="col">
          <label>Rest To Do R/E</label>
          <b-form-input
            v-model="restEstimatedData"
            type="number"
            :disabled="true"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Load R/E</label>
          <b-form-input
            v-model="loadNewEstimatedData"
            type="number"
            @input="handleChange"
          />
        </div>
        <div class="col">
          <label>Fte R/E</label>
          <b-form-input
            v-model="fteNewEstimatedData"
            type="number"
            @input="handleChange"
          />
        </div>
        <div class="col">
          <label>% acc R/E</label>
          <b-form-input
            v-model="accNewEstimatedData"
            type="number"
            @input="handleChange"
          />
        </div>
        <div class="col">
          <label>Rest To Do R/E</label>
          <b-form-input
            v-model="restNewEstimatedData"
            type="number"
            @input="handleChange"
          />
        </div>
        <div class="col">
          <b-button
            style="margin-top:20px"
            variant="primary"
            @click="handleCalculate"
          >
            Calculate
          </b-button>
        </div>
      </div>
    </div>
    <!-- Modal Footer -->
    <template #modal-footer>
      <b-button
        variant="outline-primary"
        @click="hideModal"
      >
        Cancel
      </b-button>
      <b-button
        variant="primary"
        :disabled="!isValid"
        @click="handleSave"
      >
        Update
      </b-button>
    </template>
  </b-modal>
</template>

<script>
import {
  BButton,
  BFormInput
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BButton,
    BFormInput
  },
  props: {
    selectedWE: {
      type: Object || Number,
      default: () => {},
    },
  },
  data() {
    return {
      loadEstimatedData: 0,
      fteEstimatedData: 0,
      loadEngageData: 0,
      fteEngageDate: 0,
      spentData: 0,
      loadNewEstimatedData: 0,
      fteNewEstimatedData: 0,
      accEstimatedData: 0,
      accNewEstimatedData: 0,
      restEstimatedData: 0,
      restNewEstimatedData: 0,
      isValid: false,
    }
  },
  watch: {
      selectedWE: {
          immediate: true,
          handler(newVal) {
            this.initializeData(newVal) // ??
          },
      },
  },
  methods: {
    initializeData(newWE) {
      this.loadEngageData = newWE.load_engage
      this.loadEstimatedData = newWE.load_reel
      this.accEstimatedData = newWE.acc
      this.spentData = this.loadEstimatedData * this.accEstimatedData
      this.fteEngageData = newWE.fte_engage
      this.fteEstimatedData = newWE.fte_reel
      this.restEstimatedData = this.loadEstimatedData * (1 - this.accEstimatedData)
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    async handleSave() {
      const payloads = {
        we_id: this.selectedWE.id,
        load_estimated: this.loadNewEstimatedData,
        fte_estimated: this.fteNewEstimatedData,
        acc: this.accNewEstimatedData,
        rest_todo_estimated: this.restNewEstimatedData
      }
      // this.$store.commit('globalState/SUBMIT_MANUAL_UPDATE', payloads)
      await this.$store.dispatch('globalState/submit_manual_update', payloads)
      // this.showToast('success', 'Success Update Work Element.')
      this.$refs['my-modal'].hide()
    },
    handleCalculate() {
      if (this.accNewEstimatedData === 0) {
        this.showToast('warning', 'Inputed Values are not valid, please try again')
        this.isValid = false
      } else if (parseFloat(this.loadNewEstimatedData) === parseFloat(this.spentData) / parseFloat(this.accNewEstimatedData)
      && parseFloat(this.loadNewEstimatedData) === parseFloat(this.spentData) + parseFloat(this.restNewEstimatedData)
      && parseFloat(this.restNewEstimatedData) === parseFloat(this.loadNewEstimatedData) * (1 - parseFloat(this.accNewEstimatedData))) {
        this.showToast('success', 'All Values are valid, ready to Update now')
        this.isValid = true
      } else {
        this.showToast('warning', 'Inputed Values are not valid, please try again')
        this.isValid = false
      }
    },
    handleChange() {
      this.isValid = false
    },
    showToast(variant, title) {
      this.$toast({
        component: ToastificationContent,
        props: {
          title,
          icon: 'BellIcon',
          text: null,
          variant,
        },
      })
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/pages/dashboard-portfolio.scss';
@import '@core/scss/vue/pages/dashboard-project.scss';
</style>
