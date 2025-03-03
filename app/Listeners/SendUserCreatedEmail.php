<?php

namespace App\Listeners;

use App\Events\UserCreated;
use App\Mail\UserCreatedEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use Log;


class SendUserCreatedEmail
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
    public function handle(UserCreated $event): void
    {
        $user = $event->user;
        $email = $event->user->email;
        Mail::to($email)
        ->send(
            new UserCreatedEmail($user)
        );
    }
}
