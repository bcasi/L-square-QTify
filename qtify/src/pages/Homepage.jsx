import React from "react";
import HeroSection from "../components/Hero/HeroSection";
import Section from "../components/Section/Section";
import { getGenreLabel } from "../api/songsApi";
import { useOutletContext } from "react-router-dom";
import styles from "./Homepage.module.css";
import AccordionUsage from "../components/Accordion/Accordion";
import AccordionSection from "../components/Accordion/AccordionSection";

const Homepage = () => {
  const { topAlbums, newAlbums, songs } = useOutletContext();
  return (
    <div className={styles.homepage_wrapper}>
      <HeroSection />
      <Section data={topAlbums} type="albums" title="Top Albums" />
      <Section data={newAlbums} type="albums" title="New Albums" />
      <div className={styles.section_wrapper}>
        <Section
          data={songs}
          type="songs"
          title="Songs"
          fetchGenre={getGenreLabel}
        />
      </div>
      <div className={styles.faq_section}>
        <h1>FAQs</h1>
        <AccordionSection />
      </div>
    </div>
  );
};

export default Homepage;
