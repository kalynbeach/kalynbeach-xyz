"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import ActiveLink from "./active-link";

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
    <nav className="flex flex-row gap-10 justify-between items-center">
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        {isOpen ? <Cross1Icon className="h-4 w-4" /> : <HamburgerMenuIcon className="h-4 w-4" />}
      </Button>
      <div
        className={`${
          isOpen ? "h-64" : "h-0"
        } absolute left-0 top-32 w-full bg-white dark:bg-night-900 transition-all ease-out duration-300 transform`}
      >
        <div
          className={`${
            !isOpen ? "hidden" : ""
          } h-full p-8 flex flex-col justify-evenly gap-8 text-xl text-right border-t border-b border-neutral-200 dark:border-neutral-900 z-50`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <ActiveLink href="/about" onClick={() => setIsOpen(!isOpen)}>
            about
          </ActiveLink>
          {/* <ActiveLink href='/blog' onClick={() => setIsOpen(!isOpen)}>
            blog
          </ActiveLink> */}
          {/* <ActiveLink href='/code'>
            code
          </ActiveLink> */}
          {/* <ActiveLink href='/music'>
            music
          </ActiveLink> */}
        </div>
      </div>
    </nav>
  );
}
