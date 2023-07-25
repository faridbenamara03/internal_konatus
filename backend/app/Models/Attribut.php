<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attribut extends Model
{
    use HasFactory;
    protected $table = 'attribut';
    protected $fillable = ['weid', 'skillsetid', 'attributevalue',
    'attributepriority', 'attributecost', 'tag', 'date_update',
    'gateid', 'load_demande', 'load_engage', 'load_reel',
    'duration_demande', 'duration_engage', 'duration_reel',
    'fte_demande', 'fte_engage', 'fte_reel'];
}
