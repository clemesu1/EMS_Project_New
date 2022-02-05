import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, Pagination, Paper, Stack } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addIntervention } from '../features/intervention';
import { addMedications } from '../features/medications';
import { addVitalSign } from '../features/vitalSign';
import Treatment from '../pages/Treatment';

const TreatmentContainer = () => {
	let dispatch = useDispatch();
	const [page, setPage] = useState(1);
	const [pageArray, setPageArray] = useState([{ page: 1 }]);

	const handleNewPage = () => {
		setPageArray(oldArray => [...oldArray, { page: page + 1 }])
		dispatch(addIntervention());
		dispatch(addMedications());
		dispatch(addVitalSign());
	}

	const handleChange = (event, value) => {
		setPage(value);
	}

	useEffect(() => { }, [pageArray.length]);

	return (
		<Box p={3}>
			<Paper variant="outlined" sx={{ width: '100%' }}>
				{pageArray.slice((page - 1), page).map(({ page }, index) => (
					<Treatment key={index} page={page} />
				))}
			</Paper>
			<Grid container direction="column" alignItems="flex-end" justifyContent="center">
				<Grid item sx={{ p: 2 }}>
					<Stack direction="row" spacing={2}>
						<Button
							onClick={handleNewPage}
						>
							New
						</Button>
						<Pagination
							variant="outlined"
							page={page}
							count={pageArray.length}
							siblingCount={0}
							showFirstButton
							showLastButton
							onChange={handleChange}
						/>
					</Stack>
				</Grid>
			</Grid>

		</Box>
	);
};

export default TreatmentContainer;
