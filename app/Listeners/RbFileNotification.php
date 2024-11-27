<?php

namespace App\Listeners;

use App\Events\RbFileCreated;
use App\Mail\RbFileCreatedEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Mail;

class RbFileNotification
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
    public function handle(RbFileCreated $event): void
    {
        Mail::to($event->rbfile->user->email)
        ->send(
            new RbFileCreatedEmail($event->rbfile)
        );
    }
}
