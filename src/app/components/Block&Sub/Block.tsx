"use client";

import { useDispatch, useSelector } from "react-redux";
import { setEnabled, setTranspose } from "@/app/redux/Slices/appSlice";

import { Switch } from "@headlessui/react";

import { ImLoop } from "react-icons/im";

import DropDown from "../DropDown";
import SubBlock1 from "./SubBlock1";
import SubBlock from "./SubBlock";
import InforText from "./InforText";
import Modal from "../Modal";

const Block = () => {
  const enabled = useSelector((state: any) => state.app.enabled);
  const transpose = useSelector((state: any) => state.app.transpose);
  const showModal = useSelector((state: any) => state.app.showModal);
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
        className={`w-[480px] h-[500px] shadow-xl
        ${transpose === true ? "h-[480px]" : ""}
        py-[24px] px-[20px] rounded-xl`}
      >
        <div className="h-full relative">
          <div className="flex justify-between items-center">
            <div className="flex gap-x-3">
              <p className="font-bold text-xl">Token</p>

              <DropDown />
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

          <div className=" h-[100px] bg-[#F5F5F5] rounded-xl mt-2">
            <SubBlock />
          </div>

          <div
            className="flex justify-center absolute top-[35%] left-[50%] cursor-pointer"
            onClick={handleToggleTranspose}
          >
            <button className="w-8 h-8 p-2 rounded-lg bg-red-500 hover:bg-red-700 ">
              <ImLoop size={15} color="white" className="w-full h-full" />
            </button>
          </div>

          <div className="h-[100px] bg-[#F5F5F5] rounded-xl mt-[50px]">
            <SubBlock1 />
          </div>

          <InforText />
        </div>
      </div>
      {showModal ? <Modal /> : ""}
    </main>
  );
};

export default Block;
