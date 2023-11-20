<template>
  <b-card
    no-body
    footer-tag="footer"
    class="card-portfolio card-project mb-0"
  >
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div class="action-bar justify-content-between">
          <div>
            <h4 v-if="c_items.type === 'program'" />
          </div>
          <div>
            <div v-if="(tabIndex === 0)">
              <b-button
                v-b-modal.modal-import
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="ArrowDownIcon"
                  size="16"
                />&nbsp;
                <span>Import</span>
              </b-button>
              <b-button
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="UploadIcon"
                  size="16"
                />&nbsp;
                <span>Export</span>
              </b-button>
              <b-button
                v-if="(tabIndex === 0)"
                v-b-modal.modal-request-quote
                :disabled="selectedWorkElement.length === 0"
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="MapIcon"
                  size="16"
                />&nbsp;
                <span>Request Quote</span>
              </b-button>
            </div>
            <div v-if="(tabIndex === 1)">
              <!-- <b-button
                v-b-modal.program-reporting-plan-update
                class="mr-1"
                variant="primary"
              >
                <feather-icon
                  icon="EditIcon"
                  size="16"
                />&nbsp;
                <span>Edit as table</span>
              </b-button> -->
              <b-button
                v-b-modal.program-reporting-plan-update
                class="mr-1"
                variant="primary"
              >
                <feather-icon
                  icon="RotateCwIcon"
                  size="16"
                />&nbsp;
                <span>Update</span>
              </b-button>
              <!-- <b-button variant="primary">
                <feather-icon icon="ArrowRightIcon" size="16" />&nbsp;
                Next Phase
              </b-button> -->
              <b-button
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="UploadIcon"
                  size="16"
                />&nbsp;
                <span>Export</span>
              </b-button>
            </div>
            <div v-if="(tabIndex === 2)">
              <b-button variant="primary">
                <feather-icon
                  icon="CommandIcon"
                  size="16"
                />&nbsp;
                Manage
              </b-button>
              <b-button
                class="ml-1"
                variant="primary"
              >
                <feather-icon
                  icon="UploadIcon"
                  size="16"
                />&nbsp;
                <span>Export</span>
              </b-button>
            </div>
          </div>
        </div>
        <b-tab
          title="Demand"
          :class="{'border-0': !projectElementTeamData.length}"
          @click="onClickCPSelectBtn(isChartView ? 'demand-chart' : 'demand-table')"
        >
          <div
            v-if="!projectElementTeamData.length"
            class="no-data"
          >
            <feather-icon
              icon="FileIcon"
              size="48"
            />
            <p>No activities for this project yet.<br>
              Finish setting up the project by creating a elementary activity or importing your data in .wbs format</p>
          </div>
          <Demand
            :team-data="projectElementTeamData"
            :is-chart-view="isChartView"
            :phase-data="projectElementPhaseData"
          />
        </b-tab>
        <b-tab
          title="Reporting"
          @click="onClickCPSelectBtn(reportingState === 'cost' ? 'reporting-cost' : 'reporting-plan')"
        >
          <Reporting
            :data="c_items"
            :otype="selectedNavType"
            :reporting-state="reportingState"
          />
        </b-tab>
        <b-tab
          title="Control"
          @click="onClickCPSelectBtn('control')"
        >
          <Control />
        </b-tab>
        <template #tabs-end>
          <div class="d-flex ml-auto justify-content-end align-items-center pt-1 pb-1 actions">
            <div class="d-flex align-items-center">
              <feather-icon
                icon="CalendarIcon"
                size="16"
                style="margin-right:3px"
              />
              <span>Period</span>
              <div class="ml-1">
                <b-form-input
                  id="popover-manual-1"
                  v-model="selectedMonth"
                  style="width:160px"
                  readonly
                />
                <b-popover
                  ref="popover"
                  placement="bottomleft"
                  target="popover-manual-1"
                  :show.sync="popoverShow"
                >
                  <div
                    v-click-outside="onClose"
                    style="display:flex;"
                  >
                    <div class="mr-1">
                      <month-picker
                        no-default
                        style="width:300px"
                        variant="dark"
                        @input="onRangeFromChange"
                      />
                    </div>
                    <div>
                      <month-picker
                        no-default
                        style="width:300px"
                        variant="dark"
                        @input="onRangeToChange"
                      />
                    </div>
                  </div>
                  <div>
                    <b-button
                      style="width: 100%"
                      variant="primary"
                      @click="handleDone"
                    >
                      Done
                    </b-button>
                  </div>
                </b-popover>
              </div>
            </div>
            <b-button-group
              v-if="tabIndex === 0"
              class="ml-1"
            >
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
            <b-button-group
              v-if="(tabIndex === 1)"
              class="ml-1"
            >
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
        variant="primary"
        @click="toggleCreateNewProgramDrawer"
      >
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
    <Drawer
      align="right"
      :closeable="false"
      :mask-closable="true"
      @close="toggleCreateNewProgramDrawer"
    >
      <div v-if="openCreateNewProgramDrawer">
        <CreateDrawer />
      </div>
    </Drawer>
    <modal-request-quote
      :data="projectElementTeamData"
      @onSubmit="handleRequestQuote"
    />
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
import Drawer from "vue-simple-drawer"
import { isEmpty } from "@/views/utils"
import ModalRequestQuote from '../globalComponent/RequestQuoteModal.vue'
import ImportModal from './modals/ImportModal.vue'
import ImportLoaderModal from './modals/ImportLoaderModal.vue'
import CreateDrawer from './modals/CreateNewProgramDrawer.vue'
import Demand from './components/Demand.vue'
import Reporting from './components/Reporting.vue'
import Control from './components/Control.vue'

export default {
  // CreateModal,
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
    Drawer,
    CreateDrawer,
    MonthPicker,
    BFormInput,
    BPopover,
  },
  directives: {
    ClickOutside
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
      popoverShow: false,
      selectedMonth: `${new Date().getMonth() + 1} / ${new Date().getFullYear()} - ${new Date().getMonth() + 1} / ${new Date().getFullYear()}`,
      rangeArray: [],
      isChartView: false,
    }
  },
  computed: {
    openCreateNewProgramDrawer() {
      return this.$store.state.globalState.openCreateNewProgramDrawer
    },
    selectedWorkElement() {
      return this.$store.state.globalState.selectedWorkElement
    },
    totalProjectHours() {
      const { selectedNavObj } = this.$store.state.globalState
      let thours = 0
      selectedNavObj.children.map(t => {
        thours += parseInt(t.value, 10)
        return null
      })
      return thours
    },
    selectedNavType() {
      return this.$store.state.globalState.selectedNavObj.type
    },
    c_items() {
      const { selectedNavObj } = this.$store.state.globalState
      return selectedNavObj
    },
    projectElementTeamData() {
      return this.$store.state.globalState.projectElementTeamData
    },
    projectElementPhaseData() {
      return this.$store.state.globalState.projectElementPhaseData
    }
  },
  methods: {
    isUN(data) {
      return isEmpty(data)
    },
    async handleDone() {
      const navObj = this.$store.state.globalState.selectedNavObj
      await this.$store.dispatch('globalState/get_from_selected_nav_id', {
        data: {
          id: navObj.id,
          type: navObj.type,
          nav: navObj,
          startMonth: this.rangeArray[0],
          endMonth: this.rangeArray[1]
        }
      })
      if (!this.isUN(this.rangeArray[0]) && !this.isUN(this.rangeArray[1])) {
        this.popoverShow = false
      }
    },
    toggleCreateNewProgramDrawer() {
      this.$store.commit('globalState/TOGGLE_CREATE_NEW_DRAWER')
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
      // if (!this.isUN(this.rangeArray[0]) && !this.isUN(this.rangeArray[1])) {
      //   this.popoverShow = false
      // }
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
        const baseUrl = urlArr.join('/').concat(`/${url}`)
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl) return
        this.$router.push({ path: baseUrl })
      } else {
        const baseUrl = this.$route.path.concat(`/${url}`)
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl) return
        this.$router.push({ path: baseUrl })
      }
    },
    handleChangeViewMode(mode) {
      const urlArr = this.$route.path.split('/')
      const urls = ['demand-table', 'demand-chart', 'reporting-cost', 'reporting-plan', 'control']
      if (urls.indexOf(urlArr[urlArr.length - 1]) > -1) {
        urlArr.pop()
        const baseUrl = urlArr.join('/').concat(mode ? '/demand-chart' : '/demand-table')
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl) return
        this.$router.push({ path: baseUrl })
      } else {
        const baseUrl = this.$route.path.concat(mode ? '/demand-chart' : '/demand-table')
        const currentUrl = this.$router.history.current.path
        if (baseUrl === currentUrl) return
        this.$router.push({ path: baseUrl })
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
