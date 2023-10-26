export default [
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/project/:projectId',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/',
    name: 'project-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/project/:projectId/demand-team',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/demand-team',
    name: 'project-demand-team-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/project/:projectId/demand-phase',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/demand-phase',
    name: 'project-demand-phase-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/project/:projectId/reporting-cost',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/reporting-cost',
    name: 'project-reporting-cost-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/project/:projectId/reporting-plan',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/reporting-plan',
    name: 'project-reporting-plan-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/project/:projectId/control',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/control',
    name: 'project-control-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },

  {
    // path: '/operation/portfolio/:portfolioId/program/:programId',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/',
    name: 'program-view',
    component: () => import('@/views/dashboard/program/Program.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/demand-table',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/demand-table',
    name: 'program-demand-table-view',
    component: () => import('@/views/dashboard/program/Program.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/demand-chart',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/demand-chart',
    name: 'program-demand-chart-view',
    component: () => import('@/views/dashboard/program/Program.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/reporting-cost',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/reporting-cost',
    name: 'program-demand-reporting-cost',
    component: () => import('@/views/dashboard/program/Program.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/reporting-plan',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/reporting-plan',
    name: 'program-demand-reporting-plan',
    component: () => import('@/views/dashboard/program/Program.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/program/:programId/control',
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/control',
    name: 'program-demand-control',
    component: () => import('@/views/dashboard/program/Program.vue'),
  },

  {
    // path: '/operation/portfolio/:portfolioId',
    path: '/organization/:orgId/portfolio/:portfolioId',
    name: 'portfolio-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/demand-table',
    path: '/organization/:orgId/portfolio/:portfolioId/demand-table',
    name: 'portfolio-table-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/demand-chart',
    path: '/organization/:orgId/portfolio/:portfolioId/demand-chart',
    name: 'portfolio-chart-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/reporting-cost',
    path: '/organization/:orgId/portfolio/:portfolioId/reporting-cost',
    name: 'portfolio-reporting-cost',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/reporting-plan',
    path: '/organization/:orgId/portfolio/:portfolioId/reporting-plan',
    name: 'portfolio-reporting-plan',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    // path: '/operation/portfolio/:portfolioId/control',
    path: '/organization/:orgId/portfolio/:portfolioId/control',
    name: 'portfolio-control',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization',
    name: 'operation-view',
    // component: () => import('@/views/welcome.vue'),
  },

  {
    path: '/organization-unit',
    name: 'organization-view',
    // component: () => import('@/views/welcome.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId',
    name: 'unit-view',
    component: () => import('@/views/dashboard/orgnization/Orgnization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/demand',
    name: 'unit-demand-view',
    component: () => import('@/views/dashboard/orgnization/Orgnization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/reporting-cost',
    name: 'unit-reporting-cost-view',
    component: () => import('@/views/dashboard/orgnization/Orgnization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/reporting-plan',
    name: 'unit-reporting-plan-view',
    component: () => import('@/views/dashboard/orgnization/Orgnization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/control-table',
    name: 'unit-control-table-view',
    component: () => import('@/views/dashboard/orgnization/Orgnization.vue'),
  },

  {
    path: '/organization-unit/unit/:unitId/team/:teamId',
    name: 'team-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/team/:teamId/demand',
    name: 'team-demand-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/team/:teamId/reporting-cost',
    name: 'team-reporting-cost-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/team/:teamId/reporting-plan',
    name: 'team-reporting-plan-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/team/:teamId/control-table',
    name: 'team-control-table-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/team/:teamId/control-chart',
    name: 'team-control-chart-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
]
