import Image from "next/image";
import Page from "./landingPage/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  bg-mainColor">
     <Page />
    </main>
  );
}
