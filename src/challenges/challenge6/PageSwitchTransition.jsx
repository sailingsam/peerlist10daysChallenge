import React, { useState } from "react";
import { SiPeerlist } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Input } from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

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
      <div className="w-[320px] h-[580px] p-4 flex flex-col justify-between rounded-xl shadow-md shadow-black">
        <div className="flex flex-col gap-4 items-start mt-5">
          <SiPeerlist className="w-8 h-8 text-green-600" />
          <span>
            A place on the internet for <i>designers & developers </i> to launch
            Projects, build a portfolio, and find jobs.
          </span>
        </div>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-col gap-3 w-full relative">
            <motion.div
              className={`${
                joinDrawer == true ? "absolute bottom-0 p-3" : "p-2"
              } bg-white shadow-inner shadow-slate-300 w-full border border-gray-300 rounded-xl`}
            >
              <div className="flex justify-between items-center">
                {/* visible div in draw */}
                <div className="flex flex-col">
                  <span className="font-bold text-md">Join Peerlist</span>
                  <span className="text-sm">Create your Peerlist Profile</span>
                </div>
                <div
                  className="bg-green-600 shadow-inner shadow-gray-400 p-2 text-white rounded-full"
                  onClick={toggleJoinDrawer}
                >
                  {joinDrawer ? <RxCross1 /> : <FaChevronDown />}
                </div>
              </div>
              {/* hidden div in draw which come from bottom on joinDrawer == true*/}
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
            <div
              className={`${
                loginDrawer == true ? "absolute bottom-0 p-3" : "p-2"
              } bg-white shadow-inner shadow-slate-300 w-full border border-gray-300 rounded-xl`}
            >
              <div className="flex justify-between items-center">
                {/* visible div in draw */}
                <div className="flex flex-col">
                  <span className="font-bold text-md">Login</span>
                  <span className="text-sm">
                    Already have Peerlist profile?
                  </span>
                </div>
                <div
                  className="bg-green-600 shadow-inner shadow-gray-400 p-2 text-white rounded-full"
                  onClick={toggleLoginDrawer}
                >
                  {joinDrawer ? <RxCross1 /> : <FaChevronDown />}
                </div>
              </div>
              {/* hidden div in draw which come from bottom on joinDrawer == true*/}
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
            </div>
          </div>
          <span className="text-gray-500 text-xs mt-5 mb-2">
            © 2024 Peerlist Inc. iOS v1.4.2
          </span>
        </div>
      </div>
    </div>
  );
}

export default PageSwitchTransition;
