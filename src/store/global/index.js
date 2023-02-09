import Vue from "vue"
import moment from 'moment'
import axios from "axios"

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

const globalOperationData = {
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
                {
                  id: '2.29.18.112',
                  progress: '10%'
                },
                {
                  id: '2.29.18.113',
                  progress: '40%'
                },
                {
                  id: '2.29.18.114',
                  progress: '14%'
                },
                {
                  id: '2.29.18.115',
                  progress: '100%'
                },
                {
                  id: '2.29.18.116',
                  progress: '10%'
                },
              ],
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
              phases: [
                {
                  id: '2.29.18.118',
                  progress: '50%'
                },
                {
                  id: '2.29.18.119',
                  progress: '20%'
                },
              ]
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
              phases: []
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

const globalOrganizationData = {
  id: 'organization-dynamics-organization',
  title: 'Organization Dynamics',
  resource: 'Konatus',
  isOperation: false,
  type: 'organization',
  children: [
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
        {
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
          ],
          phases: [
            {
              id: 'phase-3',
              projectId: 'new-format-project',
              assigned: 'team-b-team',
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
              assigned: 'team-b-team',
              data: {
                progress: 0,
                start_date: '2022.11.04',
                end_date: '2022.12.21',
              },
              elements: [
                {
                  activityId: `electricity-market-ai-ii-activity`,
                  title: 'Electricity market AI II',
                  priority: 'Highest',
                  phase: 'phase-4',
                  gate: 2,
                  description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
                  assigned: 'team-b-team',
                  effort: {
                    load: 53,
                    duration: 26,
                    fte: 80
                  },
                }
              ]
            },
            {
              id: 'phase-5',
              projectId: 'new-format-project',
              assigned: 'team-b-team',
              data: {
                progress: 0,
                start_date: '2022.11.04',
                end_date: '2022.12.21',
              },
              elements: []
            },
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
          ],
          phases: [
            {
              id: 'phase-6',
              projectId: 'enhanced-motricity-project',
              assigned: 'team-c-team',
              data: {
                progress: 0,
                start_date: '2022.11.04',
                end_date: '2022.12.21',
              },
              elements: []
            },
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
          ],
          phases: [
            {
              id: 'phase-7',
              projectId: 'enhanced-motricity-project',
              assigned: 'team-d-team',
              data: {
                progress: 0,
                start_date: '2022.11.04',
                end_date: '2022.12.21',
              },
              elements: []
            },
          ]
        },
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
          phases: [
            {
              id: 'phase-8',
              projectId: 'enhanced-autonomy-project',
              assigned: 'team-e-team',
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
              assigned: 'team-e-team',
              data: {
                progress: 0,
                start_date: '2022.11.04',
                end_date: '2022.12.21',
              },
              elements: []
            },
          ],
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
          ],
          phases: []
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
          phases: []
        }
      ]
    }
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Electricity market AI',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Electricity market AI',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Electricity market AI',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
            effort: {
              load: 53,
              duration: 26,
              fte: 80
            },
          },
          {
            title: 'Electricity market AI',
            priority: 'Highest',
            gate: 1,
            activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
            description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
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
    projectReportingData: globalOperationData.children[0].children[0],
    teamsState,
    phaseState,
    globalData: [],
    demandTeamData: {},
    activityDetailModalOpen: false,
    selectedNavId: '',
    selectedNavObj: {},

    globalOperationData,
    globalOrganizationData,
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
      [null, parseInt(Math.random() * 400 + 1300, 10), parseInt(Math.random() * 400 + 1300, 10), parseInt(Math.random() * 400 + 1300, 10), null],
      [null, parseInt(Math.random() * 400 + 1300, 10), parseInt(Math.random() * 400 + 1300, 10), parseInt(Math.random() * 400 + 1300, 10), null],
      [null, parseInt(Math.random() * 400 + 1300, 10), parseInt(Math.random() * 400 + 1300, 10), parseInt(Math.random() * 400 + 1300, 10), null],
      [null, parseInt(Math.random() * 400 + 1300, 10), parseInt(Math.random() * 400 + 1300, 10), parseInt(Math.random() * 400 + 1300, 10), null],
      [1450, 1450, 1450, 1450, 1450],
      [1600, 1600, 1600, 1600, 1600],
      [1500, 1500, 1500, 1500, 1500],
    ],
    selectedWorkElement: [],
    requestedElement: []
  },
  mutations: {
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
    HANDLE_ACTIVITY_SPLIT(state, data) {
      let index = -1
      state.teamsState.forEach((t, i) => {
        if (t.title === data.teamTitle) index = i
      })
      const sate = { ...state.teamsState[index] }
      const newPhases = []
      sate.phases.forEach(t => {
        if (t.activityId === data.phase.activityId) {
          newPhases.push(data.newA1, data.newA2)
        } else {
          newPhases.push(t)
        }
      })
      state.teamsState[index].phases = newPhases
      Vue.$toast.success('Splitted Successfully!')
    },
    HANDLE_ACTIVITY_MERGE(state, data) {
      let index = -1
      state.teamsState.forEach((t, i) => {
        if (t.title === data.teamTitle) index = i
      })
      const sate = { ...state.teamsState[index] }
      const newPhases = [data.merged]
      sate.phases.forEach(t => {
        if (t.activityId !== data.toMergeId1 && t.activityId !== data.toMergeId2) {
          newPhases.push(t)
        }
      })
      state.teamsState[index].phases = newPhases
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
    LOAD_NAV_DATA(state) {
      state.globalData = [globalOperationData, globalOrganizationData]
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
      state.globalData = [globalOperationDataInsertedProgram, globalOrganizationData]
      state.projectElementTeamData = []
      state.projectElementPhaseData = []
      // this.$router.push({ path: urlArr.join('/').concat(`/${url}`) })
    }
  },
  actions: {
    load_nav_data() {
      axios.get('http://localhost:3001/api/menu/get_nav_data').then(response => {
        console.log('nav_data ---->', response)
      }).catch(err => {
        console.log('error getting nav data ---->', err)
      })
      this.commit('globalState/LOAD_NAV_DATA')
    }
  },
}
