import styles from "./page.module.css";

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default PortfolioLayout;
