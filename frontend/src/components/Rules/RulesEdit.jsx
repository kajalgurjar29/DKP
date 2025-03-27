import React, { useState,useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { CgProfile } from "react-icons/cg";
function RulesEdit() {

     const [Role, setRole] = useState("");
     const[point,setpoint] = useState("")
    const [selectedRole, setSelectedRole] = useState("");
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const roles = [
            "General Rule / Role-Specific Rule",
            
          ]
      
        useEffect(() => {
          const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-container")) {
              setIsDropdownOpen(false);
            }
          };
      
          document.addEventListener("click", handleClickOutside);
          return () => document.removeEventListener("click", handleClickOutside);
        }, []);
    
  return (
    <>
    <div className='flex h-screen w-screen'>
      <div><Sidebar/></div>
  <div className='pb-6 bg-gray-100 flex-1 overflow-auto'>
  <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
          <h2 className=" Pool-btn text-2xl font-bold ml-5">Set Rules</h2>
          <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
             <CgProfile className='size-5'/>
            <span>Username</span>
            <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
          </button>
        </header>
        <div className='p-6'>
          <Link to="/Rules" className="flex items-center mt-8 text-gray-700 hover:text-black ">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </Link>
        </div>
        <h2 className="  text-2xl font-bold ml-5">Edit Rules</h2>
        <div className='Auction-edit mr-80'>
     
  
      
        <div className="mb-4 dropdown-container ml-5 pt-5 ">
      <label className="block text-xl font-semibold mb-1">Rule Category</label>
      <div
        className="w-full p-2 border rounded-md cursor-pointer bg-white"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedRole || "Select the role to assign user"}
      </div>
      {isDropdownOpen && (
        <div className="absolute w-full bg-white border mt-1 rounded-md shadow-md">
          {roles.map((role, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedRole(role);
                setIsDropdownOpen(false);
              }}
            >
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
    <div className="mb-4 ml-5">
      <label className="block text-xl font-semibold mb-1">Description</label>
      <input
        type="text"
        value={Role}
        onChange={(e) => setRole(e.target.value)}
        placeholder="Lorem ipsum dolor sit amet consectetur."
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
      />
    </div>
    
    <label className="block text-xl font-semibold mb-1 ml-5">DKP Points</label>
    <div className="mb-4 ml-5 flex ">
      <input
        type="text"
        value={point}
        onChange={(e) => setpoint(e.target.value)}
        placeholder="10"
        className="w-18 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
      />
       <div>
      <h1 className='text-3xl ml-5 Pool-btn font-bold'>DKP Points</h1>
  </div>
    </div>
    <div className="flex gap-4 ml-5 mt-18">
      <button className=" rule-btn text-white px-4 py-2 rounded-md">Add Rule</button>
      <button className="border border-red-500 text-red-500 px-4 py-2 rounded-md">Discard</button>
    </div>
    </div>
  </div>
    </div>
  </>
  )
}

export default RulesEdit
