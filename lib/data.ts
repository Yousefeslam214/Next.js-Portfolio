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

export type ExperienceData = {
  title: string;
  location: string;
  date: string;
  highlights: string[];
  skills?: string;
  icon: React.ReactElement;
};

export const experiencesData: readonly ExperienceData[] = [
  {
    title: "Software Engineer",
    location: "Cloudilic · Remote",
    date: "Oct 2025 – Present",
    highlights: [
      "Built and improved RAG systems connected to internal knowledge bases and PDFs.",
      "Developed AI agents for structured document analysis and workflow-based responses.",
      "Integrated AI solutions across Meta channels (WhatsApp, Messenger, Instagram).",
      "Built Dragify automations with Google Workspace, Calendar, and Microsoft integrations.",
    ],
    skills:
      "LangChain, Graph Embeddings, AI Agents, Knowledge Graph Embeddings, Vector Databases, Webhooks, RAG",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer Intern",
    location: "Cloudilic · Remote",
    date: "Sep 2025 – Oct 2025",
    highlights: [
      "Learned RAG fundamentals, embeddings, and knowledge base design.",
      "Worked on LangChain pipelines for AI-driven document processing.",
      "Assisted in building AI agents for document analysis and workflow automation.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Web Developer",
    location: "Marketing Agency Omilet · Contract · Remote",
    date: "Sep 2025 – Oct 2025",
    highlights: [
      "Built and customized Shopify themes with Liquid and dynamic sections.",
      "Extended WordPress, Shopify, and Odoo projects with custom code improvements.",
      "Joined client and pre-sales meetings to translate business goals into technical scope.",
      "Collaborated with design and marketing teams on conversion-focused web projects.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer",
    location: "Ajwad Developments · Part-time · Cairo, Egypt",
    date: "Sep 2024 – Oct 2025",
    highlights: [
      "Customized Odoo ERP modules for real-estate workflows and payment plans.",
      "Improved CRM processes for lead follow-up, client management, and sales tracking.",
      "Developed and enhanced company website using Next.js, Node.js, and TypeScript.",
      "Trained sales teams and collaborated across sales, marketing, IT, and management.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Trainee",
    location: "Al-Gammal Group · Internship · Cairo, Egypt",
    date: "Aug 2025",
    highlights: [
      "Observed enterprise workflows and team structures in a large organization.",
      "Learned how ERP+ supports operations and HR processes.",
      "Strengthened ERP workflow understanding and professional communication.",
    ],
    icon: React.createElement(LuGraduationCap),
  },
  {
    title: "Frontend Web Developer",
    location: "Crystal Soft · Internship · Cairo, Egypt",
    date: "Jun 2025 – Jul 2025",
    highlights: [
      "Worked on a large ERP frontend with real business logic scenarios.",
      "Collaborated with frontend and backend teams in a production environment.",
      "Improved system understanding, teamwork, and practical coding skills.",
    ],
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Full Stack Oracle Developer",
    location: "Esperti Solutions · Internship · Cairo, Egypt",
    date: "Aug 2024 – Sep 2024",
    highlights: [
      "Developed ERP modules using Oracle APEX and PL/SQL.",
      "Automated business workflows across finance, sales, and HR.",
      "Gained hands-on ERP architecture and backend integration experience.",
    ],
    skills: "PL/SQL, Business Workflows, Enterprise Resource Planning (ERP)",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Software Engineer Internship",
    location: "ALX Africa · Remote",
    date: "Aug 2023 – Aug 2024",
    highlights: [
      "Completed a 12-month intensive full-stack software engineering program.",
      "Built low-level systems (shell, malloc, linked lists) and backend projects.",
      "Strengthened OOP, algorithms, debugging, and web development foundations.",
    ],
    skills: "Software Development, Node.js, React.js, C++, Software Engineering",
    icon: React.createElement(LuGraduationCap),
  },
];

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
      "AI-powered Grant Matcher platform built with React and Node.js to rank real EU funding calls using hybrid scoring and optional AI insights.",
    details: [
      "Grant Matcher solves slow manual grant discovery by matching an organization profile against real calls from the EU Funding & Tenders ecosystem through the EU Search API.",
      "Users can sign up, create an organization profile, run filtered searches, and review ranked grants with match scores, AI explanations, and structured insights before opening the official EU call link.",
      "The system combines rule-based scoring with optional semantic AI scoring, AI query enhancement, document insight extraction, and caching controls to balance relevance, speed, and API cost.",
      "The platform includes secure auth (email/password plus optional Google/Facebook OAuth), session-based protection for search routes, and production-oriented performance controls such as paged fetching and concurrency limits.",
    ],
    highlights: [
      "Frontend built with React + TypeScript (Vite, Tailwind, Radix UI, Wouter, TanStack Query)",
      "Backend built with Node.js + Express TypeScript (Passport auth, MongoDB/Mongoose)",
      "Real EU Search API integration with no mock grant data",
      "Hybrid matching: rule-based scoring + optional AI semantic scoring",
      "AI query enhancement, AI explanations, and top-results document analysis",
      "User-controlled AI toggles, caching, progressive loading, and concurrency limits",
    ],
    tags: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
      "EU Funding API",
    ],
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
  "AI Agents",
  "RAG Systems",
  "LangChain",
  "Workflow Automation",
  "Webhooks",
  "APIs",
  "Next.js",
  "React",
  "Node.js",
  "Express",
  "TypeScript",
  "JavaScript",
  "Python",
  "WordPress",
  "Shopify",
  "Odoo",
  "Tailwind",
  "PostgreSQL",
  "MongoDB",
  "Redux",
  "Vector Databases",
  "Framer Motion",
  "CI/CD",
  "DevOps",
  "System Design",
  "Git",
  "CSS",
  "HTML",
] as const;
