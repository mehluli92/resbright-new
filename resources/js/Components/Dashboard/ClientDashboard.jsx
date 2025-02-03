import React from 'react'
import ClientRecentFiles from './ClientRecentFiles'

export default function ClientDashboard({data}) {
  console.log('Data for client', data)
  return (
    <div className='space-y-4'>
      <div>
        <p>Hello {data.name} {data.surname}!</p>
        <p>
          Welcome to your Resbright Investments portal. 
          Here you can start an import 
          <a className='text-blue-700 hover:text-blue-600 px-1' href={route('customer-file-create-form')}>here</a>
           or simply track your goods.
        </p>
      </div>
      <ClientRecentFiles files={data.rb_files}/>

    </div>
  )
}
