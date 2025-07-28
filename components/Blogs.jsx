'use client';

import FeaturedBlog from './FeaturedBlog';
import BlogCard from './BlogCard';
import styles from './Blogs.module.css';

const featured = {
  image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80',
  title: 'How to Record A Podcast Remotely | 4 Methods to Try',
  summary: 'Learn how to record a podcast remotely with our full step-by-step guide...',
  author: 'Stephen Robles',
  tag: 'Podcast recording',
  date: 'October 11, 2024',
  readTime: '8 min',
};

const trending = [
  {
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=800&q=80',
    title: 'How to Use iPhone as Webcam on Mac & Windows',
    tag: 'Studio equipment',
    date: 'Jun 26, 2024',
    readTime: '14 min',
  },
  {
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    title: 'How to Record a Video Podcast (Remotely) in 5 Steps',
    tag: 'Video podcast',
    date: 'Mar 21, 2024',
    readTime: '14 min',
  },
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    title: 'How to Improve Zoom Video Quality (Full Guide)',
    tag: 'Recording software',
    date: 'Mar 5, 2024',
    readTime: '10 min',
  },
];

export default function Blogs() {
  return (
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
  );
}