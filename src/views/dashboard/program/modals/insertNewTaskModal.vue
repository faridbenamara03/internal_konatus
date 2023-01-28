<template>
  <b-modal id="modal-add-new-task" centered hide-backdrop content-class="shadow" hide-header size="sm" @ok="handleOk">
    <div class="mb-2">
      <b>Phase Number {{ phaseV }}</b>
    </div>
    <b-form-input id="input-taskId" v-model="taskId" placeholder="WorK Element Id" class="mb-1" />
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
    phaseV: {
      type: Number
    },
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      taskId: '',
      priority: 'High',
      gate: ''
    }
  },
  methods: {
    handleOk(e) {
      if (isEmpty(this.taskId) || isEmpty(this.gate)) {
        e.preventDefault()
        this.$toast.warning('Value is invalid!')
      } else {
        this.$bvModal.hide('modal-add-new-task')
        this.$store.commit('teamState/INSERT_NEW_TASK', { phaseV: this.phaseV, task: { taskId: this.taskId, priority: this.priority, gate: this.gate } })
        this.taskId = ''
        this.gate = ''
      }
    }
  }
}
</script>
