"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import "./bento-grid.css";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// Individual Bento Item Component
// function BentoItem({ item, index }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 30 }}
//       animate={isInView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className={`bento-item-wrapper ${index === 3 || index === 6 ? "col-span-2" : ""}`}
//     >
//       <div className="bento-item">
//         <div className="bento-header">
//           <Image
//             src={item.imageSrc}
//             alt={item.alt}
//             width={800}
//             height={500}
//             className="bento-image"
//           />
//         </div>
//         <div className="bento-icon">{item.icon}</div>
//         <h3 className="bento-title">{item.title}</h3>
//         <p className="bento-description">{item.description}</p>
//       </div>
//     </motion.div>
//   );
// }

// export function BentoGridSection() {
//   return (
//     <div className="bento-grid">
//       {items.map((item, i) => (
//         <BentoItem item={item} index={i} key={i} />
//       ))}
//     </div>
//   );
// }
export function BentoGridSection() {
  return (
    <div className="bento-grid">
      {items.map((item, i) => {
        const ref = useRef(null);
        const isInView = useInView(ref, { once: true });

        return (
          <motion.div
            ref={ref}
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`bento-item-wrapper ${i === 3 || i === 6 ? "col-span-2" : ""}`}
          >
            <div className="bento-item">
              <div className="bento-header">{item.header}</div>
              <div className="bento-icon">{item.icon}</div>
              <h3 className="bento-title">{item.title}</h3>
              <p className="bento-description">{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

const Skeleton = () => (
  <div className="skeleton"></div>
);


// Data
const items = [
  {
    title: "Intro to foreign Research Internships",
    description:
      "Ready to explore research opportunities abroad? Join us for an exclusive online session on Foreign Research Internships and gain insights from IIT Kanpur peers who have secured prestigious internships at top international universities",
    imageSrc: "/Images/researchinterniamge.webp",
    alt: "Research Session",
    // icon: <IconClipboardCopy className="bento-icon-svg" />,
  },
  {
    title: "Surge Info Session",
    description:
      "Have you heard about SURGE... approximately eight weeks.",
    imageSrc: "/Images/surgeimage.webp",
    alt: "SURGE Program",
    // icon: <IconFileBroken className="bento-icon-svg" />,
  },
  {
    title: "Buddy Program",
    description:
      "The Buddy Program pairs incoming international students with volunteers...",
    imageSrc: "/Images/imagebuddyprogram.jpeg",
    alt: "Buddy Program",
    // icon: <IconSignature className="bento-icon-svg" />,
  },
  {
    title: "Foreign Students Orientation",
    description:
      "The Foreign Students Orientation in MnC clubs helps international students...",
    imageSrc: "/images/orientation.jpg",
    alt: "Orientation Program",
    // icon: <IconTableColumn className="bento-icon-svg" />,
  },
  {
    title: "SemEx Sessions",
    description:
      "SemEx Sessions ahead of the spring and fall semesters...",
    imageSrc: "/images/exchange.jpg",
    alt: "SemEx Sessions",
    // icon: <IconArrowWaveRightUp className="bento-icon-svg" />,
  },
  {
    title: "Foreign Exposure Program",
    description:
      "The Foreign Exposure Program allows undergraduates to gain international exposure...",
    imageSrc: "/images/airplane.jpg",
    alt: "Foreign Exposure",
    // icon: <IconBoxAlignTopLeft className="bento-icon-svg" />,
  },
  {
    title: "International Programs",
    description:
      "Sessions like MITACS, Summer@EPFL, and DAAD-WISE feature speakers...",
    imageSrc: "/images/exchange.jpg",
    alt: "International Programs",
    // icon: <IconBoxAlignRightFilled className="bento-icon-svg" />,
  },
];
