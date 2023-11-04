import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full h-52 md:h-36 mx-auto my-0 px-8 md:px-4 flex flex-col md:flex-row justify-evenly md:justify-between items-start md:items-center font-mono text-xs">

      {/* Copyright */}
      <div className="order-3 md:order-1 md:basis-1/3">
        <span className="">&copy; Kalyn Beach {currentYear}</span>
      </div>

      {/* Desktop ThemeToggle */}
      <div className="hidden order-1 md:order-2 md:basis-1/3 md:flex flex-row justify-end">        
        <ThemeToggle />
      </div>

      <div className="order-2 md:order-1 w-full md:basis-1/3 flex flex-row gap-8 justify-between md:justify-center items-center">
        {/* Social Links */}
        <div className="flex flex-row gap-8 justify-between items-center">
          <a className="order-3 md:order-1" href="https://github.com/kalynbeach" target="_blank">
            <Image
              className="invert dark:invert-0"
              src="/github.svg"
              alt="GitHub"
              width={17}
              height={17}
            />
          </a>
          <a className="order-2" href="https://discordapp.com/channels/@me/kalynbeach/" target="_blank">
            <Image
              className="invert dark:invert-0"
              src="/discord.svg"
              alt="Discord"
              width={16}
              height={16}
            />
          </a>
          <a className="order-1 md:order-3" href="https://x.com/kalynbeach" target="_blank">
            <Image
              className="invert dark:invert-0"
              src="/x.svg"
              alt="X / Twitter"
              width={15}
              height={15}
            />
          </a>
        </div>
        {/* Mobile ThemeToggle */}
        <div className="md:hidden order-1 md:order-2 md:basis-1/3 flex flex-row justify-end">        
          <ThemeToggle />
        </div>
      </div>

    </footer>
  );
}
