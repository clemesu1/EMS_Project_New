import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSeizureAssessment } from '../../../features/seizureAssessment';
import { Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';


const Seizure = () => {
	let dispatch = useDispatch();
	let seizureAssessment = useSelector(state => state.seizureAssessment);

	const handleChange = (name, value) => dispatch(setSeizureAssessment({ name, value }));

	return (
		<Container>
			<Grid container spacing={3} alignItems="stretch">
				<Grid item xs={12} md={6}>
					<FormControl>
						<FormLabel id="witnessed-seizure-radio-group">Witnessed Seizure</FormLabel>
						<RadioGroup
							row
							aria-labelledby="witnessed-seizure-radio-group"
							name="Witnessed_Seizure"
							value={seizureAssessment.Witnessed_Seizure}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
						>
							<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
							<FormControlLabel value="No" control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<Stack spacing={3}>
						<FormControl fullWidth size="small">
							<InputLabel id="cause-label">Suspected Cause of Seizure</InputLabel>
							<Select
								labelId="cause-label"
								id="cause"
								label="Suspected Cause of Seizure"
								defaultValue=""
								value={seizureAssessment.Cause}
								onChange={(e) => handleChange('Cause', e.target.value)}
							>
								<MenuItem value={"Diabetes"}>Diabetes</MenuItem>
								<MenuItem value={"Epilepsy"}>Epilepsy</MenuItem>
								<MenuItem value={"Fever"}>Fever</MenuItem>
								<MenuItem value={"Over Dose"}>Over Dose</MenuItem>
								<MenuItem value={"Trauma"}>Trauma</MenuItem>
								<MenuItem value={"Other"}>Other</MenuItem>
							</Select>
						</FormControl>
						{seizureAssessment.Cause === 'Other' &&
							<TextField
								size="small"
								label="Other"
								name="Cause_Other"
								value={seizureAssessment.Cause_Other}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
								fullWidth
							/>
						}
					</Stack>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="witness-of-seizure-label">Witness of Seizure</InputLabel>
						<Select
							labelId="witness-of-seizure-label"
							id="witness-of-seizure"
							label="Witness of Seizure"
							defaultValue=""
							value={seizureAssessment.Witness_of_Seizure}
							onChange={(e) => handleChange('Witness_of_Seizure', e.target.value)}
						>
							<MenuItem value={"Family / Friend"}>Family / Friend</MenuItem>
							<MenuItem value={"Bystander"}>Bystander</MenuItem>
							<MenuItem value={"Fire service personnel"}>Fire service personnel</MenuItem>
							<MenuItem value={"Law enforcement personnel"}>Law enforcement personnel</MenuItem>
							<MenuItem value={"Other first responder"}>Other first responder</MenuItem>
							<MenuItem value={"Ambulance Crew"}>Trauma</MenuItem>
							<MenuItem value={"Other"}>Other</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{seizureAssessment.Witness_of_Seizure === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="S_Other"
							value={seizureAssessment.S_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{seizureAssessment.Witness_of_Seizure === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="S_Other"
							value={seizureAssessment.S_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="type-of-seizure-label">Type of Seizure</InputLabel>
						<Select
							labelId="type-of-seizure-label"
							id="type-of-seizure"
							label="Type of Seizure"
							defaultValue=""
							value={seizureAssessment.Type_of_Seizure}
							onChange={(e) => handleChange('Type_of_Seizure', e.target.value)}
						>
							<MenuItem value={"Grand Mal"}>Grand Mal</MenuItem>
							<MenuItem value={"Petit Mal"}>Petit Mal</MenuItem>
							<MenuItem value={"Focal"}>Focal</MenuItem>
							<MenuItem value={"Jacksonian"}>Jacksonian</MenuItem>
							<MenuItem value={"Other"}>Other</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{seizureAssessment.Type_of_Seizure === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="Type_Other"
							value={seizureAssessment.Type_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{seizureAssessment.Type_of_Seizure === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="Type_Other"
							value={seizureAssessment.Type_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<Stack direction="row" spacing={2} alignItems="center">
						<Typography variant="button">Seizure Duration</Typography>
						<ButtonGroup size="small" orientation="vertical" aria-label="seizure duration minute button group">
							<Button onClick={() => handleChange('Seiz_Duration', seizureAssessment.Seiz_Duration + 1)}>+</Button>
							<Button disableRipple>{seizureAssessment.Seiz_Duration}</Button>
							<Button onClick={() => handleChange('Seiz_Duration', (seizureAssessment.Seiz_Duration - 1) >= 0 ? seizureAssessment.Seiz_Duration - 1 : seizureAssessment.Seiz_Duration)}>-</Button>
						</ButtonGroup>
						<Typography variant="subtitle2">min</Typography>
					</Stack>
				</Grid>
				<Grid item xs={12} md={6}>
					<Stack direction="row" spacing={2} alignItems="center">
						<Typography variant="button">Number of Seizures</Typography>
						<ButtonGroup size="small" orientation="vertical" aria-label="number of seizures minute button group">
							<Button onClick={() => handleChange('No_of_Seizure', seizureAssessment.No_of_Seizure + 1)}>+</Button>
							<Button disableRipple>{seizureAssessment.No_of_Seizure}</Button>
							<Button onClick={() => handleChange('No_of_Seizure', (seizureAssessment.No_of_Seizure - 1) >= 0 ? seizureAssessment.No_of_Seizure - 1 : seizureAssessment.No_of_Seizure)}>-</Button>
						</ButtonGroup>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Seizure;
