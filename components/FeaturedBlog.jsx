import Image from 'next/image';
import styles from './Blogs.module.css';

export default function FeaturedBlog({ data }) {
  return (
    <div className={styles.featuredBlog}>
      <Image src={data.image} alt={data.title} width={600} height={400} />
      <h2>{data.title}</h2>
      <p>{data.summary}</p>
      <div className={styles.meta}>
        <span>🧑 {data.author}</span>
        <a
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.tag} ${styles.clickableTag}`}
        >
          {data.tag}
        </a>
        <span>{data.date} · {data.readTime}</span>
      </div>
    </div>
  );
}