import React, { useState } from "react";
import { SiPeerlist } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { delay, motion } from "framer-motion";
import { Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdNetworkCell } from "react-icons/md";
{/* <MdNetworkCell />; */}
import { MdNetworkWifi3Bar } from "react-icons/md";
{/* <MdNetworkWifi3Bar />; */}
import { IoBatteryHalfSharp } from "react-icons/io5";
{/* <IoBatteryHalfSharp />; */}

function PageSwitchTransition() {
  const [joinDrawer, setJoinDrawer] = useState(false);
  const [loginDrawer, setLoginDrawer] = useState(false);

  const toggleJoinDrawer = () => {
    setJoinDrawer(!joinDrawer);
    setLoginDrawer(false);
  };
  const toggleLoginDrawer = () => {
    setLoginDrawer(!loginDrawer);
    setJoinDrawer(false);
  };

  return (
    <div className="flex items-center justify-center h-screen w-full m-auto">
      <div className="p-3 bg-black rounded-[40px] overflow-hidden shadow-2xl cursor-pointer shadow-gray-900">
        <div className="bg-white w-[320px] h-[580px] flex flex-col rounded-[30px] shadow-md shadow-black">
          <div className="w-full flex justify-between px-4">
            <span className="w-20 mt-1 text-sm">9:41</span>
            <div className="top-0 mx-auto bg-black h-8 w-32 rounded-b-2xl"></div>
            <div className="flex gap-1 w-20 mt-1 justify-end">
              <MdNetworkCell className="" />
              <MdNetworkWifi3Bar className="" />
              <IoBatteryHalfSharp className="" />
            </div>
          </div>
          <div className="flex flex-col justify-between h-full p-4">
            <div className="flex flex-col gap-4 items-start text-xl">
              <SiPeerlist className="w-8 h-8 text-green-600" />
              <span>
                A place on the internet for <i>designers & developers </i> to
                launch Projects, build a portfolio, and find jobs.
              </span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col gap-3 w-full relative">
                <motion.div
                  animate={{ height: joinDrawer ? "26rem" : "4rem" }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    easings: "easeInOut",
                  }}
                  className={`${
                    joinDrawer ? "delay-0.2 absolute bottom-0" : ""
                  } p-2 bg-white shadow-inner shadow-slate-300 w-full border border-gray-300 rounded-xl overflow-hidden`}
                >
                  <div className="flex justify-between items-center">
                    {/* visible div in drawer */}
                    <div className="flex flex-col">
                      <span className="font-bold text-md">Join Peerlist</span>
                      <span className="text-sm">
                        Create your Peerlist Profile
                      </span>
                    </div>
                    <div
                      className="bg-green-600 shadow-inner shadow-gray-400 p-2 text-white rounded-full cursor-pointer"
                      onClick={toggleJoinDrawer}
                    >
                      {joinDrawer ? <RxCross1 /> : <FaChevronDown />}
                    </div>
                  </div>
                  {/* hidden div in drawer which comes from bottom on joinDrawer == true */}
                  {joinDrawer && (
                    <div className="flex flex-col mt-3 mb-2 text-sm">
                      <span className="font-semibold">Email</span>
                      <Input placeholder="" />
                      <span className="mt-3 font-semibold">Password</span>
                      <Input placeholder="" />
                      <button className="text-white font-bold bg-green-600 w-fit m-auto mt-3 p-2 px-3 rounded-full">
                        {`Join Peerlist ->`}
                      </button>
                      <span className="m-auto py-5 text-gray-500 font-semibold text-xs">
                        OR
                      </span>
                      <button className="font-semibold w-full m-auto mt-3 p-1 px-3 border shadow rounded-full text-xl">
                        <FcGoogle className="inline-block mr-2" />
                        <span className="text-lg">{`Continue with Google`}</span>
                      </button>
                      <button className="font-semibold w-full m-auto mt-3 p-1 px-3 border shadow rounded-full text-xl">
                        <FaApple className="inline-block mr-2" />
                        <span className="text-lg">{`Continue with Google`}</span>
                      </button>
                    </div>
                  )}
                </motion.div>
                <motion.div
                  animate={{ height: loginDrawer ? "26rem" : "4rem" }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    easings: "easeInOut",
                  }}
                  className={`${
                    loginDrawer ? "delay-0.2 absolute bottom-0" : ""
                  } p-2 bg-white shadow-inner shadow-slate-300 w-full border border-gray-300 rounded-xl overflow-hidden`}
                >
                  <div className="flex justify-between items-center">
                    {/* visible div in drawer */}
                    <div className="flex flex-col">
                      <span className="font-bold text-md">Login</span>
                      <span className="text-sm">
                        Already have Peerlist profile?
                      </span>
                    </div>
                    <div
                      className="bg-green-600 shadow-inner shadow-gray-400 p-2 text-white rounded-full cursor-pointer"
                      onClick={toggleLoginDrawer}
                    >
                      {loginDrawer ? <RxCross1 /> : <FaChevronDown />}
                    </div>
                  </div>
                  {/* hidden div in drawer which comes from bottom on loginDrawer == true */}
                  {loginDrawer && (
                    <div className="flex flex-col mt-3 mb-2 text-sm">
                      <span className="font-semibold">Email</span>
                      <Input placeholder="" />
                      <span className="mt-3 font-semibold">Password</span>
                      <Input placeholder="" />
                      <div className="w-full flex justify-between items-center mt-3">
                        <span>Forgot Password?</span>
                        <button className="text-white font-bold bg-green-600 w-fit p-2 px-3 rounded-full">
                          {`Login ->`}
                        </button>
                      </div>
                      <span className="m-auto py-5 text-gray-500 font-semibold text-xs">
                        OR
                      </span>
                      <button className="font-semibold w-full m-auto mt-3 p-1 px-3 border shadow rounded-full text-xl">
                        <FcGoogle className="inline-block mr-2" />
                        <span className="text-lg">{`Continue with Google`}</span>
                      </button>
                      <button className="font-semibold w-full m-auto mt-3 p-1 px-3 border shadow rounded-full text-xl">
                        <FaApple className="inline-block mr-2" />
                        <span className="text-lg">{`Continue with Google`}</span>
                      </button>
                    </div>
                  )}
                </motion.div>
              </div>
              <span className="text-gray-500 text-xs mt-5 mb-2">
                © 2024 Peerlist Inc. iOS v1.4.2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSwitchTransition;
