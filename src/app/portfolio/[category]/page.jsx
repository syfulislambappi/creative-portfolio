import Button from "@/components/button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

function getData(cat) {
  const data = items[cat];

  if (data) return data;

  return notFound();
}

function Category({ params }) {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button url="#">See More</Button>
          </div>
          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt="portfolio image"
              fill={true}
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;
