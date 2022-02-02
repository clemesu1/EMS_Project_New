import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientHistory, toggleDrugListItem, toggleEnvListItem } from '../../../features/patientHistory';
import { Checkbox, Grid, List, ListItem, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';

const drugList = ["ASA", "Cephalosporines (Keflex, Cefzil, Ceftin, Suprax, Vantin)", "Codeine", "Demerol", "Morphine", "Nitro", "Penicillin", "Sulpha drugs"];
const environmentalList = ["Almonds", "Cashews", "Eggs", "Fish", "Hazelnuts", "Latex", "Milk", "Other Nuts", "Peanuts", "Sesame seeds", "Shellfish", "Soy", "Walnuts", "Wheat"];

const Allergies = () => {
	let dispatch = useDispatch();
	let patientHistory = useSelector(state => state.patientHistory);

	const handleChange = (name, value) => dispatch(setPatientHistory({ name, value }));

	return (
		<Grid container spacing={3}>
			<Grid container item xs={12} md={8} spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h6">Allergies (select all that are applicable)</Typography>
				</Grid>
				<Grid item xs={12} md={6}>
					<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
						<Typography color="textSecondary">Drugs</Typography>
						<List sx={{
							width: '100%',
							maxHeight: '25rem',
							overflow: 'auto'
						}}>
							{drugList.map((item, index) => {
								const labelId = `drug-list-label-${item}`;
								return (
									<ListItem key={index} role={undefined} dense button onClick={() => dispatch(toggleDrugListItem(item))}>
										<ListItemIcon>
											<Checkbox
												edge="start"
												tabIndex={-1}
												disableRipple
												checked={patientHistory.Alr_Drugs.indexOf(item) !== -1}
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
										<ListItemText id={labelId} primary={item} />
									</ListItem>
								);
							})}
						</List>
					</Paper>
				</Grid>
				<Grid item xs={12} md={6}>
					<Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
						<Typography color="textSecondary">Environmental</Typography>
						<List sx={{
							width: '100%',
							maxHeight: '25rem',
							overflow: 'auto'
						}}>
							{environmentalList.map((item, index) => {
								const labelId = `environmental-list-label-${item}`;
								return (
									<ListItem key={index} role={undefined} dense button onClick={() => dispatch(toggleEnvListItem(item))}>
										<ListItemIcon>
											<Checkbox
												edge="start"
												tabIndex={-1}
												disableRipple
												checked={patientHistory.Alr_Env.indexOf(item) !== -1}
												inputProps={{ 'aria-labelledby': labelId }}
											/>
										</ListItemIcon>
										<ListItemText id={labelId} primary={item} />
									</ListItem>
								);
							})}
						</List>
					</Paper>
				</Grid>
			</Grid>
			<Grid container item xs={12} md={4} spacing={3}>
				<Grid item xs={12}>
					<Typography variant="h6">Other</Typography>
				</Grid>
				<Grid item xs={12}>
					<Paper variant="outlined" sx={{ width: '100%', height: '100%' }}>
						<TextField
							multiline
							rows={19}
							sx={{ width: '100%', height: '100%' }}
							value={patientHistory.Alr_Others}
							onChange={(e) => handleChange('Alr_Others', e.target.value)}
						/>
					</Paper>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Allergies;
