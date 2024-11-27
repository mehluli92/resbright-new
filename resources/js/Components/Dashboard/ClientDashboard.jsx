import React from 'react'
import ClientRecentFiles from './ClientRecentFiles'

export default function ClientDashboard({data}) {
  console.log('Data for client', data)
  return (
    <div className='space-y-4'>
      <div>
        <p>Hello {data.name} {data.surname}!</p>
        <p>Welcome to your Resbright Investments portal.</p>
        <p>To request for our import service click here.</p>
      </div>
      <ClientRecentFiles files={data.rb_files}/>

    </div>
  )
}
