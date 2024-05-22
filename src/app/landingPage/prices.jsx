import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { raleway } from "../layout";
export const runtime = "edge";

export default function Prices() {
  return (
    <Card className="w-[350px] bg-dark border-2 sm:border-4 border-darker tracking-tight outline-white/50 ml-2 mt-12">
      <CardHeader>
        <CardTitle className="text-white">
          <h1 className="text-3xl">Custom Coded Websites</h1>
        </CardTitle>
        <CardDescription>
          <p className={`${raleway.className} text-white/50 text-lg `}>
            Website written in Next.js using TailwindCSS with any features you
            need.
          </p>
          <p className={`${raleway.className} text-white text-2xl mt-2`}>
            starts at 500$
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
export function Prices2() {
  return (
    <Card className="w-[350px] bg-dark border-4 border-darker tracking-tight outline-white/50 ml-2 mt-12">
      <CardHeader>
        <CardTitle className="text-white">
          <h1 className="text-3xl">Custom Web Application</h1>
        </CardTitle>
        <CardDescription>
          <p className={`${raleway.className} text-white/50 text-lg `}>
            Scalable Web application written in React and Next.js with end to
            end testing.
          </p>
          <p className={`${raleway.className} text-white text-2xl mt-2`}>
            starts at 800$
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
export function Prices3() {
  return (
    <Card className="w-[350px] bg-dark border-4 border-darker tracking-tight outline-white/50 ml-2 mt-12">
      <CardHeader>
        <CardTitle className="text-white">
          <h1 className="text-3xl">Outsourcing</h1>
        </CardTitle>
        <CardDescription>
          <p className={`${raleway.className} text-white/50 text-lg `}>
            Outsource a particular set of features or hire me as your helper for
            your solo project.
          </p>
          <p className={`${raleway.className} text-white text-2xl mt-2`}>
            starts at 30$/hr
          </p>
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
