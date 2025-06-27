"use client";

import React, { useEffect, useState } from "react";
import { IconBrandGithub, IconBrandTwitter, IconStarFilled } from "@tabler/icons-react";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathName = usePathname();

  const [home, setHome] = useState<boolean>(true);

  const checkIfHomeRoute = () => {
    if (pathName !== "/") {
      setHome(false);
    }
  };

  useEffect(() => {
    checkIfHomeRoute();
  }, [pathName]);

  return (
    <div className="w-full h-14 flex justify-between items-center px-4">
      <Link href={"/"} className="font-semibold select-none">
        bgclick
      </Link>
      <div className="flex gap-2 md:gap-4 h-full items-center">
        <Link target="blank" href={"https://github.com/TheSoumenMondal/bgclick"}>
          <Button size={"sm"} variant={"outline"} className="cursor-pointer">
            <IconStarFilled className="w-3 h-3 text-yellow-300"/>
            Star on Github
          </Button>
        </Link>
        {home && <ThemeToggle className="cursor-pointer" />}
        <Link target="blank" href={"https://github.com/TheSoumenMondal"}>
          <IconBrandGithub className="w-5 h-5 cursor-pointer" />
        </Link>
        <Link target="blank" href={"https://x.com/soumendotcom"}>
          <IconBrandTwitter className="w-5 h-5 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
