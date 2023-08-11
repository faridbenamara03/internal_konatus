<?php

namespace App\Http\Controllers;

use App\Models\TeamData;
use Illuminate\Http\Request;

class TeamDataController extends Controller
{
    public function demand(TeamData $teamData)
    {
        $teamDemandData = [];
        $teams = DB::connection("pgsql")->select("select * from team_data");
        $tIndex = 0;
        while($tIndex < count($teams)){
            $teamArray = (array) $teams[$tIndex];
            $teamArray['children'] = [];
            $teamArray['phases'] = [];
            array_push($teamDemandData, $teamArray);
            $teamMembers = DB::connection('pgsql')->select("select * from team_member_data WHERE teamid = ?", [$teamArray['id']]);
            $tmIndex = 0;
            while($tmIndex < count($teamMembers)){
                $teamMemberArray = (array) $teamMembers[$tmIndex];
                array_push($teamDemandData[$tIndex]['children'], $teamMemberArray);
                $tmIndex++;
            }
            $tIndex++;
        }
        return json_encode($teamDemandData[0]);
    }

    public function reporting(TeamData $teamData)
    {
        $teamReportingData = [];
        $portfolio = DB::connection("pgsql")->select("select * from portfolio_data");
        $ptIndex = 0;
        while($ptIndex < count($portfolio)){
            $portfolioArray = (array) $portfolio[$ptIndex];
            $portfolioArray['children'] = [];
            array_push($teamReportingData, $portfolioArray);
            $program = DB::connection('pgsql')->select("select * from program_data WHERE portfolioid = ?", [$portfolioArray['id']]);
            $pgIndex = 0;
            while($pgIndex < count($program)){
                $programArray = (array) $program[$pgIndex];
                $programArray['children'] = [];
                array_push($teamReportingData[$ptIndex]['children'], $programArray);
                $project = DB::connection("pgsql")->select("select * from project_data where programid = ?", [$programArray['id']]);
                $pjIndex = 0;
                while($pjIndex < count($project)){
                    $projectArray = (array) $project[$pjIndex];
                    array_push($teamReportingData[$ptIndex]['children'][$pgIndex]['children'], $projectArray['id']);
                    $pjIndex++;
                }
                $pgIndex++;
            }
            $ptIndex++;
        }
        return json_encode($teamReportingData[0]);
    }

    public function control(TeamData $teamData)
    {
        $teamControlData = [];
        $teams = DB::connection("pgsql")->select("select * from team_data");
        $tIndex = 0;
        while($tIndex < count($teams)){
            $teamArray = (array) $teams[$tIndex];
            $teamArray['data'] = ["24/24", "24/24", "24/24", "24/24", "24/24", "24/24", "28/24"];
            array_push($teamControlData, $portfolioArray);
            $ptIndex++;
        }
        return json_encode($teamControlData);
    }
}
