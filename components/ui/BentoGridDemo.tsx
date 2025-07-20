import { cn } from "@/lib/utils";
import React ,{useRef}from "react";
import { motion, useInView } from "framer-motion";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
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
          >
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
          </motion.div>
           );
})}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "Intro to foreign Research Internships",
    description: "Ready to explore research opportunities abroad? Join us for an exclusive online session on Foreign Research Internships and gain insights from IIT Kanpur peers who have secured prestigious internships at top international universities",
    header: (
      <img
        src="https://www.anciitk.co.in/_next/image?url=%2Fimages%2Fwings%2Fresearch%2Fresearch_s.jpeg&w=1920&q=75" // 
        alt="Exchange Program"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Surge Info Session",
    description: "Have you heard about SURGE (Students-Undergraduate Research Graduate Excellence), a research program meant to develop and promote a research and interdisciplinary education culture amongst undergraduates. Under this program, students from IIT-K and other participating institutions all across India and SAARC nations undertake short-duration but focused research projects under professors. The duration of the program is approximately eight weeks.",
    header:  (
      <img
        src="https://www.anciitk.co.in/_next/image?url=%2Fimages%2Fwings%2Fresearch%2Fsurge.jpeg&w=1920&q=75" // 
        alt="Exchange Program"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Buddy Program",
    description: "The Buddy Program pairs incoming international students with volunteers from the fourth/fifth years. Volunteers assist with day-to-day challenges, including academics and socio-cultural integration, helping international students acclimatize to IITK and India.",
    header:  (
      <img
        src="https://tse2.mm.bing.net/th/id/OIP.dzQQELuZdy5M8E6FLfNJ-AHaFj?pid=Api&P=0&h=180" // 
        alt="Exchange Program"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Foreign Students Orientation",
    description:
      "The Foreign Students Orientation in MnC clubs helps international students integrate into IITK. This brief orientation introduces them to the campus culture, helping to resolve academic pressure and homesickness, and fostering a welcoming environment.",
    header:  (
      <img
        src="https://tse3.mm.bing.net/th/id/OIP.Ur28Fh6vJLzlvhKme2KNdwAAAA?pid=Api&P=0&h=180" // 
        alt="Exchange Program"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "SemEx Sessions",
    description: "SemEx Sessions ahead of the spring and fall semesters dispel myths, raise awareness, and encourage overseas semester exchanges. Information from seniors and the OIR helps students prepare and explore their options for international programs.",
    header:  (
      <img
        src="/images/exchange.jpg" // 
        alt="Exchange Program"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Foreign Exposure Program",
    description: "The Foreign Exposure Program allows undergraduates to gain international exposure through research or training at prestigious institutions abroad. The IR wing recruits professors globally and offers financial assistance, fostering academic and research excellence.",
    header:  (
      <img
        src="https://unsplash.com/photos/an-airplane-is-flying-over-the-ocean-water-xgtYEEfMrUI" // 
        alt="Exchange Program"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "International Programs",
    description: "Sessions like MITACS, Summer@EPFL, and DAAD-WISE feature speakers and representatives who share insights and experiences. These sessions expand students' horizons academically and professionally, providing valuable international exposure.",
    header:  (
      <img
        src="/images/exchange.jpg" //
        alt="Exchange Program"
        className="w-full h-40 object-cover rounded-xl"
      />
    ),
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
