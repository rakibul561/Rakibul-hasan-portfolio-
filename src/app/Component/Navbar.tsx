/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-2 border-green-600">
      <header className="flex flex-col items-start px-4 py-4 md:flex-row md:justify-between md:items-center md:px-8">
        {/* Logo Section */}
        <Link
         href="/"
        className="flex items-center justify-between w-full md:w-auto">
          
          <img
        
            src="https://i.ibb.co.com/wW022Kc/Screenshot-2024-12-19-073321.png"
            alt="Logo"
            className="w-12 h-auto"
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-green-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
              />
            </svg>
          </button>
        </Link>

        {/* Navigation Links */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col w-full items-center space-y-2 mt-4 md:mt-0 md:flex md:flex-row md:items-center md:w-auto md:space-y-0 md:space-x-4`}
        >
          <Link
            href="/about"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            Skills
          </Link>
          <Link
            href="/project"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            Project
          </Link>
          <Link
            href="/contact"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            Contact
          </Link>
          <Link
            href="/resume"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            Resume
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
