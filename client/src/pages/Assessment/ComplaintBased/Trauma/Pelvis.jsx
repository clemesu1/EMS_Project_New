import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTraumaAssessment } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const Pelvis = () => {
	let dispatch = useDispatch();
	let traumaAssessment = useSelector(state => state.traumaAssessment);

	const handleChange = (name, value) => dispatch(setTraumaAssessment({ name, value }));

	return (
		<Container>
			<Grid container spacing={3} justifyContent="center">
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="vaginal-label">Vaginal</InputLabel>
						<Select
							labelId="vaginal-label"
							id="vaginal"
							label="Vaginal"
							defaultValue=""
							value={traumaAssessment.P_Vaginal}
							onChange={(e) => handleChange('P_Vaginal', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="genitalia-label">Genitalia</InputLabel>
						<Select
							labelId="genitalia-label"
							id="genitalia"
							label="Genitalia"
							defaultValue=""
							value={traumaAssessment.P_Genitalia}
							onChange={(e) => handleChange('P_Genitalia', e.target.value)}
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

export default Pelvis;
