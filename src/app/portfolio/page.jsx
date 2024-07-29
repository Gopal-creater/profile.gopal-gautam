"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "@/constants/constant";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const page = () => {
  return (
    <section className="container mt-6 mb-8 xl:mb-24">
      <h1 className="text-2xl">Some Of the projects</h1>
      <motion.div
        className="mt-6 grid grid-cols-1 xl:grid-cols-2 gap-6 text-accent"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-8 border border-secondary text-accent rounded-xl hover:shadow-xl hover:shadow-secondary"
            variants={item}
          >
            <h1 className="text-6xl text-center leading-none font-extrabold">
              {project.num}
            </h1>
            <h2 className="text-center text-[35px] font-bold capitalize">
              {project.title}
            </h2>
            <h2 className="text-center text-[20px] font-bold capitalize">
              {project.category}
            </h2>
            <p className="text-center">{project.description}</p>
            <p className="text-xl text-secondary  text-center">
              {project.stack.join(",")}
            </p>
            <div className="flex gap-4 mt-4 justify-center border-t-2 border-secondary pt-4">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-secondary rounded-full flex justify-center items-center text-secondary text-base hover:bg-secondary hover:text-primary hover:transition-all duration-500"
              >
                <FaLink className="w-8 h8" />
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-secondary rounded-full flex justify-center items-center text-secondary text-base hover:bg-secondary hover:text-primary hover:transition-all duration-500"
              >
                <FaGithub className="w-8 h8" />
              </Link>
            </div>
          </motion.div>
        ))}
        <div className=" flex justify-center items-center">
          <a
            href="https://github.com/Gopal-creater"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="mt-6 mb-8">More Projects</Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default page;
