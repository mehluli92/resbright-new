<?php 

namespace App\Services;

use App\Models\EmploymentDetails;

class EmploymentDetailService {
    public function getEmployeeDetails($id) {
        return EmploymentDetails::find($id);
    }

    public function createEmployeeDetails($data) {
        return EmploymentDetails::create($data);
    }
}