import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import "./Auctions.css";
import { CgProfile } from "react-icons/cg";

function Auctionsview() {
  const [items, setItems] = useState([{ name: "", description: "" }]);

  const addItem = () => {
    setItems([...items, { name: "", description: "" }]);
  };

  return (
    <>
      <div className="flex w-screen h-screen">
     
        <div className="">
          <Sidebar />
        </div>

        <div className="pb-6 bg-gray-100 flex-1 overflow-auto">
          <header className="flex justify-between items-center bg-white shadow-xl h-20 sm:h-32 px-4">
            <h2 className="Pool-btn text-xl sm:text-2xl font-bold">Create Auction</h2>
            <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-36 sm:w-44">
              <CgProfile className="size-8" />
              <span>Username</span>
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
          </header>

          <div className="p-4">
            <Link to="/auctions" className="flex items-center text-gray-700 hover:text-black">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Link>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold px-4">Create Auction</h2>

      
          <div className="px-4 sm:mr-96">
            <div className="border rounded-md overflow-hidden">
              <div className="auctions-had p-2 flex justify-between font-semibold">
                <span>Item Name</span>
                <span>Description</span>
              </div>
              {items.map((item, index) => (
                <div key={index} className="flex flex-wrap gap-2 p-2 border-b text-input">
                  <div className="w-full">
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Name of the item" />
                  </div>
                  <div className="w-full">
                    <input type="text" className="w-full p-2 border rounded-md" placeholder="Provide details about the item" />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={addItem} className="mt-3 px-4 py-2 auction-btn text-white rounded-md w-full sm:w-auto">+ Add item</button>

            {/* Description */}
            <div className="mt-4">
              <label className="block font-semibold">Description</label>
              <textarea className="text-input w-full p-2 border rounded-md" placeholder="Provide details about the item." />
            </div>

  
            <div className="mt-4">
              <label className="block font-semibold">Event ID</label>
              <select className="w-full p-2 border rounded-md event-input">
                <option className="text-input">Select the event from which the item was acquired.</option>
              </select>
            </div>

       
            <div className="mt-4">
              <label className="block font-semibold">Starting Bid</label>
              <input type="number" className="w-full text-input p-2 border rounded-md" placeholder="Set the initial bid amount in DKP." />
            </div>

      
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold">Auction Start Time</label>
                <input type="datetime-local" className="text-input w-full p-2 border rounded-md" />
              </div>
              <div>
                <label className="block font-semibold">Auction End Time</label>
                <input type="datetime-local" className="text-input w-full p-2 border rounded-md" />
              </div>
            </div>

    
            <div className="mt-4">
              <label className="block font-semibold">Participants (Multi-Select)</label>
              <input type="text" className="text-input w-full p-2 border rounded-md" placeholder="Add members who will participate in the event." />
            </div>

  
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-4 py-2 auction-btn text-white rounded-md  sm:w-auto">Create</button>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded-md  sm:w-auto">Discard</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Auctionsview;
