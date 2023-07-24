<?php

namespace App\Http\Controllers;

use App\Models\Unit;
use Illuminate\Http\Request;

class UnitController extends Controller
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
     * @param  \App\Models\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function show(Unit $unit)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function edit(Unit $unit)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Unit $unit)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Unit  $unit
     * @return \Illuminate\Http\Response
     */
    public function destroy(Unit $unit)
    {
        //
    }

    public function demand(Unit $unit)
    {
        $unitDemandData = [
            "{
              id: '63d3d79802e5f6e2220b516e',
              title: 'Consumer Robots',
              type: 'portfolio',
              children: [
                {
                  id: '63d3d79802e5f6e2220b5170',
                  title: 'Quadruped robot',
                  type: 'program',
                  next_gate: '03/01/2022',
                  gate: 3, // for unit demand page
                  data: ['15', '31', '81', '104'], // for unit demand page
                  children: [
                    {
                      id: '63d3d79802e5f6e2220b5175',
                      title: 'New Format',
                      type: 'project',
                      next_gate: '03/01/2022',
                      gate: 3, // for unit demand page
                      data: ['15', '31', '81', '104'], // for unit demand page
                    },
                    {
                      id: '63d3d79802e5f6e2220b5176',
                      title: 'Enhanced motricity',
                      type: 'project',
                      next_gate: '03/01/2022',
                      gate: 3, // for unit demand page
                      data: ['15', '31', '81', '104'], // for unit demand page
                    },
                    {
                      id: '63d3d79802e5f6e2220b5177',
                      title: 'Enhanced autonomy',
                      type: 'project',
                      next_gate: '03/01/2022',
                      gate: 3, // for unit demand page
                      data: ['15', '31', '81', '104'], // for unit demand page
                    },
                    {
                      id: '63d3d79802e5f6e2220b5178',
                      title: 'Dual sourcing for Quadruped',
                      type: 'project',
                      next_gate: '03/01/2022',
                      gate: 3, // for unit demand page
                      data: ['15', '31', '81', '104'], // for unit demand page
                    },
                  ]
                },
                {
                  id: '63d3d79802e5f6e2220b5171',
                  title: 'Micro robot observation NBC',
                  type: 'program',
                  next_gate: '06/02/2022',
                  gate: 3, // for unit demand page
                  data: ['15', '31', '81', '104'], // for unit demand page
                },
                {
                  id: '63d3d79802e5f6e2220b5172',
                  title: 'Handling robot',
                  type: 'program',
                  next_gate: '06/02/2022',
                  gate: 3, // for unit demand page
                  data: ['15', '31', '81', '104'], // for unit demand page
                },
                {
                  id: '63d3d79802e5f6e2220b5173',
                  title: 'Power & programming station',
                  type: 'program',
                  next_gate: '06/02/2022',
                  gate: 3, // for unit demand page
                  data: ['15', '31', '81', '104'], // for unit demand page
                },
              ]
            }",
        ];
        return $unitDemandData;
    }

    public function reporting(Unit $unit)
    {
        $unitReportingData = [
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
        return $unitReportingData;

    }

    public function control(Unit $unit)
    {
        $unitControlData = [
            "{
              teamTitle: 'Team A',
              teamCapacity: ['100', '100', '100', '100', '0', '0', '75'],
              series: [
                {
                  name: 'Travis Roach',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Ciaran Bradford',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'George Logan',
                  data: [8, 8, 8, 8, null, null, 4],
                },
                {
                  name: 'Angelica Russo',
                  data: [8, 8, 8, 8, null, null, 4],
                },
              ],
            }",
            "{
              teamTitle: 'Team B',
              teamCapacity: ['100', '100', '100', '100', '0', '0', '75'],
              series: [
                {
                  name: 'Robert Garcia',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Hon Gonzalez',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Piren Lopez',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Aden Schmidt',
                  data: [8, 8, 8, 8, null, null, 8],
                },
              ],
            }",
            "{
              teamTitle: 'Team C',
              teamCapacity: ['100', '100', '100', '100', '0', '0', '75'],
              series: [
                {
                  name: 'Roman Weber',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Thomas Miller',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Tim Ruiz',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Jake Williams',
                  data: [8, 8, 8, 8, null, null, 8],
                },
              ],
            }",
            "{
              teamTitle: 'Team D',
              teamCapacity: ['100', '100', '100', '100', '0', '0', '75'],
              series: [
                {
                  name: 'Feed Silva',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Nuse Hansen',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Ilias Costa',
                  data: [8, 8, 8, 8, null, null, 8],
                },
                {
                  name: 'Albert Klein',
                  data: [8, 8, 8, 8, null, null, 8],
                },
              ],
            }",
        ];
        return $unitControlData;
    }
}
