<?php

namespace App\Listeners;

use App\Events\RbFileQuote;
use App\Mail\RbFileQuotation;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Mail;

class RbFileQuoteListener
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
    public function handle(RbFileQuote $event): void
    {
        Mail::to($event->price->rb_file->user->email)
        ->send(
            new RbFileQuotation($event->price)
        );
    }
}
