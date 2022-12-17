export default [
  {
    path: '/portfolio/:portfolioId/program/:programId/project/:projectId',
    name: 'project-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },

  {
    path: '/portfolio/:portfolioId/program/:programId',
    name: 'program-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/program/:programId/demand-table',
    name: 'demand-table-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/program/:programId/demand-chart',
    name: 'demand-chart-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/program/:programId/reporting-cost',
    name: 'demand-reporting-cost',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/program/:programId/reporting-plan',
    name: 'demand-reporting-plan',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/program/:programId/control',
    name: 'demand-control',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },

  {
    path: '/portfolio/:portfolioId',
    name: 'portfolio-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/demand-table',
    name: 'portfolio-table-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/demand-chart',
    name: 'portfolio-chart-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/reporting-cost',
    name: 'portfolio-reporting-cost',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/reporting-plan',
    name: 'portfolio-reporting-plan',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/portfolio/:portfolioId/control',
    name: 'portfolio-control',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },

  {
    path: '/orgnization',
    name: 'orgnization-view',
    component: () => import('@/views/dashboard/orgnization/Orgnization.vue'),
  },
  {
    path: '/orgnization/team/:teamId',
    name: 'team-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
]
