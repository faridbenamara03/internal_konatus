import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    portfolioData: [
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
        next_gate: '03/01/2022',  // ?
        route: {
          name: 'portfolio-view',
          params: {
            portfolioId: 'consumer-robots',
          },
        },
        children: ['']
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
        }
      },
    ],

    programData: [
      {
        id: 'quadruped-robot-program',
        title: 'Quadruped robot',
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
        value: '331', // ?
        next_gate: '03/01/2022',  // ?
        route: {
          name: 'program-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'quadruped-robot',
          },
        },
        children: []
      },
      {
        id: 'micro-robot-observation-nbc-program',
        title: 'Micro robot observation NBC',
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
            programId: 'micro-robot-observation-nbc',
          },
        },
        children: []
      },
      {
        id: 'handling-robot-program',
        title: 'Handling robot',
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
            programId: 'handling-robot',
          },
        },
        children: []
      },
      {
        id: 'power-&-programming-station-program',
        title: 'Power & programming station',
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
        route: {
          name: 'program-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'power-&-programming-station',
          },
        },
        children: []
      },
      {
        id: 'attacking-robot-program',
        title: 'Attacking robot',
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
        children: [],
      },
    ],
    projectData: [
      {
        id: 'new-format-project',
        title: 'New Format',
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
        phases: [],
      },
      {
        id: 'enhanced-motricity-project',
        title: 'Enhanced motricity',
        type: 'project',
        route: {
          name: 'project-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'quadruped-robot',
            projectId: 'enhanced-motricity',
          },
        },
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
        phases: []
      },
      {
        id: 'enhanced-autonomy-project',
        title: 'Enhanced autonomy',
        type: 'project',
        route: {
          name: 'project-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'quadruped-robot',
            projectId: 'enhanced-autonomy',
          },
        },
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
      },
      {
        id: 'dual-sourcing-for-quadruped-project',
        title: 'Dual sourcing for Quadruped',
        type: 'project',
        route: {
          name: 'project-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'quadruped-robot',
            projectId: 'dual-sourcing-for-quadruped',
          },
        },
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
      },
      {
        id: 'rocket-ancher-project',
        title: 'Rocket lancher',
        type: 'project',
        route: {
          name: 'project-view',
          params: {
            portfolioId: 'military-robots',
            programId: 'attacking-robot',
            projectId: 'rocket-ancher',
          },
        },
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
        type: 'project',
        route: {
          name: 'project-view',
          params: {
            portfolioId: 'military-robots',
            programId: 'attacking-robot',
            projectId: 'location-system',
          },
        },
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
        type: 'project',
        route: {
          name: 'project-view',
          params: {
            portfolioId: 'military-robots',
            programId: 'attacking-robot',
            projectId: 'target-lock',
          },
        },
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
        type: 'project',
        route: {
          name: 'project-view',
          params: {
            portfolioId: 'military-robots',
            programId: 'attacking-robot',
            projectId: 'estimation-device',
          },
        },
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
    phaseData: [
      {
        id: 'phase-1',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
      {
        id: 'phase-2',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
      {
        id: 'phase-3',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
      {
        id: 'phase-4',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
      {
        id: 'phase-5',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
      {
        id: 'phase-6',
        projectId: 'enhanced-motricity-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
      {
        id: 'phase-7',
        projectId: 'enhanced-motricity-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
      {
        id: 'phase-8',
        projectId: 'enhanced-autonomy-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
      {
        id: 'phase-9',
        projectId: 'rocket-ancher-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        }
      },
    ],

    programToCreate: {
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
      children: []
    },

    projectToCreate: {
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
  },
  getters: {
  },
  mutations: {
    MUTATION_LOAD(state, data) {
      console.log(state, data)
      // .todo axios request
    },
  },
  actions: {},
}
