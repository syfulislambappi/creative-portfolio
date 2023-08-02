import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fatch the blogs");

  return res.json();
}

async function Blog() {
  const blogs = await getData();

  return (
    <div className={styles.container}>
      {blogs.map((blog) => (
        <Link
          href={`/blog/${blog._id}`}
          className={styles.linkContainer}
          key={blog.id}
        >
          <div className={styles.imgContainer}>
            <Image
              src={blog.img}
              alt={blog.title}
              width={400}
              height={250}
              className={styles.img}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.desc}>{blog.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;
