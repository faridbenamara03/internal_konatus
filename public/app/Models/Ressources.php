<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ressources extends Model
{
    use HasFactory;
    protected $table = 'ressources';
    protected $fillable = ['name', 'idteam', 'activity', 'start_date', 'end_date'];
}
