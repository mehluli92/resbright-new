<?php

namespace App\Http\Controllers;

use App\Services\RoleService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Log;

class RoleController extends Controller
{
    protected $roleService;

    public function __construct(RoleService $roleService){
        $this->roleService = $roleService;
    }

    public function index(){
        $roles = $this->roleService->getAllRoles();
        return Inertia::render('Roles/Roles',
         [
            'roles'=> $roles
        ]);
    }

    public function create() {

    }

    public function update() {

    }

    public function view($id){
        return Inertia::render('Roles/ViewRole',
        [
            'role' => $this->roleService->getRole($id)
        ]);
    }

    public function delete() {}
}
