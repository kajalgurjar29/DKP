import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Check, X, Clock, ArrowLeft, Edit } from "lucide-react";
import './Pools.css'
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
function View() {
  const pool = {
    name: "Raid Pool",
    type: "PvE",
    description: "Dedicated to PvP events and tournaments.",
  };

  const users = [
    { username: "JohnDoe43", role: "Member", status: "Accepted" },
    { username: "Jane55Smith", role: "Member", status: "Denied" },
    { username: "AdamB5rown", role: "Member", status: "Pending" },
  ];

  const StatusIcon = (status) => {
    switch (status) {
      case "Accepted":
        return <Check className="text-green-600 w-5 h-5" />;
      case "Denied":
        return <X className="text-red-600 w-5 h-5" />;
      case "Pending":
        return <Clock className="text-yellow-500 w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex w-screen h-screen bg-gray-100">
      
      <div className=" bg-white shadow-lg">
        <Sidebar />
      </div>

    
      <div className="flex-1 flex flex-col pb-6">
       
        
        <header className="flex justify-between items-center shadow-xl h-32  pr-4">
          <h2 className=" Pool-btn text-2xl font-bold ml-5">DKP Pools</h2>
          <button className=" flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
                           <CgProfile className='size-5'/>
            
            <span>Username</span>
            <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
          </button>
        </header>
        
             <div className="p-6">
      
        <Link to = "/Pools" className="flex items-center mt-4 text-gray-700 hover:text-black">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </Link>

    
        <div className="bg-white p-6 rounded-lg shadow-md mt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">{pool.name}</h2>
          <Link to= "/EditPool">
            <button className=" Edit-btn flex items-center  text-white px-3 py-1 rounded-lg shadow-md">
              <Edit className="w-4 h-4 mr-1" /> Edit
            </button>
            </Link>
          </div>
          <p className="mt-2">
            <strong>Type:</strong> {pool.type}
          </p>
          <p className="mt-1">
            <strong>Description:</strong> {pool.description}
          </p>
        </div>


        <div className=" Pool-table mt-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Assigned Users</h3>
          <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3 border">User Name</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) =>  (
                <tr key={index} className="border">
                  <td className="p-3 border">{user.username}</td>
                  <td className="p-3 border">{user.role}</td>
                  <td className="p-3 border flex items-center space-x-2">
                    {StatusIcon(user.status)}
                    <span>{user.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}



export default View;
