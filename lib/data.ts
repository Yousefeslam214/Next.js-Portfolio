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
import crmPic from "@/public/crmPic.jpg";
import trippyPic from "@/public/trippyPic.jpg";
import realEstateImage from "@/public/realEstateImage.png";

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
    title: "Intern Frontend Web Developer",
    location: "Crystal Soft – ERP Company",
    description: `
      I interned at Crystal ERP, where I worked on a large ERP system and got real-world experience with both frontend development and business logic.

      I collaborated with senior frontend and backend developers, and I also learned a lot from the General Manager about how business needs translate into technical features.

      ✅ What I gained:
      • Experience in big, real systems (with both good and bad architecture)
      • Better understanding of how frontend and backend teams work together
      • Exposure to real business logic and how decisions are made
      • Improved my coding skills and learned to work in a team
    `,
    icon: React.createElement(CgWorkAlt),
    date: "June 2025 – July 2025",
  },
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
    title: "Real Estate Website",
    description:
      "The site is optimized for performance and SEO, with full Arabic and English support, making it ideal for showcasing properties in a polished and professional way.",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    imageUrl: realEstateImage,
    demoUrl: "https://real-estate-website-nextjs-lovat.vercel.app/",
    // videoUrl: "",
    githubUrl: "https://github.com/Yousefeslam214/real-estate-website-nextjs",
  },

  {
    title: "CRM for Real Estate Company",
    description:
      "A custom CRM system built to manage leads, clients, and sales for a real estate company.",
    tags: ["React.js", "Node.js", "MUI"],
    imageUrl: crmPic,
    // demoUrl: "https://your-crm-demo-link.com",
    videoUrl:
      "https://drive.google.com/file/d/1fGMzCh8GFaN8pnWWDy6BsmetVQLu-aO5/view?usp=drivesdk",
    githubUrl: "https://github.com/Ajwad-real-estate",
  },
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
    demoUrl: "https://trippy-214.netlify.app/",
    githubUrl: "https://github.com/Yousefeslam214/Trippy",
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
