/* eslint-disable @next/next/no-img-element */
'use client';
import { BorderBeam } from '@/components/ui/border-beam';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-lg">
      {/* BorderBeam */}
      <div className="absolute inset-0 -z-10 hidden md:block">
        <BorderBeam />
      </div>

      <header className="flex flex-col items-start max-w-7xl mx-auto py-4 md:flex-row md:justify-between md:items-center md:px-8">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center justify-between w-full md:w-auto"
        >
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
            isOpen ? 'flex' : 'hidden'
          } flex-col w-full items-center space-y-2 mt-4 md:mt-0 md:flex md:flex-row md:items-center md:w-auto md:space-y-0 md:space-x-4`}
        >
          <a
            href="/about"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            About
          </a>
          <a
            href="/skills"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            Skills
          </a>
          <a
            href="/project"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            Project
          </a>
          <a
            href="/contact"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            Contact
          </a>
          <a
            href="/resume"
            className="text-sm md:text-base px-3 py-1 rounded text-white bg-transparent hover:bg-green-500 transition-all duration-300"
          >
            Resume
          </a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
