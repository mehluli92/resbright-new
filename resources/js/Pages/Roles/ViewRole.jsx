import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function ViewRole({role}) {
  return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          View Role
        </h2>
      }
    >
        <Head title="Dashboard" />

        <div
        className='text-gray-900 max-w-7xl sm:px-16'
        >
            <div
            className='grid grid-cols-4 p-2 items-center'
            >
                <h4 className='font-semibold'>Role Name:</h4> {role?.name}
            </div>

            <div
            className='grid grid-cols-4 p-2 items-center'
            >
                <h4 className='font-semibold'>Role Description:</h4> {role?.description}
            </div>

        </div>
    </AuthenticatedLayout>
  )
}
