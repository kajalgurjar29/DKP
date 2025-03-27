import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
function Edit() {
  const [poolName, setPoolName] = useState("");
  const [poolType, setPoolType] = useState("PvP");
  const [description, setDescription] = useState("");
  const [roles, setRoles] = useState([]);

  return (
    <>
    <div className="flex w-screen h-screen">
      <div className="h-screen ">
        <Sidebar  />
      </div>
      <div className="  pb-6 space-y-6  w-full h-full">
      <header className="flex justify-between items-center shadow-xl h-32  pr-4">
      <Link to="/edit">
  <h2 className="Pool-btn text-2xl font-bold ml-5">Create DKP Pools</h2>
</Link>
          <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
            <CgProfile className='size-5'/>
            
            <span>Username</span>
            <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></span>
          </button>
        </header>
        <div className="edit-option max-w-3xl m-6">
          <Link to ="/Pools" className="flex">
        <ArrowLeft className="text-2xl mt-7 ml-6"/>
          <p className="text-2xl m-5">back </p>
          </Link>
          <h1 className="font-semibold text-4xl ml-6 nav-dash">Create DKP Pools</h1>
          <div className="space-y-4 p-6">
            <div>
              <label className="block text-sm font-medium">Pool Name</label>
              <input
                className="w-full p-2 border rounded-md"
                value={poolName}
                onChange={(e) => setPoolName(e.target.value)}
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Pool Type</label>
              <select
                className="w-full p-2 border rounded-md"
                value={poolType}
                onChange={(e) => setPoolType(e.target.value)}
              >
                <option value="raid">Raid (PvE)</option>
                <option value="PvP">PvP</option>
                <option value="resource">Resource Contribution</option>
                <option value="auction">Auction</option>
                <option value="general">General</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Description</label>
              <textarea
                className="w-full p-2 border rounded-md"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide a brief description of the pool's purpose and usage guidelines."
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium">Assign User Roles</label>
              <Link to = "/Role">
              <button
                className=" edit-btn flex items-center gap-2 border p-2 rounded-md text-white"
                onClick={() => setRoles([...roles, `Role ${roles.length + 1}`])}
              >
                Assign Roles <ArrowRight size={16} />
              </button>
              </Link>
            </div>
            <div className="mt-2">
              {roles.map((role, index) => (
                <p key={index} className="text-sm text-gray-600">{role}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="edit-btn text-white px-6 py-2 rounded-lg m-6">Create</button>
          <button className=" text-red-700 border-red-700 border px-6 py-2 rounded-lg m-6">Discard</button>
        </div>
      </div> 
      </div>
    </>
  );
}

export default Edit;
