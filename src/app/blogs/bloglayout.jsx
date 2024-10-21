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
import bimg2 from "../../../public/images/BIMG2.svg";
export const runtime = "edge";
import { configeFile } from "../config";

const fetchDetails = async () => {
  const reqOpt = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };
  const request = await fetch(
    `${configeFile.api}/api/blogs?populate=*`,
    reqOpt
  );
  const response = await request.json();
  return response;
};

export async function BlogCompLayout() {
  const normalBlog = await fetchDetails();
  const [blogItem] = normalBlog.data;
  const title = normalBlog.data[0].attributes.Title;
  const summary = normalBlog.data[0].attributes.Summary;
  console.log(summary);
  return (
    <Card className="w-[350px] bg-dark border-2 sm:border-4 border-darker tracking-tight outline-white/50 sm:ml-2 mt-12 ml-8">
      <CardHeader>
        <CardTitle className="text-white">
          <h1 className="text-3xl">{title}</h1>
        </CardTitle>
        <div className="divider">
          <div className="img">
            <Image src={bimg2} />
          </div>
          <div className="desc">
            <div className="subtitle">
              <div className="summary">
                <CardDescription>
                  <p className={`${raleway.className} text-white text-xl `}>
                    {summary}
                  </p>
                </CardDescription>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardFooter className="flex justify-end">
        {/* <Button>Deploy</Button> */}
        {/* <Image src={nextimg} className="mr-2" alt="nextimg" />
        <Image src={timg} alt="timg" /> */}
      </CardFooter>
    </Card>
  );
}
