<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;

class TeamController extends Controller
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
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function show(Team $team)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Team $team)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Team  $team
     * @return \Illuminate\Http\Response
     */
    public function destroy(Team $team)
    {
        //
    }

    public function demand(Team $team)
    {
        $teamDemandData = "{
            \"id\": \"team-a-team\",
            \"title\": \"Team A\",
            \"parent\": \"paris-unit\",
            \"type\": \"team\",
            \"color\": \"#D68232\",
            \"route\": {
                \"name\": \"team-view\",
                \"params\": {
                    \"unitId\": \"paris\",
                    \"teamId\": \"team-a\"
              }
            },
            \"phases\": [
              {
                \"id\": \"phase-1\",
                \"projectId\": \"new-format-project\",
                \"assigned\": \"team-a-team\",
                \"time\": 12,
                \"data\": {
                    \"progress\": 0,
                    \"start_date\": \"2022.11.04\",
                    \"end_date\": \"2022.12.21\"
                },
                \"elements\": [
                  {
                    \"activityId\": \"install-software-activity\",
                    \"phase\": \"phase-1\",
                    \"title\": \"Install software\",
                    \"description\": \"Set up foundations with dimmentiosn 30cm by 50cm.\",
                    \"priority\": \"Highest\",
                    \"gate\": 1,
                    \"assigned\": \"team-a-team\",
                    \"effort\": {
                        \"load\": 53,
                        \"duration\": 26,
                        \"fte\": 80
                    }
                  },
                  {
                    \"activityId\": \"develop-control-software-activity\",
                    \"title\": \"Develop control software\",
                    \"phase\": \"phase-1\",
                    \"description\": \"Set up foundations with dimmentiosn 30cm by 50cm.\",
                    \"priority\": \"Highest\",
                    \"gate\": 2,
                    \"assigned\": \"team-a-team\",
                    \"effort\": {
                        \"load\": 53,
                        \"duration\": 26,
                        \"fte\": 80
                    }
                  },
                  {
                    \"activityId\": \"debugging-activity\",
                    \"title\": \"Debugging\",
                    \"description\": \"Set up foundations with dimmentiosn 30cm by 50cm.\",
                    \"phase\": \"phase-1\",
                    \"priority\": \"Highest\",
                    \"gate\": 1,
                    \"assigned\": \"team-a-team\",
                    \"effort\": {
                        \"load\": 53,
                        \"duration\": 26,
                        \"fte\": 80
                    }
                  }
                ]
              },
              {
                \"id\": \"phase-2\",
                \"projectId\": \"new-format-project\",
                \"assigned\": \"team-a-team\",
                \"time\": 14,
                \"data\": {
                    \"progress\": 0,
                    \"start_date\": \"2022.11.04\",
                    \"end_date\": \"2022.12.21\"
                },
                \"elements\": [
                  {
                    \"activityId\": \"electricity-market-ai-activity\",
                    \"title\": \"Electricity market AI\",
                    \"description\": \"Set up foundations with dimmentiosn 30cm by 50cm.\",
                    \"priority\": \"Highest\",
                    \"phase\": \"phase-2\",
                    \"gate\": 1,
                    \"assigned\": \"team-a-team\",
                    \"effort\": {
                        \"load\": 53,
                        \"duration\": 26,
                        \"fte\": 80
                    }
                  },
                  {
                    \"activityId\": \"improve-generator-component-activity\",
                    \"title\": \"Improve generator component\",
                    \"description\": \"Set up foundations with dimmentiosn 30cm by 50cm.\",
                    \"priority\": \"Highest\",
                    \"phase\": \"phase-2\",
                    \"gate\": 2,
                    \"assigned\": \"team-b-team\",
                    \"effort\": {
                        \"load\": 53,
                        \"duration\": 26,
                        \"fte\": 80
                    }
                  }
                ]
              }
            ],
            \"children\": [
              {
                \"id\": \"travis-roach-user\",
                \"parent\": \"team-a-team\",
                \"title\": \"Travis Roach\",
                \"type\": \"user\"
              },
              {
                \"id\": \"ciaran-bradford-user\",
                \"parent\": \"team-a-team\",
                \"title\": \"Ciaran Bradford\",
                \"type\": \"user\"
              },
              {
                \"id\": \"george-logan-user\",
                \"parent\": \"team-a-team\",
                \"title\": \"George Logan\",
                \"type\": \"user\"
              },
              {
                \"id\": \"angelica-russo-user\",
                \"parent\": \"team-a-team\",
                \"title\": \"Angelica Russo\",
                \"type\": \"user\"
              }
            ]
          }";
        return $teamDemandData;

    }

    public function reporting(Team $team)
    {
        $teamReportingData = "{
            \"id\": \"1\",
            \"title\": \"Consumer Robots\",
            \"type\": \"portfolio\",
            \"children\": [
              {
                \"id\": \"3\",
                \"title\": \"Quadruped robot\",
                \"parent\": \"1\",
                \"type\": \"program\",
                \"children\": [
                  {
                    \"id\": \"8\",
                    \"title\": \"New Format\",
                    \"parent\": \"3\",
                    \"type\": \"project\",
                    \"progress\": 0,
                    \"start_date\": \"2023.1.20\",
                    \"end_date\": \"2023.3.12\"
                  },
                  {
                    \"id\": \"9\",
                    \"title\": \"Enhanced motricity\",
                    \"parent\": \"3\",
                    \"type\": \"project\"
                  },
                  {
                    \"id\": \"10\",
                    \"title\": \"Enhanced autonomy\",
                    \"parent\": \"3\",
                    \"type\": \"project\",
                    \"progress\": 0,
                    \"start_date\": \"2023.1.20\",
                    \"end_date\": \"2023.3.12\"
                  },
                  {
                    \"id\": \"11\",
                    \"title\": \"Dual sourcing for Quadruped\",
                    \"parent\": \"3\",
                    \"type\": \"project\",
                    \"progress\": 0,
                    \"start_date\": \"2023.1.20\",
                    \"end_date\": \"2023.3.12\"
                  }
                ]
              },
              {
                \"id\": \"4\",
                \"title\": \"Micro robot observation NBC\",
                \"parent\": \"1\",
                \"type\": \"program\",
                \"progress\": 0,
                \"start_date\": \"2023.1.20\",
                \"end_date\": \"2023.3.12\"
              },
              {
                \"id\": \"5\",
                \"title\": \"Handling robot\",
                \"parent\": \"1\",
                \"type\": \"program\",
                \"progress\": 0,
                \"start_date\": \"2023.1.20\",
                \"end_date\": \"2023.3.12\"
              },
              {
                \"id\": \"6\",
                \"title\": \"Power & programming station\",
                \"parent\": \"1\",
                \"type\": \"program\"
              }
            ]
          }";
        return $teamReportingData;
    }

    public function control(Team $team)
    {
        $teamControlTableData = [
            "{
              name: \"Team A\",
              data: [\"24/24\", \"24/24\", \"24/24\", \"24/24\", \"24/24\", \"24/24\", \"28/24\"],
            }",
            "{
              name: \"Team B\",
              data: [\"24/24\", \"24/24\", \"24/24\", \"24/24\", \"24/24\", \"24/24\", \"28/24\"],
            }",
            "{
              name: \"Back-end devs\",
              data: [\"24/24\", \"24/24\", \"24/24\", \"24/24\", \"24/24\", \"24/24\", \"28/24\"],
            }",
        ];
        return $teamControlTableData;
    }

    public function chart(Team $team)
    {
        $teamControlCharData = [
            "{
              name: \"ENGAGED\",
              data: [170, 170, 120, 90, 150]
            }",
            "{
              name: \"QUOTE\",
              data: [180, 180, 130, 100, 160]
            }",
            "{
              name: \"ESTIMATED\",
              data: [160, 160, 110, 80, 140]
            }",
            "{
              name: \"REQUESTED NOT ENGAGED\",
              data: [150, 150, 100, 70, 130]
            }"
        ];
        return $teamControlCharData;
    }

}
