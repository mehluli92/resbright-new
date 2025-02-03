import React from 'react'

export default function FileCreationSteps({count, changeCount}) {

  const handleClick = (e) => {
    const {name} = e.target
    changeCount(name)
  }

  return (
    <div id="steps" className="flex items-center px-2 md:px-0">
    <div 
    name='0'
    onClick={handleClick}
    className={`flex items-center bg-gray-200 rounded-lg font-normal text-sm ${count == 0 ? 'bg-gray-50':''}`}
    >
        <button className="px-2 py-1">Basic Info</button>
    </div>
    <div className="h-0.5 w-full bg-cyan-900"></div>

    <div 
    className={`flex items-center bg-gray-200 rounded-lg font-normal text-sm ${count == 1 ? 'bg-gray-50':''}`}
    >
        <button className="px-2 py-1">Package Description</button>
    </div>
    <div className="h-0.5 w-full bg-cyan-900"></div>

    <div 
    className={`flex items-center bg-gray-200 rounded-lg font-normal text-sm ${count == 2 ? 'bg-gray-50':''}`}
    >
        <button className="px-2 py-1">Delivery Address</button>
    </div>
    <div className="h-0.5 w-full bg-cyan-900"></div>

    <div 
    className={`flex items-center bg-gray-200 rounded-lg font-normal text-sm ${count == 3 ? 'bg-gray-50':''}`}
    >
        <button className="px-2 py-1">Upload Documents</button>
    </div>
    </div>
  )
}
