import React, { useState } from "react";
import { m, motion } from "framer-motion";

function MessageReactions() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reactions, setReactions] = useState({});
  const messages = [
    { sender: "otherperson", message: "Hey Saksham! What’s up?", time: "" },
    { sender: "me", message: "Hey man!", time: "" },
    { sender: "me", message: "Working on #IxDChallenge 9", time: "" },
    { sender: "me", message: "Message Reactions: Trying to create WhatsApp-style reactions feature", time: "" },
    { sender: "otherperson", message: "Sounds cool! What’s the end goal?", time: "" },
    { sender: "me", message: "Showcasing & Learning new skills", time: "" },
    { sender: "me", message: "I’m also looking for MERN or full stack internships.", time: "" },
    { sender: "otherperson", message: "Got it! I’ll keep an eye out for opportunities.", time: "" },
    { sender: "me", message: "Thanks! Excited to wrap up this challenge and find great connections", time: "" },
    { sender: "otherperson", message: "All the best! Keep me posted.", time: "" },

  ];
  
  
  

  const handleLongPress = (index) => {
    setSelectedMessage(index);
  };

  const handleReactionSelect = (index, reaction) => {
    setReactions((prevReactions) => ({
      ...prevReactions,
      [index]: reaction,
    }));
    setSelectedMessage(null);
  };

  return (
    <div className="flex items-center justify-center w-full m-auto">
      <div className="relative bg-gray-900 w-[370px] h-[700px] m-auto p-2 rounded-[50px] border-8 border-black shadow-2xl shadow-black">
        <div className="m-auto h-8 w-28 mt- bg-black rounded-full flex justify-end items-center">
          <div className=" bg-white h-1 w-1 mr-4 rounded-full"></div>
        </div>
        <div className="absolute mt-5 inset-y-10 inset-x-4 border overflow-hidden">
          <img
            className="absolute"
            src="https://th.bing.com/th/id/OIP.rbzO4HCK47enHZZS-zUymQAAAA?rs=1&pid=ImgDetMain"
            alt=""
          />
          <div className="absolute w-full p-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.sender === "me" ? "justify-end" : "justify-start"
                } mb-1 relative`}
                onContextMenu={(e) => {
                  e.preventDefault();
                  handleLongPress(index);
                }}
                onTouchStart={() => handleLongPress(index)}
              >
                <div
                  className={`p-1 text-center max-w-60 ${
                    message.sender === "me"
                      ? "bg-[#a4f09d] rounded-tl-lg rounded-b-lg"
                      : "bg-white rounded-tr-lg rounded-b-lg"
                  } relative flex-wrap text-xs text-start`}
                >
                  <p>{message.message}</p>
                  {reactions[index] && (
                    <span
                      className={`absolute ${
                        message.sender === "me"
                          ? "-bottom-4 right-2"
                          : "-bottom-4 left-2"
                      } bg-white rounded-full p-[2px] text-xs`}
                    >
                      {reactions[index]}
                    </span>
                  )}
                </div>
                {selectedMessage === index && (
                  <motion.div className="absolute inset-0 ease-in-out">
                    <div className="absolute inset-0 bg-blue-200 opacity-50"></div>
                    <motion.div
                      initial={{ opacity: 0, scale: 1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-4 flex ${
                        message.sender === "me" ? "right-3" : "left-3"
                      } gap-0 justify-center items-center text-xs px-1 delay-200 bg-white rounded-full`}
                    >
                      {["👍", "❤️", "😂", "😮", "😢", "🙏"].map((emoji) => (
                        <button
                          key={emoji}
                          className="m-1"
                          onClick={() =>
                            handleReactionSelect(selectedMessage, emoji)
                          }
                        >
                          {emoji}
                        </button>
                      ))}
                      <div className="bg-gray-200 rounded-full w-4 h-4 p-1 text-lg flex justify-center items-center text-gray-600">
                        +
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageReactions;
