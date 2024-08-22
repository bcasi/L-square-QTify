import React from "react";
import styles from "./AccordionSection.module.css";
import AccordionUsage from "./Accordion";

const AccordionSection = () => {
  return (
    <div className={styles.wrapper}>
      <AccordionUsage />
    </div>
  );
};

export default AccordionSection;
