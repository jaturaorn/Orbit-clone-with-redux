"use client";

import { useDispatch, useSelector } from "react-redux";
import { changePick } from "../redux/Slices/appSlice";

const Tabs = () => {
  const pick = useSelector((state: any) => state.pick.value);
  const dispatch = useDispatch();

  const handlePickChange = (newPick: number) => {
    dispatch(changePick(newPick));
  };
  return (
    <main className="flex justify-center my-5">
      <div
        className="relative w-56 h-10 flex justify-between bg-white shadow-xl 
      border border-slate-200 rounded-xl cursor-pointer"
      >
        <a
          className={` w-full h-full flex justify-center items-center
      ${pick == 0 ? "text-white" : "text-black"}
       font-bold text-lg z-10`}
          onClick={() => {
            handlePickChange(0);
          }}
        >
          Sender
        </a>
        <div
          className={`absolute w-28 h-10 transition-all duration-200
            ${pick == 0 && "translate-x-0"} 
            ${pick == 1 && "translate-x-[100%]"} 
          bg-red-500 rounded-xl border-b-[5px] border-r-[2px] border-red-700/55`}
        ></div>
        <a
          className={`relative w-full flex justify-center items-center
          ${pick == 1 ? "text-white" : "text-black"} 
          h-full font-semibold text-lg z-10`}
          onClick={() => {
            handlePickChange(1);
          }}
        >
          Maker
        </a>
      </div>
    </main>
  );
};

export default Tabs;
