"use client";

import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Tabs from "./components/Tabs";
import Block from "./components/Block&Sub/Block";
import BlockMaker from "./components/Blockmaker/BlockMaker";
import Footer from "./components/Footer";

export default function Home() {
  const pick = useSelector((state: any) => state.app.value);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Tabs />
      {pick == 0 ? <Block /> : <BlockMaker />}
      <Footer />
    </main>
  );
}
