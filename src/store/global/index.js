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

const teamsState = [
  {
    title: 'Team A',
    phases: [
      {
        title: 'Phase 1',
        activities: [
          {
            title: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Phase 2',
        activities: [
          {
            title: 'Debugging',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Phase 3',
        activities: [
          {
            title: 'Electricity market AI',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Electricity market AI-1',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Electricity market AI-2',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
        ]
      },
      {
        title: 'Phase 4',
        activities: [
          {
            title: 'Activity Element 58',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Activity Element 58-1',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Phase 5',
        activities: []
      },
    ]
  },
  {
    title: 'Team B',
    phases: [
      {
        title: 'Phase 1',
        activities: [
          {
            title: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Phase 2',
        activities: [
          {
            title: 'Improve generator component',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Phase 3',
        activities: [
          {
            title: 'Electricity market AI II',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Phase 4',
        activities: [
          {
            title: 'Activity Element 123',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Phase 5',
        activities: [
          {
            title: 'Activity Element F1',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
    ]
  }
]

const phaseState = [
  {
    teams: [
      {
        title: 'Team B',
        activities: [
          {
            title: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Team C',
        activities: [
          {
            title: 'Debugging',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Team D',
        activities: [
          {
            title: 'Electricity market AI',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Electricity market AI-1',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Electricity market AI-2',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
        ]
      },
      {
        title: 'Team E',
        activities: [
          {
            title: 'Activity Element 58',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Activity Element 58-1',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Team F',
        activities: []
      },
    ]
  },
  {
    teams: [
      {
        title: 'Team B',
        activities: [
          {
            title: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Team C',
        activities: [
          {
            title: 'Improve generator component',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Team D',
        activities: [
          {
            title: 'Electricity market AI II',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Team E',
        activities: [
          {
            title: 'Activity Element 123',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
      {
        title: 'Team F',
        activities: [
          {
            title: 'Activity Element F1',
            priority: 'Highest',
            gate: 2,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentions 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        ]
      },
    ]
  }
]

export default {
  namespaced: true,
  state: {
    teamsState,
    phaseState,
    globalData: [],
    globalData1: [],
    projectReportingData: {},
    demandTeamData: {},
    activityDetailModalOpen: false,
    selectedNavId: '',
    selectedNavObj: {},
    optimiseState: 'origin',
    globalOrganizationData: [],
    globalOrganizationUnitData: [],
    globalOrganizationTeamData: [],
    projectElementTeamData: [],
    projectElementPhaseData: [],
    portfolioDemandData: [],
    portfolioReportingData: [],
    portfolioControlData: [],
    allPortData: [],
    allProgData: [],
    allOrgData: [],
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
    openCreateNewProjectDrawer: false,
    parentIndexForInsertElement: {},
    parentTeamTitle: ''
  },
  mutations: {
    TOGGLE_CREATE_NEW_DRAWER(state) {
      const u1 = !state.openCreateNewPortfolioDrawer
      const u2 = !state.openCreateNewUnitDrawer
      const u3 = !state.openCreateNewProgramDrawer
      const u4 = !state.openCreateNewProjectDrawer
      state.openCreateNewPortfolioDrawer = u1
      state.openCreateNewUnitDrawer = u2
      state.openCreateNewProgramDrawer = u3
      state.openCreateNewProjectDrawer = u4
    },
    CREATE_NEW_UNIT(state, data) {
      // if (!data.unitName) {
      //   Vue.$toast.warning('Please input correctly.')
      // } else {
      //   const dt = { ...state.globalData[1] }
      //   const cdn = dt.children
      //   cdn.push(
      //     {
      //       id: `${data.unitName.toLowerCase()}-unit`,
      //       title: data.unitName,
      //       type: 'unit',
      //       route: {
      //         name: 'unit-view',
      //         params: {
      //           unitId: data.unitName.toLowerCase(),
      //         },
      //       },
      //       children: [
      //         {
      //           id: 'team-ln-team',
      //           title: 'Team LN',
      //           parent: 'lyon-unit',
      //           type: 'team',
      //           route: {
      //             name: 'team-view',
      //             params: {
      //               unitId: 'lyon',
      //               teamId: 'team-ln',
      //             },
      //           },
      //           children: [
      //             {
      //               id: 'lone-wolf-user',
      //               title: 'Lone Wolf',
      //               parent: 'team-ln-team',
      //               type: 'user',
      //             },
      //             {
      //               id: 'telora-varga-user',
      //               title: 'Telora Varga',
      //               parent: 'team-ln-team',
      //               type: 'user',
      //             },
      //             {
      //               id: 'poke-green-user',
      //               title: 'Poke Green',
      //               parent: 'team-ln-team',
      //               type: 'user',
      //             },
      //             {
      //               id: 'assen-oliveira-user',
      //               title: 'Assen Oliveira',
      //               parent: 'team-ln-team',
      //               type: 'user',
      //             },
      //           ]
      //         }
      //       ]
      //     }
      //   )
      //   dt.children = cdn
      //   state.globalOrganizationUnitData = dt
      //   const u1 = !state.openCreateNewPortfolioDrawer
      //   const u2 = !state.openCreateNewUnitDrawer
      //   state.openCreateNewPortfolioDrawer = u1
      //   state.openCreateNewUnitDrawer = u2
      // }
      console.log("NewUnitData:", data)
      const u1 = !state.openCreateNewUnitDrawer
      state.openCreateNewUnitDrawer = u1
    },
    CREATE_NEW_PORTFOLIO(state, data) {
      if (!!data.parentOrganization && !!data.portfolioName && !!data.portfolioBudget) {
        const dt = { ...state.globalData[0] }
        const chld = dt.children
        chld.push({
          id: `${data.portfolioName.toLowerCase()}-portfolio`,
          title: data.portfolioName,
          budget: data.portfolioBudget,
          type: 'portfolio',
          children: [
            {
              id: `${data.portfolioName.toLowerCase()}-program`,
              title: 'sample program',
              type: 'program'
            }
          ]
        })
        dt.children = chld
        state.globalOperationData = dt
        const u1 = !state.openCreateNewPortfolioDrawer
        const u2 = !state.openCreateNewUnitDrawer
        state.openCreateNewPortfolioDrawer = u1
        state.openCreateNewUnitDrawer = u2
      } else {
        Vue.$toast.warning('Please input correctly.')
      }
    },
    CREATE_NEW_PROJECT(state, data) {
      // if (!!data.parentOrganization && !!data.projectName && !!data.projectBudget) {
      //   const dt = { ...state.globalData[0] }
      //   const chld = dt.children
      //   chld.push({
      //     id: `${data.projectName.toLowerCase()}-project`,
      //     title: data.projectName,
      //     budget: data.projectName,
      //     type: 'project',
      //     children: [
      //       {
      //         id: `${data.projectName.toLowerCase()}-phase`,
      //         title: 'sample phase',
      //         type: 'phase'
      //       }
      //     ]
      //   })
      //   dt.children = chld
      //   state.globalOperationData = dt
      //   const u1 = !state.openCreateNewPortfolioDrawer
      //   const u2 = !state.openCreateNewUnitDrawer
      //   state.openCreateNewPortfolioDrawer = u1
      //   state.openCreateNewUnitDrawer = u2
      // } else {
      //   Vue.$toast.warning('Please input correctly.')
      // }
      console.log("NewProjectData:", data)
      const u1 = !state.openCreateNewProjectDrawer
      state.openCreateNewProjectDrawer = u1
    },
    CREATE_NEW_PROGRAM(state, data) {
      console.log("NewProgramData:", data)
      const u1 = !state.openCreateNewProgramDrawer
      state.openCreateNewProgramDrawer = u1
    },
    LOAD_ALL_PORTFOLIO_DATA(state, data) {
      state.allPortData = data
    },
    LOAD_ALL_PROGRAM_DATA(state, data) {
      state.allProgData = data
    },
    LOAD_ALL_ORGANIZATION_DATA(state, data) {
      state.allOrgData = data
    },
    TOGGLE_EDIT_PORTFOLIO_DRAWER(state) {
      const u = state.openEditPortfolioDrawer
      if (!u) {
        if (state.selectedNavObj.type === 'portfolio') {
          state.openEditPortfolioDrawer = !u
        }
      } else {
        state.openEditPortfolioDrawer = !u
      }
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
    HANDLE_ACTIVITY_DETAIL_SAVE(state, activity) {
      console.log(state)
      console.log(activity)
      // todo: post save request
      Vue.$toast.success("Saved Successfully!")
    },
    HANDLE_ACTIVITY_SPLIT() {
      // let index = -1
      // state.teamsState.forEach((t, i) => {
      //   if (t.title === data.teamTitle) index = i
      // })
      // const sate = { ...state.teamsState[index] }
      // const newPhases = []
      // sate.phases.forEach(t => {
      //   if (t.activityId === data.phase.activityId) {
      //     newPhases.push(data.newA1, data.newA2)
      //   } else {
      //     newPhases.push(t)
      //   }
      // })
      // state.teamsState[index].phases = newPhases
      Vue.$toast.success('Splitted Successfully!')
    },
    HANDLE_ACTIVITY_MERGE() {
      // let index = -1
      // state.teamsState.forEach((t, i) => {
      //   if (t.title === data.teamTitle) index = i
      // })
      // const sate = { ...state.teamsState[0] }
      // const newPhases = [data.merged]
      // console.log(sate, data)
      // sate.phases.forEach(t => {
      //   if (t.activityId !== data.toMergeId1 && t.activityId !== data.toMergeId2) {
      //     newPhases.push(t)
      //   }
      // })
      // state.teamsState[0].phases = newPhases
      Vue.$toast.success('Merged Successfully!')
    },
    HANDLE_TEAM_DEMAND_UPDATE() {
      Vue.$toast.success('Updated Successfully!')
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
    SUBMIT_TEAM_REQUEST_QUOTE(state) {
      const reArr = [...state.selectedWorkElement]
      state.requestedElement = reArr
      // .todo axios request
      // dispatch('sumit_team_request_quote')
    },
    SAVE_SELECTED_NAV_DATA(state, payload) {
      state.selectedNavId = payload.navData.id
      state.selectedNavObj = payload.navData
      state.portfolioDemandData = JSON.parse(payload.portData.demand)
      state.portfolioReportingData = JSON.parse(payload.portData.reporting)
      state.portfolioControlData = JSON.parse(payload.portData.control)
    },
    SAVE_SELECTED_NAV_ID(state, navObj) {
      state.selectedNavId = navObj.id
      state.selectedNavObj = navObj
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
      // {
      //   id: '1.28.11.1.15',
      //   title: 'Precise movement & control',
      //   type: 'project',

      //   priority: 'Lowest',
      //   budget: '2500',
      //   deadline: '12/31/2021',
      //   engaged: '450',
      //   quote: '550',
      //   next_gate: '06/02/2022',
      //   demand: '1500',
      //   realEstimated: '1200',
      //   authorised: '800',
      //   value: '100',
      //   spent: '100',
      // },
      // const portfolioD = {
      //   id: Vue.faker().random.number(50),
      //   title: 'Consumer Robots',
      //   type: 'portfolio',

      //   priority: 'Highest',
      //   budget: '10000',
      //   deadline: '06/01/2021',
      //   engaged: '1800',
      //   quote: '2200',
      //   demand: '9200',
      //   realEstimated: '10100',
      //   authorised: '4500',
      //   spent: '1600',

      //   route: {
      //     name: 'portfolio-view',
      //     params: {
      //       portfolioId: 'consumer-robots',
      //     },
      //   },
      // }
      state.globalOperationData.children.push(data)
    },
    LOAD_ORG_UNIT_DATA(state, orgData) {
      state.globalOrganizationUnitData = orgData
    },
    LOAD_ORG_TEAM_DATA(state, orgData) {
      state.globalOrganizationTeamData = orgData
    },
    LOAD_ORG_DATA(state, orgData) {
      state.globalOrganizationData = orgData
    },
    LOAD_NAV_DATA(state, globalAllData) {
      state.globalOrganizationData = globalAllData.navData
      state.globalOrganizationUnitData = globalAllData.orgData
      state.globalOrganizationUnitData1 = globalAllData.orgData1

      state.globalData.push(globalAllData.navData)
      state.globalData.push(globalAllData.orgData)
      state.globalData1.push(globalAllData.navData)
      state.globalData1.push(globalAllData.orgData1)
      // state.globalData = [JSON.parse(globalAllData.navData), JSON.parse(globalAllData.orgData)]
      // state.globalData1 = [JSON.parse(globalAllData.navData), JSON.parse(globalAllData.orgData1)]
      // state.projectReportingData = globalOperationData.children[0].children[0];
    },
    IMPORT_WBS_2(state) {
      setTimeout(() => {
        state.projectElementTeamData = teamsState
        state.projectElementPhaseData = phaseState
      }, 1000)
    },
    WOEK_ELEMENT_CHECK(state, checkedActivity) {
      state.selectedWorkElement = checkedActivity
    },
    // ADD_PROJECT(state) {
    //   Vue.$toast.success("New program added")
    //   state.globalData = [globalOperationDataInsertedProgram, state.globalData[1]]
    //   state.projectElementTeamData = []
    //   state.projectElementPhaseData = []
    //   // this.$router.push({ path: urlArr.join('/').concat(`/${url}`) })
    // },
    SET_INDEX_FOR_INSERT_NEW_ELEMENT(state, data) {
      state.parentIndexForInsertElement = { index0: data.index0, index: data.index, state: data.state }
      state.parentTeamTitle = data.team
    },
    INSERT_NEW_TASK(state, data) {
      const {
        id, priority, gate, name
      } = data
      if (state.parentIndexForInsertElement.state === "team") {
        const t = state.teamsState[state.parentIndexForInsertElement.index0]?.phases[state.parentIndexForInsertElement.index]?.activities
        t.push(
          {
            title: name,
            priority,
            gate,
            activityId: id,
            description: 'New inserted element description.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        )
      } else {
        const t = state.phaseState[state.parentIndexForInsertElement.index0]?.teams[state.parentIndexForInsertElement.index]?.activities
        t.push(
          {
            title: name,
            priority,
            gate,
            activityId: id,
            description: 'New inserted element description.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          }
        )
      }
      Vue.$toast.success('Task inserted successfully.')
    },
  },
  actions: {
    get_from_selected_nav_id(ctx, payload) {
      // axios.get(`http://localhost/konatus-me/public/api/portfolio/get_data?id=${payload.data.id}&type=${payload.data.type}`).then(response => {
      let baseUrl = ''
      if (payload.data.startMonth !== undefined && payload.data.endMonth !== undefined) {
        baseUrl = `https://api.konatus.site/v1/api/portfolio/get_data?id=${payload.data.id}&type=${payload.data.type}&start=${payload.data.startMonth}&end=${payload.data.endMonth}`
        axios.get(baseUrl).then(response => {
          const resData = { navData: payload.data.nav, portData: response.data }
          this.commit('globalState/SAVE_SELECTED_NAV_DATA', resData)
        }).catch(err => {
          console.log('error getting portfolio data ---->', err)
          Vue.$toast.error('Failed to load portfolio data.')
        })
      } else {
        baseUrl = `https://api.konatus.site/v1/api/portfolio/get_data?id=${payload.data.id}&type=${payload.data.type}`
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
      axios.get('https://api.konatus.site/v1/api/menu/get_organizations').then(response => {
      // axios.get('http://localhost/konatus-me/public/api/menu/get_organizations').then(response => {
          const globalOrgData = response.data
          this.commit('globalState/LOAD_ORG_DATA', globalOrgData)
        }).catch(err => {
          console.log('error getting orgnaizations data ---->', err)
          Vue.$toast.error('Failed to load orgnaizations data.')
        })
    },
    load_org_unit_data() {
      axios.get('https://api.konatus.site/v1/api/menu/get_organization_units').then(response => {
      // axios.get('http://localhost/konatus-me/public/api/menu/get_organization_units').then(response => {
          const globalOrgUnitData = response.data
          this.commit('globalState/LOAD_ORG_UNIT_DATA', globalOrgUnitData)
        }).catch(err => {
          console.log('error getting orgnaizations units data ---->', err)
          Vue.$toast.error('Failed to load orgnaizations data.')
        })
    },
    load_org_team_data() {
      axios.get('https://api.konatus.site/v1/api/menu/get_organization_teams').then(response => {
      // axios.get('http://localhost/konatus-me/public/api/menu/get_organization_teams').then(response => {
          const globalOrgTeamData = response.data
          this.commit('globalState/LOAD_ORG_TEAM_DATA', globalOrgTeamData)
        }).catch(err => {
          console.log('error getting orgnaizations units data ---->', err)
          Vue.$toast.error('Failed to load orgnaizations data.')
        })
    },
    create_new_unit(commit, payload) {
      axios.post('https://api.konatus.site/v1/api/unit/create', payload).then(response => {
        const newData = response.data
        this.commit('globalState/CREATE_NEW_UNIT', newData)
      }).catch(err => {
        console.log('error creating new unit --->', err)
        Vue.$toast.error('Failed to create new unit.')
      })
    },
    create_new_portfolio(commit, payload) {
      axios.post('https://api.konatus.site/v1/api/portfolio/create', payload).then(response => {
        const newData = response.data
        this.commit('globalState/CREATE_NEW_PORTFOLIO', newData)
      }).catch(err => {
        console.log('error creating new portfolio --->', err)
        Vue.$toast.error('Failed to create new portfolio.')
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
    }
  }
}
