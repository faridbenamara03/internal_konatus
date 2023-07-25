<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type_Attribute extends Model
{
    use HasFactory;
    protected $table = 'type_attribute';
    protected $fillable = ['wording'];
}
