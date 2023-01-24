// import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    companyData: [
      {
        id: 'konatus-industries-company',
        title: 'Konatus Industries',
        resource: 'konatus',
        isOperation: true,
        type: 'company',
        children: [
          'consumer-robots-portfolio',
          'military-robots-portfolio'
        ]
      }
    ],
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
        next_gate: '03/01/2022', // ?
        route: {
          name: 'portfolio-view',
          params: {
            portfolioId: 'consumer-robots',
          },
        },
        children: [
          'quadruped-robot-program',
          'micro-robot-observation-nbc-program',
          'handling-robot-program',
          'power-&-programming-station-program'
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
          'attacking-robot-program'
        ]
      },
    ],
    programData: [
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
        value: '331', // ?
        next_gate: '03/01/2022', // ?
        gate: 3, // for unit demand page
        route: {
          name: 'program-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'quadruped-robot',
          },
        },
        children: [
          'new-format-project',
          'enhanced-motricity-project',
          'enhanced-autonomy-project',
          'dual-sourcing-for-quadruped-project'
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
        route: {
          name: 'program-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'micro-robot-observation-nbc',
          },
        },
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
        route: {
          name: 'program-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'handling-robot',
          },
        },
        // children: []
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
        route: {
          name: 'program-view',
          params: {
            portfolioId: 'consumer-robots',
            programId: 'power-&-programming-station',
          },
        },
        // children: []
      },
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
          'rocket-launcher-project',
          'location-system-project',
          'target-lock-project',
          'estimation-device-program'
        ],
      },
    ],
    projectData: [
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
        phases: [
          'phase-1',
          'phase-2',
          'phase-3',
          'phase-4',
          'phase-5'
        ],
      },
      {
        id: 'enhanced-motricity-project',
        title: 'Enhanced motricity',
        parent: 'quadruped-robot-program',
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
        phases: [
          'phase-6',
          'phase-7'
        ]
      },
      {
        id: 'enhanced-autonomy-project',
        title: 'Enhanced autonomy',
        parent: 'quadruped-robot-program',
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
        phases: [
          'phase-8'
        ]
      },
      {
        id: 'dual-sourcing-for-quadruped-project',
        title: 'Dual sourcing for Quadruped',
        parent: 'quadruped-robot-program',
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
        phases: []
      },
      {
        id: 'rocket-launcher-project',
        title: 'Rocket launcher',
        parent: 'attacking-robot-program',
        type: 'project',
        route: {
          name: 'project-view',
          params: {
            portfolioId: 'military-robots',
            programId: 'attacking-robot',
            projectId: 'rocket-launcher',
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
        phases: [
          'phase-9'
        ]
      },
      {
        id: 'location-system-project',
        title: 'Location system',
        parent: 'attacking-robot-program',
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
        phases: [],
      },
      {
        id: 'target-lock-project',
        title: 'Target lock',
        parent: 'attacking-robot-program',
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
        phases: [],
      },
      {
        id: 'estimation-device-program',
        title: 'Estimation device',
        parent: 'attacking-robot-program',
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
        phases: [],
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
        },
        elements: [
          `install-software-activity`,
          'develop-control-software-activity',
          `debugging-activity`
        ]
      },
      {
        id: 'phase-2',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        },
        elements: [
          `electricity-market-ai-activity`,
          `improve-generator-component-activity`
        ]
      },
      {
        id: 'phase-3',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        },
        elements: []
      },
      {
        id: 'phase-4',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        },
        elements: [
          'electricity-market-ai-ii-activity'
        ]
      },
      {
        id: 'phase-5',
        projectId: 'new-format-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        },
        elements: []
      },
      {
        id: 'phase-6',
        projectId: 'enhanced-motricity-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        },
        elements: []
      },
      {
        id: 'phase-7',
        projectId: 'enhanced-motricity-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        },
        elements: []
      },
      {
        id: 'phase-8',
        projectId: 'enhanced-autonomy-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        },
        elements: []
      },
      {
        id: 'phase-9',
        projectId: 'rocket-launcher-project',
        data: {
          progress: 0,
          start_date: '2022.11.04',
          end_date: '2022.12.21',
        },
        elements: []
      },
    ],
    activityData: [
      {
        activityId: `install-software-activity`,
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
        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
        priority: 'Highest',
        gate: 2,
        assigned: 'team-a-team',
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
        priority: 'Highest',
        gate: 1,
        assigned: 'team-a-team',
        effort: {
          load: 53,
          duration: 26,
          fte: 80
        },
      },
      {
        activityId: `electricity-market-ai-activity`,
        title: 'Electricity market AI',
        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
        priority: 'Highest',
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
        gate: 2,
        assigned: 'team-b-team',
        effort: {
          load: 53,
          duration: 26,
          fte: 80
        },
      },
      {
        activityId: `electricity-market-ai-ii-activity`,
        title: 'Electricity market AI II',
        priority: 'Highest',
        gate: 2,
        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
        effort: {
          load: 53,
          duration: 26,
          fte: 80
        },
      }
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
      // children: []
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

    organizationData: [
      {
        id: 'organization-dynamics-organization',
        title: 'Organization Dynamics',
        resource: 'Konatus',
        isOperation: false,
        type: 'organization',
        children: [
          'paris-unit',
          'sofia-unit'
        ]
      }
    ],

    unitData: [
      {
        id: 'paris-unit',
        title: 'Paris',
        type: 'unit',
        route: {
          name: 'unit-view',
          params: {
            unitId: 'paris',
          },
        },
        children: [
          'team-a-team',
          'team-b-team',
          'team-c-team',
          'team-d-team',
        ]
      },
      {
        id: 'sofia-unit',
        title: 'Sofia',
        type: 'unit',
        route: {
          name: 'unit-view',
          params: {
            unitId: 'sofia',
          }
        },
        children: [
          'team-e-team',
          'team-f-team',
          'team-g-team',
          'team-h-team',
        ]
      }
    ],

    teamData: [
      {
        id: 'team-a-team',
        title: 'Team A',
        parent: 'paris-unit',
        type: 'team',
        route: {
          name: 'team-view',
          params: {
            unitId: 'paris',
            teamId: 'team-a',
          },
        },
        children: [
          'travis-roach-user',
          'ciaran-bradford-user',
          'george-logan-user',
          'angelica-russo-user'
        ]
      },
      {
        id: 'team-b-team',
        title: 'Team B',
        parent: 'paris-unit',
        type: 'team',
        route: {
          name: 'team-view',
          params: {
            unitId: 'paris',
            teamId: 'team-b',
          },
        },
        children: [
          'robert-garcia-user',
          'hon-gonzalez-user',
          'piren-lopez-user',
          'aden-schmidt-user'
        ]
      },
      {
        id: 'team-c-team',
        title: 'Team C',
        parent: 'paris-unit',
        type: 'team',
        route: {
          name: 'team-view',
          params: {
            unitId: 'paris',
            teamId: 'team-c',
          },
        },
        children: [
          'roman-weber-user',
          'thomas-miller-user',
          'tim-ruiz-user',
          'jake-williams-user'
        ]
      },
      {
        id: 'team-d-team',
        title: 'Team D',
        parent: 'paris-unit',
        type: 'team',
        route: {
          name: 'team-view',
          params: {
            unitId: 'paris',
            teamId: 'team-d',
          },
        },
        children: [
          'feed-silva-user',
          'nuse-hansen-user',
          'ilias-costa-user',
          'albert-klein-user'
        ]
      },
      {
        id: 'team-e-team',
        title: 'Team E',
        parent: 'sofia-unit',
        type: 'team',
        route: {
          name: 'team-view',
          params: {
            unitId: 'sofia',
            teamId: 'team-e',
          },
        },
        children: [
          'lone-wolf-user',
          'telora-varga-user',
          'poke-green-user',
          'assen-oliveira-user'
        ]
      },
      {
        id: 'team-f-team',
        title: 'Team F',
        parent: 'sofia-unit',
        type: 'team',
        route: {
          name: 'team-view',
          params: {
            unitId: 'sofia',
            teamId: 'team-f',
          },
        },
        children: [
          'tommie-maier-user',
          'unifer-keller-user',
          'erik-walter-user',
          'davin-cruz-user'
        ]
      },
      {
        id: 'team-g-team',
        title: 'Team G',
        parent: 'sofia-unit',
        type: 'team',
        route: {
          name: 'team-view',
          params: {
            unitId: 'sofia',
            teamId: 'team-g',
          },
        },
        children: [
          'jenny-phillips-user',
          'solon-collins-user',
          'welter-christensen-user',
          'eden-hahn-user'
        ]
      },
      {
        id: 'team-h-team',
        title: 'Team H',
        parent: 'sofia-unit',
        type: 'team',
        route: {
          name: 'team-view',
          params: {
            unitId: 'Sofia',
            teamId: 'team-h',
          },
        },
        children: [
          'brone-henry-user',
          'roppie-kraus-user',
          'rober-vincent-user',
          'alen-cano-user'
        ]
      }
    ],

    teamMemberData: [
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
      {
        id: 'robert-garcia-user',
        parent: 'team-b-team',
        title: 'Robert Garcia',
        type: 'user',
      },
      {
        id: 'hon-gonzalez-user',
        parent: 'team-b-team',
        title: 'Hon Gonzalez',
        type: 'user',
      },
      {
        id: 'piren-lopez-user',
        parent: 'team-b-team',
        title: 'Piren Lopez',
        type: 'user',
      },
      {
        id: 'aden-schmidt-user',
        parent: 'team-b-team',
        title: 'Aden Schmidt',
        type: 'user',
      },

      {
        id: 'roman-weber-user',
        title: 'Roman Weber',
        parent: 'team-c-team',
        type: 'user',
      },
      {
        id: 'thomas-miller-user',
        title: 'Thomas Miller',
        parent: 'team-c-team',
        type: 'user',
      },
      {
        id: 'tim-ruiz-user',
        title: 'Tim Ruiz',
        parent: 'team-c-team',
        type: 'user',
      },
      {
        id: 'jake-williams-user',
        title: 'Jake Williams',
        parent: 'team-c-team',
        type: 'user',
      },

      {
        id: 'feed-silva-user',
        title: 'Feed Silva',
        parent: 'team-d-team',
        type: 'user',
      },
      {
        id: 'nuse-hansen-user',
        title: 'Nuse Hansen',
        parent: 'team-d-team',
        type: 'user',
      },
      {
        id: 'ilias-costa-user',
        title: 'Ilias Costa',
        parent: 'team-d-team',
        type: 'user',
      },
      {
        id: 'albert-klein-user',
        title: 'Albert Klein',
        parent: 'team-d-team',
        type: 'user',
      },

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

      {
        id: 'tommie-maier-user',
        title: 'Tommie Maier',
        parent: 'team-f-team',
        type: 'user',
      },
      {
        id: 'unifer-keller-user',
        title: 'Unifer Keller',
        parent: 'team-f-team',
        type: 'user',
      },
      {
        id: 'erik-walter-user',
        title: 'Erik Walter',
        parent: 'team-f-team',
        type: 'user',
      },
      {
        id: 'davin-cruz-user',
        title: 'Davin Cruz',
        parent: 'team-f-team',
        type: 'user',
      },

      {
        id: 'jenny-phillips-user',
        title: 'Jenny Phillips',
        parent: 'team-g-team',
        type: 'user',
      },
      {
        id: 'solon-collins-user',
        title: 'Solon Collins',
        parent: 'team-g-team',
        type: 'user',
      },
      {
        id: 'welter-christensen-user',
        title: 'Welter Christensen',
        parent: 'team-g-team',
        type: 'user',
      },
      {
        id: 'eden-hahn-user',
        title: 'Eden Hahn',
        parent: 'team-g-team',
        type: 'user',
      },

      {
        id: 'brone-henry-user',
        title: 'Brone Henry',
        parent: 'team-h-team',
        type: 'user',
      },
      {
        id: 'roppie-kraus-user',
        title: 'Roppie Kraus',
        parent: 'team-h-team',
        type: 'user',
      },
      {
        id: 'rober-vincent-user',
        title: 'Rober Vincent',
        parent: 'team-h-team',
        type: 'user',
      },
      {
        id: 'alen-cano-user',
        title: 'Alen Cano',
        parent: 'team-h-team',
        type: 'user',
      },
    ],

    navbarData: [
      {
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
                  },
                  {
                    id: 'enhanced-motricity-project',
                    title: 'Enhanced motricity',
                    parent: 'quadruped-robot-program',
                    type: 'project',
                    // route: {
                    //   name: 'project-view',
                    //   params: {
                    //     portfolioId: 'consumer-robots',
                    //     programId: 'quadruped-robot',
                    //     projectId: 'enhanced-motricity',
                    //   },
                    // },
                  },
                  {
                    id: 'enhanced-autonomy-project',
                    title: 'Enhanced autonomy',
                    parent: 'quadruped-robot-program',
                    type: 'project',
                    // route: {
                    //   name: 'project-view',
                    //   params: {
                    //     portfolioId: 'consumer-robots',
                    //     programId: 'quadruped-robot',
                    //     projectId: 'enhanced-autonomy',
                    //   },
                    // },
                  },
                  {
                    id: 'dual-sourcing-for-quadruped-project',
                    title: 'Dual sourcing for Quadruped',
                    parent: 'quadruped-robot-program',
                    type: 'project',
                    // route: {
                    //   name: 'project-view',
                    //   params: {
                    //     portfolioId: 'consumer-robots',
                    //     programId: 'quadruped-robot',
                    //     projectId: 'dual-sourcing-for-quadruped',
                    //   },
                    // },
                  },
                ]
              },
              {
                id: 'micro-robot-observation-nbc-program',
                title: 'Micro robot observation NBC',
                parent: 'consumer-robots-portfolio',
                type: 'program',
                // route: {
                //   name: 'program-view',
                //   params: {
                //     portfolioId: 'consumer-robots',
                //     programId: 'micro-robot-observation-nbc',
                //   },
                // },
                // children: []
              },
              {
                id: 'handling-robot-program',
                title: 'Handling robot',
                parent: 'consumer-robots-portfolio',
                type: 'program',
                // route: {
                //   name: 'program-view',
                //   params: {
                //     portfolioId: 'consumer-robots',
                //     programId: 'handling-robot',
                //   },
                // },
                // children: []
              },
              {
                id: 'power-&-programming-station-program',
                title: 'Power & programming station',
                parent: 'consumer-robots-portfolio',
                type: 'program',
                // route: {
                //   name: 'program-view',
                //   params: {
                //     portfolioId: 'consumer-robots',
                //     programId: 'power-&-programming-station',
                //   },
                // },
                // children: []
              },
            ]
          },
          {
            id: 'military-robots-portfolio',
            title: 'Military Robots',
            type: 'portfolio',
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
                    type: 'project',
                    // route: {
                    //   name: 'project-view',
                    //   params: {
                    //     portfolioId: 'military-robots',
                    //     programId: 'attacking-robot',
                    //     projectId: 'rocket-launcher',
                    //   },
                    // },
                  },
                  {
                    id: 'location-system-project',
                    title: 'Location system',
                    type: 'project',
                    // route: {
                    //   name: 'project-view',
                    //   params: {
                    //     portfolioId: 'military-robots',
                    //     programId: 'attacking-robot',
                    //     projectId: 'location-system',
                    //   },
                    // },
                  },
                  {
                    id: 'target-lock-project',
                    title: 'Target lock',
                    type: 'project',
                    // route: {
                    //   name: 'project-view',
                    //   params: {
                    //     portfolioId: 'military-robots',
                    //     programId: 'attacking-robot',
                    //     projectId: 'target-lock',
                    //   },
                    // },
                  },
                  {
                    id: 'estimation-device-program',
                    title: 'Estimation device',
                    type: 'project',
                    // route: {
                    //   name: 'project-view',
                    //   params: {
                    //     portfolioId: 'military-robots',
                    //     programId: 'attacking-robot',
                    //     projectId: 'estimation-device',
                    //   },
                    // },
                  },
                ],
              },
            ]
          },
        ]
      },
    ]
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
