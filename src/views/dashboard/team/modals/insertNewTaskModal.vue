<template>
  <b-modal
    id="modal-add-new-task"
    centered
    hide-backdrop
    content-class="shadow"
    hide-header
    size="sm"
    @ok="handleOk"
  >
    <div class="mb-2">
      <b>{{ phaseId }}</b>
    </div>
    <b-dropdown
      id="checkbox-dropdown"
      class="mb-1"
      text="Select Options"
      variant="outline-secondary"
      toggle-class="form-control"
      style="width: 100%;"
    >
      <template #button-content>
        <span>{{ selectedOptionsString }}</span>
      </template>
      <b-dropdown-item
        v-for="(option, index) in options"
        :key="option.value"
      >
        <b-form-checkbox
          :id="'checkbox_' + index"
          v-model="option.selected"
          :value="option.value"
          class="m-0"
        >
          {{ option.label }}
        </b-form-checkbox>
      </b-dropdown-item>
    </b-dropdown>
    <b-form-input
      id="input-elementId"
      v-model="elementId"
      placeholder="Work Element Id"
      class="mb-1"
    />
    <b-form-input
      id="input-gate"
      v-model="gate"
      placeholder="Gate"
      class="mb-1"
    />
    <b-form-select
      v-model="priority"
      :options="['Highest', 'High', 'Low', 'Lowest']"
    />
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
  BModal, VBModal, BFormInput, BFormSelect, BDropdown, BFormCheckbox
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { isEmpty } from '../../../utils'

export default {
  components: {
    BModal,
    BFormInput,
    BFormSelect,
    BDropdown,
    BFormCheckbox
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  props: {
    phaseId: {
      type: String
    },
  },
  data() {
    return {
      taskId: 'JIRA',
      elementId: '',
      priority: 'High',
      gate: '',
      selectedOptions: '',
      options: [
        { label: 'Jira', value: 'Jira' },
        { label: 'SAP', value: 'SAP' },
      ]
    }
  },
  computed: {
    selectedOptionsString() {
      const selectedOptions = this.options
        .filter(option => option.selected)
        .map(option => option.value)
        .join('+')
      return selectedOptions
    },
  },
  methods: {
    handleOk(e) {
      if (isEmpty(this.elementId) || isEmpty(this.gate)) {
        e.preventDefault()
        this.$toast.warning('Value is invalid!')
      } else {
        this.$bvModal.hide('modal-add-new-task')
        this.$store.dispatch('teamState/insert_new_task', { phaseId: this.phaseId, element: { elementId: this.elementId, priority: this.priority, gate: this.gate } })
        this.elementId = ''
        this.gate = ''
      }
    }
  }
}
</script>
