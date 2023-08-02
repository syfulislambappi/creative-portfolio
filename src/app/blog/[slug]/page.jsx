import Image from "next/image";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) return notFound();

  return res.json();
}

export async function generateMetadata({ params }) {
  const blog = await getData(params.slug);

  return {
    title: blog.title,
    description: blog.desc,
  };
}

async function BlogSlug({ params }) {
  const blog = await getData(params.slug);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{blog.title}</h1>
          <p className={styles.desc}>{blog.desc}</p>
          <div className={styles.author}>
            <Image
              src={blog.img}
              alt={blog.title}
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>{blog.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={blog.img}
            alt={blog.title}
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{blog.content}</p>
      </div>
    </div>
  );
}

export default BlogSlug;
