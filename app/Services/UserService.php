<?php 

namespace App\Services;

use App\Events\UserCreated;
use App\Models\User;


class UserService {
    /**
     * Fetch all users.
     */
    public function getAllUsers($data)
    {
        $query = User::query();
        if (isset($data['email']) && !empty($data['email'])) {
            $query->where('email', 'like', '%' . $data['email'] . '%');
        }

        if (isset($data['mobile']) && !empty($data['mobile'])) {
            $query->where('mobile', 'like', '%' . $data['mobile'] . '%');
        }

        if (isset($data['role']) && !empty($data['role'])) {
            $query->where('role', $data['role']);
        }
        $query->with('role');
        $query->orderBy('created_at', 'desc');
        return $query->paginate(15);
    }

    public function searchUser($email = null) {
        $query = User::query();

        if($email) {
            $query->where('email', 'like', '%' . $email . '%');
        }
        return $query->paginate(5);
    }

    /**
     * Create a new user.
     */
    public function createUser(array $data)
    {
        $user = User::create($data);
        event(new UserCreated($user));
        return $user;
    }

    public function getUser($id)
    {
        $user = User::find($id);
        return $user;
    }

    public function getUserForClientDashboard($id) 
    {
        $user = User::with(['rb_files' => function ($query) {
            $query->latest()->take(5);
        }])->find($id);        
        return $user;
    }

    public function updateUser($data) {
        return User::update($data);
    }

    public function deleteUser($id) {
        return User::destroy($id);
    }
}