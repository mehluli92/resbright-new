<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'user_id', 'address1','address2', 'country',
    ];

    public function user()
    {
        return $this->belongsTo('App\Models\User');
    }
}
