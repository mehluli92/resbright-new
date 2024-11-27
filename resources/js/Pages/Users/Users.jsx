import NavLink from '@/Components/NavLink'
import Pagination from '@/Components/Pagination'
import SecondaryButton from '@/Components/SecondaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function Users({users}) {
    const { data, setData, get } = useForm({
        email: '',
        mobile: '',
        role: '',
      })
    
    const handleFilterChange = (e) => {
        const { name, value } = e.target
        setData(name, value)
    }

    const handleFilterSubmit = (e) => {
        e.preventDefault()
        get(route('user-all'))
      }

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this user?')) {
            Inertia.delete(route('user-delete', { id }))
        }
    }

  return (
    <AuthenticatedLayout
        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Users
            </h2>
        }
    >
        <Head title="Users" />

        <div className="pt-2 pb-6">
        <div className="mx-auto max-w-7xl sm:px-6">
            <div className="overflow-hidden bg-white">
                <div
                id='actions-and-filters'
                className='mb-2 px-1 py-1'
                >
                    <NavLink
                    href={route('create-user')}
                    >
                        <SecondaryButton>add user</SecondaryButton>
                    </NavLink>
                
                     {/* Filters Form */}
            <form
              onSubmit={handleFilterSubmit}
              className="mb-4 grid gap-4 sm:grid-cols-3 px-4"
            >
              {/* Mobile Filter */}
              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={data.mobile}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300  shadow-sm focus:border-cyan-700 focus:ring-cyan-700 sm:text-sm"
                  placeholder="Search by mobile"
                />
              </div>

              {/* Created At Filter */}
              <div>
                <label htmlFor="role" className="block font-medium sm:text-sm">
                  Role
                </label>
                <select
                value={data.role}
                id="role"
                name="role"
                onChange={handleFilterChange}
                className="border-gray-300 py-1 mt-1 block w-full text-gray-700 font-xs"
                >
                <option value=''>Select role</option>
                <option value='3'>Customer</option>
                <option value='2'>Admin</option>
                <option value='1'>SuperAdmin</option>
                </select>
              </div>

              {/* Email Filter */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={handleFilterChange}
                  className="mt-1 block w-full border-gray-300 shadow-sm focus:border-cyan-700 focus:ring-cyan-700 sm:text-sm"
                  placeholder="Search by email"
                />
              </div>

              {/* Submit Button */}
              <div className="sm:col-span-3 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex justify-center border border-transparent bg-cyan-700 py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:ring-offset-2"
                >
                  Apply Filters
                </button>
              </div>
            </form>
                </div>
                <div className="px-2 text-gray-900">
                <div
                className="grid grid-cols-9 gap-2 py-4 px-2 bg-gray-50 rounded-t border-b border-gray-100"
                >
                    <p>Id</p>
                    <p>Name</p>
                    <p>Surname</p>
                    <p className='col-span-2'>Email</p>
                    <p>Role</p>
                    <p>Mobile</p>
                    <p>ID number</p>
                    <p>Action</p>
                </div>
                <ul>
                {users &&
                users.data.map((user)=>(
                    <li 
                    key={user.id}
                    className="grid grid-cols-9 gap-1 py-6 px-2 border-b border-gray-100 text-sm"
                    >
                        <p>{user.id}</p>
                        <p>{user.name}</p>
                        <p>{user.surname}</p>
                        <p className='col-span-2'>{user.email}</p>
                        <p>{user.role?.name}</p>
                        <p>{user.mobile}</p>
                        <p>{user.idnumber}</p>
                        <div
                        className='flex gap-2'
                        >
                            <Link
                            href={`/user/view/${user.id}`}
                            >
                            View
                            </Link>
                            <Link
                            href={`/user-update-form/${user.id}`}
                            >
                            Edit
                            </Link>
                            <span
                            onClick={() => handleDelete(user.id)}
                            className="text-red-700"
                            >
                            Delete
                            </span>
                        </div>
                    </li>
                ))
                }
                </ul>  

                 {/* Pagination Component */}
                <Pagination links={users.links} />
                </div>
            </div>
        </div>
    </div>
    </AuthenticatedLayout>
  )
}
