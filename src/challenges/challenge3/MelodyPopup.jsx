import React, { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import Audi from "./audio.mp3";

export default function MelodyPopup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audio = useRef(new Audio(Audi));
  

  const togglePlay = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="bg-gray-600 flex items-center justify-center h-screen w-full m-auto">
      <div
        className={`bg-white w-96 p-3 ${
          isPlaying ? "flex flex-col" : "flex flex-row"
        } justify-between rounded-lg`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="https://floridaregionfjmc.org/wp-content/uploads/2022/11/Minion-Minyan3.jpeg"
          alt="Melody"
          className={`rounded-md ${isPlaying ? "w-full" : "h-16"}`}
        />
        <div className={`w-full flex flex-col ${isPlaying ? "mt-1" : "ml-2 justify-center"}`}>
          {isPlaying && <div>ubub</div>}
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-bold">Minion Dave</span>
              <span className="text-gray-500 text-sm font-semibold">
                1.2M Followers
              </span>
            </div>
            <div
              className={`bg-black text-white flex gap-1 items-center ${isHovered || isPlaying ? "py-1 px-2" : "p-2"} rounded-full h-fit`}
              onClick={togglePlay}
            >
              {isPlaying ? (
                <FaPause className="text-xs" />
              ) : (
                <FaPlay className="text-xs" />
              )}
              {(isPlaying || isHovered) && (
                <span className="text-xs font-bold">{isPlaying ? "Pause" : "Play"}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
