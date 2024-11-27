import React, { useEffect, useState } from 'react'
import { phoneCodes } from '@/utils/PhoneCodes'


export default function PhoneNumber({updateMobile, currentMobile}) {
  const [selectedCode, setSelectedCode] = useState(phoneCodes[0].code)
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleCodeChange = (event) => {
    setSelectedCode(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  const handleSubmit = () => {
    let completeMobile = selectedCode + phoneNumber
    updateMobile(completeMobile)
    // alert(`Phone number: ${selectedCode} ${phoneNumber}`);
  }

  useEffect(()=>{
    if(currentMobile) {
      setPhoneNumber(currentMobile.slice(4))
    }
  },[])

  return (
    <div>
    
      <div 
      className="flex gap-1"
      >

        {/* Phone Code Selector */}
        <select
          value={selectedCode}
          onChange={handleCodeChange}
        className="border-gray-300 py-1 w-2/5"
        >
          {phoneCodes.map((item) => (
            <option key={item.code} value={item.code}>
              {item.name} ({item.code})
            </option>
          ))}
        </select>

        {/* Phone Number Input */}
        <input
          type="text"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          onBlur={handleSubmit}
          placeholder="Enter phone number"
          className="border-gray-300 py-1 w-full"
        />
      </div>
    </div>
  )
}
