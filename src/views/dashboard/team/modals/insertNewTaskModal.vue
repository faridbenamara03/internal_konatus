<template>
  <b-modal id="modal-add-new-task" centered hide-backdrop content-class="shadow" hide-header size="sm" @ok="handleOk">
    <div class="mb-2">
      <b>{{ phaseId }}</b>
    </div>
    <b-form-input id="input-elementId" v-model="elementId" placeholder="Work Element Id" class="mb-1" />
    <b-form-input id="input-gate" v-model="gate" placeholder="Gate" class="mb-1" />
    <b-form-select v-model="priority" :options="['Highest', 'High', 'Low', 'Lowest']" />
  </b-modal>
</template>

<style scoped>
.containerSelf {
  display: flex;
  flex-direction: row;
}

.sub-main {
  flex: 1;
  text-align: center;
}
</style>

<script>
import {
  BModal, VBModal, BFormInput, BFormSelect
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { isEmpty } from '../../../utils'

export default {
  components: {
    BModal,
    BFormInput,
    BFormSelect
  },
  props: {
    phaseId: {
      type: String
    },
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      elementId: '',
      priority: 'High',
      gate: ''
    }
  },
  methods: {
    handleOk(e) {
      if (isEmpty(this.elementId) || isEmpty(this.gate)) {
        e.preventDefault()
        this.$toast.warning('Value is invalid!')
      } else {
        this.$bvModal.hide('modal-add-new-task')
        this.$store.commit('teamState/INSERT_NEW_TASK', { phaseId: this.phaseId, element: { elementId: this.elementId, priority: this.priority, gate: this.gate } })
        this.elementId = ''
        this.gate = ''
      }
    }
  }
}
</script>
