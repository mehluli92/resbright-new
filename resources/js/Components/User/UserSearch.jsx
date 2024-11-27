import React, { useEffect, useState } from 'react'

export default function UserSearch({handleUserChange, user}) {
  const [email, setEmail] = useState("")
  const [users, setUsers] = useState([])
  const [debouncedEmail, setDebouncedEmail] = useState("")
  const [selectedUser, SetSelectedUser] = useState(null)

  // Debounce effect to delay the search until the user stops typing
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedEmail(email)
    }, 300) // Adjust debounce delay as needed (500ms here)

    return () => clearTimeout(handler)
  }, [email])

  // Fetch users whenever debouncedEmail changes
  useEffect(() => {
    const handleSearch = async () => {
      if (!debouncedEmail) {
        setUsers([])
        return
      }

      try {
        const response = await fetch(`/user-search?email=${encodeURIComponent(debouncedEmail)}`)
        const data = await response.json()
        setUsers(data.data)
      } catch (error) {
        console.error("Error occurred while fetching users:", error)
      }
    }

    handleSearch()
  }, [debouncedEmail])

  function handleUserSelect(user) {
    console.log("Selected user",user)
    setEmail('')
    handleUserChange(user.id)
    SetSelectedUser(user.name)
    setUsers([])
  }

  useEffect(()=>{
    if(user) {
      SetSelectedUser(user.name)
    }
  },[])

  return (
    <div>
      <input
        type="text"
        placeholder={`${selectedUser ? selectedUser : 'Search by email' }`}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`border py-1 w-full border-gray-300 ${users && 'z-[10]'} ${selectedUser ? 'text-black':''}`}
      />
      <ul className="mt-2  z-[10] shadow-lg">
        {users && users.map((user) => (
          <li 
          key={user.id} 
          value={user.id}
          className="p-2 border-b"
          onClick={(e)=>{handleUserSelect(user)}}
          >
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
