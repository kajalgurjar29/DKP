import { useState, useRef, useEffect } from 'react';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Auctions() {
  const [search, setSearch] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);
  const [deletePoolId, setDeletePoolId] = useState(null);
  const [pools, setPools] = useState([
    { id: 1, name: "Excalibur Sword", Description: "Sword with +50 attack.", EventID: "EVT-001", Bids: "15", WinnerID: "204", FinalBid: "500 DKP", CreatedAt: "2025-01-10" },
    { id: 2, name: "Excalibur Sword", Description: "Sword with +50 attack.", EventID: "EVT-001", Bids: "15", WinnerID: "204", FinalBid: "500 DKP", CreatedAt: "2025-01-10" },
    { id: 3, name: "Excalibur Sword", Description: "Sword with +50 attack.", EventID: "EVT-001", Bids: "15", WinnerID: "204", FinalBid: "500 DKP", CreatedAt: "2025-01-10" },
    { id: 4, name: "Excalibur Sword", Description: "Sword with +50 attack.", EventID: "EVT-001", Bids: "15", WinnerID: "204", FinalBid: "500 DKP", CreatedAt: "2025-01-10" },
    { id: 5, name: "Excalibur Sword", Description: "Sword with +50 attack.", EventID: "EVT-001", Bids: "15", WinnerID: "204", FinalBid: "500 DKP", CreatedAt: "2025-01-10" },
    { id: 6, name: "Excalibur Sword", Description: "Sword with +50 attack.", EventID: "EVT-001", Bids: "15", WinnerID: "204", FinalBid: "500 DKP", CreatedAt: "2025-01-10" }
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
    <div className="flex flex-col md:flex-row w-screen h-screen overflow-auto">
      <div className=" ">
        <Sidebar />
      </div>

      <div className="pb-6 bg-gray-100 flex-1 overflow-auto">
        <header className="flex flex-col md:flex-row justify-between items-center bg-white shadow-xl h-auto md:h-32 p-4">
        
          <h2 className="Pool-btn  md:text-2xl font-bold">Auctions</h2>
          <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md  md:w-44 mt-2 md:mt-0">
            <CgProfile className='size-5' />
            <span>Username</span>
            <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
          </button>
        </header>

        <div className="p-4 rounded-lg shadow-md pt-8">
          <div className="pool-search flex flex-col md:flex-row justify-between items-center mb-4 h-auto w-full rounded-xl p-5">
            <div className="w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search.."
                className="w-full pl-3 py-2 rounded-lg bg-white"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
            <Link to="/Auctionsview">
              <button className="Create-Pool text-white px-4 py-2 rounded-lg">+ Create Auctions</button> </Link>
              <button className="bg-white px-4 py-2 rounded-lg flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" /> Filter
              </button>
            </div>
          </div>

          <div className="overflow-auto">
            <table className="table w-full border-collapse rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-200 text-left text-sm">
                  <th className="p-2">S.no.</th>
                  <th className="p-2">Item Name</th>
                  <th className="p-2">Description</th>
                  <th className="p-2">Event ID</th>
                  <th className="p-2">Bids</th>
                  <th className="p-2">Winner ID</th>
                  <th className="p-2">Final Bid</th>
                  <th className="p-2">Created At</th>
                </tr>
              </thead>
              <tbody>
                {pools.map((pool, index) => (
                  <tr key={pool.id} className="border-t hover:bg-gray-100 text-sm">
                    <td className="p-2">{String(index + 1).padStart(2, "0")}</td>
                    <td className="p-2">{pool.name}</td>
                    <td className="p-2">{pool.Description}</td>
                    <td className="p-2">{pool.EventID}</td>
                    <td className="p-2 font-semibold">{pool.Bids}</td>
                    <td className="p-2 font-semibold">{pool.WinnerID}</td>
                    <td className="p-2 font-semibold">{pool.FinalBid}</td>
                    <td className="p-2 font-semibold">{pool.CreatedAt}</td>
                    <td className="p-2 relative">
                      <button
                        onClick={(e) => {

                          setOpenMenuId(openMenuId === pool.id ? null : pool.id);
                        }}
                        className="p-2 rounded-full hover:bg-gray-200"
                      >
                        ⋮
                      </button>

                      {openMenuId === pool.id && (
                        <div
                          ref={(el) => (menuRefs.current[pool.id] = el)}
                          className="absolute right-0 w-32 bg-white shadow-lg rounded-md border z-50"
                          style={{
                            top: index >= pools.length - 2 ? "-100%" : "100%",
                            marginTop: index >= pools.length - 2 ? "-10px" : "10px",
                          }}
                        >
                          <Link
                            to="/Auctionsview"
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                          >
                            View
                          </Link>
                          <Link
                            to="/Auctionsedit"
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {deletePoolId !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-lg font-semibold">Confirm Delete</h3>
            <p className="text-gray-600">Are you sure you want to delete Auction ?</p>
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
  );
}

export default Auctions;
