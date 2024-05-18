import React from "react";
import { telegraf } from "../layout";

export default function MenucompDemo() {
  return (
    <div className="">
      <div className="bg-dark w-{50px} sm:w-{100px} h-full">
        <div className="text  flex  w-{30px} sm:w-{50px} h-20  rounded-md justify-center pt-6 ">
          <div className="text-breaker flex flex-row gap-3 sm:gap-6 border-2 sm:border-4 border-darker text-base rounded-lg tracking-tight text-white items-center">
            <p className={`${telegraf.className} font-bold ml-2`}>
              Coded Websites
            </p>
            ◦<p className={`${telegraf.className} font-bold`}>Out Sourcing</p>◦
            <p className={`${telegraf.className} font-bold mr-2`}>Web Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
}
