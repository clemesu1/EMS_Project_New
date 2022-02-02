import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientHistory, toggleDrugListItem, toggleEnvListItem } from '../../../features/patientHistory';
import { Checkbox, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';

const drugList = ["ASA", "Cephalosporines (Keflex, Cefzil, Ceftin, Suprax, Vantin)", "Codeine", "Demerol", "Morphine", "Nitro", "Penicillin", "Sulpha drugs"];
const environmentalList = ["Almonds", "Cashews", "Eggs", "Fish", "Hazelnuts", "Latex", "Milk", "Other Nuts", "Peanuts", "Sesame seeds", "Shellfish", "Soy", "Walnuts", "Wheat"];

const Allergies = () => {
	let dispatch = useDispatch();
	let patientHistory = useSelector(state => state.patientHistory);

	const handleChange = (name, value) => dispatch(setPatientHistory({ name, value }));

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h6">Allergies (select all that are applicable)</Typography>
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper variant="outlined" sx={{ width: '100%' }}>
					<Typography color="textSecondary" variant="subtitle2" sx={{ pt: 2, pl: 2, pb: 1 }}>Drugs</Typography>
					<List sx={{
						width: '100%',
						maxHeight: '25rem',
						overflow: 'auto'
					}}>
						{drugList.map((item, index) => {
							const labelId = `drug-list-label-${item}`;
							return (
								<ListItem key={index} component="div" dense disablePadding>
									<ListItemButton role={undefined} onClick={() => dispatch(toggleDrugListItem(item))}>
										<ListItemIcon>
											<Checkbox
												edge="start"
												checked={patientHistory.Alr_Drugs.indexOf(item) !== -1}
												tabIndex={-1}
												disableRipple
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
										<ListItemText id={labelId} primary={item} />
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</Paper>
			</Grid>
			<Grid item xs={12} md={6}>
				<Paper variant="outlined" sx={{ width: '100%' }}>
					<Typography color="textSecondary" variant="subtitle2" sx={{ pt: 2, pl: 2, pb: 1 }}>Environmental</Typography>
					<List sx={{
						width: '100%',
						maxHeight: '25rem',
						overflow: 'auto'
					}}>
						
						{environmentalList.map((item, index) => {
							const labelId = `environmental-list-label-${item}`;
							return (
								<ListItem key={index} component="div" dense disablePadding>
									<ListItemButton role={undefined} onClick={() => dispatch(toggleEnvListItem(item))}>
										<ListItemIcon>
											<Checkbox
												edge="start"
												checked={patientHistory.Alr_Env.indexOf(item) !== -1}
												tabIndex={-1}
												disableRipple
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
										<ListItemText id={labelId} primary={item} />
									</ListItemButton>
								</ListItem>
							);
						})}
					</List>
				</Paper>
			</Grid>
			<Grid item xs={12}>
				<TextField
					label="Other"
					size="small"
					fullWidth
					multiline
					maxRows={18}
					sx={{ width: '100%', height: '100%' }}
					value={patientHistory.Alr_Others}
					onChange={(e) => handleChange('Alr_Others', e.target.value)}
				/>
			</Grid>
		</Grid>
	);
};

export default Allergies;
