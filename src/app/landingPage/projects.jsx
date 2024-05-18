"use client";
import React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { raleway } from "../layout";
import { BadgeSecondary8, BadgeSecondary9 } from "./Badge";

export default function DisplayProjects() {
  return (
    <div>
      <Card className="w-[320px] sm:w-[544px] bg-dark border-2 sm:border-4 border-darker tracking-tight outline-white/50 ml-2 mt-12">
        <CardHeader>
          <CardTitle className="text-white">
            <h1 className="text-2xl sm:text-3xl">Mapty web app</h1>
          </CardTitle>
          <CardDescription>
            <p
              className={`${raleway.className} text-white text-lg sm:text-xl `}
            >
              A browser based fitness tracking web app that tracks important
              parameters like cadence and the distance covered. This web app is
              light weight and can run on any machine. It takes all the
              information from the client side and makes the necessary
              calculations.
            </p>
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex sm:justify-around justify-evenly">
          {/* <Button>Deploy</Button> */}
          <BadgeSecondary8>Javascript</BadgeSecondary8>
          <BadgeSecondary8>HTML</BadgeSecondary8>
          <BadgeSecondary8>CSS</BadgeSecondary8>
          <BadgeSecondary9 href="https://mapty-id.netlify.app">
            Mapty
          </BadgeSecondary9>
        </CardFooter>
      </Card>
    </div>
  );
}
export function DisplayProjects2() {
  return (
    <div>
      <Card className="w-[340px] sm:w-[544px] bg-dark border-2 sm:border-4 border-darker tracking-tight outline-white/50 ml-2 mt-12">
        <CardHeader>
          <CardTitle className="text-white">
            <h1 className="text-2xl sm:text-3xl">Axia Assoc.</h1>
          </CardTitle>
          <CardDescription>
            <p
              className={`${raleway.className} text-white text-lg sm:text-xl `}
            >
              This is a landing page created with the help of Javascript HTML
              and a UI library called bootstrap. A responsive landing page that
              accurately convyes the important points of the client along with
              multiple call to action buttons.
            </p>
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex sm:justify-around justify-evenly">
          {/* <Button>Deploy</Button> */}
          <BadgeSecondary8>Javascript</BadgeSecondary8>
          <BadgeSecondary8>HTML</BadgeSecondary8>
          <BadgeSecondary8>CSS</BadgeSecondary8>
          <BadgeSecondary9 href="https://axia.netlify.app">
            Axia Assoc.
          </BadgeSecondary9>
        </CardFooter>
      </Card>
    </div>
  );
}
