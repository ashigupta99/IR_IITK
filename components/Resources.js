'use client';

import React from "react";
import { motion } from "framer-motion";
import SplitText from "./ui/split-text";
import "./resources.css";

export default function Resources() {
  return (
    <section className="resources-section">
      {/* Resources Main Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <SplitText text="Resources" className="resources-heading" />
      </motion.div>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="resources-subheading"
      >
        Useful tools and links curated for you.
      </motion.p>

      {/* GRAD Handbook Section */}
      <div className="grad-section">
        <h2 className="grad-title">Graduate Research Application Directory</h2>
        <p className="grad-desc">
         This guide is designed to walk you through the process — from doubts to decisions — with insights drawn from recent alumni who’ve successfully made the journey. Their experiences, shared towards the end, serve as a beacon to help you craft your own strong application and take that next big leap.


        </p>

        <a href="https://drive.google.com/file/d/1oeSLXFXlEEI8zctiDi3vh6Hc9yvrp65I/view" target="_blank" className="grad-button">
          📘 Link to GRAD
        </a>
      </div>
    </section>
  );
}
