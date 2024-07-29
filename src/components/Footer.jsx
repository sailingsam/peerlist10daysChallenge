import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";

export default function Footer() {
  return (
    <div className="mt-20 w-full max-w-2xl mx-auto">
      <table
        role="presentation"
        className="w-full border-none m-0 border-collapse"
      >
        <tbody>
          <tr className="flex">
            <td>
              <div className="w-16 h-16 mr-1">
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
            <td>
              <table
                role="presentation"
                className="w-full border-none m-0 border-collapse"
              >
                <tbody>
                  <tr className="font-semibold">
                    <td className="">
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
                    <td className="p-2 w-1/3">
                      <p className="text-sm m-0 leading-6">
                        <span className="text-gray-500">Email</span>
                        <a
                          href="mailto:jainsaksham1004@gmail.com"
                          className="block text-gray-900 break-words"
                        >
                          jainsaksham1004@gmail.com
                        </a>
                      </p>
                    </td>
                    <td className="pt-2 pb-2 w-1/3">
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
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                role="presentation"
                className="w-full border-none m-0 border-collapse"
              >
                <tbody>
                  <tr>
                    <td className="inline-block flex">
                        <button className="inline-block bg-green-500 rounded-full mx-2 px-2">
                            <a className="flex text-center items-center gap-1"
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
                        className="inline-block mr-2 rounded-full border border-gray-300 p-1.5"
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
                        className="inline-block mr-2 rounded-full border border-gray-300 p-1.5"
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
