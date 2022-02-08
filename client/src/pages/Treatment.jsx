import React from "react";
import { Box, Tabs } from "@mui/material";
import LinkTab from "../components/LinkTab";
import TabPanel from "../components/TabPanel";
import a11yProps from "../components/a11yProps";
import Intervention from "./Treatment/Intervention";
import Medications from "./Treatment/Medications";
import VitalSign from "./Treatment/VitalSign";

const Treatment = ({ page }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="nav tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          <LinkTab
            label="Interventions"
            path="/treatment/interventions"
            {...a11yProps(0)}
          />
          <LinkTab
            label="Medications"
            path="/treatment/medications"
            {...a11yProps(1)}
          />
          <LinkTab
            label="Vital Sign"
            path="/treatment/vital-sign"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Intervention page={page} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Medications page={page} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <VitalSign page={page} />
      </TabPanel>
    </Box>
  );
};

export default Treatment;
