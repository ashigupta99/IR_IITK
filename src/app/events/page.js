
   'use client';

import { motion } from 'framer-motion';

import { HeroHighlight } from '@/components/ui/hero-highlight';
import { BentoGridDemo } from '@/components/ui/BentoGridDemo';



export default function EventsPage() {
  return (
    <>
      

      {/* Wrapper */}
      <div className="relative text-white overflow-hidden">
        {/* Silk Background */}
       
        {/* Optional Dots Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.03)_1px,_transparent_1px)] [background-size:80px_80px] z-0 pointer-events-none" />

        {/* Hero Section */}
        <HeroHighlight>
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 py-24">
            <motion.h1
              className="text-white text-5xl sm:text-6xl lg:text-7xl font-black text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              

              <span className="bg-gradient-to-r from-purple-400 to-purple-300 text-transparent bg-clip-text tracking-tight">
               Collaborate Globally, Succeed Universally
              </span>
            </motion.h1>

            <motion.p
              className="text-center mt-4 text-xl sm:text-2xl font-semibold text-neutral-300 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
             Highlighted events hosted by the  International Research Wing at IIT KANPUR


            </motion.p>

            {/* Shimmer Line */}
            <motion.div
              className="w-40 h-1 rounded-full bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
          </div>
        </HeroHighlight>

        {/* Bento Grid Section */}
        <main className="relative z-10 px-6 pt-0 pb-12">
          <BentoGridDemo />
        </main>

        {/* Gradient Fade at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-neutral-950 z-10" />
      </div>
    </>
  );
}

