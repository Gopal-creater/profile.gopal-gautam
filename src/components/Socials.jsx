import { socialLinks } from "@/constants/constant";
import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="flex gap-6">
      {socialLinks.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-secondary rounded-full flex justify-center items-center text-secondary text-base hover:bg-secondary hover:text-primary hover:transition-all duration-500"
          >
            {link.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
