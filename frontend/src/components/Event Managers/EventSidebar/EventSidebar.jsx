import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu and close
import Logo1 from "../../../assets/Images/Group (3).png";
import Logo from "../../../assets/Images/logo/dashboard.png";
import Logo2 from "../../../assets/Images/logo/Vector.png";
import Logo3 from "../../../assets/Images/logo/Group.png";
import Logo4 from "../../../assets/Images/logo/dashboard4.png";
import Logo5 from "../../../assets/Images/logo/Users.png";
import Logo6 from "../../../assets/Images/logo/Help.png";
import Logo7 from "../../../assets/Images/logo/log-out_svgrepo.com (2).png";
import Logo8 from "../../../assets/Images/logo/Roles (2).png";


function EventSidebar() {

     const navigate = useNavigate();
      const [isOpen, setIsOpen] = useState(false);
  return (
    <>
     
      <button
        className="md:hidden p-3 fixed top-1 left-4 main-sidebar  text-white rounded-lg z-50"
        onClick={() => setIsOpen(true)}
      >
        <Menu size={24} />
      </button>

   
      <aside
        className={`fixed top-0 left-0 h-full w-64 main-sidebar text-white p-6 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 md:w-80`}
      >
       
        <button
          className="md:hidden absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

       
        <div className="flex items-center space-x-2 mb-6">
          <img src={Logo1} alt="Logo" className="size-8" />
          <h1 className=" font-bold">RAID POINTS</h1>
        </div>

      
        <nav className="space-y-4 mt-20">
          {[
            { name: "Dashboard", icon: Logo, route: "/EventDashboard" },
            { name: "Events", icon: Logo3, route: "/events" },
            { name: "Auctions", icon: Logo4, route: "/auctions" },
            { name: "Help & Support", icon: Logo6, route: "/help" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.route);
                setIsOpen(false);
              }}
              className="flex items-center space-x-2 p-3 w-full text-lg font-medium hover:bg-gray-400 rounded-lg"
            >
              <img src={item.icon} alt={item.name} className="size-6" />
              <span>{item.name}</span>
            </button>
          ))}
        </nav>

      
        <button
          onClick={() => {
            navigate("/");
            setIsOpen(false); 
          }}
          className="flex items-center space-x-2 p-3 text-lg font-medium mt-48 hover:bg-gray-400 rounded-lg "
        >
          <img src={Logo7} alt="Logout" className="size-6" />
          <span>Log Out</span>
        </button>
      </aside>

      {/* {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )} */}
    </>
  )
}

export default EventSidebar
