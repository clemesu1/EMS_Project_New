import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientHistory, toggleBodySystemItem } from '../../../features/patientHistory';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TimePicker from '@mui/lab/TimePicker';

const bodySystems = ['Cardiovascular', 'Central Nervous System', 'Endocrine', 'GI', 'Integumentary', 'Musculoskeletal', 'Renal', 'Reproductive', 'Respiratory'];
const coResponders = ["Law Enforcement", "Fire", "Other First Responders", "None"]
const destinationConditions = ["Stable", "Improved", "Deteriorated"]
const treatmentsProvided = ["Yes", "No", "Unknown", "Not applicable"]
const suspectedIntoxication = ["Yes as reported by patient", "Yes as reported by bystander", "Yes as suspected by provider", "Not suspected"];

const General = () => {
	let dispatch = useDispatch();
	let patientHistory = useSelector(state => state.patientHistory);

	const handleChange = (name, value) => dispatch(setPatientHistory({ name, value }));

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>

			<Grid container spacing={3}>
				<Grid item xs={12}>
					<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
						<FormControl component="fieldset" sx={{ display: { xs: 'none', sm: 'block' } }}>
							<FormLabel component="legend">Body System</FormLabel>
							<FormGroup row >
								{bodySystems.map((item, index) => (
									<FormControlLabel
										key={index}
										label={item}
										control={
											<Checkbox
												checked={patientHistory.G_BodySystem.indexOf(item) !== -1}
												onChange={() => dispatch(toggleBodySystemItem(item))}
											/>
										}
									/>
								))}
							</FormGroup>
						</FormControl>
						<FormControl component="fieldset" sx={{ display: { xs: 'block', sm: 'none' } }}>
							<FormLabel component="legend">Body System</FormLabel>
							<FormGroup >
								{bodySystems.map((item, index) => (
									<FormControlLabel
										key={index}
										label={item}
										control={
											<Checkbox
												checked={patientHistory.G_BodySystem.indexOf(item) !== -1}
												onChange={() => dispatch(toggleBodySystemItem(item))}
											/>
										}
									/>
								))}
							</FormGroup>
						</FormControl>
					</Paper>
				</Grid>
				<Grid item xs={12} md={6}>
					<DatePicker
						label="Date of Injury"
						defaultValue={new Date()}
						value={new Date(patientHistory.G_Inj_Date)}
						onChange={(newValue) => handleChange('G_Inj_Date', newValue.toString())}
						renderInput={(params) => <TextField fullWidth size="small" {...params} />}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField 
						label="Time of Injury"
						size="small"
						fullWidth
						type="time"
						InputLabelProps={{
							shrink: true,
						  }}
						defaultValue=""
						value={patientHistory.G_Inj_Time}
						onChange={(e) => handleChange('G_Inj_Time', e.target.value)}	
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="g-co-responders-label">Co-Responders</InputLabel>
						<Select
							labelId="g-co-responders-label"
							id="g-co-responders"
							name="G_Co_Responders"
							label="Co-Responders"
							defaultValue=""
							value={patientHistory.G_Co_Responders}
							onChange={(e) => handleChange('G_Co_Responders', e.target.value)}
						>
							{coResponders.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="g-treatment-rendered-label">Treatment Provided by Co-Responders</InputLabel>
						<Select
							labelId="g-treatment-rendered-label"
							id="g-treatment-rendered"
							name="G_Co_Responders"
							label="Treatment Provided by Co-Responders"
							defaultValue=""
							value={patientHistory.G_Treat_Rendered}
							onChange={(e) => handleChange('G_Treat_Rendered', e.target.value)}
						>
							{treatmentsProvided.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="g-pt-condi-dest-label">Patient Condition at Destination</InputLabel>
						<Select
							labelId="g-pt-condi-dest-label"
							id="g-pt-condi-dest"
							name="G_Pt_Condi_Dest"
							label="Patient Condition at Destination"
							defaultValue=""
							value={patientHistory.G_Pt_Condi_Dest}
							onChange={(e) => handleChange('G_Pt_Condi_Dest', e.target.value)}
						>
							{destinationConditions.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<Stack spacing={3} direction="row" alignItems="center">
						<Typography color="textSecondary" sx={{ width: '50%' }}>Patient Displacement</Typography>
						<FormControl fullWidth size="small">
							{/* <FormLabel id="patient-displacement-label">Patient Displacement</FormLabel> */}
							<RadioGroup
								row
								aria-labelledby="dpatient-displacement-label"
								name="patient-displacement"
								value={patientHistory.G_Pt_Disp}
								onChange={(e) => handleChange('G_Pt_Disp', e.target.value)}
							>
								<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
								<FormControlLabel value="No" control={<Radio />} label="No" />
							</RadioGroup>
						</FormControl>
					</Stack>
				</Grid>
				<Grid item xs={12} md={10}>
					<FormControl fullWidth size="small">
						<InputLabel id="g-susp-intoxi-label">Suspected Intoxication</InputLabel>
						<Select
							labelId="g-susp-intoxi-label"
							id="g-susp-intoxi"
							name="G_Susp_Intoxi"
							label="Suspected Intoxication"
							defaultValue=""
							value={patientHistory.G_Susp_Intoxi}
							onChange={(e) => handleChange('G_Susp_Intoxi', e.target.value)}
						>
							{suspectedIntoxication.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={2}>
					<FormControlLabel control={<Checkbox checked={patientHistory.G_DNR_Order} name="G_DNR_Order" onChange={(e) => handleChange('G_DNR_Order', e.target.checked)} />} label="DNR Order" />
				</Grid>
			</Grid>
		</LocalizationProvider>
	);
};

export default General;
