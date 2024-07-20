import React, { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import Audi from "./audio.mp3";
import { Slider } from "antd";
import "./MelodySlider.css";

export default function MelodyPopup() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const audio = useRef(new Audio(Audi));
  const [currentPosition, setCurrentPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const togglePlay = () => {
    if (isPlaying) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const onSeek = (value) => {
    audio.current.currentTime = value;
    setCurrentPosition(value);
  };

  useEffect(() => {
    const setAudioData = () => {
      setDuration(audio.current.duration);
    };

    const updateAudioTime = () => {
      setCurrentPosition(audio.current.currentTime);
    };

    const onAudioEnd = () => {
      setIsPlaying(false);
      setCurrentPosition(0); // Optionally reset the currentPosition to 0
    };

    audio.current.addEventListener("loadedmetadata", setAudioData);
    audio.current.addEventListener("timeupdate", updateAudioTime);
    audio.current.addEventListener("ended", onAudioEnd);

    return () => {
      audio.current.removeEventListener("loadedmetadata", setAudioData);
      audio.current.removeEventListener("timeupdate", updateAudioTime);
      audio.current.removeEventListener("ended", onAudioEnd);
    };
  }, [audio, setIsPlaying]);

  return (
    <div className="bg-gray-600 flex items-center justify-center h-screen w-full m-auto">
      <div
        className={`bg-white w-96 p-3 container ${
          isPlaying ? "flex flex-col" : "flex flex-row"
        } justify-between shadow-2xl shadow-black rounded-lg`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          id="img"
          src="https://floridaregionfjmc.org/wp-content/uploads/2022/11/Minion-Minyan3.jpeg"
          alt="Melody"
          className={`rounded-md ${isPlaying ? "w-full" : "h-16"}`}
        />
        <div
          className={`w-full flex flex-col ${
            isPlaying ? "mt-1" : "ml-2 justify-center"
          }`}
        >
          {isPlaying && (
            <Slider
              min={0}
              max={duration}
              value={currentPosition}
              onChange={onSeek}
            />
          )}
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-col">
              <span className="font-bold">Minion Dave</span>
              <span className="text-gray-500 text-sm font-semibold">
                1.2M Followers
              </span>
            </div>
            <div
              className={`bg-black text-white flex gap-1 shadow shadow-black items-center ${
                isHovered || isPlaying ? "py-1 px-2" : "p-2"
              } rounded-full h-fit cursor-pointer play-pause-button`}
              onClick={togglePlay}
            >
              {isPlaying ? (
                <FaPause className="text-xs pause-icon" />
              ) : (
                <FaPlay className="text-xs play-icon" />
              )}
              {(isPlaying || isHovered) && (
                <span className="text-xs font-bold">
                  {isPlaying ? "Pause" : "Play"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
