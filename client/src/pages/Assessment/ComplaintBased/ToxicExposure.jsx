import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setToxicExposure } from '../../../features/toxicExposure';
import { setAmount, setUnit } from '../../../features/substanceData';
import { Button, FormControl, FormLabel, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

const substanceNames = ["Amobarbital (Sodium Amytal; hypnotics) ", "Aprobarbital (hypnotic) ", "Butabarbital (hypnotics) ", "Butalbital (Fiorinal; sedative) ", "Hexobarbital (Sombulex; hypnotic/anesthetic) ", "Methylphenobarbital (Mebaral; antianxiety, anticonvulsant) ", "Pentobarbital (Nembutal; hypnotic) ", "Phenobarbital (Luminal; hypnotic, sedative, anticonvulsant) ", "Secobarbital (Seconal; hypnotic) ", "Sodium thiopental ", "Talbutal (Lotusate; hypnotic) ", "Thiobarbital (anesthetic) ", "Narcotic", "Heroin ", "Morphine ", "Opium ", "Cocaine", "Alcohol", "Prescription drugs"];
const substanceTypes = ["Unknown", "Medications", "Alcohol", "Chemicals", "Plants", "Food", "Venom", "Radioactive material", "Smoke / Gas", "Other"];
const entryRoutes = ["Absorption", "Bite / Sting", "Ingestion", "Inhalation", "Injection", "Other", "Unknown"];
const reactionTypes = ["GI disturbances", "Local reaction", "Loss of consciousness", "Other", "Respiratory distress", "Systemic symptoms"];
const evidenceTypes = ["Containers", "Odour", "Other", "Paraphernalia", "Physical Signs", "Pills", "Traces of subtances found"];

const ToxicExposure = () => {
	let dispatch = useDispatch();
	let toxicExposure = useSelector(state => state.toxicExposure);
	let substanceData = useSelector(state => state.substanceData);

	const handleChange = (name, value) => dispatch(setToxicExposure({ name, value }));
	const handleAmountChange = (value) => dispatch(setAmount(value));
	const handleUnitChange = (value) => dispatch(setUnit(value));


	const disableInput = (event) => event.preventDefault();

	return (
		<Grid container spacing={3} alignItems="center">
			<Grid item xs={12}>
				<TextField
					label="Duration"
					size="small"
					fullWidth
					name="Duration"
					id="duration"
					value={toxicExposure.Duration}
					onChange={(e) => handleChange(e.target.name, e.target.value)}
				/>
			</Grid>
			<Grid item xs={12} md={6}>
				<FormControl fullWidth size="small">
					<InputLabel id="nature-of-expo-label">Nature of Exposure</InputLabel>
					<Select
						labelId="nature-of-expo-label"
						id="nature-of-expo"
						label="Nature of Exposure"
						defaultValue=""
						value={toxicExposure.Nature_of_Expo}
						onChange={(e) => handleChange('Nature_of_Expo', e.target.value)}
					>
						<MenuItem value="Accidental">Accidental</MenuItem>
						<MenuItem value="Intentional (self-inflicted)">Intentional (self-inflicted)</MenuItem>
						<MenuItem value="Unknown">Unknown</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6}>
				<Stack direction="row" spacing={2} alignItems="center">
					<Button onClick={() => handleChange('Exposure_time', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Time of Exposure</Button>
					<TextField onKeyDown={disableInput} onClick={() => handleChange('Exposure_time', new Date().toLocaleTimeString('en-US'))} value={toxicExposure.Exposure_time} fullWidth size="small" />
				</Stack>
			</Grid>
			<Grid item xs={12} md={6}>
				<FormControl fullWidth size="small">
					<InputLabel id="name-of-substance-label">Name of Substance</InputLabel>
					<Select
						labelId="name-of-substance-label"
						id="name-of-substance"
						label="Name of Substance"
						defaultValue=""
						value={toxicExposure.Name_of_substance}
						onChange={(e) => handleChange('Name_of_substance', e.target.value)}
					>
						{substanceNames.map((item, index) => (
							<MenuItem key={index} value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item container spacing={1} xs={12} md={6}>
				<Grid item xs={12}>
					<Typography color="textSecondary">Amount of Substance</Typography>
				</Grid>
				<Grid item xs={6}>
					<TextField
						label="Amount"
						size="small"
						fullWidth
						placeholder="0"
						name="substanceAmount"
						id="substance-amount"
						value={substanceData.amount}
						onChange={(e) => {
							handleAmountChange(e.target.value);
							handleChange('Amount_of_substance', `${substanceData.amount} ${substanceData.unit}`);
						}}
					/>
				</Grid>
				<Grid item xs={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="unit-label">Unit</InputLabel>
						<Select
							labelId="unit-label"
							id="unit"
							label="Unit"
							value={substanceData.unit}
							onChange={(e) => {
								handleUnitChange(e.target.value);
								handleChange('Amount_of_substance', `${substanceData.amount} ${substanceData.unit}`);
							}}
						>
							<MenuItem value="mcg">mcg</MenuItem>
							<MenuItem value="mg">mg</MenuItem>
							<MenuItem value="g">g</MenuItem>
							<MenuItem value="ml">ml</MenuItem>
							<MenuItem value="l">l</MenuItem>
							<MenuItem value="tablets">tablets</MenuItem>
							<MenuItem value="oz">oz</MenuItem>
						</Select>
					</FormControl>
				</Grid>
			</Grid>
			<Grid item xs={12} md={6}>
				<FormControl fullWidth size="small">
					<InputLabel id="type-of-substance-label">Type of Substance</InputLabel>
					<Select
						labelId="type-of-substance-label"
						id="type-of-substance"
						label="Type of Substance"
						defaultValue=""
						value={toxicExposure.Type_of_substance}
						onChange={(e) => handleChange('Type_of_substance', e.target.value)}
					>
						{substanceTypes.map((item, index) => (
							<MenuItem key={index} value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
				{toxicExposure.Type_of_substance === 'Other' &&
					<TextField
						size="small"
						label="Other"
						name="Typ_sub_Other"
						value={toxicExposure.Typ_sub_Other}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				}
			</Grid>
			{toxicExposure.Type_of_substance === 'Other' &&
				<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
					<TextField
						size="small"
						label="Other"
						name="Typ_sub_Other"
						value={toxicExposure.Typ_sub_Other}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				</Grid>
			}
			<Grid item xs={12} md={6}>
				<FormControl fullWidth size="small">
					<InputLabel id="route-of-entry-label">Route of Entry</InputLabel>
					<Select
						 labelId="route-of-entry-label"
						 id="route-of-entry"
						 label="Route of Entry"
						defaultValue=""
						value={toxicExposure.Route_of_entry}
						onChange={(e) => handleChange('Route_of_entry', e.target.value)}
					>
						{entryRoutes.map((item, index) => (
							<MenuItem key={index} value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
				{toxicExposure.Route_of_entry === 'Other' &&
					<TextField
						size="small"
						label="Other"
						name="Route_Other"
						value={toxicExposure.Route_Other}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				}
			</Grid>
			{toxicExposure.Route_of_entry === 'Other' &&
				<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
					<TextField
						size="small"
						label="Other"
						name="Route_Other"
						value={toxicExposure.Route_Other}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				</Grid>
			}
			<Grid item xs={12} md={6}>
				<FormControl fullWidth size="small">
				<InputLabel id="type-of-reaction-label">Type of Reaction to Substance</InputLabel>
					<Select
						labelId="type-of-reaction-label"
						id="type-of-reaction"
						label="Type of Reaction to Substance"
						defaultValue=""
						value={toxicExposure.Type_of_reaction}
						onChange={(e) => handleChange('Type_of_reaction', e.target.value)}
					>
						{reactionTypes.map((item, index) => (
							<MenuItem key={index} value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
				{toxicExposure.Type_of_reaction === 'Other' &&
					<TextField
						size="small"
						label="Other"
						name="Reaction_Other"
						value={toxicExposure.Reaction_Other}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				}
			</Grid>
			{toxicExposure.Type_of_reaction === 'Other' &&
				<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
					<TextField
						size="small"
						label="Other"
						name="Reaction_Other"
						value={toxicExposure.Reaction_Other}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				</Grid>
			}
			<Grid item xs={12} md={6}>
				<FormControl fullWidth size="small">
				<InputLabel id="evidence-of-substance-label">Evidence of Substance</InputLabel>
					<Select
						labelId="evidence-of-substance-label"
						id="evidence-of-substance"
						label="Evidence of Substance"
						defaultValue=""
						value={toxicExposure.Evidence}
						onChange={(e) => handleChange('Evidence', e.target.value)}
					>
						{evidenceTypes.map((item, index) => (
							<MenuItem key={index} value={item}>{item}</MenuItem>
						))}
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
				{toxicExposure.Evidence === 'Other' &&
					<TextField
						size="small"
						label="Other"
						name="Evidence_Other"
						value={toxicExposure.Evidence_Other}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				}
			</Grid>
			{toxicExposure.Evidence === 'Other' &&
				<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
					<TextField
						size="small"
						label="Other"
						name="Evidence_Other"
						value={toxicExposure.Evidence_Other}
						onChange={(e) => handleChange(e.target.name, e.target.value)}
						fullWidth
					/>
				</Grid>
			}
		</Grid>
	);
};

export default ToxicExposure;
