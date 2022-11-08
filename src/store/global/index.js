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
            budget: '1100',
            deadline: '06/01/2021',
            engaged: '450',
            quoted: '550',

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
                budget: '350',
                deadline: '06/01/2021',
                engaged: '450',
                quoted: '550',

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
                budget: '240',
                deadline: '03/28/2021',
                engaged: '450',
                quoted: '550',
              },
              {
                id: '1.28.11.1.3',
                title: 'New Enhanced authonomy',
                type: 'project',

                priority: 'highest',
                budget: '350',
                deadline: '06/01/2021',
                engaged: '450',
                quoted: '550',
              },
              {
                id: '1.28.11.1.4',
                title: 'New Dual sourcing for Quadruped',
                type: 'project',

                priority: 'lowest',
                budget: '150',
                deadline: '12/31/2021',
                engaged: '450',
                quoted: '550'
              },
            ],
          },
          {
            id: '1.28.11.2',
            title: 'New Hardened quadruped observation',
            type: 'program',

            priority: 'high',
            budget: '13633.69',
            deadline: '05/20/2018',
            engaged: '450',
            quoted: '550',
          },
          {
            id: '1.28.11.3',
            title: 'Handling robot',
            type: 'program',

            priority: 'low',
            budget: '13076.28',
            deadline: '03/24/2018',
            engaged: '450',
            quoted: '550',
          },
          {
            id: '1.28.11.4',
            title: 'power and programing station',
            type: 'program',

            priority: 'lowest',
            budget: '12336.17',
            deadline: '12/03/2017',
            engaged: '450',
            quoted: '550',
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
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '1.28.17.1.55',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
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
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '1.28.17.1.55',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [
              {
                taskId: '1.28.17.2.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.2.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.3.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.17.3.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 4,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.4.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.4.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.4.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 5,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.16.5.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.5.55',
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
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '1.28.17.1.55',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 4,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
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
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '1.22.18.1.55',
            tasks: [
              {
                taskId: '1.22.18.1.57',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.22.18.1.59',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.18.1.515',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.18.1.155',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 4,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.20.1.50',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.20.1.51',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 5,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.218.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.218.17.1.56',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.218.17.1.57',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.218.17.1.58',
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
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '1.28.19.1.515',
            tasks: [
              {
                taskId: '1.28.19.1.525',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.19.1.535',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [
              {
                taskId: '1.128.17.1.155',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.21.1.515',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.21.1.525',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 4,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 5,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
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
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '2.128.217.2.551',
            tasks: [],
          },
          {
            phaseV: 2,
            hours: 0,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [],
          },
          {
            phaseV: 3,
            hours: 0,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [],
          },
          {
            phaseV: 4,
            hours: 16,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 4,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskName: 'Activity Element 16',
                taskId: '2.29.18.1.16',
                priority: 'Highest',
                gate: 4,
              },
              {
                taskName: 'Activity Element 17',
                taskId: '2.29.18.1.17',
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
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '12.281.127.11.55',
            tasks: [
              {
                taskId: '31.228.117.1.155',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [
              {
                taskId: '13.281.17.21.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 4,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '21.28.127.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 5,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '1.28.17.1.55',
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
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '10.28.117.11.55',
            tasks: [
              {
                taskId: '1.28.17.1.51',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '11.28.137.21.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 2,
            name: 'Develop control software',
            priority: 'Highest',
            gate: 2,
            activityId: '1.28.17.1.120',
            tasks: [
              {
                taskId: '11.28.317.1.515',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 3,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '11.28.127.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '1.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 4,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '10.28.117.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '10.28.127.1.55',
                priority: 'Highest',
                gate: 1,
              },
            ],
          },
          {
            phaseV: 5,
            name: 'Develop control software...',
            priority: 'Highest',
            gate: 3,
            activityId: '1.28.17.1.126',
            tasks: [
              {
                taskId: '10.28.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '10.28.17.1.55',
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
    globalData: gData
  },
  mutations: {
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
    }
  },
  actions: {},
}
