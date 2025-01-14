/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import { IoBookOutline } from "react-icons/io5";
import Heading from "../Component/Heading/Heading";
import img1 from "../../../public/quick.png";
import img2 from '../../../public/hotel booking.png'
import img3 from '../../../public/tour guide.png'
import Image from "next/image";

const Projectpage = () => {
  return (
    <div className="">
      <section className="bg-base-300">
        <div className="container px-6 py-10 mx-auto">
          <Heading title="Project"></Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              {/* <img
                src="https://i.ibb.co.com/3p4gDdw/Screenshot-2024-09-19-210033.png"
                alt=""
                className="object-cover object-center w-full h-72 dark:bg-gray-500"
              /> */}
               <div className="object-cover object-center w-full   dark:bg-gray-500">
                <Image placeholder="blur" src={img3} alt="profile image" />
              </div>

              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl">Tour Guide Client</h2>
                  <div className="flex items-center space-x-3 text-2xl">
                    <a href="https://github.com/rakibul561/Tour-Guide-Client-">
                      <IoBookOutline />
                    </a>
                    <a href="https://tour-guide-client.surge.sh/">
                      <IoIosLink />
                    </a>
                    <a href="https://github.com/rakibul561/Tour-Guide-Server">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="text-sm mt-4">
                Tour Guide is a web-based application designed to provide travelers with guides, travel plans, and travel-related information. It helps travelers find accurate information about travel destinations and enhances their travel experience. Problem Solved: This platform assists travelers in easily obtaining information about various travel destinations and aids in their travel planning, thereby saving time and effort during trips. 
                </p>
                <h2 className="text-xl font-bold mt-4">Technology Used:</h2>
                <div className="flex flex-wrap gap-2 text-white mt-4">
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Html
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Tailwind
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Reactjs
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Firebase
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Express
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Nodejs
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    MongoDb
                  </a>
                </div>
              </div>
            </div>

            {/* দ্বিতীয় প্রজেক্ট */}
            <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              {/* <img src="https://i.ibb.co.com/jZH7hkL/quick.png" alt="" className="" /> */}
              <div className="object-cover object-center w-full   dark:bg-gray-500">
                <Image placeholder="blur" src={img1} alt="profile image" />
              </div>

              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl">
                    Quick Buzz <span className="text-sm">(Team Project)</span>
                  </h2>
                  <div className="flex items-center space-x-3 text-2xl">
                    <a href="https://github.com/nayeem-miah/quick-buzz-E-Commare-Team">
                      <IoBookOutline />
                    </a>
                    <a href="https://quick-bus-bd.web.app/">
                      <IoIosLink />
                    </a>
                    <a href="https://github.com/nayeem-miah/quick-buzz-E-Commare-Team">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="text-sm mt-4">
                Quick Buzz is a cutting-edge e-commerce platform designed to deliver a seamless, reliable, and user-friendly online shopping experience. Inspired by platforms like Daraz, it allows users to effortlessly browse through a vast collection of products across various categories. Users can explore detailed product descriptions, compare options, and make informed decisions.The platform streamlines the shopping process by offering a smooth interface for selecting desired items, 
                </p>
                <h2 className="text-xl font-bold mt-4">Technology Used:</h2>
                <div className="flex flex-wrap gap-2 text-white mt-4">
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Html
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Tailwind
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Reactjs
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Firebase
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Express
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Nodejs
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    MongoDb
                  </a>
                </div>
              </div>
            </div>
            <div className="rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
              {/* <img
                src="https://i.ibb.co.com/1qgPBpD/Screenshot-2024-09-19-205547.png"
                alt=""
                className="object-cover object-center w-full h-72 dark:bg-gray-500"
              /> */}
              <div className="object-cover object-center w-full   dark:bg-gray-500">
                <Image placeholder="blur" src={img2} alt="profile image" />
              </div>  
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl">Hotel Booking</h2>
                  <div className="flex items-center space-x-3 text-2xl">
                    <a href="https://github.com/rakibul561/Hotel-Booking">
                      <IoBookOutline />
                    </a>
                    <a href="https://obtainable-name.surge.sh/">
                      <IoIosLink />
                    </a>
                    <a href="https://github.com/rakibul561/Hotel-Booking-Server">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="text-sm mt-4">
                   Hotel Booking is a web-based application designed to
                  simplify the process of finding and booking hotels online. It
                  addresses the common problem of spending excessive time and
                  effort in searching for suitable accommodations. Problem
                  Solved: The platform offers users a streamlined and efficient
                  way to browse, compare, and book hotels, enhancing the overall
                  travel planning experience.
                </p>
                <h2 className="text-xl font-bold mt-4">Technology Used:</h2>
                <div className="flex flex-wrap gap-2 text-white mt-4">
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Html
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Tailwind
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Reactjs
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Firebase
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Express
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    Nodejs
                  </a>
                  <a href="" className="bg-[#22C55E] px-2 py-1 rounded-sm">
                    MongoDb
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projectpage;
