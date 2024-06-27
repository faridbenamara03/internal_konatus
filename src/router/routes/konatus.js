export default [
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/',
    name: 'project-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/demand-job',
    name: 'project-demand-job-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/demand-phase',
    name: 'project-demand-phase-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/reporting-cost',
    name: 'project-reporting-cost-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/reporting-plan',
    name: 'project-reporting-plan-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/control',
    name: 'project-control-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/subproject/:subprojectId',
    name: 'project-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/subproject/:subprojectId/demand-job',
    name: 'project-demand-job-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/subproject/:subprojectId/demand-phase',
    name: 'project-demand-phase-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/subproject/:subprojectId/reporting-cost',
    name: 'project-reporting-cost-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/subproject/:subprojectId/reporting-plan',
    name: 'project-reporting-plan-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/project/:projectId/subproject/:subprojectId/control',
    name: 'project-control-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/',
    name: 'program-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/demand-job',
    name: 'program-demand-job-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/demand-phase',
    name: 'program-demand-chart-view',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/reporting-cost',
    name: 'program-demand-reporting-cost',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/reporting-plan',
    name: 'program-demand-reporting-plan',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/program/:programId/control',
    name: 'program-demand-control',
    component: () => import('@/views/dashboard/project/Project.vue'),
  },

  {
    path: '/organization/:orgId/portfolio/:portfolioId',
    name: 'portfolio-view-with-id',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio',
    name: 'portfolio-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/demand-table',
    name: 'portfolio-table-view-with-id',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/demand-table',
    name: 'portfolio-table-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/demand-chart',
    name: 'portfolio-chart-view-with-id',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/demand-chart',
    name: 'portfolio-chart-view',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/reporting-cost',
    name: 'portfolio-reporting-cost-with-id',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/reporting-cost',
    name: 'portfolio-reporting-cost',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/reporting-plan',
    name: 'portfolio-reporting-plan-with-id',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/reporting-plan',
    name: 'portfolio-reporting-plan',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/:portfolioId/control',
    name: 'portfolio-control-with-id',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization/:orgId/portfolio/control',
    name: 'portfolio-control',
    component: () => import('@/views/dashboard/portfolio/Portfolio.vue'),
  },
  {
    path: '/organization',
    name: 'organization-view',
    // component: () => import('@/views/welcome.vue'),
  },

  {
    path: '/organization-unit',
    name: 'organization-unit-view',
    component: () => import('@/views/dashboard/organization/Organization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId',
    name: 'unit-view',
    component: () => import('@/views/dashboard/organization/Organization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/demand',
    name: 'unit-demand-view',
    component: () => import('@/views/dashboard/organization/Organization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/reporting-cost',
    name: 'unit-reporting-cost-view',
    component: () => import('@/views/dashboard/organization/Organization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/reporting-plan',
    name: 'unit-reporting-plan-view',
    component: () => import('@/views/dashboard/organization/Organization.vue'),
  },
  {
    path: '/organization-unit/unit/:unitId/control-table',
    name: 'unit-control-table-view',
    component: () => import('@/views/dashboard/organization/Organization.vue'),
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
  {
    path: '/organization-unit/job/:jobId',
    name: 'job-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/demand',
    name: 'job-demand-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/reporting-cost',
    name: 'job-reporting-cost-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/reporting-plan',
    name: 'job-reporting-plan-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/control-table',
    name: 'job-control-table-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/control-chart',
    name: 'job-control-chart-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/team/:teamId',
    name: 'job-team-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/team/:teamId/demand',
    name: 'job-team-demand-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/team/:teamId/reporting-cost',
    name: 'job-team-reporting-cost-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/team/:teamId/reporting-plan',
    name: 'job-team-reporting-plan-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/team/:teamId/control-table',
    name: 'job-team-control-table-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
  {
    path: '/organization-unit/job/:jobId/team/:teamId/control-chart',
    name: 'job-team-control-chart-view',
    component: () => import('@/views/dashboard/team/Team.vue'),
  },
]
