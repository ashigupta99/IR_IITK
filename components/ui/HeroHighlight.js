// HeroHighlight.js
"use client";
import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import "./HeroHighlight.css";

export const HeroHighlight = ({ children, className = "", containerClassName = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotPatterns = {
    light: {
      default:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16'%3E%3Ccircle fill='%2399999940' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E\")",
      hover:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16'%3E%3Ccircle fill='%23A855F7' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E\")",
    },
    dark: {
      default:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16'%3E%3Ccircle fill='%2340404060' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E\")",
      hover:
        "url(\"data:image/svg+xml;charset=utf-82340404060,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16'%3E%3Ccircle fill='%cac7ff' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E\")",
    },
  };

  function handleMouseMove(e) {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className={`hero-container ${containerClassName}`} onMouseMove={handleMouseMove}>
      <div className="pattern-light" style={{ backgroundImage: dotPatterns.light.default }} />
      <div className="pattern-dark" style={{ backgroundImage: dotPatterns.dark.default }} />
      <motion.div
        className="pattern-light-hover"
        style={{
          backgroundImage: dotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          maskImage: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
        }}
      />
      <motion.div
        className="pattern-dark-hover"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
          maskImage: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
        }}
      />
      <div className={`hero-content ${className}`}>{children}</div>
    </div>
  );
};

export const Highlight = ({ children, className = "" }) => {
  return (
    <motion.span
      initial={{ backgroundSize: "0% 100%" }}
      animate={{ backgroundSize: "100% 100%" }}
      transition={{ duration: 2, ease: "linear", delay: 0.5 }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={`highlight-text ${className}`}
    >
      {children}
    </motion.span>
  );
};
