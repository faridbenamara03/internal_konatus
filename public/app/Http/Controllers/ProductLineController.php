<?php

namespace App\Http\Controllers;

use App\Models\Product_Line;
use Illuminate\Http\Request;

class ProductLineController extends Controller
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
     * @param  \App\Models\Product_Line  $product_Line
     * @return \Illuminate\Http\Response
     */
    public function show(Product_Line $product_Line)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Product_Line  $product_Line
     * @return \Illuminate\Http\Response
     */
    public function edit(Product_Line $product_Line)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product_Line  $product_Line
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product_Line $product_Line)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product_Line  $product_Line
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product_Line $product_Line)
    {
        //
    }

    public function demand_team(Product_Line $product_Line)
    {
        $projectDemandTeamData = [
            "{
              id: '63d3d79802e5f6e2220b518f',
              title: 'Team A',
              parent: '63d3d79802e5f6e2220b519b',
              type: 'team',
              phases: [
                {
                  title: 'phase-1',
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
                  title: 'phase-2',
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
                  title: 'phase-3',
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
                  title: 'phase-4',
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
                  title: 'phase-5',
                  id: '63d3d79802e5f6e2220b5181',
                  projectId: '63d3d79802e5f6e2220b5175',
                  data: {
                    progress: 0,
                    start_date: '2022.11.04',
                    end_date: '2022.12.21',
                  },
                  elements: []
                },
              ]
            }",
            "{
              id: '63d3d79802e5f6e2220b5190',
              title: 'Team B',
              parent: '63d3d79802e5f6e2220b519b',
              type: 'team',
              phases: [
                {
                  title: 'phase-6',
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
                  title: 'phase-7',
                  id: '63d3d79802e5f6e2220b5183',
                  projectId: '63d3d79802e5f6e2220b5176',
                  data: {
                    progress: 0,
                    start_date: '2022.11.04',
                    end_date: '2022.12.21',
                  },
                  elements: []
                },
                {
                  title: 'phase-8',
                  id: '63d3d79802e5f6e2220b5184',
                  projectId: '63d3d79802e5f6e2220b5177',
                  data: {
                    progress: 0,
                    start_date: '2022.11.04',
                    end_date: '2022.12.21',
                  },
                  elements: []
                },
                {
                  title: 'phase-9',
                  id: '63d3d79802e5f6e2220b5185',
                  projectId: '63d3d79802e5f6e2220b5179',
                  data: {
                    progress: 0,
                    start_date: '2022.11.04',
                    end_date: '2022.12.21',
                  },
                  elements: []
                },
              ]
            }"
        ];
        return $projectDemandTeamData;
    }

    public function demand_phase(Product_Line $product_Line)
    {
        $projectDemandPhaseData = [
            "{
              title: 'phase-1',
              id: '63d3d79802e5f6e2220b517d',
              projectId: '63d3d79802e5f6e2220b5175',
              teams: [
                {
                  title: 'Team B',
                  activities: [
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
                  title: 'Team C',
                  activities: [
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
                  title: 'Team D',
                  activities: [
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
                  ]
                },
                {
                  title: 'Team E',
                  activities: [
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
                  ]
                },
                {
                  title: 'Team F',
                  activities: []
                },
              ]
            }",
            "{
              title: 'phase-2',
              id: '63d3d79802e5f6e2220b517e',
              projectId: '63d3d79802e5f6e2220b5175',
              teams: [
                {
                  title: 'Team B',
                  activities: [
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
                  ]
                },
                {
                  title: 'Team C',
                  activities: [
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
                  ]
                },
                {
                  title: 'Team D',
                  activities: [
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
                  ]
                },
                {
                  title: 'Team E',
                  activities: [
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
                  title: 'Team F',
                  activities: [
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
              ]
            }"
        ];
        return $projectDemandPhaseData;
    }

    public function report(Product_Line $product_Line)
    {
        $projectReportingData = [
            "{
              id: '63d3d79802e5f6e2220b516e',
              title: 'Consumer Robots',
              type: 'portfolio',
              children: [
                {
                  id: '63d3d79802e5f6e2220b5170',
                  title: 'Quadruped robot',
                  type: 'program',
                  start_date: '2023.1.18',
                  end_date: '2023.2.12',
                  start_date1: '2023.1.18',
                  end_date1: '2023.2.12',
                  start_date2: '2023.1.18',
                  end_date2: '2023.2.12',
                  start_date3: '2023.1.18',
                  end_date3: '2023.2.12',
                  progress: 60,
                  children: [
                    {
                      id: '63d3d79802e5f6e2220b5175',
                      title: 'New Format',
                      type: 'project',
                      progress: 0,
                      start_date: '2023.1.20',
                      end_date: '2023.2.10',
                      start_date1: '2023.1.20',
                      end_date1: '2023.2.10',
                    },
                    {
                      id: '63d3d79802e5f6e2220b5176',
                      title: 'Enhanced motricity',
                      type: 'project',
                      progress: 0,
                      start_date: '2023.1.20',
                      end_date: '2023.2.10',
                      start_date1: '2023.1.20',
                      end_date1: '2023.2.10',
                      start_date2: '2023.1.20',
                      end_date2: '2023.2.10',
                      start_date3: '2023.1.20',
                      end_date3: '2023.2.10',
                    },
                    {
                      id: '63d3d79802e5f6e2220b5177',
                      title: 'Enhanced autonomy',
                      type: 'project',
                      progress: 100,
                      start_date: '2023.1.20',
                      end_date: '2023.2.10',
                      start_date1: '2023.1.20',
                      end_date1: '2023.2.10',
                      start_date2: '2023.1.20',
                      end_date2: '2023.2.10',
                      start_date3: '2023.1.20',
                      end_date3: '2023.2.10',
                    },
                    {
                      id: '63d3d79802e5f6e2220b5178',
                      title: 'Dual sourcing for Quadruped',
                      type: 'project',
                      progress: 100,
                      start_date: '2023.1.20',
                      end_date: '2023.2.10',
                      start_date1: '2023.1.20',
                      end_date1: '2023.2.10',
                      start_date2: '2023.1.20',
                      end_date2: '2023.2.10',
                      start_date3: '2023.1.20',
                      end_date3: '2023.2.10',
                    },
                  ]
                },
                {
                  id: '63d3d79802e5f6e2220b5171',
                  title: 'Micro robot observation NBC',
                  type: 'program',
                  start_date: '2023.1.18',
                  end_date: '2023.2.12',
                  start_date1: '2023.1.18',
                  end_date1: '2023.2.12',
                  start_date2: '2023.1.18',
                  end_date2: '2023.2.12',
                  start_date3: '2023.1.18',
                  end_date3: '2023.2.12',
                  progress: 60,
                },
                {
                  id: '63d3d79802e5f6e2220b5172',
                  title: 'Handling robot',
                  type: 'program',
                  start_date: '2023.1.18',
                  end_date: '2023.2.12',
                  start_date1: '2023.1.18',
                  end_date1: '2023.2.12',
                  start_date2: '2023.1.18',
                  end_date2: '2023.2.12',
                  start_date3: '2023.1.18',
                  end_date3: '2023.2.12',
                  progress: 60,
                },
                {
                  id: '63d3d79802e5f6e2220b5173',
                  title: 'Power & programming station',
                  type: 'program',
                  start_date: '2023.1.18',
                  end_date: '2023.2.12',
                  start_date1: '2023.1.18',
                  end_date1: '2023.2.12',
                  start_date2: '2023.1.18',
                  end_date2: '2023.2.12',
                  start_date3: '2023.1.18',
                  end_date3: '2023.2.12',
                  progress: 60,
                },
              ]
            }",
        ];
        return $projectReportingData;

    }

    public function control(Product_Line $product_Line)
    {
        $projectControlData = [
            "{
              title: 'phase-1',
              id: '63d3d79802e5f6e2220b517d',
              projectId: '63d3d79802e5f6e2220b5175',
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
              title: 'phase-2',
              id: '63d3d79802e5f6e2220b517e',
              projectId: '63d3d79802e5f6e2220b5175',
              data: ['24/24', '24/24', '24/24', '24/24', '24/24', '24/24', '28/24'],
              assignee: [
                {
                  id: '63d3d79802e5f6e2220b5197',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Erik Walter',
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
                  title: 'Assen Oliveira',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
              ]
            }",
            "{
              title: 'phase-3',
              id: '63d3d79802e5f6e2220b517f',
              projectId: '63d3d79802e5f6e2220b5175',
              data: ['24/24', '24/24', '24/24', '24/24', '24/24', '24/24', '28/24'],
              assignee: [
                {
                  id: '63d3d79802e5f6e2220b5197',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Lone Wolf',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
                {
                  id: '63d3d79802e5f6e2220b5198',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Ilias Costa',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
                {
                  id: '63d3d79802e5f6e2220b5199',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Jake Williams',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
              ]
            }",
            "{
              title: 'phase-4',
              id: '63d3d79802e5f6e2220b5180',
              projectId: '63d3d79802e5f6e2220b5175',
              data: {
                progress: 0,
                start_date: '2022.11.04',
                end_date: '2022.12.21',
              },
              data: ['24/24', '24/24', '24/24', '24/24', '24/24', '24/24', '28/24'],
              assignee: [
                {
                  id: '63d3d79802e5f6e2220b5197',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Thomas Miller',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
                {
                  id: '63d3d79802e5f6e2220b5198',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Aden Schmidt',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
                {
                  id: '63d3d79802e5f6e2220b5199',
                  parent: '63d3d79802e5f6e2220b518f',
                  title: 'Hon Gonzalez',
                  type: 'user',
                  data: [8, 12, 14, 12, 12, 11, 9]
                },
              ]
            }",
        ];
        return $projectControlData;

    }
}
