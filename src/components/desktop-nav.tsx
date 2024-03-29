import ActiveLink from "./active-link";

export default function DesktopNav() {
  return (
    <nav 
      className="hidden md:flex flex-row gap-10 justify-between items-center"
      role="menu"
      aria-orientation="horizontal"
    >
      <ActiveLink href="/about">about</ActiveLink>
      {/* <ActiveLink href="/blog">blog</ActiveLink> */}
      {/* <ActiveLink href="/code">code</ActiveLink> */}
      {/* <ActiveLink href="/music">music</ActiveLink> */}
    </nav>
  );
}
