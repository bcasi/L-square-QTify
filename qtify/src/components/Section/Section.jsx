import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import ShowAll from "../Showall/ShowAll";
import FilterTab from "../FilterTab/FilterTab";
import { useAsyncError } from "react-router-dom";

const Section = ({ data, type, title, fetchGenre = null }) => {
  const [isCarousel, setIsCarousel] = useState(true);
  const [filters, setFilters] = useState([{ key: "all", label: "All" }]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    if (fetchGenre) {
      fetchGenre().then((res) => {
        setFilters([...filters, ...res]);
      });
    }
  }, [fetchGenre]);

  const isSongs = type === "songs";

  const showFilters = filters.length > 1;

  const cardsToRender =
    isSongs &&
    data.filter((card) =>
      showFilters && filterIndex !== 0
        ? card.genre.key === filters[filterIndex].key
        : card
    );

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <Header
          title={title}
          isCarousel={!isSongs ? isCarousel : null}
          setIsCarousel={!isSongs ? setIsCarousel : null}
        />
        {type === "songs" && (
          <div>
            <FilterTab
              card={cardsToRender}
              filters={filters}
              selectedIndex={filterIndex}
              handleIndex={setFilterIndex}
              type={type}
            />
          </div>
        )}

        {!isSongs && (
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
                <ShowAll
                  data={data}
                  render={(album) => <Card data={album} type={type} />}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section;
