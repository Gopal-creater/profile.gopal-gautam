import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-8 text-accent">
      <div className="flex container mx-auto  justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/assets/logo.png"
            alt="logo"
            width={150}
            height={81}
            priority
            className="h-[81px] w-[150px]"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center">
          <Nav />
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
