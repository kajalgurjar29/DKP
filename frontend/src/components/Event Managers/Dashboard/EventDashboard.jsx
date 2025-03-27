import React, { useState } from 'react'
import Logo3 from "../../../assets/Images/logo/Group.png"
import "./EventDashboard.css"
import card from "../../../assets/Images/logo/dashbord.png"
import card1 from "../../../assets/Images/logo/dashboard1.png"
import card2 from "../../../assets/Images/logo/calender_svgrepo.com.png"
import card3 from "../../../assets/Images/logo/dashboard4.png"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CgProfile } from "react-icons/cg";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);
import EventSidebar from '../EventSidebar/EventSidebar'
function EventDashboard() {
     const [date, setDate] = useState(new Date());
    
        const data = {
            labels: ["Raid Pool", "Pvp Pool", "Resource Pool"],
            datasets: [
                {
                    label: "Sales",
                    data: [1100, 700, 900],
                    backgroundColor: "rgba(47, 79, 79, 1)",
                    borderColor: "rgba(84, 140, 141, 1)",
                    borderWidth: 1,
                },
            ],
        };
    
        const options = {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        };
    
    
    
        const events = [
            {
                title: "Dragon's Lair Raid",
                date: "Jan 24, 2025, 8:00 PM",
                details: "DKP Pool: Raid Pool",
                participants: 12,
                type: "event",
            },
            {
                title: "Arena Battle",
                date: "Jan 23, 2025, 8:00 PM",
                details: "DKP Pool: PvP Pool",
                participants: 14,
                type: "event",
            },
            {
                title: "Arena Battle",
                date: "Jan 23, 2025, 8:00 PM",
                details: "DKP Pool: PvP Pool",
                participants: 14,
                type: "event",
            },
    
        ];
    
  return (

    <>
    <div className='flex '>
     <div className='h-screen'><EventSidebar/></div> 
     <main className="flex-1  bg-gray-100 ">
                    <header className="flex justify-between items-center bg-white shadow-xl h-32">
                        <h2 className="text-2xl font-bold nav-dash ml-5">Dashboard</h2>
                        <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-40">
                            <CgProfile className='size-5' />

                            <span>Username </span>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
                        </button>
                    </header>

                    <div className="container mx-auto px-4 mt-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                            <div className="flex items-center space-x-2 p-4 bg-white justify-between border border-black rounded-xl">
                                <div className="text-3xl" />
                                <div className=' '>
                                    <p className="text-2xl font-semibold ">150 DKP</p>
                                    <p className="text-sm text-gray-500">Upcoming Events</p>
                                </div>
                                <div>
                                    <div className="logo-colour h-16 w-16 rounded-xl">
                                        <img src={card} alt="" className="w-full h-full p-2 object-contain" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 p-4 bg-white justify-between border border-black rounded-xl">
                                <div className="text-3xl" />
                                <div>
                                    <p className="text-2xl font-semibold">25</p>
                                    <p className="text-sm text-gray-500">Total Pools</p>
                                </div>
                                <div>
                                    <div className="logo-colour h-16 w-16 rounded-xl">
                                        <img src={card1} alt="" className="p-2 object-contain size-15" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 p-4 bg-white justify-between border border-black rounded-xl">
                                <div className="text-3xl" />
                                <div>
                                    <p className="text-2xl font-semibold">20</p>
                                    <p className="text-sm text-gray-500">Active Events</p>
                                </div>
                                <div>
                                    <div className="logo-colour h-16 w-16 rounded-xl">
                                        <img src={card2} alt="" className="w-full h-full p-2 object-contain" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2 p-4 bg-white justify-between border border-black rounded-xl">
                                <div className="text-3xl" />
                                <div>
                                    <p className="text-2xl font-semibold">12</p>
                                    <p className="text-sm text-gray-500">Active Auction</p>
                                </div>
                                <div>
                                    <div className="logo-colour h-16 w-16 rounded-xl">
                                        <img src={card3} alt="" className="w-full h-full p-2 object-contain" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="flex flex-wrap md:grid md:grid-cols-2 p-2 gap-6 w-full min-h-[24rem]">
                        <div className="bg-white p-6 rounded-lg shadow-md flex-1 w-full">

                            <h3 className="text-lg font-bold">DKP Distribution Across Pools</h3>
                            <Bar data={data} options={options} className="w-full" />

                            {/* Quick Action Panel */}
                            <div className="mt-6">
                                <h3 className="text-lg font-bold">Quick Action Panel</h3>

                                {/* Quick Action Buttons - Responsive Grid */}
                                <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mt-4">
                                    {/* Create Event */}
                                    <div className="logo-colour rounded-lg flex flex-col items-center justify-center p-3">
                                        <img src={Logo3} alt="" className="w-12 h-12 mb-2" />
                                        <p className="text-white text-center text-sm sm:text-base">Create Event</p>
                                    </div>

                                    {/* Create Auction */}
                                    <div className="logo-colour rounded-lg flex flex-col items-center justify-center p-3">
                                        <img src={card} alt="" className="w-12 h-12 mb-2" />
                                        <p className="text-white text-center text-sm sm:text-base">Create Auction</p>
                                    </div>

                                    {/* Create DKP Pool */}
                                    <div className="logo-colour rounded-lg flex flex-col items-center justify-center p-3">
                                        <img src={card3} alt="" className="w-12 h-12 mb-2" />
                                        <p className="text-white text-center text-sm sm:text-base">Create DKP Pool</p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="bg-white p-6 rounded-lg shadow-md w-full ">
                            <h2 className="text-xl font-semibold mb-4 text-center">Upcoming Events</h2>


                            <div className="pl-5 flex justify-self-center">
                                <Calendar onChange={setDate} value={date} />

                            </div>




                            <div className="space-y-4 mt-4 overflow-auto max-h-60">
                                {events.map((event, index) => (
                                    <div key={index} className="p-4 border rounded-lg shadow-sm">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                                <p className="text-sm text-gray-500">{event.details}</p>

                                                {event.type === "event" && (
                                                    <p className="text-sm text-gray-500">
                                                        Participants: {event.participants}
                                                    </p>
                                                )}

                                                {event.type === "auction" && (
                                                    <p className="text-sm text-red-500">
                                                        Ends In: {event.endsIn}
                                                    </p>
                                                )}
                                            </div>

                                            <button className="px-4 py-2 text-white rounded-md logo-colour">
                                                {event.type === "event" ? "Join Event" : "Join Auction"}
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>
     </div>
    </>
  )
}

export default EventDashboard
