"use client";

const Block = () => {
  return (
    <main className="flex justify-center items-center">
      <div
        className={`w-[480px] h-[500px] shadow-xl 
        py-[24px] px-[20px] bg-slate-200/55 rounded-xl`}
        // ${transpose === true ? "h-[480px]" : ""}
      >
        <div className="h-full bg-lime-300">
          <div className="flex items-center gap-x-3">
            <p className="font-bold text-xl">Token</p>
            <div>
              {/* className={enabled ? "hidden" : ""} */}
              <Dropdownself />
              {/* <Dropdown /> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Block;
