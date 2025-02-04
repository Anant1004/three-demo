'use client'
import { useState } from "react";
// import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#E49B0F] to-[#E1C16E] shadow-lg p-4 h-20 flex ">
      <div className="mx-auto flex justify-between w-[100%] items-center px-16">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white tracking-wider">
          <span className="text-yellow-300">M</span>antu
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-semibold">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <li
              key={item}
              className="relative group cursor-pointer transition duration-300"
            >
              <span className="px-4 py-2 rounded-md hover:text-purple-600 transition duration-300">
                {item}
              </span>
              {/* Funky Line Effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* {isOpen ? <X size={30} /> : <Menu size={30} />} */}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center bg-purple-700 transition-all ${
          isOpen ? "h-auto py-4" : "h-0 overflow-hidden"
        }`}
      >
        {["Home", "Projects", "About", "Contact"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-white text-lg py-2 w-full text-center hover:bg-purple-900"
            onClick={() => setIsOpen(false)}
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
