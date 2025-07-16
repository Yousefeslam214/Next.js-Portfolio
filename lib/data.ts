import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
// import ajwadPic from "@/public/ajw-ad-pic.jpg";
import ajwadPic from "@/public/ajwadPic.jpg";
import aetherPic from "@/public/aetherPic.jpg";
import grandPic from "@/public/grandPic.jpg";
// import crmPic from "@/public/crmPic.avif";
import trippyPic from "@/public/trippyPic.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Ajwad Developments – Real Estate Company",
    description:
      "Customized Odoo ERP modules for real estate sales and bookings. Worked closely with sales/operations teams to optimize workflows.  Delivered Odoo training for sales teams. build website of company for showcasing properties. Built AJW-AD CRM with React.js and Node.js.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 – Present",
  },
  {
    title: "Full Stack Oracle Developer Intern",
    location: "Esperti Solutions – Software Company",
    description:
      "Built ERP modules using Oracle APEX and PL/SQL. Helped automate core enterprise workflows and designed business logic. Gained deep knowledge of ERP system architecture.",
    icon: React.createElement(CgWorkAlt),
    date: "July 2024 – Sep 2024",
  },
  {
    title: "Software Engineer Intern",
    location: "ALX Africa – Remote",
    description:
      "12-month intensive full-stack program. Mastered C, Python, JavaScript, SQL, Bash. Built low-level systems (shell, malloc, linked lists). Practiced OOP, data structures, algorithms, debugging, and web development.",
    icon: React.createElement(LuGraduationCap),
    date: "July 2023 – July 2024",
  },
] as const;

export const projectsData = [
  {
    title: "Grand Events Website",
    description:
      "An elegant and responsive website for an event management company. Designed with a modern UI to showcase services and events.",
    tags: ["Next.js", "Tailwind", "React"],
    imageUrl: grandPic,
    demoUrl: "https://grand-events-website.vercel.app/",
    githubUrl: "https://github.com/Yousefeslam214/Grand-Events-Website",
  },
  {
    title: "CRM for Real Estate Company",
    description:
      "A custom CRM system built to manage leads, clients, and sales for a real estate company.",
    tags: ["React.js", "Node.js", "MUI"],
    // imageUrl: crmPic,
    demoUrl: "https://your-crm-demo-link.com",
    videoUrl: "https://your-crm-video-link.com",
    githubUrl: "https://github.com/your-username/crm-real-estate",
  },
  {
    title: "Ajwad Website",
    description:
      "Corporate website developed for a real estate brand. Built using WordPress with custom theme modifications.",
    tags: ["WordPress"],
    imageUrl: ajwadPic,
    demoUrl: "https://ajw-ad.net/",
  },
  {
    title: "Aether Pixels Website",
    description:
      "A visually-rich website created for a design agency. Built with WordPress focusing on aesthetics and performance.",
    tags: ["WordPress"],
    imageUrl: aetherPic,
    demoUrl: "https://aetherpixels.com",
    // githubUrl: "https://github.com/your-username/aetherpixels",
  },
  {
    title: "Trippy Website",
    description:
      "A modern travel-themed web app built using React.js and JavaScript. Focused on smooth UI and performance.",
    tags: ["React.js", "JavaScript"],
    imageUrl: trippyPic,
    demoUrl: "https://trippy-website-demo.com",
    githubUrl: "https://github.com/your-username/trippy-website",
  },
] as const;

export const skillsData = [
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "Odoo",
  "TypeScript",
  "JavaScript",
  "Python",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  // "Prisma",
  // "GraphQL",
  // "Apollo",
  "Framer Motion",
  "Git",
  "CSS",
  "HTML",
] as const;
