import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setNeonatalAssessment } from '../../../features/neonatalAssessment';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';

const Neonatal = () => {
	let dispatch = useDispatch();
	let neonatalAssessment = useSelector(state => state.neonatalAssessment);

	const handleChange = (name, value) => dispatch(setNeonatalAssessment({ name, value }));
	const disableInput = (event) => event.preventDefault();

	const [min1_Total, setMin1Total] = useState(0);
	const [min5_Total, setMin5Total] = useState(0);

	useEffect(() => {
		setMin1Total(neonatalAssessment.min1_Colour + neonatalAssessment.min1_Heartrate + neonatalAssessment.min1_Muscletone + neonatalAssessment.min1_Reflexirrit + neonatalAssessment.min1_Respeffort);
	}, [neonatalAssessment, min1_Total])

	useEffect(() => {
		setMin5Total(neonatalAssessment.min5_Colour + neonatalAssessment.min5_Heartrate + neonatalAssessment.min5_Muscletone + neonatalAssessment.min5_Reflexirrit + neonatalAssessment.min5_Respeffort);
	}, [neonatalAssessment, min5_Total])

	useEffect(() => {
		if (neonatalAssessment.min1_Colour !== ""
			&& neonatalAssessment.min1_Heartrate !== ""
			&& neonatalAssessment.min1_Reflexirrit !== ""
			&& neonatalAssessment.min1_Muscletone !== ""
			&& neonatalAssessment.min1_Respeffort !== "") {
			handleChange('min1_Total', min1_Total);
		}
		if (neonatalAssessment.min5_Colour !== ""
			&& neonatalAssessment.min5_Heartrate !== ""
			&& neonatalAssessment.min5_Reflexirrit !== ""
			&& neonatalAssessment.min5_Muscletone !== ""
			&& neonatalAssessment.min5_Respeffort !== "") {
			handleChange('min5_Total', min5_Total);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [min1_Total, min5_Total])

	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={12} lg={6}>
					<Stack direction="row" spacing={2} alignItems="center">
						<Button onClick={() => handleChange('Infant_Time_Breath', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Infant Time of Breathing</Button>
						<TextField onKeyDown={disableInput} onClick={() => handleChange('Infant_Time_Breath', new Date().toLocaleTimeString('en-US'))} value={neonatalAssessment.Infant_Time_Breath} fullWidth size="small" />
					</Stack>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', lg: 'block' } }}>
				</Grid>
				<Grid item container xs={12} md={6} spacing={3}>
					<Grid item xs={12} textAlign="center">
						<Typography variant="h6" gutterBottom>1 Minute</Typography>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min1-color-label">Color</InputLabel>
							<Select
								labelId="min1-color-label"
								id="min1-color"
								label="Color"
								defaultValue=""
								value={neonatalAssessment.min1_Colour}
								onChange={(e) => handleChange('min1_Colour', e.target.value)}
							>
								<MenuItem value={0}>0 (blue, pale)</MenuItem>
								<MenuItem value={1}>1 (body pink, extremities blue)</MenuItem>
								<MenuItem value={2}>2 (completely pink)</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min1-heartrate-label">Heart Rate</InputLabel>
							<Select
								labelId="min1-heartrate-label"
								id="min1-heartrate"
								label="Heart Rate"
								defaultValue=""
								value={neonatalAssessment.min1_Heartrate}
								onChange={(e) => handleChange('min1_Heartrate', e.target.value)}
							>
								<MenuItem value={0}>{'0 (absent)'}</MenuItem>
								<MenuItem value={1}>{'1 (slow <= 100)'}</MenuItem>
								<MenuItem value={2}>{'2 (normal >= 100)'}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min1-reflexirrit-label">Reflex Irritability</InputLabel>
							<Select
								labelId="min1-reflexirrit-label"
								id="min1-reflexirrit"
								label="Reflex Irritability"
								defaultValue=""
								value={neonatalAssessment.min1_Reflexirrit}
								onChange={(e) => handleChange('min1_Reflexirrit', e.target.value)}
							>
								<MenuItem value={0}>{'0 (No response)'}</MenuItem>
								<MenuItem value={1}>{'1 (slight motion, weak cry)'}</MenuItem>
								<MenuItem value={2}>{'2 (strong cry, extremity retraction)'}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min1-muscletone-label">Muscle Tone</InputLabel>
							<Select
								labelId="min1-muscletone-label"
								id="min1-muscletone"
								label="Muscle Tone"
								defaultValue=""
								value={neonatalAssessment.min1_Muscletone}
								onChange={(e) => handleChange('min1_Muscletone', e.target.value)}
							>
								<MenuItem value={0}>{'0 (limp)'}</MenuItem>
								<MenuItem value={1}>{'1 (some flexion of extremities)'}</MenuItem>
								<MenuItem value={2}>{'2 (well flexed)'}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min1-respeffort-label">Respiratory Effort</InputLabel>
							<Select
								labelId="min1-respeffort-label"
								id="min1-respeffort"
								label="Respiratory Effort"
								defaultValue=""
								value={neonatalAssessment.min1_Respeffort}
								onChange={(e) => handleChange('min1_Respeffort', e.target.value)}
							>
								<MenuItem value={0}>{'0 (absent)'}</MenuItem>
								<MenuItem value={1}>{'1 (slow, irregular, weak cry)'}</MenuItem>
								<MenuItem value={2}>{'2 (rapid, regular, strong cry)'}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} textAlign="center">
						<TextField onKeyDown={disableInput} value={min1_Total} size="small" />
					</Grid>
				</Grid>

				<Grid item container xs={12} md={6} spacing={3}>
					<Grid item xs={12} textAlign="center">
						<Typography variant="h6" gutterBottom>5 Minute</Typography>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min5-color-label">Color</InputLabel>
							<Select
								labelId="min5-color-label"
								id="min5-color"
								label="Color"
								defaultValue=""
								value={neonatalAssessment.min5_Colour}
								onChange={(e) => handleChange('min5_Colour', e.target.value)}
							>
								<MenuItem value={0}>0 (blue, pale)</MenuItem>
								<MenuItem value={1}>1 (body pink, extremities blue)</MenuItem>
								<MenuItem value={2}>2 (completely pink)</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min5-heartrate-label">Heart Rate</InputLabel>
							<Select
								labelId="min5-heartrate-label"
								id="min5-heartrate"
								label="Heart Rate"
								defaultValue=""
								value={neonatalAssessment.min5_Heartrate}
								onChange={(e) => handleChange('min5_Heartrate', e.target.value)}
							>
								<MenuItem value={0}>{'0 (absent)'}</MenuItem>
								<MenuItem value={1}>{'1 (slow <= 100)'}</MenuItem>
								<MenuItem value={2}>{'2 (normal >= 100)'}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min5-reflexirrit-label">Reflex Irritability</InputLabel>
							<Select
								labelId="min5-reflexirrit-label"
								id="min5-reflexirrit"
								label="Reflex Irritability"
								defaultValue=""
								value={neonatalAssessment.min5_Reflexirrit}
								onChange={(e) => handleChange('min5_Reflexirrit', e.target.value)}
							>
								<MenuItem value={0}>{'0 (No response)'}</MenuItem>
								<MenuItem value={1}>{'1 (slight motion, weak cry)'}</MenuItem>
								<MenuItem value={2}>{'2 (strong cry, extremity retraction)'}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min5-muscletone-label">Muscle Tone</InputLabel>
							<Select
								labelId="min5-muscletone-label"
								id="min5-muscletone"
								label="Muscle Tone"
								defaultValue=""
								value={neonatalAssessment.min5_Muscletone}
								onChange={(e) => handleChange('min5_Muscletone', e.target.value)}
							>
								<MenuItem value={0}>{'0 (limp)'}</MenuItem>
								<MenuItem value={1}>{'1 (some flexion of extremities)'}</MenuItem>
								<MenuItem value={2}>{'2 (well flexed)'}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12}>
						<FormControl fullWidth size="small">
							<InputLabel id="min5-respeffort-label">Respiratory Effort</InputLabel>
							<Select
								labelId="min5-respeffort-label"
								id="min5-respeffort"
								label="Respiratory Effort"
								defaultValue=""
								value={neonatalAssessment.min5_Respeffort}
								onChange={(e) => handleChange('min5_Respeffort', e.target.value)}
							>
								<MenuItem value={0}>{'0 (absent)'}</MenuItem>
								<MenuItem value={1}>{'1 (slow, irregular, weak cry)'}</MenuItem>
								<MenuItem value={2}>{'2 (rapid, regular, strong cry)'}</MenuItem>
							</Select>
						</FormControl>
					</Grid>
					<Grid item xs={12} textAlign="center">
						<TextField onKeyDown={disableInput} value={min5_Total} size="small" />
					</Grid>
				</Grid>


			</Grid>
		</Container>
	);
};

export default Neonatal;
