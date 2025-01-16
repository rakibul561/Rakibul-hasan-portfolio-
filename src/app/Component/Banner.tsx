import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaFacebook,
 
  FaInstagram,
} from "react-icons/fa";
import { IconCloudDemo } from "./Farmer";
import Heading from "./Heading/Heading";
import Link from "next/link";

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
          <p className="text-base  md:text-lg lg:text-xl text-gray-300">
            <span className="text-green-500 ">→</span> Web Developer{" "}
            <span className="text-green-500">→</span> Programmer
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://drive.google.com/file/d/1UznF1Qj-HlvLo1OyssfkCd4VsAyv7FqY/view" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded" >
              Get Resume
            </a>
            <a   className="bg-gray-800 border border-green-500 hover:bg-gray-700 text-white px-6 py-2 rounded" href={"/about"}>
              About Me
            </a>
          </div>
          <div className="mt-4">
            <Heading title="Follow Me" />
            <div className="flex justify-center md:justify-start space-x-4 text-2xl md:text-4xl">
              <Link href="https://github.com/rakibul561" className="hover:text-[#181717]">
                <FaGithub />
              </Link>
              <Link href="https://www.linkedin.com/in/rakibul-hasan-b94123271/" className="hover:text-[#0A66C2]">
                <FaLinkedin />
              </Link>
              <Link href="#" className="hover:text-[#EA4335]">
                <FaMedium />
              </Link>
              <Link href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Frakibulhasan1026%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR08OX5qtGQHtlmSg6zJMLI7pcbargRKpj4vG_i8gHU_FciuOwTQqR_FlIU_aem_-Ja2IaEYhPsWk_oMrg7wYQ&h=AT2fA_0q_J4GApJnv8m9sEsnfcN-e3iPIAKEYPVz1BlwkOAYEp1xSPnKPsoOpnP2JTh8QY5xf3nW-ZtvEBwYw74fjXq5_59LPLYdn8L1-JAHRuS4WWO9ed3Vk-3SRwPHfFcbiqH0JfvWpkp4K-MX" className="hover:text-red-500">
                <FaInstagram />
              </Link>
              <Link href="https://web.facebook.com/maybe.rakib.507367" className="hover:text-[#1877F2]">
                <FaFacebook />
              </Link>
             
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
