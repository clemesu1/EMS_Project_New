import { Box, Tabs } from '@mui/material';
import React from 'react';
import a11yProps from '../components/a11yProps';
import LinkTab from '../components/LinkTab';
import TabPanel from '../components/TabPanel';
import ComplaintBased from './Assessment/ComplaintBased';
import GeneralAssessment from './Assessment/GeneralAssessment';
import MechanismOfInjury from './Assessment/MechanismOfInjury';
import PatientHistory from './Assessment/PatientHistory';

const Assessment = () => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Box sx={{ bgcolor: 'background.paper' }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="nav tabs" variant="scrollable" scrollButtons="auto">
				<LinkTab label="Patient History" path="/assessment/patient-history" {...a11yProps(0)} />
                    <LinkTab label="General Assessment" path="/assessment/general-assessment" {...a11yProps(1)} />
                    <LinkTab label="Complaint Based Assessment & History" path="/assessment/complaint-based-assessment" {...a11yProps(2)} />
                    <LinkTab label="Mechanism of Injury" path="/assessment/mechanism-of-injury" {...a11yProps(3)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
                <PatientHistory/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <GeneralAssessment />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ComplaintBased />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <MechanismOfInjury />
            </TabPanel>
		</Box>
	);
};

export default Assessment;
