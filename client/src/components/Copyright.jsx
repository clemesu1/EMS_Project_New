import { Typography, Link } from '@mui/material'

export default function Copyright(props) {
	return (
		<Typography variant="body2" color="text.secondary" align="center" {...props} sx={{ mt: 8, mb: 4 }}>
			Copyright &#169; {' '}
			<Link color="inherit" href="https://dottycare.com/">
				Dotty Care
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

