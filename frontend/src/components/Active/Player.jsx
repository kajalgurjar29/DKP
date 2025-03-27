import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { SlidersHorizontal,SquareCheck,SquareMinus } from "lucide-react";
import "./Active.css"
import { CgProfile } from "react-icons/cg";
function Player() {
    const [search, setSearch] = useState("");

    const [players, setPlayers] = useState([
        { id: "001", name: "ShadowKnight" },
        { id: "002", name: "MageMaster" },
        { id: "003", name: "RogueHunter" },
        { id: "004", name: "TankWarrior" },
        { id: "005", name: "HealerX" },
    ]);

    const handleAccept = (id) => {
        console.log(`Accepted player with ID: ${id}`);
    };

    const handleRemove = (id) => {
        setPlayers(players.filter((player) => player.id !== id));
    };

   
    const filteredPlayers = players.filter((player) =>
        player.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="flex w-screen h-screen">
                <div>
                    <Sidebar />
                </div>
                <div className="pb-6 bg-gray-100 flex-1 overflow-auto">
                    <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
                        <h2 className="text-2xl font-bold ml-5 role-user">Active Events</h2>
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
                                    placeholder="Search players..."
                                    className="w-full pl-3 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 "
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>
                            <div className="flex gap-2 mr-5">
                            <button className="Create-Pool text-white px-4 py-2 ml-2 rounded-lg">+ Create Event</button>
                                <button className="bg-white px-4 py-2 rounded-lg flex items-center gap-2 border border-gray-300 hover:bg-gray-100">
                                    <SlidersHorizontal className="w-5 h-5" /> Filter
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-auto p-4">
                        <h2 className="text-2xl font-bold mb-4">Dragon Hunt Raid</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border border-gray-300 ">
                                <thead>
                                    <tr className="active-nav text-left">
                                        <th className="p-2 border">User ID</th>
                                        <th className="p-2 border">Player Name</th>
                                        <th className="p-2 border">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredPlayers.length > 0 ? (
                                        filteredPlayers.map((player) => (
                                            <tr key={player.id} className="border active-table">
                                                <td className="p-2 border">{player.id}</td>
                                                <td className="p-2 border">{player.name}</td>
                                                <td className="p-2 b flex gap-2 ">
                                                    <button
                                                        onClick={() => handleAccept(player.id)}
                                                        className="  text-black px-3 py-1 rounded flex gap-2"
                                                    >
                                                        <SquareCheck className=" text-green-500 "/> Accept
                                                    </button>
                                                    <button
                                                        onClick={() => handleRemove(player.id)}
                                                        className=" text-black px-3 py-1 rounded flex gap-2 "
                                                    >
                                                        <SquareMinus  className=" text-red-600" /> Remove
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={3} className="text-center p-4 text-gray-500">
                                                No players found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Player;
