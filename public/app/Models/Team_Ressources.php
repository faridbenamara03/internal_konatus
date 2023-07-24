<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team_Ressources extends Model
{
    use HasFactory;
    protected $table = 'team_ressources';
    protected $fillable = ['idressource', 'idteam', 'idskillseet', 'idActivitSkill', 'capacity_Nominal', 'capacity_Etendu', 'capacity_Maximale'];
}
