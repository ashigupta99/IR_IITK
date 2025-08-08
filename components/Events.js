'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { HeroHighlight } from "./ui/HeroHighlight";
import { motion } from "framer-motion";
import { BentoGridSection } from "./ui/BentoGridSection";
import React from "react";
import "./globals.css";

export default function Events() {
  return (
    <>
      <HeroHighlight>
  
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          padding: "5rem 1rem",
        }}
      >
   
          <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            fontSize: "4rem", 
            fontWeight: "900",
            textAlign: "center",
            
          }}
        >
          <span className={[styles.highlightText, "gradient-text"].join(" ")}>
  Collaborate Globally, Succeed Universally


          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "1.5rem",
            maxWidth: "600px",
            textAlign: "center",
            color:" black",
            fontWeight: "500",
          }}
        >
          Highlighted events hosted by the International Research Wing at IIT Kanpur.
        </motion.p>
         
         <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            width: "160px",
            height: "4px",
            borderRadius: "9999px",
            background: "linear-gradient(to right, #d35400, #f39c12, #e8d8c9)",
            animation: "pulse 1.5s infinite ease-in-out",
          }}
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
