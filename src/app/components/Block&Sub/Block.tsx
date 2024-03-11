"use client";

import { Switch } from "@headlessui/react";

import { ImLoop } from "react-icons/im";

import DropDown from "../DropDown";
import SubBlock1 from "./SubBlock1";
import SubBlock from "./SubBlock";
import InforText from "./InforText";

const Block = () => {
  return (
    <main className="flex justify-center items-center">
      {"Block"}
      {/* <div
        className={`w-[480px] h-[500px] shadow-xl 
        py-[24px] px-[20px] bg-slate-200/55 rounded-xl`}
        // ${transpose === true ? "h-[480px]" : ""}
      >
        <div className="h-full bg-lime-300">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-3">
              <p className="font-bold text-xl">Token</p> */}
      {/* className={enabled ? "hidden" : ""} */}
      {/* <DropDown />
            </div> */}

      {/* <div className="flex items-center gap-3">
              <p className={`font-bold text-xl`}>
                <a className="text-slate-500">V1</a> */}
      {/* {enabled ? (
                  <a className="text-blue-500">V2</a>
                ) : (
                  <a className="text-slate-500">V1</a>
                )} */}
      {/* </p>
              <Switch
                checked={enabled}
                onChange={setEnabled}
                className={`${
                  enabled ? "bg-blue-600" : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span
                  className={`${
                    enabled ? "translate-x-6" : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
            </div>
          </div> */}

      {/* <div>
            <SubBlock />
          </div>

          <div
            className="flex justify-center absolute top-[33%] left-[50%] cursor-pointer"
            onClick={() => setTranspose(!transpose)}
          >
            <button className="w-8 h-8 p-2 rounded-lg bg-red-500 hover:bg-red-700">
              <ImLoop size={15} color="white" className="w-full h-full" />
            </button>
          </div>

          <div>
            <SubBlock1 />
          </div>

          <div className={`mt-[225px] h-[300px] `}>
            <button
              className="btn bg-red-500 hover:bg-red-700 
              w-[525px] text-xl font-bold text-white shadow-lg"
            >
              SEND
            </button>
          </div>

          <InforText />
        </div>
      </div> */}
    </main>
  );
};

export default Block;
