import React from "react";
import { FaPaperPlane, FaPaperclip, FaRegSmile } from "react-icons/fa";

const MsgContainer = () => {
  return (
    <div className="w-3/5  bg-gray-800">
      <nav className="pl-7 rounded-tl-lg h-16 flex bg-gray-500">
        {/*left nav*/}
        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <img
            src="person.jpg" // Replace with user profile image URL
            alt="Profile"
            className="w-10 h-10  rounded-full"
          />
          <div>
            <p className="text-sm text-paragraph font-semibold">John Doe</p>
            <p className="text-xs text-paragraph">Online</p>
          </div>
        </div>
        <div />
        {/*right nav*/}
        <div></div>
      </nav>

      {/* Input field */}
      <div className="flex relative top-96 items-center justify-center w-full py-4 px-6 border-t border-gray-700">
        <FaRegSmile className="text-2xl text-gray-500 mr-4" />{" "}
        <FaPaperclip className="text-2xl text-gray-500 mr-4" />{" "}
        {/* Paperclip Icon */}
        <input
          className="flex-1 bg-gray-700 h-10 rounded-md px-4 text-white focus:outline-none" // Adjusted input field style
          type="text"
          placeholder="Type your message here..."
        />
        {/* Emoji Icon */}
        <FaPaperPlane className="text-2xl text-gray-500" />{" "}
        {/* Paper Plane Icon */}
      </div>
    </div>
  );
};

export default MsgContainer;
