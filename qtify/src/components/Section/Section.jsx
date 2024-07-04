import React, { useState } from "react";
import Header from "../Header/Header";
import styles from "./Section.module.css";
import Card from "../Card/Card";

const Section = ({ data, type, title }) => {
  const [collapse, setCollapse] = useState(true);

  const isCollapsed = collapse ? data : data.slice(0, 7);

  console.log(isCollapsed);

  return (
    <div className={styles.wrapper}>
      <div className={styles.section}>
        <Header title={title} setCollapse={setCollapse} />
        <div
          className={
            collapse ? styles.grid_section_collapsed : styles.grid_section
          }
        >
          {isCollapsed.map((list) => {
            return <Card key={list.id} data={list} type={type} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Section;
