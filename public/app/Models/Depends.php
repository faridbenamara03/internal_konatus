<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Depends extends Model
{
    use HasFactory;
    protected $table = 'depends';
    protected $fillable = ['parentid', 'childid', 'idmodule'];
}
