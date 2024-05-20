import * as React from "react";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import nextimg from "../../../public/images/nextimg.png";
import reactimg from "../../../public/images/reactimg.png";
import { raleway } from "../layout";
export function CardWithForm3() {
  return (
    <Card className="w-[350px] bg-dark border-2 sm:border-4 border-darker tracking-tight outline-white/50 sm:ml-2 mt-12 ml-8">
      <CardHeader>
        <CardTitle className="text-white ">
          <h1 className="text-3xl">Outsourcing</h1>
        </CardTitle>
        <CardDescription>
          <p className={`${raleway.className} text-white text-xl`}>
            Im available for outsourcing projects, whether you need a developer
            for a short-term project or a long-term partnership or just to
            develop a feature
          </p>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-end">
        {/* <Button>Deploy</Button> */}
        <Image src={nextimg} className="mr-2" alt="next3img" />
        <Image src={reactimg} alt="react2img" />
      </CardFooter>
    </Card>
  );
}
