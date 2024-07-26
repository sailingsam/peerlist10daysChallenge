import React, { useState } from "react";

function MessageReactions() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [reactions, setReactions] = useState({});

  const messages = [
    { sender: "otherperson", message: "hi", time: "12:00" },
    { sender: "me", message: "hello", time: "12:01" },
    { sender: "otherperson", message: "how are you", time: "12:02" },
    { sender: "me", message: "i am fine", time: "12:03" },
    { sender: "otherperson", message: "good to hear that", time: "12:04" },
    { sender: "me", message: "how about you", time: "12:05" },
    { sender: "otherperson", message: "i am good too", time: "12:06" },
    { sender: "me", message: "bye", time: "12:07" },
    { sender: "otherperson", message: "bye", time: "12:08" },
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
                  className={`p-1 text-center max-w-64 ${
                    message.sender === "me"
                      ? "bg-[#a4f09d] rounded-tl-lg rounded-b-lg"
                      : "bg-white rounded-tr-lg rounded-b-lg"
                  } relative flex-wrap text-xs`}
                >
                  <p>{message.message}</p>
                  {reactions[index] && (
                    <span className={`absolute  ${message.sender === "me" ? "-bottom-4 right-2" : "-bottom-4 left-2"} bg-white rounded-full p-[2px] text-xs`}>
                      {reactions[index]}
                    </span>
                  )}
                </div>
                {selectedMessage === index && (
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-blue-200 opacity-50"></div>
                    <div
                      className={`absolute bottom-4 flex ${
                        message.sender === "me" ? "right-3" : "left-3"
                      }  gap-0 justify-center items-center text-xs px-1 delay-200 bg-white rounded-full`}
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
                      <div className="bg-gray-200 rounded-full w-4 h-4 p-1 text-lg flex justify-center items-center text-gray-600">+</div>
                    </div>
                  </div>
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
