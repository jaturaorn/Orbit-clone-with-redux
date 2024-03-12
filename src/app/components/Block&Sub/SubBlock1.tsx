"use client";

import { useDispatch, useSelector } from "react-redux";
import { setShowModal2 } from "@/app/redux/Slices/appSlice";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { SiInterbase } from "react-icons/si";
import { BsQuestionLg } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";
import { MdOutlineAndroid } from "react-icons/md";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { IoInfiniteSharp } from "react-icons/io5";
import { DiNodejsSmall } from "react-icons/di";
import { FaFeather } from "react-icons/fa";

import DropDown1 from "@/app/DropDown1";

const SubBlock1 = () => {
  const transpose = useSelector((state: any) => state.app.transpose);
  const showModal2 = useSelector((state: any) => state.app.showModal2);
  const enabled = useSelector((state: any) => state.app.enabled);
  const chain2 = useSelector((state: any) => state.app.chain2);
  const dispatch = useDispatch();

  const handleToggleShowModal2 = () => {
    dispatch(setShowModal2(!showModal2));
  };

  return (
    <div
      className={`bg-[#F5F5F5] absolute w-[440px]
 rounded-xl flex-col p-[20px] cursor-pointer transition-all duration-200
${
  transpose == true
    ? "translate-x-[0%] top-[10%]  translate-y-[0%] "
    : "translate-x-[0%] top-[40%]  translate-y-[0%] "
}
`}
    >
      {/* <div className="bg-red-300 w-64 h-64 ">{transpose + "test"}</div> */}
      <p>To</p>
      <div className="flex gap-x-5 items-center">
        <div
          className="flex items-center gap-x-2"
          onClick={handleToggleShowModal2}
        >
          {chain2 == 0 && (
            <div className="flex gap-x-2">
              <FaEthereum color="gray" size={25} />
              <p className="font-semibold uppercase">Ethereum</p>
            </div>
          )}
          {chain2 == 1 && (
            <div className="flex gap-x-2">
              <SiInterbase size={25} color="blue" />
              <p className="font-semibold uppercase">base</p>
            </div>
          )}
          {chain2 == 2 && (
            <div className="flex">
              <MdOutlineAndroid size={25} />
              <p className="font-semibold uppercase">linea</p>
            </div>
          )}
          {chain2 == 3 && (
            <div className="flex gap-x-2">
              <FaFeather size={25} />
              <p className="font-semibold uppercase">zkSyncEra</p>
            </div>
          )}
          {chain2 == 4 && (
            <div className="flex gap-x-2">
              <FaArrowRightArrowLeft size={25} color="purple" />
              <p className="font-semibold uppercase">Arbitrum</p>
            </div>
          )}
          {chain2 == 5 && (
            <div className="flex gap-x-2">
              <FaArrowRightArrowLeft size={25} />
              <p className="font-semibold uppercase">zkSyneLite</p>
            </div>
          )}
          {chain2 == 6 && (
            <div className="flex gap-x-2">
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygonzkevm</p>
            </div>
          )}
          {chain2 == 7 && (
            <div className="flex gap-x-2">
              <IoInfiniteSharp
                size={25}
                style={{ transform: "rotate(-45deg)" }}
              />
              <p className="font-semibold uppercase">polygon</p>
            </div>
          )}
          {chain2 == 8 && (
            <div className="flex gap-x-2">
              <DiNodejsSmall size={25} />
              <p className="font-semibold uppercase">loopring</p>
            </div>
          )}
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="0"
            className="w-full bg-transparent text-right border-none outline-none"
          />
        </div>
        <div className="flex items-center gap-x-3">
          {enabled ? (
            <div className="bg-white rounded-xl">
              <DropDown1 />
            </div>
          ) : (
            <button className="bg-slate-400 rounded-full p-1 text-white">
              <BsQuestionLg color="white" size={12} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubBlock1;
