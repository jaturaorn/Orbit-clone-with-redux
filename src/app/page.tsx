"use client";

import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Block from "./components/Block&Sub/Block";
import BlockMaker from "./components/Blockmaker/BlockMaker";
import Footer from "./components/Footer";

export default function Home() {
  const pick = useSelector((state: any) => state.pick);
  // const dispatch = useDispatch();

  // const handlePickChange = (pick: any) => {
  //   dispatch(setPick(pick));
  // };
  return (
    <main className="min-h-screen bg-[#f3f5f7]">
      <Navbar />
      <Tabs />
      {pick == 1 ? <Block /> : <BlockMaker />}
      <Footer />
    </main>
  );
}
