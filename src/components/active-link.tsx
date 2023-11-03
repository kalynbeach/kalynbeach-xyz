"use client";

import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type ActiveLinkProps = LinkProps & {};

export default function ActiveLink({
  children,
  ...props
}: PropsWithChildren<ActiveLinkProps>) {
  const pathName = usePathname();
  const isActive = pathName === props.href;

  return (
    <Link
      className={
        cn(
          "text-lg md:text-sm font-mono transition hover:text-kb-green-dark dark:hover:text-kb-green-light",
          isActive && "text-kb-green-dark dark:text-kb-green-light"
        )
      }
      {...props}
    >
      {children}
    </Link>
  );
}
