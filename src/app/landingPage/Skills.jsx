import React from "react";
import {
  BadgeSecondary,
  BadgeSecondary2,
  BadgeSecondary3,
  BadgeSecondary4,
  BadgeSecondary5,
  BadgeSecondary6,
  BadgeSecondary7,
} from "./Badge";
import { telegraf } from "../layout";

export default function SkillsComp() {
  return (
    <div>
      {/* <h1 className="text-white text-2xl text-center mt-10">Skills</h1> */}
      <h1
        className={`${telegraf.className} text-white text-6xl text-center mt-10 font-bold`}
      >
        Skills
      </h1>
      <div className="skills-view items-center justify-center flex w-full">
        <BadgeSecondary />
        <BadgeSecondary2 />
        <BadgeSecondary3 />
      </div>
      <div className="skillsview-2 items-center justify-center flex w-full">
        <BadgeSecondary4 />
        <BadgeSecondary5 />
        {/* <BadgeSecondary6 /> */}
        <BadgeSecondary7 />
      </div>
    </div>
  );
}
