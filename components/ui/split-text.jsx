'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function SplitText({ text, className = "" }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
}
