import Image from "next/image";
import Page from "./landingPage/page";
export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-between  bg-mainColor">
     <Page />
    </main>
  );
}
