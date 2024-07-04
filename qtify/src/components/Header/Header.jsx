import React from "react";
import styles from "./Header.module.css";

const Header = ({ title, setCollapse }) => {
  const handleCollapse = () => {
    setCollapse((collapse) => !collapse);
  };
  return (
    <div className={styles.header}>
      <p className={styles.header_title}>{title}</p>
      <p className={styles.collapse} onClick={handleCollapse}>
        {title !== "Songs" ? "Collapse" : ""}
      </p>
    </div>
  );
};

export default Header;
