export default [
  {
    path: '/portfolio/:portfolioId/project/:projectId',
    name: 'project-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
]
