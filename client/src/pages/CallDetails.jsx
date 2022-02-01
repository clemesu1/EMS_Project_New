import * as React from 'react';
import { Box, Tabs } from '@mui/material';
import TabPanel from '../components/TabPanel';
import LinkTab from '../components/LinkTab';
import a11yProps from '../components/a11yProps';
import VehicleDetails from './CallDetails/VehicleDetails';
import PatientDetails from './CallDetails/PatientDetails';
import IncidentDetails from './CallDetails/IncidentDetails';


const CallDetails = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ bgcolor: 'background.paper' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="nav tabs" variant="scrollable" scrollButtons="auto">
                    <LinkTab label="Vehicle Details" path="/call-details/vehicle-details" {...a11yProps(0)} />
                    <LinkTab label="Patient Details" path="/call-details/patient-details" {...a11yProps(1)} />
                    <LinkTab label="Incident Details" path="/call-details/incident-details" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <VehicleDetails />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <PatientDetails />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <IncidentDetails />
            </TabPanel>
        </Box>
    );

}

export default CallDetails;
