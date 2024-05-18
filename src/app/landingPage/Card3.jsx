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
export function CardWithForm2() {
  return (
    <Card className="w-[350px] bg-dark border-2 sm:border-4 border-darker tracking-tight outline-white/50 sm:ml-2 mt-12 ml-8">
      <CardHeader>
        <CardTitle className="text-white text-3xl">
          <h1 className="text-3xl">React Web Apps</h1>
        </CardTitle>
        <CardDescription>
          <p className={`${raleway.className} text-white text-xl`}>
            Whether you're a Startup or a solopreneur I have got the perfect
            tools for scalable web apps that can suffice your expectations.
          </p>
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-start">
        {/* <Button>Deploy</Button> */}
        <Image src={nextimg} className="mr-2" />
        <Image src={reactimg} />
      </CardFooter>
    </Card>
  );
}
