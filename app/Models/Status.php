<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Status extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'file_opened','controls_checked','tax_clearence_valid','worksheet_done','quotation_sent','duty_paid',
        'entry_submitted','entry_self_assessed','entry_examined','query_raised_on_values','query_raised_on_classification',
        'pe_conducted','query_resolved','entry_assessed','entry_released','entry_acquited','storages_paid',
        'entry_dispached','goods_delivered','service_fees_paid','file_closed', 'rb_file_id',
    ];

     //rbfile relationship 
     public function rb_file()
     {
         return $this->belongsTo('App\Models\RbFile');
     }
}
