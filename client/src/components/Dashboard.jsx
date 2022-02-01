import * as React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Navigation from './Navigation';
import SignIn from '../pages/SignIn';
import OperatorInfo from '../pages/OperatorInfo';
import CallDetails from '../pages/CallDetails';
import Copyright from './Copyright';


const mdTheme = createTheme();

function DashboardContent() {

	const toggle = useSelector((state) => state.drawerToggle.value);

	const PrivateWrapper = () => {
		return toggle ? <Outlet /> : <Navigate replace to="/sign-in" />;
	};

	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{
				bgcolor: (theme) =>
					theme.palette.mode === 'light'
						? theme.palette.grey[100]
						: theme.palette.grey[900],
				display: 'flex'
			}}>
				<CssBaseline />
				<Navigation />
				<Box
					component="main"
					sx={{
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
					}}
				>
					<Toolbar />
					<Box>
						<Routes>
							<Route exact element={<PrivateWrapper />}>
								<Route path="call-details" element={<Navigate replace to="vehicle-details" />} />
								<Route path="assessment" element={<Navigate replace to="patient-history" />} />

								<Route path="call-details">
									<Route path=":page" element={<CallDetails />} />
								</Route>

								<Route path="assessment">
									{/* <Route path=":page" element={<Assessment />} /> */}
								</Route>

								{/* <Route path="treatment" element={<PageContainer />} /> */}

								{/* <Route path="call-report" element={<CallReport />} /> */}
								{/* <Route path="operator-details" element={<OperatorDetails />} /> */}

							</Route>
							<Route path="operator-info" element={<OperatorInfo />} />

							<Route path="sign-in" element={<SignIn />} />

							<Route path="/" element={<Navigate replace to="/sign-in" />} />
						</Routes>
					</Box>
					<Copyright />
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default function Dashboard() {
	return <DashboardContent />;
}