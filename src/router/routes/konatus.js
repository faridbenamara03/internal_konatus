export default [
  {
    path: '/portfolio/:portfolioId/program/:programId/project/:projectId',
    name: 'project-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/portfolio/:portfolioId/program/:programId',
    name: 'program-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/portfolio/:portfolioId',
    name: 'portfolio-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
]
