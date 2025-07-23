'use client';

import React from "react";
import { motion } from "framer-motion";
import styles from "../page.module.css";
import { FloatingDock } from "@/components/ui/floating-dock"; 
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import SplitText from "@/components/ui/split-text"; 

export default function Resources() {
  return (
    <>
      <div className={styles.heroContainer}>
        {/* Main Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <SplitText
            text="Resources"
            className="text-5xl font-bold text-center text-white"
          />
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-center text-gray-300 mt-4"
        >
          Useful links and documents for international research at IIT Kanpur
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={styles.divider}
        />
      </div>

      {/* Resource Links Section */}
      <main className="flex flex-col items-center gap-8 px-6 py-10">
        <HoverBorderGradient href="#" text="GRAD Handbook (PDF)" />
        <HoverBorderGradient href="https://linkedin.com" text="Connect on LinkedIn" />
        <HoverBorderGradient href="https://discord.com" text="Join Discord Server" />
        <HoverBorderGradient href="https://instagram.com" text="Follow on Instagram" />
      </main>

      {/* Floating Dock */}
      <FloatingDock
        links={[
          { href: "https://linkedin.com", label: "LinkedIn" },
          { href: "https://discord.com", label: "Discord" },
          { href: "https://instagram.com", label: "Instagram" },
          { href: "#", label: "Handbook" },
        ]}
      />
    </>
  );
}
