import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";

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

  return (
    <div className="flex rounded-lg flex-col h-full w-60 bg-background text-white">
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
      <div className="flex overflow-y-scroll h-full flex-col space-y-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-4 py-2 bg-secondary-hover rounded-md cursor-pointer"
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
