import Image from 'next/image';
import styles from './Blogs.module.css';

export default function BlogCard({ data }) {
  return (
    <div className={styles.blogCard}>
      <Image src={data.image} alt={data.title} width={100} height={80} />
      <div className={styles.blogInfo}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.meta}>
          <span>{data.date}</span> · <span>{data.readTime}</span>
        </p>
        <span className={styles.tag}>{data.tag}</span>
      </div>
    </div>
  );
}