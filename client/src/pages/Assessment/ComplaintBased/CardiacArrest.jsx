import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCardiacArrest } from '../../../features/cardiacArrest';
import { Button, ButtonGroup, Container, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';

const witnesses = ["Ambulance crew", "Bystander", "Family / Friend", "Fire service personnel", "Law enforcement personnel", "Not witnessed", "Other", "Other first responder"];
const defibrillatorTypes = ["Unknown", "Monophasic", "Biphasic", "Manual", "Automated", "Semi-automated", "Other"];
const discontinuedReasons = ["Protocol", "Order via online medical control", "Unsafe scene", "DNR", "Other"];
const cprReasons = ["Obivious death protocol criteria met", "valid 'Do Not Resuscitate' order", "Delayed resuscitation access to a patient with confirmed vital signs absent", "Other"];
const pacemaker = ["No", "Unknown", "Pacemaker", "Implanted Defibrillator", "Other"]

const CardiacArrest = () => {
	const dispatch = useDispatch();
	const cardiacArrest = useSelector(state => state.cardiacArrest);

	const handleChange = (name, value) => dispatch(setCardiacArrest({ name, value }));
	const disableInput = (event) => event.preventDefault();

	return (
		<Container>
			<Grid container spacing={3} alignItems="stretch">
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="arrest-clarify-label">Arrest Clarification</InputLabel>
						<Select
							labelId="arrest-clarify-label"
							id="arrest-clarify"
							label="Arrest Clarification"
							defaultValue=""
							value={cardiacArrest.Arrest_Clarify}
							onChange={(e) => handleChange('Arrest_Clarify', e.target.value)}
						>
							<MenuItem value={"Cardiac"}>Cardiac</MenuItem>
							<MenuItem value={"Non-cardiac"}>Non-cardiac</MenuItem>
							<MenuItem value={"Unknown"}>Unknown</MenuItem>
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<Stack spacing={3}>
						<FormControl fullWidth size="small">
							<InputLabel id="witness-of-arrest-label">Witness of Arrest</InputLabel>
							<Select
								labelId="witness-of-arrest-label"
								id="witness-of-arrest"
								label="Witness of Arrest"
								defaultValue=""
								value={cardiacArrest.Witness}
								onChange={(e) => handleChange('Witness', e.target.value)}
							>
								{witnesses.map((item, index) => (
									<MenuItem key={index} value={item}>{item}</MenuItem>
								))}
							</Select>
						</FormControl>
						{cardiacArrest.Witness === 'Other' &&
							<TextField
								size="small"
								label="Other"
								name="Witns_Other"
								value={cardiacArrest.Witns_Other}
								onChange={(e) => handleChange(e.target.name, e.target.value)}
								fullWidth
							/>
						}
					</Stack>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl>
						<FormLabel id="defib-prior-ambul-arrival-radio-group">Defibrillation Prior to Ambulance Arrival</FormLabel>
						<RadioGroup
							row
							aria-labelledby="defib-prior-ambul-arrival-radio-group"
							name="Defib_Prior_Ambul_arrival"
							value={cardiacArrest.Defib_Prior_Ambul_arrival}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
						>
							<FormControlLabel value="Yes" control={<Radio />} label="Yes" />
							<FormControlLabel value="No" control={<Radio />} label="No" />
						</RadioGroup>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6}>
					<Stack direction="row" spacing={2} alignItems="center">
						<Typography variant="button">No. of Defibrillator Prior EMS</Typography>
						<ButtonGroup size="small" aria-label="seizure duration minute button group">
							<Button onClick={() => handleChange('No_Defib_Prior_EMS', (cardiacArrest.No_Defib_Prior_EMS - 1) >= 0 ? cardiacArrest.No_Defib_Prior_EMS - 1 : cardiacArrest.No_Defib_Prior_EMS)}>-</Button>
							<Button disableRipple>{cardiacArrest.No_Defib_Prior_EMS}</Button>
							<Button onClick={() => handleChange('No_Defib_Prior_EMS', cardiacArrest.No_Defib_Prior_EMS + 1)}>+</Button>
						</ButtonGroup>
					</Stack>
				</Grid>
				<Grid item container spacing={3} xs={12} md={6}>
					<Grid item xs={12} >
						<Stack direction="row" spacing={2} alignItems="center">
							<Button onClick={() => handleChange('Spon_Circ', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Spont. Circulation</Button>
							<TextField onKeyDown={disableInput} onClick={() => handleChange('Spon_Circ', new Date().toLocaleTimeString('en-US'))} value={cardiacArrest.Spon_Circ} fullWidth size="small" />
						</Stack>
					</Grid>

					<Grid item xs={12}>
						<Stack direction="row" spacing={2} alignItems="center">
							<Button onClick={() => handleChange('Spon_Respir', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Spont. Respiration</Button>
							<TextField onKeyDown={disableInput} onClick={() => handleChange('Spon_Respir', new Date().toLocaleTimeString('en-US'))} value={cardiacArrest.Spon_Respir} fullWidth size="small" />
						</Stack>
					</Grid>
					<Grid item xs={12} >
						<Stack direction="row" spacing={2} alignItems="center">
							<Button onClick={() => handleChange('Time_of_First_CPR', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Time of First CPR</Button>
							<TextField onKeyDown={disableInput} onClick={() => handleChange('Time_of_First_CPR', new Date().toLocaleTimeString('en-US'))} value={cardiacArrest.Time_of_First_CPR} fullWidth size="small" />
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction="row" spacing={2} alignItems="center">
							<Button onClick={() => handleChange('Time_of_Crew_CPR', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Time of Crew CPR</Button>
							<TextField onKeyDown={disableInput} onClick={() => handleChange('Time_of_Crew_CPR', new Date().toLocaleTimeString('en-US'))} value={cardiacArrest.Time_of_Crew_CPR} fullWidth size="small" />
						</Stack>
					</Grid>
				</Grid>
				<Grid item container spacing={3} xs={12} md={6}>
					<Grid item xs={12}>
						<Stack direction="row" spacing={2} alignItems="center">
							<Button onClick={() => handleChange('Time_first_Defib', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Time of First Defibrillation</Button>
							<TextField onKeyDown={disableInput} onClick={() => handleChange('Time_first_Defib', new Date().toLocaleTimeString('en-US'))} value={cardiacArrest.Time_first_Defib} fullWidth size="small" />
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction="row" spacing={2} alignItems="center">
							<Button onClick={() => handleChange('Time_CPR_Discontinue', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Time of CPR Discontinued</Button>
							<TextField onKeyDown={disableInput} onClick={() => handleChange('Time_CPR_Discontinue', new Date().toLocaleTimeString('en-US'))} value={cardiacArrest.Time_CPR_Discontinue} fullWidth size="small" />
						</Stack>
					</Grid>
					<Grid item xs={12}>
						<Stack direction="row" spacing={2} alignItems="center">
							<Button onClick={() => handleChange('Pulse_rate_dest', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Pulse rate at destination</Button>
							<TextField onKeyDown={disableInput} onClick={() => handleChange('Pulse_rate_dest', new Date().toLocaleTimeString('en-US'))} value={cardiacArrest.Pulse_rate_dest} fullWidth size="small" />
						</Stack>
					</Grid>
				</Grid>
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="type-of-ambul-defib-label">Type of Ambulance Defibrillator</InputLabel>
						<Select
							labelId="type-of-ambul-defib-label"
							id="type-of-ambul-defib"
							label="Type of Ambulance Defibrillator"
							defaultValue=""
							value={cardiacArrest.Type_of_Ambul_Defib}
							onChange={(e) => handleChange('Type_of_Ambul_Defib', e.target.value)}
						>
							{defibrillatorTypes.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{cardiacArrest.Type_of_Ambul_Defib === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="Typ_Amb_Defib_Other"
							value={cardiacArrest.Typ_Amb_Defib_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{cardiacArrest.Type_of_Ambul_Defib === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="Typ_Amb_Defib_Other"
							value={cardiacArrest.Typ_Amb_Defib_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="reason-cpr-discontinue-label">Reason CPR Discontinued in the Field</InputLabel>
						<Select
							labelId="reason-cpr-discontinue-label"
							id="reason-cpr-discontinue"
							label="Reason CPR Discontinued in the Field"
							defaultValue=""
							value={cardiacArrest.Reason_CPR_Discontinue}
							onChange={(e) => handleChange('Reason_CPR_Discontinue', e.target.value)}
						>
							{discontinuedReasons.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{cardiacArrest.Reason_CPR_Discontinue === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="CPR_Discon_Other"
							value={cardiacArrest.CPR_Discon_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{cardiacArrest.Reason_CPR_Discontinue === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="CPR_Discon_Other"
							value={cardiacArrest.CPR_Discon_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="reason-not-init-cpr-label">Reason Not Initiating CPR</InputLabel>
						<Select
							labelId="reason-not-init-cpr-label"
							id="reason-not-init-cpr"
							label="Reason Not Initiating CPR"
							defaultValue=""
							value={cardiacArrest.Reason_not_Init_CPR}
							onChange={(e) => handleChange('Reason_not_Init_CPR', e.target.value)}
						>
							{cprReasons.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{cardiacArrest.Reason_not_Init_CPR === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="NInit_CPR_Other"
							value={cardiacArrest.NInit_CPR_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{cardiacArrest.Reason_not_Init_CPR === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="NInit_CPR_Other"
							value={cardiacArrest.NInit_CPR_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
				<Grid item xs={12} md={6}>
					<FormControl fullWidth size="small">
						<InputLabel id="pace-implant-defib-label">Pacemaker/Implant Defibrillator</InputLabel>
						<Select
							labelId="pace-implant-defib-label"
							id="pace-implant-defib"
							label="Pacemaker / Implant Defibrillator"
							defaultValue=""
							value={cardiacArrest.Pace_Implant_Defib}
							onChange={(e) => handleChange('Pace_Implant_Defib', e.target.value)}
						>
							{pacemaker.map((item, index) => (
								<MenuItem key={index} value={item}>{item}</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
					{cardiacArrest.Pace_Implant_Defib === 'Other' &&
						<TextField
							size="small"
							label="Other"
							name="PImp_Defib_Other"
							value={cardiacArrest.PImp_Defib_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					}
				</Grid>
				{cardiacArrest.Pace_Implant_Defib === 'Other' &&
					<Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
						<TextField
							size="small"
							label="Other"
							name="PImp_Defib_Other"
							value={cardiacArrest.PImp_Defib_Other}
							onChange={(e) => handleChange(e.target.name, e.target.value)}
							fullWidth
						/>
					</Grid>
				}
			</Grid>
		</Container>
	);
};

export default CardiacArrest;
