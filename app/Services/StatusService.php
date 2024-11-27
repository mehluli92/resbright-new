<?php 

namespace App\Services;

use App\Models\Status;

class StatusService {
    public function createStatus($data) {
        return Status::create($data);
    }
    public function updateStatus($data) {
        $status = Status::find($data['id']);
        return $status->update($data);
    }

    public function getStatus($id) {
        return Status::find($id);
    }
}