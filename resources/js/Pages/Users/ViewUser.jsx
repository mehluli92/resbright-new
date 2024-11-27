import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function ViewUser({user}) {
  return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          View User
        </h2>
      }
    >
        <Head title="User Details"/>
        <div className="pt-2 pb-6">
            <div className="mx-auto max-w-7xl sm:px-6">
                <div className="overflow-hidden">
                    <div className="px-2 text-gray-900 md:w-2/5">
                        <div className='flex flex-row justify-between'>
                            <h5 className='font-bold'>Name:</h5>
                            {user.name}
                        </div>
                        <div className='flex flex-row justify-between'>
                            <h5 className='font-bold'>Surname:</h5>
                            {user.surname}
                        </div>
                        <div className='flex flex-row justify-between'>
                            <h5 className='font-bold'>Email:</h5>
                            {user.email}
                        </div>
                        <div className='flex flex-row justify-between'>
                            <h5 className='font-bold'>ID number:</h5>
                            {user.idnumber}
                        </div>
                        <div className='flex flex-row justify-between'>
                            <h5 className='font-bold'>Mobile number:</h5>
                            {user.mobile}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
  )
}
