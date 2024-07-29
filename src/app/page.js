"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="container mx-auto h-full">
      {/* left Text */}
      <div className="flex flex-col xl:flex-row gap-2 items-enter justify-between xl:pt-8 xl:pb-24">
        <motion.div
          className="text-center xl:text-left order-2 xl:order-none"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-12 xl:mb-6">
            Hi All, I'm <br />
            <span className="text-secondary">
              Gopal Gautam
              <motion.span
                className="inline-block ml-8"
                animate={{
                  rotate: [0, 10, -10, 10, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                👋
              </motion.span>
            </span>
          </h1>
          <p className="xl:max-w-[500px] mb-12 xl:mb-9 ">
            Passionate react js, express, nest, mongo db, next js and many more
            dev dedicated to tech that makes a difference. Crafting solutions
            for impact. Let's connect and code a brighter future! 🌈✨
          </p>
          <div className="flex flex-col xl:flex-row items-center gap-6">
            <a href="./assets/GopalResume.pdf" download>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
            </a>
            <div>
              <Socials />
            </div>
          </div>
        </motion.div>

        {/* photo */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>

      {/* Statics */}
      <motion.div
        className="text-center xl:text-left order-2 xl:order-none mt-11 xl:mt-0"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Stats />
      </motion.div>
    </section>
  );
}
