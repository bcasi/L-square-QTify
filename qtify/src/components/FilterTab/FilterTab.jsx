import React from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FilterTab({
  card,
  filters,
  selectedIndex,
  handleIndex,
  type,
}) {
  const handleChange = (event, newValue) => {
    handleIndex(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={selectedIndex}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {filters.map((filter, i) => (
            <Tab label={filter.label} {...a11yProps(i)} />
          ))}
        </Tabs>
      </Box>
      {filters.map((data, i) => (
        <CustomTabPanel value={selectedIndex} index={i}>
          <Carousel
            data={card}
            render={(album) => <Card data={album} type={type} />}
          />
        </CustomTabPanel>
      ))}
    </Box>
  );
}
