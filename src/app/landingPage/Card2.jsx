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
import timg from "../../../public/images/timg.png";
import { raleway } from "../layout";
import { telegraf } from "../layout";

export function CardWithForm() {
  return (
    <Card className="w-[350px] bg-dark border-2 sm:border-4 border-darker tracking-tight outline-white/50 sm:ml-2 mt-12 ml-8">
      <CardHeader>
        <CardTitle className="text-white">
          <h1 className="text-3xl">Custom Coded Websites</h1>
        </CardTitle>
        <CardDescription>
          <p className={`${raleway.className} text-white text-xl `}>
            I create lightning fast, custom coded websites in Next.js using
            tailwind with any features you want.
          </p>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-end">
        {/* <Button>Deploy</Button> */}
        <Image src={nextimg} className="mr-2" />
        <Image src={timg} />
      </CardFooter>
    </Card>
  );
}
