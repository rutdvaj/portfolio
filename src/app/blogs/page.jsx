import React from "react";
import { NavbarDemo } from "./navbar";
export const runtime = "edge";
import BlogsComp from "./blogs";
import { configeFile } from "../config";

export default async function Page() {
  return (
    <div className="body ">
      <div className="flex justify-center items-center rounded-lg">
        <div className="navbar menu w-full max-w-4xl   mx-auto  shadow-2xl shadow-black bg-darkest">
          <NavbarDemo />
        </div>
      </div>
      <div className="blog">
        <BlogsComp />
      </div>
    </div>
  );
}
