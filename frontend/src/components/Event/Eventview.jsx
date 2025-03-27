import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import "./Event.css";

function Eventview() {
  const [eventData, setEventData] = useState({
    name: "",
    type: "",
    dkpPool: "",
    participants: "",
    date: "",
    description: "",
  });

  const eventTypes = ["Raid", "Meeting", "Tournament"];
  const dkpPools = ["Pool A", "Pool B", "Pool C"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Event Created:", eventData);
  };

  return (
    <>
      <div className="flex h-screen w-screen">

        <div className="">
          <Sidebar />
        </div>

        <div className="pb-6 bg-gray-100 flex-1 overflow-auto">
  
          <header className="flex justify-between items-center bg-white shadow-xl h-32 px-4">
            <h2 className="text-2xl font-bold header-text">Create Event</h2>
            <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md min-w-[120px]">
              <CgProfile className="size-5" />
              <span>Username</span>
              <span className="ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
          </header>

        
          <div className="p-6">
            <Link to="/events" className="flex items-center text-gray-700 hover:text-black">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Link>
          </div>

    
          <div className="p-6 shadow-lg rounded-lg  max-w-2xl ml-6">
            <h1 className="font-semibold text-2xl mb-4">Create Event</h1>

           
            <label className="block mb-2">Event Name</label>
            <input
              type="text"
              name="name"
              value={eventData.name}
              onChange={handleChange}
              placeholder="Enter event name"
              className="w-full p-2 border rounded mb-4"
            />

            {/* Event Type */}
            <label className="block mb-2">Event Type</label>
            <select
              name="type"
              value={eventData.type}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="">Select event type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>

          
            <label className="block mb-2">Assigned DKP Pool</label>
            <select
              name="dkpPool"
              value={eventData.dkpPool}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            >
              <option value="">Select DKP Pool</option>
              {dkpPools.map((pool) => (
                <option key={pool} value={pool}>
                  {pool}
                </option>
              ))}
            </select>

            {/* Participants */}
            <label className="block mb-2">Participants</label>
            <input
              type="text"
              name="participants"
              value={eventData.participants}
              onChange={handleChange}
              placeholder="Add participants (comma-separated)"
              className="w-full p-2 border rounded mb-4"
            />

            {/* Event Date */}
            <label className="block mb-2">Event Date</label>
            <input
              type="date"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded mb-4"
            />

            {/* Description */}
            <label className="block mb-2">Description (Optional)</label>
            <textarea
              name="description"
              value={eventData.description}
              onChange={handleChange}
              placeholder="Provide additional details"
              className="w-full p-2 border rounded mb-4"
            />

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleSubmit}
                className="event-btn text-white px-4 py-2 rounded  transition"
              >
                Create
              </button>
              <button className="border border-red-500 px-4 py-2 rounded text-red-500 hover:bg-red-100 transition">
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eventview;
