<?php

namespace App\Http\Controllers;

use App\Models\Program_Backlog;
use Illuminate\Http\Request;

class ProgramBacklogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Program_Backlog  $program_Backlog
     * @return \Illuminate\Http\Response
     */
    public function show(Program_Backlog $program_Backlog)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Program_Backlog  $program_Backlog
     * @return \Illuminate\Http\Response
     */
    public function edit(Program_Backlog $program_Backlog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Program_Backlog  $program_Backlog
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Program_Backlog $program_Backlog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Program_Backlog  $program_Backlog
     * @return \Illuminate\Http\Response
     */
    public function destroy(Program_Backlog $program_Backlog)
    {
        //
    }

    public function demand(Program_Backlog $program_Backlog)
    {
        $programData = "{
            id: '63d3d79802e5f6e2220b5170',
            title: 'Quadruped robot',
            parent: '63d3d79802e5f6e2220b516e',
            type: 'program',
            priority: 'Highest',
            budget: '91001',
            deadline: '06/01/2023',
            engaged: '21800',
            quote: '89000',
            demand: '19200',
            realEstimated: '10100',
            authorised: '14500',
            spent: '11600',
            value: '331',
            next_gate: '03/01/2022',
            gate: 3,
            children: [
              {
                id: '63d3d79802e5f6e2220b5175',
                title: 'New Format',
                parent: '63d3d79802e5f6e2220b5170',
                type: 'project',
                priority: 'High',
                budget: '350000',
                deadline: '06/01/2021',
                engaged: '22450',
                quote: '61900',
                demand: '91800',
                realEstimated: '235200',
                authorised: '232100',
                spent: '41800',
                value: '64',
                next_gate: '03/01/2022',
                progress: 64,
                start_date: '2022.11.6',
                end_date: '2022.12.26',
                phases: [
                  {
                    id: '63d3d79802e5f6e2220b517d',
                    projectId: '63d3d79802e5f6e2220b5175',
                    data: {
                      progress: 0,
                      start_date: '2022.11.04',
                      end_date: '2022.12.21',
                    },
                    elements: [
                      {
                        activityId: `63d3d79802e5f6e2220b5186`,
                        title: 'Install software',
                        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
                        priority: 'Highest',
                        gate: 1,
                        assigned: '63d3d79802e5f6e2220b518f',
                        effort: {
                          load: 53,
                          duration: 26,
                          fte: 80
                        }
                      },
                      {
                        activityId: '63d3d79802e5f6e2220b5187',
                        title: 'Develop control software',
                        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
                        priority: 'Highest',
                        gate: 2,
                        assigned: '63d3d79802e5f6e2220b518f',
                        effort: {
                          load: 53,
                          duration: 26,
                          fte: 80
                        },
                      },
                      {
                        activityId: `63d3d79802e5f6e2220b5188`,
                        title: 'Debugging',
                        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
                        priority: 'Highest',
                        gate: 1,
                        assigned: '63d3d79802e5f6e2220b518f',
                        effort: {
                          load: 53,
                          duration: 26,
                          fte: 80
                        },
                      },
                    ]
                  },
                  {
                    id: '63d3d79802e5f6e2220b517e',
                    projectId: '63d3d79802e5f6e2220b5175',
                    data: {
                      progress: 0,
                      start_date: '2022.11.04',
                      end_date: '2022.12.21',
                    },
                    elements: [
                      {
                        activityId: `63d3d79802e5f6e2220b5189`,
                        title: 'Electricity market AI',
                        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
                        priority: 'Highest',
                        gate: 1,
                        assigned: '63d3d79802e5f6e2220b518f',
                        effort: {
                          load: 53,
                          duration: 26,
                          fte: 80
                        },
                      },
                      {
                        activityId: `63d3d79802e5f6e2220b518a`,
                        title: 'Improve generator component',
                        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
                        priority: 'Highest',
                        gate: 2,
                        assigned: '63d3d79802e5f6e2220b5190',
                        effort: {
                          load: 53,
                          duration: 26,
                          fte: 80
                        },
                      },
                    ]
                  },
                  {
                    id: '63d3d79802e5f6e2220b517f',
                    projectId: '63d3d79802e5f6e2220b5175',
                    data: {
                      progress: 0,
                      start_date: '2022.11.04',
                      end_date: '2022.12.21',
                    },
                    elements: []
                  },
                  {
                    id: '63d3d79802e5f6e2220b5180',
                    projectId: '63d3d79802e5f6e2220b5175',
                    data: {
                      progress: 0,
                      start_date: '2022.11.04',
                      end_date: '2022.12.21',
                    },
                    elements: [
                      {
                        activityId: `63d3d79802e5f6e2220b518b`,
                        title: 'Electricity market AI II',
                        priority: 'Highest',
                        gate: 2,
                        description: 'Set up foundations with dimmentiosn 30cm by 50cm.',
                        effort: {
                          load: 53,
                          duration: 26,
                          fte: 80
                        },
                      }
                    ]
                  },
                  {
                    id: '63d3d79802e5f6e2220b5181',
                    projectId: '63d3d79802e5f6e2220b5175',
                    data: {
                      progress: 0,
                      start_date: '2022.11.04',
                      end_date: '2022.12.21',
                    },
                    elements: []
                  },
                ],
              },
              {
                id: '63d3d79802e5f6e2220b5176',
                title: 'Enhanced motricity',
                parent: '63d3d79802e5f6e2220b5170',
                type: 'project',
                priority: 'Highest',
                budget: '82000',
                deadline: '03/28/2021',
                engaged: '46450',
                quote: '54900',
                demand: '98500',
                realEstimated: '431700',
                authorised: '39600',
                spent: '61400',
                next_gate: '06/02/2022',
                value: '84',
                phases: [
                  {
                    id: '63d3d79802e5f6e2220b5182',
                    projectId: '63d3d79802e5f6e2220b5176',
                    data: {
                      progress: 0,
                      start_date: '2022.11.04',
                      end_date: '2022.12.21',
                    },
                    elements: []
                  },
                  {
                    id: '63d3d79802e5f6e2220b5183',
                    projectId: '63d3d79802e5f6e2220b5176',
                    data: {
                      progress: 0,
                      start_date: '2022.11.04',
                      end_date: '2022.12.21',
                    },
                    elements: []
                  },
                ]
              },
              {
                id: '63d3d79802e5f6e2220b5177',
                title: 'Enhanced autonomy',
                parent: '63d3d79802e5f6e2220b5170',
                type: 'project',
                priority: 'Highest',
                budget: '98000',
                deadline: '06/01/2021',
                engaged: '450',
                quote: '45900',
                demand: '72400',
                realEstimated: '82000',
                authorised: '31000',
                spent: '21300',
                next_gate: '07/01/2022',
                value: '31',
                phases: [
                  {
                    id: '63d3d79802e5f6e2220b5184',
                    projectId: '63d3d79802e5f6e2220b5177',
                    data: {
                      progress: 0,
                      start_date: '2022.11.04',
                      end_date: '2022.12.21',
                    },
                    elements: []
                  },
                ]
              },
              {
                id: '63d3d79802e5f6e2220b5178',
                title: 'Dual sourcing for Quadruped',
                parent: '63d3d79802e5f6e2220b5170',
                type: 'project',
                priority: 'Lowest',
                budget: '80000',
                deadline: '12/31/2021',
                engaged: '450',
                quote: '41550',
                demand: '91500',
                realEstimated: '211200',
                authorised: '18800',
                spent: '31100',
                value: '3',
                next_gate: '08/02/2022',
                phases: []
              },
            ]
          }";
          return $programData;


    }

    public function control(Program_Backlog $program_Backlog)
    {
        $programControlData = [
            "{
              id: '63d3d79802e5f6e2220b5175',
              title: 'New Format',
              parent: '63d3d79802e5f6e2220b5170',
              type: 'project',
              priority: 'High',
              budget: '350000',
              deadline: '06/01/2021',
              engaged: '22450',
              quote: '61900',
              demand: '91800',
              realEstimated: '235200',
              authorised: '232100',
              spent: '41800',
              value: '64',
              next_gate: '03/01/2022',
              data: ['24/24', '24/24', '24/24', '24/24', '24/24', '24/24', '28/24'],
              assignee: [
                {
                  id: '63d3d79802e5f6e2220b5197',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Travis Roach',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
                {
                  id: '63d3d79802e5f6e2220b5198',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Ciaran Bradford',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
                {
                  id: '63d3d79802e5f6e2220b5199',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'George Logan',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
              ]
            }",
            "{
              id: '63d3d79802e5f6e2220b5176',
              title: 'Enhanced motricity',
              parent: '63d3d79802e5f6e2220b5170',
              type: 'project',
              priority: 'Highest',
              budget: '82000',
              deadline: '03/28/2021',
              engaged: '46450',
              quote: '54900',
              demand: '98500',
              realEstimated: '431700',
              authorised: '39600',
              spent: '61400',
              next_gate: '06/02/2022',
              value: '84',
              assignee: [
                {
                  id: '63d3d79802e5f6e2220b519d',
                  parent: '63d3d79802e5f6e2220b5190',
                  title: 'Robert Garcia',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
              ]
            }",
            "{
              id: '63d3d79802e5f6e2220b5177',
              title: 'Enhanced autonomy',
              parent: '63d3d79802e5f6e2220b5170',
              type: 'project',
              priority: 'Highest',
              budget: '98000',
              deadline: '06/01/2021',
              engaged: '450',
              quote: '45900',
              demand: '72400',
              realEstimated: '82000',
              authorised: '31000',
              spent: '21300',
              next_gate: '07/01/2022',
              value: '31',
              assignee: [
                {
                  id: '63d3d79802e5f6e2220b519f',
                  parent: '63d3d79802e5f6e2220b5190',
                  title: 'Piren Lopez',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
                {
                  id: '63d3d79802e5f6e2220b51a0',
                  parent: '63d3d79802e5f6e2220b5190',
                  title: 'Aden Schmidt',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
              ]
            }",
            "{
              id: '63d3d79802e5f6e2220b5178',
              title: 'Dual sourcing for Quadruped',
              parent: '63d3d79802e5f6e2220b5170',
              type: 'project',
              priority: 'Lowest',
              budget: '80000',
              deadline: '12/31/2021',
              engaged: '450',
              quote: '41550',
              demand: '91500',
              realEstimated: '211200',
              authorised: '18800',
              spent: '31100',
              value: '3',
              next_gate: '08/02/2022',
            }",
        ];
        return $programControlData;
    }

    public function reporting(Program_Backlog $program_Backlog)
    {
        $programReportingData = [
            "{
              id: '63d3d79802e5f6e2220b5170',
              title: 'Quadruped robot',
              parent: '63d3d79802e5f6e2220b516e',
              type: 'program',
              priority: 'Highest',
              budget: '91001',
              deadline: '06/01/2023',
              engaged: '21800',
              quote: '89000',
              demand: '19200',
              realEstimated: '10100',
              authorised: '14500',
              spent: '11600',
              value: '331',
              next_gate: '03/01/2022',
              gate: 3,
              children: [
                {
                  id: '63d3d79802e5f6e2220b5175',
                  title: 'New Format',
                  parent: '63d3d79802e5f6e2220b5170',
                  type: 'project',
                  priority: 'High',
                  budget: '350000',
                  deadline: '06/01/2021',
                  engaged: '22450',
                  quote: '61900',
                  demand: '91800',
                  realEstimated: '235200',
                  authorised: '232100',
                  spent: '41800',
                  value: '64',
                  next_gate: '03/01/2022',
                  progress: 64,
                  start_date: '2022.11.6',
                  end_date: '2022.12.26',
                },
                {
                  id: '63d3d79802e5f6e2220b5176',
                  title: 'Enhanced motricity',
                  parent: '63d3d79802e5f6e2220b5170',
                  type: 'project',
                  priority: 'Highest',
                  budget: '82000',
                  deadline: '03/28/2021',
                  engaged: '46450',
                  quote: '54900',
                  demand: '98500',
                  realEstimated: '431700',
                  authorised: '39600',
                  spent: '61400',
                  next_gate: '06/02/2022',
                  value: '84',
                },
                {
                  id: '63d3d79802e5f6e2220b5177',
                  title: 'Enhanced autonomy',
                  parent: '63d3d79802e5f6e2220b5170',
                  type: 'project',
                  priority: 'Highest',
                  budget: '98000',
                  deadline: '06/01/2021',
                  engaged: '450',
                  quote: '45900',
                  demand: '72400',
                  realEstimated: '82000',
                  authorised: '31000',
                  spent: '21300',
                  next_gate: '07/01/2022',
                  value: '31',
                },
                {
                  id: '63d3d79802e5f6e2220b5178',
                  title: 'Dual sourcing for Quadruped',
                  parent: '63d3d79802e5f6e2220b5170',
                  type: 'project',
                  priority: 'Lowest',
                  budget: '80000',
                  deadline: '12/31/2021',
                  engaged: '450',
                  quote: '41550',
                  demand: '91500',
                  realEstimated: '211200',
                  authorised: '18800',
                  spent: '31100',
                  value: '3',
                  next_gate: '08/02/2022',
                },
              ]
            },
          "];
        return $programReportingData;
    }
}
