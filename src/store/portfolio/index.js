import Vue from "vue"
import axios from "axios"
// import dateFormat from "dateformat"
// import moment from "moment"

export default {
  namespaced: true,
  state: {
    demandTableEditable: false,
    optimizeStatus: 'origin',
    reportingData: []
  },
  mutations: {
    UPDATE_DEMAND_TABLE_EDITABLE(state) {
      state.demandTableEditable = !state.demandTableEditable
    },
    UPDATE_OPTIMIZE_STATUES(state, value) {
      state.optimizeStatus = value
    },
    GET_REPORTING_DATA(state, data) {
      state.reportingData = data
    },
  },
  actions: {
    get_portfolio_reporting_data() {
      axios.get('http://127.0.0.1:8000/api/portfolio/reporting').then(response => {
        const portfolioReportingData = response.data
        this.commit('portfolioState/GET_REPORTING_DATA', portfolioReportingData)
      }).catch(err => {
        console.log('error getting team reporting data ---->', err)
        Vue.$toast.error('Failed to get team reporting data.')
      })
    }
  },
}
