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
        <span className={styles.tag}>{data.tag}</span>
        <span>{data.date} · {data.readTime}</span>
      </div>
    </div>
  );
}