import React from "react";
import styles from "./HeroSection.module.css";
import HeadPhoneImage from "../../assets/vibrating-headphone.png";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <h1>
          100 Thousand Songs, ad-free <br></br> Over thousands podcast episodes
        </h1>
        <div className={styles.hero_image}>
          <img src={HeadPhoneImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
