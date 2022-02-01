import React from 'react';
import { FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientDetails } from '../../features/patientDetails';

const races = ["African American", "Asian", "Caucasian", "Hispanic", "Latino", "Native"];
const medicareOrigins = ["NB", "NS", "PE", "NF", "QC", "ON", "MAN", "SK", "AB", "BC", "Yukon", "NWT", "Nunavut"];

const PatientDetails = () => {
	let dispatch = useDispatch();
	let patientDetails = useSelector(state => state.patientDetails);

	const handleChange = (name, value) => dispatch(setPatientDetails({ name, value }));

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={6}>
				<TextField
					label="First Name"
					fullWidth
					size="small"
					value={patientDetails.Given_Name}
					onChange={(e) => handleChange('Given_Name', e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<TextField
					label="Last Name"
					fullWidth
					size="small"
					value={patientDetails.Surname}
					onChange={(e) => handleChange('Surname', e.target.value)}
				/>
			</Grid>
			<Grid item xs={6} md={12}>
				<TextField
					label="Street Address"
					fullWidth
					size="small"
					value={patientDetails.Street}
					onChange={(e) => handleChange('Street', e.target.value)}
				/>
			</Grid>
			<Grid item xs={6} md={4}>
				<TextField
					label="City"
					fullWidth
					size="small"
					value={patientDetails.Community}
					onChange={(e) => handleChange('Community', e.target.value)}
				/>
			</Grid>
			<Grid item xs={6} md={4}>
				<TextField
					label="Province"
					fullWidth
					size="small"
					value={patientDetails.Province}
					onChange={(e) => handleChange('Province', e.target.value)}
				/>
			</Grid>
			<Grid item xs={6} md={4}>
				<TextField
					label="Postal Code"
					fullWidth
					size="small"
					value={patientDetails.PostalCode}
					onChange={(e) => handleChange('PostalCode', e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					label="Country"
					fullWidth
					size="small"
					value={patientDetails.Country}
					onChange={(e) => handleChange('Country', e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					label="Telephone No."
					fullWidth
					size="small"
					value={patientDetails.Tel_No}
					onChange={(e) => handleChange('Tel_No', e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<FormControl size="small" fullWidth>
					<InputLabel id="race-label">Race</InputLabel>
					<Select
						labelId="race-label"
						id="race"
						name="Race"
						label="Race"
						defaultValue=""
						value={patientDetails.Race}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					>
						{races.map((item, index) => (
							<MenuItem key={index} value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					label="Date of Birth"
					fullWidth
					size="small"
					value={patientDetails.DOB}
					onChange={(e) => handleChange('DOB', e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					label="Age"
					fullWidth
					size="small"
					pattern="[0-9]*"
					value={patientDetails.Age}
					onChange={(e) => handleChange('Age', e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<FormControl size="small" fullWidth>
					<FormLabel id="gender-radio-group-label">Gender</FormLabel>
					<RadioGroup
						row
						aria-labelledby="gender-radio-group-label"
						name="gender-radio-group"
						value={patientDetails.Gender}
						onChange={(event, value) => handleChange('Gender', value)}
					>
						<FormControlLabel value="female" control={<Radio />} label="Female" />
						<FormControlLabel value="male" control={<Radio />} label="Male" />
						<FormControlLabel value="other" control={<Radio />} label="Other" />
					</RadioGroup>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					label="Medicare No."
					fullWidth
					size="small"
					value={patientDetails.Medicare_No}
					onChange={(e) => handleChange('Medicare_No', e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} md={4}>
				<FormControl size="small" fullWidth>
					<InputLabel id="medicare-origin-label">Medicare Origin</InputLabel>
					<Select
						labelId="medicare-origin-label"
						id="medicare-origin"
						name="Medicare_Origin"
						label="Medicare Origin"
						defaultValue=""
						value={patientDetails.Medicare_Origin}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
					>
						{medicareOrigins.map((item, index) => (
							<MenuItem key={index} value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={4}>
				<TextField
					label="Hospital Chart No."
					fullWidth
					size="small"
					value={patientDetails.Hospital_Chart_No}
					onChange={(e) => handleChange('Hospital_Chart_No', e.target.value)}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					label="Comments"
					fullWidth
					size="small"
					multiline
					rows={6}
					value={patientDetails.P_Comments}
					onChange={(e) => handleChange('P_Comments', e.target.value)}
				/>
			</Grid>
		</Grid>
	);
};

export default PatientDetails;
