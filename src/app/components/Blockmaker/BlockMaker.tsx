import Image from "next/image";
import Text from "./Text";
import TextLogo from "./TextLogo";

const BlockMaker = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="w-[480px] h-[390px] shadow-xl py-[24px] px-[20px] rounded-xl">
        <div className="flex justify-between items-center">
          <p className="font-bold text-xl">Early Access</p>
          <Image
            src={"/New.png"}
            width={200}
            height={200}
            alt="New"
            className="w-20 h-[70px]"
          />
        </div>

        <Text />

        <TextLogo />

        <button
          className="bg-red-500 hover:bg-red-700 h-[50px]
              w-[440px] text-xl font-bold text-white shadow-lg
              rounded-full border-b-[5px] border-r-[3.5px] border-red-700/55
              mb-[20px] cursor-pointer"
        >
          Learn More on Testnet
        </button>
      </div>
    </main>
  );
};

export default BlockMaker;
