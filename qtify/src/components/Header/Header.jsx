import React from "react";
import styles from "./Header.module.css";

const Header = ({ title, isCarousel, setIsCarousel }) => {
  const handleCollapse = () => {
    setIsCarousel((isCarousel) => !isCarousel);
  };
  return (
    <div className={styles.header}>
      <p className={styles.header_title}>{title}</p>
      <p className={styles.collapse} onClick={handleCollapse}>
        {isCarousel ? "Show all" : "Collapse"}
      </p>
    </div>
  );
};

export default Header;
