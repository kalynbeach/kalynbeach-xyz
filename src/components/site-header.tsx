import Link from "next/link";
import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

export default function SiteHeader() {
  return (
    <header className="site-header m-0 px-8 md:px-4 basis-32 flex flex-row justify-between items-center sticky top-0 bg-transparent backdrop-blur z-50">
      <div className="site-header-logo">
        <Link href={"/"} className="font-mono font-bold text-lg md:text-xl">
          kalynbeach
        </Link>
      </div>
      <div className="site-header-nav">
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  );
}
