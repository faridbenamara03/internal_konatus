<template>
  <div v-if="reportingState === 'plan'" class="unit-report-custom">
    <div class="unit-reporting-side-custom">
      <div style="height:124.3px" class="d-flex flex-column justify-content-end">
        <b-form-select v-model="optionSelect" :options="options" />
      </div>
      <template v-for="(item, index) in datt">
        <div class="program-title" v-if="item.assigned.indexOf(optionSelect) > -1 || optionSelect === 'show_all'"
          :key="`${index}`">
          <div class="program-title-child">
            <feather-icon v-if="!collapsed" icon="ChevronDownIcon" style="cursor:pointer" v-on:click="onCollapse" />
            <feather-icon v-if="collapsed" icon="ChevronUpIcon" style="cursor:pointer" v-on:click="onCollapse" />
            {{ item.title }}
          </div>
        </div>
        <template v-if="!collapsed">
          <template v-for="(item1, index1) in item.children">
            <div class="program-collapse-header"
              v-if="item1.assigned.indexOf(optionSelect) > -1 || optionSelect === 'show_all'" :key="`${index}-${index1}`">
              <div class="header-child">
                <div class="child1">
                  <div class="title">
                    {{ item1.title }}
                  </div>
                  <div class="id">
                    {{ item1.title }}
                  </div>
                </div>
              </div>
            </div>
            <template v-for="(item2, index2) in item1.children">
              <div class="program-collapse-sub-project"
                v-if="item2.assigned.indexOf(optionSelect) > -1 || optionSelect === 'show_all'"
                :key="`${index}-${index1}-${index2}`">
                <div class="sub-project">
                  <div class="child1">
                    {{ item2.title }}
                  </div>
                  <div class="child2">
                    ({{ item2.progress ? item2.progress : 0 }}%)
                  </div>
                </div>
              </div>
              <template v-for="(item3, index3) in item2.phases">
                <div style="height:51px;background:#1A2239;border-bottom:1px solid #FFF1;"
                  class="d-flex flex-column justify-content-around"
                  v-if="item3.assigned.indexOf(optionSelect) > -1 || optionSelect === 'show_all'"
                  :key="`${index}-${index1}-${index2}-${index3}`">
                  <div class="d-flex justify-content-between ml-5 mr-3">
                    <div>
                      {{ item3.id }}
                    </div>
                    <div style="color:#FFF">
                      ({{ item3.progress ? item3.progress : 0 }}%)
                    </div>
                  </div>
                </div>
              </template>
            </template>
          </template>
        </template>
      </template>
    </div>
    <div class="unit-reporting-content-custom">
      <div
        :style="'position:absolute;height:100%;border-right:2px #BD2020 solid;left:' + leftP + 'px;top:118px;z-index:222'">
        <div class="rounded-circle"
          style="width:6px;height:6px;background-color:#BD2020;position:absolute;top:-2px;left:-2px"></div>
      </div>
      <div class="unit-reporting-content--header">
        <div class="first-child">
        </div>
        <div class="unit-reporting-content-header--badge">
          <div class="phase">
            <div class="flag" />
            Phase
          </div>
          <div class="milestones">
            <b-icon icon="diamond-fill" variant="success" />
            <b-icon icon="triangle-fill" class="rotate-icon" variant="success" />
            Milestones
          </div>
          <div class="demand">
            <b-icon icon="circle-fill" class="flag" />
            Demand
          </div>
          <div class="engaged">
            <b-icon icon="circle-fill" class="flag" />
            Engaged
          </div>
          <div class="real-estimated">
            <b-icon icon="circle-fill" class="flag" />
            Real Estimated
          </div>
        </div>
      </div>
      <div class="unit-reporting-content--body-custom">
        <div class="timeline-list">
          <div v-for="(date, index) in reportingDates" :key="index" class="date" :class="{ 'active': isToday(date) }">
            <p v-if="index > 0 ? getMonth(date) != getMonth(reportingDates[index - 1]) : true" class="month">
              {{ getMonth(date) }}
            </p>
            <p class="week">
              {{ getWeek(date) }}
            </p>
            <p class="day">
              {{ getDay(date) }}
            </p>
          </div>
        </div>
        <div v-if="!collapsed">
          <template v-for="(item, index) in datt">
            <div v-if="item.assigned.indexOf(optionSelect) > -1 || optionSelect === 'show_all'" style="height:89px;"
              :key="`${index}`">
              <div class="d-flex flex-column justify-content-around"
                style="height:88px;background-color:#283046;border-radius:5px;padding:5px 10px 5px 3px;width:fit-content;">
                <div :style="`padding-left:${item.reportingData.red[0]}px`">
                  <ProgramProgressBar :type="0" :width1="item.reportingData.red[1]" :width2="item.reportingData.red[2]" />
                </div>
                <div :style="`padding-left:${item.reportingData.green[0]}px`">
                  <ProgramProgressBar :type="1" :width1="item.reportingData.green[1]"
                    :width2="item.reportingData.green[2]" />
                </div>
                <div :style="`padding-left:${item.reportingData.blue[0]}px`">
                  <ProgramProgressBar :type="2" :width1="item.reportingData.blue[1]"
                    :width2="item.reportingData.blue[2]" />
                </div>
              </div>
            </div>
            <template v-for="(item1, index1) in item.children">
              <div style="height:77px" v-if="item1.assigned.indexOf(optionSelect) > -1 || optionSelect === 'show_all'"
                :key="`${index}-${index1}`">
                <div class="d-flex flex-column justify-content-around"
                  style="height:76px;background-color:#283046;border-radius:5px;padding:5px 10px 5px 3px;width:fit-content;">
                  <div :style="`padding-left:${item1.reportingData.red[0]}px`">
                    <ProgramProgressBar :type="0" :width1="item1.reportingData.red[1]"
                      :width2="item1.reportingData.red[2]" />
                  </div>
                  <div :style="`padding-left:${item1.reportingData.green[0]}px`">
                    <ProgramProgressBar :type="1" :width1="item1.reportingData.green[1]"
                      :width2="item1.reportingData.green[2]" />
                  </div>
                  <div :style="`padding-left:${item1.reportingData.blue[0]}px`">
                    <ProgramProgressBar :type="2" :width1="item1.reportingData.blue[1]"
                      :width2="item1.reportingData.blue[2]" />
                  </div>
                </div>
              </div>
              <template v-for="(item2, index2) in item1.children">
                <div style="height:77px" v-if="item2.assigned.indexOf(optionSelect) > -1 || optionSelect === 'show_all'"
                  :key="`${index}-${index1}-${index2}`">
                  <div class="d-flex flex-column justify-content-around"
                    style="height:76px;padding:5px 10px 5px 3px;width:fit-content;background-color: #283046;border-radius:5px;">
                    <div :style="`padding-left:${item2.reportingData.red[0]}px`">
                      <ProjectProgressBar :type="0" :width1="item2.reportingData.red[1]"
                        :width2="item2.reportingData.red[2]" :width3="item2.reportingData.red[3]"
                        :width4="item2.reportingData.red[4]" />
                    </div>
                    <div :style="`padding-left:${item2.reportingData.green[0]}px`">
                      <ProjectProgressBar :type="1" :width1="item2.reportingData.green[1]"
                        :width2="item2.reportingData.green[2]" :width3="item2.reportingData.green[3]"
                        :width4="item2.reportingData.green[4]" />
                    </div>
                    <div :style="`padding-left:${item2.reportingData.blue[0]}px`">
                      <ProjectProgressBar :type="2" :width1="item2.reportingData.blue[1]"
                        :width2="item2.reportingData.blue[2]" :width3="item2.reportingData.blue[3]"
                        :width4="item2.reportingData.blue[4]" />
                    </div>
                  </div>
                </div>
                <template v-for="(item3, index3) in item2.phases">
                  <div style="height:51px;background:#1A2239;border-bottom:1px solid #FFF1;width:fit-content;"
                    class="d-flex flex-column justify-content-around"
                    v-if="item3.assigned.indexOf(optionSelect) > -1 || optionSelect === 'show_all'"
                    :key="`${index}-${index1}-${index2}-${index3}`">
                    <div class="d-flex flex-column justify-content-around"
                      style="height:49px;padding:0 10px 0 3px;background-color: #283046;border-radius:5px;">
                      <div :style="`margin-bottom:1px;padding-left:${item3.reportingData.red[0]}px;`">
                        <ElementProgressBar :type="0" :width1="item3.reportingData.red[1]"
                          :width2="item3.reportingData.red[2]" />
                      </div>
                      <div :style="`margin-bottom:1px;padding-left:${item3.reportingData.green[0]}px;`">
                        <ElementProgressBar :type="1" :width1="item3.reportingData.green[1]"
                          :width2="item3.reportingData.green[2]" />
                      </div>
                      <div :style="`margin-bottom:1px;padding-left:${item3.reportingData.blue[0]}px;`">
                        <ElementProgressBar :type="2" :width1="item3.reportingData.blue[1]"
                          :width2="item3.reportingData.blue[2]" />
                      </div>
                    </div>
                  </div>
                </template>
              </template>
            </template>
          </template>
        </div>
      </div>
    </div>
    <b-modal id="unit-reporting-update-modal" ref="unit_reporting_update_modal" title="Create New" centered no-fade
      hide-backdrop>
      <!-- Modal Header -->
      <template #modal-header>
        <h5 class="modal-title">Update</h5>
        <div class="modal-actions">
          <b-button @click="hideModal" variant="outline-primary">
            <feather-icon icon="XIcon" size="18" />
          </b-button>
        </div>
      </template>
      <div>Are you sure to update?</div>
      <template #modal-footer>
        <b-button variant="outline-primary" @click="hideModal">Cancel</b-button>
        <b-button variant="primary" @click="onUpdate">Update</b-button>
      </template>
    </b-modal>
  </div>
  <div v-else class="unit-report-custom">
    <ReportingCost :data="itemsForReport" :fields="fieldsForReport" />
  </div>
</template>

<script>
import {
  BModal, BButton, BFormSelect
} from "bootstrap-vue"
import moment from "moment"
import ProgramProgressBar from '../../globalComponent/ProgramProgressBar.vue'
import ProjectProgressBar from '../../globalComponent/ProjectProgressBar.vue'
import ElementProgressBar from '../../globalComponent/ElementProgressBar.vue'
import ReportingCost from './ReportingCost.vue'

export default {
  components: {
    BModal,
    BButton,
    BFormSelect,
    ProgramProgressBar,
    ProjectProgressBar,
    ElementProgressBar,
    ReportingCost
  },
  data() {
    return {
      reportingDates: [],
      leftP: 15 * 30 + 8,
      collapsed: false,
      options: [
        { value: 'show_all', text: 'Show all' },
        { value: 'Team A', text: 'Team A' },
        { value: 'Team B', text: 'Team B' },
        { value: 'Team C', text: 'Team C' },
        { value: 'Team D', text: 'Team D' },
      ],
      optionSelect: 'show_all',
      itemsForDemand: [
        {
          name: 'Konatus Industries',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [
            {
              name: 'TEAM A',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM B',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM C',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM D',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM C',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM C',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
            {
              name: 'TEAM E',
              budget_team: '228k',
              budget_engaged: '320k',
              real_estimated: '58',
            },
          ],
        },
        {
          name: 'SPACE HOLDER FOR ANOTHER BU',
          budget_team: '2540',
          budget_engaged: '1132.3',
          real_estimated: '1132.3',
          children: [],
        },
      ],
      itemsForReport: [
        {
          _showDetails: true,
          name: 'Konatus Industries',
          budget_team: '3740',
          budget_engaged: '1647.3',
          real_estimated: '1478.2',
          value: '2391',
          quote: '2291',
          spend: '1190',
          demand: '1011',
          authorised: '921.2',
          children: [
            {
              name: 'Paris',
              budget_team: '1390',
              budget_engaged: '601.9',
              real_estimated: '601.9',
              value: '2391',
              quote: '2291',
              spend: '1190',
              demand: '1011',
              authorised: '921.2',
              state: 'up',
              children: [
                {
                  name: 'TEAM A',
                  budget_team: '1390',
                  budget_engaged: '601.9',
                  real_estimated: '601.9',
                  value: '2391',
                  quote: '2291',
                  spend: '1190',
                  demand: '1011',
                  authorised: '921.2',
                  state: 'up',
                },
                {
                  name: 'TEAM B',
                  budget_team: '1390',
                  budget_engaged: '601.9',
                  real_estimated: '601.9',
                  value: '2391',
                  quote: '2291',
                  spend: '1190',
                  demand: '1011',
                  authorised: '921.2',
                  state: 'up',
                },
                {
                  name: 'TEAM C',
                  budget_team: '1390',
                  budget_engaged: '601.9',
                  real_estimated: '601.9',
                  value: '2391',
                  quote: '2291',
                  spend: '1190',
                  demand: '1011',
                  authorised: '921.2',
                  state: 'down',
                },
              ]
            },
            {
              name: 'Sofia',
              budget_team: '500',
              budget_engaged: '210.6',
              real_estimated: '210.6',
              value: '2391',
              quote: '2291',
              spend: '1190',
              demand: '1011',
              authorised: '921.2',
              state: 'up',
              children: [
                {
                  name: 'TEAM D',
                  budget_team: '1390',
                  budget_engaged: '601.9',
                  real_estimated: '601.9',
                  value: '2391',
                  quote: '2291',
                  spend: '1190',
                  demand: '1011',
                  authorised: '921.2',
                  state: 'up',
                },
                {
                  name: 'TEAM E',
                  budget_team: '1390',
                  budget_engaged: '601.9',
                  real_estimated: '601.9',
                  value: '2391',
                  quote: '2291',
                  spend: '1190',
                  demand: '1011',
                  authorised: '921.2',
                  state: 'down',
                },
                {
                  name: 'TEAM F',
                  budget_team: '1390',
                  budget_engaged: '601.9',
                  real_estimated: '601.9',
                  value: '2391',
                  quote: '2291',
                  spend: '1190',
                  demand: '1011',
                  authorised: '921.2',
                  state: 'up',
                },
              ]
            },
          ],
        },
        {
          name: 'SPACE HOLDER FOR AN OTHER BU',
        },
        {
          name: 'total',
          budget_team: '3740',
          budget_engaged: '1647.3',
          real_estimated: '1478.2',
          value: '2391',
          quote: '2291',
          spend: '1190',
          demand: '1011',
          authorised: '921.2',
        }
      ],
      fieldsForReport: ['budget_team', 'budget_engaged', 'real_estimated'],
      // fieldsForReport: [{ key: 'show_details', thStyle: 'opacity: 0; width: 30%;' }, 'budget_team', 'budget_engaged', 'real_estimated', { key: 'actions', thStyle: 'opacity: 0; width: 17%;' }],
    }
  },
  props: {
    reportingState: {
      type: String,
    },
  },
  computed: {
    datt() {
      return this.$store.state.orgnizationState.unitReportingData
    }
  },
  mounted() {
    const startDate = moment(moment()).subtract(15, "days")
    const endDate = moment(moment()).add(2, "M")
    this.reportingDates = [startDate.clone()]
    while (startDate.add(1, "days").diff(endDate) < 0) {
      this.reportingDates.push(startDate.clone())
    }
  },
  methods: {
    isToday(date) {
      return moment().isSame(date, "day")
    },
    getWeek(date) {
      return date.format("dd").substring(0, 1)
    },
    getDay(date) {
      return date.format("D")
    },
    getMonth(date) {
      return date.format("MMM YYYY")
    },
    onCollapse() {
      this.collapsed = !this.collapsed
    },
    hideModal() {
      this.$refs.unit_reporting_update_modal.hide()
    },
    onUpdate() {
      this.$store.commit('orgnizationState/UPDATE_TEAM_REPORT_DATA')
      this.$refs.unit_reporting_update_modal.hide()
    }
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/dashboard-unit-reporting.scss";
</style>
