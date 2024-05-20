import React from "react";
import HS1 from "./HeroSection";
import { MenubarDemo } from "./Menubar";

export default function Page() {
  return (
    <div>
      <div className="w-full menu flex justify-center items-center rounded-lg shadow-2xl shadow-black bg-mainColor">
        <MenubarDemo />
      </div>
      <div className="hs-1 flex items-center justify-center ">
        <HS1 />
      </div>
    </div>
  );
}
