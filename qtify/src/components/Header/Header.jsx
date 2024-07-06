import React from "react";
import styles from "./Header.module.css";

const Header = ({ title, isCarousel = null, setIsCarousel = null }) => {
  const handleCollapse = () => {
    setIsCarousel((isCarousel) => !isCarousel);
  };
  return (
    <div className={setIsCarousel ? styles.header : styles.header_2}>
      <h3 className={styles.header_title}>{title}</h3>
      {setIsCarousel && (
        <h3 className={styles.collapse} onClick={handleCollapse}>
          {isCarousel ? "Show all" : "Collapse"}
        </h3>
      )}
    </div>
  );
};

export default Header;
