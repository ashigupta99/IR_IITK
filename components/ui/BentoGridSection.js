import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const items = [
  {
    title: "Intro to foreign Research Internships",
    description:
      "Ready to explore research opportunities abroad? Join us for an exclusive online session on Foreign Research Internships and gain insights from IIT Kanpur peers who have secured prestigious internships at top international universities",
    header: (
      <img
        src="https://www.anciitk.co.in/_next/image?url=%2Fimages%2Fwings%2Fresearch%2Fresearch_s.jpeg&w=1920&q=75"
        alt="Exchange Program"
        className="bento-image"
      />
    ),
    icon: <IconClipboardCopy className="bento-icon-svg" />,
  },
  {
    title: "Surge Info Session",
    description:
      "Have you heard about SURGE (Students-Undergraduate Research Graduate Excellence), a research program meant to develop and promote a research and interdisciplinary education culture amongst undergraduates. Under this program, students from IIT-K and other participating institutions all across India and SAARC nations undertake short-duration but focused research projects under professors. The duration of the program is approximately eight weeks.",
    header: (
      <img
        src="https://www.anciitk.co.in/_next/image?url=%2Fimages%2Fwings%2Fresearch%2Fsurge.jpeg&w=1920&q=75"
        alt="Exchange Program"
        className="bento-image"
      />
    ),
    icon: <IconFileBroken className="bento-icon-svg" />,
  },
  {
    title: "Buddy Program",
    description:
      "The Buddy Program pairs incoming international students with volunteers from the fourth/fifth years. Volunteers assist with day-to-day challenges, including academics and socio-cultural integration, helping international students acclimatize to IITK and India.",
    header: (
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.dzQQELuZdy5M8E6FLfNJ-AHaFj?pid=Api&P=0&h=180"
        alt="Exchange Program"
        className="bento-image"
      />
    ),
    icon: <IconSignature className="bento-icon-svg" />,
  },
  {
    title: "Foreign Students Orientation",
    description:
      "The Foreign Students Orientation in MnC clubs helps international students integrate into IITK. This brief orientation introduces them to the campus culture, helping to resolve academic pressure and homesickness, and fostering a welcoming environment.",
    header: (
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.Ur28Fh6vJLzlvhKme2KNdwAAAA?pid=Api&P=0&h=180"
        alt="Exchange Program"
        className="bento-image"
      />
    ),
    icon: <IconTableColumn className="bento-icon-svg" />,
  },
  {
    title: "SemEx Sessions",
    description:
      "SemEx Sessions ahead of the spring and fall semesters dispel myths, raise awareness, and encourage overseas semester exchanges. Information from seniors and the OIR helps students prepare and explore their options for international programs.",
    header: (
      <img
        src="/images/exchange.jpg"
        alt="Exchange Program"
        className="bento-image"
      />
    ),
    icon: <IconArrowWaveRightUp className="bento-icon-svg" />,
  },
  {
    title: "Foreign Exposure Program",
    description:
      "The Foreign Exposure Program allows undergraduates to gain international exposure through research or training at prestigious institutions abroad. The IR wing recruits professors globally and offers financial assistance, fostering academic and research excellence.",
    header: (
      <img
        src="https://unsplash.com/photos/an-airplane-is-flying-over-the-ocean-water-xgtYEEfMrUI"
        alt="Exchange Program"
        className="bento-image"
      />
    ),
    icon: <IconBoxAlignTopLeft className="bento-icon-svg" />,
  },
  {
    title: "International Programs",
    description:
      "Sessions like MITACS, Summer@EPFL, and DAAD-WISE feature speakers and representatives who share insights and experiences. These sessions expand students' horizons academically and professionally, providing valuable international exposure.",
    header: (
      <img
        src="/images/exchange.jpg"
        alt="Exchange Program"
        className="bento-image"
      />
    ),
    icon: <IconBoxAlignRightFilled className="bento-icon-svg" />,
  },
];
