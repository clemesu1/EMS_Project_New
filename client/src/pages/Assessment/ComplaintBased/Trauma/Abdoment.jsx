import { Container, FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTraumaAssessment } from '../../../../features/traumaAssessment';

const traumaList = ["Deformity", "Contusions", "Crepitus", "Abrasions", "Avulsions", "Punctures", "Paradoxical Mov't", "Burn - Superficial", "Burn - partial", "Burn - full", "Burn - circumferencial", "Lacerations ", "Pulsating Mass", "Swelling", "Discolouration", "Gaurding", "Tenderness", "Instability ", "Rigidity", "Tracheal Deviation", "JVD (Jugular vien distention)", "Flail Segment", "SQ Emphysema", "Shortening - ext rot", "Shortening - int rot", "Shortening - no rot", "Amputation - complete", "Amputation - partial"];

const Abdoment = () => {
	let dispatch = useDispatch();
	let traumaAssessment = useSelector(state => state.traumaAssessment);

	const handleChange = (name, value) => dispatch(setTraumaAssessment({ name, value }));

	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="luq-label">Left Upper Quadrant</InputLabel>
						<Select
							labelId="luq-label"
							id="luq"
							label="Left Upper Quadrant"
							defaultValue=""
							value={traumaAssessment.Ab_LUQ}
							onChange={(e) => handleChange('Ab_LUQ', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="ruq-label">Right Upper Quadrant</InputLabel>
						<Select
							labelId="ruq-label"
							id="ruq"
							label="Right Upper Quadrant"
							defaultValue=""
							value={traumaAssessment.Ab_RUQ}
							onChange={(e) => handleChange('Ab_RUQ', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="ubq-label">Umbilicus</InputLabel>
						<Select
							labelId="ubq-label"
							id="ubq"
							label="Umbilicus"
							defaultValue=""
							value={traumaAssessment.Ab_UBQ}
							onChange={(e) => handleChange('Ab_UBQ', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="llq-label">Left Lower Quadrant</InputLabel>
						<Select
							labelId="llq-label"
							id="llq"
							label="Left Lower Quadrant"
							defaultValue=""
							value={traumaAssessment.Ab_LLQ}
							onChange={(e) => handleChange('Ab_LLQ', e.target.value)}
						>
							{traumaList.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} lg={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="rlq-label">Right Lower Quadrant</InputLabel>
						<Select
							labelId="rlq-label"
							id="rlq"
							label="Right Lower Quadrant"
							defaultValue=""
							value={traumaAssessment.Ab_RLQ}
							onChange={(e) => handleChange('Ab_RLQ', e.target.value)}
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

export default Abdoment;
