<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Payment extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'us_price', 'rtgs_price', 'us_duty', 'rtgs_duty', 'rb_file_id',
    ];

     //rbfile relationship
     public function rb_file()
     {
         return $this->belongsTo('App\Models\RbFile');
     }
}
