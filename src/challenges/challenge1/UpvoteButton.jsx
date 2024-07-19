import React, { useState } from "react";
import { PiArrowFatUpLight, PiArrowFatUpFill } from "react-icons/pi";

const UpvoteButton = () => {
  const [upvotes, setUpvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes((prevUpvotes) => (prevUpvotes === 0 ? 1 : 0));
  };

  return (
    <div className="flex items-center justify-center h-screen w-full m-auto">
      <div className="group p-2 rounded-2xl hover:bg-green-200">
        <div
          onClick={handleUpvote}
          className={`flex flex-col items-center justify-center w-28 h-28 p-5 border rounded-xl cursor-pointer select-none ${
            upvotes === 1
              ? "bg-gray-100 border-green-500"
              : "bg-gray-100 border-gray-600"
          }`}
        >
          <div className="rounded-full p-1 group-hover:bg-green-200 transform group-hover:translate-y-[-4px] transition-all duration-300">
            {upvotes === 1 ? (
              <PiArrowFatUpFill className="text-2xl text-green-500" />
            ) : (
              <PiArrowFatUpLight className="text-2xl text-gray-500" />
            )}
          </div>
          <span
            className={`mt-2 text-xl font-bold ${
              upvotes === 1
                ? "text-green-500 animate-slide-down"
                : "text-gray-700 animate-slide-up"
            }`}
          >
            7{upvotes}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpvoteButton;
