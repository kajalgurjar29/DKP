import {  SlidersHorizontal } from 'lucide-react';
import Sidebar from '../Sidebar/Sidebar'
import React, { useState } from 'react'
import "./Active.css"
import { CgProfile } from "react-icons/cg";
function AllPlayer() {
          const [search, setSearch] = useState("");
          const participants = [
            { name: "Player 1" },
            { name: "Player 2" },
            { name: "Player 3" },
            { name: "Player 5" },
          ];
        
          const [scores, setScores] = useState(
            participants.map(() => ({
              onTime: false,
              fullyEquipped: false,
              fullTime: false,
            }))
          );
        
          const Checkbox = (index, key) => {
            setScores((prev) =>
              prev.map((item, i) =>
                i === index ? { ...item, [key]: !item[key] } : item
              )
            );
          };
    
  return (
    <>
      <div className='flex w-screen h-screen'>
        <div><Sidebar/></div>
        <div className='pb-6 bg-gray-100 flex-1 overflow-auto'>
        <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
            <h2 className="role-user text-2xl font-bold ml-5">Active Events</h2>
            <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
                 <CgProfile className='size-5'/>
              <span>Username</span>
              <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
            </button>
          </header>
          <div className="p-4 rounded-lg shadow-md pt-8">
          <div className="pool-search flex justify-between items-center mb-4 h-20 w-full rounded-xl">
            <div className="relative w-1/3 ml-5">
              <input
                type="text"
                placeholder="Search.."
                className="w-full pl-3 py-2 rounded-lg bg-white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 mr-5">
              <button className="Create-Pool text-white px-4 py-2 ml-2 rounded-lg">+ Create Event</button>
              <button className="bg-white px-4 py-2 rounded-lg flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" /> Filter
              </button>
            </div>
          </div>
          
          </div>
          <div className="flex flex-col items-center p-6">
      <table className="w-full   border border-gray-300 shadow-md">
        <thead>
          <tr className="active-nav">
            <th className="border border-gray-300 p-3">Participant Name</th>
            <th className="border border-gray-300 p-3">On Time (5pts)</th>
            <th className="border border-gray-300 p-3">Fully Equipped (5pts)</th>
            <th className="border border-gray-300 p-3">Full Time (10pts)</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr key={index} className="active-table">
              <td className="border border-gray-300 p-3">{participant.name}</td>
              <td className="border border-gray-300 p-3 text-center">
                <input
                  type="checkbox"
                  checked={scores[index].onTime}
                  onChange={() => Checkbox(index, "onTime")}
                />
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <input
                  type="checkbox"
                  checked={scores[index].fullyEquipped}
                  onChange={() => Checkbox(index, "fullyEquipped")}
                />
              </td>
              <td className="border border-gray-300 p-3 text-center">
                <input
                  type="checkbox"
                  checked={scores[index].fullTime}
                  onChange={() => Checkbox(index, "fullTime")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
    <button className="mt-4 px-4 py-2 border border-red-500 text-red-500 rounded-lg ml-6">
        End Event
      </button>
        </div>
     
      </div>
    </>
  )
}

export default AllPlayer
