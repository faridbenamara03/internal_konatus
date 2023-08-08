<template>
  <b-modal id="modal-add-new-task-program" centered hide-backdrop content-class="shadow" hide-header size="sm" @ok="handleOk">
    <div class="mb-2">
      <b>Insert Work Element</b>
    </div>
    <b-dropdown class="mb-1" id="checkbox-dropdown" text="Select Options" variant="outline-secondary" toggle-class="form-control" style="width: 100%;">
      <template #button-content>
        <span>{{ selectedOptionsString }}</span>
      </template>
      <b-dropdown-item v-for="(option, index) in options" :key="option.value">
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
    <!-- <b-form-select id="input-taskId" v-model="taskId" class="mb-1" placeholder="WorK Element Id" :options="['JIRA', 'SAP']" /> -->
    <!-- <b-form-input id="input-taskId" v-model="taskId" placeholder="WorK Element Id" class="mb-1" /> -->
    <b-form-input id="input-name" v-model="name" placeholder="WorK Element Name" class="mb-1" />
    <b-form-select id="select-team" v-model="teamttle" class="mb-1" placeholder="Gate" :options="['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F']" />
    <b-form-select id="input-gate" v-model="gate" class="mb-1" placeholder="Gate" :options="['Gate1', 'Gate2', 'Gate3', 'Gate4']" />
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
  BModal, VBModal, BFormInput, BFormSelect, BFormCheckbox, BDropdown
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import { isEmpty } from '../../../utils'

export default {
  components: {
    BModal,
    BFormInput,
    BFormSelect,
    BFormCheckbox,
    BDropdown
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
      taskId: 'JIRA',
      gate: '',
      name: '',
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
    teamttle() {
      return this.$store.state.globalState.parentTeamTtle
    },
    priority() {
      return this.$store.state.globalState.selectedNavObj.priority
    }
  },
  methods: {
    handleOk(e) {
      if (isEmpty(this.selectedOptionsString) || isEmpty(this.gate)) {
        e.preventDefault()
        this.$toast.warning('Value is invalid!')
      } else {
        this.$bvModal.hide('modal-add-new-task-program')
        this.$store.commit('globalState/INSERT_NEW_TASK', {
          id: this.selectedOptionsString, priority: this.priority, gate: this.gate, name: this.name
        })
        this.taskId = ''
        this.gate = ''
      }
    }
  }
}
</script>
