<?php

namespace App\Providers;

use App\Events\PaymentEvent;
use App\Events\RbFileCreated;
use App\Events\RbFileQuote;
use App\Events\UserCreated;
use App\Listeners\RbFileNotification;
use App\Listeners\RbFileQuoteListener;
use App\Listeners\SendReceipt;
use App\Listeners\SendUserCreatedEmail;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Event;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Vite::prefetch(concurrency: 3);
        Event::listen(UserCreated::class, [SendUserCreatedEmail::class, 'handle']);
        Event::listen(RbFileCreated::class, [RbFileNotification::class, 'handle']);
        Event::listen(RbFileQuote::class, [RbFileQuoteListener::class, 'handle']);
        Event::listen(PaymentEvent::class, [SendReceipt::class, 'handle']);
    }
}
