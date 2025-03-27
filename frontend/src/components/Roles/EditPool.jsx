import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { ArrowLeft, X } from 'lucide-react'
import "./Role.css"
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

Sidebar
function EditPool() {
  return (
    <>
      <div className='flex h-screen w-screen'>
        <div className='h-screen'><Sidebar /></div>

        <div className='pb-6 bg-gray-100 flex-1 overflow-auto'>
          <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
            <h2 className="role-user text-2xl font-bold ml-5">Edit DKP Pools</h2>
            <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
               <CgProfile className='size-5'/>
              <span>Username</span>
              <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
            </button>
          </header>
          <Link to = "/Pools">
          <div className='flex'>
            <ArrowLeft className="text-2xl mt-7 ml-8" />
            <p className="text-2xl m-5">back </p>
          </div>
          </Link>
          <div className=" m-8">
            <h2 className="text-2xl font-semibold mb-4">Edit DKP Pools</h2>

            <div className="space-y-4">
              <div className='flex'>
                <label className="block font-medium">Pool Name</label>
                <input type="text" className="edit-bg w-96 ml-15 p-2 border rounded-md" placeholder='General Pool' />
              </div>

              <div className='flex '>
                <label className="block font-medium">Pool Type</label>
                <input type="text" className=" edit-bg w-96 ml-17 p-2 border rounded-md" placeholder='PvP' />
              </div>

              <div className='flex'>
                <label className="block font-medium">Description</label>

                <textarea className=" edit-bg w-96 ml-14 p-2 border rounded-md" rows="3" placeholder="Provide a brief description..." />

              </div>

            </div>

            <h3 className="text-xl font-medium mt-6">Assigned User Role</h3>
            <div className="overflow-x-auto mt-4">
              <table className="min-w-full border rounded-lg">
                <thead>
                  <tr className="bg-gray-200 edit-bg-box">
                    <th className="p-2 text-left">User Name</th>
                    <th className="p-2 text-left">Role</th>
                    <th className="p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "JohnDoe43", role: "Member", status: "Accepted", statusIcon: "✔️" },
                    { name: "Jane55smith", role: "Member", status: "Denied", statusIcon: "❌" },
                    { name: "AdamB5rown", role: "Member", status: "Pending", statusIcon: "⏳" },
                  ].map((user, index) => (
                    <tr key={index} className="border-t edit-bg ">
                      <td className="p-2">{user.name}</td>
                      <td className="p-2">{user.role}</td>
                      <td className="p-2 flex items-center gap-2">
                        <span>{user.statusIcon}</span>
                        {user.status}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-center">
              <button className="edit-btn text-white px-4 py-2 rounded-md">
                + Add Users
              </button>
            </div>
            <div className=" gap-3 flex mt-6">
              <button className="edit-btn text-white px-6 py-2 rounded-md">Update</button>
              <button className=" border border-red-500 text-red-500 px-6 py-2 rounded-md">Clear Changes</button>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default EditPool



