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
    function randomTen($val1, $val2) {
        return intval(rand(0, $val1 - 1)) + $val2;
    }

    public function demand(Unit $unit)
    {
        $unitDemandData =
            "{
                \"id\": \"consumer-robots-portfolio\",
                \"title\": \"Consumer Robots\",
                \"type\": \"portfolio\",
                \"children\": [
                {
                    \"id\": \"quadruped-robot-program\",
                    \"title\": \"Quadruped robot\",
                    \"type\": \"program\",
                    \"next_gate\": \"03/01/2022\",
                    \"gate\": 3,
                    \"data\": [\"15\", \"31\", \"81\", \"104\", \"0\", \"2\", \"13\", \"41\"],
                    \"children\": [
                    {
                        \"id\": \"new-format-project\",
                        \"title\": \"New Format\",
                        \"type\": \"project\",
                        \"next_gate\": \"03/01/2022\",
                        \"gate\": 3,
                        \"data\": [\"15\", \"31\", \"81\", \"104\", \"0\", \"2\", \"13\", \"41\"]
                    },
                    {
                        \"id\": \"enhanced-motricity-project\",
                        \"title\": \"Enhanced motricity\",
                        \"type\": \"project\",
                        \"next_gate\": \"03/01/2022\",
                        \"gate\": 3,
                        \"data\": [\"15\", \"31\", \"81\", \"104\", \"0\", \"2\", \"13\", \"41\"]
                    },
                    {
                        \"id\": \"enhanced-autonomy-project\",
                        \"title\": \"Enhanced autonomy\",
                        \"type\": \"project\",
                        \"next_gate\": \"03/01/2022\",
                        \"gate\": 3,
                        \"data\": [\"15\", \"31\", \"81\", \"104\", \"0\", \"2\", \"13\", \"41\"]
                    },
                    {
                        \"id\": \"dual-sourcing-for-quadruped-project\",
                        \"title\": \"Dual sourcing for Quadruped\",
                        \"type\": \"project\",
                        \"next_gate\": \"03/01/2022\",
                        \"gate\": 3,
                        \"data\": [\"15\", \"31\", \"81\", \"104\", \"0\", \"2\", \"13\", \"41\"]
                    }
                  ]
                },
                {
                    \"id\": \"micro-robot-observation-nbc-program\",
                    \"title\": \"Micro robot observation NBC\",
                    \"type\": \"program\",
                    \"next_gate\": \"06/02/2022\",
                    \"gate\": 3,
                    \"data\": [\"15\", \"31\", \"81\", \"104\", \"0\", \"2\", \"13\", \"41\"]
                },
                {
                    \"id\": \"handling-robot-program\",
                    \"title\": \"Handling robot\",
                    \"type\": \"program\",
                    \"next_gate\": \"06/02/2022\",
                    \"gate\": 3,
                    \"data\": [\"15\", \"31\", \"81\", \"104\", \"0\", \"2\", \"13\", \"41\"]
                },
                {
                    \"id\": \"power-&-programming-station-program\",
                    \"title\": \"Power & programming station\",
                    \"type\": \"program\",
                    \"next_gate\": \"06/02/2022\",
                    \"gate\": 3,
                    \"data\": [\"15\", \"31\", \"81\", \"104\", \"0\", \"2\", \"13\", \"41\"]
                }
              ]
            }";
        return $unitDemandData;
    }

    public function reporting(Unit $unit)
    {

        $unitReportingData =
            "{
                \"id\": \"1\",
                \"title\": \"Consumer Robots\",
                \"type\": \"portfolio\",
                \"assigned\": [\"Team A\", \"Team B\", \"Team C\", \"Team D\"],
                \"children\": [
                {
                    \"id\": \"3\",
                    \"title\": \"Quadruped robot\",
                    \"type\": \"program\",
                    \"assigned\": [\"Team A\", \"Team B\", \"Team C\"],
                    \"start_date\": \"2023.1.18\",
                    \"end_date\": \"2023.2.12\",
                    \"start_date1\": \"2023.1.18\",
                    \"end_date1\": \"2023.2.12\",
                    \"start_date2\": \"2023.1.18\",
                    \"end_date2\": \"2023.2.12\",
                    \"start_date3\": \"2023.1.18\",
                    \"end_date3\": \"2023.2.12\",
                    \"progress\": 60,
                    \"children\": [
                    {
                        \"id\": \"8\",
                        \"title\": \"New Format\",
                        \"assigned\": [\"Team A\", \"Team B\"],
                        \"type\": \"project\",
                        \"progress\": 0,
                        \"start_date\": \"2023.1.20\",
                        \"end_date\": \"2023.2.10\",
                        \"start_date1\": \"2023.1.20\",
                        \"end_date1\": \"2023.2.10\",
                        \"phases\": [
                            {
                                \"id\": \"phase-1\",
                                \"projectId\": \"8\",
                                \"assigned\": [\"Team A\"],
                                \"progress\": 0
                            },
                            {
                                \"id\": \"phase-2\",
                                \"projectId\": \"8\",
                                \"assigned\": [\"Team A\"],
                                \"progress\": 0
                            },
                            {
                                \"id\": \"phase-3\",
                                \"projectId\": \"8\",
                                \"assigned\": [\"Team B\"],
                                \"progress\": 0
                            },
                            {
                                \"id\": \"phase-4\",
                                \"assigned\": [\"Team B\"],
                                \"projectId\": \"8\",
                                \"progress\": 0
                            }
                        ]
                    },
                    {
                        \"id\": \"9\",
                        \"title\": \"Enhanced motricity\",
                        \"assigned\": [\"Team A\", \"Team C\"],
                        \"type\": \"project\",
                        \"progress\": 0,
                        \"start_date\": \"2023.1.20\",
                        \"end_date\": \"2023.2.10\",
                        \"start_date1\": \"2023.1.20\",
                        \"end_date1\": \"2023.2.10\",
                        \"start_date2\": \"2023.1.20\",
                        \"end_date2\": \"2023.2.10\",
                        \"start_date3\": \"2023.1.20\",
                        \"end_date3\": \"2023.2.10\",
                        \"phases\": [
                            {
                                \"id\": \"phase-6\",
                                \"projectId\": \"9\",
                                \"assigned\": [\"Team A\"],
                                \"progress\": 0
                            },
                            {
                                \"id\": \"phase-7\",
                                \"projectId\": \"9\",
                                \"assigned\": [\"Team C\"],
                                \"progress\": 0
                            }
                        ]
                    },
                    {
                        \"id\": \"10\",
                        \"title\": \"Enhanced autonomy\",
                        \"assigned\": [\"Team B\"],
                        \"type\": \"project\",
                        \"progress\": 100,
                        \"start_date\": \"2023.1.20\",
                        \"end_date\": \"2023.2.10\",
                        \"start_date1\": \"2023.1.20\",
                        \"end_date1\": \"2023.2.10\",
                        \"start_date2\": \"2023.1.20\",
                        \"end_date2\": \"2023.2.10\",
                        \"start_date3\": \"2023.1.20\",
                        \"end_date3\": \"2023.2.10\"
                    },
                    {
                        \"id\": \"11\",
                        \"title\": \"Dual sourcing for Quadruped\",
                        \"type\": \"project\",
                        \"progress\": 100,
                        \"assigned\": [\"Team C\"],
                        \"start_date\": \"2023.1.20\",
                        \"end_date\": \"2023.2.10\",
                        \"start_date1\": \"2023.1.20\",
                        \"end_date1\": \"2023.2.10\",
                        \"start_date2\": \"2023.1.20\",
                        \"end_date2\": \"2023.2.10\",
                        \"start_date3\": \"2023.1.20\",
                        \"end_date3\": \"2023.2.10\"
                    }
                  ]
                },
                {
                    \"id\": \"4\",
                    \"title\": \"Micro robot observation NBC\",
                    \"assigned\": [\"Team B\", \"Team C\", \"Team D\"],
                    \"type\": \"program\",
                    \"start_date\": \"2023.1.18\",
                    \"end_date\": \"2023.2.12\",
                    \"start_date1\": \"2023.1.18\",
                    \"end_date1\": \"2023.2.12\",
                    \"start_date2\": \"2023.1.18\",
                    \"end_date2\": \"2023.2.12\",
                    \"start_date3\": \"2023.1.18\",
                    \"end_date3\": \"2023.2.12\",
                    \"progress\": 60
                },
                {
                    \"id\": \"5\",
                    \"title\": \"Handling robot\",
                    \"type\": \"program\",
                    \"assigned\": [\"Team B\", \"Team D\"],
                    \"start_date\": \"2023.1.18\",
                    \"end_date\": \"2023.2.12\",
                    \"start_date1\": \"2023.1.18\",
                    \"end_date1\": \"2023.2.12\",
                    \"start_date2\": \"2023.1.18\",
                    \"end_date2\": \"2023.2.12\",
                    \"start_date3\": \"2023.1.18\",
                    \"end_date3\": \"2023.2.12\",
                    \"progress\": 60
                },
                {
                    \"id\": \"6\",
                    \"title\": \"Power & programming station\",
                    \"type\": \"program\",
                    \"assigned\": [\"Team C\", \"Team D\"],
                    \"start_date\": \"2023.1.18\",
                    \"end_date\": \"2023.2.12\",
                    \"start_date1\": \"2023.1.18\",
                    \"end_date1\": \"2023.2.12\",
                    \"start_date2\": \"2023.1.18\",
                    \"end_date2\": \"2023.2.12\",
                    \"start_date3\": \"2023.1.18\",
                    \"end_date3\": \"2023.2.12\",
                    \"progress\": 60
                }
              ]
            }";
        return $unitReportingData;
    }

    public function control(Unit $unit)
    {
        $unitControlData = [
            "{
                \"teamTitle\": \"Team A\",
                \"teamCapacity\": [\"100\", \"100\", \"100\", \"100\", \"0\", \"0\", \"75\"],
                \"series\": [
                {
                    \"name\": \"Travis Roach\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" }
                    ]
                },
                {
                    \"name\": \"Ciaran Bradford\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" }
                    ]
                },
                {
                    \"name\": \"George Logan\",
                    \"data\": [
                    { \"bg\": \"#66C85660\", \"data\": \"8\" },
                    { \"bg\": \"#66C85660\", \"data\": \"8\" },
                    { \"bg\": \"#66C85660\", \"data\": \"8\" },
                    { \"bg\": \"#66C85660\", \"data\": \"8\" },
                    { \"data\": \"\" },
                    { \"data\": \"\" },
                    { \"bg\": \"#0F849E70\", \"data\": \"4\" }
                  ]
                },
                {
                    \"name\": \"Angelica Russo\",
                    \"data\": [
                    { \"bg\": \"#0a5666\", \"data\": \"8\" },
                    { \"bg\": \"#8b3b4e\", \"data\": \"8\" },
                    { \"bg\": \"#0a5666\", \"data\": \"8\" },
                    { \"bg\": \"#448739\", \"data\": \"8\" },
                    { \"data\": \"\" },
                    { \"data\": \"\" },
                    { \"bg\": \"#0F849E70\", \"data\": \"4\" }
                  ]
                }
              ]
            }",
            "{
                \"teamTitle\": \"Team B\",
                \"teamCapacity\": [\"100\", \"100\", \"100\", \"100\", \"0\", \"0\", \"75\"],
                \"series\": [
                {
                    \"name\": \"Robert Garcia\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" }
                    ]
                },
                {
                    \"name\": \"Hon Gonzalez\",
                    \"data\": [
                        { bg: \"#66C85660\", data: \"8\" },
                        { bg: \"#66C85660\", data: \"8\" },
                        { bg: \"#66C85660\", data: \"8\" },
                        { bg: \"#66C85660\", data: \"8\" },
                        { data: \"\" },
                        { data: \"\" },
                        { bg: \"#66C85660\", data: \"8\" }
                    ]
                },
                {
                    \"name\": \"Piren Lopez\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#0F849E70\", \"data\": \"4\" }
                    ]
                },
                {
                    \"name\": \"Aden Schmidt\",
                    \"data\": [
                        { \"bg\": \"#0a5666\", \"data\": \"8\" },
                        { \"bg\": \"#8b3b4e\", \"data\": \"8\" },
                        { \"bg\": \"#0a5666\", \"data\": \"8\" },
                        { \"bg\": \"#448739\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#0F849E70\", \"data\": \"4\" }
                    ]
                }
              ]
            }",
            "{
                \"teamTitle\": \"Team C\",
                \"teamCapacity\": [\"100\", \"100\", \"100\", \"100\", \"0\", \"0\", \"75\"],
                \"series\": [
                {
                    \"name\": \"Roman Weber\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" }
                    ]
                },
                {
                    \"name\": \"Thomas Miller\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" }
                    ]
                },
                {
                    \"name\": \"Tim Ruiz\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#0F849E70\", \"data\": \"4\" }
                    ]
                },
                {
                    \"name\": \"Jake Williams\",
                    \"data\": [
                        { \"bg\": \"#0a5666\", \"data\": \"8\" },
                        { \"bg\": \"#8b3b4e\", \"data\": \"8\" },
                        { \"bg\": \"#0a5666\", \"data\": \"8\" },
                        { \"bg\": \"#448739\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#0F849E70\", \"data\": \"4\" }
                    ]
                }
              ]
            }",
            "{
                \"teamTitle\": \"Team D\",
                \"teamCapacity\": [\"100\", \"100\", \"100\", \"100\", \"0\", \"0\", \"75\"],
                \"series\": [
                {
                    \"name\": \"Feed Silva\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" }
                    ]
                },
                {
                    \"name\": \"Nuse Hansen\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" }
                    ]
                },
                {
                    \"name\": \"Ilias Costa\",
                    \"data\": [
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"bg\": \"#66C85660\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#0F849E70\", \"data\": \"4\" }
                    ]
                },
                {
                    \"name\": \"Albert Klein\",
                    \"data\": [
                        { \"bg\": \"#0a5666\", \"data\": \"8\" },
                        { \"bg\": \"#8b3b4e\", \"data\": \"8\" },
                        { \"bg\": \"#0a5666\", \"data\": \"8\" },
                        { \"bg\": \"#448739\", \"data\": \"8\" },
                        { \"data\": \"\" },
                        { \"data\": \"\" },
                        { \"bg\": \"#0F849E70\", \"data\": \"4\" }
                    ]
                }
              ]
            }"
        ];
        return $unitControlData;
    }
}
