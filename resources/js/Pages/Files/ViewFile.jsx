import FileDetailsComponent from '@/Components/File/FileDetailsComponent'
import CreatePaymentForm from '@/Components/File/Payment/CreatePaymentForm'
import AddPriceForm from '@/Components/File/Price/AddPriceForm'
import FileStatusUpdateForm from '@/Components/File/Status/FileStatusUpdateForm'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { formatFriendlyDateTime } from '@/utils/DateTimeFormat'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'

export default function ViewFile({file}) {

    return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Rb File
        </h2>
    }
    >
        <Head title="Dashboard" />

    <div className="pt-2 pb-6">
            {/* {flash.success && (
                <div className="alert alert-success">
                    {flash.success}
                </div>
            )} */}
        <div className="mx-auto max-w-7xl sm:px-6">
            <div className="overflow-hidden">
                <p className='px-2 text-gray-900'>
                Rb File #{file.id} belonging to {file.user?.name} {file.user?.surname}. Created on {formatFriendlyDateTime(file.created_at)}
                </p>
                <div className="p-2 text-gray-900 grid grid-rows-2 md:grid-cols-2 gap-4 ">
                    <div className='grid grid-rows-2 gap-4'>
                        <FileDetailsComponent file={file}/>
                        <CreatePaymentForm file={file} />
                    </div>
                    <div className='grid grid-rows-2 gap-4'>
                        <FileStatusUpdateForm status={file.status}/>
                        <AddPriceForm file={file}/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </AuthenticatedLayout>
  )
}
