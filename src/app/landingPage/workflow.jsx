import React from "react";
import { telegraf } from "../layout";
import { raleway } from "../layout";
import Image from "next/image";
import mimg from "../../../public/images/mimg.png";
import kimg from "../../../public/images/kimg.png";
import pimg from "../../../public/images/pimg.png";
import simg from "../../../public/images/simg.png";
import slackimg from "../../../public/images/slackimg.png";
import ytimg from "../../../public/images/ytimg.png";
export const runtime = "edge";

export default function WorkFlowRender() {
  return (
    <div>
      <h2
        className={`${telegraf.className} font-bold text-white/50 text-2xl text-center mt-16`}
      >
        Workflow
      </h2>
      <h2
        className={`${telegraf.className} font-bold text-white text-4xl text-center mt-3 max-w-[360px] md:max-w-full`}
      >
        How I Get Things Done
      </h2>
      <div className="wf-desc flex flex-col sm:flex-row justify-between items-center mt-10">
        <div className="desc-1 flex flex-col mt-12 max-w-md items-center justify-center">
          <Image src={mimg} alt="mimg" />
          <h2
            className={`${raleway.className} font-normal text-white text-2xl text-center mt-3`}
          >
            Specifications
          </h2>
          <p
            className={`${raleway.className} text-white/50 text-xl text-center max-w-[360px] md:max-w-full`}
          >
            Define the projects requirements, goals, and features in detail..
          </p>
        </div>
        <div className="desc-2 flex flex-col mt-12 max-w-md items-center justify-center">
          <Image src={kimg} alt="kimg" />
          <h2
            className={`${raleway.className} font-normal text-white text-2xl text-center mt-3`}
          >
            Development
          </h2>
          <p
            className={`${raleway.className} text-white/50 text-xl text-center`}
          >
            Progress updates will be shared on Slack, and tasks will be logged
            on YouTrack, ensuring clarity and accountability throughout the
            development cycle.
          </p>
        </div>
        <div className="desc-3 flex flex-col mt-12 max-w-md items-center justify-center">
          <Image src={pimg} alt="kimg" />
          <h2
            className={`${raleway.className} font-normal text-white text-2xl text-center mt-3`}
          >
            Delivery
          </h2>
          <p
            className={`${raleway.className} text-white/50 text-xl text-center max-w-[360px] md:max-w-full`}
          >
            After approvement and testing, code or deployment will be delivered.
          </p>
        </div>
      </div>
      <div className="workflow-2 flex flex-col sm:flex-row justify-center  items-center mt-20 gap-2">
        <div className="wf-1 flex items-center flex-row gap-2">
          <h1 className="text-white/50 font-normal  text-sm text-center">
            Payments done via stripe
          </h1>
          <div>
            <Image src={simg} alt="simg" />
          </div>
        </div>
        <span className=" text-white"> - </span>
        <div className="wf-2 flex items-center flex-row gap-2">
          <h1 className="text-white/50 font-normal  text-sm text-center">
            Communication via slack
          </h1>
          <div>
            <Image src={slackimg} alt="slackimg" />
          </div>
        </div>
        <span className=" text-white"> - </span>
        <div className="wf-3 flex items-center flex-row gap-2">
          <h1 className="text-white/50 font-normal  text-sm text-center">
            Hours & tasks on YouTrack
          </h1>
          <div>
            <Image src={ytimg} alt="ytimg" />
          </div>
        </div>
      </div>
    </div>
  );
}
