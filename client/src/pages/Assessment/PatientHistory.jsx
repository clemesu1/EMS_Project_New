import React from 'react';
import { Box, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Tab, Tabs } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientHistory } from '../../features/patientHistory';
import a11yProps from '../../components/a11yProps';
import TabPanel from '../../components/TabPanel';
import General from './PatientHistory/General';
import Allergies from './PatientHistory/Allergies';
const chiefComplaints = ["Abdominal Pain/Problems", "Allergies/Envenomations", "Animal Bites/Attacks", "Assault/Sexual Assault", "Back Pain (Non Traumatic)", "Breathing Problems", "Burns(Scalds)/Explosions", "Carbon Monoxide/Inhal/HAZMAT", "Cardiac or Resp Arrest/Death", "Chest Pain", "Choking", "Convulsions/Seizures", "Diabetic Problems", "Drowning/Diving/Scuba Accident", "Electrocution/Lightning", "Eye Problems/Injuries", "Falls", "Headache", "Heart Problems/A.I.C.D.", "Heat/Cold Exposure", "Hemorrhage/Lacerations", "Industrial/Machinery Accidents", "Overdose/Poisoning(Ingestion)", "Pregnancy/Childbirth/Miscarria", "Psych/Abnorml Behavior/Suicide", "Sick Person (Spec diagnosis)", "Stab/Gunshot/Penetrating Traum", "Stroke (CVA)", "Traffic/Transportation Acc", "Traumatic Injuries (Specific)", "Unconscious/Fainting (Near)", "Unknown Problem (Man Down)", "Interfacility", "Weakness"];

const PatientHistory = () => {
  let dispatch = useDispatch();
  let patientHistory = useSelector(state => state.patientHistory);

  const [tab, setTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };
  const handleChange = (name, value) => dispatch(setPatientHistory({ name, value }));


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <FormControl fullWidth size="small">
          <InputLabel id="chief-complaint-label">Chief Complaint</InputLabel>
          <Select
            labelId="chief-complaint-label"
            id="chief-complaint"
            name="Chief_Complaint"
            label="Chief Complaint"
            defaultValue=""
            value={patientHistory.Chief_Complaint}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            {chiefComplaints.map((item, index) => (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tab} onChange={handleTabChange} aria-label="patient history tabs" variant="scrollable" scrollButtons="auto">
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Allergies" {...a11yProps(1)} />
              <Tab label="Medications" {...a11yProps(2)} />
              <Tab label="Last Meal" {...a11yProps(3)} />
              <Tab label="Events Prior" {...a11yProps(4)} />
              <Tab label="Past History" {...a11yProps(5)} />
            </Tabs>
          </Box>
          <TabPanel value={tab} index={0}>
            <General />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Allergies />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            Item Three
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default PatientHistory;
