import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChestPain } from '../../../features/chestPain';
import { Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import OnsetMask from '../../../components/OnsetMask';

const qualityList = ["Aching", "Burning", "Cramping", "Crushing", "Dull", "General Discomfort", "Heavy", "No Pain", "Other", "Pressure", "Sharp", "Stabbing", "Tearing", "Throbbing", "Tight", "Undertermined"];
const painSources = ["Chest cardiac", "Chest respiratory", "Chest musculoskeletal", "Other"];
const radiationSites = ["No radiation / Localized", "Head / Neck", "Chest", "Abdomen", "Left arm", "Right arm", "Other"];
const onsetStates = ["Inactive", "Mild activity", "Intense activity", "Resting", "Sleeping", "Other"];
const pacemaker = ["No", "Unknown", "Pacemaker", "Implanted Defibrillator", "Other"];

const ChestPain = () => {
	const dispatch = useDispatch();
	const chestPain = useSelector(state => state.chestPain);

	const handleChange = (name, value) => dispatch(setChestPain({ name, value }));

	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<Stack direction="row" spacing={2} alignItems="center">
						<Typography variant="button">Pain Severity</Typography>
						<ButtonGroup size="small" aria-label="pain severity button group">
							<Button onClick={() => handleChange('Pain_Severity', (chestPain.Pain_Severity - 1) >= 0 ? chestPain.Pain_Severity - 1 : chestPain.Pain_Severity)}>-</Button>
							<Button disableRipple>{chestPain.Pain_Severity}</Button>
							<Button onClick={() => handleChange('Pain_Severity', chestPain.Pain_Severity + 1)}>+</Button>
						</ButtonGroup>
					</Stack>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						size="small"
						label="Name of the Pre-EMS Medication"
						name="Name_of_PreEMS_Medic"
						value={chestPain.Name_of_PreEMS_Medic}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl>
						<FormLabel id="self-medic-admin-radio-group">Self-Medication Administered</FormLabel>
						<RadioGroup
							row
							aria-labelledby="self-medic-admin-radio-group"
							name="Self_Medic_Admin"
							value={chestPain.Self_Medic_Admin}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
						>
							<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
							<FormControlLabel value="No" control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="response-to-medication-label">Response to Medication</InputLabel>
						<Select
							labelId="response-to-medication-label"
							id="response-to-medication"
							label="Response to Medication"
							defaultValue=""
							value={chestPain.Response_to_Medic}
							onChange={(e) => handleChange('Response_to_Medic', e.target.value)}
						>
							<MenuItem value="No Change">No Change</MenuItem>
							<MenuItem value="Signs and Symptoms Improved">Signs and Symptoms Improved</MenuItem>
							<MenuItem value="Signs and Symptoms Eliminated">Signs and Symptoms Eliminated</MenuItem>
							<MenuItem value="Deteriorated">Deteriorated</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						label="Onset"
						size="small"
						name="Onset"
						placeholder="__:__"
						value={chestPain.Onset}
						onChange={(e) => handleChange('Onset', e.target.value)}
						InputProps={{ inputComponent: OnsetMask }}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						size="small"
						label="Provoked"
						name="Provoked"
						value={chestPain.Provoked}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="quality-label">Quality</InputLabel>
						<Select
							labelId="quality-label"
							id="quality"
							label="Quality"
							defaultValue=""
							value={chestPain.Quality}
							onChange={(e) => handleChange('Quality', e.target.value)}
						>
							{qualityList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{chestPain.Quality === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="Qty_Other"
							value={chestPain.Qty_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{chestPain.Quality === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="Qty_Other"
							value={chestPain.Qty_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="source-of-pain-label">Source of Pain</InputLabel>
						<Select
							labelId="source-of-pain-label"
							id="source-of-pain"
							label="Source of Pain"
							defaultValue=""
							value={chestPain.Source_of_Pain}
							onChange={(e) => handleChange('Source_of_Pain', e.target.value)}
						>
							{painSources.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{chestPain.Source_of_Pain === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="SPain_Other"
							value={chestPain.SPain_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{chestPain.Source_of_Pain === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="SPain_Other"
							value={chestPain.SPain_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="pain-radiation-site-label">Pain Radiation Site</InputLabel>
						<Select
							labelId="pain-radiation-site-label"
							id="pain-radiation-site"
							label="Pain Radiation Site"
							defaultValue=""
							value={chestPain.Pain_radiation_site}
							onChange={(e) => handleChange('Pain_radiation_site', e.target.value)}
						>
							{radiationSites.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{chestPain.Pain_radiation_site === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="PRSite_Other"
							value={chestPain.PRSite_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{chestPain.Pain_radiation_site === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="PRSite_Other"
							value={chestPain.PRSite_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="state-at-onsite-label">State at Onset</InputLabel>
						<Select
							labelId="state-at-onsite-label"
							id="state-at-onsite"
							label="State at Onset"
							defaultValue=""
							value={chestPain.State_at_Onset}
							onChange={(e) => handleChange('State_at_Onset', e.target.value)}
						>
							{onsetStates.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{chestPain.State_at_Onset === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="SOnset_Other"
							value={chestPain.SOnset_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{chestPain.State_at_Onset === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="SOnset_Other"
							value={chestPain.SOnset_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="pace-implant-defib-label">Pacemaker/Implant Defibrillator</InputLabel>
						<Select
							labelId="pace-implant-defib-label"
							id="pace-implant-defib"
							label="Pacemaker / Implant Defibrillator"
							defaultValue=""
							value={chestPain.Pace_Implant_Defib}
							onChange={(e) => handleChange('Pace_Implant_Defib', e.target.value)}
						>
							{pacemaker.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{chestPain.Pace_Implant_Defib === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="PIDefib_Other"
							value={chestPain.PIDefib_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{chestPain.Pace_Implant_Defib === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="PIDefib_Other"
							value={chestPain.PIDefib_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
			</Grid>
		</Container>
	);
};

export default ChestPain;
