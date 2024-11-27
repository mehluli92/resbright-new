<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class EmploymentDetails extends Model
{
    use SoftDeletes;
    protected $fillable = [
        'company', 'position','ec_number',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
