import React, { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import "../components/slidebar.css";

const UserSide = () => {
  // Sample list of users
  const users = [
    { name: "Nahida", online: true },
    { name: "Aftab", online: false },
    { name: "Rudius", online: true },
    { name: "Eris", online: true },
    { name: "Ajinkya", online: true },
    { name: "Sukuna", online: true },
    { name: "Faruzan", online: true },
    { name: "Nilou", online: true },
  ];

  // State to keep track of new messages
  const [newMessages, setNewMessages] = useState(0);

  // Function to simulate new messages being received
  const simulateNewMessages = () => {
    setNewMessages(newMessages + 1);
  };

  return (
    <div className="flex rounded-2xl mt-24 flex-col sm:h-[408px] md:h-[408px] w-72 bg-gray-900 text-white">
      {/* Inbox Header */}
      <div className="px-5 py-2  flex items-center justify-between border-b border-gray-700">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <div className="text-sm w-[50px] flex items-center justify-center h-6 bg-red-600 rounded-md text-gray-400">
          <span className="mr-1 text-white">New</span>
          <span className="text-white">{newMessages}</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4">
        <div className="relative">
          <input
            className="input w-full h-8 input-border rounded-full pl-8 text-primary-placeholder"
            placeholder="Search..."
            type="text"
          />
          <FaSearch className="absolute left-2 top-2 text-primary" />
        </div>
      </div>

      {/* Other users */}
      <div className="flex overflow-y-scroll flex-col space-y-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-2 hover:bg-slate-700 rounded-md cursor-pointer transition-colors duration-100 ease-in"
          >
            <div className="flex items-center">
              <div className="relative">
                <img
                  src="person.jpg"
                  alt="User"
                  className="w-8 h-8 rounded-full mr-2"
                />
                {user.online && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
              <span>{user.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSide;
