import Image from "next/image";
import styles from "./page.module.css";
import ContactImg from "/public/contact.png";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Syful Islam Contact Information",
  description: "Syful Islam web page contact information",
};

function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{`Let's Keep in Touch`}</h1>
      <div className={styles.contactContainer}>
        <div className={styles.imgContainer}>
          <Image src={ContactImg} alt="contact image" className={styles.img} />
        </div>
        <form className={styles.formContainer}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="email" placeholder="email" className={styles.input} />
          <textarea
            placeholder="message"
            className={styles.textarea}
            cols={30}
            rows={10}
          />
          <Button url="#">Send</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
