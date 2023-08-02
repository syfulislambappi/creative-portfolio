import Link from "next/link";
import styles from "./button.module.css";

const Button = ({ children, url }) => {
  return (
    <Link href={url}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
};

export default Button;
