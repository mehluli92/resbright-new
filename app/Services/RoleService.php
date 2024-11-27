<?php 

namespace App\Services;

use App\Models\Role;

class RoleService {

    public function getAllRoles() {
        $roles = Role::paginate(10);
        return $roles;
    }

    public function getRole($id) {
        return Role::find($id);
    }
}