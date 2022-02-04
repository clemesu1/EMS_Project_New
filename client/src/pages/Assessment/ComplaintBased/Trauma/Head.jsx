import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTraumaAssessment } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const Head = () => {
	let dispatch = useDispatch();
	let traumaAssessment = useSelector(state => state.traumaAssessment);

	const handleChange = (name, value) => dispatch(setTraumaAssessment({ name, value }));

	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="face-label">Face</InputLabel>
						<Select
							labelId="face-label"
							id="face"
							label="Face"
							defaultValue=""
							value={traumaAssessment.H_Face}
							onChange={(e) => handleChange('H_Face', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="r-ear-label">Right Ear</InputLabel>
						<Select
							labelId="r-ear-label"
							id="r-ear"
							label="Right Ear"
							defaultValue=""
							value={traumaAssessment.H_REar}
							onChange={(e) => handleChange('H_REar', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="nose-label">Nose</InputLabel>
						<Select
							labelId="nose-label"
							id="nose"
							label="Nose"
							defaultValue=""
							value={traumaAssessment.H_Nose}
							onChange={(e) => handleChange('H_Nose', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="mouth-label">Mouth</InputLabel>
						<Select
							labelId="mouth-label"
							id="mouth"
							label="Mouth"
							defaultValue=""
							value={traumaAssessment.H_Mouth}
							onChange={(e) => handleChange('H_Mouth', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="l-ear-label">Left Ear</InputLabel>
						<Select
							labelId="l-ear-label"
							id="l-ear"
							label="Left Ear"
							defaultValue=""
							value={traumaAssessment.H_LEar}
							onChange={(e) => handleChange('H_LEar', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="scalp-label">Scalp</InputLabel>
						<Select
							labelId="scalp-label"
							id="scalp"
							label="Scalp"
							defaultValue=""
							value={traumaAssessment.H_Scalp}
							onChange={(e) => handleChange('H_Scalp', e.target.value)}
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

export default Head;
