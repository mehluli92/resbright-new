import React from 'react'

export default function ClientRecentFiles({files}) {
  return (
    <div className='space-x-2'>
        <h2 className='text-xl font-bold'>Imports under tracking.</h2>
        <div>
            {files &&
            files.map((file)=>(
                <div 
                key={file.id} 
                className="shadow w-8 h-8"
                >
                    gg
                </div>
            ))
            }
        </div>
    </div>
  )
}
