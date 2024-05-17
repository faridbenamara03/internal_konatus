import Vue from "vue"
import axios from "axios"
import moment from 'moment'

export default {
  namespaced: true,
  state: {
    loaderModalShow: false,
    selectedNavId: '',
    selectedNavObj: {},
    selectedWE: 0,
    teamDemandData: [],
    teamReportingData: [],
    tempReportingData: [],
    teamControlData: [],
    weTeamData: [],
    selectedZoomInterval: 0,
    weJobData: [],
    selectedActivityParents: [],
    selectedPhaseEndDate: 0,
    selectedPhaseStartDate: 0,
    selectedWinRate: 0,
    selectedFromDate: moment('2024-01-01'),
    selectedToDate: moment('2024-12-31'),
    selectedWorkElement: [],
    requestedElement: [],
    parentIndexForInsertElement: {},
    parentTeamTitle: ''
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
      // const { phaseId, element } = data
      // const a = state.teamDemandData.phases.map(t => {
      //   if (t.id === phaseId) {
      //     t.elements.push(
      //       {
      //         activityId: element.elementId,
      //         title: 'New inserted element',
      //         description: 'New inserted element description.',
      //         priority: element.priority,
      //         phase: phaseId,
      //         gate: element.gate,
      //         assigned: t.assigned,
      //         effort: {
      //           load: 53,
      //           duration: 26,
      //           fte: 80
      //         }
      //       }
      //     )
      //     return t
      //   }
      //   return t
      // })
      // state.teamDemandData.phases = a
      console.log("InsertTaskData:", data)
      Vue.$toast.success('Task inserted successfully.')
    },
    SAVE_SELECTED_NAV_DATA(state, payload) {
      // console.log("PNV:", payload.navData, "PPD:", payload.portData)
      state.selectedNavId = payload.navData.id
      state.selectedNavObj = payload.navData
      state.portfolioDemandData = payload.portData.demand
      if (payload.navData.type === 'program' || payload.navData.type === 'project' || payload.navData.type === 'subproject') {
        state.weTeamData = ['auto selection']
        state.weJobData = []
        const pTeamData = payload.portData.demand !== null && payload.portData.demand !== undefined ? payload.portData.demand.teams : []
        if (pTeamData && pTeamData !== undefined) {
          pTeamData.map(pt => {
            if (pt.phases && pt.phases.length > 0) {
              pt.phases.map(pA => {
                const pActivity = pA.activities
                if (pActivity && pActivity.length > 0) {
                  pActivity.map(item => {
                    state.weTeamData.push(item.team_name)
                    state.weJobData.push(item.job_name)
                    return null
                  })
                }
                return null
              })
            }
            return null
          })
        }
        state.weTeamData = state.weTeamData.filter((value, index, array) => array.indexOf(value) === index)
        state.weJobData = state.weJobData.filter((value, index, array) => array.indexOf(value) === index)
      }
      state.portfolioReportingData = JSON.parse(JSON.stringify(payload.portData.reporting))
      // state.portfolioReportingData = payload.portData.reporting
      state.tempReportingData = state.portfolioReportingData
      state.portfolioControlData = payload.portData.control
    },
  },
  actions: {
    get_from_selected_nav_id(ctx, payload) {
      let baseUrl = ''
      if (payload.data.startMonth !== undefined && payload.data.endMonth !== undefined) {
        baseUrl = `https://api.konatus.site/v1/api/team/data?id=${payload.data.id}&type=${payload.data.type}&start=${payload.data.startMonth}&end=${payload.data.endMonth}`
        axios.get(baseUrl).then(response => {
          const resData = { navData: payload.data.nav, portData: response.data }
          this.commit('teamState/SAVE_SELECTED_NAV_DATA', resData)
        }).catch(err => {
          console.log('error getting team data ---->', err)
          Vue.$toast.error('Failed to load portfolio data.')
        })
      } else {
        baseUrl = `https://api.konatus.site/v1/api/team/data?id=${payload.data.id}&type=${payload.data.type}&start=${moment(ctx.state.selectedFromDate).format("MM/YYYY")}&end=${moment(ctx.state.selectedToDate).format("MM/YYYY")}`
        axios.get(baseUrl).then(response => {
          const resData = { navData: payload.data, portData: response.data }
          this.commit('teamState/SAVE_SELECTED_NAV_DATA', resData)
        }).catch(err => {
          console.log('error getting team data ---->', err)
          Vue.$toast.error('Failed to load portfolio data.')
        })
      }
    },
    // get_team_reporting_data() {
    //   axios.get('https://api.konatus.site/v1/api/team/reporting').then(response => {
    //   // axios.get('http://localhost/konatus-me/public/api/team/reporting').then(response => {
    //     const teamReportingData = response.data
    //     this.commit('teamState/GET_REPORTING_DATA', teamReportingData)
    //   }).catch(err => {
    //     console.log('error getting team reporting data ---->', err)
    //     Vue.$toast.error('Failed to get team reporting data.')
    //   })
    // },
    // get_team_demand_data() {
    //   axios.get('https://api.konatus.site/v1/api/team/demand').then(response => {
    //   // axios.get('http://localhost/konatus-me/public/api/team/demand').then(response => {
    //     const teamDemandData = response.data
    //     this.commit('teamState/GET_DEMAND_DATA', teamDemandData)
    //   }).catch(err => {
    //     console.log('error getting team demand data ---->', err)
    //     Vue.$toast.error('Failed to get team demand data.')
    //   })
    // },
    // insert_new_task(payload) {
    //   axios.get('https://api.konatus.site/v1/api/team/phase/create', payload).then(response => {
    //   // axios.get('http://localhost/konatus-me/public/api/team/phase/create').then(response => {
    //     const newTaskData = response.data
    //     this.commit('teamState/INSERT_NEW_TASK', newTaskData)
    //   }).catch(err => {
    //     console.log('error creating team new task ---->', err)
    //     Vue.$toast.error('Failed to create team new task.')
    //   })
    // },
  },
}
