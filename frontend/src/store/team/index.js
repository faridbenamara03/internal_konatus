import Vue from "vue"
import axios from "axios"

export default {
  namespaced: true,
  state: {
    loaderModalShow: false,
    teamReportingData: {},
    teamDemandData: {},
  },
  getters: {
    loaderModalShow: state => state.loaderModalShow
  },
  mutations: {
    IMPORT_WBS(state, data) {
      setTimeout(() => {
        const regex = /,(?!\s*?[{["'\w])/g
        const data1 = data.replace(/(['"])?([a-zA-Z0-9]+)(['"])?:/g, '"$2":').replace(regex, '').replace(/'/g, '"')
        const parsedData = JSON.parse(data1)
        state.teamsState = parsedData
        state.loaderModalShow = !state.loaderModalShow
        Vue.$toast.success("Imported Successfully!")
      }, 1000)
      // .todo axios request
    },
    GET_REPORTING_DATA(state, data) {
      state.teamReportingData = data
    },
    GET_DEMAND_DATA(state, data) {
      state.teamDemandData = data
    },
    TOGGLE_IMPORT_LOADER_MODAL_V(state, visible) {
      if (visible) state.loaderModalShow = visible
      else state.loaderModalShow = !state.loaderModalShow
      // .todo axios request
    },
    RESOURCE_ADD(state, data) {
      state.resourceAdded = true
      const tmp = state.teamControlData.series
      const ned = {
        name: data.name,
        data: [
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
          { data: '' },
        ],
      }
      tmp.push(ned)
      Vue.$toast.success('Resource added successfully')
    },
    SELECT_ALL_PHASE_ACTS(state, n) {
      console.log(state, n)
      let isSelectedAll = true
      state.teamDemandData.phases.map(t => {
        if (t.id === n) {
          t.elements.map(t1 => {
            const b = { ...t1 }
            isSelectedAll = b.isSelected && isSelectedAll
            b.isSelected = true
            return null
          })
          return null
        }
        return null
      })
      const a = state.teamDemandData.phases.map(t => {
        if (t.id === n) {
          const c = { ...t }
          const elements = t.elements.map(t1 => {
            const b = { ...t1 }
            isSelectedAll = b.isSelected && isSelectedAll
            b.isSelected = !isSelectedAll
            return b
          })
          c.elements = elements
          return c
        }
        return t
      })
      state.teamDemandData.phases = a
    },
    INSERT_NEW_TASK(state, data) {
      const { phaseId, element } = data
      const a = state.teamDemandData.phases.map(t => {
        if (t.id === phaseId) {
          t.elements.push(
            {
              activityId: element.elementId,
              title: 'New inserted element',
              description: 'New inserted element description.',
              priority: element.priority,
              phase: phaseId,
              gate: element.gate,
              assigned: t.assigned,
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              }
            }
          )
          return t
        }
        return t
      })
      state.teamDemandData.phases = a
      Vue.$toast.success('Task inserted successfully.')
    },
  },
  actions: {
    get_team_reporting_data() {
      // axios.get('http://127.0.0.1:8000/api/team/reporting').then(response => {
      axios.get('http://localhost/konatus-me/public/api/team/reporting').then(response => {
        const teamReportingData = response.data
        this.commit('teamState/GET_REPORTING_DATA', teamReportingData)
      }).catch(err => {
        console.log('error getting team reporting data ---->', err)
        Vue.$toast.error('Failed to get team reporting data.')
      })
    },
    get_team_demand_data() {
      // axios.get('http://127.0.0.1:8000/api/team/demand').then(response => {
      axios.get('http://localhost/konatus-me/public/api/team/demand').then(response => {
        const teamDemandData = response.data
        this.commit('teamState/GET_DEMAND_DATA', teamDemandData)
      }).catch(err => {
        console.log('error getting team demand data ---->', err)
        Vue.$toast.error('Failed to get team demand data.')
      })
    },
  },
}
