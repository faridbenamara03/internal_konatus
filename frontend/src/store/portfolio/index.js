import Vue from "vue"
import axios from "axios"
// import dateFormat from "dateformat"
// import moment from "moment"

export default {
  namespaced: true,
  state: {
    demandTableEditable: false,
    optimizeStatus: 'origin',
    optimizeStates: 'initial',
    changeProjects: [],
    reportingData: [],
    controlData: [],
    demandData: [],
    optimizedData: []
  },
  mutations: {
    UPDATE_DEMAND_TABLE_EDITABLE(state) {
      state.demandTableEditable = !state.demandTableEditable
    },
    UPDATE_OPTIMIZE_STATUES(state, value) {
      state.optimizeStatus = value
    },
    UPDATE_OPTIMIZE_STATES(state, value) {
      state.optimizeStates = value
    },
    GET_OPTIMIZED_DATA(state, data) {
      state.optimizedData.push(data)
      state.optimizeStates = 'preview'
    },
    GET_PORTFOLIO_REPORTING_DATA(state, data) {
      state.reportingData.push(data)
    },
    GET_PORTFOLIO_DEMAND_DATA(state, data) {
      state.demandData.push(data)
    },
    GET_PORTFOLIO_CONTROL_DATA(state, data) {
      state.controlData.push(data)
    },
  },
  actions: {
    get_portfolio_reporting_data() {
      axios.get('https://konatus-api.onrender.com/api/portfolio/reporting').then(response => {
      // axios.get('http://localhost/konatus-me/public/api/portfolio/reporting').then(response => {
        const portfolioReportingData = response.data
        this.commit('portfolioState/GET_PORTFOLIO_REPORTING_DATA', portfolioReportingData)
      }).catch(err => {
        console.log('error getting portfolio reporting data ---->', err)
        Vue.$toast.error('Failed to get portfolio reporting data.')
      })
    },
    get_portfolio_demand_data() {
      axios.get('https://konatus-api.onrender.com/api/portfolio/demand').then(response => {
      // axios.get('http://localhost/konatus-me/public/api/portfolio/demand').then(response => {
        const portfolioDemandData = response.data
        this.commit('portfolioState/GET_PORTFOLIO_DEMAND_DATA', portfolioDemandData)
      }).catch(err => {
        console.log('error getting portfolio reporting data ---->', err)
        Vue.$toast.error('Failed to get portfolio reporting data.')
      })
    },
    get_portfolio_control_data() {
      axios.get('https://konatus-api.onrender.com/api/portfolio/control').then(response => {
      // axios.get('http://localhost/konatus-me/public/api/portfolio/control').then(response => {
        const portfolioControlData = response.data
        this.commit('portfolioState/GET_PORTFOLIO_CONTROL_DATA', portfolioControlData)
      }).catch(err => {
        console.log('error getting portfolio reporting data ---->', err)
        Vue.$toast.error('Failed to get portfolio reporting data.')
      })
    },
    get_optimized_data(data, params) {
      return new Promise((resolve, reject) => {
        axios.get('https://konatus-api.onrender.com/api/get_optimize', params.data)
          .then(response => {
            const optimizeData = response.data
            this.commit('portfolioState/GET_OPTIMIZED_DATA', optimizeData)
            resolve()
          })
          .catch(err => {
            console.log('error getting optimized data ---->', err)
            Vue.$toast.error('Failed to get optimized data.')
            reject(err)
          })
      })
    }
  },
}
