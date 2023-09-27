<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\portfolio_data;
use DB;
use Exception;
class PortfolioDataController extends Controller
{
    public function reporting(portfolio_data $portfolio_data)
    {
        $reportingData = [];

        $result = "";
        try {
            $portfolio = DB::connection("pgsql")->select("select * from portfolio_data");
            $ptIndex = 0;
            while($ptIndex < count($portfolio)){
                $portfolioArray = (array) $portfolio[$ptIndex];
                $portfolioArray['children'] = [];
                array_push($reportingData, $portfolioArray);
                $program = DB::connection('pgsql')->select("select * from program_data WHERE portfolioid = ?", [$portfolioArray['id']]);
                $pgIndex = 0;
                while($pgIndex < count($program)){
                    $programArray = (array) $program[$pgIndex];
                    $programArray['children'] = [];
                    $programArray['startDates'] = [];
                    $programArray['endDates'] = [];
                    $programArray['startDate'] = "";
                    $programArray['endDate'] = "";
                    array_push($reportingData[$ptIndex]['children'], $programArray);
                    $project = DB::connection("pgsql")->select("select * from project_data where programid = ?", [$programArray['id']]);
                    $pjIndex = 0;
                    while($pjIndex < count($project)){
                        $projectArray = (array) $project[$pjIndex];
                        $projectArray['phases'] = [];
                        $projectArray['startDates'] = [];
                        $projectArray['endDates'] = [];
                        $projectArray['startDate'] = "";
                        $projectArray['endDate'] = "";
                        array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'], $projectArray);
                        $phases = DB::connection("pgsql")->select("select * from phase_data where projectid = ?", [$projectArray['id']]);
                        $phIndex = 0;
                        while($phIndex < count($phases)){
                            $phaseArray = (array) $phases[$phIndex];
                            $phaseArray['elements'] = [];
                            $phaseArray['FTs'] = [];
                            $phaseArray['DTs'] = [];
                            $phaseArray['LDs'] = [];
                            $phaseArray['fte'] = "0";
                            $phaseArray['duration'] = "0";
                            $phaseArray['load'] = "0";
                            array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'][$pjIndex]['phases'], $phaseArray);
                            array_push($reportingData[$ptIndex]['children'][$pgIndex]['startDates'], $phaseArray['start_date']);
                            array_push($reportingData[$ptIndex]['children'][$pgIndex]['endDates'], $phaseArray['end_date']);
                            // array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'][$pjIndex]['startDates'], $phaseArray['start_date']);
                            // array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'][$pjIndex]['endDates'], $phaseArray['end_date']);
                            $activities = DB::connection("pgsql")->select("select * from activity_data where phaseid = ?", [$phaseArray['id']]);
                            $acIndex = 0;
                            while($acIndex < count($activities)){
                                $activityArray = (array) $activities[$acIndex];
                                array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'][$pjIndex]['phases'][$phIndex]['elements'], $activityArray);
                                array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'][$pjIndex]['phases'][$phIndex]['FTs'], $activityArray['fte']);
                                array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'][$pjIndex]['phases'][$phIndex]['LDs'], $activityArray['load']);
                                array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'][$pjIndex]['phases'][$phIndex]['DTs'], $activityArray['duration']);
                                $acIndex++;
                            }
                            $phIndex++;
                        }
                        $pjIndex++;
                    }
                    $pgIndex++;
                }
                $ptIndex++;
            }
            $programes = $reportingData[0]['children'];
            $pgIndex = 0;
            while($pgIndex < count($programes)){
                $program = $programes[$pgIndex];
                if(count($program['startDates']) > 0 && count($program['endDates']) > 0){
                    $startDate = min($program['startDates']);
                    $endDate = max($program['endDates']);
                    $reportingData[0]['children'][$pgIndex]['startDate'] = $startDate;
                    $reportingData[0]['children'][$pgIndex]['endDate'] =  $endDate;
                }
                $projects = $program['children'];
                $pjIndex = 0;
                while($pjIndex < count($projects)){
                    $project = $projects[$pjIndex];
                    if(count($project['startDates']) > 0 && count($project['endDates']) > 0){
                        $startDate = min($project['startDates']);
                        $endDate = max($project['endDates']);
                        $reportingData[0]['children'][$pgIndex]['children'][$pjIndex]['startDate'] = $startDate;
                        $reportingData[0]['children'][$pgIndex]['children'][$pjIndex]['endDate'] =  $endDate;
                    }
                    $phases = $project['phases'];
                    $phIndex = 0;
                    while($phIndex < count($phases)){
                        $phase = $phases[$phIndex];
                        $FTs = count($phase['FTs']) > 0 ? array_sum($phase['FTs']) / count($phase['FTs']) : 0;
                        $LDs = count($phase['LDs']) > 0 ? array_sum($phase['LDs']) / count($phase['LDs']) : 0;
                        $DTs = count($phase['DTs']) > 0 ? array_sum($phase['DTs']) / count($phase['DTs']) : 0;
                        $reportingData[0]['children'][$pgIndex]['children'][$pjIndex]['phases'][$phIndex]['fte'] = $FTs;
                        $reportingData[0]['children'][$pgIndex]['children'][$pjIndex]['phases'][$phIndex]['duration'] = $DTs;
                        $reportingData[0]['children'][$pgIndex]['children'][$pjIndex]['phases'][$phIndex]['load'] = $LDs;
                        $phIndex++;

                    }
                    $pjIndex++;
                }
                $pgIndex++;
            }
            $result = json_encode($reportingData[0]);
        } catch(\Exception $e){
            echo $e->getMessage();
            return $e;
        }
        return $result;
    }

    public function create(Request $request)
    {
        // Create a new portfolio using the request data
        // $parent = $request->input('parentOrganization');
        // $portfolio = portfolio_data::create([
        //     'companyid' => '63d3d79802e5f6e2220b516d',
        //     'name' => $request->input('portfolioName'),
        //     'budget' => $request->input('portfolioBudget')
        // ]);

        // Return a response indicating success or failure
        return response()->json(['message' => 'Portfolio created successfully'], 201);
    }

    public function optimize(portfolio_data $portfolio_data)
    {
        $optimizeData = [];
        return $optimizeData;
    }
}
