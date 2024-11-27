<?php 

namespace App\Services;

use App\Models\Destination;

class DestinationService {
    public function getDestinationById($id) {
        return Destination::findOrFail($id);
    } 

    public function createDestination($data) {
        return Destination::create($data);
    }

    public function updateDestination($data) {
        $status = Destination::find($data['id']);
        return $status->update($data);
    }

    public function deleteDestination($id) {
        $destination = Destination::find($id);
        return $destination->delete();
    }
}