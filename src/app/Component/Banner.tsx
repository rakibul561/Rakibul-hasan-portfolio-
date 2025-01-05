import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import { IconCloudDemo } from "./Farmer";
import Heading from "./Heading/Heading";

const Banner = () => {
  return (
    <div className="bg-gray-900 text-white">
      <main className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16 mt-16  p-2 py-8">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Hello! I am</h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-green-500">
            Rakibul Hasan
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-green-400">
            Frontend Developer
          </p>
          <p className="text-base md:text-lg lg:text-xl text-gray-300">
            <span className="text-green-500">→</span> Web Developer{" "}
            <span className="text-green-500">→</span> Programmer
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded">
              Get Resume
            </button>
            <button className="bg-gray-800 border border-green-500 hover:bg-gray-700 text-white px-6 py-2 rounded">
              About Me
            </button>
          </div>
          <div className="mt-4">
            <Heading title="Follow Me" />
            <div className="flex justify-center md:justify-start space-x-4 text-2xl md:text-4xl">
              <a href="#" className="hover:text-green-500">
                <FaGithub />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaMedium />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-green-500">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Icon Cloud Section */}
        <div className="flex-1 flex justify-center">
          <IconCloudDemo />
        </div>
      </main>
    </div>
  );
};

export default Banner;
