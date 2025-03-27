import React,{useState} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { ArrowLeft } from 'lucide-react'
import "./Role.css"
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

function Role() {

  const [users, setUsers] = useState([
    { id: "01", userId: "Radiant545", guild: "Duelist’s Arena Pool", role: "Raid Leader" },
    { id: "02", userId: "", guild: "Duelist’s Arena Pool", role: "" }
  ]);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const userOptions = ["Radiant545", "Radiantfg45", "Racggggniantgfg45"];

  const handleInputChange = (index, value) => {
    let matches = [];
    if (value.length > 0) {
      matches = userOptions.filter((user) => user.toLowerCase().includes(value.toLowerCase()));
    }
    setSuggestions(matches);
    const updatedUsers = [...users];
    updatedUsers[index].userId = value;
    setUsers(updatedUsers);
  };

  const handleRoleChange = (index, value) => {
    const updatedUsers = [...users];
    updatedUsers[index].role = value;
    setUsers(updatedUsers);
  };
  return (
    <>
      <div className='flex w-screen h-screen'>
        <div className='h-screen'> <Sidebar /> </div>

        <div className="pb-6 bg-gray-100 flex-1 overflow-auto">
          
            <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
              <h2 className="role-user text-2xl font-bold ml-5">Assign User Role</h2>
              <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
                 <CgProfile className='size-5'/>
                <span>Username</span>
                <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
              </button>
            </header>
          <div className='flex'>
            
            <ArrowLeft className="text-2xl mt-7 ml-8" />
            <p className="text-2xl m-5">back </p>
          </div>
          <div className="p-4 md:p-8">
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
            <Link to="/AddUsers">
        <button className=" role-btn text-white p-2 rounded mt-2 md:mt-0 mr-5">+ Add New User</button></Link>
      </div> 
      <div className="overflow-x-auto">
        <table className="w-full border h-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">S.no</th>
              <th className="p-2">User ID</th>
              <th className="p-2">GuildName</th>
              <th className="p-2">User Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border">
                <td className="p-2">{user.id}</td>
                <td className="p-2 relative">
                  <input
                    type="text"
                    value={user.userId}
                    className="border p-1 w-full"
                    onChange={(e) => handleInputChange(index, e.target.value)}
                  />
                  {suggestions.length > 0 && (
                    <div className="absolute bg-white border w-full mt-1">
                      {suggestions.map((suggestion, i) => (
                        <div
                          key={i}
                          className="p-1 cursor-pointer hover:bg-gray-200 "
                          onClick={() => handleInputChange(index, suggestion)}
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </td>
                <td className="p-2">{user.guild}</td>
                <td className="p-2">
                  <select
                    className="border p-1 w-full"
                    value={user.role}
                    onChange={(e) => handleRoleChange(index, e.target.value)}
                  >
                    <option value="">Select Role</option>
                    <option value="Raid Leader">Raid Leader</option>
                    <option value="Member">Member</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className=" role-btn text-white p-2 mt-4 rounded flex justify-self-end ">+ Add</button>
    </div>
        </div>



      </div>

    </>
  )
}

export default Role
