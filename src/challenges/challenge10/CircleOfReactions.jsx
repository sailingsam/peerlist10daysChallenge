import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { MdOutlinePlusOne } from "react-icons/md";

function CircleOfReactions() {
  const reactions = [
    {
      name: "Plus One",
      icon: "➕",
    },
    {
      name: "Star",
      icon: "⭐",
    },
    {
      name: "Question Mark",
      icon: "❓",
    },
    {
      name: "Dislike",
      icon: "👎",
    },
    {
      name: "Dot",
      icon: "🔴",
    },
    {
      name: "Profile",
      icon: "👤",
    },
    {
      name: "Heart",
      icon: "❤️",
    },
    {
      name: "Thumps Up",
      icon: "👍",
    },
  ];
  const favorites = [
    {
      name: "Shock",
      icon: "😮",
    },
    {
      name: "Eyes",
      icon: "👀",
    },
    {
      name: "Wave",
      icon: "👋",
    },
    {
      name: "Speech",
      icon: "🗯️",
    },
    {
      name: "Sad",
      icon: "☹️",
    },
    {
      name: "Laugh",
      icon: "😆",
    },
    {
      name: "Love",
      icon: "😍",
    },
    {
      name: "Fire",
      icon: "🔥",
    },
  ];
  
  const [activeButton, setActiveButton] = useState("reactions");
  const toggleActiveButton = (button) => {
    setActiveButton(activeButton === "reactions" ? "favorites" : "reactions");
  };
  return (
    <>
      <div className="absolute left-1/2 top-1/2">
        {/* main inner circle button */}
        <div className="bg-purple-300 flex flex-col items-center h-28 w-28 p-[6px] rounded-full border overflow-hidden">
          <button className="reactions bg-white flex-1 w-full rounded-t-full border-2 border-white">
            <BsEmojiSmile size={20} className="m-auto" />
          </button>
          <button className="favorites bg-white flex-1 w-full rounded-b-full border-2 border-white">
            <CiStar size={25} className="m-auto" />
          </button>
        </div>
      </div>
    </>
  );
}

export default CircleOfReactions;
