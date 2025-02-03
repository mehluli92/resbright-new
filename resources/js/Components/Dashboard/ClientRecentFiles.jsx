import { Link } from '@inertiajs/react'
import React from 'react'

export default function ClientRecentFiles({files}) {

    return (
    <div className='space-y-2'>
        <h2 className='text-xl font-bold text-red-600 md:mb-4 mb-2 border-b pb-4'>Imports under processing.</h2>
        <div className='flex flex-wrap gap-1'>
            {files &&
            files.map((file)=>(
                <div 
                key={file.id} 
                className="shadow-lg h-[200px] w-full md:w-[300px] border border-gray-200 rounded-lg p-3"
                >
                    <h4 className='border-b border-gray-200 text-cyan-900 font-bold text-lg mb-4'>Track your import</h4>
                    <div>
                        <p>{file.description}</p>
                        <p>Importer is {file.importer}</p>
                    </div>
                    <Link href={`/file/view/${file.id}`}>
                            <span className='capitalize text-blue-600 hover:text-blue-700 float-right mt-16'>
                                View file
                            </span>
                    </Link>
                </div>
            ))
            }
            {!files &&
            <p>You have no import yet. To create on click here.</p>
            }
        </div>
    </div>
  )
}
