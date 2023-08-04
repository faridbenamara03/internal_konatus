<?php

namespace App\Http\Controllers;

use App\Models\Work_Element;
use Illuminate\Http\Request;

class WorkElementController extends Controller
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
     * @param  \App\Models\Work_Element  $work_Element
     * @return \Illuminate\Http\Response
     */
    public function show(Work_Element $work_Element)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Work_Element  $work_Element
     * @return \Illuminate\Http\Response
     */
    public function edit(Work_Element $work_Element)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Work_Element  $work_Element
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Work_Element $work_Element)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Work_Element  $work_Element
     * @return \Illuminate\Http\Response
     */
    public function destroy(Work_Element $work_Element)
    {
        //
    }

    public function demand(Work_Element $work_Element)
    {
        $portfolioData = "{
            id: \"63d3d79802e5f6e2220b516e\",
            title: \"Consumer Robots\",
            type: \"portfolio\",
            priority: \"Highest\",
            budget: \"210000\",
            deadline: \"06/02/2023\",
            engaged: \"215800\",
            quote: \"210000\",
            demand: \"319200\",
            realEstimated: \"210100\",
            authorised: \"124500\",
            spent: \"21600\",
            value: \"331\",
            next_gate: \"03/01/2022\",
            children: [
              {
                id: \"63d3d79802e5f6e2220b5170\",
                title: \"Quadruped robot\",
                parent: \"63d3d79802e5f6e2220b516e\",
                type: \"program\",
                priority: \"Highest\",
                budget: \"91001\",
                deadline: \"06/01/2023\",
                engaged: \"21800\",
                quote: \"89000\",
                demand: \"19200\",
                realEstimated: \"10100\",
                authorised: \"14500\",
                spent: \"11600\",
                value: \"331\",
                next_gate: \"03/01/2022\",
                gate: 3,
                children: [
                  {
                    id: \"63d3d79802e5f6e2220b5175\",
                    title: \"New Format\",
                    parent: \"63d3d79802e5f6e2220b5170\",
                    type: \"project\",
                    priority: \"High\",
                    budget: \"350000\",
                    deadline: \"06/01/2021\",
                    engaged: \"22450\",
                    quote: \"61900\",
                    demand: \"91800\",
                    realEstimated: \"235200\",
                    authorised: \"232100\",
                    spent: \"41800\",
                    value: \"64\",
                    next_gate: \"03/01/2022\",
                    progress: 64,
                    start_date: \"2022.11.6\",
                    end_date: \"2022.12.26\",
                    phases: [
                      \"63d3d79802e5f6e2220b517d\",
                      \"63d3d79802e5f6e2220b517e\",
                      \"63d3d79802e5f6e2220b517f\",
                      \"63d3d79802e5f6e2220b5180\",
                      \"63d3d79802e5f6e2220b5181\"
                    ],
                  },
                  {
                    id: \"63d3d79802e5f6e2220b5176\",
                    title: \"Enhanced motricity\",
                    parent: \"63d3d79802e5f6e2220b5170\",
                    type: \"project\",
                    priority: \"Highest\",
                    budget: \"82000\",
                    deadline: \"03/28/2021\",
                    engaged: \"46450\",
                    quote: \"54900\",
                    demand: \"98500\",
                    realEstimated: \"431700\",
                    authorised: \"39600\",
                    spent: \"61400\",
                    next_gate: \"06/02/2022\",
                    value: \"84\",
                    phases: [
                      \"63d3d79802e5f6e2220b5182\",
                      \"63d3d79802e5f6e2220b5183\"
                    ]
                  },
                  {
                    id: \"63d3d79802e5f6e2220b5177\",
                    title: \"Enhanced autonomy\",
                    parent: \"63d3d79802e5f6e2220b5170\",
                    type: \"project\",
                    priority: \"Highest\",
                    budget: \"98000\",
                    deadline: \"06/01/2021\",
                    engaged: \"450\",
                    quote: \"45900\",
                    demand: \"72400\",
                    realEstimated: \"82000\",
                    authorised: \"31000\",
                    spent: \"21300\",
                    next_gate: \"07/01/2022\",
                    value: \"31\",
                    phases: [
                      \"63d3d79802e5f6e2220b5184\"
                    ]
                  },
                  {
                    id: \"63d3d79802e5f6e2220b5178\",
                    title: \"Dual sourcing for Quadruped\",
                    parent: \"63d3d79802e5f6e2220b5170\",
                    type: \"project\",
                    priority: \"Lowest\",
                    budget: \"80000\",
                    deadline: \"12/31/2021\",
                    engaged: \"450\",
                    quote: \"41550\",
                    demand: \"91500\",
                    realEstimated: \"211200\",
                    authorised: \"18800\",
                    spent: \"31100\",
                    value: \"3\",
                    next_gate: \"08/02/2022\",
                    phases: []
                  },
                ]
              },
              {
                id: \"63d3d79802e5f6e2220b5171\",
                title: \"Micro robot observation NBC\",
                parent: \"63d3d79802e5f6e2220b516e\",
                type: \"program\",
                priority: \"lowest\",
                budget: \"150\",
                deadline: \"05/20/2018\",
                engaged: \"450\",
                quote: \"292.5\",
                demand: \"300\",
                realEstimated: \"320\",
                authorised: \"1000\",
                spent: \"100\",
                value: \"100\",
                next_gate: \"06/02/2022\",
              },
              {
                id: \"63d3d79802e5f6e2220b5172\",
                title: \"Handling robot\",
                parent: \"63d3d79802e5f6e2220b516e\",
                type: \"program\",

                priority: \"lowest\",
                budget: \"150\",
                deadline: \"05/20/2018\",
                engaged: \"450\",
                quote: \"292.5\",
                demand: \"300\",
                realEstimated: \"320\",
                authorised: \"1000\",
                spent: \"100\",
                value: \"100\",
                next_gate: \"06/02/2022\",
              },
              {
                id: \"63d3d79802e5f6e2220b5173\",
                title: \"Power & programming station\",
                parent: \"63d3d79802e5f6e2220b516e\",
                type: \"program\",

                priority: \"Low\",
                budget: \"1200\",
                deadline: \"03/24/2018\",
                engaged: \"450\",
                quote: \"550\",
                demand: \"1500\",
                realEstimated: \"1800\",
                authorised: \"900\",
                spent: \"100\",
                value: \"10\",
                next_gate: \"06/02/2022\",
              },
            ]
          }";
        return json_decode($portfolioData);
    }

    public function reporting(Work_Element $work_Element)
    {
        $reportingData =
            "{
                \"id\": \"63d3d79802e5f6e2220b516e\",
                \"title\": \"Consumer Robots\",
                \"type\": \"portfolio\",
                \"priority\": \"Highest\",
                \"budget\": \"210000\",
                \"deadline\": \"06/02/2023\",
                \"engaged\": \"215800\",
                \"quote\": \"210000\",
                \"demand\": \"319200\",
                \"realEstimated\": \"210100\",
                \"authorised\": \"124500\",
                \"spent\": \"21600\",
                \"value\": \"331\",
                \"next_gate\": \"03/01/2022\",
                \"children\": [
                {
                    \"id\": \"63d3d79802e5f6e2220b5170\",
                    \"title\": \"Quadruped robot\",
                    \"parent\": \"63d3d79802e5f6e2220b516e\",
                    \"type\": \"program\",
                    \"priority\": \"Highest\",
                    \"budget\": \"91001\",
                    \"deadline\": \"06/01/2023\",
                    \"engaged\": \"21800\",
                    \"quote\": \"89000\",
                    \"demand\": \"19200\",
                    \"realEstimated\": \"10100\",
                    \"authorised\": \"14500\",
                    \"spent\": \"11600\",
                    \"value\": \"331\",
                    \"next_gate\": \"03/01/2022\",
                    \"gate\": 3,
                    \"children\": [
                        \"63d3d79802e5f6e2220b5175\",
                        \"63d3d79802e5f6e2220b5176\",
                        \"63d3d79802e5f6e2220b5177\",
                        \"63d3d79802e5f6e2220b5178\"
                    ]
                },
                {
                    \"id\": \"63d3d79802e5f6e2220b5171\",
                    \"title\": \"Micro robot observation NBC\",
                    \"parent\": \"63d3d79802e5f6e2220b516e\",
                    \"type\": \"program\",
                    \"priority\": \"lowest\",
                    \"budget\": \"150\",
                    \"deadline\": \"05/20/2018\",
                    \"engaged\": \"450\",
                    \"quote\": \"292.5\",
                    \"demand\": \"300\",
                    \"realEstimated\": \"320\",
                    \"authorised\": \"1000\",
                    \"spent\": \"100\",
                    \"value\": \"100\",
                    \"next_gate\": \"06/02/2022\"
                },
                {
                    \"id\": \"63d3d79802e5f6e2220b5172\",
                    \"title\": \"Handling robot\",
                    \"parent\": \"63d3d79802e5f6e2220b516e\",
                    \"type\": \"program\",
                    \"priority\": \"lowest\",
                    \"budget\": \"150\",
                    \"deadline\": \"05/20/2018\",
                    \"engaged\": \"450\",
                    \"quote\": \"292.5\",
                    \"demand\": \"300\",
                    \"realEstimated\": \"320\",
                    \"authorised\": \"1000\",
                    \"spent\": \"100\",
                    \"value\": \"100\",
                    \"next_gate\": \"06/02/2022\"
                },
                {
                    \"id\": \"63d3d79802e5f6e2220b5173\",
                    \"title\": \"Power & programming station\",
                    \"parent\": \"63d3d79802e5f6e2220b516e\",
                    \"type\": \"program\",
                    \"priority\": \"Low\",
                    \"budget\": \"1200\",
                    \"deadline\": \"03/24/2018\",
                    \"engaged\": \"450\",
                    \"quote\": \"550\",
                    \"demand\": \"1500\",
                    \"realEstimated\": \"1800\",
                    \"authorised\": \"900\",
                    \"spent\": \"100\",
                    \"value\": \"10\",
                    \"next_gate\": \"06/02/2022\"
                }
              ]
            }";
        return $reportingData;
    }

    public function control(Work_Element $work_Element)
    {
        $portfolioControlData = "{
            \"id\": \"63d3d79802e5f6e2220b516e\",
            \"title\": \"Consumer Robots\",
            \"type\": \"portfolio\",
            \"priority\": \"Highest\",
            \"budget\": \"210000\",
            \"deadline\": \"06/02/2023\",
            \"engaged\": \"215800\",
            \"quote\": \"210000\",
            \"demand\": \"319200\",
            \"realEstimated\": \"210100\",
            \"authorised\": \"124500\",
            \"spent\": \"21600\",
            \"value\": \"331\",
            \"next_gate\": \"03/01/2022\",
            \"children\": [
              {
                \"id\": \"63d3d79802e5f6e2220b5170\",
                \"title\": \"Quadruped robot\",
                \"parent\": \"63d3d79802e5f6e2220b516e\",
                \"type\": \"program\",
                \"priority\": \"Highest\",
                \"budget\": \"91001\",
                \"deadline\": \"06/01/2023\",
                \"engaged\": \"21800\",
                \"quote\": \"89000\",
                \"demand\": \"19200\",
                \"realEstimated\": \"10100\",
                \"authorised\": \"14500\",
                \"spent\": \"11600\",
                \"value\": \"331\",
                \"next_gate\": \"03/01/2022\",
                \"gate\": 3,
                \"assignee\": [
                  {
                    \"id\": \"63d3d79802e5f6e2220b518f\",
                    \"title\": \"Team A\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [130, 112, 122, 121]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5190\",
                    \"title\": \"Team B\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [510, 412, 212, 221]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5191\",
                    \"title\": \"Team C\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [140, 122, 212, 261]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5192\",
                    \"title\": \"Team D\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [150, 132, 262, 221]
                  }
                ],
                \"children\": [
                  {
                    \"id\": \"63d3d79802e5f6e2220b5175\",
                    \"title\": \"New Format\",
                    \"parent\": \"63d3d79802e5f6e2220b5170\",
                    \"type\": \"project\",
                    \"priority\": \"High\",
                    \"budget\": \"350000\",
                    \"deadline\": \"06/01/2021\",
                    \"engaged\": \"22450\",
                    \"quote\": \"61900\",
                    \"demand\": \"91800\",
                    \"realEstimated\": \"235200\",
                    \"authorised\": \"232100\",
                    \"spent\": \"41800\",
                    \"value\": \"64\",
                    \"next_gate\": \"03/01/2022\",
                    \"progress\": 64,
                    \"start_date\": \"2022.11.6\",
                    \"end_date\": \"2022.12.26\",
                    \"assignee\": [
                      {
                        \"id\": \"63d3d79802e5f6e2220b518f\",
                        \"title\": \"Team A\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5190\",
                        \"title\": \"Team B\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5191\",
                        \"title\": \"Team C\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5192\",
                        \"title\": \"Team D\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      }
                    ]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5176\",
                    \"title\": \"Enhanced motricity\",
                    \"parent\": \"63d3d79802e5f6e2220b5170\",
                    \"type\": \"project\",
                    \"priority\": \"Highest\",
                    \"budget\": \"82000\",
                    \"deadline\": \"03/28/2021\",
                    \"engaged\": \"46450\",
                    \"quote\": \"54900\",
                    \"demand\": \"98500\",
                    \"realEstimated\": \"431700\",
                    \"authorised\": \"39600\",
                    \"spent\": \"61400\",
                    \"next_gate\": \"06/02/2022\",
                    \"value\": \"84\",
                    \"assignee\": [
                      {
                        \"id\": \"63d3d79802e5f6e2220b518f\",
                        \"title\": \"Team A\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5190\",
                        \"title\": \"Team B\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5191\",
                        \"title\": \"Team C\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5192\",
                        \"title\": \"Team D\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      }
                    ]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5177\",
                    \"title\": \"Enhanced autonomy\",
                    \"parent\": \"63d3d79802e5f6e2220b5170\",
                    \"type\": \"project\",
                    \"priority\": \"Highest\",
                    \"budget\": \"98000\",
                    \"deadline\": \"06/01/2021\",
                    \"engaged\": \"450\",
                    \"quote\": \"45900\",
                    \"demand\": \"72400\",
                    \"realEstimated\": \"82000\",
                    \"authorised\": \"31000\",
                    \"spent\": \"21300\",
                    \"next_gate\": \"07/01/2022\",
                    \"value\": \"31\",
                    \"assignee\": [
                      {
                        \"id\": \"63d3d79802e5f6e2220b518f\",
                        \"title\": \"Team A\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5190\",
                        \"title\": \"Team B\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5191\",
                        \"title\": \"Team C\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5192\",
                        \"title\": \"Team D\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      }
                    ]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5178\",
                    \"title\": \"Dual sourcing for Quadruped\",
                    \"parent\": \"63d3d79802e5f6e2220b5170\",
                    \"type\": \"project\",
                    \"priority\": \"Lowest\",
                    \"budget\": \"80000\",
                    \"deadline\": \"12/31/2021\",
                    \"engaged\": \"450\",
                    \"quote\": \"41550\",
                    \"demand\": \"91500\",
                    \"realEstimated\": \"211200\",
                    \"authorised\": \"18800\",
                    \"spent\": \"31100\",
                    \"value\": \"3\",
                    \"next_gate\": \"08/02/2022\",
                    \"assignee\": [
                      {
                        \"id\": \"63d3d79802e5f6e2220b518f\",
                        \"title\": \"Team A\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5190\",
                        \"title\": \"Team B\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5191\",
                        \"title\": \"Team C\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      },
                      {
                        \"id\": \"63d3d79802e5f6e2220b5192\",
                        \"title\": \"Team D\",
                        \"parent\": \"63d3d79802e5f6e2220b519b\",
                        \"type\": \"team\",
                        \"data\": [10, 12, 22, 21]
                      }
                    ]
                  }
                ]
              },
              {
                \"id\": \"63d3d79802e5f6e2220b5171\",
                \"title\": \"Micro robot observation NBC\",
                \"parent\": \"63d3d79802e5f6e2220b516e\",
                \"type\": \"program\",
                \"priority\": \"lowest\",
                \"budget\": \"150\",
                \"deadline\": \"05/20/2018\",
                \"engaged\": \"450\",
                \"quote\": \"292.5\",
                \"demand\": \"300\",
                \"realEstimated\": \"320\",
                \"authorised\": \"1000\",
                \"spent\": \"100\",
                \"value\": \"100\",
                \"next_gate\": \"06/02/2022\",
                \"assignee\": [
                  {
                    \"id\": \"63d3d79802e5f6e2220b518f\",
                    \"title\": \"Team A\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [20, 112, 232, 211]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5190\",
                    \"title\": \"Team B\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [110, 122, 232, 211]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5191\",
                    \"title\": \"Team C\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [110, 112, 222, 211]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5192\",
                    \"title\": \"Team D\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [110, 132, 222, 211]
                  }
                ]
              },
              {
                \"id\": \"63d3d79802e5f6e2220b5172\",
                \"title\": \"Handling robot\",
                \"parent\": \"63d3d79802e5f6e2220b516e\",
                \"type\": \"program\",
                \"priority\": \"lowest\",
                \"budget\": \"150\",
                \"deadline\": \"05/20/2018\",
                \"engaged\": \"450\",
                \"quote\": \"292.5\",
                \"demand\": \"300\",
                \"realEstimated\": \"320\",
                \"authorised\": \"1000\",
                \"spent\": \"100\",
                \"value\": \"100\",
                \"next_gate\": \"06/02/2022\",
                \"assignee\": [
                  {
                    \"id\": \"63d3d79802e5f6e2220b518f\",
                    \"title\": \"Team A\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [110, 212, 222, 211]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5190\",
                    \"title\": \"Team B\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [410, 312, 122, 221]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5191\",
                    \"title\": \"Team C\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [120, 142, 122, 221]
                  },
                  {
                    id: \"63d3d79802e5f6e2220b5192\",
                    title: \"Team D\",
                    parent: \"63d3d79802e5f6e2220b519b\",
                    type: \"team\",
                    data: [103, 122, 221, 321]
                  }
                ]
              },
              {
                \"id\": \"63d3d79802e5f6e2220b5173\",
                \"title\": \"Power & programming station\",
                \"parent\": \"63d3d79802e5f6e2220b516e\",
                \"type\": \"program\",
                \"priority\": \"Low\",
                \"budget\": \"1200\",
                \"deadline\": \"03/24/2018\",
                \"engaged\": \"450\",
                \"quote\": \"550\",
                \"demand\": \"1500\",
                \"realEstimated\": \"1800\",
                \"authorised\": \"900\",
                \"spent\": \"100\",
                \"value\": \"10\",
                \"next_gate\": \"06/02/2022\",
                \"assignee\": [
                  {
                    \"id\": \"63d3d79802e5f6e2220b518f\",
                    \"title\": \"Team A\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [110, 212, 222, 211]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5190\",
                    \"title\": \"Team B\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [410, 312, 122, 221]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5191\",
                    \"title\": \"Team C\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [120, 142, 122, 221]
                  },
                  {
                    \"id\": \"63d3d79802e5f6e2220b5192\",
                    \"title\": \"Team D\",
                    \"parent\": \"63d3d79802e5f6e2220b519b\",
                    \"type\": \"team\",
                    \"data\": [103, 122, 221, 321]
                  }
                ]
              }
            ]
          }";
        return $portfolioControlData;
    }
}
