<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SkillsetActivity extends Model
{
    use HasFactory;
    protected $table = 'skillsetActivity';
    protected $fillable = ['name', 'libelle'];
}
