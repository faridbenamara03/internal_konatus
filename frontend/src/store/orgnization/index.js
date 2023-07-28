import Vue from "vue"
import dateFormat from "dateformat"
import axios from "axios"
// import moment from "moment"
function randomTen(val1, val2) {
  return parseInt(Math.random() * val1, 10) + val2
}

export default {
  elementData: [
  ],
  namespaced: true,
  state: {
    reportingColumnData: undefined,
    fields: ['programs', 'gate', 'next_gate'],
    total_data: [24, 45, 101, 117, 12, 101, 117, 12],
    unitOrTeamsIndex: 'unit',
    unitDemandData: [],
    unitReportingData: [],
    unitControlData: []
  },
  mutations: {
    UPDATE_DATA(state) {
      Vue.$toast.success('Updated Successfully.')
      const v11 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v12 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v13 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v14 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v15 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v21 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v22 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v23 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v24 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v31 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v32 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v33 = [Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50), Vue.faker().random.number(50)]
      const v1 = v11.map((num, idx) => num + v12[idx] + v13[idx] + v14[idx] + v15[idx])
      const v2 = v21.map((num, idx) => num + v22[idx] + v23[idx] + v24[idx])
      const v3 = v31.map((num, idx) => num + v32[idx] + v33[idx])
      const g11 = Vue.faker().random.number(10)
      const g12 = Vue.faker().random.number(10)
      const g13 = Vue.faker().random.number(10)
      const g14 = Vue.faker().random.number(10)
      const g15 = Vue.faker().random.number(10)
      const g21 = Vue.faker().random.number(10)
      const g22 = Vue.faker().random.number(10)
      const g23 = Vue.faker().random.number(10)
      const g24 = Vue.faker().random.number(10)
      const g31 = Vue.faker().random.number(10)
      const g32 = Vue.faker().random.number(10)
      const g33 = Vue.faker().random.number(10)
      const g1 = g11 + g12 + g13 + g14 + g15
      const g2 = g21 + g22 + g23 + g24
      const g3 = g31 + g32 + g33
      const vt = v1.map((t, i) => t + v2[i] + v3[i])
      const data = [
        {
          title: Vue.faker().lorem.words(2),
          projects: [
            {
              title: Vue.faker().lorem.words(2),
              gate: g1,
              next_gate: dateFormat(Vue.faker().date.future(), 'mm/dd/yyyy'),
              data: v1,
              phases: [
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g11,
                  next_gate: dateFormat(Vue.faker().date.future(), 'mm/dd/yyyy'),
                  data: v11
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g12,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v12
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g13,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v13
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g14,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v14
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g15,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v15
                },
              ]
            },
            {
              title: Vue.faker().lorem.words(2),
              gate: g2,
              next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
              data: v2,
              phases: [
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g21,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v21
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g22,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v22
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g23,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v23
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g24,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v24
                },
              ]
            },
            {
              title: Vue.faker().lorem.words(2),
              gate: g3,
              next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
              data: v3,
              phases: [
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g31,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v31
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g32,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v32
                },
                {
                  title: Vue.faker().lorem.words(2),
                  gate: g33,
                  next_gate: dateFormat(Vue.faker().date.past(), 'mm/dd/yyyy'),
                  data: v33
                },
              ]
            },
          ]
        }
      ]
      state.data = data
      state.total_data = vt
    },
    UPDATE_TEAM_REPORT_DATA(state) {
      const elementDataUpdated = [
        [
          [
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)]
          ],
          [
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)]
          ],
          [
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)]
          ],
          [
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)]
          ],
          [
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)]
          ],
        ],
        [
          [
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)]
          ],
          [
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)],
            [randomTen(200, 50), randomTen(200, 300)]
          ],
        ]
      ]

      const projectDataUpdated = [
        [
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
        ],
        [
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
        ],
        [
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
        ],
        [
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
          [randomTen(200, 100), randomTen(200, 100), randomTen(200, 100)],
        ],
      ]

      const projectPaddingDataUpdated = [
        [
          Math.min(elementDataUpdated[0][0][0][0], elementDataUpdated[0][1][0][0], elementDataUpdated[0][2][0][0], elementDataUpdated[0][3][0][0], elementDataUpdated[0][4][0][0]),
          Math.min(elementDataUpdated[0][0][1][0], elementDataUpdated[0][1][1][0], elementDataUpdated[0][2][1][0], elementDataUpdated[0][3][1][0], elementDataUpdated[0][4][1][0]),
          Math.min(elementDataUpdated[0][0][2][0], elementDataUpdated[0][1][2][0], elementDataUpdated[0][2][2][0], elementDataUpdated[0][3][2][0], elementDataUpdated[0][4][2][0]),
        ],
        [
          Math.min(elementDataUpdated[1][0][0][0], elementDataUpdated[1][1][0][0]),
          Math.min(elementDataUpdated[1][0][1][0], elementDataUpdated[1][1][1][0]),
          Math.min(elementDataUpdated[1][0][2][0], elementDataUpdated[1][1][2][0]),
        ],
        [
          randomTen(200, 50),
          randomTen(200, 50),
          randomTen(200, 50),
        ],
        [
          randomTen(200, 50),
          randomTen(200, 50),
          randomTen(200, 50),
        ]
      ]

      const programDataUpdated = [
        [
          [
            Math.min(projectPaddingDataUpdated[0][0], projectPaddingDataUpdated[1][0], projectPaddingDataUpdated[2][0], projectPaddingDataUpdated[3][0]),
            Math.max(
              projectDataUpdated[0][0][0] + projectDataUpdated[0][0][1] + projectDataUpdated[0][0][2] + projectPaddingDataUpdated[0][0],
              projectDataUpdated[1][0][0] + projectDataUpdated[1][0][1] + projectDataUpdated[1][0][2] + projectPaddingDataUpdated[1][0],
              projectDataUpdated[2][0][0] + projectDataUpdated[2][0][1] + projectDataUpdated[2][0][2] + projectPaddingDataUpdated[2][0],
              projectDataUpdated[3][0][0] + projectDataUpdated[3][0][1] + projectDataUpdated[3][0][2] + projectPaddingDataUpdated[3][0],
            )
          ],
          [
            Math.min(projectPaddingDataUpdated[0][1], projectPaddingDataUpdated[1][1], projectPaddingDataUpdated[2][1], projectPaddingDataUpdated[3][1]),
            Math.max(
              projectDataUpdated[0][1][0] + projectDataUpdated[0][1][1] + projectDataUpdated[0][1][2] + projectPaddingDataUpdated[0][1],
              projectDataUpdated[1][1][0] + projectDataUpdated[1][1][1] + projectDataUpdated[1][1][2] + projectPaddingDataUpdated[1][1],
              projectDataUpdated[2][1][0] + projectDataUpdated[2][1][1] + projectDataUpdated[2][1][2] + projectPaddingDataUpdated[2][1],
              projectDataUpdated[3][1][0] + projectDataUpdated[3][1][1] + projectDataUpdated[3][1][2] + projectPaddingDataUpdated[3][1],
            )
          ],
          [
            Math.min(projectPaddingDataUpdated[0][2], projectPaddingDataUpdated[1][2], projectPaddingDataUpdated[2][2], projectPaddingDataUpdated[3][2]),
            Math.max(
              projectDataUpdated[0][2][0] + projectDataUpdated[0][2][1] + projectDataUpdated[0][2][2] + projectPaddingDataUpdated[0][2],
              projectDataUpdated[1][2][0] + projectDataUpdated[1][2][1] + projectDataUpdated[1][2][2] + projectPaddingDataUpdated[1][2],
              projectDataUpdated[2][2][0] + projectDataUpdated[2][2][1] + projectDataUpdated[2][2][2] + projectPaddingDataUpdated[2][2],
              projectDataUpdated[3][2][0] + projectDataUpdated[3][2][1] + projectDataUpdated[3][2][2] + projectPaddingDataUpdated[3][2],
            )
          ]
        ],
        [
          [randomTen(50, 100), randomTen(200, 600)],
          [randomTen(50, 100), randomTen(200, 600)],
          [randomTen(50, 100), randomTen(200, 600)]
        ],
        [
          [randomTen(50, 100), randomTen(200, 600)],
          [randomTen(50, 100), randomTen(200, 600)],
          [randomTen(50, 100), randomTen(200, 600)]
        ],
        [
          [randomTen(50, 100), randomTen(200, 600)],
          [randomTen(50, 100), randomTen(200, 600)],
          [randomTen(50, 100), randomTen(200, 600)]
        ],
      ]

      const portfolioDataUpdated = [
        [
          [
            Math.min(programDataUpdated[0][0][0], programDataUpdated[1][0][0], programDataUpdated[2][0][0], programDataUpdated[3][0][0]),
            Math.max(programDataUpdated[0][0][1] + programDataUpdated[0][0][0], programDataUpdated[1][0][1] + programDataUpdated[1][0][0], programDataUpdated[2][0][1] + programDataUpdated[2][0][0], programDataUpdated[3][0][1] + programDataUpdated[3][0][0])
            - Math.min(programDataUpdated[0][0][0], programDataUpdated[1][0][0], programDataUpdated[2][0][0], programDataUpdated[3][0][0])
          ],
          [
            Math.min(programDataUpdated[0][1][0], programDataUpdated[1][1][0], programDataUpdated[2][1][0], programDataUpdated[3][1][0]),
            Math.max(programDataUpdated[0][1][1] + programDataUpdated[0][1][0], programDataUpdated[1][1][1] + programDataUpdated[1][1][0], programDataUpdated[2][1][1] + programDataUpdated[2][1][0], programDataUpdated[3][1][1] + programDataUpdated[3][1][0])
            - Math.min(programDataUpdated[0][1][0], programDataUpdated[1][1][0], programDataUpdated[2][1][0], programDataUpdated[3][1][0]),
          ],
          [
            Math.min(programDataUpdated[0][2][0], programDataUpdated[1][2][0], programDataUpdated[2][2][0], programDataUpdated[3][2][0]),
            Math.max(programDataUpdated[0][2][1] + programDataUpdated[0][2][0], programDataUpdated[1][2][1] + programDataUpdated[1][2][0], programDataUpdated[2][2][1] + programDataUpdated[2][2][0], programDataUpdated[3][2][1] + programDataUpdated[3][2][0])
            - Math.min(programDataUpdated[0][2][0], programDataUpdated[1][2][0], programDataUpdated[2][2][0], programDataUpdated[3][2][0]),
          ],
        ],
        []
      ]

      state.unitReportingData = [
        {
          id: 'consumer-robots-portfolio',
          title: 'Consumer Robots',
          type: 'portfolio',
          assigned: ['Team A', 'Team B', 'Team C', 'Team D'],
          reportingData: {
            red: [portfolioDataUpdated[0][0][0], portfolioDataUpdated[0][0][1], 455 - portfolioDataUpdated[0][0][0]],
            green: [portfolioDataUpdated[0][1][0], portfolioDataUpdated[0][1][1], 455 - portfolioDataUpdated[0][1][0]],
            blue: [portfolioDataUpdated[0][2][0], portfolioDataUpdated[0][2][1], 455 - portfolioDataUpdated[0][2][0]],
          },
          children: [
            {
              id: 'quadruped-robot-program',
              title: 'Quadruped robot',
              type: 'program',
              assigned: ['Team A', 'Team B', 'Team C'],
              progress: 60,
              reportingData: {
                red: [programDataUpdated[0][0][0], programDataUpdated[0][0][1], 455 - programDataUpdated[0][0][0]],
                green: [programDataUpdated[0][1][0], programDataUpdated[0][1][1], 455 - programDataUpdated[0][1][0]],
                blue: [programDataUpdated[0][2][0], programDataUpdated[0][2][1], 455 - programDataUpdated[0][2][0]],
              },
              children: [
                {
                  id: 'new-format-project',
                  title: 'New Format',
                  type: 'project',
                  assigned: ['Team A', 'Team B'],
                  progress: 0,
                  reportingData: {
                    red: [projectPaddingDataUpdated[0][0], projectDataUpdated[0][0][0], projectDataUpdated[0][0][1], projectDataUpdated[0][0][2], 455 - projectPaddingDataUpdated[0][0]],
                    green: [projectPaddingDataUpdated[0][1], projectDataUpdated[0][1][0], projectDataUpdated[0][1][1], projectDataUpdated[0][1][2], 455 - projectPaddingDataUpdated[0][1]],
                    blue: [projectPaddingDataUpdated[0][2], projectDataUpdated[0][2][0], projectDataUpdated[0][2][1], projectDataUpdated[0][2][2], 455 - projectPaddingDataUpdated[0][2]],
                  },
                  phases: [
                    {
                      id: 'phase-1',
                      projectId: 'new-format-project',
                      assigned: ['Team A'],
                      reportingData: {
                        red: [elementDataUpdated[0][0][0][0], elementDataUpdated[0][0][0][1], 455 - elementDataUpdated[0][0][0][0]],
                        green: [elementDataUpdated[0][0][1][0], elementDataUpdated[0][0][1][1], 455 - elementDataUpdated[0][0][1][0]],
                        blue: [elementDataUpdated[0][0][2][0], elementDataUpdated[0][0][2][1], 455 - elementDataUpdated[0][0][2][0]],
                      },
                      progress: 0,
                    },
                    {
                      id: 'phase-2',
                      projectId: 'new-format-project',
                      assigned: ['Team A'],
                      reportingData: {
                        red: [elementDataUpdated[0][1][0][0], elementDataUpdated[0][1][0][1], 455 - elementDataUpdated[0][1][0][0]],
                        green: [elementDataUpdated[0][1][1][0], elementDataUpdated[0][1][1][1], 455 - elementDataUpdated[0][1][1][0]],
                        blue: [elementDataUpdated[0][1][2][0], elementDataUpdated[0][1][2][1], 455 - elementDataUpdated[0][1][2][0]],
                      },
                      progress: 0,
                    },
                    {
                      id: 'phase-3',
                      projectId: 'new-format-project',
                      assigned: ['Team B'],
                      reportingData: {
                        red: [elementDataUpdated[0][2][0][0], elementDataUpdated[0][2][0][1], 455 - elementDataUpdated[0][2][0][0]],
                        green: [elementDataUpdated[0][2][1][0], elementDataUpdated[0][2][1][1], 455 - elementDataUpdated[0][2][1][0]],
                        blue: [elementDataUpdated[0][2][2][0], elementDataUpdated[0][2][2][1], 455 - elementDataUpdated[0][2][2][0]],
                      },
                      progress: 0,
                    },
                    {
                      id: 'phase-4',
                      assigned: ['Team B'],
                      projectId: 'new-format-project',
                      reportingData: {
                        red: [elementDataUpdated[0][3][0][0], elementDataUpdated[0][3][0][1], 455 - elementDataUpdated[0][3][0][0]],
                        green: [elementDataUpdated[0][3][1][0], elementDataUpdated[0][3][1][1], 455 - elementDataUpdated[0][3][1][0]],
                        blue: [elementDataUpdated[0][3][2][0], elementDataUpdated[0][3][2][1], 455 - elementDataUpdated[0][3][2][0]],
                      },
                      progress: 0,
                    },
                  ],
                },
                {
                  id: 'enhanced-motricity-project',
                  title: 'Enhanced motricity',
                  assigned: ['Team A', 'Team C'],
                  type: 'project',
                  progress: 0,
                  reportingData: {
                    red: [projectPaddingDataUpdated[1][0], projectDataUpdated[1][0][0], projectDataUpdated[1][0][1], projectDataUpdated[1][0][2], 455 - projectPaddingDataUpdated[1][0]],
                    green: [projectPaddingDataUpdated[1][1], projectDataUpdated[1][1][0], projectDataUpdated[1][1][1], projectDataUpdated[1][1][2], 455 - projectPaddingDataUpdated[1][1]],
                    blue: [projectPaddingDataUpdated[1][2], projectDataUpdated[1][2][0], projectDataUpdated[1][2][1], projectDataUpdated[1][2][2], 455 - projectPaddingDataUpdated[1][2]],
                  },
                  phases: [
                    {
                      id: 'phase-6',
                      projectId: 'enhanced-motricity-project',
                      assigned: ['Team A'],
                      reportingData: {
                        red: [elementDataUpdated[1][0][0][0], elementDataUpdated[1][0][0][1], 455 - elementDataUpdated[1][0][0][0]],
                        green: [elementDataUpdated[1][0][1][0], elementDataUpdated[1][0][1][1], 455 - elementDataUpdated[1][0][1][0]],
                        blue: [elementDataUpdated[1][0][2][0], elementDataUpdated[1][0][2][1], 455 - elementDataUpdated[1][0][2][0]],
                      },
                      progress: 0,
                    },
                    {
                      id: 'phase-7',
                      projectId: 'enhanced-motricity-project',
                      assigned: ['Team C'],
                      reportingData: {
                        red: [elementDataUpdated[1][1][0][0], elementDataUpdated[1][1][0][1], 455 - elementDataUpdated[1][1][0][0]],
                        green: [elementDataUpdated[1][1][1][0], elementDataUpdated[1][1][1][1], 455 - elementDataUpdated[1][1][1][0]],
                        blue: [elementDataUpdated[1][1][2][0], elementDataUpdated[1][1][2][1], 455 - elementDataUpdated[1][1][2][0]],
                      },
                      progress: 0,
                    },
                  ]
                },
                {
                  id: 'enhanced-autonomy-project',
                  title: 'Enhanced autonomy',
                  type: 'project',
                  assigned: ['Team B'],
                  progress: 100,
                  reportingData: {
                    red: [projectPaddingDataUpdated[2][0], projectDataUpdated[2][0][0], projectDataUpdated[2][0][1], projectDataUpdated[2][0][2], 455 - projectPaddingDataUpdated[2][0]],
                    green: [projectPaddingDataUpdated[2][1], projectDataUpdated[2][1][0], projectDataUpdated[2][1][1], projectDataUpdated[2][1][2], 455 - projectPaddingDataUpdated[2][1]],
                    blue: [projectPaddingDataUpdated[2][2], projectDataUpdated[2][2][0], projectDataUpdated[2][2][1], projectDataUpdated[2][2][2], 455 - projectPaddingDataUpdated[2][2]],
                  },
                },
                {
                  id: 'dual-sourcing-for-quadruped-project',
                  title: 'Dual sourcing for Quadruped',
                  type: 'project',
                  progress: 100,
                  assigned: ['Team C'],
                  reportingData: {
                    red: [projectPaddingDataUpdated[3][0], projectDataUpdated[3][0][0], projectDataUpdated[3][0][1], projectDataUpdated[3][0][2], 455 - projectPaddingDataUpdated[3][0]],
                    green: [projectPaddingDataUpdated[3][1], projectDataUpdated[3][1][0], projectDataUpdated[3][1][1], projectDataUpdated[3][1][2], 455 - projectPaddingDataUpdated[3][1]],
                    blue: [projectPaddingDataUpdated[3][2], projectDataUpdated[3][2][0], projectDataUpdated[3][2][1], projectDataUpdated[3][2][2], 455 - projectPaddingDataUpdated[3][2]],
                  },
                },
              ]
            },
            {
              id: 'micro-robot-observation-nbc-program',
              title: 'Micro robot observation NBC',
              assigned: ['Team B', 'Team C', 'Team D'],
              type: 'program',
              reportingData: {
                red: [programDataUpdated[1][0][0], programDataUpdated[1][0][1], 455 - programDataUpdated[1][0][0]],
                green: [programDataUpdated[1][1][0], programDataUpdated[1][1][1], 455 - programDataUpdated[1][1][0]],
                blue: [programDataUpdated[1][2][0], programDataUpdated[1][2][1], 455 - programDataUpdated[1][2][0]],
              },
              progress: 60,
            },
            {
              id: 'handling-robot-program',
              title: 'Handling robot',
              assigned: ['Team B', 'Team D'],
              type: 'program',
              reportingData: {
                red: [programDataUpdated[2][0][0], programDataUpdated[2][0][1], 455 - programDataUpdated[2][0][0]],
                green: [programDataUpdated[2][1][0], programDataUpdated[2][1][1], 455 - programDataUpdated[2][1][0]],
                blue: [programDataUpdated[2][2][0], programDataUpdated[2][2][1], 455 - programDataUpdated[2][2][0]],
              },
              progress: 60,
            },
            {
              id: 'power-&-programming-station-program',
              title: 'Power & programming station',
              assigned: ['Team C', 'Team D'],
              type: 'program',
              reportingData: {
                red: [programDataUpdated[3][0][0], programDataUpdated[3][0][1], 455 - programDataUpdated[3][0][0]],
                green: [programDataUpdated[3][1][0], programDataUpdated[3][1][1], 455 - programDataUpdated[3][1][0]],
                blue: [programDataUpdated[3][2][0], programDataUpdated[3][2][1], 455 - programDataUpdated[3][2][0]],
              },
              progress: 60,
            },
          ]
        },
      ]
    },
    REPORTING_COLUMN_UPDATE(state, columns) {
      state.reportingColumnData = columns
    },
    Unit_Teams_UPDATE(state, index) {
      state.unitOrTeamsIndex = index
    },
    GET_UNIT_REPORTING_DATA(state, data) {
      state.unitReportingData = data
    },
    GET_UNIT_DEMAND_DATA(state, data) {
      state.unitDemandData = data
    },
    GET_UNIT_CONTROL_DATA(state, data) {
      state.unitControlData = data
    },
  },
  actions: {
    get_unit_reporting_data() {
      // axios.get('http://127.0.0.1:8000/api/unit/reporting').then(response => {
      axios.get('http://localhost/konatus-me/public/api/unit/reporting').then(response => {
        const unitReportingData = response.data
        this.commit('orgnizationState/GET_UNIT_REPORTING_DATA', unitReportingData)
      }).catch(err => {
        console.log('error getting unit reporting data ---->', err)
        Vue.$toast.error('Failed to get unit reporting data.')
      })
    },
    get_unit_demand_data() {
      // axios.get('http://127.0.0.1:8000/api/unit/demand').then(response => {
      axios.get('http://localhost/konatus-me/public/api/unit/demand').then(response => {
        const unitDemandData = response.data
        this.commit('orgnizationState/GET_UNIT_DEMAND_DATA', unitDemandData)
      }).catch(err => {
        console.log('error getting unit demand data ---->', err)
        Vue.$toast.error('Failed to get unit demand data.')
      })
    },
    get_unit_control_data() {
      // axios.get('http://127.0.0.1:8000/api/unit/control').then(response => {
      axios.get('http://localhost/konatus-me/public/api/unit/control').then(response => {
        const unitControlData = response.data
        this.commit('orgnizationState/GET_UNIT_CONTROL_DATA', unitControlData)
      }).catch(err => {
        console.log('error getting unit control data ---->', err)
        Vue.$toast.error('Failed to get unit control data.')
      })
    },
  },
}
