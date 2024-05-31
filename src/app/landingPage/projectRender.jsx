"use client";
import React from "react";
import { useState, useEffect } from "react";
import { telegraf } from "../layout";
import DisplayProjects, {
  DisplayProjects2,
  DisplayProjects3,
  DisplayProjects4,
} from "./projects";
export const runtime = "edge";

export default function ProjectRender() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div>
      <h2
        className={`${telegraf.className} font-bold text-white/50 text-2xl text-center mt-16`}
      >
        Works
      </h2>
      <h2
        className={`${telegraf.className} font-bold text-white text-4xl text-center mt-3`}
      >
        Featured Projects
      </h2>
      <div className="p-tile-1 sm:flex-row flex flex-col justify-around  items-center">
        {isClient && <DisplayProjects />}
        {isClient && <DisplayProjects2 />}
      </div>
      <div className="p-tile-1 sm:flex-row flex flex-col justify-around  items-center">
        {isClient && <DisplayProjects3 />}
        {isClient && <DisplayProjects4 />}
      </div>
    </div>
  );
}
