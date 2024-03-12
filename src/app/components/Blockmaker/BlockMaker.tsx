import Image from "next/image";
import Text from "./Text";
import TextLogo from "./TextLogo";

const BlockMaker = () => {
  return (
    <main className="flex justify-center my-5">
      <div className=" w-full max-w-lg shadow-2xl bg-base-100 h-auto p-3">
        <div className="card-body">
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

          <button className=" bg-red-500 hover:bg-red-700 btn-block text-xl font-bold text-white shadow-lg">
            Learn More on Testnet
          </button>
        </div>
      </div>
    </main>
  );
};

export default BlockMaker;
