import React, { useState } from 'react';
import { Button, ButtonGroup, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setVehicleDetails } from '../../features/vehicleDetails';

// Keep form state local by using `useState`. Upon submission, send to redux.

const crewTypes = ["EMT-1", "EMT-2", "EMT-3", "EMR", "PCP", "ACP", "CCP", "RT", "RN", "MD", "Student", "Other"];

const VehicleDetails = () => {
	let dispatch = useDispatch();
	const vehicleDetails = useSelector(state => state.vehicleDetails);

	const [toType, setToType] = useState('');
	const [toChange, setToChange] = useState('');
	const [fromType, setFromType] = useState('');
	const [fromChange, setFromChange] = useState('');



	const handleClick = (name, value) => dispatch(setVehicleDetails({ name, value }));

	const disableInput = (event) => event.preventDefault();


	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Stack direction="row" spacing={2} alignItems="center">
					<Typography variant="button">
						Number of Patient(s) Transported
					</Typography>
					<ButtonGroup sx={{ '& .Mui-disabled': { color: 'primary.main', borderColor: 'primary.light' } }} size="small" aria-label="number of patient(s) transported button group">
						<Button onClick={() => handleClick('No_Transported', (vehicleDetails.No_Transported - 1) >= 0 ? vehicleDetails.No_Transported - 1 : vehicleDetails.No_Transported)}>-</Button>
						<Button disableRipple>{vehicleDetails.No_Transported}</Button>
						<Button onClick={() => handleClick('No_Transported', vehicleDetails.No_Transported + 1)}>+</Button>
					</ButtonGroup>
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>Time</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button onClick={() => handleClick('T_Notified', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Notified</Button>
								<TextField onKeyDown={disableInput} value={vehicleDetails.T_Notified} fullWidth size="small" />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button onClick={() => handleClick('T_enRoute', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">En Route</Button>
								<TextField onKeyDown={disableInput} value={vehicleDetails.T_enRoute} fullWidth size="small" />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button onClick={() => handleClick('T_at_Scene', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">At Scene</Button>
								<TextField onKeyDown={disableInput} value={vehicleDetails.T_at_Scene} fullWidth size="small" />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button onClick={() => handleClick('T_Crew_Patient', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Crew Patient</Button>
								<TextField onKeyDown={disableInput} value={vehicleDetails.T_Crew_Patient} fullWidth size="small" />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button onClick={() => handleClick('T_Left_Scene', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Left Scene</Button>
								<TextField onKeyDown={disableInput} value={vehicleDetails.T_Left_Scene} fullWidth size="small" />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button onClick={() => handleClick('T_at_destn', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">At Destination</Button>
								<TextField onKeyDown={disableInput} value={vehicleDetails.T_at_destn} fullWidth size="small" />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button onClick={() => handleClick('T_available', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Available</Button>
								<TextField onKeyDown={disableInput} value={vehicleDetails.T_available} fullWidth size="small" />
							</Stack>
						</Grid>
						<Grid item xs={12} md={6} lg={3}>
							<Stack direction="row" spacing={2} alignItems="center">
								<Button onClick={() => handleClick('T_backarea', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Back Area</Button>
								<TextField onKeyDown={disableInput} value={vehicleDetails.T_backarea} fullWidth size="small" />
							</Stack>
						</Grid>
					</Grid>
				</Paper>
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>Response to Scene</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={6}>
							<Stack direction="row" sx={{ justifyContent: { xs: "space-between", lg: "space-evenly" } }} spacing={2} alignItems="center">
								<Typography variant="button">
									Type
								</Typography>
								<ToggleButtonGroup
									value={toType}
									exclusive
									onChange={(event, value) => setToType(value)}
								>
									<ToggleButton color="info" value="Cold">Cold</ToggleButton>
									<ToggleButton color="error" value="Hot">Hot</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Stack direction="row" sx={{ justifyContent: { xs: "space-between", lg: "space-evenly" } }} spacing={2} alignItems="center">
								<Typography variant="button">
									Change in Response
								</Typography>
								<ToggleButtonGroup
									value={toChange}
									exclusive
									onChange={(event, value) => setToChange(value)}

								>
									<ToggleButton color="info" value="Cold">Cold</ToggleButton>
									<ToggleButton color="error" value="Hot">Hot</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Grid>
					</Grid>

				</Paper>
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>Response from Scene</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} lg={6}>
							<Stack direction="row" sx={{ justifyContent: { xs: "space-between", lg: "space-evenly" } }} spacing={2} alignItems="center">
								<Typography variant="button">
									Type
								</Typography>
								<ToggleButtonGroup
									value={fromType}
									exclusive
									onChange={(event, value) => setFromType(value)}

								>
									<ToggleButton color="info" value="Cold">Cold</ToggleButton>
									<ToggleButton color="error" value="Hot">Hot</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Grid>
						<Grid item xs={12} lg={6}>
							<Stack direction="row" sx={{ justifyContent: { xs: "space-between", lg: "space-evenly" } }} spacing={2} alignItems="center">
								<Typography variant="button">
									Change in Response
								</Typography>
								<ToggleButtonGroup
									value={fromChange}
									exclusive
									onChange={(event, value) => setFromChange(value)}
								>
									<ToggleButton color="info" value="Cold">Cold</ToggleButton>
									<ToggleButton color="error" value="Hot">Hot</ToggleButton>
								</ToggleButtonGroup>
							</Stack>
						</Grid>
					</Grid>
				</Paper>
			</Grid >
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>Crew Type</Typography>
					<Grid container spacing={2}>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								<FormControl
									fullWidth
									size="small"
								>
									<InputLabel id="c-driver-label">Driver</InputLabel>
									<Select
										labelId="c-driver-label"
										id="c-driver"
										name="C_driver"
										defaultValue=""
										label="Driver"
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
								<TextField
									size="small"
									label="Other"
									name="C_driv_oth"
									fullWidth
								/>
							</Stack>
						</Grid>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								<FormControl
									size="small"
									fullWidth
								>
									<InputLabel id="c-attendant-label">Attendant</InputLabel>
									<Select
										labelId="c-attendant-label"
										id="c-attendant"
										name="C_attendant"
										defaultValue=""
										label="Attendant"
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
								<TextField
									size="small"
									label="Other"
									name="C_attn_oth"
									fullWidth
								/>
							</Stack>
						</Grid>
						<Grid item xs={12} md={4}>
							<Stack spacing={2}>
								<FormControl
									fullWidth
									size="small"
								>
									<InputLabel id="c-assistant-label">Assistant</InputLabel>
									<Select
										labelId="c-assistant-label"
										id="c-assistant"
										name="C_assistant"
										defaultValue=""
										label="Assistant"
									>
										{crewTypes.map((item, index) => (
											<MenuItem key={index} value={item}>{item}</MenuItem>
										))}
									</Select>
								</FormControl>
								<TextField
									size="small"
									label="Other"
									name="C_asst_oth"
									fullWidth
								/>
							</Stack>
						</Grid>
					</Grid >
				</Paper>
			</Grid >
			<Grid item xs={12}>
				<Paper variant="outlined" sx={{ p: 2, w: '100%' }}>
					<Typography color="textSecondary" gutterBottom>Mileage</Typography>
					<Grid container justifyContent="center" spacing={2}>
						<Grid item xs={12} md>
							<TextField
								label="Out"
								size="small"
								fullWidth
							/>
						</Grid>

						<Grid item xs={12} md>
							<TextField
								label="At Scene"
								size="small"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="At Destination"
								size="small"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="In"
								size="small"
								fullWidth
							/>
						</Grid>
						<Grid item xs={12} md>
							<TextField
								label="Total"
								size="small"
								fullWidth
							/>
						</Grid>
					</Grid >
				</Paper>
			</Grid >
		</Grid >


	);
};

export default VehicleDetails;
