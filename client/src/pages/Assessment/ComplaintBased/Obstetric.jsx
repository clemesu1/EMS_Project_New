import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setObstetric } from '../../../features/obstetric';
import { Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField, } from '@mui/material';

const Obstetric = () => {
	let dispatch = useDispatch();
	let obstetric = useSelector(state => state.obstetric);

	const handleChange = (name, value) => dispatch(setObstetric({ name, value }));
	const disableInput = (event) => event.preventDefault();


	return (
		<Container>
			<Grid container spacing={3}>
				<Grid item xs={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="parity-label">Parity</InputLabel>
						<Select
							labelId="parity-label"
							id="parity"
							label="Parity"
							defaultValue=""
							value={obstetric.Parity}
							onChange={(e) => handleChange('Parity', e.target.value)}
						>
							{Array.from({ length: 10 }, (_, i) => i + 1).map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="gravidity-label">Gravidity</InputLabel>
						<Select
							labelId="gravidity-label"
							id="gravidity"
							label="Gravidity"
							defaultValue=""
							value={obstetric.Gravidity}
							onChange={(e) => handleChange('Gravidity', e.target.value)}
						>
							{Array.from({ length: 10 }, (_, i) => i + 1).map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={4}>
					<FormControl fullWidth size="small">
						<InputLabel id="gestation-stage-label">Gestation</InputLabel>
						<Select
							labelId="gestation-stage-label"
							id="gestation-stage"
							label="Gestation"
							defaultValue=""
							value={obstetric.Gestation_Stage}
							onChange={(e) => handleChange('Gestation_Stage', e.target.value)}
						>
							{Array.from({ length: 44 }, (_, i) => i + 1).map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="delivery-label">Delivery</InputLabel>
						<Select
							labelId="delivery-label"
							id="delivery"
							label="Delivery"
							defaultValue=""
							value={obstetric.Delivery}
							onChange={(e) => handleChange('Delivery', e.target.value)}
						>
							<MenuItem value={"No prehospital delivery"}>No prehospital delivery</MenuItem>
							<MenuItem value={"At scene"}>At scene</MenuItem>
							<MenuItem value={"En route to hospital"}>En route to hospital</MenuItem>
							<MenuItem value={"Other"}>Other</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{obstetric.Delivery === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="Deliv_Other"
							value={obstetric.Deliv_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{obstetric.Delivery === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="Deliv_Other"
							value={obstetric.Deliv_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="baby-presentation-label">Baby Presentation</InputLabel>
						<Select
							labelId="baby-presentation-label"
							id="baby-presentation"
							label="Baby Presentation"
							defaultValue=""
							value={obstetric.Baby_Presentation}
							onChange={(e) => handleChange('Baby_Presentation', e.target.value)}
						>
							<MenuItem value={"Head"}>Head</MenuItem>
							<MenuItem value={"Arm"}>Arm</MenuItem>
							<MenuItem value={"Leg"}>Leg</MenuItem>
							<MenuItem value={"Breech"}>Breech</MenuItem>
							<MenuItem value={"Prolapsed cord"}>Prolapsed cord</MenuItem>
							<MenuItem value={"Cord around neck"}>Cord around neck</MenuItem>
							<MenuItem value={"Other"}>Other</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{obstetric.Baby_Presentation === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="Baby_Prsnt_Other"
							value={obstetric.Baby_Prsnt_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{obstetric.Baby_Presentation === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="Baby_Prsnt_Other"
							value={obstetric.Baby_Prsnt_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} lg={6}>
					<Stack direction="row" spacing={2} alignItems="center">
						<Button onClick={() => handleChange('Time_of_Birth', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Time of Birth</Button>
						<TextField
							size="small"
							name="Time_of_Birth"
							value={obstetric.Time_of_Birth}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Stack>
				</Grid>
				<Grid item xs={12} lg={6}>
					<Stack direction="row" spacing={2} alignItems="center">
						<Button onClick={() => handleChange('Time_Placenta_Delivered', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Time of Placenta Delivery</Button>
						<TextField
							size="small"
							name="Time_Placenta_Delivered"
							value={obstetric.Time_Placenta_Delivered}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Stack>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Obstetric;
