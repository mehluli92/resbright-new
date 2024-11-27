<?php

namespace App\Http\Controllers;

use App\Services\RbFileService;
use App\Services\ReportsService;
use App\Services\UserService;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class HomeController extends Controller
{
    protected $reportService;
    protected $userService;

    public function __construct(
        ReportsService $reportService,
        UserService $userService
    ){
        $this->reportService = $reportService;
        $this->userService = $userService;
    }

    public function dashboard() {
        $user = Auth::user();

        if ($user->role === 3){
            $data = $this->userService->getUserForClientDashboard($user->id);
        } else {
            $data =  $this->reportService->getDataForAdminDashboard();
        }
        return Inertia::render('Dashboard',
        [
            'data' => $data
        ]
        );
    }
}
