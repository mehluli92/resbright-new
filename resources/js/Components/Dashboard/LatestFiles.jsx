import React from 'react'

export default function LatestFiles({files}) {
  return (
    <div className='p-2 text-gray-900'>
        <h4 className='font-semibold'>Latest Files</h4>
        <div 
        className='grid grid-cols-5 rounded-t bg-gray-100 py-2 px-1 border-b mt-2'
        >
            <h6>Import</h6>
            <h6>Importer</h6>
            <h6>Supplier</h6>
            <h6>Paid</h6>
            <h6>User</h6>
        </div>
        {files && files.data.map((file)=>(
        <div 
        key={file.id}
        className='grid grid-cols-5 py-2 px-1 border-b text-sm text-gray-700'
        >
            <h6>{file.import}</h6>
            <h6>{file.importer}</h6>
            <h6>{file.supplier}</h6>
            <h6>{file.paid == null ? 'No': file.paid}</h6>
            <h6>{file.user.name}</h6>
        </div>
        ))}
    </div>
  )
}
