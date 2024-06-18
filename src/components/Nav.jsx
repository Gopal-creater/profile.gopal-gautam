"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { links } from "@/constants/constant";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-secondary border-b-2 border-secondary"
            } capitalize font-medium hover:text-secondary transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
