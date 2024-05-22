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
          <label>Fte R/E</label>
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
          <label>Spent R/E</label>
          <b-form-input
            v-model="spentNewEstimatedData"
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
            aria-describedby="input-live-help"
            type="number"
            :disabled="isAcc === 1"
            @input="handleChangeAccORest(1)"
          />
          <b-form-text
            id="input-live-help"
            class="muted"
            style="font-size:10px"
          >
            Input only one
          </b-form-text>
        </div>
        <div class="col">
          <label>Rest To Do R/E</label>
          <b-form-input
            v-model="restNewEstimatedData"
            aria-describedby="input-live-help"
            type="number"
            :disabled="isAcc === 2"
            @input="handleChangeAccORest(2)"
          />
          <b-form-text
            id="input-live-help"
            class="muted"
            style="font-size:10px"
          >
            Input only one
          </b-form-text>
        </div>
        <div class="col">
          <b-button
            style="margin-top:20px"
            variant="primary"
            @click="handleCalculate"
          >
            Get Values
          </b-button>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label>Start Date R/E</label>
          <b-form-input
            v-model="startDateEstimated"
            type="date"
            @input="updateDate($event)"
          />
        </div>
        <div class="col">
          <label>Duration Date R/E</label>
          <b-form-input
            v-model="durationDateEstimated"
            :disabled="true"
          />
        </div>
        <div class="col">
          <label>End Date R/E</label>
          <b-form-input
            v-model="endDateEstimated"
            :disabled="true"
          />
        </div>
        <div class="col">
          <b-button
            style="margin-top:20px"
            variant="primary"
            @click="handleCalculateDate"
          >
            Calculate Date
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
        :disabled="!isValid || !isDateValid"
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
import moment from "moment"
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
      durationEstimated: 0,
      isAcc: 0,
      spentNewEstimatedData: 0,
      fteNewEstimatedData: 0,
      accEstimatedData: 0,
      accNewEstimatedData: 0,
      restEstimatedData: 0,
      restNewEstimatedData: 0,
      startDateEstimated: '',
      endDateEstimated: '',
      isValid: false,
      isDateValid: false
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
      this.spentData = parseFloat(this.loadEstimatedData) * (parseFloat(this.accEstimatedData) / 100.0)
      this.fteEngageData = newWE.fte_engage
      this.fteEstimatedData = newWE.fte_reel
      this.restEstimatedData = this.loadEstimatedData * (1 - (parseFloat(this.accEstimatedData) / 100.0))
      this.durationEstimated = this.loadEstimatedData / this.fteEstimatedData
      this.spentNewEstimatedData = 0
      this.fteNewEstimatedData = 0
      this.restNewEstimatedData = 0
      this.accNewEstimatedData = 0
      this.durationEstimated = 0
      this.durationDateEstimated = 0
      this.endDateEstimated = ''
      this.isAcc = 0
      this.isValid = false
      this.isDateValid = false
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    },
    async handleSave() {
      const loadNewEstimatedData = this.isAcc === 1 ? parseFloat(this.restNewEstimatedData) + parseFloat(this.spentNewEstimatedData)
        : parseFloat(this.spentNewEstimatedData) / (parseFloat(this.accNewEstimatedData) / 100.0)
      const payloads = {
        we_id: this.selectedWE.id,
        detail_mode: false,
        load_estimated: loadNewEstimatedData,
        acc: this.accNewEstimatedData,
        rest_todo_estimated: this.restNewEstimatedData,
        start_date_reel: this.startDateEstimated,
        end_date_reel: this.endDateEstimated,
        duration_date_reel: this.durationDateEstimated
      }
      if (this.fteNewEstimatedData !== '') {
        payloads.fte_estimated = this.fteNewEstimatedData
      }
      // this.$store.commit('globalState/SUBMIT_MANUAL_UPDATE', payloads)
      await this.$store.dispatch('globalState/submit_manual_update', payloads)
      // this.showToast('success', 'Success Update Work Element.')
      await this.$store.dispatch('globalState/load_org_data')
      const data = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/get_from_selected_nav_id', {
        data
      })
      this.$refs['my-modal'].hide()
    },
    async handleCalculateDate() {
      if (this.startDateEstimated === null || this.startDateEstimated === undefined || this.startDateEstimated === '') {
        this.showToast('warning', 'Please select the start date.')
        return
      }
      if (parseFloat(this.fteEstimatedData) === 0) {
        this.showToast('warning', 'Please Input non-zero value for FTE R/E.')
        return
      }
      if (parseFloat(this.accEstimatedData) === 0) {
        const startDate = moment(this.startDateEstimated)
        const interval = (parseFloat(this.loadEstimatedData) / parseFloat(this.fteEstimatedData)) * 1.4
        const endDate = startDate.add(interval, 'days')
        this.endDateEstimated = endDate.format('MM/DD/YYYY')
      } else if (parseFloat(this.accEstimatedData) > 0) {
        const startDate = moment()
        const interval = (((1 - (parseFloat(this.accEstimatedData) / 100)) * parseFloat(this.loadEstimatedData)) / parseFloat(this.fteEstimatedData)) * 1.4
        const endDate = startDate.add(interval, 'days')
        this.endDateEstimated = endDate.format('MM/DD/YYYY')
      }
      if (this.startDateEstimated === '' || this.endDateEstimated === '' || this.endDateEstimated === null) {
        this.showToast('warning', 'Invalid Date')
        this.isDateValid = false
      } else {
        this.durationDateEstimated = moment.duration(moment(this.endDateEstimated).diff(moment(this.startDateEstimated))).asDays()
        this.isDateValid = true
      }
    },
    handleChangeAccORest(type) {
      this.isValid = false
      if (type === 1) {
        this.isAcc = 2
        this.restNewEstimatedData = ''
      } else if (type === 2) {
        this.isAcc = 1
        this.accNewEstimatedData = ''
      }
      if (this.accNewEstimatedData === '' && this.restNewEstimatedData === '') this.isAcc = 0
      if (this.accNewEstimatedData === '' && this.isAcc === 2) this.isAcc = 0
      if (this.restNewEstimatedData === '' && this.isAcc === 1) this.isAcc = 0
    },
    handleCalculate() {
      if (this.isAcc === 0) {
        this.showToast('warning', 'Please input at least one for %acc R/E or Rest To Do R/E')
        this.isValid = false
      } else if ((this.isAcc === 1 || this.isAcc === 2) && (this.spentNewEstimatedData === '')) {
        this.showToast('warning', 'Please input spent R/E data')
        this.isValid = false
      } else {
        this.showToast('success', 'All Values are valid')
        if (this.isAcc === 2 && parseFloat(this.accNewEstimatedData) === 0) {
          this.showToast('warning', 'Please Input non-zero for %acc R/E')
          return
        }
        try {
          this.loadEstimatedData = this.isAcc === 2 ? parseFloat(this.spentNewEstimatedData) / (parseFloat(this.accNewEstimatedData) / 100.0) : parseFloat(this.spentNewEstimatedData) + parseFloat(this.restNewEstimatedData)
          this.fteEstimatedData = this.fteNewEstimatedData
          this.spentData = this.spentNewEstimatedData
          this.accEstimatedData = this.isAcc === 2 ? this.accNewEstimatedData : (parseFloat(this.spentNewEstimatedData) / parseFloat(this.loadEstimatedData)) * 100
          this.restEstimatedData = this.isAcc === 1 ? this.restNewEstimatedData : (parseFloat(this.loadEstimatedData) * (1 - (parseFloat(this.accNewEstimatedData) / 100)))
          this.isValid = true
        } catch (e) {
          this.showToast('warning', 'Invalid Data')
          this.isValid = false
        }
      }
    },
    handleChange() {
      this.isValid = false
    },
    updateDate(event) {
      this.startDateEstimated = moment(event.target.value).format('MM-DD-YYYY')
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
