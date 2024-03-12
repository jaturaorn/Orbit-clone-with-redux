import { useSelector } from "react-redux";

import { FaRedditAlien } from "react-icons/fa";
import { TbMinusVertical } from "react-icons/tb";
import { BsQuestionLg } from "react-icons/bs";
import { IoTime } from "react-icons/io5";

const InforText = () => {
  const transpose = useSelector((state: any) => state.app.transpose);
  const enabled = useSelector((state: any) => state.app.enabled);
  return (
    <div
      className={`flex flex-col 
    ${enabled === true ? "h-[400px] mt-[260px]" : "h-[400px] mt-[255px]"}
    mt-[245px] gap-y-5`}
    >
      <div className={`flex justify-center`}>
        <button
          className="bg-red-500 hover:bg-red-700 h-[50px]
              w-[440px] text-xl font-bold text-white shadow-lg
              rounded-full border-b-[5px] border-r-[3px] border-red-700/55"
        >
          SEND
        </button>
      </div>
      <div
        className={`flex gap-3 items-center
    ${transpose === true ? "hidden" : ""} `}
      >
        <FaRedditAlien />
        <div className="flex items-center gap-3">
          <p className="text-slate-300 text-sm">Gas Fee Saved</p>
          <TbMinusVertical />
          <p className="text-red-500 text-sm">Save $22.16 ~ $22.46</p>
          <button className="bg-slate-400 rounded-full p-1 text-white">
            <BsQuestionLg color="white" size={12} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <IoTime />
          <p className="text-slate-300 text-sm">Time Spend 45s</p>
          <TbMinusVertical />
          <p className="text-red-500 text-sm">Save 5 min</p>
          <button className="bg-slate-400 rounded-full p-1 text-white">
            <BsQuestionLg color="white" size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InforText;
