<?php

namespace App\Listeners;

use App\Events\PaymentEvent;
use App\Mail\ReceiptEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Mail;

class SendReceipt
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(PaymentEvent $event): void
    {
        Mail::to($event->payment->rb_file->user->email)
        ->send(
            new ReceiptEmail($event->payment)
        );
    }
}
