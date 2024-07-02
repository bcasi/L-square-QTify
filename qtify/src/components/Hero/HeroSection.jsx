import React from "react";
import styles from "./HeroSection.module.css";
import HeroImage from "../../assets/HeroImage.png";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <img src={HeroImage} alt="hero" height={212} width={799} />
    </div>
  );
};

export default HeroSection;
