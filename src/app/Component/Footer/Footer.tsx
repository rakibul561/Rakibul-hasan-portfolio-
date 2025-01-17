/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaMedium,
    FaFacebook,
   
    FaInstagram,
  } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900  text-white py-6">
      <div className="container  border-t-2 py-2 border-green-600 mx-auto text-center">
        {/* Navigation Links */}
        <div className="flex justify-center text-xl space-x-8 mb-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/project" className="hover:text-gray-400">
            Projects
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex text-2xl justify-center space-x-6 mb-4">
        <a href="https://github.com/rakibul561" className="hover:text-[#181717]">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/rakibul-hasan-b94123271/" className="hover:text-[#0A66C2]">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-[#EA4335]">
                <FaMedium />
              </a>
              <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Frakibulhasan1026%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR08OX5qtGQHtlmSg6zJMLI7pcbargRKpj4vG_i8gHU_FciuOwTQqR_FlIU_aem_-Ja2IaEYhPsWk_oMrg7wYQ&h=AT2fA_0q_J4GApJnv8m9sEsnfcN-e3iPIAKEYPVz1BlwkOAYEp1xSPnKPsoOpnP2JTh8QY5xf3nW-ZtvEBwYw74fjXq5_59LPLYdn8L1-JAHRuS4WWO9ed3Vk-3SRwPHfFcbiqH0JfvWpkp4K-MX" className="hover:text-red-500">
                <FaInstagram />
              </a>
              <a href="https://web.facebook.com/maybe.rakib.507367" className="hover:text-[#1877F2]">
                <FaFacebook />
              </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Rakibul Hasan. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
