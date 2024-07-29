import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

export default function Footer() {
  return (
    <div className="mt-20 w-full md:max-w-2xl mx-auto p-4">
      <table
        role="presentation"
        className="w-full border-none m-0 border-collapse"
      >
        <tbody>
          <tr className="flex flex-col md:flex-row">
            <td className="mb-4 md:mb-0 md:mr-4">
              <div className="w-16 h-16">
                <a
                  href="https://peerlist.io/sailingsam"
                  target="_blank"
                  rel="noreferrer"
                  title="Saksham"
                  className="no-underline"
                >
                  <img
                    src="https://dqy38fnwh4fqs.cloudfront.net/UHLKNN67RAMGBQGFE6J7MBD8GRL6/hlknn67ramgbqgfe6j7mbd8grl6-profile.webp"
                    alt="Saksham"
                    className="w-full h-full rounded-full object-cover"
                  />
                </a>
              </div>
            </td>
            <td className="w-full">
              <table
                role="presentation"
                className="w-full border-none m-0 border-collapse"
              >
                <tbody>
                  <tr className="font-semibold">
                    <td>
                      <a
                        href="https://peerlist.io/sailingsam"
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-900 font-semibold"
                      >
                        Saksham Jain
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="pb-2 text-xs font-medium text-gray-900">
                      <span>
                        Postman Student Expert 👨‍🎓| 1st year UnderGrad | React⚛️
                        |Java☕| Flutter🐦| Core member - Media Club🎬
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                role="presentation"
                className="w-full border-none m-0 border-collapse"
              >
                <tbody>
                  <tr className="w-full border-t border-gray-300">
                    <div className="sm:flex w-full sm:gap-5 my-2">
                      <p className="text-sm m-0 leading-6">
                        <span className="text-gray-500">Email</span>
                        <a
                          href="mailto:jainsaksham1004@gmail.com"
                          className="block text-gray-900 break-words"
                        >
                          jainsaksham1004@gmail.com
                        </a>
                      </p>
                      <p className="text-sm m-0 leading-6">
                        <span className="text-gray-500">Website</span>
                        <a
                          href="https://Sailingsam.vercel.app"
                          target="_blank"
                          rel="noreferrer"
                          className="block text-gray-900 break-words"
                        >
                          https://Sailingsam.vercel.app
                        </a>
                      </p>
                    </div>
                  </tr>
                </tbody>
              </table>
              <table
                role="presentation"
                className="w-full border-none m-0 border-collapse"
              >
                <tbody>
                  <tr>
                    <td className="inline-block flex flex-wrap">
                      <button className="inline-block bg-green-500 rounded-full mx-2 px-2 mb-2 md:mb-0">
                        <a
                          className="flex text-center items-center gap-1"
                          href="https://peerlist.io/sailingsam"
                          target="_blank"
                          rel="noreferrer"
                          title="Peerlist"
                        >
                          <SiPeerlist className="table-cell align-middle w-4 h-4" />
                          Peerlist
                        </a>
                      </button>
                      <a
                        href="https://twitter.com/jainsaksham1004"
                        target="_blank"
                        rel="noreferrer"
                        title="social-icon-twitter"
                        className="inline-block mr-2 rounded-full border border-gray-300 p-1.5 mb-2 md:mb-0"
                      >
                        <img
                          src="https://peerlist-media.s3.amazonaws.com/media/twitter.png"
                          alt="social-icon-twitter"
                          className="table-cell align-middle w-4"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/sailingsam"
                        target="_blank"
                        rel="noreferrer"
                        title="social-icon-linkedin"
                        className="inline-block mr-2 rounded-full border border-gray-300 p-1.5 mb-2 md:mb-0"
                      >
                        <FaLinkedin className="table-cell align-middle w-4 h-4" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
