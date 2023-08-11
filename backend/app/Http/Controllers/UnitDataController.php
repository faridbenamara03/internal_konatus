<?php

namespace App\Http\Controllers;

use App\Models\UnitData;
use Illuminate\Http\Request;

class UnitDataController extends Controller
{
    //
    public function demand(UnitData $unitData)
    {
        $unitDemandData = [];
        $portfolio = DB::connection("pgsql")->select("select * from portfolio_data");
        $ptIndex = 0;
        while($ptIndex < count($portfolio)){
            $portfolioArray = (array) $portfolio[$ptIndex];
            $portfolioArray['children'] = [];
            array_push($unitDemandData, $portfolioArray);
            $program = DB::connection('pgsql')->select("select * from program_data WHERE portfolioid = ?", [$portfolioArray['id']]);
            $pgIndex = 0;
            while($pgIndex < count($program)){
                $programArray = (array) $program[$pgIndex];
                $programArray['children'] = [];
                $programArray['data'] = ["15", "31", "81", "104", "0", "2", "13", "41"];
                array_push($unitDemandData[$ptIndex]['children'], $programArray);
                $project = DB::connection("pgsql")->select("select * from project_data where programid = ?", [$programArray['id']]);
                $pjIndex = 0;
                while($pjIndex < count($project)){
                    $projectArray = (array) $project[$pjIndex];
                    $projectArray['data'] = ["15", "31", "81", "104", "0", "2", "13", "41"];
                    array_push($unitDemandData[$ptIndex]['children'][$pgIndex]['children'], $projectArray['id']);
                    $pjIndex++;
                }
                $pgIndex++;
            }
            $ptIndex++;
        }
        return json_encode($unitDemandData[0]);
    }

    public function reporting(UnitData $unitData)
    {

    }

    public function control(UnitData $unitData)
    {

    }
}
