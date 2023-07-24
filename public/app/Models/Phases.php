<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Phases extends Model
{
    use HasFactory;
    protected $table = 'phases';
    protected $fillable = ['name'];
}
