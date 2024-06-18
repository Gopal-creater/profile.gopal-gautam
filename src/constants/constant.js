import { FaHtml5, FaReact, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io";
import { FaNpm } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGithub, FaLinkedin, FaYoutube, FaFacebook } from "react-icons/fa";
import {
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPrisma,
  SiNextdotjs,
} from "react-icons/si";

export const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about me",
    path: "/about",
  },
  {
    name: "portfolio",
    path: "/portfolio",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const skillSets = [
  {
    icon: <FaHtml5 />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    icon: <IoLogoJavascript />,
    name: "JAVASCRIPT",
  },
  {
    icon: <FaReact />,
    name: "REACT JS",
  },
  {
    icon: <SiNextdotjs />,
    name: "NEXT JS",
  },
  {
    icon: <IoLogoSass />,
    name: "SASS",
  },
  {
    icon: <FaNodeJs />,
    name: "NODE JS",
  },
  {
    icon: <SiExpress />,
    name: "EXPRESS JS",
  },

  {
    icon: <SiMongodb />,
    name: "MONGODB",
  },
  {
    icon: <SiNestjs />,
    name: "NEST JS",
  },
  {
    icon: <BiLogoPostgresql />,
    name: "POSTGRESQL",
  },
  {
    icon: <SiPrisma />,
    name: "PRISMA",
  },
  {
    icon: <FaNpm />,
    name: "NPM",
  },
  {
    icon: <TbBrandReactNative />,
    name: "REACT NATIVE",
  },
];

export const socialLinks = [
  {
    icon: <FaGithub />,
    path: "https://github.com/Gopal-creater",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/gopal-gautam/",
  },
  {
    icon: <FaYoutube />,
    path: "https://www.youtube.com/channel/UCvs_txCrmuYuP05K4WiFhFw",
  },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/profile.php?id=61552655284805",
  },
];

export const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Sonic Data",
    description: "Watermarking system for audio files",
    stack: ["React Js", "Material Ui"],
    image: "/assets/work/",
    link: "https://sonicdata.com/",
    github: "/",
  },
  {
    num: "02",
    category: "frontend",
    title: "TuteCode",
    description: "Tutorials of javascript frameworks",
    stack: ["Next JS", "Tailwind Css"],
    image: "/assets/work/",
    link: "https://main.dc67afsc3c5c7.amplifyapp.com/",
    github: "https://main.dc67afsc3c5c7.amplifyapp.com/",
  },
  {
    num: "03",
    category: "Backend",
    title: "TuteCode",
    description: "Tutorials of javascript frameworks",
    stack: ["Express Js"],
    image: "/assets/work/",
    link: "https://onlyjs-api-364f1a7eab85.herokuapp.com/api/v1/",
    github: "https://github.com/Gopal-creater/onlyjs-backend",
  },
];

export const stats = [
  {
    num: 2,
    text: "Years Of Experience",
  },
  {
    num: 3,
    text: "Projects Completed",
  },
  {
    num: 5,
    text: "Technologies Involved",
  },
  {
    num: 500,
    text: "Code Commits",
  },
];
