"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
import { links } from "@/constants/constant";
import Image from "next/image";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-secondary" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <Link href="/" className="text-center flex justify-center mt-20 mb-10">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={150}
            height={81}
            priority={true}
          />
        </Link>
        {/* Navigation */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <SheetClose asChild key={index}>
                <Link
                  href={link.path}
                  className={`${
                    link.path === pathname &&
                    "text-secondary border-b-2 border-secondary"
                  } text-xl capitalize font-medium hover:text-secondary transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
