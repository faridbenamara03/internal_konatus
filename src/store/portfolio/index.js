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
      console.log('test :', data)
      state.optimizeStates = 'preview'
    }
  },
  actions: {
    get_optimized_data(data, params) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/optimize', params.data)
          .then(response => {
            const optimizeData = response.data
            this.commit('portfolioState/GET_OPTIMIZED_DATA', optimizeData)
            console.log('optdata:', optimizeData)
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
