import { Card } from "@/components/ui/card";

import React from "react";
export const runtime = "edge";

export default function MainCard() {
  return (
    <div className="w-3/4 h-full  bg-dark mt-28 rounded-3xl">
      <Card className="bg-dark  text-white h-full border-none outline-none">
        <h1 className=" inline-block text-2xl font-bold">hello</h1>
      </Card>
    </div>
  );
}
