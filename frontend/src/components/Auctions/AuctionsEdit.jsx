import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { ArrowLeft, CircleMinus } from 'lucide-react'
import "./Auctions.css"
import { CgProfile } from "react-icons/cg";
function AuctionsEdit() {
     const [openMenuId, setOpenMenuId] = useState(null);

     const [participants, setParticipants] = useState([
    "RadiantFind95",
    "SensualGrace",
    "ReflexEmpire",
    "SavoryLlama",
    "FlameVixen",
  ]);

  const removeParticipant = (name) => {
    setParticipants(participants.filter((p) => p !== name));
  };

  const addParticipant = () => {
    const newParticipant = prompt("Enter participant name:");
    if (newParticipant) {
      setParticipants([...participants, newParticipant]);
    }

    
          // const menuRefs = useRef({});
        
          // useEffect(() => {
          //   const handleClickOutside = (event) => {
          //     Object.keys(menuRefs.current).forEach((key) => {
          //       if (menuRefs.current[key] && !menuRefs.current[key].contains(event.target)) {
          //         setOpenMenuId(null);
          //       }
          //     });
          //   };
        
          //   document.addEventListener("mousedown", handleClickOutside);
          //   return () => document.removeEventListener("mousedown", handleClickOutside);
          // }, []);
        
          // const handleAction = (action, id) => {
          //   setOpenMenuId(null);
          //   if (action === "Delete") {
          //     setDeletePoolId(id);
          //   } else {
          //     alert(`${action} clicked for pool ${id}!`);
          //   }
          // };
        
          // const confirmDelete = () => {
          //   setPools(pools.filter(pool => pool.id !== deletePoolId));
          //   setDeletePoolId(null);
          // };
  };
  return (
    <>
      <div className='flex h-screen w-screen'>
        <div><Sidebar/></div>
        <div className='pb-6 bg-gray-100 flex-1 overflow-auto'>
        <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
            <h2 className="role-user text-2xl font-bold ml-5">Edit Auction</h2>
            <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
               <CgProfile className='size-5'/>
              <span>Username</span>
              <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
            </button>
          </header>

          <Link to="/Auctions" className='flex'>

            <ArrowLeft className="text-2xl mt-7 ml-8" />
            <p className="text-2xl m-5">back </p>
          </Link>
          <div className='ml-8 mr-80  Auction-edit'>
          <h2 className="text-2xl font-semibold mb-4 ">Edit Auction</h2>
            <div className="border rounded-lg p-4 mb-4">
         <div className="flex  justify-around font-semibold ">
           <span >Item Name</span>
           <span>Description</span>
         </div>
         <div className='flex gap-5'>
         <input
          type="text"
          placeholder="Name of the item"
          className="w-full p-2 mt-2 border rounded text-input"
        />
        <textarea
          placeholder="Provide details about the item."
          className="w-full p-2 mt-2 border rounded text-input"
        ></textarea>
            {/* <td className="p-2 relative">
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
                                <Link to="/Auctionsview"
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                  onClick={() => handleAction("View", pool.id)}
                                >
                                  View
                                </Link>
                                <Link to="/AuctionsEdit"
                                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                  onClick={() => handleAction("Edit", pool.id)}
                                >
                                  Edit
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
      )} */}
        </div>  
      </div>
      <button className="auction-btn text-white px-4 py-2 rounded mb-4 flex justify-center">
        + Add Item
      </button>
      <div className="mb-4">
        <label className="block font-semibold">Event ID</label>
        <input
          type="text"
          value="EVT001"
          className="w-full p-2 border rounded mt-1 text-input"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold ">Starting Bid</label>
        <input
          type="text"
          value="3,400 DKP"
          className="w-full p-2 border rounded mt-1 text-input"
        />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block font-semibold">Auction Start Time</label>
          <input type="time" className="w-full p-2 border rounded mt-1 text-input" />
        </div>
        <div>
          <label className="block font-semibold">Auction End Time</label>
          <input type="time" className="w-full p-2 border rounded mt-1 text-input" />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-2">Participants</label>
        <div className="grid grid-cols-2 gap-2">
          {participants.map((name) => (
            <div key={name} className="flex justify-between items-center border p-2 text-input rounded">
              <span>{name}</span>
              <button
                onClick={() => removeParticipant(name)}
                className="text-red-500 font-bold"
              >
             <CircleMinus />
              </button>
            </div>
          ))}
        </div>
        <button
          onClick={addParticipant}
          className="auction-btn text-white px-4 py-2 rounded mt-4"
        >
          + Add Participants
        </button>
      </div>
      <div className="flex  gap-5">
        <button className="auction-btn text-white px-4 py-2 rounded">
          Update
        </button>
        <button className="border  border-red-500 text-red-500 px-4 py-2 rounded">
          Clear Changes
        </button>
      </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuctionsEdit
