import React, { useState } from "react";
import { FiGitCommit } from "react-icons/fi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import { motion } from "framer-motion";

export default function ActionToolbar() {
  const [buttonActive, setButtonActive] = useState(1);
  const [deployStatus, setDeployStatus] = useState("Failed");
  const [analyticsStatus, setAnalyticsStatus] = useState("Analytics");
  const [billingStatus, setBillingStatus] = useState("Billing");
  const [isCompiled, setIsCompiled] = useState(false);

  const toggleButton1 = () => {
    setButtonActive(1);
  };
  const toggleButton2 = () => {
    setButtonActive(2);
  };
  const toggleButton3 = () => {
    setButtonActive(3);
  };

  const deploy = () => {
    setDeployStatus((prevStatus) => (prevStatus === "Failed" ? "Redeploy" : "Failed"));
    setIsCompiled(!isCompiled);
  };

  const analytics = () => {
    setAnalyticsStatus((prevStatus) => (prevStatus === "Analytics" ? "Close" : "Analytics"));
  };

  const billing = () => {
    setBillingStatus((prevStatus) => (prevStatus === "Billing" ? "See Pro" : "Billing"));
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  };

  const compileMessageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="flex items-center justify-center h-screen w-full m-auto">
      <div className="flex flex-col items-center gap-14">
        <motion.div
          className="shadow shadow-slate-500 w-fit p-2 px-4 rounded-3xl"
          initial="initial"
          whileTap="tap"
          variants={buttonVariants}
        >
          {buttonActive === 1 ? (
            <div className="flex items-center gap-3 text-sm">
              <FiGitCommit className="text-red-400 text-3xl" />
              <span>2e813de</span>
              {deployStatus === "Redeploy" && (
                <motion.span
                  className="text-gray-400 font-semibold mx-2"
                  variants={compileMessageVariants}
                  initial="hidden"
                  animate={isCompiled ? "visible" : "hidden"}
                  transition={{ duration: 0.5 }}
                >
                  Failed to Compile
                </motion.span>
              )}
              <button
                className={`${
                  deployStatus === "Failed" ? "bg-red-400 text-white" : "bg-red-500 text-white"
                } rounded-lg px-2 py-[2px]`}
                onClick={deploy}
              >
                <span className="font-semibold">{deployStatus}</span>
              </button>
            </div>
          ) : buttonActive === 2 ? (
            <div className="flex flex-col">
              {analyticsStatus === "Close" && (
                <div className="w-80 text-sm relative">
                  <div className="flex justify-between">
                    <div className="flex gap-7">
                      <span className="font-semibold">Traffic</span>
                      <span>Last 3 Days</span>
                    </div>
                    <span className="font-semibold">See all</span>
                  </div>
                  <div className="my-3 flex flex-col gap-2 text-gray-500">
                    <div className="flex justify-between">
                      <span>/projects</span>
                      <span>2,543 visits</span>
                    </div>
                    <div className="flex justify-between">
                      <span>/groups</span>
                      <span>2,121 visits</span>
                    </div>
                    <div className="flex justify-between">
                      <span>/orders</span>
                      <span>2,433 visits</span>
                    </div>
                    <div className="flex justify-between">
                      <span>/templates</span>
                      <span>1,023 visits</span>
                    </div>
                  </div>
                </div>
              )}
              <div className="static flex items-center justify-between gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <TbBrandGoogleAnalytics className="text-blue-400 text-3xl" />
                  <span className="text-gray-500 font-semibold">32 Online Now</span>
                </div>
                <button
                  className={`${
                    analyticsStatus === "Analytics" ? "bg-blue-400 text-white" : "bg-black text-white"
                  } rounded-lg px-2 py-[2px]`}
                  onClick={analytics}
                >
                  <span className="font-semibold">{analyticsStatus}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3 text-sm">
              <CiDollar className="text-green-600 text-3xl" />
              {billingStatus === "Billing" ? (
                <span className="text-gray-400 font-semibold mx-2">2 days left in your trial</span>
              ) : (
                <span className="text-gray-400 font-semibold mx-2">
                  Upgrade to <span className="text-green-600">Pro</span> and save $12
                </span>
              )}
              <button className="bg-green-600 text-white rounded-lg px-2 py-[2px]" onClick={billing}>
                <span className="font-semibold">{billingStatus}</span>
              </button>
            </div>
          )}
        </motion.div>
        <div className="flex gap-8 text-sm font-bold">
          <motion.button
            className={`${buttonActive === 1 ? "bg-black text-white" : ""} rounded-lg px-1 py-[2px]`}
            onClick={toggleButton1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>Commit</span>
          </motion.button>
          <motion.button
            className={`${buttonActive === 2 ? "bg-black text-white" : ""} rounded-lg px-1 py-[2px]`}
            onClick={toggleButton2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>Analytics</span>
          </motion.button>
          <motion.button
            className={`${buttonActive === 3 ? "bg-black text-white" : ""} rounded-lg px-1 py-[2px]`}
            onClick={toggleButton3}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>Upgrade</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
