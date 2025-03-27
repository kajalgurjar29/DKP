import { useState, useRef, useEffect } from 'react';
import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

function Event() {
    const [search, setSearch] = useState("");
    const [openMenuId, setOpenMenuId] = useState(null);
    const [deletePoolId, setDeletePoolId] = useState(null);
    const [pools, setPools] = useState([
        { id: 1, name: "Dragon Raid", type: "Raid", PoolID: "101", GuildName: "John Doe", Participants: "25", Confirmed: "yes" },
        { id: 2, name: "Dragon Raid", type: "Raid", PoolID: "101", GuildName: "John Doe", Participants: "25", Confirmed: "yes" },
        { id: 3, name: "Dragon Raid", type: "Raid", PoolID: "101", GuildName: "John Doe", Participants: "25", Confirmed: "yes" },
        { id: 4, name: "Dragon Raid", type: "Raid", PoolID: "101", GuildName: "John Doe", Participants: "25", Confirmed: "yes" },
        { id: 5, name: "Dragon Raid", type: "Raid", PoolID: "101", GuildName: "John Doe", Participants: "25", Confirmed: "yes" },
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
        <div className="flex w-screen h-screen">
      
            <div className="h-screen text-white  md:block">
                <Sidebar />
            </div>

            <div className="pb-6 bg-gray-100 flex-1 overflow-auto">
                {/* Header */}
                <header className="flex flex-wrap justify-between items-center bg-white shadow-xl h-32 px-4">
                    <h2 className="text-2xl font-bold header-text">Events</h2>
                    <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md min-w-[120px]">
                        <CgProfile className='size-5' />
                        <span>Username</span>
                        <span className="ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </span>
                    </button>
                </header>

                
                <div className="p-4 rounded-lg shadow-md pt-8 ">
                    <div className="flex flex-wrap justify-between items-center mb-4 gap-3 pool-search p-5 rounded-2xl">
                        
                        <div className="w-full md:w-1/3">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full pl-3 py-2 rounded-lg bg-white"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                
                        <div className="flex flex-wrap gap-2">
                            <Link to="/eventsview">
                            <button className="Create-Pool text-white px-4 py-2 rounded-lg">+ Create Event</button></Link>
                            <button className="bg-white px-4 py-2 rounded-lg flex items-center gap-2">
                                <SlidersHorizontal className="w-5 h-5" /> Filter
                            </button>
                        </div>
                    </div>

                    {/* Table (Wrapped for Responsiveness) */}
                    <div className="overflow-x-auto">
                        <table className="table w-full border-collapse rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-gray-200 text-left text-sm">
                                    <th className="p-2">S.no.</th>
                                    <th className="p-2">Event Name</th>
                                    <th className="p-2">Type</th>
                                    <th className="p-2">Pool ID</th>
                                    <th className="p-2">Guild Name</th>
                                    <th className="p-2">Participants</th>
                                    <th className="p-2">Confirmed</th>
                           
                                </tr>
                            </thead>
                            <tbody>
                                {pools.map((pool, index) => (
                                    <tr key={pool.id} className="border-t hover:bg-gray-100 text-sm">
                                        <td className="p-2">{String(index + 1).padStart(2, "0")}</td>
                                        <td className="p-2">{pool.name}</td>
                                        <td className="p-2">{pool.type}</td>
                                        <td className="p-2">{pool.PoolID}</td>
                                        <td className="p-2 font-semibold">{pool.GuildName}</td>
                                        <td className="p-2 font-semibold">{pool.Participants}</td>
                                        <td className="p-2 font-semibold">{pool.Confirmed}</td>
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
                                                    style={{
                                                      top: index >= pools.length - 2 ? "-100%" : "100%",
                                                      marginTop: index >= pools.length - 2 ? "-10px" : "10px",
                                                    }}
                                                >
                                                    <Link to="/eventsview" className="block px-4 py-2 hover:bg-gray-100">
                                                        View
                                                    </Link>
                                                    <Link to="/EventEdit" className="block px-4 py-2 hover:bg-gray-100">
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

            
                {deletePoolId !== null && (
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                            <h3 className="text-lg font-semibold">Confirm Delete</h3>
                            <p className="text-gray-600">Are you sure you want to delete this event?</p>
                            <div className="flex justify-end mt-4">
                                <button onClick={() => setDeletePoolId(null)} className="bg-gray-300 px-4 py-2 rounded-md mr-2">Cancel</button>
                                <button onClick={confirmDelete} className="bg-red-600 text-white px-4 py-2 rounded-md">Delete</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Event;
