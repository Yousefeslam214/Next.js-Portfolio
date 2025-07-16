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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        <span className="italic">
          “ From the moment I wrote my first line of code
        , I knew I had found something special. ”
        </span>
      </p>

      <p className="mb-3">
        While studying <span className="font-medium">Computer Science</span> in
        college, I realized that classroom learning alone wasn’t enough. I
        craved deeper, hands-on experience. That’s when I joined{" "}
        <span className="font-medium">
          ALX Africa’s Software Engineering program{" "}
        </span>
        a decision that pushed me beyond my limits, strengthened my technical
        skills, and connected me with a global community of aspiring developers.
      </p>

      <p className="mb-3">
        Through countless late nights of debugging, building full-stack
        applications, and collaborating with developers across the continent,
        I’ve grown not just as a coder, but as a{" "}
        <span className="font-medium">
          problem solver, team player, and critical thinker
        </span>
        .
      </p>

      <p className="mb-3">
        Today, I focus on{" "}
        <span className="font-medium">full-stack web development</span>,
        combining technical knowledge with creativity to build solutions that
        are both functional and visually engaging. I’m especially passionate
        about working where{" "}
        <span className="italic">technology meets marketing</span>, crafting
        digital experiences that leave a lasting impact.
      </p>

      <p className="mb-3">
        I’m always excited to connect, collaborate, and contribute to meaningful
        projects. Let’s build something great together.
      </p>
    </motion.section>
  );
}
