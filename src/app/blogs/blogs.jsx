// "use client";
import React from "react";
import { CardWithForm } from "../landingPage/Card2";
import { telegraf } from "../layout";
import { BlogCompLayout } from "./bloglayout";
import ClientBlogWrapper from "./clientWrap";

export default async function BlogsComp() {
  // const [client, setClient] = useState(false);
  // useEffect(() => {
  //   setClient(true);
  // }, []);

  return (
    <div className="min-w-full min-h-screen bg-dark">
      <div
        className={`${telegraf.className} font-bold  text-white text-6xl sm:text-8xl text-center mt-12`}
      >
        My Blogs
      </div>
      <ClientBlogWrapper>
        <BlogCompLayout />
      </ClientBlogWrapper>
    </div>
  );
}
