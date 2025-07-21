// BentoGrid.js
import React from "react";
import { motion } from "framer-motion";
import "./BentoGrid.css"; // Import your custom styles

export function BentoGrid({ className, children }) {
  return <div className={`bento-grid-wrapper ${className || ""}`}>{children}</div>;
}

export function BentoGridItem({ className, title, description, header, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    className={`bento-grid-item ${className}`.trim()}
    >
      
      {header && <div className="bento-item-header">{header}</div>}
      <div className="bento-item-icon">{icon}</div>
      <div className="bento-item-title">{title}</div>
      <div className="bento-item-description">{description}</div>
    </motion.div>
  );
}
