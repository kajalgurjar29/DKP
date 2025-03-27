import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom';
import { ArrowLeft, Reply } from 'lucide-react';
import './Help.css'
import { CgProfile } from "react-icons/cg";
function Messages() {
      const [messages, setMessages] = useState([
    {
      id: 1,
      username: "RadiantFind95",
      email: "ilyaz@sbcglobal.net",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      time: "07:13 PM",
    },
  ]);

  const [reply, setReply] = useState("");

  const sendReply = () => {
    if (reply.trim()) {
      const newMessage = {
        id: messages.length + 1,
        username: "You",
        email: "your-email@example.com",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setReply("");
    }
  };
  return (
    <>
      <div className='flex h-screen w-screen'>
        <div><Sidebar/></div>
        <div className='pb-6 bg-gray-100 flex-1 overflow-auto'>
        <header className="flex justify-between items-center bg-white shadow-xl h-32 pr-4">
          <h2 className=" Pool-btn text-2xl font-bold ml-5">Help & Support</h2>
          <button className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-md w-44">
                           <CgProfile className='size-5'/>
            
            <span>Username</span>
            <span className="ml-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg></span>
          </button>
        </header>
        <div className='p-6 '>
            <Link to="/Help" className="flex items-center mt-8 text-gray-700 hover:text-black ">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </Link>
          </div> 
        <div className='pt-15 ml-8 Auction-edit mr-80 '>
               {messages.map((msg) => (
        <div key={msg.id} className="mb-4 p-3 bg-white rounded-lg shadow Help-box">
          <p className="font-bold text-gray-800">{msg.username}</p>
          <p className="text-sm text-gray-600"> Email : {msg.email}</p>
          <p className="mt-2 text-gray-700">{msg.text}</p>
          <p className="text-right text-xs text-gray-500">{msg.time}</p>
        </div>
      ))}
      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          placeholder="Type a reply..."
          className="flex-1 p-2 border rounded-lg"
          value={reply}
          onChange={(e) => setReply(e.target.value)}
        />
      
      </div>
      <button
          className=" reply-box text-white rounded-lg mt-5 w-48 font-semibold text-2xl flex justify-center py-2"
          onClick={sendReply}
        >
          <Reply /> Reply
        </button>
      </div>
        </div>
      </div>
    </>
  )
}

export default Messages

