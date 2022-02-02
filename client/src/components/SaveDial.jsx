import React from 'react';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
	{ icon: <FileCopyIcon />, name: 'Copy', onClick: () => console.log('Copy') },
	{ icon: <SaveIcon />, name: 'Save', onClick: () => console.log('Save') },
	{ icon: <PrintIcon />, name: 'Print', onClick: () => console.log('Print') },
	{ icon: <ShareIcon />, name: 'Share', onClick: () => console.log('Share') },
];

const SaveDial = () => {
	return (
		<SpeedDial
			ariaLabel="save speed dial"
			sx={{ position: 'fixed', bottom: 16, right: 16 }}
			icon={<SpeedDialIcon />}
		>
			{actions.map((action) => (
				<SpeedDialAction
					key={action.name}
					icon={action.icon}
					tooltipTitle={action.name}
					onClick={action.onClick}
				/>
			))}
		</SpeedDial>
	);
};


export default SaveDial;
