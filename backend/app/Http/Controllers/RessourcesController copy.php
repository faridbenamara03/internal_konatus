<?php

namespace App\Http\Controllers;

use App\Models\Ressources;
use Illuminate\Http\Request;
use DB;
class RessourcesController_Org extends Controller
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
     * @param  \App\Models\Ressources  $ressources
     * @return \Illuminate\Http\Response
     */
    public function show(Ressources $ressources)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ressources  $ressources
     * @return \Illuminate\Http\Response
     */
    public function edit(Ressources $ressources)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ressources  $ressources
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ressources $ressources)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ressources  $ressources
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ressources $ressources)
    {
        //
    }

    public function nav_data_new(Ressources $ressources)
    {
        $navData = [];
        $orgData = [];
        $orgData1 = [];
        $result = [];
        $modules = DB::connection("pgsql")->select("select * from module");
        if(count($modules) > 0) {
            $module = (array) $modules[0];
            $module['children'] = [];
            $portfolio = DB::connection("pgsql")->select("select * from portfolio where moduleid = ?", [$module['id']]);
            $ptIndex = 0;
            while($ptIndex < count($portfolio)){
                 $portfolioArray = (array) $portfolio[$ptIndex];
                 $portfolioArray['children'] = [];
                 array_push($module['children'], $portfolioArray);
                 $program = DB::connection('pgsql')->select("SELECT * FROM program_backlog WHERE head_product_portfolio = ?", [$portfolio[$ptIndex]->title]);
                  $pgIndex = 0;
                  while($pgIndex < count($program)){
                      $programArray = (array) $program[$pgIndex];
                      $programArray['children'] = [];
                      array_push($module["children"][$ptIndex]["children"], $programArray);
                      $project = DB::connection("pgsql")->select("select id_product_line as id, title, type, programid from product_line where programid = ?", [$program[$pgIndex]->id]);
                      $pjIndex = 0;
                      while($pjIndex < count($project)){
                          $projectArray = (array) $project[$pjIndex];
                          array_push($module["children"][$ptIndex]["children"][$pgIndex]["children"], $projectArray);
                          $pjIndex++;
                      }
                      $pgIndex++;
                  }
                  $ptIndex++;
            }
            $navData = $module;
        }

        $organizations = DB::connection("pgsql")->select("select * from organization");
        if(count($organizations) > 0) {
          $organization = (array) $organizations[0];
          $organization['children'] = [];
          $units = DB::connection("pgsql")->select("select * from unit where organizationid = ?", [$organization['id']]);
          $utIndex = 0;
          while($utIndex < count($units)){
            $unitArray = (array) $units[$utIndex];
            $unitArray['children'] = [];
            array_push($organization['children'], $unitArray);
            $teams = DB::connection('pgsql')->select("SELECT id, name as title, idunit, type, color FROM team WHERE idunit = ?", [$unitArray['id']]);
            $tIndex = 0;
            while($tIndex < count($teams)){
                $teamArray = (array) $teams[$tIndex];
                $teamArray['children'] = [];
                array_push($organization['children'][$utIndex]['children'], $teamArray);
                $teamusers = DB::connection("pgsql")->select("select id_tbg as id, teamid, title, type from teambacklog where teamid = ?", [$teamArray['id']]);
                $tuIndex = 0;
                while($tuIndex < count($teamusers)){
                    $userArray = (array) $teamusers[$tuIndex];
                    array_push($organization['children'][$utIndex]['children'][$tIndex]['children'], $userArray);
                    $tuIndex++;
                }
                $tIndex++;
            }
            $utIndex++;
          }
          $orgData = $organization;
          $orgData1 = $organization;
        }
        $result["navData"] = json_encode($navData);
        $result["orgData"] = json_encode($orgData);
        $result["orgData1"] = json_encode($orgData1);
        return json_encode($result);
    }

    public function nav_data(Ressources $ressources)
    {
        $result = "{
            \"navData\" : {
                \"id\": \"konatus-industries-company\",
                \"title\": \"Konatus Industries\",
                \"resource\": \"konatus\",
                \"isOperation\": true,
                \"type\": \"company\",
                \"children\": [
                  {
                    \"id\": \"consumer-robots-portfolio\",
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
                    \"route\": {
                        \"name\": \"portfolio-view\",
                        \"params\": {
                            \"portfolioId\": \"consumer-robots\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"quadruped-robot-program\",
                        \"title\": \"Quadruped robot\",
                        \"parent\": \"consumer-robots-portfolio\",
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
                        \"route\": {
                            \"name\": \"program-view\",
                            \"params\": {
                                \"portfolioId\": \"consumer-robots\",
                                \"programId\": \"quadruped-robot\"
                          }
                        },
                        \"children\": [
                          {
                            \"id\": \"new-format-project\",
                            \"title\": \"New Format\",
                            \"parent\": \"quadruped-robot-program\",
                            \"type\": \"project\",
                            \"route\": {
                                \"name\": \"project-view\",
                                \"params\": {
                                    \"portfolioId\": \"consumer-robots\",
                                    \"programId\": \"quadruped-robot\",
                                    \"projectId\": \"new-format\"
                              }
                            },
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
                            \"phases\": [
                              {
                                \"id\": \"2.29.18.112\",
                                \"progress\": \"10%\"
                              },
                              {
                                \"id\": \"2.29.18.113\",
                                \"progress\": \"40%\"
                              },
                              {
                                \"id\": \"2.29.18.114\",
                                \"progress\": \"14%\"
                              },
                              {
                                \"id\": \"2.29.18.115\",
                                \"progress\": \"100%\"
                              },
                              {
                                \"id\": \"2.29.18.116\",
                                \"progress\": \"10%\"
                              }
                            ]
                          },
                          {
                            \"id\": \"enhanced-motricity-project\",
                            \"title\": \"Enhanced motricity\",
                            \"parent\": \"quadruped-robot-program\",
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
                            \"phases\": [
                              {
                                \"id\": \"2.29.18.118\",
                                \"progress\": \"50%\"
                              },
                              {
                                \"id\": \"2.29.18.119\",
                                \"progress\": \"20%\"
                              }
                            ]
                          },
                          {
                            \"id\": \"enhanced-autonomy-project\",
                            \"title\": \"Enhanced autonomy\",
                            \"parent\": \"quadruped-robot-program\",
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
                            \"phases\": []
                          },
                          {
                            \"id\": \"dual-sourcing-for-quadruped-project\",
                            \"title\": \"Dual sourcing for Quadruped\",
                            \"parent\": \"quadruped-robot-program\",
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
                            \"phases\": []
                          }
                        ]
                      },
                      {
                        \"id\": \"micro-robot-observation-nbc-program\",
                        \"title\": \"Micro robot observation NBC\",
                        \"parent\": \"consumer-robots-portfolio\",
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
                        \"id\": \"handling-robot-program\",
                        \"title\": \"Handling robot\",
                        \"parent\": \"consumer-robots-portfolio\",
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
                        \"id\": \"power-&-programming-station-program\",
                        \"title\": \"Power & programming station\",
                        \"parent\": \"consumer-robots-portfolio\",
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
                  },
                  {
                    \"id\": \"military-robots-portfolio\",
                    \"title\": \"Military Robots\",
                    \"type\": \"portfolio\",
                    \"priority\": \"Highest\",
                    \"budget\": \"21000\",
                    \"deadline\": \"06/01/2021\",
                    \"engaged\": \"12800\",
                    \"quote\": \"21000\",
                    \"demand\": \"19200\",
                    \"realEstimated\": \"10100\",
                    \"authorised\": \"14500\",
                    \"spent\": \"16000\",
                    \"value\": \"331\",
                    \"next_gate\": \"03/01/2022\",
                    \"route\": {
                        \"name\": \"portfolio-view\",
                        \"params\": {
                            \"portfolioId\": \"military-robots\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"attacking-robot-program\",
                        \"title\": \"Attacking robot\",
                        \"parent\": \"military-robots-portfolio\",
                        \"type\": \"program\",
                        \"priority\": \"Highest\",
                        \"budget\": \"21000\",
                        \"deadline\": \"06/01/2021\",
                        \"engaged\": \"12800\",
                        \"quote\": \"11000\",
                        \"demand\": \"19200\",
                        \"realEstimated\": \"10100\",
                        \"authorised\": \"4500\",
                        \"spent\": \"8600\",
                        \"value\": \"331\",
                        \"next_gate\": \"03/01/2022\",
                        \"route\": {
                            \"name\": \"program-view\",
                            \"params\": {
                                \"portfolioId\": \"military-robots\",
                                \"programId\": \"attacking-robot\"
                          }
                        },
                        \"children\": [
                          {
                            \"id\": \"rocket-launcher-project\",
                            \"title\": \"Rocket launcher\",
                            \"parent\": \"attacking-robot-program\",
                            \"type\": \"project\",
                            \"priority\": \"Highest\",
                            \"budget\": \"11000\",
                            \"deadline\": \"06/01/2021\",
                            \"engaged\": \"12800\",
                            \"quote\": \"22000\",
                            \"demand\": \"19200\",
                            \"realEstimated\": \"10100\",
                            \"authorised\": \"14500\",
                            \"spent\": \"11600\",
                            \"value\": \"331\",
                            \"next_gate\": \"03/01/2022\"
                          },
                          {
                            \"id\": \"location-system-project\",
                            \"title\": \"Location system\",
                            \"parent\": \"attacking-robot-program\",
                            \"type\": \"project\",
                            \"priority\": \"Highest\",
                            \"budget\": \"21000\",
                            \"engaged\": \"9800\",
                            \"quote\": \"22000\",
                            \"demand\": \"19200\",
                            \"realEstimated\": \"10100\",
                            \"authorised\": \"14500\",
                            \"spent\": \"11600\",
                            \"value\": \"331\",
                            \"next_gate\": \"03/01/2022\"
                          },
                          {
                            \"id\": \"target-lock-project\",
                            \"title\": \"Target lock\",
                            \"parent\": \"attacking-robot-program\",
                            \"type\": \"project\",
                            \"priority\": \"Highest\",
                            \"budget\": \"21000\",
                            \"engaged\": \"9800\",
                            \"quote\": \"22000\",
                            \"demand\": \"19200\",
                            \"realEstimated\": \"10100\",
                            \"authorised\": \"14500\",
                            \"spent\": \"11600\",
                            \"value\": \"331\",
                            \"next_gate\": \"03/01/2022\"
                          },
                          {
                            \"id\": \"estimation-device-program\",
                            \"title\": \"Estimation device\",
                            \"parent\": \"attacking-robot-program\",
                            \"type\": \"project\",
                            \"priority\": \"Highest\",
                            \"budget\": \"21000\",
                            \"engaged\": \"9800\",
                            \"quote\": \"22000\",
                            \"demand\": \"19200\",
                            \"realEstimated\": \"10100\",
                            \"authorised\": \"14500\",
                            \"spent\": \"11600\",
                            \"value\": \"331\",
                            \"next_gate\": \"03/01/2022\"
                          }
                        ]
                      }
                    ]
                  }
                ]
            },
            \"orgData\": {
                \"id\": \"organization-dynamics-organization\",
                \"title\": \"Organization Dynamics\",
                \"resource\": \"Konatus\",
                \"isOperation\": false,
                \"type\": \"organization\",
                \"children\": [
                  {
                    \"id\": \"paris-unit\",
                    \"title\": \"Paris\",
                    \"type\": \"unit\",
                    \"route\": {
                        \"name\": \"unit-view\",
                        \"params\": {
                            \"unitId\": \"paris\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"team-a-team\",
                        \"title\": \"Sensor & Effector\",
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
                        \"children\": [
                          {
                            \"id\": \"teama-roach-user\",
                            \"parent\": \"team-a-team\",
                            \"title\": \"Team A\",
                            \"type\": \"user\"
                          }
                        ]
                      },
                      {
                        \"id\": \"team-b-team\",
                        \"title\": \"HW & meca\",
                        \"parent\": \"paris-unit\",
                        \"type\": \"team\",
                        \"color\": \"#D68232\",
                        \"route\": {
                            \"name\": \"team-view\",
                            \"params\": {
                                \"unitId\": \"paris\",
                                \"teamId\": \"team-b\"
                          }
                        },
                        \"children\": [
                          {
                            \"id\": \"teamb-roach-user\",
                            \"parent\": \"team-a-team\",
                            \"title\": \"Team B\",
                            \"type\": \"user\"
                          }
                        ]
                      },
                      {
                        \"id\": \"team-c-team\",
                        \"title\": \"general SW\",
                        \"parent\": \"paris-unit\",
                        \"type\": \"team\",
                        \"color\": \"#D68232\",
                        \"route\": {
                            \"name\": \"team-view\",
                            \"params\": {
                                \"unitId\": \"paris\",
                                \"teamId\": \"team-b\"
                          }
                        },
                        \"children\": [
                          {
                            \"id\": \"teamc-roach-user\",
                            \"parent\": \"team-c-team\",
                            \"title\": \"Team C\",
                            \"type\": \"user\"
                          }
                        ]
                      },
                      {
                        \"id\": \"team-d-team\",
                        \"title\": \"real time SW\",
                        \"parent\": \"paris-unit\",
                        \"type\": \"team\",
                        \"color\": \"#D68232\",
                        \"route\": {
                            \"name\": \"team-view\",
                            \"params\": {
                                \"unitId\": \"paris\",
                                \"teamId\": \"team-d\"
                          }
                        },
                        \"children\": [
                          {
                            \"id\": \"teamd-roach-user\",
                            \"parent\": \"team-d-team\",
                            \"title\": \"Team D\",
                            \"type\": \"user\"
                          }
                        ]
                      },
                      {
                        \"id\": \"team-e-team\",
                        \"title\": \"FPGA & ASIC\",
                        \"parent\": \"paris-unit\",
                        \"type\": \"team\",
                        \"color\": \"#D68232\",
                        \"route\": {
                            \"name\": \"team-view\",
                            \"params\": {
                                \"unitId\": \"paris\",
                                \"teamId\": \"team-e\"
                          }
                        },
                        \"children\": [
                          {
                            \"id\": \"teame-roach-user\",
                            \"parent\": \"team-e-team\",
                            \"title\": \"Team E\",
                            \"type\": \"user\"
                          }
                        ]
                      },
                      {
                        \"id\": \"team-fp-team\",
                        \"title\": \"test\",
                        \"parent\": \"paris-unit\",
                        \"type\": \"team\",
                        \"color\": \"#D68232\",
                        \"route\": {
                            \"name\": \"team-view\",
                            \"params\": {
                                \"unitId\": \"paris\",
                                \"teamId\": \"team-fp\"
                          }
                        },
                        \"children\": [
                          {
                            \"id\": \"teamfp-roach-user\",
                            \"parent\": \"team-fp-team\",
                            \"title\": \"Team FP\",
                            \"type\": \"user\"
                          }
                        ]
                      }
                    ]
                  },
                  {
                    \"id\": \"sofia-unit\",
                    \"title\": \"Sofia\",
                    \"type\": \"unit\",
                    \"route\": {
                        \"name\": \"unit-view\",
                        \"params\": {
                            \"unitId\": \"sofia\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"team-fs-team\",
                        \"title\": \"test\",
                        \"parent\": \"sofia-unit\",
                        \"type\": \"team\",
                        \"route\": {
                            \"name\": \"team-view\",
                            \"params\": {
                                \"unitId\": \"sofia\",
                                \"teamId\": \"team-fs\"
                          }
                        },
                        \"children\": [
                          {
                            \"id\": \"teamfs-wolf-user\",
                            \"title\": \"Team FS\",
                            \"parent\": \"team-fs-team\",
                            \"type\": \"user\"
                          }
                        ]
                      }
                    ]
                  }
                ]
            },
            \"orgData1\": {
                \"id\": \"organization-dynamics-organization-unit\",
                \"title\": \"Organization Dynamics\",
                \"resource\": \"Konatus\",
                \"isOperation\": false,
                \"type\": \"organization-unit\",
                \"children\": [
                  {
                    \"id\": \"team-a-team\",
                    \"title\": \"Sensor & Effector\",
                    \"type\": \"team\",
                    \"color\": \"#D68232\",
                    \"route\": {
                        \"name\": \"team-view\",
                        \"params\": {
                            \"unitId\": \"paris\",
                            \"teamId\": \"team-a\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"teama-roach-user\",
                        \"parent\": \"team-a-team\",
                        \"title\": \"Team A\",
                        \"type\": \"user\"
                      }
                    ]
                  },
                  {
                    \"id\": \"team-b-team\",
                    \"title\": \"HW & meca\",
                    \"type\": \"team\",
                    \"color\": \"#D68232\",
                    \"route\": {
                        \"name\": \"team-view\",
                        \"params\": {
                            \"unitId\": \"paris\",
                            \"teamId\": \"team-b\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"teamb-roach-user\",
                        \"parent\": \"team-b-team\",
                        \"title\": \"Team B\",
                        \"type\": \"user\"
                      }
                    ]
                  },
                  {
                    \"id\": \"team-c-team\",
                    \"title\": \"general SW\",
                    \"type\": \"team\",
                    \"color\": \"#D68232\",
                    \"route\": {
                        \"name\": \"team-view\",
                        \"params\": {
                            \"unitId\": \"paris\",
                            \"teamId\": \"team-b\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"teamc-roach-user\",
                        \"parent\": \"team-c-team\",
                        \"title\": \"Team C\",
                        \"type\": \"user\"
                      }
                    ]
                  },
                  {
                    \"id\": \"team-d-team\",
                    \"title\": \"real time SW\",
                    \"type\": \"team\",
                    \"color\": \"#D68232\",
                    \"route\": {
                        \"name\": \"team-view\",
                        \"params\": {
                            \"unitId\": \"paris\",
                            \"teamId\": \"team-d\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"teamd-roach-user\",
                        \"parent\": \"team-d-team\",
                        \"title\": \"Team D\",
                        \"type\": \"user\"
                      }
                    ]
                  },
                  {
                    \"id\": \"team-e-team\",
                    \"title\": \"FPGA & ASIC\",
                    \"type\": \"team\",
                    \"color\": \"#D68232\",
                    \"route\": {
                        \"name\": \"team-view\",
                        \"params\": {
                            \"unitId\": \"paris\",
                            \"teamId\": \"team-e\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"teame-roach-user\",
                        \"parent\": \"team-e-team\",
                        \"title\": \"Team E\",
                        \"type\": \"user\"
                      }
                    ]
                  },
                  {
                    \"id\": \"team-fp-team\",
                    \"title\": \"test\",
                    \"type\": \"team\",
                    \"color\": \"#D68232\",
                    \"route\": {
                        \"name\": \"team-view\",
                        \"params\": {
                            \"unitId\": \"paris\",
                            \"teamId\": \"team-fp\"
                      }
                    },
                    \"children\": [
                      {
                        \"id\": \"teamfp-roach-user\",
                        \"parent\": \"team-fp-team\",
                        \"title\": \"Team FP\",
                        \"type\": \"user\"
                      },
                      {
                        \"id\": \"teamfs-roach-user\",
                        \"parent\": \"team-fp-team\",
                        \"title\": \"Team Fs\",
                        \"type\": \"user\"
                      }
                    ]
                  }
                ]
              }
        }";
        return $result;
    }

    public function org_data(Ressources $ressources)
    {
        $navData = "{\"id\": \"63d3d79802e5f6e2220b516d\",
            \"title\": \"Konatus Industries\",
            \"resource\": \"konatus\",
            \"isOperation\": true,\"type\": \"company\",
            \"children\": [{\"id\": \"1\",
                \"title\": \"Consumer Robots\",\"type\": \"portfolio\",
                \"route\": {\"name\": \"portfolio-view\",
                    \"params\": {\"portfolioId\": \"consumer-robots\"}},
                    \"children\": [{\"id\": \"3\",\"title\": \"Quadruped robot\",\"parent\": \"1\",\"type\": \"program\",\"route\": {\"name\": \"program-view\",\"params\": {\"portfolioId\": \"consumer-robots\",\"programId\": \"quadruped-robot\"}},\"children\": [{\"id\": \"8\",\"title\": \"New Format\",\"parent\": \"3\",\"type\": \"project\",\"route\": {\"name\": \"project-view\",\"params\": {\"portfolioId\": \"consumer-robots\",\"programId\": \"quadruped-robot\",\"projectId\": \"new-format\"}}},{\"id\": \"9\",\"title\": \"Enhanced motricity\",\"parent\": \"3\",\"type\": \"project\"},{\"id\": \"10\",\"title\": \"Enhanced autonomy\",\"parent\": \"3\",\"type\": \"project\"},{\"id\": \"11\",\"title\": \"Dual sourcing for Quadruped\",\"parent\": \"3\",\"type\": \"project\"}]},{\"id\": \"4\",\"title\": \"Micro robot observation NBC\",\"parent\": \"1\",\"type\": \"program\"},{\"id\": \"5\",\"title\": \"Handling robot\",\"parent\": \"1\",\"type\": \"program\"},{\"id\": \"6\",\"title\": \"Power & programming station\",\"parent\": \"1\",\"type\": \"program\"}]},{\"id\": \"2\",\"title\": \"Military Robots\",\"type\": \"portfolio\",\"route\": {\"name\": \"portfolio-view\",\"params\": {\"portfolioId\": \"military-robots\"}},\"children\": [{\"id\": \"7\",\"title\": \"Attacking robot\",\"parent\": \"2\",\"type\": \"program\",\"route\": {\"name\": \"program-view\",\"params\": {\"portfolioId\": \"military-robots\",\"programId\": \"attacking-robot\"}},\"children\": [{\"id\": \"12\",\"title\": \"Rocket launcher\",\"type\": \"project\"},{\"id\": \"13\",\"title\": \"Location system\",\"type\": \"project\"},{\"id\": \"14\",\"title\": \"Target lock\",\"type\": \"project\"},{\"id\": \"15\",\"title\": \"Estimation device\",\"type\": \"project\"}]}]}]}";

        return $navData;
    }
}
