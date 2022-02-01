import * as React from 'react';
import { Tab } from '@mui/material';
import { Link } from 'react-router-dom';

export default function LinkTab(props) {
    return (
        <Tab
            component={Link}
            to={props.path}
            {...props}
        />
    );
}
