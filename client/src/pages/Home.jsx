// Chat.js (React component)

import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import io from "socket.io-client";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const socket = io("http://localhost:5000");

  useEffect(() => {
    // Connect to the server and subscribe to message events
    socket.on("message", (newMessage) => {
      setMessages([...messages, newMessage]);
    });
    // Cleanup on unmount
    return () => socket.disconnect();
  }, [messages]);

  const sendMessage = () => {
    // Send the message to the server
    socket.emit("message", messageInput);
    setMessageInput("");
  };

  return (
    <div className="flex justify-center w-2/3 items-center h-screen">
      <div className="bg-black text-white rounded-3xl w-4/5 h-5/6 flex flex-col justify-between">
        <div className="flex-auto w-full bg-gray-700 overflow-y-auto rounded-t-lg">
          {messages.map((message, index) => (
            <div key={index} className="p-2">
              <div className="bg-gray-200 rounded-lg p-2">
                <span className="text-gray-800">{message}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center p-4 bg-gray-700 rounded-b-lg">
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            className="flex-1 mr-2 p-3 rounded-xl border border-none focus:outline-none bg-gray-800 text-white"
            placeholder="Type your message..."
          />
          <div className=" w-12 flex justify-center items-center h-12 bg-blue-600 rounded-full ">
            <FaPaperPlane
              className="cursor-pointer  text-white "
              onClick={sendMessage}
              size={26}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
