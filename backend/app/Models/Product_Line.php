<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product_Line extends Model
{
    use HasFactory;
    protected $table = 'module';
    protected $fillable = ['id_product_line', 'budg_product_line'];
}
