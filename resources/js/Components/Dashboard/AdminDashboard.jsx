import React from 'react'
import FilesCountChart from './FilesCountChart'
import LatestFiles from './LatestFiles'
import SalesChart from './SalesChart'

export default function AdminDashboard({data}) {
  
  return (
    <div>      
      <div className='grid grid-rows md:grid-cols-2'>
      <SalesChart 
      monthlySales={data.monthlySales}
      dailySales={data.dailySales}
      /> 
      <div
      >
        <LatestFiles files={data.latestFiles}/>
      </div>
      </div>  
      <div className='grid grid-rows md:grid-cols-2'>
        <FilesCountChart
        monthlyCount={data.monthlyFilesCount}
        dailyCount={data.dailyFilesCount}
        />
        <div></div>
      </div>             
            
        {/* Revenue chart, files created count, latest rb_files */}
    </div>
  )
}
