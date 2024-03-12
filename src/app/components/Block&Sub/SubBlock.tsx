"use client";

import { useDispatch, useSelector } from "react-redux";
import { setChain2, setShowModal } from "@/app/redux/Slices/appSlice";

import { FaEthereum } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SiInterbase } from "react-icons/si";
import { MdOutlineAndroid } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoInfiniteSharp } from "react-icons/io5";
import { DiNodejsSmall } from "react-icons/di";
import { FaFeather } from "react-icons/fa";

import DropDown1 from "@/app/DropDown1";
import { useState } from "react";

const SubBlock = () => {
  const transpose = useSelector((state: any) => state.app.transpose);
  const showModal = useSelector((state: any) => state.app.showModal);
  const enabled = useSelector((state: any) => state.app.enabled);
  const chain1 = useSelector((state: any) => state.app.chain1);
  const dispatch = useDispatch();

  const handleToggleShowModal = () => {
    dispatch(setShowModal(!showModal));
  };

  return (
    <div
      className={`bg-[#F5F5F5] absolute w-[440px]
rounded-xl flex-col p-[20px] cursor-pointer transition-all duration-200
${
  transpose == true
    ? "translate-x-[0%] top-[40%]  translate-y-[0%] "
    : "translate-x-[0%] top-[10%]  translate-y-[0%] "
}
${enabled === true ? "translate-x-[0%] top-[7%]  translate-y-[0%] " : ""}
`}
    >
      <div className="mb-2">
        <p className="text-sm text-slate-500">From</p>
      </div>
      <div className="flex gap-x-3 items-center">
        <div
          className="flex items-center gap-x-2"
          onClick={handleToggleShowModal}
        >
          {chain1 == 0 && (
            <div className="flex gap-x-2">
              <FaEthereum color="gray" size={25} />
              <p className="font-semibold uppercase">Ethereum</p>
            </div>
          )}
          {chain1 == 1 && (
            <div className="flex gap-x-2">
              <SiInterbase size={25} color="blue" />
              <p className="font-semibold uppercase">base</p>
            </div>
          )}
          {chain1 == 2 && (
            <div className="flex">
              <MdOutlineAndroid size={25} />
              <p className="font-semibold uppercase">linea</p>
            </div>
          )}
          {chain1 == 3 && (
            <div className="flex gap-x-2">
              <FaFeather size={25} />
              <p className="font-semibold uppercase">zkSyncEra</p>
            </div>
          )}
          {chain1 == 4 && (
            <div className="flex gap-x-2">
              <FaArrowRightArrowLeft size={25} color="purple" />
              <p className="font-semibold uppercase">Arbitrum</p>
            </div>
          )}
          {chain1 == 5 && (
            <div className="flex gap-x-2">
              <FaArrowRightArrowLeft size={25} />
              <p className="font-semibold uppercase">zkSyneLite</p>
            </div>
          )}
          {chain1 == 6 && (
            <div className="flex gap-x-2">
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygonzkevm</p>
            </div>
          )}
          {chain1 == 7 && (
            <div className="flex gap-x-2">
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygon</p>
            </div>
          )}
          {chain1 == 8 && (
            <div className="flex gap-x-2">
              <DiNodejsSmall size={25} />
              <p className="font-semibold uppercase">loopring</p>
            </div>
          )}
          <MdOutlineKeyboardArrowDown />
        </div>

        <div className="flex items-center gap-x-2">
          <input
            type="text"
            placeholder="at least 0.00005"
            className="w-full bg-transparent text-right border-none outline-none"
          />
          <div className="items-center gap-x-3">
            {enabled ? <DropDown1 /> : <p className="text-blue-600">Max</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubBlock;
