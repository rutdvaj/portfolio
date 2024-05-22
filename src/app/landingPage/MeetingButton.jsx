import { Button } from "@/components/ui/button";
import meetimg from "../../../public/images/meetimg.png";
import Image from "next/image";
import Link from "next/link";
export const runtime = "edge";

export function ButtonOutline() {
  return (
    <Link href="https://calendly.com/rutdvajrawal">
      <Button
        variant="ghost"
        className=" bg-dark outline-white/50 hover:bg-darker border-darker border-4 tracking-tight mt-10 rounded-xl "
      >
        <Image src={meetimg} alt="meetimg" />
        <h1 className="text-white font-normal text-2xl ml-2">Book a Meeting</h1>
      </Button>
    </Link>
  );
}
