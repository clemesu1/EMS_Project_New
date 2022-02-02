import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientHistory, toggleHistoryListItem } from '../../../features/patientHistory';
import { Checkbox, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, TextField, Typography } from '@mui/material';

const historyList = ["Alcoholism", "Angina", "Asthma", "Back Injury", "Bi Polar", "Bronchitis", "CABG (Coronary Artery Bypass Graft)", "CHF (Congestive Heart Failure)", "COPD (Chronic Obstructive Pulmonary Disease)", "Depression", "Drug Dependency", "Emphysema", "Epilepsy", "Hip Replacement", "HTN (Hypertension)", "Hypoglycemia", "IDDM (Insulin Dependent Diabetic)", "Manic Depressive", "Myocardial Infarction", "NIDDM (None Insulin Dependent Diabetic)", "Schizophrenia", "Seizures", "Stroke", "Thyroid", "Transient Ischemic Attack (TIA)"];

const PastHistory = () => {
	let dispatch = useDispatch();
	let patientHistory = useSelector(state => state.patientHistory);

	const handleChange = (name, value) => dispatch(setPatientHistory({ name, value }));

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h6">History</Typography>
			</Grid>
			<Grid item xs={12} lg={6}>
				<Paper variant="outlined" sx={{ width: '100%' }}>
					<List sx={{
						width: '100%',
						maxHeight: 450,
						overflow: 'auto'
					}}>
						{historyList.map((item, index) => {
							const labelId = `history-list-label-${item}`;
							return (
								<ListItem key={index} component="div" dense disablePadding>
									<ListItemButton role={undefined} onClick={() => dispatch(toggleHistoryListItem(item))}>
										<ListItemIcon>
											<Checkbox
												edge="start"
												checked={patientHistory.PH_History.indexOf(item) !== -1}
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
			<Grid item xs={12} lg={6}>
				<TextField
					label="Other / Comments"
					size="small"
					fullWidth
					multiline
					rows={19}
					sx={{ display: { xs: 'none', lg: 'block' }, width: '100%', height: '100%' }}
					value={patientHistory.PH_Comment}
					onChange={(e) => handleChange('PH_Comment', e.target.value)}
				/>
				<TextField
					label="Other"
					size="small"
					fullWidth
					multiline
					maxRows={19}
					sx={{ display: { xs: 'block', lg: 'none' }, width: '100%', height: '100%' }}
					value={patientHistory.PH_Comment}
					onChange={(e) => handleChange('PH_Comment', e.target.value)}
				/>
			</Grid>
		</Grid>
	)
};

export default PastHistory;
