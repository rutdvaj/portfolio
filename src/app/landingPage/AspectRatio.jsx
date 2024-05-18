import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import MainCard from "./Card";
import { MenubarDemo } from "./Menubar";
export default function ASR() {
  return (
    <AspectRatio
      ratio={4 / 3}
      className="bg-white flex justify-center items-center flex-column"
    >
      <div className="w-2/4 h-80 bg-green">
        <h1 className="text-black">Hello</h1>
      </div>
      {/* <MenubarDemo /> */}
      <MainCard />
    </AspectRatio>
  );
}
