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
      className="mb-28 max-w-[60rem] leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <div className="space-y-4">
        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <h3 className="mb-2 text-xl font-semibold">What I do</h3>
          <p className="text-lg text-gray-800 dark:text-white/80">
            I help businesses automate customer communication and operations
            using <span className="font-medium">AI agents</span> and full-stack
            systems.
          </p>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <h3 className="mb-2 text-xl font-semibold">Problem & Approach</h3>
          <p className="text-lg text-gray-800 dark:text-white/80">
            Many teams struggle with delayed replies, missed follow-ups, and
            heavy message volume across WhatsApp, social media, and web
            channels. I build AI-first workflows that automate response,
            booking, and follow-up end-to-end.
          </p>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <h3 className="mb-2 text-xl font-semibold">What I build</h3>
          <ul className="list-disc space-y-1 pl-6 text-lg text-gray-800 dark:text-white/80">
            <li>AI agents for instant 24/7 customer replies.</li>
            <li>Automated appointment booking and follow-up flows.</li>
            <li>RAG systems connected to internal knowledge bases and PDFs.</li>
            <li>Integrations with WhatsApp, Messenger, Instagram, CRM, and APIs.</li>
            <li>Custom automation workflows for operations and marketing.</li>
          </ul>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <h3 className="mb-2 text-xl font-semibold">Tech Stack</h3>
          <p className="text-lg text-gray-800 dark:text-white/80">
            AI Agents, RAG Systems, Workflow Automation, APIs, Integrations,
            Next.js, Node.js, React, Databases, Webhooks, and ERP (Odoo).
          </p>
        </article>

        <article className="rounded-2xl border border-black/10 bg-white/80 p-6 text-left shadow-sm dark:border-white/10 dark:bg-white/10">
          <h3 className="mb-2 text-xl font-semibold">Mission</h3>
          <p className="text-lg text-gray-800 dark:text-white/80">
            Help businesses operate smarter, reduce costs, save time, and never
            miss opportunities.
          </p>
        </article>
      </div>
    </motion.section>
  );
}
