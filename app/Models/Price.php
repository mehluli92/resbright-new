<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Price extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'us_price', 'rtgs_price', 'us_value', 'rtgs_value', 'rands_value',
        'cny_value', 'rupee_value', 'euro_value','gbp_value','pula_value',
        'us_duty', 'rtgs_duty', 'value_to_show','rb_file_id'
    ];

    //rbfile relationship
    public function rb_file()
    {
        return $this->belongsTo('App\RbFile');
    }
}
