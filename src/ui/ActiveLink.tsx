"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

type ActiveLinkProps = LinkProps & {};

export default function ActiveLink({
  children,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const pathName = usePathname();
  const isActive = pathName === props.href;
  const baseClassName =
    "text-lg md:text-sm font-mono transition hover:text-kb-green-dark dark:hover:text-kb-green-light";
  const activeClassName = `${baseClassName} text-kb-green-dark dark:text-kb-green-light`;

  return (
    <Link className={isActive ? activeClassName : baseClassName} {...props}>
      {children}
    </Link>
  );
}
