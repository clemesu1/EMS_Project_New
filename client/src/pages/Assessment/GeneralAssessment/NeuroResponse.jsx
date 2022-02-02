import React from 'react';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setNeuroResponse, toggleStatusListItem } from '../../../features/neuroResponse';

const status = ['Normal', 'Combative', 'Confused', 'Dysphasia', 'Hallucinations', 'Lethargic', 'Seizures', 'Tremors', 'Other']

const NeuroResponse = () => {
	let dispatch = useDispatch();
	let neuroResponse = useSelector(state => state.neuroResponse);

	const handleChange = (name, value) => dispatch(setNeuroResponse({ name, value }));

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={4}>
				<Stack spacing={1}>
					<Typography variant="subtitle2">Level of Consciousness</Typography>
					<ToggleButtonGroup
						color="primary"
						orientation="vertical"
						value={neuroResponse.LOC}
						exclusive
						onChange={(event, value) => handleChange('LOC', value)}
					>
						<ToggleButton value="Alert">Alert</ToggleButton>
						<ToggleButton value="Altered">Altered</ToggleButton>
						<ToggleButton value="Verbal">Verbal</ToggleButton>
						<ToggleButton value="Pain">Pain</ToggleButton>
						<ToggleButton value="Unresponsive">Unresponsive</ToggleButton>
					</ToggleButtonGroup>
				</Stack>
			</Grid>
			<Grid item xs={12} md={4}>
				<Stack spacing={3}>
					<FormControl component="fieldset">
						<FormGroup row>
							{status.map((item, index) => (
								<FormControlLabel
									key={index}
									label={item}
									control={
										<Checkbox
											checked={neuroResponse.Status.indexOf(item) !== -1}
											onChange={() => dispatch(toggleStatusListItem(item))}
										/>
									}
								/>
							))}
						</FormGroup>
					</FormControl>
					{neuroResponse.Status.includes('Other') &&
						<TextField
							size="small"
							label="Other"
							value={neuroResponse.Status_Other}
							onChange={(e) => handleChange('Status_Other', e.target.value)}
							fullWidth
						/>

					}
				</Stack>
			</Grid>
			<Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
				<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
					<Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>Sensory</Typography>
					<Stack spacing={2}>
						<FormControl fullWidth size="small">
							<InputLabel id="sense-ur-select-label">Upper Right</InputLabel>
							<Select
								labelId="sense-ur-select-label"
								id="sense-ur-select"
								label="Upper Right"
								name="Sense_UR"
								defaultValue=""
								value={neuroResponse.Sense_UR}
								onChange={(e) => handleChange('Sense_UR', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="sense-ul-select-label">Upper Left</InputLabel>
							<Select
								labelId="sense-ul-select-label"
								id="sense-ul-select"
								label="Upper Left"
								name="Sense_UL"
								defaultValue=""
								value={neuroResponse.Sense_UL}
								onChange={(e) => handleChange('Sense_UL', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="sense-lr-select-label">Lower Right</InputLabel>
							<Select
								labelId="sense-lr-select-label"
								id="sense-lr-select"
								label="Lower Right"
								name="Sense_LR"
								defaultValue=""
								value={neuroResponse.Sense_LR}
								onChange={(e) => handleChange('Sense_LR', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="sense-ll-select-label">Lower Left</InputLabel>
							<Select
								labelId="sense-ll-select-label"
								id="sense-ll-select"
								label="Lower Left"
								name="Sense_LL"
								defaultValue=""
								value={neuroResponse.Sense_LL}
								onChange={(e) => handleChange('Sense_LL', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
					</Stack>
				</Paper>
			</Grid>
			<Grid item xs={12} md={4}>
				<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
					<Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>Left Eye</Typography>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Stack spacing={1}>
								<Typography variant="subtitle2">Size</Typography>
								<ToggleButtonGroup
									size="small"
									color="primary"
									orientation="vertical"
									value={neuroResponse.L_Eye_Size}
									exclusive
									onChange={(event, value) => handleChange('L_Eye_Size', value)}
								>
									<ToggleButton value="2 mm">2 mm</ToggleButton>
									<ToggleButton value="3 mm">3 mm</ToggleButton>
									<ToggleButton value="4 mm">4 mm</ToggleButton>
									<ToggleButton value="5 mm">5 mm</ToggleButton>
									<ToggleButton value="6 mm">6 mm</ToggleButton>
									<ToggleButton value="7 mm">7 mm</ToggleButton>
									<ToggleButton value="8 mm">8 mm</ToggleButton>
									<ToggleButton value="9 mm">9 mm</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Grid>
						<Grid item xs={6}>
							<Stack spacing={1}>
								<Typography variant="subtitle2">Reactivity</Typography>
								<ToggleButtonGroup
									size="small"
									color="primary"
									orientation="vertical"
									value={neuroResponse.L_Eye_React}
									exclusive
									onChange={(event, value) => handleChange('L_Eye_React', value)}
								>
									<ToggleButton value="Yes">Yes</ToggleButton>
									<ToggleButton value="No">No</ToggleButton>
									<ToggleButton value="Abnormal">Abnormal</ToggleButton>
									<ToggleButton value="Sluggish">Sluggish</ToggleButton>
									<ToggleButton value="Not Assessed">Not Assessed</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Grid>
					</Grid>

				</Paper>
			</Grid>
			<Grid item xs={12} md={4}>
				<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
					<Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>Right Eye</Typography>
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<Stack spacing={1}>
								<Typography variant="subtitle2">Size</Typography>
								<ToggleButtonGroup
									size="small"
									color="primary"
									orientation="vertical"
									value={neuroResponse.R_Eye_Size}
									exclusive
									onChange={(event, value) => handleChange('R_Eye_Size', value)}
								>
									<ToggleButton value="2 mm">2 mm</ToggleButton>
									<ToggleButton value="3 mm">3 mm</ToggleButton>
									<ToggleButton value="4 mm">4 mm</ToggleButton>
									<ToggleButton value="5 mm">5 mm</ToggleButton>
									<ToggleButton value="6 mm">6 mm</ToggleButton>
									<ToggleButton value="7 mm">7 mm</ToggleButton>
									<ToggleButton value="8 mm">8 mm</ToggleButton>
									<ToggleButton value="9 mm">9 mm</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Grid>
						<Grid item xs={6}>
							<Stack spacing={1}>
								<Typography variant="subtitle2">Reactivity</Typography>
								<ToggleButtonGroup
									size="small"
									color="primary"
									orientation="vertical"
									value={neuroResponse.R_Eye_React}
									exclusive
									onChange={(event, value) => handleChange('R_Eye_React', value)}
								>
									<ToggleButton value="Yes">Yes</ToggleButton>
									<ToggleButton value="No">No</ToggleButton>
									<ToggleButton value="Abnormal">Abnormal</ToggleButton>
									<ToggleButton value="Sluggish">Sluggish</ToggleButton>
									<ToggleButton value="Not Assessed">Not Assessed</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Grid>
					</Grid>

				</Paper>
			</Grid>
			<Grid item xs={12} md={4} sx={{ display: { xs: 'block', md: 'none' } }}>
				<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
					<Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>Sensory</Typography>
					<Stack spacing={2}>
						<FormControl fullWidth size="small">
							<InputLabel id="sense-ur-select-label">Upper Right</InputLabel>
							<Select
								labelId="sense-ur-select-label"
								id="sense-ur-select"
								label="Upper Right"
								name="Sense_UR"
								defaultValue=""
								value={neuroResponse.Sense_UR}
								onChange={(e) => handleChange('Sense_UR', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="sense-ul-select-label">Upper Left</InputLabel>
							<Select
								labelId="sense-ul-select-label"
								id="sense-ul-select"
								label="Upper Left"
								name="Sense_UL"
								defaultValue=""
								value={neuroResponse.Sense_UL}
								onChange={(e) => handleChange('Sense_UL', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="sense-lr-select-label">Lower Right</InputLabel>
							<Select
								labelId="sense-lr-select-label"
								id="sense-lr-select"
								label="Lower Right"
								name="Sense_LR"
								defaultValue=""
								value={neuroResponse.Sense_LR}
								onChange={(e) => handleChange('Sense_LR', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="sense-ll-select-label">Lower Left</InputLabel>
							<Select
								labelId="sense-ll-select-label"
								id="sense-ll-select"
								label="Lower Left"
								name="Sense_LL"
								defaultValue=""
								value={neuroResponse.Sense_LL}
								onChange={(e) => handleChange('Sense_LL', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
					</Stack>
				</Paper>
			</Grid>
			<Grid item xs={12} md={4}>
				<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
					<Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>Motor</Typography>
					<Stack spacing={2}>
						<FormControl fullWidth size="small">
							<InputLabel id="motor-ur-select-label">Upper Right</InputLabel>
							<Select
								labelId="motor-ur-select-label"
								id="motor-ur-select"
								label="Upper Right"
								name="Motor_UR"
								defaultValue=""
								value={neuroResponse.Motor_UR}
								onChange={(e) => handleChange('Motor_UR', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="motor-ul-select-label">Upper Left</InputLabel>
							<Select
								labelId="motor-ul-select-label"
								id="motor-ul-select"
								label="Upper Left"
								name="Motor_UL"
								defaultValue=""
								value={neuroResponse.Motor_UL}
								onChange={(e) => handleChange('Motor_UL', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="motor-lr-select-label">Lower Right</InputLabel>
							<Select
								labelId="motor-lr-select-label"
								id="motor-lr-select"
								label="Lower Right"
								name="Motor_LR"
								defaultValue=""
								value={neuroResponse.Motor_LR}
								onChange={(e) => handleChange('Motor_LR', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
						<FormControl fullWidth size="small">
							<InputLabel id="motor-ll-select-label">Lower Left</InputLabel>
							<Select
								labelId="motor-ll-select-label"
								id="motor-ll-select"
								label="Lower Left"
								name="Motor_LL"
								defaultValue=""
								value={neuroResponse.Motor_LL}
								onChange={(e) => handleChange('Motor_LL', e.target.value)}
							>
								<MenuItem value="Absent">Absent</MenuItem>
								<MenuItem value="Present">Present</MenuItem>
							</Select>
						</FormControl>
					</Stack>
				</Paper>
			</Grid>
		</Grid >
	);
};

export default NeuroResponse;
