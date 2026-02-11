"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-lg">
        I help businesses automate customer communication and operations using{" "}
        <span className="font-medium">AI agents</span> and full-stack systems.
      </p>

      <p className="mb-3 text-lg">
        Many teams struggle with delayed replies, missed follow-ups, and heavy
        message volume across WhatsApp, social media, and web channels. I build
        systems that solve this with automation and AI-first workflows.
      </p>

      <p className="mb-3 text-lg">
        With a strong <span className="font-medium">full-stack background</span>
        , I develop complete solutions from backend logic and APIs to
        integrations and production-ready web apps.
      </p>

      <p className="mb-3 text-lg">
        My work includes:
      </p>
      <ul className="mb-3 list-disc space-y-1 pl-6 text-left text-lg">
        <li>Building AI agents that reply to customers 24/7.</li>
        <li>Automating appointment booking and follow-ups.</li>
        <li>Developing RAG systems connected to knowledge bases and PDFs.</li>
        <li>Integrating with WhatsApp, Messenger, Instagram, CRM, and APIs.</li>
        <li>
          Building custom workflows and automation for operations and marketing.
        </li>
      </ul>

      <p className="mb-3 text-lg">
        <span className="font-medium">Technologies & Expertise:</span> AI
        Agents, RAG Systems, Workflow Automation, Integrations, APIs, Next.js,
        Node.js, React, Databases, Webhooks, and ERP (Odoo).
      </p>

      <p className="mb-3 text-lg">
        My goal is simple: help businesses operate smarter, reduce costs, save
        time, and never miss opportunities.
      </p>
    </motion.section>
  );
}
