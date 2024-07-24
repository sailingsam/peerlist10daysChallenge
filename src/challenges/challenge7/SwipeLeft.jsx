import React, { useState } from "react";
import Moneycash from "./Moneycash";
import { useSwipeable } from "react-swipeable";

function SwipeLeft() {
  const [cards, setCards] = useState([1, 2, 3]);

  const handleSwipedLeft = () => {
    setCards((prevCards) => prevCards.slice(1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipedLeft,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="flex items-center justify-center w-full m-auto">
      <div className="relative items-center text-center justify-center bg-gray-900 w-[400px] h-[90vh] min-h-[850px] my-1 m-auto rounded-[50px] border-8 border-black shadow-2xl cursor-pointer shadow-black">
        {/* ye mobile notch hai */}
        <div className="m-auto h-8 w-28 mt-3 bg-black rounded-full flex justify-end items-center">
          <div className=" bg-white h-1 w-1 mr-4 rounded-full"></div>
        </div>
        {/* ab ye main screen ke niche ka pura hissa */}
        <div className="w-full h-full flex flex-col items-center justify-center">
          {/* <div className="flex flex-col justify-center items-center gap-4 mb-10">
            <Moneycash />
            <span className="text-4xl font-semibold mt-6">Fin Stats - July 24</span>
            <span className="text-lg text-gray-400 font-semibold">Your financials from July</span>
            <button className="bg-white text-black w-full p-3 rounded-2xl mt-6">
              <span>View</span>
            </button>
          </div> */}
          <div {...handlers} className="relative w-full">
            {cards.map((card, index) => (
              <div
                key={card}
                className="absolute w-80 h-80 bg-white flex items-center justify-center shadow-2xl shadow-gray-800 border rounded-3xl"
                style={{
                  top: `calc(50% - 12rem + ${index * 25}px)`,
                  left: `calc(50% - 7.5rem + ${index * 5}px)`,
                  zIndex: cards.length - index,
                  height: `calc(15rem - ${index * 10}px)`,
                  width: `calc(15rem - ${index * 10}px)`,
                }}
              >
                card {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwipeLeft;
