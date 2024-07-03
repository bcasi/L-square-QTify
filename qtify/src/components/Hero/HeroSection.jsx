import React from "react";
import styles from "./HeroSection.module.css";
import HeadPhoneImage from "../../assets/vibrating-headphone.png";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={HeadPhoneImage} alt="hero" width={212} height={212} />
      </div>
    </div>
  );
};

export default HeroSection;
