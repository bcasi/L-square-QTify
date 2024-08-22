import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Button from "@mui/material/Button";
import { ReactComponent as ArrowDown } from "../../assets/arrow_down.svg";
import { ReactComponent as ArrowUp } from "../../assets/arrow_up.svg";
import styles from "./Accordion.module.css";
export default function AccordionUsage() {
  return (
    <div>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
          className={styles.accordion_summary}
        >
          Is QTify free to use?
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_details}>
          Yes! It is 100% free, and has 0% ads!
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          expandIcon={<ArrowDown />}
          aria-controls="panel2-content"
          id="panel2-header"
          className={styles.accordion_summary}
        >
          Can I download and listen to songs offline?
        </AccordionSummary>
        <AccordionDetails className={styles.accordion_details}>
          Sorry, unfortunately we don't provide the service to download any
          songs.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
