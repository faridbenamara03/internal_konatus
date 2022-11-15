import Vue from "vue"

const gData = [
  {
    id: '1.1',
    title: 'Boston Dynamics',
    resource: 'konatus',
    isOperation: true,
    type: 'root',
    children: [
      {
        id: '1.1.1',
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
            id: '1.1.1.1',
            title: 'New Quadruped robot',
            type: 'program',

            priority: 'highest',
            budget: '10000',
            deadline: '06/01/2021',
            engaged: '1800',
            quoted: '2200',
            demand: '9200',
            realEstimated: '10100',
            authorised: '4500',
            spent: '1600',

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
                title: 'New format',

                priority: 'high',
                budget: '2500',
                deadline: '06/01/2021',
                engaged: '450',
                quoted: '550',
                demand: '2800',
                realEstimated: '5200',
                authorised: '2100',
                spent: '800',

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
                title: 'New Enhanced motricity',
                type: 'project',

                priority: 'highest',
                budget: '2500',
                deadline: '03/28/2021',
                engaged: '450',
                quoted: '550',
                demand: '2500',
                realEstimated: '1700',
                authorised: '600',
                spent: '400',
              },
              {
                id: '1.28.11.1.3',
                title: 'New Enhanced authonomy',
                type: 'project',

                priority: 'highest',
                budget: '2500',
                deadline: '06/01/2021',
                engaged: '450',
                quoted: '550',
                demand: '2400',
                realEstimated: '2000',
                authorised: '1000',
                spent: '300',
              },
              {
                id: '1.28.11.1.4',
                title: 'New Dual sourcing for Quadruped',
                type: 'project',

                priority: 'lowest',
                budget: '2500',
                deadline: '12/31/2021',
                engaged: '450',
                quoted: '550',
                demand: '1500',
                realEstimated: '1200',
                authorised: '800',
                spent: '100',
              },
            ],
          },
          {
            id: '1.28.11.2',
            title: 'New Hardened quadruped observation',
            type: 'program',

            priority: 'high',
            budget: '5000',
            deadline: '05/20/2018',
            engaged: '450',
            quoted: '550',
            demand: '1300',
            realEstimated: '1200',
            authorised: '1000',
            spent: '100',
          },
          {
            id: '1.28.11.3',
            title: 'Handling robot',
            type: 'program',

            priority: 'low',
            budget: '1200',
            deadline: '03/24/2018',
            engaged: '450',
            quoted: '550',
            demand: '1500',
            realEstimated: '1800',
            authorised: '900',
            spent: '100',
          },
          {
            id: '1.28.11.4',
            title: 'power and programing station',
            type: 'program',

            priority: 'lowest',
            budget: '2000',
            deadline: '12/03/2017',
            engaged: '450',
            quoted: '550',
            demand: '2100',
            realEstimated: '1600',
            authorised: '800',
            spent: '100',
          },
        ],
      },
      {
        id: '1.1.2',
        title: 'Military Robots',
        type: 'portfolio',
        children: [
          {
            id: '1.1.2.1',
            title: 'Attacking robot',
            type: 'program',
            children: [
              {
                id: '1.1.2.1.1',
                title: 'Rocket lancher',
                type: 'project',
              },
              {
                id: '1.1.2.1.2',
                title: 'Enhanced motricity',
                type: 'project',
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
  },
  {
    id: '1.2',
    title: 'Organization Dynamics',
    resource: 'konatus',
    isOperation: false,
    type: 'root',
    route: {
      name: 'orgnization-view',
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
    ],
  },
]

export default {
  namespaced: true,
  state: {
    projectReportingData: gData[0].children[0].children[0],
    teamsstate: gData[1].children,
    globalData: gData,
    demandTeamData: {},
    activityDetailModalOpen: false,
    selectedNavId: '',
  },
  mutations: {
    HIDE_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = false
    },
    OPEN_ACTIVITY_DETAIL_MODAL(state) {
      state.activityDetailModalOpen = true
    },
    HANDLE_UPDATE(state) {
      const data = []
      state.teamsstate = data
    },
    UPDATE_PROJECT_REPORTING_DATA(state) {
      const data2Update = {
        title: 'New Quadruped robot',
        children: [
          {
            title: 'New format',
            progress: 0,
            start_date: '2022.11.'.concat(parseInt(Math.random() * 3 + 1, 10)),
            end_date: '2022.12.26',
            id: '1.28.11',
            sub_project: [
              {
                id: '1.28.11.1.1',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 8 + 16, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 20 + 1, 10)),
                }
              },
              {
                id: '1.28.11.1.2',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 4 + 1, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 5 + 1, 10)),
                }
              },
              {
                id: '1.28.11.1.3',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 5 + 1, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 7 + 14, 10)),
                }
              },
              {
                id: '1.28.11.1.4',
                data: {}
              },
              {
                id: '1.28.11.1.5',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 10 + 2, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 15 + 10, 10)),
                }
              },
              {
                id: '1.28.11.1.6',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 4 + 1, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 20 + 6, 10)),
                }
              },
              {
                id: '1.28.11.1.7',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 2 + 12, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 10 + 16, 10)),
                }
              },
              {
                id: '1.28.11.1.8',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 10 + 1, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 10 + 14, 10)),
                }
              },
              {
                id: '1.28.11.1.9',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 9 + 4, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 10 + 16, 10)),
                }
              },
              {
                id: '1.28.11.1.10',
                data: {
                  progress: 0,
                  start_date: '2022.11.'.concat(parseInt(Math.random() * 4 + 4, 10)),
                  end_date: '2022.12.'.concat(parseInt(Math.random() * 10 + 14, 10)),
                }
              },
            ]
          },
          {
            title: 'New Enhanced motricity',
            type: 'project',

            priority: 'highest',
            budget: '240',
            deadline: '03/28/2021',
            engaged: '450',
            quoted: '550',
          },
          {
            title: 'New Enhanced authonomy',
            type: 'project',

            priority: 'highest',
            budget: '350',
            deadline: '06/01/2021',
            engaged: '450',
            quoted: '550',
          },
          {
            title: 'New Dual sourcing for Quadruped',
            type: 'project',

            priority: 'lowest',
            budget: '150',
            deadline: '12/31/2021',
            engaged: '450',
            quoted: '550'
          },
        ]
      }
      state.projectReportingData = data2Update
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
      state.teamsstate.forEach((t, i) => {
        if (t.title === data.teamTitle) index = i
      })
      const sate = { ...state.teamsstate[index] }
      const newPhases = []
      sate.phases.forEach(t => {
        if (t.activityId === data.phase.activityId) {
          newPhases.push(data.newA1, data.newA2)
        } else {
          newPhases.push(t)
        }
      })
      state.teamsstate[index].phases = newPhases
      Vue.$toast.success('Splitted Successfully!')
    },
    HANDLE_ACTIVITY_MERGE(state, data) {
      let index = -1
      state.teamsstate.forEach((t, i) => {
        if (t.title === data.teamTitle) index = i
      })
      const sate = { ...state.teamsstate[index] }
      const newPhases = [data.merged]
      sate.phases.forEach(t => {
        if (t.activityId !== data.toMergeId1 && t.activityId !== data.toMergeId2) {
          newPhases.push(t)
        }
      })
      state.teamsstate[index].phases = newPhases
      // const filteredTeamState = state.teamsstate.map(t => {
      //   const newPhases = [data.merged]
      //   t.phases.forEach(t1 => {
      //     if (t1.activityId !== data.toMergeId1 && t1.activityId !== data.toMergeId2) {
      //       newPhases.push(t1)
      //     }
      //   })
      //   const tmp3 = { ...t, phases: newPhases }
      //   return tmp3
      // })
      // state.teamsstate = filteredTeamState
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
                  child_title: 'New Format',
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
      let allselected = true
      team.phases.forEach(phase => {
        allselected = Boolean(phase.isSelected) && allselected
      })
      const phases = []
      team.phases.forEach(phase => {
        const b = { ...phase }
        b.isSelected = !allselected
        phases.push(b)
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
    SAVE_SELECTED_NAV_ID(state, id) {
      console.info('11232', state.selectedNavId)
      state.selectedNavId = id
    }
  },
  actions: {},
}
