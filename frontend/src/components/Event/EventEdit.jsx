import { useState } from 'react';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { ArrowLeft, CircleMinus } from 'lucide-react';
import { Link } from 'react-router-dom';
import "./Event.css";
import { CgProfile } from "react-icons/cg";

function EventEdit() {
  const [eventName, setEventName] = useState("");
  const [eventType, setEventType] = useState("");
  const [dkpPool, setDkpPool] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [description, setDescription] = useState("");

  const [participants, setParticipants] = useState([
    "RadiantFind95",
    "SensualGrace",
    "ReflexEmpire",
    "SavoryLlama",
    "FlameVixen",
  ]);

  const [newParticipant, setNewParticipant] = useState("");

  const addParticipant = () => {
    if (newParticipant.trim() && !participants.includes(newParticipant)) {
      setParticipants([...participants, newParticipant]);
      setNewParticipant("");
    }
  };

  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar />

        <div className="pb-6 bg-gray-100 flex-1 overflow-auto">
         
         <header className="flex justify-between items-center bg-white shadow-xl h-32 px-4">
                    <h2 className="text-2xl font-bold header-text">Edit Event</h2>
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

    
          <div className=" p-6 shadow-lg rounded-lg max-w-3xl ml-6">
            <h2 className="text-2xl font-semibold mb-4">Edit Event</h2>

            <div className="grid gap-4">
           
              <div className="flex flex-col">
                <label className="font-semibold">Event Name</label>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="p-2 border rounded event-input"
                  placeholder="Event Name"
                />
              </div>

       
              <div className="flex flex-col">
                <label className="font-semibold">Event Type</label>
                <input
                  type="text"
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="p-2 border rounded event-input"
                  placeholder="Event Type"
                />
              </div>

   
              <div className="flex flex-col">
                <label className="font-semibold">Assigned DKP Pool</label>
                <input
                  type="text"
                  value={dkpPool}
                  onChange={(e) => setDkpPool(e.target.value)}
                  className="p-2 border rounded event-input"
                  placeholder="Assigned DKP Pool"
                />
              </div>

      
              <div className="flex flex-col">
                <label className="font-semibold">Participants</label>
                <div className="space-y-2">
                  {participants.map((participant, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="flex-1 p-2 border rounded bg-gray-100">{participant}</span>
                      <button
                        onClick={() => removeParticipant(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <CircleMinus />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

          
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newParticipant}
                  onChange={(e) => setNewParticipant(e.target.value)}
                  className="flex-1 p-2 border rounded event-input"
                  placeholder="New Participant"
                />
                <button
                  onClick={addParticipant}
                  className="event-btn text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  + Add
                </button>
              </div>

              {/* Event Date */}
              <div className="flex flex-col">
                <label className="font-semibold">Event Date</label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="p-2 border rounded event-input"
                />
              </div>

             
              <div className="flex flex-col">
                <label className="font-semibold">Description (Optional)</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="p-2 border rounded event-input"
                  placeholder="Provide additional details"
                />
              </div>

       
              <div className="flex space-x-4">
                <button className="event-btn text-white px-4 py-2 rounded hover:bg-green-700">
                  Update
                </button>
                <button className="text-red-500 border border-red-500 px-4 py-2 rounded hover:bg-red-100">
                  Clear Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventEdit;
