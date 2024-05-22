import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card } from "@/components/ui/card";
import ASR from "./AspectRatio";
import { MenubarDemo } from "./Menubar";
import MainCard from "./Card";
import MenucompDemo from "./Menucomp";
import { telegraf } from "../layout";
import { ButtonOutline } from "./MeetingButton";
import HS2 from "./HeroSection2";
import SkillsCOMP from "./Skills";
import Aboutmeintro from "./aboutme";
import DisplayProjects from "./projects";
import ProjectRender from "./projectRender";
import WorkFlowRender from "./workflow";
import PricesRender from "./preicesrender";
import Footer1 from "./footer1";
import Footer2 from "./footer2";
export const runtime = "edge";

export default function HS1() {
  return (
    <div className="mx-auto w-full max-w-[90rem] rounded-t-3xl bg-dark mt-10 px-4 ">
      <MenucompDemo />
      <div className="text-block flex justify-center items-center mt-10">
        <div className="hs-text  p-8">
          <h2
            className={`${telegraf.className} font-bold  text-white text-6xl sm:text-8xl text-center`}
          >
            Web Developer That<br></br> Gets Work Done.
          </h2>
        </div>
      </div>
      <div className="p-text-block flex justify-center items-center mt-10">
        <div className="p-hs-text">
          <h1 className=" text-xl sm:text-2xl text-center">
            <span className="text-white/50 mr-1 font-normal p-1">
              Seamlessly transitioning from crafting
            </span>
            <span className="text-white font-meduim p-1">
              websites that fuel your growth
            </span>
            <br />
            <span className="text-white/50 mr-1 font-normal p-1">
              to developing
            </span>
            <span className="text-white font-meduim p-1">
              apps that help you achieve your goals.
            </span>
          </h1>
        </div>
      </div>
      <div className="meeting-btn flex justify-center items-center flex-row">
        <ButtonOutline />
      </div>
      <div className="hs2 ">
        <HS2 />
      </div>
      <div className="skills">
        <SkillsCOMP />
      </div>
      <div className="about-me">
        <Aboutmeintro />
      </div>
      <div className="projects">
        <ProjectRender />
      </div>
      <div className="workflow">
        <WorkFlowRender />
      </div>
      <div>
        <PricesRender />
      </div>
      <div>
        <Footer1 />
      </div>
      <div>
        <Footer2 />
      </div>
    </div>
  );
}
