"use client";

import { useDispatch, useSelector } from "react-redux";
import { setTranspose, setEnabled } from "@/app/redux/Slices/appSlice";

import { useState } from "react";

import { Switch } from "@headlessui/react";

import { ImLoop } from "react-icons/im";

import DropDown from "../DropDown";
import SubBlock1 from "./SubBlock1";
import SubBlock from "./SubBlock";
import InforText from "./InforText";
import Modal from "../Modal";
import Modal2 from "../Modal2";

const Block = () => {
  const transpose = useSelector((state: any) => state.app.transpose);
  const showModal = useSelector((state: any) => state.app.showModal);
  const showModal2 = useSelector((state: any) => state.app.showModal2);
  const enabled = useSelector((state: any) => state.app.enabled);

  const dispatch = useDispatch();

  const handleToggleEnabled = () => {
    dispatch(setEnabled(!enabled));
  };

  const handleToggleTranspose = () => {
    dispatch(setTranspose(!transpose));
  };

  return (
    <main className="flex justify-center items-center">
      <div
        className={`w-[480px] shadow-xl
        ${transpose == true ? "h-[470px]" : "h-[500px]"}
        py-[24px] px-[20px] rounded-xl`}
      >
        <div className="h-full relative">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-3">
              <p className="font-bold text-xl">Token</p>
              <div className={enabled ? "hidden" : ""}>
                <DropDown />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <p className={`font-bold text-xl`}>
                {enabled ? (
                  <a className="text-blue-500">V2</a>
                ) : (
                  <a className="text-slate-500">V1</a>
                )}
              </p>
              <Switch
                checked={enabled}
                onChange={handleToggleEnabled}
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
          </div>

          <div>
            <SubBlock />
          </div>

          <div
            className={`flex justify-center absolute
            ${enabled === true ? "top-[31%]" : "top-[32%]"}
            top-[32%] left-[50%] cursor-pointer z-10`}
            onClick={handleToggleTranspose}
          >
            <button className="w-8 h-8 p-2 rounded-lg bg-red-500 hover:bg-red-700 ">
              <ImLoop size={15} color="white" className="w-full h-full" />
            </button>
          </div>

          <div>
            <SubBlock1 />
          </div>

          <InforText />
        </div>
      </div>
      {showModal && <Modal />}
      {showModal2 && <Modal2 />}
    </main>
  );
};

export default Block;
