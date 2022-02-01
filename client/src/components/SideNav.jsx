import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import { Call as CallDetailsIcon, Assessment as AssessmentIcon, Healing as TreatmentIcon, Description as CallReportIcon, HeadsetMic as OperatorDetailsIcon } from '@mui/icons-material';

const SideNav = (props) => {
    let navigate = useNavigate();
    let toggle = useSelector((state) => state.drawerToggle.value)

    const itemsList = [
        {
            text: 'Call Details',
            icon: <CallDetailsIcon />,
            onClick: () => navigate('/call-details'),
        },
        {
            text: 'Assessment',
            icon: <AssessmentIcon />,
            onClick: () => navigate('/assessment'),
        },
        {
            text: 'Treatment',
            icon: <TreatmentIcon />,
            onClick: () => navigate('/treatment'),
        },
        {
            text: 'Call Report',
            icon: <CallReportIcon />,
            onClick: () => navigate('/call-report'),
        },
        {
            text: 'Operator Details',
            icon: <OperatorDetailsIcon />,
            onClick: () => navigate('/operator-details'),
        },
    ];

    return (
        <Box>
            <Toolbar />
            <Divider />
            <List>
                {itemsList.map(item => {
                    const { text, icon, onClick } = item;
                    return (
                        <ListItem button key={text} onClick={onClick}  disabled={!toggle}>
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}
                            <ListItemText primary={text} />
                        </ListItem>
                    );
                })}
            </List>
        </Box>
    );

}

export default SideNav;
