"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import ActiveLink from "./active-link";

type MobileNavMenuProps = {
  isOpen: boolean;
  toggleHandler: () => void;
};

function MobileNavMenu({ isOpen, toggleHandler }: MobileNavMenuProps) {
  return (
    <div className={`${isOpen ? "h-64" : "h-0"} absolute left-0 top-32 w-full bg-white dark:bg-night-900 transition-all ease-out duration-300 transform`}>
      <nav
        className={`${!isOpen ? "hidden" : ""} h-full p-8 flex flex-col justify-evenly gap-8 text-xl text-right border-t border-b border-neutral-200 dark:border-neutral-900 z-50`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <ActiveLink href="/about" onClick={toggleHandler}>about</ActiveLink>
        {/* <ActiveLink href="/blog" onClick={toggleHandler}>blog</ActiveLink> */}
        {/* <ActiveLink href="/code">code</ActiveLink> */}
        {/* <ActiveLink href="/music">music</ActiveLink> */}
      </nav>
    </div>
  );
};

export default function MobileNav() {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile nav menu when user navigates home
  useEffect(() => {
    if (pathName === "/") {
      setIsOpen(false);
    }
  }, [pathName]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden flex flex-row gap-10 justify-between items-center">
      <Button onClick={toggleMenu} variant="ghost" size="icon" className="h-5 w-5 rounded-none hover:bg-none">
        {isOpen ? <Cross1Icon className="h-5 w-5" /> : <HamburgerMenuIcon className="h-5 w-5" />}
      </Button>
      <MobileNavMenu isOpen={isOpen} toggleHandler={toggleMenu} />
    </div>
  );
}
