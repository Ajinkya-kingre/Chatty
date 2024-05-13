import React from "react";
import { FaSignOutAlt, FaUser, FaCog, FaAddressBook } from "react-icons/fa";

const SidebarLeft = () => {
  return (
    <div>
      <div className="flex w-14 sm:h-[100vh] md:h-[100vh] flex-col items-center rounded-lg bg-secondary justify-between flex-grow">
        {/* User Profile */}
        <div className="flex items-center mt-5">
          <img
            src="person.jpg" // Replace with user profile image URL
            alt="Profile"
            className="w-10 h-10  rounded-full"
          />
        </div>

        <div className="flex  flex-col mt-14 items-center space-y-12">
          <div className="sidebar-icon">
            <FaUser className="text-primary hover:cursor-pointer" />
          </div>
          <div className="sidebar-icon">
            <FaCog className="text-primary hover:cursor-pointer" />
          </div>
          <div className="sidebar-icon">
            <FaAddressBook className="text-primary hover:cursor-pointer" />
          </div>
        </div>
        <div className=" p-48 sidebar-icon">
          <FaSignOutAlt className="text-primary hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default SidebarLeft;
