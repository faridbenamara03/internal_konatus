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
    get_portfolio_reporting_data(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost/konatus-me/public/api/portfolio/reporting?portId=${payload.portId}`).then(response => {
          const portfolioReportingData = response.data
          this.commit('portfolioState/GET_PORTFOLIO_REPORTING_DATA', portfolioReportingData)
          resolve()
        }).catch(err => {
          console.log('error getting portfolio reporting data ---->', err)
          Vue.$toast.error('Failed to get portfolio reporting data.')
          reject(err)
        })
      })
    },
    get_portfolio_demand_data(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost/konatus-me/public/api/portfolio/demand?portId=${payload.portId}`).then(response => {
          const portfolioDemandData = response.data
          this.commit('portfolioState/GET_PORTFOLIO_DEMAND_DATA', portfolioDemandData)
          resolve()
        }).catch(err => {
          console.log('error getting portfolio demand data ---->', err)
          Vue.$toast.error('Failed to get portfolio demand data.')
          reject(err)
        })
      })
    },
    get_portfolio_control_data(ctx, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost/konatus-me/public/api/portfolio/control?portId=${payload.portId}`).then(response => {
          const portfolioControlData = response.data
          this.commit('portfolioState/GET_PORTFOLIO_CONTROL_DATA', portfolioControlData)
          resolve()
        }).catch(err => {
          console.log('error getting portfolio control data ---->', err)
          Vue.$toast.error('Failed to get portfolio control data.')
          reject(err)
        })
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
  }
}
