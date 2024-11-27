import Pagination from '@/Components/Pagination'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Roles({ roles }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          User Roles
        </h2>
      }
    >
      <Head title="Roles" />

      <div className="pt-2 pb-6">
        <div className="mx-auto max-w-7xl sm:px-6">
          <div className="overflow-hidden">
            <div className="px-2 text-gray-900">
                <div
                className='hidden md:grid grid-cols-3 gap-2 bg-gray-50 rounded-t py-3 px-2'
                >
                    <p>Name</p>
                    <p>Description</p>
                    <p>Action</p>
                </div>
              <ul>
                {roles &&
                  roles.data.map((role) => (
                    <li 
                    key={role.id} 
                    className="grid grid-cols-3 gap-1 py-2 px-2 border-b border-gray-100 text-sm"
                    >
                      <p>{role.name}</p>
                      <p>{role.description}</p>
                      <div>
                        <Link href={`/role/${role.id}`}>View</Link>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>

             {/* Pagination Component */}
             <Pagination links={roles.links} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
