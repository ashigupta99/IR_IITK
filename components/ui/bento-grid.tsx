

"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


export function BentoGrid({ className, children }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title: string;
  description: string;
  header: React.ReactNode;
  icon: React.ReactNode;
}
) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}

  
      className={cn(
        "group relative flex flex-col justify-between rounded-xl min-h-[16rem] bg-neutral-900 p-6 shadow-lg ring-1 ring-white/10 transition duration-300 hover:shadow-xl"
,
        className
      )}
    >
      {header}
      <div className="transition-opacity duration-300 group-hover:opacity-70">
        {icon}
      </div>
      <div className="font-sans font-bold text-neutral-900 dark:text-neutral-100">
        {title}
      </div>
      <div className="text-sm font-sans text-neutral-600 dark:text-neutral-300">
        {description}
      </div>
      </motion.div>
    
  );
}
