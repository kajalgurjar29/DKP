import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
function Help() {

    
         const [search, setSearch] = useState("");
              const [openMenuId, setOpenMenuId] = useState(null);
              const [deletePoolId, setDeletePoolId] = useState(null);
              const [pools, setPools] = useState([
           
                { id: 1,  UserName: "username1893", Message: "Lorem Ipsum "},
                { id: 2,  UserName: "username1893", Message: "Lorem Ipsum "}, 
                { id: 3,  UserName: "username1893", Message: "Lorem Ipsum "},
                { id: 4,  UserName: "username1893", Message: "Lorem Ipsum "}, 
                { id: 5,  UserName: "username1893", Message: "Lorem Ipsum "},
                { id: 6,  UserName: "username1893", Message: "Lorem Ipsum "}, 
              
              ]);
            
              const menuRefs = useRef({});
            
              useEffect(() => {
                const handleClickOutside = (event) => {
                  Object.keys(menuRefs.current).forEach((key) => {
                    if (menuRefs.current[key] && !menuRefs.current[key].contains(event.target)) {
                      setOpenMenuId(null);
                    }
                  });
                };
            
                document.addEventListener("mousedown", handleClickOutside);
                return () => document.removeEventListener("mousedown", handleClickOutside);
              }, []);
            
              const handleAction = (action, id) => {
                setOpenMenuId(null);
                if (action === "Delete") {
                  setDeletePoolId(id);
                } else {
                  alert(`${action} clicked for pool ${id}!`);
                }
              };
            
              const confirmDelete = () => {
                setPools(pools.filter(pool => pool.id !== deletePoolId));
                setDeletePoolId(null);
              };
  return (
    <>
      <div className='flex h-screen w-screen'>
        
        <div><Sidebar/></div>
        <div className='pb-6 bg-gray-100 flex-1 overflow-auto'>
        <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
          <h2 className=" Pool-btn text-2xl font-bold ml-5">Help & Support</h2>
          <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
          <CgProfile className='size-5'/>
          <span> Username</span>
            <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
          </button>
        </header>

        <div className=' '>
        <div className="p-4 rounded-lg shadow-md pt-8">
          <div className="pool-search flex justify-between items-center mb-4 h-20 w-full rounded-xl">
            <div className=" w-1/3 ml-5">
              <input
                type="text"
                placeholder="Search.."
                className="w-full pl-3 py-2 rounded-lg bg-white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 mr-5">
              
              <button className="bg-white px-4 py-2 rounded-lg flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" /> Filter
              </button>
            </div>
          </div>
          <table className="table w-full border-collapse rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-left text-sm">
              
                <th className="p-2">S.no.</th>
              
                <th className="p-2">User Name</th>
                <th className="p-2"> Message</th>
              </tr>
            </thead>
            <tbody>
              {pools.map((pool, index) => (
                <tr key={pool.id} className="border-t hover:bg-gray-100 text-sm">
                  <td className="p-2">{String(index + 1).padStart(2, "0")}</td>
                  <td className="p-2">{pool.UserName}</td>
                  <td className="p-2"> {pool.Message}</td>
               
                 
                  <td className="p-2 relative">
                    <button
                      onClick={() => setOpenMenuId(openMenuId === pool.id ? null : pool.id)}
                      className="p-2 rounded-full hover:bg-gray-200"
                    >
                      ⋮
                    </button>

                    {openMenuId === pool.id && (
                      <div
                        ref={(el) => (menuRefs.current[pool.id] = el)}
                        className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md border z-50"
                      >
                        <Link to="/Messages"
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          
                        >
                          View
                        </Link>
                     
                        <button
                          className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                          onClick={() => handleAction("Delete", pool.id)}
                        >
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {deletePoolId !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold">Confirm Delete</h3>
            <p className="text-gray-600">Are you sure you want to delete General Pool ?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setDeletePoolId(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
        </div>
        </div>
      </div>
    </>
  )
}

export default Help
