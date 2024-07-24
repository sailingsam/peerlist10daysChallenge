import React from "react";
import { Link } from "react-router-dom";
import challenge1Gif from "./challenges/challenge1/1.gif";
import challenge2Gif from "./challenges/challenge2/2.gif";
import challenge3Gif from "./challenges/challenge3/3.gif";
import challenge4Gif from "./challenges/challenge4/4.gif";
import challenge5Gif from "./challenges/challenge5/5.gif";
import challenge6Gif from "./challenges/challenge6/6.gif";

const challenges = [
  {
    gif: challenge1Gif,
    description: "UpVote Button",
    challengePage: "Challenge1",
  },
  {
    gif: challenge2Gif,
    description: "Jelly Tags",
    challengePage: "Challenge2",
  },
  {
    gif: challenge3Gif,
    description: "Melody Popup",
    challengePage: "Challenge3",
  },
  {
    gif: challenge4Gif,
    description: "Figma Dev Mode",
    challengePage: "Challenge4",
  },
  {
    gif: challenge5Gif,
    description: "Action Toolbar",
    challengePage: "Challenge5",
  },
  {
    gif: challenge6Gif,
    description: "Page Switch Transition",
    challengePage: "Challenge6",
  },
  {
    gif: challenge6Gif,
    description: "Swipe Left",
    challengePage: "Challenge7",
  }
];

function HomePage() {
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold mb-8">
        Peerlist Interaction Design Challenge #ixdchallenge
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {challenges.map((challenge, index) => (
          <Link to={`/${index + 1}`} key={index}>
            <div className="bg-white h-full p-4 rounded-lg shadow-xl hover:shadow-gray-700 flex flex-col items-center">
              <img
                src={challenge.gif}
                alt={challenge.challengePage}
                className="mb-4"
              />
              <span className="text-xs sm:text-base">{challenge.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
