<<<<<<< HEAD
export default [
  {
    search: true,
  },
  {
    title: 'Konatus Industries',
    resource: 'konatus',
    isOperation: true,
    type: 'root',
    children: [
      {
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
            title: 'Quadruped robot',
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
                title: 'New format',
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
                title: 'Enhanced motricity',
                type: 'project',
              },
              {
                title: 'Enhanced authono...',
                type: 'project',
              },
              {
                title: 'Dual sourcing for Quadruped',
                type: 'project',
              },
            ],
          },
          {
            title: 'Hardened quadruped ...',
            type: 'program',
          },
          {
            title: 'Handling robot',
            type: 'program',
          },
          {
            title: 'Power and programin...',
            type: 'program',
          },
        ],
      },
      {
        title: 'Military Robots',
        type: 'portfolio',
        children: [
          {
            title: 'Attacking robot',
            type: 'program',
            children: [
              {
                title: 'Rocket lancher',
                type: 'project',
              },
              {
                title: 'Enhanced motricity',
                type: 'project',
              },
              {
                title: 'Enhanced authono...',
                type: 'project',
              },
              {
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
    title: 'Organization Dynamics',
    resource: 'konatus',
    isOperation: false,
    type: 'root',
    route: {
      name: 'organization-view',
    },
    children: [
      {
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
        title: 'Team F',
        type: 'team',
        color: '#32d6bf',
        phases: [
          {
            phaseV: 1,
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '2.128.217.2.551',
            tasks: [
              {
                taskId: '11.228.17.12.155',
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
                taskId: '11.28.217.1.55',
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
                taskId: '11.228.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '12.28.117.1.55',
                priority: 'Highest',
                gate: 1,
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
=======
export default [
  {
    search: true,
  },
  {
    title: 'Konatus Industries',
    resource: 'konatus',
    isOperation: true,
    type: 'root',
    children: [
      {
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
            title: 'Quadruped robot',
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
                title: 'New format',
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
                title: 'Enhanced motricity',
                type: 'project',
              },
              {
                title: 'Enhanced authono...',
                type: 'project',
              },
              {
                title: 'Dual sourcing for Quadruped',
                type: 'project',
              },
            ],
          },
          {
            title: 'Hardened quadruped ...',
            type: 'program',
          },
          {
            title: 'Handling robot',
            type: 'program',
          },
          {
            title: 'Power and programin...',
            type: 'program',
          },
        ],
      },
      {
        title: 'Military Robots',
        type: 'portfolio',
        children: [
          {
            title: 'Attacking robot',
            type: 'program',
            children: [
              {
                title: 'Rocket lancher',
                type: 'project',
              },
              {
                title: 'Enhanced motricity',
                type: 'project',
              },
              {
                title: 'Enhanced authono...',
                type: 'project',
              },
              {
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
    title: 'Organization Dynamics',
    resource: 'konatus',
    isOperation: false,
    type: 'root',
    route: {
      name: 'organization-view',
    },
    children: [
      {
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
        title: 'Team F',
        type: 'team',
        color: '#32d6bf',
        phases: [
          {
            phaseV: 1,
            name: 'Install software',
            priority: 'Highest',
            gate: 1,
            activityId: '2.128.217.2.551',
            tasks: [
              {
                taskId: '11.228.17.12.155',
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
                taskId: '11.28.217.1.55',
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
                taskId: '11.228.17.1.55',
                priority: 'Highest',
                gate: 1,
              },
              {
                taskId: '1.28.16.1.53',
                priority: 'Lowest',
                gate: 1,
              },
              {
                taskId: '12.28.117.1.55',
                priority: 'Highest',
                gate: 1,
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
>>>>>>> aa85b2205c988043e6b68b5c6fbf1f71671e5d90
