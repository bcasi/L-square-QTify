import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

const Section = ({ data, type, title }) => {
  const [isCarousel, setIsCarousel] = useState(true);

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <Header
          title={title}
          isCarousel={isCarousel}
          setIsCarousel={setIsCarousel}
        />
        <div className={styles.grid_wrapper}>
          <div
            className={
              isCarousel ? styles.grid_section_collapsed : styles.grid_section
            }
          >
            {isCarousel ? (
              <Carousel
                data={data}
                render={(album) => <Card data={album} type={type} />}
              />
            ) : (
              data.map((list) => {
                return <Card key={list.id} data={list} type={type} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
