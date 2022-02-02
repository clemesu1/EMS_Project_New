import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPatientHistory } from '../../../features/patientHistory';
import { Grid, TextField, Typography } from '@mui/material';

const LastMeal = () => {
	let dispatch = useDispatch();
	let patientHistory = useSelector(state => state.patientHistory);

	const handleChange = (name, value) => dispatch(setPatientHistory({ name, value }));


	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<Typography variant="h6">Last Meal</Typography>
			</Grid>
			<Grid item xs={12}>
				<TextField
					label="Comments"
					size="small"
					fullWidth
					multiline
					rows={19}
					sx={{ width: '100%', height: '100%' }}
					value={patientHistory.LM_Comment}
					onChange={(e) => handleChange('LM_Comment', e.target.value)}
				/>
			</Grid>
		</Grid>
	);
};

export default LastMeal;
