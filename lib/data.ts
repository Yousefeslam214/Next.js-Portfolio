import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import type { StaticImageData } from "next/image";
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

export type ProjectData = {
  slug: string;
  title: string;
  description: string;
  details: string[];
  highlights?: string[];
  tags: readonly string[];
  imageUrl: StaticImageData;
  demoUrl?: string;
  videoUrl?: string;
  githubUrl?: string;
};

export const projectsData: readonly ProjectData[] = [
  {
    slug: "eu-grant-finder",
    title: "EU Grant Finder",
    description:
      "AI-powered grant discovery platform that matches organizations with relevant EU funding opportunities in minutes.",
    details: [
      "EU Grant Finder is an internal discovery tool that helps organizations find suitable funding opportunities quickly using AI-powered matching.",
      "The platform uses official data from the EU Funding & Tenders Portal and presents personalized results with clear scoring and explanation to support faster decision making.",
      "It focuses on reducing manual search time and helping teams prioritize the most relevant opportunities before starting applications.",
    ],
    highlights: [
      "AI-powered profile-to-grant matching",
      "Integration with official EU Funding & Tenders data",
      "Smart scoring with explanation for each recommendation",
      "Fast discovery workflow from profile to shortlist",
    ],
    tags: ["Next.js", "TypeScript", "AI", "EU Funding"],
    imageUrl: corpcommentImg,
    demoUrl: "https://eu.dragify.ai/",
  },
  {
    slug: "real-estate-website",
    title: "Real Estate Website",
    description:
      "The site is optimized for performance and SEO, with full Arabic and English support, making it ideal for showcasing properties in a polished and professional way.",
    details: [
      "A marketing website for a real estate business, built to be fast, SEO-friendly, and easy to maintain.",
      "Supports both Arabic and English content with a clean, responsive UI focused on property discovery and lead generation.",
    ],
    highlights: [
      "Bilingual (Arabic/English) UI",
      "SEO-focused pages and metadata",
      "Responsive layout optimized for performance",
    ],
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind"],
    imageUrl: realEstateImage,
    demoUrl: "https://real-estate-website-nextjs-lovat.vercel.app/",
    // videoUrl: "",
    githubUrl: "https://github.com/Yousefeslam214/real-estate-website-nextjs",
  },

  {
    slug: "real-estate-crm",
    title: "CRM for Real Estate Company",
    description:
      "A custom CRM system built to manage leads, clients, and sales for a real estate company.",
    details: [
      "A tailored CRM to track leads, clients, and sales pipeline activities for a real estate team.",
      "Designed to make daily sales operations faster and more organized with a clear UI and role-based workflows.",
    ],
    highlights: [
      "Lead & client management",
      "Sales pipeline tracking",
      "Dashboard-style UI with MUI components",
    ],
    tags: ["React.js", "Node.js", "MUI"],
    imageUrl: crmPic,
    // demoUrl: "https://your-crm-demo-link.com",
    videoUrl:
      "https://drive.google.com/file/d/1fGMzCh8GFaN8pnWWDy6BsmetVQLu-aO5/view?usp=drivesdk",
    githubUrl: "https://github.com/Ajwad-real-estate",
  },
  {
    slug: "grand-events-website",
    title: "Grand Events Website",
    description:
      "An elegant and responsive website for an event management company. Designed with a modern UI to showcase services and events.",
    details: [
      "A modern marketing site for an event management company, focused on clear service presentation and strong visuals.",
      "Built with a responsive layout and smooth UI to highlight services, galleries, and call-to-action sections.",
    ],
    highlights: [
      "Modern responsive UI",
      "Service-first layout and CTAs",
      "Optimized media and performance",
    ],
    tags: ["Next.js", "Tailwind", "React"],
    imageUrl: grandPic,
    demoUrl: "https://grand-events-website.vercel.app/",
    githubUrl: "https://github.com/Yousefeslam214/Grand-Events-Website",
  },
  {
    slug: "ajwad-website",
    title: "Ajwad Website",
    description:
      "Corporate website developed for a real estate brand. Built using WordPress with custom theme modifications.",
    details: [
      "A corporate website for a real estate brand, built on WordPress with custom theme adjustments.",
      "Focused on a professional look, content structure, and maintainability for non-technical updates.",
    ],
    highlights: ["Custom theme modifications", "Content-focused structure"],
    tags: ["WordPress"],
    imageUrl: ajwadPic,
    demoUrl: "https://ajw-ad.net/",
  },
  {
    slug: "aether-pixels-website",
    title: "Aether Pixels Website",
    description:
      "A visually-rich website created for a design agency. Built with WordPress focusing on aesthetics and performance.",
    details: [
      "A visually rich website for a design agency with a strong emphasis on aesthetics and fast loading.",
      "Built on WordPress to allow easy content updates while maintaining a polished UI.",
    ],
    highlights: ["Design-focused layout", "Performance-minded build"],
    tags: ["WordPress"],
    imageUrl: aetherPic,
    demoUrl: "https://aetherpixels.com",
    // githubUrl: "https://github.com/your-username/aetherpixels",
  },
  {
    slug: "trippy-website",
    title: "Trippy Website",
    description:
      "A modern travel-themed web app built using React.js and JavaScript. Focused on smooth UI and performance.",
    details: [
      "A travel-themed web app with a modern, smooth UI and responsive layout.",
      "Built with React to practice component-driven architecture and interactive UI patterns.",
    ],
    highlights: ["Component-based UI", "Responsive layout", "Smooth interactions"],
    tags: ["React.js", "JavaScript"],
    imageUrl: trippyPic,
    demoUrl: "https://trippy-214.netlify.app/",
    githubUrl: "https://github.com/Yousefeslam214/Trippy",
  },
];

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
