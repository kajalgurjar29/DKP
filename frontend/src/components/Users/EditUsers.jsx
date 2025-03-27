import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CgProfile } from "react-icons/cg";
function EditUsers() {
      const [EditName, setEditName] = useState("");
    const [RoleName,setRoleName] = useState("")
  
  return (
    <>
      <div className=' flex h-screen w-screen'>
        <div><Sidebar/></div>
        <div className='pb-6 bg-gray-100 flex-1 overflow-auto'>
        <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
          <h2 className=" Pool-btn text-2xl font-bold ml-5">Users</h2>
          <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
            <CgProfile className='size-5'/>
            <span>Username</span>
            <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
          </button>
        </header>
        <div className='p-6'>
            <Link to="/Users" className="flex items-center mt-8 text-gray-700 hover:text-black ">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Link>
          </div> 
          
          <div className='flex gap-7 ml-6'>
                <label className="block mb-2 font-semibold">User Name</label>
                <input
                  type="text"
                  value={EditName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="event-edit-btn p-2 border rounded event-input"
                  placeholder="User Name"
                />
              </div>
              <div className='flex gap-7 mt-5 ml-6'>
                <label className="block mb-2 font-semibold">User Role</label>
                <input
                  type="text"
                  value={RoleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  className="event-edit-btn p-2 border rounded event-input ml-3"
                  placeholder="User Role"
                />
              </div>
              <div className="flex space-x-4 ml-6 mt-5">
                <button className="event-btn text-white px-4 py-2 rounded hover:bg-green-700">
                  Update
                </button>
                <button className=" text-red-500 border border-red-500 px-4 py-2 rounded ">
                  Clear Changes
                </button>
              </div>
        </div>
      </div>
    </>
  )
}

export default EditUsers
