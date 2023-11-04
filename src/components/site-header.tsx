import Link from "next/link";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="m-0 px-8 md:px-4 basis-32 flex flex-row justify-between items-center sticky top-0 bg-transparent backdrop-blur z-50">
      <Link
        href={"/"}
        className="font-mono md:text-lg text-night-900 dark:text-white"
      >
        kalynbeach
      </Link>
      {/* Mobile Nav */}
      <div className="md:hidden">
        <MobileNav />
      </div>
      {/* Desktop Nav */}
      <div className="hidden md:block">
        <DesktopNav />
      </div>
    </header>
  );
}
