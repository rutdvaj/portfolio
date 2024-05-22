import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import jsimg from "../../../src/../public/images/jsimg.png";
import Link from "next/link";
import nextimg from "../../../public/images/nextimg.png";
import reactimg from "../../../public/images/rimg.png";
import awimg from "../../../public/images/awimg.png";
import njsimg from "../../../public/images/njsimg.png";
import fimg from "../../../public/images/fimg.png";
import gitimg from "../../../public/images/githubimg.png";
export const runtime = "edge";

export function BadgeSecondary() {
  return (
    <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
      <Badge
        variant="secondary"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-2 sm:border-4 tracking-tight mt-10 rounded-xl cursor-pointer ml-0 sm:ml-2"
      >
        <Image src={jsimg} alt="jsimg" />
        <h1 className="text-white ml-2">JavaScript</h1>
      </Badge>
    </Link>
  );
}
export function BadgeSecondary2() {
  return (
    <Link href="https://nextjs.org">
      <Badge
        variant="secondary"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-2 sm:border-4 tracking-tight mt-10 rounded-xl cursor-pointer ml-2"
      >
        <Image src={nextimg} alt="nextimg" />
        <h1 className="text-white ml-2">NextJS</h1>
      </Badge>
    </Link>
  );
}

export function BadgeSecondary3() {
  return (
    <Link href="https://legacy.reactjs.org/docs/getting-started.html">
      <Badge
        variant="secondary"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-2 sm:border-4 tracking-tight mt-10 rounded-xl cursor-pointer ml-2"
      >
        <Image src={reactimg} alt="rimg" />
        <h1 className="text-white ml-2">ReactJS</h1>
      </Badge>
    </Link>
  );
}

export function BadgeSecondary4() {
  return (
    <Link href="https://appwrite.io/docs">
      <Badge
        variant="secondary"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-2 sm:border-4 tracking-tight mt-10 rounded-xl cursor-pointer ml-2"
      >
        <Image src={awimg} alt="awimg" />
        <h1 className="text-white ml-2">Appwrite</h1>
      </Badge>
    </Link>
  );
}

export function BadgeSecondary5() {
  return (
    <Link href="https://nodejs.org/en">
      <Badge
        variant="secondary"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-2 sm:border-4 tracking-tight mt-10 rounded-xl cursor-pointer ml-2"
      >
        <Image src={njsimg} alt="njsimg" />
        <h1 className="text-white ml-2">NodeJS</h1>
      </Badge>
    </Link>
  );
}

export function BadgeSecondary6() {
  return (
    <Link href="https://help.figma.com/hc/en-us">
      <Badge
        variant="secondary"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-2 sm:border-4 tracking-tight mt-10 rounded-xl cursor-pointer ml-2"
      >
        <Image src={fimg} alt="fimg" />
        <h1 className="text-white ml-2">Figma</h1>
      </Badge>
    </Link>
  );
}
export function BadgeSecondary7() {
  return (
    <Link href="https://git-scm.com/doc">
      <Badge
        variant="secondary"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-2 sm:border-4 tracking-tight mt-10 rounded-xl cursor-pointer ml-2"
      >
        <Image src={gitimg} alt="gitimg" />
        <h1 className="text-white ml-2">Git</h1>
      </Badge>
    </Link>
  );
}
export function BadgeSecondary8({ children }) {
  return (
    <Link href="">
      <Badge
        variant="secondary"
        className=" bg-dark hover:bg-darker border-[#39513e] bg-[#2d5134]/20 border-2 sm:border-4 tracking-tight  rounded-xl cursor-pointer ml-0 sm:ml-2"
      >
        <h1 className="text-[#a2cead] ">{children}</h1>
      </Badge>
    </Link>
  );
}

export function BadgeSecondary9({ href, children }) {
  return (
    <Link href={href}>
      <Badge
        variant="secondary"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-2 sm:border-4 tracking-tight  rounded-xl cursor-pointer "
      >
        <h1 className="text-white ">{children}</h1>
      </Badge>
    </Link>
  );
}
