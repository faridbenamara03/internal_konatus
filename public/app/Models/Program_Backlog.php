<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program_Backlog extends Model
{
    use HasFactory;
    protected $table = 'program_backlog';
    protected $fillable = ['pogramme', 'programname', 'priority',
    'value', 'roi', 'customersatisfaction', 'constraints', 'description',
    'productline', 'activity', 'sponsorid', 'businessownerid',
    'programdirectorid', 'headprogramdirectorid', 'architecteid', 'labels',
    'budget_demande'];
}
