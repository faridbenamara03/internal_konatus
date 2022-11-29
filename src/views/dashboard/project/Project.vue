<template>
  <b-card no-body footer-tag="footer" class="card-portfolio card-project mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div v-if="tabIndex === 0" class="action-bar justify-content-between">
          <div></div>
          <b-button-group v-if="tabIndex === 0" class="ml-1">
            <b-button variant="outline-primary" :style="`background:${demandTabState === 'team' ? '#7367F040' : '#fff0'}`" @click="handleDemandState('team')">
              Team
            </b-button>
            <b-button variant="outline-primary" :style="`background:${demandTabState === 'phase' ? '#7367F040' : '#fff0'}`" @click="handleDemandState('phase')">
              Phase
            </b-button>
          </b-button-group>
          <div class="d-flex action-group">
            <b-button variant="flat-primary">
              <feather-icon icon="BarChartIcon" />
              Priority
            </b-button>
            <b-button variant="flat-primary">
              <b-icon icon="door-closed" />
              Update
            </b-button>
            <b-button variant="flat-primary">
              <feather-icon icon="ArrowRightIcon" />
              Next Phase
            </b-button>
          </div>
        </div>
        <b-tab title="Demand" :class="{'border-0': !projectElementTeamData.length}">
          <div v-if="!projectElementTeamData.length" class="no-data">
            <feather-icon icon="FileIcon" size="48" />
            <p>No activities for this project yet.<br>
              Finish setting up the project by creating a elementary activity or importing your data in .wbs format</p>
          </div>
          <Demand :teamData="projectElementTeamData" :tabState="demandTabState" :phaseData="projectElementPhaseData" />
        </b-tab>
        <b-tab title="Reporting">
          <Reporting />
        </b-tab>
        <b-tab title="Control">
          <b-card-text>
            Carrot cake dragée chocolate.
          </b-card-text>
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <b-button-group class="ml-1">
              <b-button variant="outline-primary">
                Cost
              </b-button>
              <b-button variant="outline-primary">
                Plan
              </b-button>
            </b-button-group>
          </div>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon icon="CalendarIcon" size="16" class="mr-1" />
              <span>{{ getToday() }}</span>
              <b-form-datepicker
                class="ml-1"
                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                id="example-datepicker"
                style="width:140px"
                placeholder="Select Date"
              />
            </div>
            <b-button v-b-modal.modal-import class="ml-1" variant="outline-primary">
              <feather-icon icon="ArrowDownIcon" size="16" />
              <span>Import</span>
            </b-button>
            <b-button class="ml-1" variant="outline-primary">
              <feather-icon icon="UploadIcon" size="16" />
              <span>Export</span>
            </b-button>
            <b-button v-b-modal.modal-request-quote class="ml-1" variant="primary" :disabled="!teams.length">
              <feather-icon icon="MapIcon" size="16" />
              <span>Request Quote</span>
            </b-button>
          </div>
        </template>
      </b-tabs>
    </b-card-body>
    <template #footer>
      <b-button
        v-b-modal.modal-create
        variant="primary"
      >
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
    <create-modal />
    <modal-request-quote :data="projectElementTeamData" @onSubmit="handleRequestQuote" />
    <import-modal />
    <import-loader-modal />
  </b-card>
</template>

<script>
import {
  BButton,
  BCard,
  BCardText,
  BCardBody,
  BTabs,
  BTab,
  BButtonGroup,
  BFormDatepicker
} from 'bootstrap-vue'
import moment from 'moment'
import ModalRequestQuote from './modals/RequestQuoteModal.vue'
import ImportModal from './modals/ImportModal.vue'
import ImportLoaderModal from './modals/ImportLoaderModal.vue'
import CreateModal from './modals/CreateModal.vue'
import Demand from './components/Demand.vue'
import Reporting from './components/Reporting.vue'

export default {
  components: {
    BButtonGroup,
    BButton,
    BCard,
    BCardText,
    BCardBody,
    BTabs,
    BTab,
    Demand,
    Reporting,
    ImportModal,
    ImportLoaderModal,
    ModalRequestQuote,
    CreateModal,
    BFormDatepicker
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      teams: [], // initial state is empty
      tabIndex: 0,
      openActivityModal: false,
      selectedActivity: {},
      demandTabState: 'team',
      projectElementTeamData: this.$store.state.globalState.teamsState,
      projectElementPhaseData: this.$store.state.globalState.phaseState
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    handleDemandState(tabState) {
      this.demandTabState = tabState
    }
  },
  // computed: {
  //   filteredTeam() {
  //     const filteredTeams = this.teams
  //     const result = []
  //     for (let index = 0; index < filteredTeams.length; index += 1) { // team loop
  //       const team = filteredTeams[index]
  //       const newphases = []
  //       const parsedIndex = []
  //       for (let jndex = 0; jndex < team.phases.length; jndex += 1) { // phase loop
  //         const newphase = []
  //         const phase = team.phases[jndex]
  //         if (parsedIndex.indexOf(jndex) === -1) {
  //           newphase.push(phase)
  //           parsedIndex.push(jndex)
  //         }
  //         //
  //         for (let kndex = 0; kndex < team.phases.length; kndex += 1) { // phase loop for compare
  //           const phaseToCompare = team.phases[kndex]
  //           if (phaseToCompare.phaseV === phase.phaseV && parsedIndex.indexOf(kndex) === -1 && jndex !== kndex) {
  //             newphase.push(phaseToCompare)
  //             parsedIndex.push(kndex)
  //           }
  //         }
  //         //
  //         if (newphase.length > 0) newphases.push(newphase)
  //       }
  //       team.phases = newphases
  //       result.push(team)
  //     }
  //     return result
  //   }
  // }
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
