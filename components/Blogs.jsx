'use client';

import FeaturedBlog from './FeaturedBlog';
import BlogCard from './BlogCard';
import styles from './Blogs.module.css';

const featured = {
  image: '/Images/one.png',
  title: 'Soaring to Success: Team Aerial Robotics Wins 1st Place at ICUAS 2025',
  summary: 'What does it take to be a winner? To battle it out with the most ingenious minds across the globe and win first place is nothing short of extraordinary.',
  author: 'Prerana Ghosh, Aradhana Papnai and Arnisha Dhingra',
  tag: 'Read on Medium',
  link: 'https://medium.com/@ug_anc/soaring-to-success-team-aerial-robotics-wins-1st-place-at-icuas-2025-17b5d835bc14',
  date: 'Jun 10, 2025',
  readTime: '4 min',
};


const trending = [
  {
    image: '/Images/two.png',
    title: 'Mridul Gupta’s Research Adventure at Saarland',
    tag: 'Read on Medium',
    link: 'https://medium.com/@ug_anc/from-punjab-to-germany-mridul-guptas-research-adventure-at-saarland-e08af841b41c',
    date: 'Jun 29, 2025',
    readTime: '6 min',
  },
  {
    image: '/Images/three.png',
    title: 'A Glimpse into Pratham’s Research Journey: Research Intern in ML',
    tag: 'Read on Medium',
    link: 'https://medium.com/@ug_anc/a-glimpse-into-prathams-research-journey-research-intern-in-ml-75a10e78de2c',
    date: 'Nov 7, 2024',
    readTime: '5 min',
  },
  {
    image: '/Images/four.png',
    title: 'From IIT Kanpur to EPFL: A Semester of Growth and Discovery',
    tag: 'Read on Medium',
    link: 'https://medium.com/@ug_anc/from-iit-kanpur-to-epfl-a-semester-of-growth-and-discovery-741cd11bc51a',
    date: 'Aug 12, 2024',
    readTime: '11 min',
  },
];

export default function Blogs() {
  return (
    <section className={styles.blogsLayoutWrapper}>

      {/* 🌐 Medium Collection Highlight */}
      <a
        href="https://medium.com/@ug_anc/list/international-relations-b27e2e46ddb7"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.mediumHighlight}
      >
        <div className={styles.mediumBadge}>M</div>

        <div className={styles.mediumContent}>
          <h3>International Relations @ IIT Kanpur</h3>
          <p>
            Read curated articles, global perspectives, and insights from the
            International Relations Wing on Medium.
          </p>
          <span className={styles.mediumTag}>View Medium Collection</span>
        </div>

        <span className={styles.externalArrow}>↗</span>
      </a>

      {/* 📰 Existing Blog Layout */}
      <section className={styles.blogsLayout}>
        <div className={styles.featured}>
          <FeaturedBlog data={featured} />
        </div>

        <div className={styles.trending}>
          <h3 className={styles.trendingTitle}>Trending on IR Wing</h3>
          {trending.map((blog, i) => (
            <BlogCard key={i} data={blog} />
          ))}
        </div>
      </section>
    </section>
  );
}
