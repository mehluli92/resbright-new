<?php 

namespace App\Services;

use App\Events\PaymentEvent;
use App\Models\Payment;
use App\Models\RbFile;

class PaymentService {

    public function getPayment($id) {
        return Payment::find($id);
    }


    public function createPayment($data) {
        $payment = Payment::create($data);
        // event(new PaymentEvent($payment));
        return $payment;
    }

    public function updatePayment($data) {
        $payment = Payment::find($data['id']);
        $payment->fill($data);
        $payment->save();
        event(new PaymentEvent($payment));
        $rbfile =  RbFile::find($payment->rb_file_id);
        if($payment->us_duty !== null){
            $totalPaid = $payment->us_price + $payment->us_duty;
            $rbfile->paid = $totalPaid;
            $rbfile->currency = 'USD';
            $rbfile->save();
        } else {
            $totalPaid = $payment->rtgs_price + $payment->rtgs_duty;
            $rbfile->paid = $totalPaid;
            $rbfile->currency = 'ZWG';
            $rbfile->save();
        } 
       
        return $payment;
    }

    public function deletePayment($id) {
        $payment = Payment::find($id);
        return $payment->delete();
    }
}