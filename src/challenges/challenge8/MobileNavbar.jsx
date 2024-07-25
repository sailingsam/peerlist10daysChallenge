import React, { act, useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BiSolidEnvelope } from "react-icons/bi";
import { BiSolidEnvelopeOpen } from "react-icons/bi";

function MobileNavbar() {
  const navButtons = [
    {
      icon: <CgProfile />,
      text: "Profile",
    },
    {
      icon: <IoIosSearch />,
      text: "Search",
    },
    {
      icon: <FiPlus />,
      text: "Post",
    },
    {
      icon: <IoIosNotificationsOutline />,
      text: "Notifis",
    },
    {
      icon: <BiSolidEnvelope />,
      text: "Inbox",
    },
  ];

  const [activeButton, setActiveButton] = useState(0);

  const handleClick = (index) => {
    setActiveButton(index);
  };

  return (
    <div className="flex items-center justify-center w-full m-auto">
      <div className="relative items-center text-center justify-center bg-gray-900 w-[370px] h-[700px] my-1 m-auto rounded-[50px] border-8 border-black shadow-2xl shadow-black overflow-hidden">
        {/* ye mobile notch hai */}
        <div className="m-auto h-8 w-28 mt-3 bg-black rounded-full flex justify-end items-center">
          <div className=" bg-white h-1 w-1 mr-4 rounded-full"></div>
        </div>
        <div className="absolute bottom-0 bg-white h-16 w-full flex items-end justify-between px-4 ">
          {navButtons.map((button, index) => (
            <div
              key={index}
              className="flex flex-col text-2xl items-center cursor-pointer mb-3"
              onClick={() => handleClick(index)}
            >
              <div
                className={`${
                  activeButton == index ? "p-[2px] bg-white rounded-full mb-2" : "p-[2px] rounded-full bg-transparent"
                } hover:duration-200 duration-200 `}
              >
                <div
                  className={`
                    ${activeButton === index
                      ? "bg-black p-1 text-white rounded-full"
                      : "bg-transparent p-1 rounded-full"} hover:duration-500 duration-500 
                  `}
                >
                  {button.icon}
                </div>
              </div>
              <p className="text-xs">{button.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MobileNavbar;
