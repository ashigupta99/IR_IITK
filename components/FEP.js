'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { HeroHighlight } from "./ui/HeroHighlight";
import { motion } from "framer-motion";
import { BentoGridSection } from "./ui/BentoGridSection";
import React from "react";

export default function FEP() {
  return (
    <>
      <HeroHighlight>
        <div className={styles.heroContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={styles.title}
          >
            <span className={styles.highlightText}>
              Collaborate Globally, Succeed Universally
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.subtitle}
          >
            Highlighted events hosted by the International Research Wing at IIT Kanpur
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={styles.divider}
          />
        </div>
      </HeroHighlight>

      <main className={styles.main}>
        <BentoGridSection />
      </main>
      
      <div className="bottom-gradient-fade" />
    </>
  );
}
