import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>&copy;2023 Bappimia. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          height={15}
          width={15}
          className={styles.icon}
          alt="facebook"
        />
        <Image
          src="/2.png"
          height={15}
          width={15}
          className={styles.icon}
          alt="instagram"
        />
        <Image
          src="/3.png"
          height={15}
          width={15}
          className={styles.icon}
          alt="twitter"
        />
        <Image
          src="/4.png"
          height={15}
          width={15}
          className={styles.icon}
          alt="youtube"
        />
      </div>
    </footer>
  );
};

export default Footer;
