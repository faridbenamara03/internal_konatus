import Vue from "vue"
import moment from 'moment'
import axios from "axios"

const globalOperationData = {
  id: '1.1',
  title: 'Konatus Industries',
  resource: 'konatus',
  isOperation: true,
  type: 'organization',
  children: [
    {
      id: '1.1.1',
      title: 'Consumer Robots',
      type: 'portfolio',

      priority: 'Highest',
      budget: '210000',
      deadline: '06/01/2021',
      engaged: '215800',
      quote: '210000',
      demand: '319200',
      realEstimated: '210100',
      authorised: '124500',
      spent: '21600',
      value: '331',
      next_gate: '03/01/2022',

      route: {
        name: 'portfolio-view',
        params: {
          portfolioId: 'consumer-robots',
        },
      },
      children: [
        {
          id: '1.1.1.1',
          title: 'Quadruped robot',
          type: 'program',

          priority: 'Highest',
          budget: '91001',
          deadline: '06/01/2021',
          engaged: '21800',
          quote: '89000',
          demand: '19200',
          realEstimated: '10100',
          authorised: '14500',
          spent: '11600',
          value: '331',
          next_gate: '03/01/2022',

          route: {
            name: 'program-view',
            params: {
              portfolioId: 'consumer-robots',
              programId: 'quadruped-robot',
            },
          },
          children: [
            {
              id: '1.28.11.1.1',
              title: 'Full Model Design',

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

              progress: 0,
              start_date: '2022.11.6',
              end_date: '2022.12.26',

              sub_project: [
                {
                  id: '1.28.11.1.1.1',
                  data: {}
                },
                {
                  id: '1.28.11.1.2.2',
                  data: {
                    progress: 0,
                    start_date: '2022.11.04',
                    end_date: '2022.12.21',
                  }
                },
                {
                  id: '1.28.11.1.3.3',
                  data: {
                    progress: 0,
                    start_date: '2022.11.02',
                    end_date: '2022.12.25',
                  }
                },
                {
                  id: '1.28.11.1.4.4',
                  data: {}
                },
                {
                  id: '1.28.11.1.5.5',
                  data: {
                    progress: 0,
                    start_date: '2022.11.16',
                    end_date: '2022.12.1',
                  }
                },
                {
                  id: '1.28.11.1.6.6',
                  data: {
                    progress: 0,
                    start_date: '2022.11.16',
                    end_date: '2022.12.1',
                  }
                },
                {
                  id: '1.28.11.1.7.7',
                  data: {
                    progress: 0,
                    start_date: '2022.11.1',
                    end_date: '2022.12.21',
                  }
                },
                {
                  id: '1.28.11.1.8.8',
                  data: {
                    progress: 0,
                    start_date: '2022.11.21',
                    end_date: '2022.12.13',
                  }
                },
                {
                  id: '1.28.11.1.9.9',
                  data: {
                    progress: 0,
                    start_date: '2022.11.21',
                    end_date: '2022.12.13',
                  }
                },
                {
                  id: '1.28.11.1.10.10',
                  data: {
                    progress: 0,
                    start_date: '2022.11.21',
                    end_date: '2022.12.13',
                  }
                },
              ],
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
              id: '1.28.11.1.2',
              title: 'Enhanced motricity',
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
            },
            {
              id: '1.28.11.1.3',
              title: 'Enhanced authonomy',
              type: 'project',

              priority: 'Highest',
              budget: '98000',
              deadline: '06/01/2021',
              engaged: '450',
              quote: '45900',
              demand: '72400',
              realEstimated: '82000',
              authorised: '31000',
              next_gate: '07/01/2022',
              spent: '21300',
              value: '31',
            },
            {
              id: '1.28.11.1.4',
              title: 'Dual sourcing for Quadruped',
              type: 'project',

              priority: 'Lowest',
              budget: '80000',
              deadline: '12/31/2021',
              engaged: '450',
              quote: '41550',
              demand: '91500',
              next_gate: '08/02/2022',
              realEstimated: '211200',
              authorised: '18800',
              value: '3',
              spent: '31100',
            },
          ],
        },
        {
          id: '1.28.11.2',
          title: 'Hardened quadruped observation',
          type: 'program',

          priority: 'High',
          budget: '5000',
          deadline: '05/20/2018',
          engaged: '450',
          quote: '550',
          demand: '1300',
          realEstimated: '1200',
          authorised: '1000',
          next_gate: '06/02/2022',
          value: '100',
          spent: '100',
        },
        {
          id: '1.28.11.3',
          title: 'Handling robot',
          type: 'program',

          priority: 'Low',
          budget: '1200',
          deadline: '03/24/2018',
          engaged: '450',
          quote: '550',
          demand: '1500',
          realEstimated: '1800',
          authorised: '900',
          next_gate: '06/02/2022',
          value: '10',
          spent: '100',
        },
        {
          id: '1.28.11.4',
          title: 'power and programing station',
          type: 'program',

          priority: 'Lowest',
          budget: '2000',
          deadline: '12/03/2017',
          engaged: '450',
          quote: '550',
          demand: '2100',
          realEstimated: '1600',
          authorised: '800',
          next_gate: '06/02/2022',
          value: '34',
          spent: '100',
        },
      ],
    },
    {
      id: '1.1.2',
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

      children: [
        {
          id: '1.1.2.1',
          title: 'Attacking robot',
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
          type: 'program',
          children: [
            {
              id: '1.1.2.1.1',
              title: 'Rocket lancher',
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
              id: '1.1.2.1.2',
              title: 'Enhanced motricity',
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
              id: '1.1.2.1.3',
              title: 'Enhanced authono...',
              type: 'project',
            },
            {
              id: '1.1.2.1.4',
              title: 'Dual sourcing for Quadruped',
              type: 'project',
            },
          ],
        },
      ],
    },
  ],
}

const globalOrganizationData = {
  id: '1.2',
  title: 'Organization Dynamics',
  resource: 'konatus',
  isOperation: false,
  type: 'organization',
  children: [
    {
      id: '2.1.1',
      title: 'Paris',
      type: 'unit',
      route: {
        name: 'unit-view',
        params: {
          unitId: 'Paris',
        },
      },
      children: [
        {
          id: '1.2.1',
          title: 'Team A',
          type: 'team',
          color: '#D68232',
          phases: [
            {
              phaseV: 1,
              title: 'Install software',
              priority: 'Highest',
              gate: 1,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 2,
              title: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 3,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
          ],
          route: {
            name: 'team-view',
            params: {
              unitId: 'Paris',
              teamId: 'team-a',
            },
          },
          children: [
            {
              id: '2.3.1.22',
              title: 'Travis Roach',
              type: 'user',
            },
            {
              id: '2.3.1.23',
              title: 'Ciaran Bradford',
              type: 'user',
            },
            {
              id: '2.3.1.25',
              title: 'George Logan',
              type: 'user',
            },
            {
              id: '2.3.1.27',
              title: 'Angelica Russo',
              type: 'user',
            },
          ],
        },
        {
          id: '122.1.23.1',
          title: 'Team B',
          type: 'team',
          color: '#32d6c7',
          phases: [
            {
              phaseV: 1,
              title: 'Install software',
              priority: 'Highest',
              gate: 1,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 2,
              title: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 3,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 4,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 5,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
          ],
          route: {
            name: 'team-view',
            params: {
              unitId: 'Paris',
              teamId: 'team-b',
            },
          },
          children: [
            {
              id: '2.21.6.25',
              title: 'Travis Roach',
              type: 'user',
            },
            {
              id: '2.21.6.225',
              title: 'Ciaran Bradford',
              type: 'user',
            },
            {
              id: '2.21.6.29',
              title: 'George Logan',
              type: 'user',
            },
            {
              id: '2.21.6.204',
              title: 'Angelica Russo',
              type: 'user',
            },
          ],
        },
        {
          id: '122.12.15.11',
          title: 'Team C',
          type: 'team',
          color: '#d63232',
          phases: [
            {
              phaseV: 1,
              title: 'Install software',
              priority: 'Highest',
              gate: 1,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 2,
              title: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 3,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 4,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
          ],
          route: {
            name: 'team-view',
            params: {
              unitId: 'Paris',
              teamId: 'team-c',
            },
          },
          children: [
            {
              title: 'Travis Roach',
              type: 'user',
            },
            {
              title: 'Ciaran Bradford',
              type: 'user',
            },
            {
              title: 'George Logan',
              type: 'user',
            },
            {
              title: 'Angelica Russo',
              type: 'user',
            },
          ],
        },
        {
          id: '112.62.155.111',
          title: 'Team D',
          type: 'team',
          color: '#ccd632',
          phases: [
            {
              phaseV: 1,
              title: 'Install software',
              priority: 'Highest',
              gate: 1,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 2,
              title: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 3,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 4,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 5,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
          ],
          route: {
            name: 'team-view',
            params: {
              unitId: 'Paris',
              teamId: 'team-d',
            },
          },
          children: [
            {
              title: 'Travis Roach',
              type: 'user',
            },
            {
              title: 'Ciaran Bradford',
              type: 'user',
            },
            {
              title: 'George Logan',
              type: 'user',
            },
            {
              title: 'Angelica Russo',
              type: 'user',
            },
          ],
        },
      ]
    },
    {
      id: '2.2.1',
      title: 'Sofia',
      type: 'unit',
      route: {
        name: 'unit-view',
        params: {
          unitId: 'Sofia',
        },
      },
      children: [
        {
          id: '82.12.65.91',
          title: 'Team E',
          type: 'team',
          color: '#53d632',
          phases: [
            {
              phaseV: 1,
              title: 'Install software',
              priority: 'Highest',
              gate: 1,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 2,
              title: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 3,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 4,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 5,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
          ],
          route: {
            name: 'team-view',
            params: {
              unitId: 'Sofia',
              teamId: 'team-e',
            },
          },
          children: [
            {
              title: 'Travis Roach',
              type: 'user',
            },
            {
              title: 'Ciaran Bradford',
              type: 'user',
            },
            {
              title: 'George Logan',
              type: 'user',
            },
            {
              title: 'Angelica Russo',
              type: 'user',
            },
          ],
        },
        {
          id: '282.122.65.901',
          title: 'Team F',
          type: 'team',
          color: '#6610F2',
          phases: [
            {
              phaseV: 1,
              hours: 0,
              title: 'Install software',
              priority: 'Highest',
              gate: 1,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [],
            },
            {
              phaseV: 2,
              hours: 0,
              title: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [],
            },
            {
              phaseV: 3,
              hours: 0,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [],
            },
            {
              phaseV: 4,
              hours: 16,
              // name: 'Develop control software...',
              priority: 'Highest',
              gate: 4,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskName: 'Activity Element 16',
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 4,
                },
                {
                  taskName: 'Activity Element 17',
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 4,
                },
              ],
            },
          ],
          route: {
            name: 'team-view',
            params: {
              unitId: 'Sofia',
              teamId: 'team-f',
            },
          },
          children: [
            {
              title: 'Travis Roach',
              type: 'user',
            },
            {
              title: 'Ciaran Bradford',
              type: 'user',
            },
            {
              title: 'George Logan',
              type: 'user',
            },
            {
              title: 'Angelica Russo',
              type: 'user',
            },
          ],
        },
        {
          id: '102.52.15.711',
          title: 'Team G',
          type: 'team',
          color: '#324ed6',
          phases: [
            {
              phaseV: 1,
              title: 'Install software',
              priority: 'Highest',
              gate: 1,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 2,
              title: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 3,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 4,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 5,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
          ],
          route: {
            name: 'team-view',
            params: {
              unitId: 'Sofia',
              teamId: 'team-g',
            },
          },
          children: [
            {
              title: 'Travis Roach',
              type: 'user',
            },
            {
              title: 'Ciaran Bradford',
              type: 'user',
            },
            {
              title: 'George Logan',
              type: 'user',
            },
            {
              title: 'Angelica Russo',
              type: 'user',
            },
          ],
        },
        {
          id: '92.52.165.701',
          title: 'Team H',
          type: 'team',
          color: '#d6328d',
          phases: [
            {
              phaseV: 1,
              title: 'Install software',
              priority: 'Highest',
              gate: 1,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 2,
              title: 'Develop control software',
              priority: 'Highest',
              gate: 2,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 3,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Lowest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 4,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
            {
              phaseV: 5,
              title: 'Develop control software...',
              priority: 'Highest',
              gate: 3,
              activityId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
              // title: 'Escavate foundations',
              description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
              effort: {
                load: 53,
                duration: 26,
                fte: 80
              },
              tasks: [
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
                {
                  taskId: `${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}.${parseInt(Math.random() * 255, 10)}`,
                  priority: 'Highest',
                  gate: 1,
                },
              ],
            },
          ],
          route: {
            name: 'team-view',
            params: {
              unitId: 'Sofia',
              teamId: 'team-h',
            },
          },
          children: [
            {
              title: 'Travis Roach',
              type: 'user',
            },
            {
              title: 'Ciaran Bradford',
              type: 'user',
            },
            {
              title: 'George Logan',
              type: 'user',
            },
            {
              title: 'Angelica Russo',
              type: 'user',
            },
          ],
        }
      ]
    }
  ],
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
    projectElementTeamData: [],
    projectElementPhaseData: [],
    // globalOperationData: {
    //   id: '1.1',
    //   title: 'Konatus Industries',
    //   resource: 'konatus',
    //   isOperation: true,
    //   type: 'organization',
    //   route: {
    //     name: 'portfolio-view',
    //   },
    //   children: ['']
    // },
    globalOrganizationData,
    chartXAxisData: ['', moment().format('YYYY-MM'), ''],
    chartSeriesData: [
      [null, parseInt(Math.random() * 400 + 1300, 10), null],
      [null, parseInt(Math.random() * 400 + 1300, 10), null],
      [null, parseInt(Math.random() * 400 + 1300, 10), null],
      [null, parseInt(Math.random() * 400 + 1300, 10), null],
      [1450, 1450, 1450],
      [1600, 1600, 1600],
      [1500, 1500, 1500],
    ],
    selectedWorkElement: null
  },
  mutations: {
    HIDE_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = false
    },
    OPEN_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = true
    },
    UPDATE_PROJECT_REPORTING_DATA() {
      // const data2Update = {}
      // state.projectReportingData = data2Update
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
      // const filteredTeamState = state.teamsState.map(t => {
      //   const newPhases = [data.merged]
      //   t.phases.forEach(t1 => {
      //     if (t1.activityId !== data.toMergeId1 && t1.activityId !== data.toMergeId2) {
      //       newPhases.push(t1)
      //     }
      //   })
      //   const tmp3 = { ...t, phases: newPhases }
      //   return tmp3
      // })
      // state.teamsState = filteredTeamState
      Vue.$toast.success('Merged Successfully!')
    },
    HANDLE_TEAM_DEMAND_UPDATE() {
      Vue.$toast.success('Updated Successfully!')
    },
    HANDLE_NAV_TEAM_SELECT(state, data) {
      state.demandTeamData = data
    },
    SELECT_ALL_PHASE_ACTS(state, n) {
      let isSelectedAll = true
      state.demandTeamData.phases.map(t => {
        if (t.phaseV === n) {
          t.tasks.map(t1 => {
            const b = { ...t1 }
            isSelectedAll = b.isSelected && isSelectedAll
            b.isSelected = true
            return null
          })
          return null
        }
        return null
      })
      const a = state.demandTeamData.phases.map(t => {
        if (t.phaseV === n) {
          const c = { ...t }
          const tasks = t.tasks.map(t1 => {
            const b = { ...t1 }
            isSelectedAll = b.isSelected && isSelectedAll
            b.isSelected = !isSelectedAll
            return b
          })
          c.tasks = tasks
          return c
        }
        return t
      })
      state.demandTeamData.phases = a
    },
    INSERT_NEW_TASK(state, data) {
      const { phaseV, task } = data
      const a = state.demandTeamData.phases.map(t => {
        if (t.phaseV === phaseV) {
          t.tasks.push(task)
          return t
        }
        return t
      })
      state.demandTeamData.phases = a
      Vue.$toast.success('Task inserted successfully.')
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
      }, 600)
    },
    TEAM_PHASE_SELECT_ALL(state, team) {
      console.log(state, team)
      // let allselected = true
      // team.phases.forEach(phase => {
      //   allselected = Boolean(phase.isSelected) && allselected
      // })
      // const phases = []
      // team.phases.forEach(phase => {
      //   const b = { ...phase }
      //   b.isSelected = !allselected
      //   phases.push(b)
      // })
      // const teamsState = []
      // state.teamsState.forEach(t => {
      //   const mapteam = t
      //   if (mapteam.id === team.id) {
      //     mapteam.phases = phases
      //   }
      //   teamsState.push(mapteam)
      // })
      // state.teamsState = teamsState
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
    WOEK_ELEMENT_CHECK(state, e) {
      if (e) state.selectedWorkElement = {}
      else state.selectedWorkElement = null
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
