

'use client';

import Image from "next/image";
import styles from "./page.module.css";
import { HeroHighlight, Highlight } from "../../component/HeroHighlight";
import { motion } from "framer-motion";
import{ BentoGridSection }from "../../component/BentoGridSection";
import React from "react";
// import BentoGridSection from "../../component/BentoGridSection";

export default function Home() {
  return (
    <>
    <style>
        {`
          .highlightText {
            background: linear-gradient(to right, #a78bfa, #c084fc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
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
            fontSize: "4.5rem", // increase here as needed
            fontWeight: "900",
            textAlign: "center",
            color: "#bdb2ff",
          }}
        >
          <span className={styles.highlightText}>
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
            color: "#cccccc",
            fontWeight: "500",
          }}
        >
          Highlighted events hosted by the International Research Wing at IIT Kanpur
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            width: "160px",
            height: "4px",
            borderRadius: "9999px",
            background: "linear-gradient(to right, #a78bfa, #7c3aed, #a78bfa)",
            animation: "pulse 1.5s infinite ease-in-out",
          }}
        />
      </div>
    </HeroHighlight>
     
       <main className="bento-grid-main">
          <BentoGridSection />
        </main>
         <div className="bottom-gradient-fade" /> 
      
     </>
  );
}
