<template>
  <b-card no-body footer-tag="footer" class="card-portfolio card-project mb-0">
    <b-card-body class="p-0">
      <b-tabs v-model="tabIndex">
        <div v-if="tabIndex === 0" class="action-bar justify-content-between">
          <b-button variant="flat-primary" @click="handleUpdate">
            <feather-icon icon="RotateCwIcon" />
            Update
          </b-button>
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
        <b-tab title="Demand" :class="{'border-0': !teams.length}">
          <div v-if="!teams.length" class="no-data">
            <feather-icon icon="FileIcon" size="48" />
            <p>No activities for this project yet.<br>
              Finish setting up the project by creating a elementary activity or importing your data in .wbs format</p>
          </div>
          <Demand :data="teams" />
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
            <div class="d-flex align-items-center">
              <feather-icon icon="CalendarIcon" size="16" class="mr-1" />
              <span>{{ getToday() }}</span>
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
      <b-button variant="primary">
        <feather-icon icon="PlusIcon" />
      </b-button>
    </template>
    <modal-request-quote :data="teams" @onSubmit="handleRequestQuote" />
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
} from 'bootstrap-vue'
import moment from 'moment'
import ModalRequestQuote from './modals/RequestQuoteModal.vue'
import ImportModal from './modals/ImportModal.vue'
import ImportLoaderModal from './modals/ImportLoaderModal.vue'
import Demand from './components/Demand.vue'
import Reporting from './components/Reporting.vue'

// const workElement = [
//   {
//     portfolioid: 1281111,
//     programid: 1281101,
//     name_activity: '1.28.11.1.1',
//     id_work_element: '1.28.11.1.1',
//     id: 1,
//   },
//   {
//     portfolioid: 12815242,
//     programid: 1281502,
//     name_activity: '1.28.15.2.42',
//     id_work_element: '1.28.15.2.42',
//     id: 2,
//   },
//   {
//     portfolioid: 22920161,
//     programid: 2292001,
//     name_activity: '2.29.20.1.61',
//     id_work_element: '2.29.20.1.61',
//     id: 3,
//   },
//   {
//     portfolioid: 1281118,
//     programid: 1281101,
//     name_activity: '1.28.11.1.8',
//     id_work_element: '1.28.11.1.8',
//     id: 4,
//   },
//   {
//     portfolioid: 1281117,
//     programid: 1281101,
//     name_activity: '1.28.11.1.7',
//     id_work_element: '1.28.11.1.7',
//     id: 5,
//   },
//   {
//     portfolioid: 12817157,
//     programid: 1281701,
//     name_activity: '1.28.17.1.57',
//     id_work_element: '1.28.17.1.57',
//     id: 6,
//   },
//   {
//     portfolioid: 12817158,
//     programid: 1281701,
//     name_activity: '1.28.17.1.58',
//     id_work_element: '1.28.17.1.58',
//     id: 7,
//   },
//   {
//     portfolioid: 13228183,
//     programid: 1322801,
//     name_activity: '1.32.28.1.83',
//     id_work_element: '1.32.28.1.83',
//     id: 8,
//   },
//   {
//     portfolioid: 12816154,
//     programid: 1281601,
//     name_activity: '1.28.16.1.54',
//     id_work_element: '1.28.16.1.54',
//     id: 9,
//   },
//   {
//     portfolioid: 22918116,
//     programid: 2291801,
//     name_activity: '2.29.18.1.16',
//     id_work_element: '2.29.18.1.16',
//     id: 10,
//   },
//   {
//     portfolioid: 22918115,
//     programid: 2291801,
//     name_activity: '2.29.18.1.15',
//     id_work_element: '2.29.18.1.15',
//     id: 11,
//   },
//   {
//     portfolioid: 22918111,
//     programid: 2291801,
//     name_activity: '2.29.18.1.11',
//     id_work_element: '2.29.18.1.11',
//     id: 12,
//   },
//   {
//     portfolioid: 23022123,
//     programid: 2302201,
//     name_activity: '2.30.22.1.23',
//     id_work_element: '2.30.22.1.23',
//     id: 13,
//   },
//   {
//     portfolioid: 12812137,
//     programid: 1281201,
//     name_activity: '1.28.12.1.37',
//     id_work_element: '1.28.12.1.37',
//     id: 14,
//   },
//   {
//     portfolioid: 12812138,
//     programid: 1281201,
//     name_activity: '1.28.12.1.38',
//     id_work_element: '1.28.12.1.38',
//     id: 15,
//   },
//   {
//     portfolioid: 22921465,
//     programid: 2292104,
//     name_activity: '2.29.21.4.65',
//     id_work_element: '2.29.21.4.65',
//     id: 16,
//   },
//   {
//     portfolioid: 12815241,
//     programid: 1281502,
//     name_activity: '1.28.15.2.41',
//     id_work_element: '1.28.15.2.41',
//     id: 17,
//   },
//   {
//     portfolioid: 22920159,
//     programid: 2292001,
//     name_activity: '2.29.20.1.59',
//     id_work_element: '2.29.20.1.59',
//     id: 18,
//   },
//   {
//     portfolioid: 22919144,
//     programid: 2291901,
//     name_activity: '2.29.19.1.44',
//     id_work_element: '2.29.19.1.44',
//     id: 19,
//   },
//   {
//     portfolioid: 22919143,
//     programid: 2291901,
//     name_activity: '2.29.19.1.43',
//     id_work_element: '2.29.19.1.43',
//     id: 20,
//   },
//   {
//     portfolioid: 1281112,
//     programid: 1281101,
//     name_activity: '1.28.11.1.2',
//     id_work_element: '1.28.11.1.2',
//     id: 21,
//   },
//   {
//     portfolioid: 12817155,
//     programid: 1281701,
//     name_activity: '1.28.17.1.55',
//     id_work_element: '1.28.17.1.55',
//     id: 22,
//   },
//   {
//     portfolioid: 22921162,
//     programid: 2292101,
//     name_activity: '2.29.21.1.62',
//     id_work_element: '2.29.21.1.62',
//     id: 23,
//   },
//   {
//     portfolioid: 13228182,
//     programid: 1322801,
//     name_activity: '1.32.28.1.82',
//     id_work_element: '1.32.28.1.82',
//     id: 24,
//   },
//   {
//     portfolioid: 12816152,
//     programid: 1281601,
//     name_activity: '1.28.16.1.52',
//     id_work_element: '1.28.16.1.52',
//     id: 25,
//   },
//   {
//     portfolioid: 12816153,
//     programid: 1281601,
//     name_activity: '1.28.16.1.53',
//     id_work_element: '1.28.16.1.53',
//     id: 26,
//   },
//   {
//     portfolioid: 229181110,
//     programid: 2291801,
//     name_activity: '2.29.18.1.110',
//     id_work_element: '2.29.18.1.110',
//     id: 27,
//   },
//   {
//     portfolioid: 229181111,
//     programid: 2291801,
//     name_activity: '2.29.18.1.111',
//     id_work_element: '2.29.18.1.111',
//     id: 28,
//   },
//   {
//     portfolioid: 229181112,
//     programid: 2291801,
//     name_activity: '2.29.18.1.112',
//     id_work_element: '2.29.18.1.112',
//     id: 29,
//   },
//   {
//     portfolioid: 22918112,
//     programid: 2291801,
//     name_activity: '2.29.18.1.12',
//     id_work_element: '2.29.18.1.12',
//     id: 30,
//   },
//   {
//     portfolioid: 22912110,
//     programid: 2291801,
//     name_activity: '2.29.12.1.10',
//     id_work_element: '2.29.12.1.10',
//     id: 31,
//   },
//   {
//     portfolioid: 23022118,
//     programid: 2302201,
//     name_activity: '2.30.22.1.18',
//     id_work_element: '2.30.22.1.18',
//     id: 32,
//   },
//   {
//     portfolioid: 23022119,
//     programid: 2302201,
//     name_activity: '2.30.22.1.19',
//     id_work_element: '2.30.22.1.19',
//     id: 33,
//   },
//   {
//     portfolioid: 23022124,
//     programid: 2302201,
//     name_activity: '2.30.22.1.24',
//     id_work_element: '2.30.22.1.24',
//     id: 34,
//   },
//   {
//     portfolioid: 23022125,
//     programid: 2302201,
//     name_activity: '2.30.22.1.25',
//     id_work_element: '2.30.22.1.25',
//     id: 35,
//   },
//   {
//     portfolioid: 1312629,
//     programid: 1312601,
//     name_activity: '1.31.26.29',
//     id_work_element: '1.31.26.29',
//     id: 36,
//   },
//   {
//     portfolioid: 23023167,
//     programid: 2302301,
//     name_activity: '2.30.23.1.67',
//     id_work_element: '2.30.23.1.67',
//     id: 37,
//   },
//   {
//     portfolioid: 23023166,
//     programid: 2302301,
//     name_activity: '2.30.23.1.66',
//     id_work_element: '2.30.23.1.66',
//     id: 38,
//   },
//   {
//     portfolioid: 12812135,
//     programid: 1281201,
//     name_activity: '1.28.12.1.35',
//     id_work_element: '1.28.12.1.35',
//     id: 39,
//   },
//   {
//     portfolioid: 23024169,
//     programid: 2302401,
//     name_activity: '2.30.24.1.69',
//     id_work_element: '2.30.24.1.69',
//     id: 40,
//   },
//   {
//     portfolioid: 12815240,
//     programid: 1281502,
//     name_activity: '1.28.15.2.40',
//     id_work_element: '1.28.15.2.40',
//     id: 41,
//   },
//   {
//     portfolioid: 22920160,
//     programid: 2292001,
//     name_activity: '2.29.20.1.60',
//     id_work_element: '2.29.20.1.60',
//     id: 42,
//   },
//   {
//     portfolioid: 22919146,
//     programid: 2291901,
//     name_activity: '2.29.19.1.46',
//     id_work_element: '2.29.19.1.46',
//     id: 43,
//   },
//   {
//     portfolioid: 22919147,
//     programid: 2291901,
//     name_activity: '2.29.19.1.47',
//     id_work_element: '2.29.19.1.47',
//     id: 44,
//   },
//   {
//     portfolioid: 1281113,
//     programid: 1281101,
//     name_activity: '1.28.11.1.3',
//     id_work_element: '1.28.11.1.3',
//     id: 45,
//   },
//   {
//     portfolioid: 1281114,
//     programid: 1281101,
//     name_activity: '1.28.11.1.4',
//     id_work_element: '1.28.11.1.4',
//     id: 46,
//   },
//   {
//     portfolioid: 12817156,
//     programid: 1281701,
//     name_activity: '1.28.17.1.56',
//     id_work_element: '1.28.17.1.56',
//     id: 47,
//   },
//   {
//     portfolioid: 22918113,
//     programid: 2291801,
//     name_activity: '2.29.18.1.13',
//     id_work_element: '2.29.18.1.13',
//     id: 48,
//   },
//   {
//     portfolioid: 22918114,
//     programid: 2291801,
//     name_activity: '2.29.18.1.14',
//     id_work_element: '2.29.18.1.14',
//     id: 49,
//   },
//   {
//     portfolioid: 22921364,
//     programid: 2292103,
//     name_activity: '2.29.21.3.64',
//     id_work_element: '2.29.21.3.64',
//     id: 50,
//   },
//   {
//     portfolioid: 23022126,
//     programid: 2302201,
//     name_activity: '2.30.22.1.26',
//     id_work_element: '2.30.22.1.26',
//     id: 51,
//   },
//   {
//     portfolioid: 23023168,
//     programid: 2302301,
//     name_activity: '2.30.23.1.68',
//     id_work_element: '2.30.23.1.68',
//     id: 52,
//   },
//   {
//     portfolioid: 1281115,
//     programid: 1281101,
//     name_activity: '1.28.11.1.5',
//     id_work_element: '1.28.11.1.5',
//     id: 53,
//   },
//   {
//     portfolioid: 23024170,
//     programid: 2302401,
//     name_activity: '2.30.24.1.70',
//     id_work_element: '2.30.24.1.70',
//     id: 54,
//   },
//   {
//     portfolioid: 23024171,
//     programid: 2302401,
//     name_activity: '2.30.24.1.71',
//     id_work_element: '2.30.24.1.71',
//     id: 55,
//   },
//   {
//     portfolioid: 22919145,
//     programid: 2291901,
//     name_activity: '2.29.19.1.45',
//     id_work_element: '2.29.19.1.45',
//     id: 56,
//   },
//   {
//     portfolioid: 22921263,
//     programid: 2292102,
//     name_activity: '2.29.21.2.63',
//     id_work_element: '2.29.21.2.63',
//     id: 57,
//   },
//   {
//     portfolioid: 13228184,
//     programid: 1322801,
//     name_activity: '1.32.28.1.84',
//     id_work_element: '1.32.28.1.84',
//     id: 58,
//   },
//   {
//     portfolioid: 13217150,
//     programid: 1322701,
//     name_activity: '1.32.17.1.50',
//     id_work_element: '1.32.17.1.50',
//     id: 59,
//   },
//   {
//     portfolioid: 12812136,
//     programid: 1281201,
//     name_activity: '1.28.12.1.36',
//     id_work_element: '1.28.12.1.36',
//     id: 60,
//   },
//   {
//     portfolioid: 13126279,
//     programid: 1312602,
//     name_activity: '1.31.26.2.79',
//     id_work_element: '1.31.26.2.79',
//     id: 61,
//   },
//   {
//     portfolioid: 13126280,
//     programid: 1312602,
//     name_activity: '1.31.26.2.80',
//     id_work_element: '1.31.26.2.80',
//     id: 62,
//   },
//   {
//     portfolioid: 13126281,
//     programid: 1312602,
//     name_activity: '1.31.26.2.81',
//     id_work_element: '1.31.26.2.81',
//     id: 63,
//   },
//   {
//     portfolioid: 13127176,
//     programid: 1312701,
//     name_activity: '1.31.27.1.76',
//     id_work_element: '1.31.27.1.76',
//     id: 64,
//   },
//   {
//     portfolioid: 13127177,
//     programid: 1312701,
//     name_activity: '1.31.27.1.77',
//     id_work_element: '1.31.27.1.77',
//     id: 65,
//   },
//   {
//     portfolioid: 13127178,
//     programid: 1312701,
//     name_activity: '1.31.27.1.78',
//     id_work_element: '1.31.27.1.78',
//     id: 66,
//   },
//   {
//     portfolioid: 22919148,
//     programid: 2291601,
//     name_activity: '2.29.19.1.48',
//     id_work_element: '2.29.19.1.48',
//     id: 67,
//   },
//   {
//     portfolioid: 22918117,
//     programid: 2291801,
//     name_activity: '2.29.18.1.17',
//     id_work_element: '2.29.18.1.17',
//     id: 68,
//   },
//   {
//     portfolioid: 23022127,
//     programid: 2302201,
//     name_activity: '2.30.22.1.27',
//     id_work_element: '2.30.22.1.27',
//     id: 69,
//   },
//   {
//     portfolioid: 23022128,
//     programid: 2302201,
//     name_activity: '2.30.22.1.28',
//     id_work_element: '2.30.22.1.28',
//     id: 70,
//   },
//   {
//     portfolioid: 23022120,
//     programid: 2302201,
//     name_activity: '2.30.22.1.20',
//     id_work_element: '2.30.22.1.20',
//     id: 71,
//   },
//   {
//     portfolioid: 23022121,
//     programid: 2302201,
//     name_activity: '2.30.22.1.21',
//     id_work_element: '2.30.22.1.21',
//     id: 72,
//   },
//   {
//     portfolioid: 23022122,
//     programid: 2302201,
//     name_activity: '2.30.22.1.22',
//     id_work_element: '2.30.22.1.22',
//     id: 73,
//   },
//   {
//     portfolioid: 13126130,
//     programid: 1312601,
//     name_activity: '1.31.26.1.30',
//     id_work_element: '1.31.26.1.30',
//     id: 74,
//   },
//   {
//     portfolioid: 23025172,
//     programid: 2302501,
//     name_activity: '2.30.25.1.72',
//     id_work_element: '2.30.25.1.72',
//     id: 75,
//   },
//   {
//     portfolioid: 23025173,
//     programid: 2302501,
//     name_activity: '2.30.25.1.73',
//     id_work_element: '2.30.25.1.73',
//     id: 76,
//   },
//   {
//     portfolioid: 23025174,
//     programid: 2302501,
//     name_activity: '2.30.25.1.74',
//     id_work_element: '2.30.25.1.74',
//     id: 77,
//   },
//   {
//     portfolioid: 1281116,
//     programid: 1281101,
//     name_activity: '1.28.11.1.6',
//     id_work_element: '1.28.11.1.6',
//     id: 78,
//   },
//   {
//     portfolioid: 13228185,
//     programid: 1322801,
//     name_activity: '1.32.28.1.85',
//     id_work_element: '1.32.28.1.85',
//     id: 79,
//   },
//   {
//     portfolioid: 13126131,
//     programid: 1312601,
//     name_activity: '1.31.26.1.31',
//     id_work_element: '1.31.26.1.31',
//     id: 80,
//   },
//   {
//     portfolioid: 13126132,
//     programid: 1312601,
//     name_activity: '1.31.26.1.32',
//     id_work_element: '1.31.26.1.32',
//     id: 81,
//   },
//   {
//     portfolioid: 1281119,
//     programid: 1281101,
//     name_activity: '1.28.11.1.9',
//     id_work_element: '1.28.11.1.9',
//     id: 82,
//   },
//   {
//     portfolioid: 13228186,
//     programid: 1322801,
//     name_activity: '1.32.28.1.86',
//     id_work_element: '1.32.28.1.86',
//     id: 83,
//   },
//   {
//     portfolioid: 13127175,
//     programid: 1312701,
//     name_activity: '1.31.27.1.75',
//     id_work_element: '1.31.27.1.75',
//     id: 84,
//   },
//   {
//     portfolioid: 13126133,
//     programid: 1312601,
//     name_activity: '1.31.26.1.33',
//     id_work_element: '1.31.26.1.33',
//     id: 85,
//   },
//   {
//     portfolioid: 13126134,
//     programid: 1312601,
//     name_activity: '1.31.26.1.34',
//     id_work_element: '1.31.26.1.34',
//     id: 86,
//   },
//   {
//     portfolioid: 13217151,
//     programid: 1322701,
//     name_activity: '1.32.17.1.51',
//     id_work_element: '1.32.17.1.51',
//     id: 87,
//   },
//   {
//     portfolioid: 13217149,
//     programid: 1322701,
//     name_activity: '1.32.17.1.49',
//     id_work_element: '1.32.17.1.49',
//     id: 88,
//   },
//   {
//     portfolioid: 12812139,
//     programid: 1281201,
//     name_activity: '1.28.12.1.39',
//     id_work_element: '1.28.12.1.39',
//     id: 89,
//   },
// ]

export default {
  components: {
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
    }
  },
  computed: {
    selectedPhases() {
      return []
    }
  },
  methods: {
    getToday() {
      return `Today, ${moment().format('DD, MMMM, YYYY')}`
    },
    handleRequestQuote(res) {
      console.log(res)
    },
    handleUpdate() {
      // this.$http.get('workElement').then(res => {
      //   console.log(res)
      // })
      // console.log('workElement: ', workElement)
      this.teams = this.$store.state.teamState.teamsstate // Populated state after "Update" from Vuex stroe
    },
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
