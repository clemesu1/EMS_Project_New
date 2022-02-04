import * as React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export default function TraumaTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{
                    p: 1,
                    bgcolor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900]
                }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TraumaTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

