import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
             
             <div className="min-w-7xl border-b-green-600 border border-r-0 border-l-0 border-t-0 text-2xl">
      <header className="flex justify-between items-center px-8 py-4 ">
        <div className="text-3xl w-[50px] h-[40] font-bold text-green-500">
         
          <img src="https://i.ibb.co.com/wW022Kc/Screenshot-2024-12-19-073321.png" 
          alt="" />

        </div>
        <nav className="space-x-4">
          <Link
            href="/about"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/skills"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            Skills
          </Link>
          <Link
            href="#about"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
            Portfolios
          </Link>
          <Link
            href="/contact"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
             Contact
          </Link>
          <Link
            href="/resume"
            className="px-4 py-1 rounded text-white bg-transparent hover:bg-green-500 hover:text-white transition-all duration-300"
          >
             Resume
          </Link>

        </nav>
      </header>
    </div>
        </div>
    );
};

export default Navbar;