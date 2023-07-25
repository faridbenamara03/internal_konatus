<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamBacklog extends Model
{
    use HasFactory;
    protected $table = 'teamBacklog';
    protected $fillable = ['teamid', 'start_date_engage', 'end_date_engage', 'start_date_reel', 'end_date_reel', 'weid'];
}
