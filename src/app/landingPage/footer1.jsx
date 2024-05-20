import React from "react";
import { telegraf } from "../layout";
import { ButtonOutline } from "./MeetingButton";
import { raleway } from "../layout";

export default function Footer1() {
  return (
    <div>
      <div className="flex items-center justify-center flex-col">
        <h1
          className={`${telegraf.className} font-bold text-white text-3xl text-center mt-20`}
        >
          Interested in Working Together ?
        </h1>
        <div className="mt-5">
          <ButtonOutline />
        </div>
        <p
          className={`${raleway.className} text-white/50 text-lg text center mt-5`}
        >
          Lets build together!
        </p>
      </div>
    </div>
  );
}
