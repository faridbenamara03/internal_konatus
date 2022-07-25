export default [
  {
    search: true,
  },
  {
    title: 'Boston Dynamics',
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
      name: 'orgnization-view',
    },
    children: [
      {
        title: 'Team A',
        type: 'team',
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
    ],
  },
]
