<?php 

namespace App\Services;

use App\Models\RbFile;


class ReportsService {

    protected $rbFileService;

    public function __construct(RbFileService $rbFileService){
        $this->rbFileService = $rbFileService;
    }

    public function getDataForAdminDashboard() {
        $dailySales = RbFile::selectRaw('DATE(created_at) as date, SUM(paid) as total')
            ->groupBy('date')
            ->orderBy('date')
            ->get();
        
        $monthlySales = RbFile::selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month, SUM(paid) as total')
                        ->groupBy('month')
                        ->orderBy('month')
                        ->get();
        
        $dailyFilesCount = RbFile::selectRaw('DATE(created_at) as date, COUNT(*) as total')
                            ->groupBy('date')
                            ->orderBy('date')
                            ->get();

        $monthlyFilesCount = RbFile::selectRaw('DATE_FORMAT(created_at, "%Y-%m") as month, COUNT(*) as total')
                            ->groupBy('month')
                            ->orderBy('month')
                            ->get();                    

        $latestFiles = $this->rbFileService->allFiles([], 5); 

        return [
            'dailySales' => $dailySales,
            'monthlySales' => $monthlySales, 
            'latestFiles' => $latestFiles,
            'dailyFilesCount' => $dailyFilesCount,
            'monthlyFilesCount' => $monthlyFilesCount,
        ];
    }
}