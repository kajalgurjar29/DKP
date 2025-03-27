import React, { useState, useEffect } from "react";
import Logo3 from "../../assets/Images/logo/Group.png";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./Dashboard.css";

import card from "../../assets/Images/logo/dashbord.png";
import card1 from "../../assets/Images/logo/dashboard1.png";
import card2 from "../../assets/Images/logo/calender_svgrepo.com.png";
import card3 from "../../assets/Images/logo/dashboard4.png";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
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
      y: { beginAtZero: true },
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
  ];

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100">
        <Header title="Dashboard" />

        <div className="container mx-auto px-4 mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { label: "150 DKP", sub: "Total Balance", img: card },
            { label: "25", sub: "Total Pools", img: card1 },
            { label: "20", sub: "Active Events", img: card2 },
            { label: "12", sub: "Active Auction", img: card3 },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center p-4 bg-white border border-black rounded-xl"
            >
              <div>
                <p className="text-2xl font-semibold nav-dash">{item.label}</p>
                <p className="text-sm text-gray-500">{item.sub}</p>
              </div>
              <div className="logo-colour h-16 w-16 rounded-xl">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full p-2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap md:grid md:grid-cols-2 p-2 gap-6 w-full min-h-[24rem]">
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 w-full">
            <h3 className="font-semibold text-[18px] nav-dash">
              DKP Distribution Across Pools
            </h3>
            <Bar data={data} options={options} className="w-full" />

            <div className="mt-6">
              <h3 className="font-semibold text-[18px] nav-dash">
                Quick Action Panel
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {[
                  { label: "Create Event", img: Logo3 },
                  { label: "Create Auction", img: card },
                  { label: "Create DKP Pool", img: card3 },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="logo-colour rounded-lg flex flex-col items-center justify-center p-3"
                  >
                    <img src={item.img} alt="" className="w-12 h-12 mb-2" />
                    <p className="text-white text-center text-sm sm:text-base">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full">
            <h2 className="text-xl font-semibold mb-4 text-center nav-dash">
              Upcoming Events
            </h2>
            <div className="pl-5 flex justify-self-center">
              <Calendar onChange={setDate} value={date} />
            </div>

            <div className="space-y-4 mt-4 overflow-auto max-h-60">
              {events.map((event, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-[14px] nav-dash">
                        {event.title}
                      </h3>
                      <p className="text-gray-500 text-sm">{event.details}</p>
                      <p className="text-sm text-gray-500">
                        Participants: {event.participants}
                      </p>
                    </div>
                    <button className="px-4 py-2 text-white rounded-md logo-colour">
                      Join Event
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
