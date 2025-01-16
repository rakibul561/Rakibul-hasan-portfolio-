/* eslint-disable @next/next/no-img-element */
"use client";
import { FC } from "react";
import Heading from "../Component/Heading/Heading";
import img1 from '../../../public/my pic.jpg'
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";


const Aboutpage: FC = () => {
  return (
    <div id="" className=" md:px-2 lg:mt-20  py-8 ">
      <Heading title="About Me" />
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between m-2 space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Section */}
        <div className="lg:w-7/12 space-y-4">
          <p className=" leading-relaxed">
            I'm Rakibul Hasan, a Frontend Developer. I'm a dedicated Junior Frontend Developer driven by a passion for creating visually stunning and user-friendly web interfaces. My expertise spans HTML, CSS, JavaScript, React.js, Node.js, Express.js, Firebase, MongoDB, and Tailwind CSS. With a strong focus on design and an ongoing commitment to enhancing my skills, I strive to deliver seamless and engaging user experiences.
          </p>
          <p className=" leading-relaxed">
            I have been involved in web development for several days and am still learning. I have also done several projects and am continuing to work on more. My dream is to become a Fullstack Developer. Inshallah, that dream will be fulfilled very soon. My web development journey started in 2023, and it continues with Programming Hero by my side. Through dedication and hard work, I have become a Junior Web Developer.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://drive.google.com/file/d/1UznF1Qj-HlvLo1OyssfkCd4VsAyv7FqY/view" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              Get Resume
            </a>
            <a href="/skills" className="bg-gray-800 border border-green-500 hover:bg-gray-700 text-white px-6 py-2 rounded-md">
              My Skills
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center p-2 relative ">
          <BorderBeam/>
         
          
            <div className="w-[400px]">
        <Image placeholder="blur" src={img1} alt="profile image" />
        
      </div>
          {/* <img
            className="w-full h-auto max-h-[350px] lg:mr-28 object-cover bg-white rounded-lg shadow-lg"
            src= {img1}
            alt="Rakibul Hasan"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
