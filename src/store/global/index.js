import Vue from "vue"
import moment from 'moment'
import axios from "axios"

const weekNumbersArr = betweenMonths => {
  const m1 = parseInt(betweenMonths[0].split('/')[0], 10)
  const y1 = parseInt(betweenMonths[0].split('/')[1], 10)
  const startDay = new Date(y1, m1 - 1, 1)
  const m2 = parseInt(betweenMonths[betweenMonths.length - 1].split('/')[0], 10)
  const y2 = parseInt(betweenMonths[betweenMonths.length - 1].split('/')[1], 10)
  const lastDay = new Date(y2, m2, 0)
  // const lastD = `${y2}-${m2}-`
  let step = 0
  const labelArr = []
  while (step <= y2 - y1) {
    let startD
    let lastD
    if (step === 0) {
      startD = startDay
    } else {
      startD = new Date(y1 + step, 0, 1)
    }
    if (step === (y2 - y1)) {
      lastD = lastDay
    } else {
      lastD = new Date(y1 + step, 12, 0)
    }

    const yearStartDate = new Date(y1 + step, 0, 1)
    const days1 = Math.floor((startD - yearStartDate) / (24 * 60 * 60 * 1000))
    const weekNumber1 = Math.ceil(days1 / 7) + 1
    const days2 = Math.floor((lastD - yearStartDate) / (24 * 60 * 60 * 1000))
    const weekNumber2 = Math.ceil(days2 / 7) + 1

    step += 1
    for (let k = weekNumber1; k <= weekNumber2; k += 1) {
      labelArr.push(k)
    }
  }
  return labelArr
}

export default {
  namespaced: true,
  state: {
    optimizeStatus: 'origin',
    optimizeStates: 'initial',
    globalData: [],
    globalData1: [],
    projectReportingData: {},
    demandTeamData: {},
    activityDetailModalOpen: false,
    projectDemandTableEditable: false,
    projectReportingTableEditable: false,
    projectDemandEditableData: [],
    projectReportingEditableData: [],
    selectedNavId: '',
    selectedNavObj: {},
    selectedWE: 0,
    natureDeadLines: [],
    natureDeadLineSelectOptions: [],
    optimizeState: 'origin',
    demandTableEditable: false,
    externalSystemData: [],
    externalSystemData2: [],
    externalWeSystemData: [],
    externalWeSystemData2: [],
    globalOrganizationData: [],
    globalOrganizationUnitData: [],
    globalOrganizationJobData: [],
    projectElementTeamData: [],
    projectElementPhaseData: [],
    portfolioDemandData: [],
    portfolioReportingData: [],
    tempReportingData: [],
    portfolioControlData: [],
    allWeData: [],
    allPhaseData: [],
    allJobTitleData: [],
    allPhaseTitleData: [],
    allTeamTitleData: [],
    dependsProjectList: [],
    allPortData: [],
    allProgData: [],
    allProjData: [],
    allOrgData: [],
    sponsors: [],
    weTeamData: [],
    selectedZoomInterval: 0,
    weJobData: [],
    selectedActivityParents: [],
    selectedActivityParents2: [],
    unitOrTeamsIndex: 'units',
    productlines: [],
    hproductportfolios: [],
    productmanagers: [],
    hprogramarchitects: [],
    architects: [],
    hprogramdirectors: [],
    projectmanagers: [],
    programdirectors: [],
    priorityOptions: [],
    selectedPhaseEndDate: 0,
    selectedPhaseStartDate: 0,
    endDateEstimated: '',
    weDependsList: [],
    selectedWinRate: 0,
    selectedFromDate: moment('2024-01-01'),
    selectedToDate: moment('2024-12-31'),
    chartXAxisData: [
      '',
      moment().subtract(2, 'months').format('MM/YYYY'),
      moment().subtract(1, 'months').format('MM/YYYY'),
      moment().format('MM/YYYY'),
      ''
    ],
    chartSeriesData: [
      [null, parseInt(Math.random() * 150 + 50, 10) * 100, parseInt(Math.random() * 150 + 50, 10) * 100, parseInt(Math.random() * 150 + 50, 10) * 100, null],
      [null, parseInt(Math.random() * 150 + 50, 10) * 100, parseInt(Math.random() * 150 + 50, 10) * 100, parseInt(Math.random() * 150 + 50, 10) * 100, null],
      [null, parseInt(Math.random() * 150 + 50, 10) * 100, parseInt(Math.random() * 150 + 50, 10) * 100, parseInt(Math.random() * 150 + 50, 10) * 100, null],
      [null, parseInt(Math.random() * 150 + 50, 10) * 100, parseInt(Math.random() * 150 + 50, 10) * 100, parseInt(Math.random() * 150 + 50, 10) * 100, null],
      [27350, 27350, 27350, 27350, 27350],
      [27900, 27900, 27900, 27900, 27900],
      [23900, 23900, 23900, 23900, 23900],
    ],
    selectedWorkElement: [],
    requestedElement: [],
    customChartXLabel: weekNumbersArr([`${moment().subtract(2, 'months').format('MM/YYYY')}`, `${moment().format('MM/YYYY')}`]),
    openCreateNewPortfolioDrawer: false,
    openCreateNewUnitDrawer: false,
    openEditPortfolioDrawer: false,
    openCreateNewProgramDrawer: false,
    openEditProgramDrawer: false,
    parentIndexForInsertElement: {},
    parentTeamTitle: ''
  },
  mutations: {
    TOGGLE_CREATE_NEW_UNIT_DRAWER(state) {
      const u2 = !state.openCreateNewUnitDrawer
      state.openCreateNewUnitDrawer = u2
    },
    Unit_Teams_UPDATE(state, index) {
      state.unitOrTeamsIndex = index
    },
    TOGGLE_CREATE_NEW_PORTFOLIO_DRAWER(state) {
      const u1 = !state.openCreateNewPortfolioDrawer
      state.openCreateNewPortfolioDrawer = u1
    },
    SELECT_PHASE_START_DATE(state, payload) {
      state.selectedPhaseStartDate = payload
    },
    SELECT_PHASE_END_DATE(state, payload) {
      state.selectedPhaseEndDate = payload
    },
    SELECT_WIN_RATE(state, payload) {
      state.selectedWinRate = payload
    },
    GET_OPTIMIZED_DATA(state, payload) {
      state.tempReportingData = state.portfolioReportingData
      state.portfolioReportingData = payload
      state.optimizedData = payload
      state.optimizeStates = 'preview'
    },
    UPDATE_SELECTED_FROM_DATE(state, payload) {
      state.selectedFromDate = payload.from !== null || payload.from !== undefined ? moment(payload.from) : moment(`${new Date().getFullYear()}-01-01`)
    },
    UPDATE_SELECTED_TO_DATE(state, payload) {
      state.selectedToDate = payload.to !== null || payload.to !== undefined ? moment(payload.to) : moment(`${new Date().getFullYear()}-12-31`)
    },
    UPDATE_OPTIMIZE_STATUES(state, value) {
      state.optimizeStatus = value
      if (value === 'origin') {
        state.portfolioReportingData = state.tempReportingData
      } else if (value === 'optimize') {
        state.portfolioReportingData = state.optimizedData
      }
    },
    UPDATE_OPTIMIZE_STATES(state, value) {
      state.optimizeStates = value
    },
    TOGGLE_CREATE_NEW_PROGRAM_DRAWER(state, payload) {
      const u1 = !state.openCreateNewProgramDrawer
      state.openCreateNewProgramDrawer = u1
      if (payload) {
        state.selectedProgramObject = payload.item
        state.selectedProgramType = payload.type
      } else {
        state.selectedProgramType = "program"
      }
    },
    TOGGLE_EDIT_PROGRAM_DRAWER(state, payload) {
      const u1 = !state.openEditProgramDrawer
      state.openEditProgramDrawer = u1
      if (payload) {
        state.selectedProgramObject = payload.item
        state.selectedProgramType = payload.type
      }
    },
    CREATE_NEW_UNIT(state, data) {
      const u1 = !state.openCreateNewUnitDrawer
      state.openCreateNewUnitDrawer = u1
      console.log(data)
    },
    CREATE_NEW_PORTFOLIO(state, data) {
      console.log(data)
      Vue.$toast.success('Portfolio created successfully.')
    },
    ADD_PORTFOLIO_BUDGET(state, data) {
      console.log(data)
      Vue.$toast.success('Budget successfully added to Portfolio.')
    },
    CREATE_NEW_PROJECT(state, data) {
      console.log(data)
      const u1 = !state.openCreateNewProgramDrawer
      state.openCreateNewProgramDrawer = u1
      Vue.$toast.success('Project created successfully.')
    },
    CREATE_NEW_SUBPROJECT(state, data) {
      console.log(data)
      const u1 = !state.openCreateNewProgramDrawer
      state.openCreateNewProgramDrawer = u1
      Vue.$toast.success('SubProject created successfully.')
    },
    UPDATE_PROJECT(state, data) {
      Vue.$toast.success('Project updated successfully.')
      console.log(data)
    },
    UPDATE_PROGRAM(state, data) {
      Vue.$toast.success('Program updated successfully.')
      console.log(data)
    },
    UPDATE_PORTFOLIO(state, data) {
      Vue.$toast.success('Portfolio updated successfully.')
      console.log(data)
    },
    WORK_ELEMENT_MANUAL_UPDATE(state, data) {
      Vue.$toast.success('Work Element Updated successfully.')
      console.log(data)
    },
    UPDATE_SUBPROJECT(state, data) {
      Vue.$toast.success('SubProject updated successfully.')
      console.log(data)
    },
    CREATE_NEW_PROGRAM(state, data) {
      console.log(data)
      const u1 = !state.openCreateNewProgramDrawer
      state.openCreateNewProgramDrawer = u1
      Vue.$toast.success('Program created successfully.')
    },
    LOAD_ALL_NATURE_DEADLINE(state, data) {
      state.natureDeadLines = data
      let index = 1
      const tempArray = []
      data.forEach(t => {
        const temp = {
          label: t,
          value: index
        }
        tempArray.push(temp)
        index += 1
      })
      state.natureDeadLineSelectOptions = tempArray
    },
    LOAD_ALL_OPTION_DATAS(state, data) {
      if (data === undefined) return
      state.sponsors = data.sponsor.filter((value, index, array) => array.indexOf(value) === index)
      state.productlines = data.productline.filter((value, index, array) => array.indexOf(value) === index)
      state.hproductportfolios = data.headproductportfolio.filter((value, index, array) => array.indexOf(value) === index)
      state.productmanagers = data.productmanager.filter((value, index, array) => array.indexOf(value) === index)
      state.hprogramarchitects = data.headprogramarchitect.filter((value, index, array) => array.indexOf(value) === index)
      state.hprogramdirectors = data.headprogramdirector.filter((value, index, array) => array.indexOf(value) === index)
      state.architects = data.architect.filter((value, index, array) => array.indexOf(value) === index)
      state.programdirectors = data.programdirector.filter((value, index, array) => array.indexOf(value) === index)
      state.projectmanagers = data.projectmanager.filter((value, index, array) => array.indexOf(value) === index)
      // state.priorityOptions = data.priorities
      data.priorities.forEach(t => {
        state.priorityOptions.push(t.prior_label)
      })
    },
    LOAD_ALL_WE_DATA(state, data) {
      state.allWeData = data
    },
    LOAD_ALL_WE_DEPENDS(state, data) {
      state.weDependsList = data
    },
    LOAD_ALL_DEPENDS_DATA(state, data) {
      state.dependsProjectList = data
    },
    LOAD_ALL_PHASE_DATA(state, data) {
      let phaseData = data
      phaseData = phaseData.sort((a, b) => a.id - b.id)
      state.allPhaseData = phaseData
      const pTitleData = []
      phaseData.forEach(t => {
        pTitleData.push(t.title)
      })
      state.allPhaseTitleData = pTitleData
    },
    HANDLE_GET_PARENTS_WE(state, data) {
      state.selectedActivityParents = data
    },
    HANDLE_GET_PARENTS_WE_2(state, data) {
      state.selectedActivityParents2 = data
    },
    LOAD_EXTERNAL_SYSTEMS(state, data) {
      if (data.message !== 'empty' && data.message !== 'fail') {
        state.externalSystemData = data
      }
    },
    LOAD_EXTERNAL_SYSTEMS2(state, data) {
      state.externalSystemData2 = data
    },
    LOAD_EXTERNAL_SYSTEMS_WE(state, data) {
      state.externalWeSystemData = data
    },
    LOAD_EXTERNAL_SYSTEMS2_WE(state, data) {
      state.externalWeSystemData2 = data
    },
    LOAD_ALL_PORTFOLIO_DATA(state, data) {
      state.allPortData = data
    },
    LOAD_ALL_PROGRAM_DATA(state, data) {
      state.allProgData = data
    },
    LOAD_ALL_PROJECT_DATA(state, data) {
      state.allProjData = data
    },
    LOAD_ALL_ORGANIZATION_DATA(state, data) {
      state.allOrgData = data
    },
    TOGGLE_EDIT_PORTFOLIO_DRAWER(state) {
      const u = state.openEditPortfolioDrawer
      state.openEditPortfolioDrawer = !u
    },
    EDIT_PORTFOLIO(state, data) {
      if (!!data.portfolio && !!data.portfolioBudget) {
        const u = state.openEditPortfolioDrawer
        state.openEditPortfolioDrawer = !u
        const toUpdatedChild = state.globalOperationData.children?.find(t => t.id === state.selectedNavId)
        const updatedChild = { ...toUpdatedChild }
        updatedChild.title = data.portfolio
        updatedChild.budget = data.portfolioBudget
        Object.assign(toUpdatedChild, updatedChild)
      } else {
        Vue.$toast.warning('Please input correctly.')
      }
    },
    HIDE_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = false
    },
    OPEN_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = true
    },
    UPDATE_PROJECT_REPORTING_DATA() {
      Vue.$toast.success('Updated Successfully.')
    },
    SET_ZOOM_INTERVAL(state, payload) {
      state.selectedZoomInterval = payload
    },
    HANDLE_ACTIVITY_DETAIL_SAVE(state, activity) {
      console.log(state)
      console.log(activity)
      // todo: post save request
      Vue.$toast.success("Saved Successfully!")
    },
    HANDLE_ACTIVITY_SPLIT() {
      Vue.$toast.success('Splitted Successfully!')
    },
    HANDLE_ACTIVITY_MERGE() {
      Vue.$toast.success('Merged Successfully!')
    },
    DELETE_PORTFOLIO() {
      Vue.$toast.success('Portfolio Deleted Successfully!')
    },
    DELETE_WORK_ELEMENT() {
      Vue.$toast.success('WorkElement Deleted Successfully!')
    },
    DELETE_PROGRAM() {
      Vue.$toast.success('Program Deleted Successfully!')
    },
    DELETE_PROJECT() {
      Vue.$toast.success('Project Deleted Successfully!')
    },
    DELETE_SUBPROJECT() {
      Vue.$toast.success('SubProject Deleted Successfully!')
    },
    DELETE_FAILED() {
      Vue.$toast.warning(`You can't delete this element which has children`)
    },
    HANDLE_TEAM_DEMAND_UPDATE() {
      Vue.$toast.success('Updated Successfully!')
    },
    UPDATE_DEMAND_TABLE_EDITABLE(state) {
      state.demandTableEditable = !state.demandTableEditable
    },
    UPDATE_TEAM_REPORT_DATA(state) {
      setTimeout(() => {
        state.reportingData = {
          title: 'Boston dynamics',
          children: [
            {
              title: 'Quardruped Robot',
              children: [
                {
                  child_title: 'Full Model Design',
                  id: '1.28.11',
                },
                {
                  child_title: '1.28.12.1',
                  progress: 0,
                  start_date: `2022.10.${parseInt(Math.random() * 10 + 14, 10)}`,
                  end_date: '2022.11.26',
                  id: '1.28.12.1',
                },
                {
                  child_title: '1.28.17.1',
                  id: '1.28.17.1',
                }
              ]
            },
            {
              title: 'Program 1.31',
              children: [
                {
                  child_title: '1.31.26.1',
                  id: '1.31.26.1',
                },
              ]
            },
            {
              title: 'Program 1.32',
              progress: 0,
              start_date: `2022.10.${parseInt(Math.random() * 12 + 13, 10)}`,
              end_date: '2022.11.26',
              id: '1.32',
              children: [
                {
                  child_title: '1.32.27.1',
                  progress: 0,
                  start_date: `2022.10.${parseInt(Math.random() * 12 + 13, 10)}`,
                  end_date: '2022.11.26',
                  id: '1.32.27.1',
                },
              ]
            }
          ]
        }
        state.loaderModalShow = !state.loaderModalShow
        state.teamReportUpdated = true
        Vue.$toast.success('Updated Successfully.')
        this.commit('teamState/TOGGLE_IMPORT_LOADER_MODAL_V', false)
      }, 600)
    },
    TEAM_PHASE_SELECT_ALL(state, team) {
      console.log(state, team)
    },
    SUBMIT_MANUAL_UPDATE(state, payloads) {
      console.log("submit_manual_update:", payloads, "state:", state)
    },
    SUBMIT_LINK_PROJECT(state) {
      console.log(state)
      Vue.$toast.success('Link Projects successfully.')
    },
    SUBMIT_TEAM_REQUEST_QUOTE(state) {
      const reArr = [...state.selectedWorkElement]
      state.requestedElement = reArr
      // .todo axios request
      // dispatch('sumit_team_request_quote')
    },
    SAVE_UPDATED_TABLE(state, data) {
      console.log(data)
    },
    SAVE_SELECTED_NAV_DATA(state, payload) {
      // console.log("PNV:", payload.navData, "PPD:", payload.portData)
      state.selectedNavId = payload.navData.id
      state.selectedNavObj = payload.navData
      state.portfolioDemandData = payload.portData.demand
      if (payload.navData.type === 'program' || payload.navData.type === 'project' || payload.navData.type === 'subproject') {
        state.weTeamData = ['auto selection']
        const pTeamData = payload.portData.demand !== null && payload.portData.demand !== undefined ? payload.portData.demand.teams : []
        if (pTeamData && pTeamData !== undefined) {
          pTeamData.map(pt => {
            if (pt.phases && pt.phases.length > 0) {
              pt.phases.map(pA => {
                const pActivity = pA.activities
                if (pActivity && pActivity.length > 0) {
                  pActivity.map(item => {
                    state.weTeamData.push(item.team_name)
                    return null
                  })
                }
                return null
              })
            }
            return null
          })
          state.weTeamData = state.weTeamData.filter((value, index, array) => array.indexOf(value) === index)
          pTeamData.map(pt => {
            if (pt.phases && pt.phases.length > 0) {
              pt.phases.map(pA => {
                const pActivity = pA.activities
                if (pActivity && pActivity.length > 0) {
                  pActivity.map(item => {
                    state.weJobData.push(item.job_name)
                    return null
                  })
                }
                return null
              })
            }
            return null
          })
          state.weJobData = state.weJobData.filter((value, index, array) => array.indexOf(value) === index)
        }
      }
      state.portfolioReportingData = JSON.parse(JSON.stringify(payload.portData.reporting))
      // state.portfolioReportingData = payload.portData.reporting
      state.tempReportingData = state.portfolioReportingData
      state.portfolioControlData = payload.portData.control
    },
    SAVE_SELECTED_NAV_ID(state, navObj) {
      state.selectedNavId = navObj.id
      state.selectedNavObj = navObj
    },
    GET_END_DATE_ESTIMATED(state, payload) {
      state.endDateEstimated = payload
    },
    ON_RANGE_CHANGE(state, betweenMonths) {
      state.customChartXLabel = weekNumbersArr(betweenMonths)
      if (state.selectedNavObj.children) {
        const ndt = state.selectedNavObj.children.map(t => {
          let budget = 0
          let engaged = 0
          let quote = 0
          let demand = 0
          let realEstimated = 0
          let authorised = 0
          let spent = 0
          const children1 = []
          if (t.children) {
            t.children.map(t1 => {
              const t2 = { ...t1 }
              t2.budget = parseInt(t1.budget ? t1.budget : 0, 10) + parseInt(Math.random() * (t1.budget ? t1.budget : 0), 10)
              t2.engaged = parseInt(t1.engaged ? t1.engaged : 0, 10) + parseInt(Math.random() * (t1.engaged ? t1.engaged : 0), 10)
              t2.quote = parseInt(t1.quote ? t1.quote : 0, 10) + parseInt(Math.random() * (t1.quote ? t1.quote : 0), 10)
              t2.demand = parseInt(t1.demand ? t1.demand : 0, 10) + parseInt(Math.random() * (t1.demand ? t1.demand : 0), 10)
              t2.realEstimated = parseInt(t1.realEstimated ? t1.realEstimated : 0, 10) + parseInt(Math.random() * (t1.realEstimated ? t1.realEstimated : 0), 10)
              t2.authorised = parseInt(t1.authorised ? t1.authorised : 0, 10) + parseInt(Math.random() * (t1.authorised ? t1.authorised : 0), 10)
              t2.spent = parseInt(t1.spent ? t1.spent : 0, 10) + parseInt(Math.random() * (t1.spent ? t1.spent : 0), 10)
              children1.push(t2)
              return null
            })
          } else {
            budget = parseInt(t.budget, 10) + parseInt(Math.random() * t.budget, 10)
            engaged = parseInt(t.engaged, 10) + parseInt(Math.random() * t.engaged, 10)
            quote = parseInt(t.quote, 10) + parseInt(Math.random() * t.quote, 10)
            demand = parseInt(t.demand, 10) + parseInt(Math.random() * t.demand, 10)
            realEstimated = parseInt(t.realEstimated, 10) + parseInt(Math.random() * t.realEstimated, 10)
            authorised = parseInt(t.authorised, 10) + parseInt(Math.random() * t.authorised, 10)
            spent = parseInt(t.spent, 10) + parseInt(Math.random() * t.spent, 10)
          }
          const nd = { ...t }
          nd.budget = budget
          nd.engaged = engaged
          nd.quote = quote
          nd.demand = demand
          nd.realEstimated = realEstimated
          nd.authorised = authorised
          nd.spent = spent
          if (children1.length > 0) nd.children = children1
          return nd
        })
        const modifiedSelectedNavObj = { ...state.selectedNavObj }
        modifiedSelectedNavObj.children = ndt
        state.selectedNavObj = modifiedSelectedNavObj
      }
      state.chartXAxisData = ['', ...betweenMonths, '']
      const i0 = []
      const i1 = []
      const i2 = []
      const i3 = []
      const i4 = []
      const i5 = []
      const i6 = []
      betweenMonths.forEach(() => {
        i0.push(parseInt(Math.random() * 15000 + 5000, 10))
        i1.push(parseInt(Math.random() * 15000 + 5000, 10))
        i2.push(parseInt(Math.random() * 15000 + 5000, 10))
        i3.push(parseInt(Math.random() * 15000 + 5000, 10))
        i4.push(25500)
        i5.push(20500)
        i6.push(16000)
      })
      state.chartSeriesData = [
        [null, ...i0, null],
        [null, ...i1, null],
        [null, ...i2, null],
        [null, ...i3, null],
        [25500, ...i4, 25500],
        [20500, ...i5, 20500],
        [16000, ...i6, 16000]
      ]
    },
    OPERATION_NEW_SAVE(state, data) {
      console.log(state, data)
      state.globalOperationData.children.push(data)
    },
    LOAD_ORG_UNIT_DATA(state, orgData) {
      state.globalOrganizationUnitData.push(orgData)
      state.globalOrganizationUnitData[0].children.forEach(unit => {
        unit.children.forEach(team => {
          state.allTeamTitleData.push({
            id: team.id,
            title: team.title
          })
        })
      })
    },
    LOAD_ORG_JOB_DATA(state, orgData) {
      state.globalOrganizationJobData.push(orgData)
      state.globalOrganizationJobData[0].children.forEach(job => {
        state.allJobTitleData.push(job)
      })
    },
    LOAD_ORG_DATA(state, orgData) {
      if (state.globalOrganizationData.length === 0) {
        state.globalOrganizationData.push(orgData)
      } else {
        const newObject = { ...state.globalOrganizationData }
        newObject[0] = orgData
        state.globalOrganizationData = newObject
      }
    },
    LOAD_NAV_DATA(state, globalAllData) {
      state.globalOrganizationData = globalAllData.navData
      state.globalOrganizationUnitData = globalAllData.orgData
      state.globalOrganizationUnitData1 = globalAllData.orgData1
      state.globalData.push(globalAllData.navData)
      state.globalData.push(globalAllData.orgData)
      state.globalData1.push(globalAllData.navData)
      state.globalData1.push(globalAllData.orgData1)
    },
    UPDATE_PROJECT_DEMAND_TABLE_EDITABLE(state, data) {
      // state.projectDemandEditableData = data
      console.log(data)
      state.projectDemandTableEditable = !state.projectDemandTableEditable
    },
    UPDATE_PROJECT_REPORTING_TABLE_EDITABLE(state, data) {
      state.projectReportingEditableData = data
      state.projectReportingTableEditable = !state.projectReportingTableEditable
    },
    IMPORT_WBS_2(state) {
      setTimeout(() => {
        state.projectElementTeamData = []
        state.projectElementPhaseData = []
      }, 1000)
    },
    SELECT_WORK_ELEMENT_TO_UPDATE(state, selectedWE) {
      state.selectedWE = selectedWE
    },
    WORK_ELEMENT_CHECK(state, checkedActivity) {
      state.selectedWorkElement = checkedActivity
    },
    SET_INDEX_FOR_INSERT_NEW_ELEMENT(state, data) {
      // state.parentIndexForInsertElement = { index0: data.index0, index: data.index, state: data.state }
      state.parentTeamTitle = data
    },
    INSERT_NEW_TASK(state, data) {
      console.log(data)
      Vue.$toast.success('Task inserted successfully.')
    },
  },
  actions: {
    get_from_selected_nav_id(ctx, payload) {
      let baseUrl = ''
      if (payload.data.startMonth !== undefined && payload.data.endMonth !== undefined) {
        baseUrl = `https://api.konatus.site/v1/api/portfolio/data?id=${payload.data.id}&type=${payload.data.type}&start=${payload.data.startMonth}&end=${payload.data.endMonth}`
        axios.get(baseUrl).then(response => {
          const resData = { navData: payload.data.nav, portData: response.data }
          this.commit('globalState/SAVE_SELECTED_NAV_DATA', resData)
        }).catch(err => {
          console.log('error getting portfolio data ---->', err)
          Vue.$toast.error('Failed to load portfolio data.')
        })
      } else {
        baseUrl = `https://api.konatus.site/v1/api/portfolio/data?id=${payload.data.id}&type=${payload.data.type}&start=${moment(ctx.state.selectedFromDate).format("MM/YYYY")}&end=${moment(ctx.state.selectedToDate).format("MM/YYYY")}`
        axios.get(baseUrl).then(response => {
          const resData = { navData: payload.data, portData: response.data }
          this.commit('globalState/SAVE_SELECTED_NAV_DATA', resData)
        }).catch(err => {
          console.log('error getting portfolio data ---->', err)
          Vue.$toast.error('Failed to load portfolio data.')
        })
      }
    },
    load_org_data() {
      axios.get('https://api.konatus.site/v1/api/menu/organizations').then(response => {
          const globalOrgData = response.data
          this.commit('globalState/LOAD_ORG_DATA', globalOrgData)
        }).catch(err => {
          console.log('error getting orgnaizations data ---->', err)
          Vue.$toast.error('Failed to load orgnaizations data.')
        })
    },
    load_org_unit_data() {
      axios.get('https://api.konatus.site/v1/api/menu/organization_units').then(response => {
          const globalOrgUnitData = response.data
          this.commit('globalState/LOAD_ORG_UNIT_DATA', globalOrgUnitData)
        }).catch(err => {
          console.log('error getting orgnaizations units data ---->', err)
          Vue.$toast.error('Failed to load orgnaizations data.')
        })
    },
    load_org_team_data() {
      axios.get('https://api.konatus.site/v1/api/menu/organization_jobs').then(response => {
      // axios.get('http://localhost/konatus-me/public/api/menu/organization_teams').then(response => {
          const globalOrgJobData = response.data
          this.commit('globalState/LOAD_ORG_JOB_DATA', globalOrgJobData)
        }).catch(err => {
          console.log('error getting orgnaizations units data ---->', err)
          Vue.$toast.error('Failed to load orgnaizations data.')
        })
    },
    save_updated_table(commit, payload) {
      axios.post('https://api.konatus.site/v1/api/save_table', payload).then(response => {
        // axios.post('http://localhost/konatus-me/public/api/unit/create', payload).then(response => {
          const newData = response.data
          // this.commit('globalState/SAVE_UPDATED_TABLE', payload.data)
          this.commit('globalState/SAVE_UPDATED_TABLE', newData)
        }).catch(err => {
          console.log('error saving updated table --->', err)
          Vue.$toast.error('Failed to save updated table.')
        })
    },
    create_new_unit(commit, payload) {
      axios.post('https://api.konatus.site/v1/api/unit/create', payload).then(response => {
      // axios.post('http://localhost/konatus-me/public/api/unit/create', payload).then(response => {
        const newData = response.data
        this.commit('globalState/CREATE_NEW_UNIT', newData)
      }).catch(err => {
        console.log('error creating new unit --->', err)
        Vue.$toast.error('Failed to create new unit.')
      })
    },
    create_new_portfolio(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/portfolio/create', payload).then(response => {
          const newData = response.data
          this.commit('globalState/CREATE_NEW_PORTFOLIO', newData)
          resolve()
        }).catch(err => {
          console.log('error creating new portfolio --->', err)
          Vue.$toast.error('Failed to create new portfolio.')
          reject(err)
        })
      })
    },
    create_new_program(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/program/create', payload.data)
        // axios.post('http://localhost/konatus-me/public/api/program/create', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/CREATE_NEW_PROGRAM', newData)
            resolve()
          })
          .catch(err => {
            console.log('error creating new program ---->', err)
            Vue.$toast.error('Failed to create new program.')
            reject(err)
          })
      })
    },
    create_new_project(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/project/create', payload.data)
        // axios.post('http://localhost/konatus-me/public/api/project/create', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/CREATE_NEW_PROJECT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error creating new project ---->', err)
            Vue.$toast.error('Failed to create new project.')
            reject(err)
          })
      })
    },
    create_new_subproject(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/subproject/create', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/CREATE_NEW_PROJECT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error creating new subproject ---->', err)
            Vue.$toast.error('Failed to create new project.')
            reject(err)
          })
      })
    },
    get_all_depends_projects() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/depends/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_DEPENDS_DATA', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all depends data ---->', err)
            Vue.$toast.error('Failed to get all depends data.')
            reject(err)
          })
      })
    },
    get_all_we_depends() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/wedepends/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_WE_DEPENDS', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all we depends data ---->', err)
            Vue.$toast.error('Failed to get all we depends data.')
            reject(err)
          })
      })
    },
    get_all_workelements() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/we/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_WE_DATA', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all we data ---->', err)
            Vue.$toast.error('Failed to get all we data.')
            reject(err)
          })
      })
    },
    get_all_phases() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/phase/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_PHASE_DATA', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all phase data ---->', err)
            Vue.$toast.error('Failed to get all phase data.')
            reject(err)
          })
      })
    },
    get_all_option_datas() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/options/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_OPTION_DATAS', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all option data ---->', err)
            Vue.$toast.error('Failed to get all option data.')
            reject(err)
          })
      })
    },
    get_all_nature_deadlines() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/nature/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_NATURE_DEADLINE', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all nature deadlines data ---->', err)
            Vue.$toast.error('Failed to get all nature deadlines data.')
            reject(err)
          })
      })
    },
    get_external_systems(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.konatus.site/v1/api/external/get?id=${payload.id}`)
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_EXTERNAL_SYSTEMS', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting external systems ---->', err)
            Vue.$toast.error('Failed to get external systems.')
            reject(err)
          })
      })
    },
    get_external_systems2(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.konatus.site/v1/api/external/get?id=${payload.id}`)
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_EXTERNAL_SYSTEMS2', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting external systems2 ---->', err)
            Vue.$toast.error('Failed to get external systems2.')
            reject(err)
          })
      })
    },
    get_external_systems_we(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.konatus.site/v1/api/external/get_we?id=${payload.id}`)
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_EXTERNAL_SYSTEMS_WE', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting external systems ---->', err)
            Vue.$toast.error('Failed to get external systems.')
            reject(err)
          })
      })
    },
    get_external_systems2_we(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`https://api.konatus.site/v1/api/external/get_we?id=${payload.id}`)
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_EXTERNAL_SYSTEMS2_WE', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting external systems2 ---->', err)
            Vue.$toast.error('Failed to get external systems2.')
            reject(err)
          })
      })
    },
    get_all_portfolios() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/portfolio/all')
        // axios.get('http://localhost/konatus-me/public/api/portfolio/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_PORTFOLIO_DATA', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all portfolio data ---->', err)
            Vue.$toast.error('Failed to get all portfolio data.')
            reject(err)
          })
      })
    },
    get_all_programs() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/program/all')
        // axios.get('http://localhost/konatus-me/public/api/program/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_PROGRAM_DATA', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all program data ---->', err)
            Vue.$toast.error('Failed to get all program data.')
            reject(err)
          })
      })
    },
    get_all_projects() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/project/all')
        // axios.get('http://localhost/konatus-me/public/api/project/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_PROJECT_DATA', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all project data ---->', err)
            Vue.$toast.error('Failed to get all project data.')
            reject(err)
          })
      })
    },
    get_all_organizations() {
      return new Promise((resolve, reject) => {
        axios.get('https://api.konatus.site/v1/api/organization/all')
        // axios.get('http://localhost/konatus-me/public/api/organization/all')
          .then(response => {
            const newData = response.data
            this.commit('globalState/LOAD_ALL_ORGANIZATION_DATA', newData)
            resolve()
          })
          .catch(err => {
            console.log('error getting all organization data ---->', err)
            Vue.$toast.error('Failed to get all organization data.')
            reject(err)
          })
      })
    },
    submit_manual_update(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/work_element/update', payload)
          .then(response => {
            const newData = response.data
            this.commit('globalState/WORK_ELEMENT_MANUAL_UPDATE', newData)
            resolve()
          })
          .catch(err => {
            console.log('error updating workelement---->', err)
            Vue.$toast.error('Failed to update workelement.')
            reject(err)
          })
      })
    },
    update_portfolio(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/portfolio/update', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/UPDATE_PORTFOLIO', newData)
            resolve()
          })
          .catch(err => {
            console.log('error updating portfolio ---->', err)
            Vue.$toast.error('Failed to update portfolio.')
            reject(err)
          })
      })
    },
    update_subproject(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/subproject/update', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/UPDATE_SUBPROJECT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error updating subproject ---->', err)
            Vue.$toast.error('Failed to update subproject.')
            reject(err)
          })
      })
    },
    update_project(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/project/update', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/UPDATE_PROJECT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error updating project ---->', err)
            Vue.$toast.error('Failed to update project.')
            reject(err)
          })
      })
    },
    update_program(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/program/update', payload.data)
        // axios.post('http://localhost/konatus-me/public/api/program/update', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/UPDATE_PROGRAM', newData)
            resolve()
          })
          .catch(err => {
            console.log('error updating program ---->', err)
            Vue.$toast.error('Failed to update progam.')
            reject(err)
          })
      })
    },
    submit_link_project(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/project/link', payload)
          .then(response => {
            const newData = response.data
            this.commit('globalState/SUBMIT_LINK_PROJECT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error linking project ---->', err)
            Vue.$toast.error('Failed to link project.')
            reject(err)
          })
      })
    },
    insert_new_task(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/phase/create', payload)
        // axios.post('http://localhost/konatus-me/public/api/phase/create', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/INSERT_NEW_TASK', newData)
            resolve()
          })
          .catch(err => {
            console.log('error creating new task ---->', err)
            Vue.$toast.error('Failed to create new task.')
            reject(err)
          })
      })
    },
    handle_activity_split(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/phase/split', payload)
        // axios.post('http://localhost/konatus-me/public/api/phase/create', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/HANDLE_ACTIVITY_SPLIT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error split work element---->', err)
            Vue.$toast.error('Failed to split work element.')
            reject(err)
          })
      })
    },
    handle_activity_merge(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/phase/merge', payload)
        // axios.post('http://localhost/konatus-me/public/api/phase/create', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/HANDLE_ACTIVITY_MERGE', newData)
            resolve()
          })
          .catch(err => {
            console.log('error merge work element---->', err)
            Vue.$toast.error('Failed to merge work element.')
            reject(err)
          })
      })
    },
    get_parents_we(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/phase/parent', payload)
        // axios.post('http://localhost/konatus-me/public/api/phase/create', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/HANDLE_GET_PARENTS_WE', newData)
            resolve()
          })
          .catch(err => {
            console.log('error get parents for work element---->', err)
            Vue.$toast.error('Failed to get parents for work element.')
            reject(err)
          })
      })
    },
    get_parents_we_2(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/phase/parent', payload)
        // axios.post('http://localhost/konatus-me/public/api/phase/create', payload.data)
          .then(response => {
            const newData = response.data
            this.commit('globalState/HANDLE_GET_PARENTS_WE_2', newData)
            resolve()
          })
          .catch(err => {
            console.log('error get parents for work element---->', err)
            Vue.$toast.error('Failed to get parents for work element.')
            reject(err)
          })
      })
    },
    get_project_reporting_editable() {
      axios.get('https://api.konatus.site/v1/api/project/reporting/editable').then(response => {
      // axios.post('http://localhost/konatus-me/public/api/project/reporting/editable').then(response => {
        const newData = response.data
        this.commit('globalState/UPDATE_PROJECT_REPORTING_TABLE_EDITABLE', newData)
      }).catch(err => {
        console.log('error loading project reporting editable --->', err)
        Vue.$toast.error('Failed to load project reporting editable data.')
      })
    },
    delete_portfolio(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/portfolio/delete', payload)
          .then(response => {
            const newData = response.data
            this.commit('globalState/DELETE_PORTFOLIO', newData)
            resolve()
          })
          .catch(err => {
            console.log('error deleting portfolio ---->', err)
            Vue.$toast.error('Failed to delete portfolio.')
            reject(err)
          })
      })
    },
    delete_work_element(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/work_element/delete', payload)
          .then(response => {
            const newData = response.data
            this.commit('globalState/DELETE_WORK_ELEMENT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error deleting work element ---->', err)
            Vue.$toast.error('Failed to delete work element.')
            reject(err)
          })
      })
    },
    delete_program(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/program/delete', payload)
          .then(response => {
            const newData = response.data
            this.commit('globalState/DELETE_PROGRAM', newData)
            resolve()
          })
          .catch(err => {
            console.log('error deleting program ---->', err)
            Vue.$toast.error('Failed to delete program.')
            reject(err)
          })
      })
    },
    delete_project(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/project/delete', payload)
          .then(response => {
            const newData = response.data
            this.commit('globalState/DELETE_PROJECT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error deleting project ---->', err)
            Vue.$toast.error('Failed to delete project.')
            reject(err)
          })
      })
    },
    delete_subproject(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/subproject/delete', payload)
          .then(response => {
            const newData = response.data
            this.commit('globalState/DELETE_SUBPROJECT', newData)
            resolve()
          })
          .catch(err => {
            console.log('error deleting subproject ---->', err)
            Vue.$toast.error('Failed to delete subproject.')
            reject(err)
          })
      })
    },
    add_portfolio_budget(commit, payload) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/portfolio/add_budget', payload)
          .then(response => {
            const newData = response.data
            this.commit('globalState/ADD_PORTFOLIO_BUDGET', newData)
            resolve()
          })
          .catch(err => {
            console.log('error adding budget to portfolio ---->', err)
            Vue.$toast.error('Failed to add budget to portfolio.')
            reject(err)
          })
      })
    },
    get_optimized_data(data, params) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/optimize', params.data)
          .then(response => {
            setTimeout(() => {
              const optimizeData = response.data
              this.commit('globalState/GET_OPTIMIZED_DATA', optimizeData)
              resolve()
            }, 10)
          })
          .catch(err => {
            console.log('error getting optimized data ---->', err)
            Vue.$toast.error('Failed to get optimized data.')
            reject(err)
          })
      })
    },
    get_end_date_estimated(data, params) {
      return new Promise((resolve, reject) => {
        axios.post('https://api.konatus.site/v1/api/phase/getend', params)
          .then(response => {
            setTimeout(() => {
              const endDate = response.data
              this.commit('globalState/GET_END_DATE_ESTIMATED', endDate)
              resolve()
            }, 10)
          })
          .catch(err => {
            console.log('error getting end date estimated---->', err)
            Vue.$toast.error('Failed to get end date estimated.')
            reject(err)
          })
      })
    }
  }
}
