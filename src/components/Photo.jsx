"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" },
        }}
        className=""
      >
        <Image
          src="/assets/profile-pic.png"
          priority
          alt="profile pic"
          width={450}
          height={450}
          className="object-cover rounded-full w-[300px] h-[300px] xl:w-[450px] xl:h-[450px] "
        />
      </motion.div>
    </div>
  );
};

export default Photo;
