import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTraumaAssessment } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const UpperExtremities = () => {
	let dispatch = useDispatch();
	let traumaAssessment = useSelector(state => state.traumaAssessment);

	const handleChange = (name, value) => dispatch(setTraumaAssessment({ name, value }));

	return (
		<Container>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="left-arm-label">Left Arm</InputLabel>
						<Select
							labelId="left-arm-label"
							id="left-arm"
							label="Left Arm"
							defaultValue=""
							value={traumaAssessment.UE_LArm}
							onChange={(e) => handleChange('UE_LArm', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="right-arm-label">Right Arm</InputLabel>
						<Select
							labelId="right-arm-label"
							id="right-arm"
							label="Right Arm"
							defaultValue=""
							value={traumaAssessment.UE_RArm}
							onChange={(e) => handleChange('UE_RArm', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="left-hand-label">Left Hand</InputLabel>
						<Select
							labelId="left-hand-label"
							id="left-hand"
							label="Left Hand"
							defaultValue=""
							value={traumaAssessment.UE_LHand}
							onChange={(e) => handleChange('UE_LHand', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} >
					<FormControl fullWidth size="small">
						<InputLabel id="right-hand-label">Right Hand</InputLabel>
						<Select
							labelId="right-hand-label"
							id="right-hand"
							label="Right Hand"
							defaultValue=""
							value={traumaAssessment.UE_RHand}
							onChange={(e) => handleChange('UE_RHand', e.target.value)}
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

export default UpperExtremities;
