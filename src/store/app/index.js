import { $themeBreakpoints } from '@themeConfig'

export default {
  namespaced: true,
  state: {
    windowWidth: 0,
    shallShowOverlay: false,
    loaderModalShow: false,
    teamsstate: [
      {
        id: 1,
        name: 'team a',
        activities: null,
        estimate: null,
        demand: null,
        deadline: null,
        color: '#D68232',
        phases: [
          [
            {
              phaseV: 1,
              name: 'Install software',
              priority: 'Highest',
              gate: 1,
              isSelected: true,
              activityId: '1.28.17.1.55',
            }
          ],
          [
            {
              phaseV: 2,
              name: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: '1.28.17.1.120',
            }
          ],
          [
            {
              phaseV: 3,
              name: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              isSelected: true,
              activityId: '1.28.17.1.126',
            },
            {
              phaseV: 3,
              name: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: '1.28.17.1.126',
            },
            {
              phaseV: 3,
              name: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: '1.28.17.1.126',
            }
          ],
          [
            {
              phaseV: 4,
              name: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: '1.28.17.1.120',
            },
            {
              phaseV: 4,
              name: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: '1.28.17.1.120',
            },
          ],
          [
            {
              phaseV: 5,
              name: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: '1.28.17.1.126',
            }
          ],
        ],
      },
      {
        id: 2,
        name: 'team b',
        activities: null,
        estimate: null,
        demand: null,
        deadline: null,
        color: '#FFEA2C',
        phases: [
          [
            {
              phaseV: 1,
              name: 'Debugging',
              priority: 'Highest',
              gate: 1,
              activityId: '1.28.17.1.55',
            }
          ],
          [
            {
              phaseV: 2,
              name: 'Improve generator comp...',
              priority: 'Highest',
              gate: 2,
              activityId: '1.28.17.1.120',
            }
          ],
          [
            {
              phaseV: 3,
              name: 'Improve generator comp...',
              priority: 'Highest',
              gate: 3,
              activityId: '1.28.17.1.126',
            }
          ],
        ],
      },
      {
        id: 3,
        name: 'team c',
        activities: null,
        estimate: null,
        demand: null,
        deadline: null,
        color: '#28C76F',
        phases: [
          [
            {
              phaseV: 1,
              name: 'Electricity market AI',
              priority: 'Highest',
              gate: 1,
              activityId: '1.28.17.1.55',
            }
          ],
          [
            {
              phaseV: 2,
              name: 'Electricity market AI II',
              priority: 'Highest',
              gate: 2,
              activityId: '1.28.17.1.120',
            }
          ],
          [
            {
              phaseV: 3,
              name: 'Electricity market AI III',
              priority: 'Highest',
              gate: 3,
              activityId: '1.28.17.1.126',
            }
          ],
        ],
      },
      {
        id: 4,
        name: 'team d',
        activities: null,
        estimate: null,
        demand: null,
        deadline: null,
        color: '#00CFE8',
        phases: [
          [
            {
              phaseV: 1,
              name: 'Activity Element 58',
              priority: 'Highest',
              gate: 1,
              activityId: '1.28.17.1.55',
            }
          ],
          [
            {
              phaseV: 2,
              name: 'Activity Element 123',
              priority: 'Highest',
              gate: 2,
              activityId: '1.28.17.1.120',
            }
          ],
          [
            {
              phaseV: 3,
              name: 'Activity Element 129',
              priority: 'Highest',
              gate: 3,
              activityId: '1.28.17.1.126',
            }
          ],
        ],
      },
      {
        id: 5,
        name: 'team e',
        activities: null,
        estimate: null,
        demand: null,
        deadline: null,
        color: '#6610F2',
        phases: [
          [
            {
              phaseV: 1,
              name: 'Activity Element 58',
              priority: 'Highest',
              gate: 1,
              activityId: '1.28.17.1.55',
            }
          ],
          [
            {
              phaseV: 2,
              name: 'Activity Element 123',
              priority: 'Highest',
              gate: 2,
              activityId: '1.28.17.1.120',
            }
          ],
          [
            {
              phaseV: 3,
              name: 'Activity Element 129',
              priority: 'Highest',
              gate: 3,
              activityId: '1.28.17.1.126',
            }
          ],
        ],
      },
    ]
  },
  getters: {
    currentBreakPoint: state => {
      const { windowWidth } = state
      if (windowWidth >= $themeBreakpoints.xl) return 'xl'
      if (windowWidth >= $themeBreakpoints.lg) return 'lg'
      if (windowWidth >= $themeBreakpoints.md) return 'md'
      if (windowWidth >= $themeBreakpoints.sm) return 'sm'
      return 'xs'
    },
    loaderModalShow: state => state.loaderModalShow
  },
  mutations: {
    UPDATE_WINDOW_WIDTH(state, val) {
      state.windowWidth = val
    },
    TOGGLE_OVERLAY(state, val) {
      state.shallShowOverlay = val !== undefined ? val : !state.shallShowOverlay
    },
    MUTATION_TEAM_PHASE_SELECT_ALL(state, team) {
      let allselected = true
      team.phases.forEach(element => {
        element.forEach(phase => {
          allselected = Boolean(phase.isSelected) && allselected
        })
      })
      const phases = []
      team.phases.forEach(element => {
        const arr = []
        element.forEach(phase => {
          const b = phase
          b.isSelected = !allselected
          arr.push(b)
        })
        phases.push(arr)
      })
      const teamsstate = []
      state.teamsstate.forEach(t => {
        const mapteam = t
        if (mapteam.id === team.id) {
          mapteam.phases = phases
        }
        teamsstate.push(mapteam)
      })
      state.teamsstate = teamsstate
    },
    SUBMIT_TEAM_REQUEST_QUOTE(state, data) {
      state.teamsstate = data
      // .todo axios request
    },
    IMPORT_WBS(state, data) {
      const regex = /,(?!\s*?[{["'\w])/g
      const data1 = data.replace(/(['"])?([a-zA-Z0-9]+)(['"])?:/g, '"$2":').replace(regex, '').replace(/'/g, '"')
      const parsedData = JSON.parse(data1)
      state.teamsstate = parsedData
      state.loaderModalShow = !state.loaderModalShow
      // commit('TOGGLE_IMPORT_LOADER_MODAL_V')
      // .todo axios request
    },
    TOGGLE_IMPORT_LOADER_MODAL_V(state) {
      state.loaderModalShow = !state.loaderModalShow
      // .todo axios request
    },
  },
  actions: {},
}
