import React from 'react';

export default function RoleDropdown({ roles, updateRole }) {
    // Handle the role change
    function handleChange(event) {
        const selectedRoleId = event.target.value; // Get the selected value
        updateRole(selectedRoleId); // Call the update function with the role ID
    }

    return (
        <div className="flex flex-col">
            <label
                htmlFor="roles" // Use htmlFor instead of for in JSX
                className="text-sm font-medium text-gray-700"
            >
                Select Role
            </label>
            <select
                name="roles"
                id="roles"
                className="border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-1"
                onChange={handleChange} // Correctly call the handleChange function
            >
                <option value="" disabled selected>
                    Select a role
                </option>
                {roles.data.map((role) => (
                    <option key={role.id} value={role.id}>
                        {role.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
