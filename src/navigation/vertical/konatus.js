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
        children: [
          {
            title: 'Quadruped robot',
            type: 'program',
            children: [
              {
                title: 'New format',
                type: 'project',
                route: {
                  name: 'project-view',
                  params: {
                    portfolioId: 'consumer-robots',
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
    children: [
      {
        title: 'Team A',
        type: 'team',
        children: [
          {
            title: 'Travis Roach',
            type: 'team',
          },
          {
            title: 'Ciaran Bradford',
            type: 'team',
          },
          {
            title: 'George Logan',
            type: 'team',
          },
          {
            title: 'Angelica Russo',
            type: 'team',
          },
        ],
      },
      {
        title: 'Team B',
        type: 'team',
        children: [
          {
            title: 'Travis Roach',
            type: 'team',
          },
          {
            title: 'Ciaran Bradford',
            type: 'team',
          },
          {
            title: 'George Logan',
            type: 'team',
          },
          {
            title: 'Angelica Russo',
            type: 'team',
          },
        ],
      },
    ],
  },
]
