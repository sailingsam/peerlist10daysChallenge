import React from "react";
import { Link } from "react-router-dom";
import challenge1Gif from "./challenges/challenge1/1.gif"; // Adjust the import path as necessary

const challenges = [
  {
    gif: challenge1Gif,
    description: "Challenge 1 Description",
    challengePage: "Challenge1", // This will be used as a placeholder
  },{
    gif: challenge1Gif,
    description: "Challenge 2 Description",
    challengePage: "Challenge2", // This will be used as a placeholder
  }
];

function HomePage() {
  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold mb-8">
        Peerlist Interaction Design Challenge #ixdchallenge
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {challenges.map((challenge, index) => (
          <Link to={`/${index + 1}`} key={index}>
            <div
              className="bg-white p-4 rounded-lg shadow flex flex-col items-center"
            >
              <img
                src={challenge.gif}
                alt={`Challenge ${index + 1}`}
                className="mb-4"
              />
              <span>{challenge.description}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;