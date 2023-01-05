<template>
  <b-card no-body footer-tag="footer" class="card-portfolio card-project mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar justify-content-between">
          <div></div>
          <div>
            <div v-if="(tabIndex === 0)">
              <b-button v-b-modal.modal-import class="ml-1" variant="primary">
                <feather-icon icon="ArrowDownIcon" size="16" />&nbsp;
                <span>Import</span>
              </b-button>
              <b-button v-if="(tabIndex === 0)" v-b-modal.modal-request-quote class="ml-1" variant="primary" :disabled="!teams.length">
                <feather-icon icon="MapIcon" size="16" />&nbsp;
                <span>Request Quote</span>
              </b-button>
            </div>
            <div v-if="(tabIndex === 1)">
              <b-button v-b-modal.modal-update class="mr-1" variant="primary">
                <feather-icon icon="RotateCwIcon" size="16" />&nbsp;
                <span>Update</span>
              </b-button>
              <b-button v-if="(tabIndex === 1)" variant="primary">
                <feather-icon icon="ArrowRightIcon" size="16" />&nbsp;
                Next Phase
              </b-button>
            </div>
            <div v-if="(tabIndex === 2)">
              <b-button variant="primary">
                <feather-icon icon="CommandIcon" size="16" />&nbsp;
                Manage
              </b-button>
            </div>
          </div>
        </div>
        <b-tab
          title="Demand"
          @click="onClickCPSelectBtn(isChartView ? 'demand-chart' : 'demand-table')"
          :class="{'border-0': !projectElementTeamData.length}"
        >
          <div v-if="!projectElementTeamData.length" class="no-data">
            <feather-icon icon="FileIcon" size="48" />
            <p>No activities for this project yet.<br>
              Finish setting up the project by creating a elementary activity or importing your data in .wbs format</p>
          </div>
          <Demand :teamData="projectElementTeamData" :isChartView="isChartView" :phaseData="projectElementPhaseData" />
        </b-tab>
        <b-tab title="Reporting" @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')">
          <Reporting :data="c_items" :otype="selectedNavType" :reportingState="reportingState" />
        </b-tab>
        <b-tab title="Control" @click="onClickCPSelectBtn('control')">
          <Control />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center" v-if="tabIndex !== 0">
              <feather-icon icon="CalendarIcon" size="16" style="margin-right:3px" />
              <span>Period</span>
              <div class="ml-1">
                <b-form-input style="width:160px" id="popover-manual-1" readonly v-model="selectedMonth" />
                <b-popover placement="bottomleft" target="popover-manual-1" ref="popover" :show.sync="popoverShow">
                  <div v-click-outside="onClose" style="display:flex;">
                    <div class="mr-1">
                      <month-picker no-default style="width:300px" variant="dark" @input="onRangeFromChange"></month-picker>
                    </div>
                    <div>
                      <month-picker no-default style="width:300px" variant="dark" @input="onRangeToChange"></month-picker>
                    </div>
                  </div>
                </b-popover>
              </div>
            </div>
            <b-button-group v-if="tabIndex === 0" class="ml-1">
              <b-button
                variant="outline-primary"
                :style="`background-color:${isChartView ? '#473ca3' : '#0000'}`"
                @click="handleChangeViewMode(true)"
              >
                Chart
              </b-button>
              <b-button
                variant="outline-primary"
                :style="`background-color:${!isChartView ? '#473ca3' : '#0000'}`"
                @click="handleChangeViewMode(false)"
              >
                Table
              </b-button>
            </b-button-group>
            <b-button-group v-if="(tabIndex === 1)" class="ml-1">
              <b-button
                variant="outline-primary"
                :style="`background-color:${reportingState === 'cost' ? '#473ca3' : '#0000'}`"
                @click="onClickCPSelectBtn('reporting-cost', 'cost')"
              >
                Cost
              </b-button>
              <b-button
                variant="outline-primary"
                :style="`background-color:${reportingState === 'plan' ? '#473ca3' : '#0000'}`"
                @click="onClickCPSelectBtn('reporting-plan', 'plan')"
              >
                Plan
              </b-button>
            </b-button-group>
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
  BCardBody,
  BTabs,
  BTab,
  BButtonGroup,
  BFormInput,
  BPopover
} from 'bootstrap-vue'
import moment from 'moment'
import ClickOutside from 'vue-click-outside'
import { MonthPicker } from 'vue-month-picker'
import { isEmpty } from "@/views/utils"
import ModalRequestQuote from './modals/RequestQuoteModal.vue'
import ImportModal from './modals/ImportModal.vue'
import ImportLoaderModal from './modals/ImportLoaderModal.vue'
import CreateModal from './modals/CreateModal.vue'
import Demand from './components/Demand.vue'
import Reporting from './components/Reporting.vue'
import Control from './components/Control.vue'

export default {
  components: {
    BButtonGroup,
    BButton,
    BCard,
    BCardBody,
    BTabs,
    BTab,
    Demand,
    Reporting,
    Control,
    ImportModal,
    ImportLoaderModal,
    ModalRequestQuote,
    CreateModal,
    MonthPicker,
    BFormInput,
    BPopover,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      reportingState: 'cost',
      teams: [], // initial state is empty
      tabIndex: 0,
      openActivityModal: false,
      selectedActivity: {},
      demandTabState: 'team',
      projectElementTeamData: this.$store.state.globalState.teamsState,
      projectElementPhaseData: this.$store.state.globalState.phaseState,
      popoverShow: false,
      selectedMonth: `${new Date().getMonth() + 1} / ${new Date().getFullYear()} - ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`,
      rangeArray: [],
      isChartView: false,
      items: [
        {
          name: 'Quadruped robot',
          priority: 'Highest',
          budget: '1100',
          deadline: '06/01/2021',
          children: [
            {
              name: 'New format',
              priority: 'High',
              budget: '350',
              deadline: '06/01/2021',
            },
            {
              name: 'Enhanced motricity',
              priority: 'Highest',
              budget: '240',
              deadline: '03/28/2021',
            },
            {
              name: 'Enhanced authonomy',
              priority: 'Highest',
              budget: '350',
              deadline: '06/01/2021',
            },
            {
              name: 'Dual sourcing for Q',
              priority: 'Lowest',
              budget: '150',
              deadline: '12/31/2021',
            },
          ],
        },
        {
          name: 'micro robot observation nbc',
          priority: 'High',
          budget: '13633.69',
          deadline: '05/20/2018',
        },
        {
          name: 'handling robot',
          priority: 'Low',
          budget: '13076.28',
          deadline: '03/24/2018',
        },
        {
          name: 'power and programing station',
          priority: 'Lowest',
          budget: '12336.17',
          deadline: '12/03/2017',
        },
        {
          name: 'total',
          budget: '40146.14',
        }
      ],
    }
  },
  methods: {
    isUN(data) {
      return isEmpty(data)
    },
    onRangeFromChange(value) {
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray[0] = v
      this.selectedMonth = this.rangeArray.join(' - ')
    },
    onRangeToChange(value) {
      const v = `${value.monthIndex} / ${value.year}`
      this.rangeArray[1] = v
      this.selectedMonth = this.rangeArray.join(' - ')
      if (!this.isUN(this.rangeArray[0]) && !this.isUN(this.rangeArray[1])) {
        this.popoverShow = false
      }
    },
    // ontabchange() {
    //   const urlArr = this.$route.path.split('/')
    //   const urls = ['demand-table', 'demand-chart', 'reporting-cost', 'reporting-plan', 'control']
    //   if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
    //     urlArr.pop()
    //     this.$router.push({ path: urlArr.join('/') })
    //   }
    // },
    onClickCPSelectBtn(url, value) {
      if (value) this.reportingState = value
      const urlArr = this.$route.path.split('/')
      const urls = ['demand-table', 'demand-chart', 'reporting-cost', 'reporting-plan', 'control']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        this.$router.push({ path: urlArr.join('/').concat(`/${url}`) })
      } else {
        this.$router.push({ path: this.$route.path.concat(`/${url}`) })
      }
    },
    handleChangeViewMode(mode) {
      const urlArr = this.$route.path.split('/')
      const urls = ['demand-table', 'demand-chart', 'reporting-cost', 'reporting-plan', 'control']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        this.$router.push({ path: urlArr.join('/').concat(mode ? '/demand-chart' : '/demand-table') })
      } else {
        this.$router.push({ path: this.$route.path.concat(mode ? '/demand-chart' : '/demand-table') })
      }
      this.isChartView = mode
    },
    onClose() {
      this.popoverShow = false
    },
    getToday() {
      return `Today ${moment().format('MM/DD/YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    handleDemandState(tabState) {
      this.demandTabState = tabState
    }
  },
  directives: {
    ClickOutside
  },
  computed: {
    selectedNavType() {
      return this.$store.state.globalState.selectedNavObj.type
    },
    c_items() {
      const { selectedNavObj } = this.$store.state.globalState
      return selectedNavObj
    },
  }
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
.popover-body {
  position: absolute;
  left: -576px;
}
@import "@core/scss/vue/pages/dashboard-portfolio.scss";
@import "@core/scss/vue/pages/dashboard-project.scss";
</style>
