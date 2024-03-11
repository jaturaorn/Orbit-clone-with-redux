"use client";

import { useState } from "react";

import { IoIosArrowDown } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";

const DropDown1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="relative inline-block">
        <button
          type="button"
          className="inline-flex items-center p-2 font-semibold gap-x-2
bg-slate-300/25 rounded-lg hover:bg-slate-500/25 focus:outline-none"
          onClick={toggleDropdown}
        >
          <FaEthereum color="gray" />
          ETH
          <IoIosArrowDown />
        </button>
        {isOpen && (
          <div
            className="absolute left-0 mt-1.5 origin-top-right bg-white 
rounded-lg shadow-lg w-44 ring-1 ring-black ring-opacity-5 z-100"
          >
            <ul
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <li>
                <a
                  className="flex items-center p-2 text-sm 
        text-gray-700 font-semibold hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  <FaEthereum color="gray" className="h-4 w-6" />
                  ETH
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown1;
