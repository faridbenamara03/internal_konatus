<<<<<<< HEAD
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
    selectedFromDate: moment('2024-01-01'),
    selectedToDate: moment('2024-12-31'),
    selectedZoomInterval: 0,
    weJobData: [],
    selectedActivityParents: [],
    selectedPhaseEndDate: 0,
    selectedPhaseStartDate: 0,
    selectedWinRate: 0,
    selectedWorkElement: [],
    requestedElement: [],
    parentIndexForInsertElement: {},
    activityDetailModalOpen: false,
    parentTeamTitle: '',
    fields: ['programs', 'gate', 'next_gate'],
    reportingColumnData: undefined,
    total_data: [24, 45, 101, 117, 12, 101, 117, 12],
  },
  getters: {
    loaderModalShow: state => state.loaderModalShow
  },
  mutations: {
    UPDATE_TEAM_REPORT_DATA(state) {
      state.teamReportingData = []
    },
    UPDATE_DATA(state) {
      state.teamControlData = []
    },
    SET_ZOOM_INTERVAL(state, payload) {
      state.selectedZoomInterval = payload
    },
    REPORTING_COLUMN_UPDATE(state, columns) {
      state.reportingColumnData = columns
    },
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
    HIDE_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = false
    },
    OPEN_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = true
    },
    WORK_ELEMENT_CHECK(state, checkedActivity) {
      state.selectedWorkElement = checkedActivity
    },
    SELECT_WORK_ELEMENT_TO_UPDATE(state, selectedWE) {
      state.selectedWE = selectedWE
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
      state.teamDemandData = payload.portData.demand
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
      state.teamReportingData = JSON.parse(JSON.stringify(payload.portData.reporting))
      state.tempReportingData = state.portfolioReportingData
      state.teamControlData = payload.portData.control
    },
    UPDATE_SELECTED_FROM_DATE(state, payload) {
      state.selectedFromDate = payload.from !== null || payload.from !== undefined ? moment(payload.from) : moment(`${new Date().getFullYear()}-01-01`)
    },
    UPDATE_SELECTED_TO_DATE(state, payload) {
      state.selectedToDate = payload.to !== null || payload.to !== undefined ? moment(payload.to) : moment(`${new Date().getFullYear()}-12-31`)
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
    }
  }
}
=======
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
    selectedFromDate: moment('2024-01-01'),
    selectedToDate: moment('2024-12-31'),
    selectedZoomInterval: 0,
    weJobData: [],
    selectedActivityParents: [],
    selectedPhaseEndDate: 0,
    selectedPhaseStartDate: 0,
    selectedWinRate: 0,
    selectedWorkElement: [],
    requestedElement: [],
    parentIndexForInsertElement: {},
    activityDetailModalOpen: false,
    parentTeamTitle: '',
    fields: ['programs', 'gate', 'next_gate'],
    reportingColumnData: undefined,
    total_data: [24, 45, 101, 117, 12, 101, 117, 12],
  },
  getters: {
    loaderModalShow: state => state.loaderModalShow
  },
  mutations: {
    UPDATE_TEAM_REPORT_DATA(state) {
      state.teamReportingData = []
    },
    UPDATE_DATA(state) {
      state.teamControlData = []
    },
    SET_ZOOM_INTERVAL(state, payload) {
      state.selectedZoomInterval = payload
    },
    REPORTING_COLUMN_UPDATE(state, columns) {
      state.reportingColumnData = columns
    },
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
    HIDE_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = false
    },
    OPEN_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = true
    },
    WORK_ELEMENT_CHECK(state, checkedActivity) {
      state.selectedWorkElement = checkedActivity
    },
    SELECT_WORK_ELEMENT_TO_UPDATE(state, selectedWE) {
      state.selectedWE = selectedWE
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
      state.teamDemandData = payload.portData.demand
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
      state.teamReportingData = JSON.parse(JSON.stringify(payload.portData.reporting))
      state.tempReportingData = state.portfolioReportingData
      state.teamControlData = payload.portData.control
    },
    UPDATE_SELECTED_FROM_DATE(state, payload) {
      state.selectedFromDate = payload.from !== null || payload.from !== undefined ? moment(payload.from) : moment(`${new Date().getFullYear()}-01-01`)
    },
    UPDATE_SELECTED_TO_DATE(state, payload) {
      state.selectedToDate = payload.to !== null || payload.to !== undefined ? moment(payload.to) : moment(`${new Date().getFullYear()}-12-31`)
    },
  },
  actions: {
    get_from_selected_nav_id(ctx, payload) {
      let baseUrl = ''
      if (payload.data.startMonth !== undefined && payload.data.endMonth !== undefined) {
        baseUrl = `http://213.165.95.153:8000/api/team/data?id=${payload.data.id}&type=${payload.data.type}&start=${payload.data.startMonth}&end=${payload.data.endMonth}`
        axios.get(baseUrl).then(response => {
          const resData = { navData: payload.data.nav, portData: response.data }
          this.commit('teamState/SAVE_SELECTED_NAV_DATA', resData)
        }).catch(err => {
          console.log('error getting team data ---->', err)
          Vue.$toast.error('Failed to load portfolio data.')
        })
      } else {
        baseUrl = `http://213.165.95.153:8000/api/team/data?id=${payload.data.id}&type=${payload.data.type}&start=${moment(ctx.state.selectedFromDate).format("MM/YYYY")}&end=${moment(ctx.state.selectedToDate).format("MM/YYYY")}`
        axios.get(baseUrl).then(response => {
          const resData = { navData: payload.data, portData: response.data }
          this.commit('teamState/SAVE_SELECTED_NAV_DATA', resData)
        }).catch(err => {
          console.log('error getting team data ---->', err)
          Vue.$toast.error('Failed to load portfolio data.')
        })
      }
    }
  }
}
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
