<?php 

namespace App\Services;

use App\Models\Contact;

class ContactService {
    public function createContact($data) {
        return Contact::create($data);
    }
}