"use client";

import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "@/app/redux/Slices/appSlice";

import { IoIosArrowDown } from "react-icons/io";
import { FaEthereum } from "react-icons/fa";

const DropDown = () => {
  const isOpen = useSelector((state: any) => state.app.isOpen);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    dispatch(setIsOpen(!isOpen));
  };

  const closeDropdown = () => {
    dispatch(setIsOpen(isOpen));
  };
  return (
    <div>
      <div className="relative inline-block">
        <button
          type="button"
          className="inline-flex items-center p-1 font-semibold gap-x-2
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
    rounded-lg shadow-lg w-44 ring-1 ring-black ring-opacity-5 z-20"
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
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={closeDropdown}
                >
                  Option 2
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropDown;
