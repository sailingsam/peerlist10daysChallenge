import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
{
  /* <FaCircleCheck /> */
}

export default function JellyTags() {
    const cuisines = [
        { name: "Indian" },
        { name: "Italian" },
        { name: "Spanish" },
        { name: "Chinese" },
        { name: "Japanese" },
        { name: "Thai" },
        { name: "Mediterranean" },
        { name: "American" },
        { name: "French" },
        { name: "Greek" },
        { name: "Korean" },
        { name: "Vietnamese" },
        { name: "Mexican" },
        { name: "Lebanese" },
        { name: "Turkish" },
        { name: "Moroccan" },
        { name: "Brazilian" },
        { name: "Peruvian" },
        { name: "Argentinian" },
        { name: "German" },
        { name: "British" },
        { name: "Portuguese" },
        { name: "Russian" },
        { name: "African" },
        { name: "Caribbean" },
        { name: "Middle Eastern" },
        { name: "Nordic" },
        { name: "Eastern European" },
        { name: "Australian" },
        { name: "Canadian" }
      ];
  const [selectedCuisine, setSelectedCuisine] = useState([]);

  const toggleCuisine = (cuisineName) => {
    setSelectedCuisine((prevCuisine) => {
      if (prevCuisine.includes(cuisineName)) {
        // If the cuisine is already selected, remove it from the array
        return prevCuisine.filter((cuisine) => cuisine !== cuisineName);
      } else {
        // If the cuisine is not selected, add it to the array
        return [...prevCuisine, cuisineName];
      }
    });
  };
  return (
    <div className="flex items-center justify-center h-screen w-full m-auto">
      <div className="p-10 lg:max-w-5xl">
        <h1 className="text-start text-3xl font-bold mb-8">
          What are your favorite cuisines?
        </h1>
        <div className="h-fit flex flex-wrap">
          {cuisines.map((cuisine, index) => (
            <span
              className={`${
                selectedCuisine.includes(cuisine.name)
                  ? "bg-orange-500 text-white"
                  : "hover:bg-amber-600 hover:bg-opacity-30"
              } flex items-center p-1 px-2 rounded-full m-1 border border-orange-500 cursor-pointer`}
              onClick={() => toggleCuisine(cuisine.name)}
            >
              {cuisine.name}
              {selectedCuisine.includes(cuisine.name) && (
                <FaCircleCheck className="ml-2 text-white animate-slideUp" />
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
