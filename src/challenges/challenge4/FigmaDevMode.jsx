import React, { useState } from "react";
import "./FigmaDevMode.css";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import { LuMousePointer2 } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import { PiRuler } from "react-icons/pi";
import { LiaEdit } from "react-icons/lia";
import CommentSVG from "./CommentSVG";
import { LuFrame } from "react-icons/lu";
import SlantLineSVG from "./SlantLineSVG";
import { CiPen } from "react-icons/ci";
import { PiTextTLight } from "react-icons/pi";
import { BsStars } from "react-icons/bs";

export default function FigmaDevMode() {
  const [isDevMode, setIsDevMode] = useState(false);

  const [parentWidth, setParentWidth] = useState("initial");
  const toggleDevMode = () => {
    setIsDevMode(!isDevMode);
    setParentWidth(isDevMode ? "initial" : "largerWidth");
  };
  const parentVariants = {
    initial: { width: "auto" },
    largerWidth: { width: "100%" },
  };
  return (
    <motion.div
      className="bg-gray-900 flex items-center justify-center h-screen w-full m-auto"
      animate={parentWidth}
      variants={parentVariants}
      transition={{ duration: 1, ease: "easeInOut", easings: "easeInOut" }}
    >
      <div className="bg-white rounded-xl h-16 h-fit flex flex-col sm:flex-row justify-center items-center cursor-pointer">
        <motion.div
          initial={{ opacity: 0, y: -50, display: "none" }}
          animate={isDevMode ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, y: 0, display: "block" },
            hidden: { opacity: 0, y: 15, display: "none" },
          }}
          transition={{ duration: 0.4, delay: !isDevMode ? 0 : 0.4 }}
          className="p-2 pr-3 h-full flex flex-col sm:flex-row items-center gap-4"
        >
          <div className="p-2 pr-3 h-full flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center">
              <LuMousePointer2 className="bg-green-600 h-full w-12 p-2 text-white rounded-xl flex justify-center items-center" />
              <FaChevronDown className="ml-[2px]" />
            </div>
            <div className="flex items-center font-bold">
              <PiRuler className="h-full w-12 p-2 rounded-xl flex justify-center items-center" />
            </div>
            <div className="flex items-center">
              <LiaEdit className="h-full w-12 p-2 text-gray-8 rounded-xl flex justify-center items-center" />
            </div>
            <div className="flex items-center">
              <CommentSVG />
            </div>
          </div>
        </motion.div>
        <motion.dev
          animate={isDevMode ? "hidden" : "visible"}
          variants={{
            hidden: { opacity: 0, y: -20, display: "none" },
            visible: { opacity: 1, y: 0, display: "block" },
          }}
          transition={{ duration: 0.4, delay: isDevMode ? 0 : 0.4 }}
          className="p-2 pr-3 h-full flex items-center gap-6"
        >
          <div className="p-2 pr-3 h-full flex flex-col sm:flex-row items-center gap-6">
            <div className="flex items-center">
              <LuMousePointer2 className="bg-blue-600 h-full w-12 p-2 text-white rounded-xl flex justify-center items-center" />
              <FaChevronDown className="ml-[2px]" />
            </div>
            <div className="flex items-center font-bold">
              <LuFrame className="h-full w-12 p-2 rounded-xl flex justify-center items-center" />
              <FaChevronDown className="ml-[2px]" />
            </div>
            <div className="flex items-center font-bold">
              <SlantLineSVG className="h-full w-12 p-2 rounded-xl flex justify-center items-center" />
              <FaChevronDown className="ml-[2px]" />
            </div>
            <div className="flex items-center">
              <CiPen className="h-full w-12 p-2 rounded-xl flex justify-center items-center" />
              <FaChevronDown className="ml-[2px]" />
            </div>
            <div className="flex items-center">
              <PiTextTLight className="h-full w-12 p-2 rounded-xl flex justify-center items-center" />
            </div>
            <div className="flex items-center">
              <CommentSVG />
            </div>
            <div className="flex items-center">
              <BsStars className="h-full w-12 p-2 rounded-xl flex justify-center items-center" />
            </div>
          </div>
        </motion.dev>

        {/* this will divide both parts */}
        <div className="bg-gray-400 w-[1px] h-full"></div>

        {/* below is second part which is perfectly working */}
        <div className="p-3 h-full dev-mode">
          <label class="toggle-switch  h-[40px] sm:h-10 w-[60px]">
            <input type="checkbox" onChange={toggleDevMode} />
            <div class="toggle-switch-background">
              <div class="toggle-switch-handle flex justify-center items-center">
                <FaCode />
              </div>
            </div>
          </label>
        </div>
      </div>
    </motion.div>
  );
}
