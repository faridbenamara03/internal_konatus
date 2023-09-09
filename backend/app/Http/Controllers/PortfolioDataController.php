<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\portfolio_data;
use DB;

class PortfolioDataController extends Controller
{
    public function reporting(portfolio_data $portfolio_data)
    {
        $reportingData = [];
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
                array_push($reportingData[$ptIndex]['children'], $programArray);
                $project = DB::connection("pgsql")->select("select * from project_data where programid = ?", [$programArray['id']]);
                $pjIndex = 0;
                while($pjIndex < count($project)){
                    $projectArray = (array) $project[$pjIndex];
                    array_push($reportingData[$ptIndex]['children'][$pgIndex]['children'], $projectArray['id']);
                    $pjIndex++;
                }
                $pgIndex++;
            }
            $ptIndex++;
        }
        return json_encode($reportingData[0]);
    }

    public function optimize(portfolio_data $portfolio_data)
    {
        $optimizeData = [];
        return $optimizeData;
    }
    
}
