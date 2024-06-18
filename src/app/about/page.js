"use client";
import Photo from "@/components/Photo";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { skillSets } from "@/constants/constant";
import { BiSolidShoppingBags } from "react-icons/bi";

const page = () => {
  return (
    <section className="h-full container mx-auto xl:pt-8 xl:pb-24">
      <div className="w-full h-full flex flex-col xl:flex-row gap-6">
        {/* Photo */}
        <div className=" h-full">
          <Photo />
        </div>

        {/* What i do */}
        <motion.div
          className="flex flex-col w-full flex-grow justify-center"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-2xl text-center">What I do?</h1>
          <p className="mt-8">
            Crazy Full Stack Developer Who Wants To Explore Every Tech Stack
          </p>
          <ul className="italic mt-6">
            <li>
              ⚡ Develop highly interactive Front end / User Interfaces for your
              web and mobile applications
            </li>
            <li>
              ⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks{" "}
            </li>
            <li>
              ⚡ Integration of third party services such as Firebase/ AWS /
              Azure
            </li>
            <li>
              ⚡ API development with highly scable framework such as NESTJS,
              EXPRESSJS
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Skills */}
      <motion.div
        className="mt-20 text-accent"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl text-center">Skills</h1>
        <div className="mt-8 flex flex-wrap justify-center gap-8 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {skillSets.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex flex-col items-center min-w-[100px] text-center"
              >
                {React.cloneElement(skill.icon, { className: "w-12 h-12" })}
                <span className="mt-2 text-secondary">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        className="mt-20"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-2xl text-center">Experience</h1>
        <div className="flex flex-col gap-6 xl:gap-0 xl:flex-row mt-8">
          <div className="flex-1 flex gap-4 items-center justify-center xl:border-r-2 xl:border-gray-300">
            <p className="xl:text-right text-center">
              <span className="bg-secondary text-primary font-bold p-2 rounded-full">
                2019 - 2020
              </span>
              <br />
              Webknot Technologies
              <br />
              <span className="text-secondary">Fullstack Developer Intern</span>
            </p>
            <BiSolidShoppingBags className="w-12 h-12" />
          </div>

          <div className="flex-1 flex gap-4 items-center justify-center">
            <BiSolidShoppingBags className="w-12 h-12" />
            <p className="xl:text-left text-center">
              <span className="bg-secondary text-primary font-bold p-2 rounded-full">
                2020 - 2022
              </span>
              <br />
              Arba Development Studios
              <br />
              <span className="text-secondary">Fullstack Developer</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default page;
