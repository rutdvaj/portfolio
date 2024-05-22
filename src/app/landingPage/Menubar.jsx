import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import ximg from "../../../public/images/ximg.png";
import gitimg from "../../../public/images/gitimg.png";
import linimg from "../../../public/images/linimg.png";
import Link from "next/link";
export const runtime = "edge";

export function MenubarDemo() {
  return (
    <div className="w-full max-w-4xl flex justify-around bg-mainColor">
      <Menubar className=" gap-6 outline-none border-none sm:gap-24">
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-gray-200">
            <h1>Blogs</h1>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-gray-200">
            <h1>About me</h1>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="https://twitter.com/rutdvajrawal">
            <Image src={ximg} className="object-scale-down" alt="ximg" />
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="https://github.com/rutdvaj">
            <Image src={gitimg} alt="gitimg" />
          </Link>
        </MenubarMenu>
        <MenubarMenu>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=rutdvajrawal@gmail.com">
            <Image src={linimg} alt="linimg" />
          </Link>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
