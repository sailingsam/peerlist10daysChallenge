import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdOutlinePlusOne } from "react-icons/md";
import { motion } from "framer-motion";

function CircleOfReactions() {
  const reactions = [
    { name: "Star", icon: "⭐" },
    { name: "Question Mark", icon: "❓" },
    { name: "Dislike", icon: "👎" },
    { name: "Dot", icon: "🔴" },
    { name: "Profile", icon: "👤" },
    { name: "Heart", icon: "❤️" },
    { name: "Thumps Up", icon: "👍" },
    { name: "Plus One", icon: "➕" },
  ];

  const favorites = [
    { name: "Wave", icon: "👋" },
    { name: "Speech", icon: "🗯️" },
    { name: "Sad", icon: "☹️" },
    { name: "Laugh", icon: "😆" },
    { name: "Love", icon: "😍" },
    { name: "Fire", icon: "🔥" },
    { name: "Shock", icon: "😮" },
    { name: "Eyes", icon: "👀" },
  ];

  const [activeButton, setActiveButton] = useState("reactions");
  const [outerCircleEmojis, setOuterCircleEmojis] = useState(reactions);

  const turnOnReactions = (button) => {
    setActiveButton("reactions");
    setOuterCircleEmojis(reactions);
  };
  const turnOnFavorites = () => {
    setActiveButton("favorites");
    setOuterCircleEmojis(favorites);
  };

  const positionOuterCircle = (index) => {
    const angle = (index / outerCircleEmojis.length) * 2 * Math.PI;
    return {
      top: `${Math.sin(angle) * 38 + 40}%`,
      left: `${Math.cos(angle) * 38 + 40.5}%`,
      transform: "translate(-30%, -30%)",
    };
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div
        className={`absolute flex justify-center items-center h-64 w-64 rounded-full border-2 bg-gray-50 shadow-xl ${
          activeButton == "favorites" ? "border-purple-300" : "border-blue-300"
        } overflow-hidden`}
      >
        {/* Outer circle */}
        {outerCircleEmojis.map((reaction, index) => (
          <motion.div
            key={reaction.name}
            className="absolute flex items-center justify-center"
            style={positionOuterCircle(index)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <button
              className={`bg-white ${
                activeButton == "favorites"
                  ? "bg-purple-50 hover:bg-purple-300"
                  : "bg-blue-50 hover:bg-blue-300"
              } p-3 rounded-full border border-gray-300 text-xl`}
            >
              {reaction.icon}
            </button>
          </motion.div>
        ))}

        {/* Inner circle */}
        <div
          className={`${
            activeButton === "favorites" ? "bg-purple-300" : "bg-blue-300"
          } flex flex-col items-center h-32 w-32 p-2 rounded-full border z-50 overflow-hidden`}
        >
          <button
            className={`reactions ${
              activeButton === "reactions"
                ? "bg-blue-500 text-white"
                : "bg-white"
            } flex-1 w-full rounded-t-full border-2 border-white`}
            onClick={turnOnReactions}
          >
            <BsEmojiSmile size={20} className="m-auto" />
          </button>
          <button
            className={`favorites ${
              activeButton === "favorites"
                ? "bg-purple-600 text-white"
                : "bg-white"
            } flex-1 w-full h-full rounded-b-full border-2 border-white`}
            onClick={turnOnFavorites}
          >
            <CiStar size={25} className="m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CircleOfReactions;
