import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setABCs } from '../../../features/abcs';

import { FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';

const ABCs = () => {
  let dispatch = useDispatch();
  let abcs = useSelector(state => state.abcs);

  const handleChange = (name, value) => dispatch(setABCs({ name, value }));

  return (
    <Grid container spacing={3} alignItems="flex-start" justifyContent="flex-end">
      <Grid item xs={12} md={2}>
        <Typography variant="h6">Airway Status</Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
          <FormControl component="fieldset" fullWidth >
            <RadioGroup row aria-label="airway-status" value={abcs.Airway_Status} onChange={(e) => handleChange('Airway_Status', e.target.value)}>
              <FormControlLabel value="Clear" control={<Radio />} label="Clear" />
              <FormControlLabel value="Completely Obstructed" control={<Radio />} label="Completely Obstructed" />
              <FormControlLabel value="Partially Obstructed" control={<Radio />} label="Partially Obstructed" />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography variant="h6">Breathing</Typography>
      </Grid>
      <Grid item container xs={12} md={10} spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Effort</FormLabel>
              <RadioGroup row aria-label="breath-effort" value={abcs.Breath_Effort} onChange={(e) => handleChange('Breath_Effort', e.target.value)}>
                <FormControlLabel value="Effortless" control={<Radio />} label="Effortless" />
                <FormControlLabel value="Laboured" control={<Radio />} label="Laboured" />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Rate</FormLabel>
              <RadioGroup row aria-label="breath-rate" value={abcs.Breath_Rate} onChange={(e) => handleChange('Breath_Rate', e.target.value)}>
                <FormControlLabel value="Fast" control={<Radio />} label="Fast" />
                <FormControlLabel value="Normal" control={<Radio />} label="Normal" />
                <FormControlLabel value="Slow" control={<Radio />} label="Slow" />
                <FormControlLabel value="Absent" control={<Radio />} label="Absent" />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Rhythm</FormLabel>
              <RadioGroup row aria-label="breath-rhythm" value={abcs.Breath_Rhythm} onChange={(e) => handleChange('Breath_Rhythm', e.target.value)}>
                <FormControlLabel value="Regular" control={<Radio />} label="Regular" />
                <FormControlLabel value="Irregular" control={<Radio />} label="Irregular" />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={12} md={2}>
        <Typography variant="h6">Circulation</Typography>
      </Grid>
      <Grid item xs={12} md={10}>
        <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
          <FormControl component="fieldset" fullWidth>
            <FormLabel component="legend">Site</FormLabel>
            <RadioGroup row aria-label="circul-site" value={abcs.Circul_Site} onChange={(e) => handleChange('Circul_Site', e.target.value)}>
              <FormControlLabel value="Carotid" control={<Radio />} label="Carotid" />
              <FormControlLabel value="Radial" control={<Radio />} label="Radial" />
              <FormControlLabel value="Brachial" control={<Radio />} label="Brachial" />
              <FormControlLabel value="Femoral" control={<Radio />} label="Femoral" />
              <FormControlLabel value="Apical" control={<Radio />} label="Apical" />
            </RadioGroup>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Rate</Typography>
          <ToggleButtonGroup
            color="primary"
            orientation="vertical"
            value={abcs.Circul_Rate}
            exclusive
            onChange={(event, value) => handleChange('Circul_Rate', value)}
          >
            <ToggleButton value="Rapid">Rapid</ToggleButton>
            <ToggleButton value="Normal">Normal</ToggleButton>
            <ToggleButton value="Slow">Slow</ToggleButton>
            <ToggleButton value="Absent">Absent</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Volume</Typography>
          <ToggleButtonGroup
            color="primary"
            orientation="vertical"
            value={abcs.Circul_Vol}
            exclusive
            onChange={(event, value) => handleChange('Circul_Vol', value)}
          >
            <ToggleButton value="Weak">Weak</ToggleButton>
            <ToggleButton value="Normal">Normal</ToggleButton>
            <ToggleButton value="Bounding">Bounding</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <Typography variant="subtitle2">Rhythm</Typography>
          <ToggleButtonGroup
            color="primary"
            orientation="vertical"
            value={abcs.Circul_Rhythm}
            exclusive
            onChange={(event, value) => handleChange('Circul_Rhythm', value)}
          >
            <ToggleButton value="Regular">Regular</ToggleButton>
            <ToggleButton value="Irregular">Irregular</ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Grid>
    </Grid>

  );
};

export default ABCs;
