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
              phases: [
                {
                  id: '2.29.18.112',
                  progress: '10%'
                },
                {
                  id: '2.29.18.114',
                  progress: '14%'
                },
                {
                  id: '2.29.18.116',
                  progress: '10%'
                },
              ]
            },
            {
              id: 'enhanced-motricity-project',
              title: 'Enhanced motricity',
              parent: 'quadruped-robot-program',
              type: 'project',
              phases: [
                {
                  id: '2.29.18.118',
                  progress: '50%'
                },
              ]
            },
            {
              id: 'enhanced-autonomy-project',
              title: 'Enhanced autonomy',
              parent: 'quadruped-robot-program',
              type: 'project',
              progress: 0,
              start_date: '2023.1.20',
              end_date: '2023.3.12',
              phases: []
            },
            {
              id: 'dual-sourcing-for-quadruped-project',
              title: 'Dual sourcing for Quadruped',
              parent: 'quadruped-robot-program',
              type: 'project',
              progress: 0,
              start_date: '2023.1.20',
              end_date: '2023.3.12',
              phases: []
            },
          ]
        },
      ]
    },
    teamDemandData: {
      id: 'team-a-team',
      title: 'Team A',
      parent: 'paris-unit',
      type: 'team',
      color: '#D68232',
      route: {
        name: 'team-view',
        params: {
          unitId: 'paris',
          teamId: 'team-a',
        },
      },
      phases: [
        {
          id: 'phase-1',
          projectId: 'new-format-project',
          assigned: 'team-a-team',
          time: 12, // for team demand
          data: {
            progress: 0,
            start_date: '2022.11.04',
            end_date: '2022.12.21',
          },
          elements: [
            {
              activityId: `install-software-activity`,
              phase: 'phase-1',
              title: 'Install software',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              priority: 'Highest',
              gate: 1,
              assigned: 'team-a-team',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              }
            },
            {
              activityId: 'develop-control-software-activity',
              title: 'Develop control software',
              phase: 'phase-1',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              priority: 'Highest',
              gate: 2,
              assigned: 'team-a-team',
              quoted: true,
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
            },
            {
              activityId: `debugging-activity`,
              title: 'Debugging',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              phase: 'phase-1',
              priority: 'Highest',
              gate: 1,
              assigned: 'team-a-team',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
            },
          ]
        },
        {
          id: 'phase-2',
          projectId: 'new-format-project',
          assigned: 'team-a-team',
          time: 14, // for team demand
          data: {
            progress: 0,
            start_date: '2022.11.04',
            end_date: '2022.12.21',
          },
          elements: [
            {
              activityId: `electricity-market-ai-activity`,
              title: 'Electricity market AI',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              priority: 'Highest',
              phase: 'phase-2',
              quoted: true,
              gate: 1,
              assigned: 'team-a-team',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
            },
            {
              activityId: `improve-generator-component-activity`,
              title: 'Improve generator component',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              priority: 'Highest',
              phase: 'phase-2',
              gate: 2,
              assigned: 'team-b-team',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
            },
          ]
        },
      ],
      children: [
        {
          id: 'travis-roach-user',
          parent: 'team-a-team',
          title: 'Travis Roach',
          type: 'user',
        },
        {
          id: 'ciaran-bradford-user',
          parent: 'team-a-team',
          title: 'Ciaran Bradford',
          type: 'user',
        },
        {
          id: 'george-logan-user',
          parent: 'team-a-team',
          title: 'George Logan',
          type: 'user',
        },
        {
          id: 'angelica-russo-user',
          parent: 'team-a-team',
          title: 'Angelica Russo',
          type: 'user',
        },
      ]
    }
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
  actions: {},
}
