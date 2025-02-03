import FileDetailsComponent from '@/Components/File/FileDetailsComponent'
import CreatePaymentForm from '@/Components/File/Payment/CreatePaymentForm'
import AddPriceForm from '@/Components/File/Price/AddPriceForm'
import FileStatusUpdateForm from '@/Components/File/Status/FileStatusUpdateForm'
import FileStatusView from '@/Components/File/Status/FileStatusView'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { formatFriendlyDateTime } from '@/utils/DateTimeFormat'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'

export default function ViewFile({file}) {
    const authUser = usePage().props.auth.user

    return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Rb File
        </h2>
    }
    >
        <Head title="Dashboard" />

    <div className="pt-2  md:pb-6">
        <div className="mx-auto max-w-7xl sm:px-6">
            <div className="overflow-hidden">
                <p className='px-2 text-gray-900'>
                Rb File #{file.id} belonging to {file.user?.name} {file.user?.surname}. Created on {formatFriendlyDateTime(file.created_at)}
                </p>
                <div className="p-2 text-gray-900 grid grid-rows-2 md:grid-cols-2 md:gap-4 ">
                    <div className='grid grid-rows gap-4'>           

                    <FileDetailsComponent file={file}/>
                    {authUser.role !== 3 &&
                    <CreatePaymentForm file={file} />
                    }
                    </div>

                    <div className='grid grid-rows gap-4'>
                    {authUser.role === 3 && <FileStatusView status={file.status}/>}
                    {authUser.role !== 3 && <FileStatusUpdateForm status={file.status}/>}
                    {authUser.role !== 3 && <AddPriceForm file={file}/>}
                    </div>
                </div>
            </div>
        </div>
    </div>

    </AuthenticatedLayout>
  )
}
