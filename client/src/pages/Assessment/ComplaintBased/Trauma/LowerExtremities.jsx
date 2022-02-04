import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTraumaAssessment } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const LowerExtremities = () => {
	let dispatch = useDispatch();
	let traumaAssessment = useSelector(state => state.traumaAssessment);

	const handleChange = (name, value) => dispatch(setTraumaAssessment({ name, value }));

	return (
		<Container>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="left-leg-label">Left Leg</InputLabel>
						<Select
							labelId="left-leg-label"
							id="left-leg"
							label="Left Leg"
							defaultValue=""
							value={traumaAssessment.LE_LLeg}
							onChange={(e) => handleChange('LE_LLeg', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="right-leg-label">Right Leg</InputLabel>
						<Select
							labelId="right-leg-label"
							id="right-leg"
							label="Right Leg"
							defaultValue=""
							value={traumaAssessment.LE_RLeg}
							onChange={(e) => handleChange('LE_RLeg', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="left-foot-label">Left Foot</InputLabel>
						<Select
							labelId="left-foot-label"
							id="left-foot"
							label="Left Foot"
							defaultValue=""
							value={traumaAssessment.LE_LFoot}
							onChange={(e) => handleChange('LE_LFoot', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="right-foot-label">Right Foot</InputLabel>
						<Select
							labelId="right-foot-label"
							id="right-foot"
							label="Right Foot"
							defaultValue=""
							value={traumaAssessment.LE_RFoot}
							onChange={(e) => handleChange('LE_RFoot', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
			</Grid>
		</Container>
	);
};

export default LowerExtremities;
