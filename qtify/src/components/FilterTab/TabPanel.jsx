import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./TabPanel.module.css";

const TabPanel = ({ children, index, value }) => {
  return (
    <div
      role="tabpanel"
      className={value !== index ? styles.tabe_panel_hidden : styles.tab_panel}
    >
      {value === index && <p>{children}</p>}
    </div>
  );
};

export default TabPanel;
