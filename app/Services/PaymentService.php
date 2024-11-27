<?php 

namespace App\Services;

use App\Events\PaymentEvent;
use App\Models\Payment;

class PaymentService {

    public function getPayment($id) {
        return Payment::find($id);
    }


    public function createPayment($data) {
        return Payment::create($data);
    }

    public function updatePayment($data) {
        // $payment = Payment::update($data);
        $payment = Payment::find($data['id']);
       $newPayment = $payment->update($data);
        event(new PaymentEvent($newPayment));
        return $payment;
    }

    public function deletePayment($id) {
        $payment = Payment::find($id);
        return $payment->delete();
    }
}