import React from 'react';
import { Grid, Paper, Tab, Tabs } from '@mui/material';
import { Box } from '@mui/system';
import TabPanel from '../../components/TabPanel';
import a11yProps from '../../components/a11yProps';
import Respiratory from './ComplaintBased/Respiratory';
import Seizure from './ComplaintBased/Seizure';
import ToxicExposure from './ComplaintBased/ToxicExposure';
import CardiacArrest from './ComplaintBased/CardiacArrest';
import ChestPain from './ComplaintBased/ChestPain';
import Neonatal from './ComplaintBased/Neonatal';
import Obstetric from './ComplaintBased/Obstetric';
import Trauma from './ComplaintBased/Trauma';

const ComplaintBased = () => {
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
              <Tab label="Respiratory" {...a11yProps(0)} />
              <Tab label="Seizure" {...a11yProps(1)} />
              <Tab label="Toxic Exposure" {...a11yProps(2)} />
              <Tab label="Cardiac Arrest" {...a11yProps(3)} />
              <Tab label="Chest Pain" {...a11yProps(4)} />
              <Tab label="Neonatal" {...a11yProps(5)} />
              <Tab label="Obstetric" {...a11yProps(6)} />
              <Tab label="Trauma" {...a11yProps(7)} />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            <Respiratory />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Seizure />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <ToxicExposure />
          </TabPanel>
          <TabPanel value={tab} index={3}>
            <CardiacArrest />
          </TabPanel>
          <TabPanel value={tab} index={4}>
            <ChestPain />
          </TabPanel>
          <TabPanel value={tab} index={5}>
            <Neonatal />
          </TabPanel>
          <TabPanel value={tab} index={6}>
            <Obstetric />
          </TabPanel>
          <TabPanel value={tab} index={7}>
            <Trauma />
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ComplaintBased;
