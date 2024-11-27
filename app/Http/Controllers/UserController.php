<?php

namespace App\Http\Controllers;

use App\Services\RoleService;
use App\Services\UserService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    protected $userService;
    protected $roleService;

    public function __construct(
        UserService $userService,
        RoleService $roleService
        ){
        $this->userService = $userService;
        $this->roleService = $roleService;
    }

    public function index(Request $request){
        $users = $this->userService->getAllUsers($request->all());
        return Inertia::render('Users/Users',
         [
            'users'=> $users
        ]);
    }

    public function searchUser(Request $request) {
        $email = $request->query('email');

        $users = $this->userService->searchUser($email);

        return response()->json($users);
    }

    public function createUserForm() {
        $roles = $this->roleService->getAllRoles();
        return Inertia::render('Users/CreateUser',
        [
            'roles' => $roles
        ]);
    }

    public function create(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => 'required',
            'mobile' => 'required|string',
            'idnumber' => 'required|string',
        ]);


        $userData = $request->all();
        
        $userData['password'] = bcrypt($request->mobile);

        $this->userService->createUser($userData);
        return redirect()->route('user-all')->with('success', "User created successfully.");
    }

    public function getUpdateForm($id) {
        $roles = $this->roleService->getAllRoles();
        $user = $this->userService->getUser($id);

        return Inertia::render('Users/UpdateUser',
        [
            'roles' => $roles,
            'user' => $user
        ]);
    }

    public function update(Request $request) {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'role' => 'required',
            'mobile' => 'required|string',
            'idnumber' => 'required|string',
        ]);
        $this->userService->createUser($request->all());
        return redirect()->route('user-all')->with('success', "User updated successfully.");
    }

    public function view($id){
        $user = $this->userService->getUser($id);

        return Inertia::render('Users/ViewUser',
        [
            'user' => $user
        ]);
    }

    public function delete($id) {
        $this->userService->deleteUser($id);
        return redirect()->route('user-all')->with('success', "User created successfully.");
    }
}
