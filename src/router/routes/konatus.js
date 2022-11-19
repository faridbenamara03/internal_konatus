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
    path: '/portfolio/:portfolioId',
    name: 'portfolio-view',
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
