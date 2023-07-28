<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;

class CompanyDataController extends Controller
{
    //
    function nav_data(Request $request)
    {
        $navData = [];
        $orgData = [];
        $orgData1 = [];
        $result = [];
        $companys = DB::connection("pgsql")->select("select * from company_data");
        if(count($companys) > 0) {
            $company = (array) $companys[0];
            $company['children'] = [];
            $portfolio = DB::connection("pgsql")->select("select * from portfolio_data where companyid = ?", [$company['id']]);
            $ptIndex = 0;
            while($ptIndex < count($portfolio)){
                 $portfolioArray = (array) $portfolio[$ptIndex];
                 $portfolioArray['children'] = [];
                 array_push($company['children'], $portfolioArray);
                 $program = DB::connection('pgsql')->select("SELECT * FROM program_data WHERE portfolioid = ?", [$portfolioArray['id']]);
                 $pgIndex = 0;
                 while($pgIndex < count($program)){
                      $programArray = (array) $program[$pgIndex];
                      $programArray['children'] = [];
                      array_push($company['children'][$ptIndex]['children'], $programArray);
                      $project = DB::connection("pgsql")->select("select * from project_data where programid = ?", [$programArray['id']]);
                      $pjIndex = 0;
                      while($pjIndex < count($project)){
                          $projectArray = (array) $project[$pjIndex];
                          $projectArray['phases'] = [];
                          array_push($company['children'][$ptIndex]['children'][$pgIndex]['children'], $projectArray);
                          $phases = DB::connection("pgsql")->select("select * from phase_data where projectid = ?", [$projectArray['id']]);
                          $phIndex = 0;
                          while($phIndex < count($phases)){
                            $phaseArray = (array) $phases[$phIndex];
                            array_push($company['children'][$ptIndex]['children'][$pgIndex]['children'][$pjIndex]['phases'], $phaseArray);
                            $phIndex++;
                          }
                          $pjIndex++;
                      }
                      $pgIndex++;
                  }
                  $ptIndex++;
            }
            $navData = $company;
        }

        $organizations = DB::connection("pgsql")->select("select * from organization_data");
        if(count($organizations) > 0) {
          $organization = (array) $organizations[0];
          $organization['children'] = [];
          $units = DB::connection("pgsql")->select("select * from unit_data where organizationid = ?", [$organization['id']]);
          $utIndex = 0;
          while($utIndex < count($units)){
            $unitArray = (array) $units[$utIndex];
            $unitArray['children'] = [];
            array_push($organization['children'], $unitArray);
            $teams = DB::connection('pgsql')->select("select * from team_data WHERE unitid = ?", [$unitArray['id']]);
            $tIndex = 0;
            while($tIndex < count($teams)){
                $teamArray = (array) $teams[$tIndex];
                $teamArray['children'] = [];
                array_push($organization['children'][$utIndex]['children'], $teamArray);
                $teamusers = DB::connection("pgsql")->select("select * from team_member_data where teamid = ?", [$teamArray['id']]);
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
}
