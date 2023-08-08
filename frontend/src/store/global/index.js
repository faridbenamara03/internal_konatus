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

const globalOperationDataInsertedProgram = {
  id: 'konatus-industries-company',
  title: 'Konatus Industries',
  resource: 'konatus',
  isOperation: true,
  type: 'company',
  children: [
    {
      id: 'consumer-robots-portfolio',
      title: 'Consumer Robots',
      type: 'portfolio',
      priority: 'Highest',
      budget: '210000',
      deadline: '06/02/2023',
      engaged: '215800',
      quote: '210000',
      demand: '319200',
      realEstimated: '210100',
      authorised: '124500',
      spent: '21600',
      value: '331', // ?
      next_gate: '03/01/2022', // ?
      route: {
        name: 'portfolio-view',
        params: {
          portfolioId: 'consumer-robots',
        },
      },
      children: [
        {
          id: 'quadruped-robot-program',
          title: 'Quadruped robot',
          parent: 'consumer-robots-portfolio',
          type: 'program',
          priority: 'Highest',
          budget: '91001',
          deadline: '06/01/2023',
          engaged: '21800',
          quote: '89000',
          demand: '19200',
          realEstimated: '10100',
          authorised: '14500',
          spent: '11600',
          value: '331',
          next_gate: '03/01/2022',
          gate: 3, // for unit demand page
          route: {
            name: 'program-view',
            params: {
              portfolioId: 'consumer-robots',
              programId: 'quadruped-robot',
            },
          },
          children: [
            {
              id: 'new-format-project',
              title: 'New Format',
              parent: 'quadruped-robot-program',
              type: 'project',
              route: {
                name: 'project-view',
                params: {
                  portfolioId: 'consumer-robots',
                  programId: 'quadruped-robot',
                  projectId: 'new-format',
                },
              },
              priority: 'High',
              budget: '350000',
              deadline: '06/01/2021',
              engaged: '22450',
              quote: '61900',
              demand: '91800',
              realEstimated: '235200',
              authorised: '232100',
              spent: '41800',
              value: '64',
              next_gate: '03/01/2022',
              progress: 64,
              start_date: '2022.11.6',
              end_date: '2022.12.26',
              // phases: [
              //   'phase-1',
              //   'phase-2',
              //   'phase-3',
              //   'phase-4',
              //   'phase-5'
              // ],
            },
            {
              id: 'enhanced-motricity-project',
              title: 'Enhanced motricity',
              parent: 'quadruped-robot-program',
              type: 'project',
              priority: 'Highest',
              budget: '82000',
              deadline: '03/28/2021',
              engaged: '46450',
              quote: '54900',
              demand: '98500',
              realEstimated: '431700',
              authorised: '39600',
              spent: '61400',
              next_gate: '06/02/2022',
              value: '84',
              // phases: [
              //   'phase-6',
              //   'phase-7'
              // ]
            },
            {
              id: 'enhanced-autonomy-project',
              title: 'Enhanced autonomy',
              parent: 'quadruped-robot-program',
              type: 'project',
              priority: 'Highest',
              budget: '98000',
              deadline: '06/01/2021',
              engaged: '450',
              quote: '45900',
              demand: '72400',
              realEstimated: '82000',
              authorised: '31000',
              spent: '21300',
              next_gate: '07/01/2022',
              value: '31',
              // phases: [
              //   'phase-8'
              // ]
            },
            {
              id: 'dual-sourcing-for-quadruped-project',
              title: 'Dual sourcing for Quadruped',
              parent: 'quadruped-robot-program',
              type: 'project',
              priority: 'Lowest',
              budget: '80000',
              deadline: '12/31/2021',
              engaged: '450',
              quote: '41550',
              demand: '91500',
              realEstimated: '211200',
              authorised: '18800',
              spent: '31100',
              value: '3',
              next_gate: '08/02/2022',
              // phases: []
            },
          ]
        },
        {
          id: 'new-created-program-program',
          title: 'New Created Program',
          type: 'program',

          priority: 'lowest',
          budget: '150',
          deadline: '05/20/2018',
          engaged: '450',
          quote: '292.5',
          demand: '300',
          realEstimated: '320',
          authorised: '1000',
          spent: '100',
          value: '100',
          next_gate: '06/02/2022',
          route: {
            name: 'program-view',
            params: {
              portfolioId: 'consumer-robots',
              programId: 'new-created-program',
            },
          },
          children: [
            {
              id: 'project-in-new-program-program',
              title: 'Project in New Program',
              type: 'project',
              priority: 'Highest',
              budget: '82000',
              deadline: '03/28/2021',
              engaged: '46450',
              quote: '54900',
              demand: '98500',
              realEstimated: '431700',
              authorised: '39600',
              spent: '61400',
              value: '84',
              next_gate: '06/02/2022',
              route: {
                name: 'program-view',
                params: {
                  portfolioId: 'consumer-robots',
                  programId: 'new-created-program',
                  projectId: 'project-in-new-program'
                },
              },
              phases: []
            },
          ]
        },
        {
          id: 'micro-robot-observation-nbc-program',
          title: 'Micro robot observation NBC',
          parent: 'consumer-robots-portfolio',
          type: 'program',
          priority: 'lowest',
          budget: '150',
          deadline: '05/20/2018',
          engaged: '450',
          quote: '292.5',
          demand: '300',
          realEstimated: '320',
          authorised: '1000',
          spent: '100',
          value: '100',
          next_gate: '06/02/2022',
          // children: []
        },
        {
          id: 'handling-robot-program',
          title: 'Handling robot',
          parent: 'consumer-robots-portfolio',
          type: 'program',
          priority: 'lowest',
          budget: '150',
          deadline: '05/20/2018',
          engaged: '450',
          quote: '292.5',
          demand: '300',
          realEstimated: '320',
          authorised: '1000',
          spent: '100',
          value: '100',
          next_gate: '06/02/2022',
        },
        {
          id: 'power-&-programming-station-program',
          title: 'Power & programming station',
          parent: 'consumer-robots-portfolio',
          type: 'program',
          priority: 'Low',
          budget: '1200',
          deadline: '03/24/2018',
          engaged: '450',
          quote: '550',
          demand: '1500',
          realEstimated: '1800',
          authorised: '900',
          spent: '100',
          value: '10',
          next_gate: '06/02/2022',
        },
      ]
    },
    {
      id: 'military-robots-portfolio',
      title: 'Military Robots',
      type: 'portfolio',
      priority: 'Highest',
      budget: '21000',
      deadline: '06/01/2021',
      engaged: '12800',
      quote: '21000',
      demand: '19200',
      realEstimated: '10100',
      authorised: '14500',
      spent: '16000',
      value: '331',
      next_gate: '03/01/2022',
      route: {
        name: 'portfolio-view',
        params: {
          portfolioId: 'military-robots',
        },
      },
      children: [
        {
          id: 'attacking-robot-program',
          title: 'Attacking robot',
          parent: 'military-robots-portfolio',
          type: 'program',
          priority: 'Highest',
          budget: '21000',
          deadline: '06/01/2021',
          engaged: '12800',
          quote: '11000',
          demand: '19200',
          realEstimated: '10100',
          authorised: '4500',
          spent: '8600',
          value: '331',
          next_gate: '03/01/2022',
          route: {
            name: 'program-view',
            params: {
              portfolioId: 'military-robots',
              programId: 'attacking-robot',
            },
          },
          children: [
            {
              id: 'rocket-launcher-project',
              title: 'Rocket launcher',
              parent: 'attacking-robot-program',
              type: 'project',
              priority: 'Highest',
              budget: '11000',
              deadline: '06/01/2021',
              engaged: '12800',
              quote: '22000',
              demand: '19200',
              realEstimated: '10100',
              authorised: '14500',
              spent: '11600',
              value: '331',
              next_gate: '03/01/2022',
            },
            {
              id: 'location-system-project',
              title: 'Location system',
              parent: 'attacking-robot-program',
              type: 'project',
              priority: 'Highest',
              budget: '21000',
              engaged: '9800',
              quote: '22000',
              demand: '19200',
              realEstimated: '10100',
              authorised: '14500',
              spent: '11600',
              value: '331',
              next_gate: '03/01/2022',
            },
            {
              id: 'target-lock-project',
              title: 'Target lock',
              parent: 'attacking-robot-program',
              type: 'project',
              priority: 'Highest',
              budget: '21000',
              engaged: '9800',
              quote: '22000',
              demand: '19200',
              realEstimated: '10100',
              authorised: '14500',
              spent: '11600',
              value: '331',
              next_gate: '03/01/2022',
            },
            {
              id: 'estimation-device-program',
              title: 'Estimation device',
              parent: 'attacking-robot-program',
              type: 'project',
              priority: 'Highest',
              budget: '21000',
              engaged: '9800',
              quote: '22000',
              demand: '19200',
              realEstimated: '10100',
              authorised: '14500',
              spent: '11600',
              value: '331',
              next_gate: '03/01/2022',
            },
          ],
        },
      ]
    },
  ]
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
    // projectReportingData: globalOperationData.children[0].children[0],
    demandTeamData: {},
    activityDetailModalOpen: false,
    selectedNavId: '',
    selectedNavObj: {},
    optimiseState: 'origin',

    projectElementTeamData: [],
    projectElementPhaseData: [],
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
    parentIndexForInsertElement: {},
    parentTeamTtle: ''
  },
  mutations: {
    TOGGLE_CREATE_NEW_DRAWER(state) {
      const u1 = !state.openCreateNewPortfolioDrawer
      const u2 = !state.openCreateNewUnitDrawer
      state.openCreateNewPortfolioDrawer = u1
      state.openCreateNewUnitDrawer = u2
    },
    CREATE_NEW_UNIT(state, data) {
      if (!data.unitName) {
        Vue.$toast.warning('Please input correctly.')
      } else {
        const dt = { ...state.globalData[1] }
        const cdn = dt.children
        cdn.push(
          {
            id: `${data.unitName.toLowerCase()}-unit`,
            title: data.unitName,
            type: 'unit',
            route: {
              name: 'unit-view',
              params: {
                unitId: data.unitName.toLowerCase(),
              },
            },
            children: [
              {
                id: 'team-ln-team',
                title: 'Team LN',
                parent: 'lyon-unit',
                type: 'team',
                route: {
                  name: 'team-view',
                  params: {
                    unitId: 'lyon',
                    teamId: 'team-ln',
                  },
                },
                children: [
                  {
                    id: 'lone-wolf-user',
                    title: 'Lone Wolf',
                    parent: 'team-e-team',
                    type: 'user',
                  },
                  {
                    id: 'telora-varga-user',
                    title: 'Telora Varga',
                    parent: 'team-e-team',
                    type: 'user',
                  },
                  {
                    id: 'poke-green-user',
                    title: 'Poke Green',
                    parent: 'team-e-team',
                    type: 'user',
                  },
                  {
                    id: 'assen-oliveira-user',
                    title: 'Assen Oliveira',
                    parent: 'team-e-team',
                    type: 'user',
                  },
                ]
              }
            ]
          }
        )
        dt.children = cdn
        state.globalOrganizationData = dt
        const u1 = !state.openCreateNewPortfolioDrawer
        const u2 = !state.openCreateNewUnitDrawer
        state.openCreateNewPortfolioDrawer = u1
        state.openCreateNewUnitDrawer = u2
      }
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
      state.globalOperationData.children.push()
    },
    LOAD_NAV_DATA(state, globalAllData) {
      // state.globalData = [globalAllData.navData, globalAllData.orgData]
      // state.globalData1 = [globalAllData.navData, globalAllData.orgData1]
      state.globalData.push(globalAllData.navData)
      state.globalData.push(globalAllData.orgData)
      state.globalData1.push(globalAllData.navData)
      state.globalData1.push(globalAllData.orgData1)
      // state.globalData = [JSON.parse(globalAllData.navData), JSON.parse(globalAllData.orgData)]
      // state.globalData1 = [JSON.parse(globalAllData.navData), JSON.parse(globalAllData.orgData1)]
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
    ADD_PROJECT(state) {
      Vue.$toast.success("New program added")
      state.globalData = [globalOperationDataInsertedProgram, state.globalData[1]]
      state.projectElementTeamData = []
      state.projectElementPhaseData = []
      // this.$router.push({ path: urlArr.join('/').concat(`/${url}`) })
    },
    SET_INDEX_FOR_INSERT_NEW_ELEMENT(state, data) {
      state.parentIndexForInsertElement = { index0: data.index0, index: data.index, state: data.state }
      state.parentTeamTtle = data.team
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
    load_nav_data() {
      axios.get('https://konatus-api.onrender.com/api/menu/get_nav_data').then(response => {
      // axios.get('http://localhost/konatus-me/public/api/menu/get_nav_data').then(response => {
        const globalAllData = response.data
        this.commit('globalState/LOAD_NAV_DATA', globalAllData)
      }).catch(err => {
        console.log('error getting nav data ---->', err)
        Vue.$toast.error('Failed to load navigation data.')
      })
    },
  },
}
