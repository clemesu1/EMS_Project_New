import React from 'react';
import { Box, Grid, Paper, Tab, Tabs } from '@mui/material';
import TabPanel from '../../../components/TabPanel';
import a11yProps from '../../../components/a11yProps';
import Head from './Trauma/Head';
import Neck from './Trauma/Neck';
import Chest from './Trauma/Chest';
import Abdoment from './Trauma/Abdoment';
import Pelvis from './Trauma/Pelvis';
import UpperExtremities from './Trauma/UpperExtremities';
import LowerExtremities from './Trauma/LowerExtremities';
import Back from './Trauma/Back';

const Trauma = () => {
	const [tab, setTab] = React.useState(0);

	const handleTabChange = (event, newValue) => {
	  setTab(newValue);
	};  

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Grid item xs={12}>
					<Paper variant="outlined" sx={{ width: '100%' }}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={tab} onChange={handleTabChange} aria-label="general assessment tabs" variant="scrollable" scrollButtons="auto">
								<Tab label="Head" {...a11yProps(0)} />
								<Tab label="Neck" {...a11yProps(1)} />
								<Tab label="Chest" {...a11yProps(2)} />
								<Tab label="Abdoment" {...a11yProps(3)} />
								<Tab label="Pelvis" {...a11yProps(4)} />
								<Tab label="Upper Extremities" {...a11yProps(5)} />
								<Tab label="Lower Extremeties" {...a11yProps(6)} />
								<Tab label="Back" {...a11yProps(7)} />
							</Tabs>
						</Box>
						<TabPanel value={tab} index={0}>
							<Head />
						</TabPanel>
						<TabPanel value={tab} index={1}>
							<Neck />
						</TabPanel>
						<TabPanel value={tab} index={2}>
							<Chest />
						</TabPanel>
						<TabPanel value={tab} index={3}>
							<Abdoment />
						</TabPanel>
						<TabPanel value={tab} index={4}>
							<Pelvis />
						</TabPanel>
						<TabPanel value={tab} index={5}>
							<UpperExtremities />
						</TabPanel>
						<TabPanel value={tab} index={6}>
							<LowerExtremities />
						</TabPanel>
						<TabPanel value={tab} index={7}>
							<Back />
						</TabPanel>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Trauma;
