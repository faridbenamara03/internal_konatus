import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    loaderModalShow: false,
    teamReportingData: {
      id: 'consumer-robots-portfolio',
      title: 'Consumer Robots',
      type: 'portfolio',
      children: [
        {
          id: 'quadruped-robot-program',
          title: 'Quadruped robot',
          parent: 'consumer-robots-portfolio',
          type: 'program',
          children: [
            {
              id: 'new-format-project',
              title: 'New Format',
              parent: 'quadruped-robot-program',
              type: 'project',
              progress: 0,
              start_date: '2023.1.20',
              end_date: '2023.3.12',
            },
            {
              id: 'enhanced-motricity-project',
              title: 'Enhanced motricity',
              parent: 'quadruped-robot-program',
              type: 'project',
            },
            {
              id: 'enhanced-autonomy-project',
              title: 'Enhanced autonomy',
              parent: 'quadruped-robot-program',
              type: 'project',
              progress: 0,
              start_date: '2023.1.20',
              end_date: '2023.3.12',
            },
            {
              id: 'dual-sourcing-for-quadruped-project',
              title: 'Dual sourcing for Quadruped',
              parent: 'quadruped-robot-program',
              type: 'project',
              progress: 0,
              start_date: '2023.1.20',
              end_date: '2023.3.12',
            },
          ]
        },
        {
          id: 'micro-robot-observation-nbc-program',
          title: 'Micro robot observation NBC',
          parent: 'consumer-robots-portfolio',
          type: 'program',
          progress: 0,
          start_date: '2023.1.20',
          end_date: '2023.3.12',
        },
        {
          id: 'handling-robot-program',
          title: 'Handling robot',
          parent: 'consumer-robots-portfolio',
          type: 'program',
          progress: 0,
          start_date: '2023.1.20',
          end_date: '2023.3.12',
        },
        {
          id: 'power-&-programming-station-program',
          title: 'Power & programming station',
          parent: 'consumer-robots-portfolio',
          type: 'program',
        },
      ]
    },
  },
  getters: {
    loaderModalShow: state => state.loaderModalShow
  },
  mutations: {
    // TEAM_PHASE_SELECT_ALL(state, team) {
    //   let allselected = true
    //   team.phases.forEach(element => {
    //     element.forEach(phase => {
    //       allselected = Boolean(phase.isSelected) && allselected
    //     })
    //   })
    //   const phases = []
    //   team.phases.forEach(element => {
    //     const arr = []
    //     element.forEach(phase => {
    //       const b = phase
    //       b.isSelected = !allselected
    //       arr.push(b)
    //     })
    //     phases.push(arr)
    //   })
    //   const teamsState = []
    //   state.teamsState.forEach(t => {
    //     const mapteam = t
    //     if (mapteam.id === team.id) {
    //       mapteam.phases = phases
    //     }
    //     teamsState.push(mapteam)
    //   })
    //   state.teamsState = teamsState
    // },
    SUBMIT_TEAM_REQUEST_QUOTE(state, data) {
      state.teamsState = data
      // .todo axios request
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
    TOGGLE_IMPORT_LOADER_MODAL_V(state) {
      state.loaderModalShow = !state.loaderModalShow
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
      // state.teamControlData.series = tmp
      // const addedNavChildren = state.navMenuItems[2].children.map(t => {
      //   if (t.title === data.team) {
      //     t.children.push({
      //       title: data.name,
      //       type: 'user',
      //     })
      //   }
      //   return t
      // })
      // state.navMenuItems[2] = addedNavChildren
      Vue.$toast.success('Resource added successfully')
    },
    // HANDLE_UPDATE(state) {
    //   const data = [
    //     // {
    //     //   id: 1,
    //     //   name: 'team a_updated',
    //     //   activities: null,
    //     //   estimate: null,
    //     //   demand: null,
    //     //   deadline: null,
    //     //   color: '#D68232',
    //     //   phases: [
    //     //     [
    //     //       {
    //     //         phaseV: 1,
    //     //         name: 'Install software',
    //     //         priority: 'Highest',
    //     //         gate: 1,
    //     //         activityId: '1.28.17.1.55',
    //     //         title: 'Escavate foundations',
    //     //         description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
    //     //         effort: {
    //     //           load: 53,
    //     //           duration: 26,
    //     //           fte: 80
    //     //         },
    //     //         dependency: [
    //     //           'Epic 1',
    //     //           'Epic 2',
    //     //           'Epic 3',
    //     //         ]
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 2,
    //     //         name: 'Develop control software',
    //     //         description: 'Develop control software Description',
    //     //         priority: 'Highest',
    //     //         gate: 2,
    //     //         title: 'Find uranium',
    //     //         activityId: '1.28.17.1.1320',
    //     //         effort: {
    //     //           load: 153,
    //     //           duration: 226,
    //     //           fte: 380
    //     //         },
    //     //         dependency: [
    //     //           'Epic r',
    //     //           'Epic d',
    //     //           'Epic a',
    //     //         ]
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 3,
    //     //         name: 'Develop control software...',
    //     //         description: 'Develop control software Description',
    //     //         priority: 'Highest',
    //     //         gate: 3,
    //     //         activityId: '1.28.17.1.1261',
    //     //       },
    //     //       {
    //     //         phaseV: 3,
    //     //         name: 'Develop control software...',
    //     //         description: 'Develop control software Description',
    //     //         priority: 'Highest',
    //     //         gate: 3,
    //     //         activityId: '1.28.17.1.127',
    //     //       },
    //     //       {
    //     //         phaseV: 3,
    //     //         name: 'Develop control software...',
    //     //         description: 'Develop control software Description',
    //     //         priority: 'Highest',
    //     //         gate: 3,
    //     //         activityId: '1.28.17.1.128',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 4,
    //     //         name: 'Develop control software',
    //     //         description: 'Develop control software Description',
    //     //         priority: 'Highest',
    //     //         gate: 2,
    //     //         activityId: '1.28.17.2.120',
    //     //       },
    //     //       {
    //     //         phaseV: 4,
    //     //         name: 'Develop control software',
    //     //         description: 'Develop control software Description',
    //     //         priority: 'Highest',
    //     //         gate: 2,
    //     //         activityId: '1.28.17.2.121',
    //     //       },
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 5,
    //     //         name: 'Develop control software...',
    //     //         description: 'Develop control software Description',
    //     //         priority: 'Highest',
    //     //         gate: 3,
    //     //         activityId: '1.28.17.3.126',
    //     //       }
    //     //     ],
    //     //   ],
    //     // },
    //     // {
    //     //   id: 2,
    //     //   name: 'team b',
    //     //   activities: null,
    //     //   estimate: null,
    //     //   demand: null,
    //     //   deadline: null,
    //     //   color: '#FFEA2C',
    //     //   phases: [
    //     //     [
    //     //       {
    //     //         phaseV: 1,
    //     //         name: 'Debugging',
    //     //         description: 'Debugging Description',
    //     //         priority: 'Highest',
    //     //         gate: 1,
    //     //         activityId: '1.28.17.1.58',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 2,
    //     //         name: 'Improve generator comp...',
    //     //         description: 'Improve generator comp Description',
    //     //         priority: 'Highest',
    //     //         gate: 2,
    //     //         activityId: '1.28.17.1.120',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 3,
    //     //         name: 'Improve generator comp...',
    //     //         priority: 'Highest',
    //     //         gate: 3,
    //     //         activityId: '1.28.17.1.126',
    //     //       }
    //     //     ],
    //     //   ],
    //     // },
    //     // {
    //     //   id: 3,
    //     //   name: 'team c',
    //     //   activities: null,
    //     //   estimate: null,
    //     //   demand: null,
    //     //   deadline: null,
    //     //   color: '#28C76F',
    //     //   phases: [
    //     //     [
    //     //       {
    //     //         phaseV: 1,
    //     //         name: 'Electricity market AI',
    //     //         priority: 'Highest',
    //     //         gate: 1,
    //     //         activityId: '1.28.17.1.59',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 2,
    //     //         name: 'Electricity market AI II',
    //     //         priority: 'Highest',
    //     //         gate: 2,
    //     //         activityId: '1.28.17.4.120',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 3,
    //     //         name: 'Electricity market AI III',
    //     //         priority: 'Highest',
    //     //         gate: 3,
    //     //         activityId: '1.28.17.4.126',
    //     //       }
    //     //     ],
    //     //   ],
    //     // },
    //     // {
    //     //   id: 4,
    //     //   name: 'team d',
    //     //   activities: null,
    //     //   estimate: null,
    //     //   demand: null,
    //     //   deadline: null,
    //     //   color: '#00CFE8',
    //     //   phases: [
    //     //     [
    //     //       {
    //     //         phaseV: 1,
    //     //         name: 'Activity Element 58',
    //     //         priority: 'Highest',
    //     //         gate: 1,
    //     //         activityId: '1.28.17.1.590',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 2,
    //     //         name: 'Activity Element 123',
    //     //         priority: 'Highest',
    //     //         gate: 2,
    //     //         activityId: '1.28.17.5.120',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 3,
    //     //         name: 'Activity Element 129',
    //     //         priority: 'Highest',
    //     //         gate: 3,
    //     //         activityId: '1.28.17.5.126',
    //     //       }
    //     //     ],
    //     //   ],
    //     // },
    //     // {
    //     //   id: 5,
    //     //   name: 'team e',
    //     //   activities: null,
    //     //   estimate: null,
    //     //   demand: null,
    //     //   deadline: null,
    //     //   color: '#6610F2',
    //     //   phases: [
    //     //     [
    //     //       {
    //     //         phaseV: 1,
    //     //         name: 'Activity Element 58',
    //     //         priority: 'Highest',
    //     //         gate: 1,
    //     //         activityId: '1.28.17.6.534',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 2,
    //     //         name: 'Activity Element 123',
    //     //         priority: 'Highest',
    //     //         gate: 2,
    //     //         activityId: '1.28.17.6.120',
    //     //       }
    //     //     ],
    //     //     [
    //     //       {
    //     //         phaseV: 3,
    //     //         name: 'Activity Element 129',
    //     //         priority: 'Highest',
    //     //         gate: 3,
    //     //         activityId: '1.28.17.7.126',
    //     //       }
    //     //     ],
    //     //   ],
    //     // },
    //   ]
    //   state.teamsState = data
    // },
    // HANDLE_ACTIVITY_DETAIL_SAVE(state, activity) {
    //   console.log(state)
    //   console.log(activity)
    //   // todo: post save request
    //   Vue.$toast.success("Saved Successfully!")
    // },
    // HANDLE_ACTIVITY_SPLIT(state, data) {
    //   const filteredTeamState = state.teamsState.map(t => {
    //     const temp1 = t.phases.map(t1 => {
    //       const temp2 = t1.map(t2 => {
    //         if (t2.activityId === data.phase.activityId) {
    //           return [data.newA1, data.newA2]
    //         }
    //         return t2
    //       })
    //       return temp2.flat()
    //     })
    //     const tmp3 = { ...t, phases: temp1 }
    //     return tmp3
    //   })
    //   state.teamsState = filteredTeamState
    //   Vue.$toast.success('Splitted Successfully!')
    // },
    // HANDLE_ACTIVITY_MERGE(state, data) {
    //   let pushed = false
    //   const filteredTeamState = state.teamsState.map(t => {
    //     const temp1 = t.phases.map(t1 => {
    //       const temp2 = []
    //       t1.forEach(t2 => {
    //         if (t2.activityId === data.toMergeId1 || t2.activityId === data.toMergeId2) {
    //           if (!pushed) temp2.push(data.merged)
    //           pushed = true
    //         } else {
    //           temp2.push(t2)
    //         }
    //       })
    //       return temp2
    //     })
    //     const tmp3 = { ...t, phases: temp1 }
    //     return tmp3
    //   })
    //   state.teamsState = filteredTeamState
    //   Vue.$toast.success('Merged Successfully!')
    // },
    // HANDLE_TEAM_DEMAND_UPDATE() {
    //   Vue.$toast.success('Updated Successfully!')
    // },
    // HANDLE_NAV_TEAM_SELECT(state, data) {
    //   state.demandTeamData = data
    // },
    // SELECT_ALL_PHASE_ACTS(state, n) {
    //   let isSelectedAll = true
    //   state.demandTeamData.phases.map(t => {
    //     if (t.phaseV === n) {
    //       t.tasks.map(t1 => {
    //         const b = { ...t1 }
    //         isSelectedAll = b.isSelected && isSelectedAll
    //         b.isSelected = true
    //         return null
    //       })
    //       return null
    //     }
    //     return null
    //   })
    //   const a = state.demandTeamData.phases.map(t => {
    //     if (t.phaseV === n) {
    //       const c = { ...t }
    //       const tasks = t.tasks.map(t1 => {
    //         const b = { ...t1 }
    //         isSelectedAll = b.isSelected && isSelectedAll
    //         b.isSelected = !isSelectedAll
    //         return b
    //       })
    //       c.tasks = tasks
    //       return c
    //     }
    //     return t
    //   })
    //   state.demandTeamData.phases = a
    // },
    // INSERT_NEW_TASK(state, data) {
    //   const { phaseV, task } = data
    //   const a = state.demandTeamData.phases.map(t => {
    //     if (t.phaseV === phaseV) {
    //       t.tasks.push(task)
    //       return t
    //     }
    //     return t
    //   })
    //   state.demandTeamData.phases = a
    //   Vue.$toast.success('Task inserted successfully.')
    // },
    // UPDATE_TEAM_REPORT_DATA(state) {
    //   setTimeout(() => {
    //     state.reportingData = {
    //       title: 'Boston dynamics',
    //       children: [
    //         {
    //           title: 'Quardruped Robot',
    //           children: [
    //             {
    //               child_title: 'New Format',
    //               id: '1.28.11',
    //             },
    //             {
    //               child_title: '1.28.12.1',
    //               progress: 0,
    //               start_date: `2022.10.${parseInt(Math.random() * 10 + 14, 10)}`,
    //               end_date: '2022.11.26',
    //               id: '1.28.12.1',
    //             },
    //             {
    //               child_title: '1.28.17.1',
    //               id: '1.28.17.1',
    //             }
    //           ]
    //         },
    //         {
    //           title: 'Program 1.31',
    //           children: [
    //             {
    //               child_title: '1.31.26.1',
    //               id: '1.31.26.1',
    //             },
    //           ]
    //         },
    //         {
    //           title: 'Program 1.32',
    //           progress: 0,
    //           start_date: `2022.10.${parseInt(Math.random() * 12 + 13, 10)}`,
    //           end_date: '2022.11.26',
    //           id: '1.32',
    //           children: [
    //             {
    //               child_title: '1.32.27.1',
    //               progress: 0,
    //               start_date: `2022.10.${parseInt(Math.random() * 12 + 13, 10)}`,
    //               end_date: '2022.11.26',
    //               id: '1.32.27.1',
    //             },
    //           ]
    //         }
    //       ]
    //     }
    //     state.loaderModalShow = !state.loaderModalShow
    //     state.teamReportUpdated = true
    //     Vue.$toast.success('Updated Successfully.')
    //   }, 600)
    // }
  },
  actions: {},
}
