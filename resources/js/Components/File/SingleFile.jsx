import { Link, useForm, usePage } from '@inertiajs/react'
import React, { useState } from 'react'

export default function SingleFile({ file }) {
    const [open, setOpen] = useState(false)
    const authUser = usePage().props.auth.user
    const {  delete: deleteForm, errors, processing } = useForm({})

    const handleDownload = (fileName) => {
        window.location.href = route("file-download", fileName);
    };

    const handleDownloadFile = (fileName) => {
        window.location.href = route("document-download", fileName);
    };


    function handleClick() {
        setOpen(!open)
    }

    function handleDeleteFile() {
        alert(`Are you sure you want to delete file ${''}  ${file.entry_number} ?`)
            try {
                deleteForm(`/file/${file.id}`)
                Inertia.reload()
            } catch (error) {
                
            }
    }

    return (
        <li className={`${open ? 'shadow-lg' : ''}`}>
            {/* Main Row */}
            <div
                className="flex flex-wrap md:grid md:grid-cols-8 py-6 px-2 items-center text-sm cursor-pointer border-b border-gray-300"
                onClick={handleClick}
            >
                <p className="w-1/2 md:w-auto font-semibold">{file.entry_number}</p>
                <p className="w-1/2 md:w-auto md:pl-0 text-gray-700">
                    {file.import === 1 ? 'Import' : 'Export'}
                </p>
                <p className="w-1/2 md:w-auto md:pl-0 truncate">{file.importer}</p>
                <p className="w-1/2 md:w-auto truncate">{file.supplier}</p>
                <p className="w-1/2 md:w-auto text-blue-600">
                    {file.invoice &&
                    <button onClick={() => handleDownload(file.invoice)}>
                        Download
                    </button>
                    }
                    {!file.invoice &&
                        'Missing invoice'
                    }
                </p>
                <p className="w-1/2 md:w-auto text-gray-700">No</p>
                <p className="w-1/2 md:w-auto text-gray-700">{file.tarrif}</p>
                <p className="w-1/2 md:w-auto text-blue-600">
                    {file.document &&
                        <button onClick={() => handleDownloadFile(file.document)}>
                        Download
                    </button>
                    }
                    {!file.document &&
                        'Missing File'
                    }
                </p>
            </div>

            {/* Expanded Section */}
            {open && (
                <div className="grid gap-4 md:grid-cols-5 p-4 text-sm">
                    <div>
                        <h5 className="font-bold mb-2">File Description:</h5>
                        <p className="text-gray-700">{file.description}</p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">Bill of Lading:</h5>
                        <p className="text-gray-700">{file.bill_of_lading}</p>
                    </div>
                    <div>
                        <h5 className="font-bold mb-2">Manifest:</h5>
                        <p className="text-gray-700">{file.manifest}</p>
                    </div>
                    <div>
                        <div className="mb-2">
                            <h5 className="font-semibold">Ref:</h5>
                            <p className="text-gray-700">{file.ref}</p>
                        </div>
                        <div className="mb-2">
                            <h5 className="font-semibold">Boxes Quantity:</h5>
                            <p className="text-gray-700">{file.quantity_of_boxes}</p>
                        </div>
                        <div className="mb-2">
                            <h5 className="font-semibold">Weight:</h5>
                            <p className="text-gray-700">{file.weight} kgs</p>
                        </div>
                        <div>
                            <h5 className="font-semibold">Container:</h5>
                            <p className="text-gray-700">{file.container}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href={`/file/view/${file.id}`}>
                            <span className='capitalize text-gray-500 hover:text-gray-600'>view</span>
                        </Link>
                        { authUser.role == 3 ? 
                        '':
                        <Link href={`/file/${file.id}`}>
                            <span className='capitalize text-gray-500 hover:text-gray-600'>
                                {authUser.role == 3 ? 'edit':'Respond to File'}
                            </span>
                        </Link>
                        }
                        <div>
                        {authUser.role == 3 ? 
                        '':
                        <span 
                        onClick={handleDeleteFile}
                        className='capitalize text-red-700 hover:text-red-500'
                        >delete</span>
                        }
                        </div>
                    </div>
                </div>
            )}
        </li>
    )
}
