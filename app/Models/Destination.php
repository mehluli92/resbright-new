<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Destination extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'address1', 'address2','country', 'rb_file_id',
    ];

    public function rb_file()
    {
        return $this->belongsTo('App\Models\RbFile');
    }
}
