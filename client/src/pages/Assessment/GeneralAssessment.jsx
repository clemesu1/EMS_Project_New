import React from 'react';
import { Box, Grid, Paper, Tab, Tabs } from '@mui/material';
import a11yProps from '../../components/a11yProps';
import TabPanel from '../../components/TabPanel';
import NeuroResponse from './GeneralAssessment/NeuroResponse';
import ABCs from './GeneralAssessment/ABCs';
import AssessmentFindings from './GeneralAssessment/AssessmentFindings';

const GeneralAssessment = () => {
  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleTabChange} aria-label="general assessment tabs" variant="scrollable" scrollButtons="auto">
              <Tab label="Neuro Response" {...a11yProps(0)} />
              <Tab label="ABC's" {...a11yProps(1)} />
              <Tab label="Assessment Findings" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            <NeuroResponse />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <ABCs />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <AssessmentFindings />
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GeneralAssessment;
