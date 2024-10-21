"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Image from "next/image";
import ximg from "../../../public/images/ximg.png";
import gitimg from "../../../public/images/gitimg.png";
import linimg from "../../../public/images/linimg.png";
import Link from "next/link";
import xwimg from "../../../public/images/xwimg.png";
import gitwimg from "../../../public/images/gitwimg.png";
import gmwimg from "../../../public/images/gmwimg.png";
import { useRouter } from "next/navigation";
export const runtime = "edge";

export function NavbarDemo() {
  const router = useRouter();
  const handleClick = () => {
    router.push("../blogs");
  };
  return (
    <div className="w-full  max-w-4xl flex justify-around ">
      <Menubar className=" gap-6 outline-none border-none sm:gap-24 bg-darkest">
        <MenubarMenu>
          <MenubarTrigger
            className="hover:bg-gray-800 cursor-pointer"
            onClick={handleClick}
          >
            <h1 className="text-white">Blogs</h1>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-gray-800 cursor-pointer">
            <h1 className="text-white">About me</h1>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="https://x.com/usecontexthater">
            <Image src={xwimg} className="object-scale-down" alt="ximg" />
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="https://github.com/rutdvaj">
            <Image src={gitwimg} alt="gitimg" />
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=rutdvajrawal@gmail.com">
            <Image src={gmwimg} alt="linimg" />
          </Link>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
