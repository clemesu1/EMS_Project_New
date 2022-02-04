import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTraumaAssessment } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const Back = () => {
	let dispatch = useDispatch();
	let traumaAssessment = useSelector(state => state.traumaAssessment);

	const handleChange = (name, value) => dispatch(setTraumaAssessment({ name, value }));

	return (
		<Container>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="thoratic-label">Thoratic</InputLabel>
						<Select
							labelId="thoratic-label"
							id="thoratic"
							label="Thoratic"
							defaultValue=""
							value={traumaAssessment.B_Thoratic}
							onChange={(e) => handleChange('B_Thoratic', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="lumbar-label">Lumbar</InputLabel>
						<Select
							labelId="lumbar-label"
							id="lumbar"
							label="Lumbar"
							defaultValue=""
							value={traumaAssessment.B_Lumbar}
							onChange={(e) => handleChange('B_Lumbar', e.target.value)}
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

export default Back;
