import React from 'react'

export default function FileDetailsComponent({file}) {
  return (
    // document: file.document || null, // pdf to upload (optional replacement)
    // invoice: file.invoice || null, //pdf invoice
    <div className='px-4 shadow-lg h-[480px]'>
        <h2 className='text-lg font-bold py-2'>File Details.</h2>

        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Import</h6> <p className='col-span-3'>{file.import == 1 ? 'Import To Zimbabwe' : 'Export from Zimbabwe'}</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>
                {file.import == 1 ? 'Importer': 'Exporter'}
            </h6> 
            <p className='col-span-3'>{file.importer}</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Supplier</h6> <p className='col-span-3'>{file.supplier}</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Container</h6> <p className='col-span-3'>{file.container}</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Entry Number</h6> <p className='col-span-3'>{file.entry_number}</p>
        </div>

        <h4 className='font-bold text-lg py-1'>Package description</h4>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Weight</h6> <p className='col-span-3'>{file.weight} kgs</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Quantity of Boxes</h6> <p className='col-span-3'>{file.quantity_of_boxes}</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Tarrif</h6> <p className='col-span-3'>{file.tarrif}</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>File description</h6> <p className='col-span-3'>{file.description}</p>
        </div>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Bill of Ladding</h6> <p className='col-span-3'>{file.bill_of_lading}</p>
        </div>

        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Manifest</h6> <p className='col-span-3'>{file.manifest}</p>
        </div>

        <h4 className='font-bold text-lg py-1'>Package destination</h4>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className='font-bold col-span-1'>Address</h6> <p className='col-span-3'>{file.destination?.address1}, {file.destination?.address2}, {file.destination?.country}</p>
        </div>

        <h4 className='font-bold text-lg py-1'>Payment details</h4>
        <div className='grid grid-cols-4 gap-2'>
            <h6 className={`font-bold col-span-1 ${file.paid == null ? 'text-red-700':''}`}>Amount paid</h6> <p className='col-span-3'> {file.currency} {file.paid}</p>
        </div>
    </div>
  )
}
