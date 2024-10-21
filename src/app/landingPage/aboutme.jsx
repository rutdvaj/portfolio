import React from "react";
import { telegraf } from "../layout";
import { raleway } from "../layout";
export const runtime = "edge";

export default function Aboutmeintro() {
  return (
    <div>
      <div className="text-holder">
        <h1 className="text-white/50 text-center text-xl sm:text-3xl mt-10">
          About Me
        </h1>
        <h2
          className={`${telegraf.className} items-center font-bold text-white text-5xl sm:text-6xl text-center max-w-[370px] md:max-w-full`}
        >
          Get to know me
        </h2>
      </div>
      <div className="desc flex justify-center items-center flex-col">
        <div className="description text-center flex items-center mt-10 justify-center max-w-xl ">
          <h1
            className={`${raleway.className}  text-white/50  flex flex-col text-center `}
          >
            <span
              className={`${raleway.className}  text-white/50  text-center text-lg sm:text-2xl max-w-[360px] md:max-w-full`}
            >
              Hi, Im Rutdvaj Rawal, a 22 year old freelance web dev based out of
              Gujrat, India.
            </span>
            <span
              className={`${raleway.className}  text-white  text-center  text-lg sm:text-2xl ml-0 sm:ml-2 max-w-[360px] md:max-w-full`}
            >
              My main focous will be to provide reliable and comprehensive
              solutions to my clients that are deliverable on time.
            </span>
          </h1>
        </div>
      </div>
      <div className="desc-2 flex flex-col items-center justify-center mt-10">
        <h1
          className={`${telegraf.className}  text-white font-semibold flex flex-col text-center text-4xl sm:text-5xl max-w-xl`}
        >
          Technical
        </h1>
        <h1
          className={`${raleway.className}  text-white/50  flex flex-col text-center mt-5`}
        >
          <span
            className={`${raleway.className}  text-white/50  text-center text-xl sm:text-2xl max-w-[360px] md:max-w-full`}
          >
            My development roots are in
          </span>
          <span
            className={`${raleway.className}  text-white  text-center text-2xl ml-2 max-w-[360px] md:max-w-full`}
          >
            React, NextJS, appwrite.
          </span>
          <span
            className={`${raleway.className}  text-white/50  text-center text-xl sm:text-2xl  max-w-[360px] md:max-w-full`}
          >
            Web apps that are reliable and websites that are responsive are my
            primary goals. Handling complex projects and workflows in an
            effortless way and hyperfoucsing on actual deliverables, so that you
            can do what you are best at.
          </span>
        </h1>
      </div>
      <div className="desc-2 flex flex-col items-center justify-center mt-10">
        <h1
          className={`${telegraf.className}  text-white font-semibold flex flex-col text-center text-4xl sm:text-5xl max-w-xl`}
        >
          Personal
        </h1>
        <h1
          className={`${raleway.className}  text-white/50  flex flex-col text-center mt-5`}
        >
          <span
            className={`${raleway.className}  text-white/50  text-center text-xl sm:text-2xl  max-w-[360px] md:max-w-full`}
          >
            I am constantly working on improving my skills in web dev and
            execute projects to gain experience. I am passionate about tech in
            general, from embedded systems to web dev to IoT.
          </span>
          <span
            className={`${raleway.className}  text-white  text-center text-2xl ml-2 max-w-[360px] md:max-w-full`}
          >
            One of my first principles is that I never overpromise to my
            clients, I know what I can do, and I try to do it better than
            others.
          </span>
        </h1>
      </div>
    </div>
  );
}
