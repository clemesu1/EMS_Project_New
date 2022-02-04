import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMechanismInjury } from '../../features/mechanismInjury';
import { Card, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material';

const injuryCauses = ["Aircraft related accident", "Assault", "Bicycle accident", "Bites", "Drowning / near-drowning", "Electrocution (non-lightning)", "Excessive cold", "Excessive heat", "Fall < 2 meters", "Fall > 2 meters", "Fire and flames", "Firearm injury", "Lightning", "Machinery accidents", "Mechanical suffocation", "Motor vehicle non-traffic accident", "Motor vehicle traffic accident", "Other", "Pedestrian traffic accident", "Sexual assault", "Smoke inhalation", "Stabbing", "Water transport accident"];
const humanFactors = ["Accidental", "Intentional (self-inflicted)", "Other", "Unknown"];
const injuryNatures = ["Blunt trauma", "Burn trauma", "Other", "Penetrating trauma"];
const equipmentList = ["Airbag deployed", "Child safety seat", "Eye protection", "Harness", "Helmet", "Lap Belt", "Personal floatation device", "Protective clothing / Gear", "Shoulder belt", "Unknown", "None", "Other"];

const MechanismOfInjury = () => {
  let dispatch = useDispatch();
  let mechanismInjury = useSelector(state => state.mechanismInjury);

  const handleChange = (name, value) => dispatch(setMechanismInjury({ name, value }));

  return (
    <Grid container spacing={3} >
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="work-related-radio-group">Work Related</FormLabel>
          <RadioGroup
            row
            aria-labelledby="work-related-radio-group"
            name="Work_related"
            value={mechanismInjury.Work_related}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          >
            <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="No" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel id="cause-of-injury-label">Cause of Injury</InputLabel>
          <Select
            labelId="cause-of-injury-label"
            id="cause-of-injury"
            label="Cause of Injury"
            defaultValue=""
            value={mechanismInjury.Cause_of_Injury}
            onChange={(e) => handleChange('Cause_of_Injury', e.target.value)}
          >
            {injuryCauses.map((item, index) => (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        {mechanismInjury.Cause_of_Injury === 'Other' &&
          <TextField
            size="small"
            label="Other"
            name="COI_Other"
            value={mechanismInjury.COI_Other}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            fullWidth
          />
        }
      </Grid>
      {mechanismInjury.Cause_of_Injury === 'Other' &&
        <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
          <TextField
            size="small"
            label="Other"
            name="COI_Other"
            value={mechanismInjury.COI_Other}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            fullWidth
          />
        </Grid>
      }
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel id="human-factor-label">Human Factor</InputLabel>
          <Select
            labelId="human-factor-label"
            id="human-factor"
            label="Human Factor"
            defaultValue=""
            value={mechanismInjury.Human_Factor}
            onChange={(e) => handleChange('Human_Factor', e.target.value)}
          >
            {humanFactors.map((item, index) => (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        {mechanismInjury.Human_Factor === 'Other' &&
          <TextField
            size="small"
            label="Other"
            name="HF_Other"
            value={mechanismInjury.HF_Other}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            fullWidth
          />
        }
      </Grid>
      {mechanismInjury.Human_Factor === 'Other' &&
        <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
          <TextField
            size="small"
            label="Other"
            name="HF_Other"
            value={mechanismInjury.HF_Other}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            fullWidth
          />
        </Grid>
      }
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel id="nature-of-injury-label">Nature of Resulting Injury</InputLabel>
          <Select
            labelId="nature-of-injury-label"
            id="nature-of-injury"
            label="Nature of Resulting Injury"
            defaultValue=""
            value={mechanismInjury.Nature_of_Injury}
            onChange={(e) => handleChange('Nature_of_Injury', e.target.value)}
          >
            {injuryNatures.map((item, index) => (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        {mechanismInjury.Nature_of_Injury === 'Other' &&
          <TextField
            size="small"
            label="Other"
            name="NOI_Other"
            value={mechanismInjury.NOI_Other}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            fullWidth
          />
        }
      </Grid>
      {mechanismInjury.Nature_of_Injury === 'Other' &&
        <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
          <TextField
            size="small"
            label="Other"
            name="NOI_Other"
            value={mechanismInjury.NOI_Other}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            fullWidth
          />
        </Grid>
      }
      <Grid item xs={12} md={6}>
        <FormControl fullWidth size="small">
          <InputLabel id="safety-protect-equip-label">Safety / Protective Equipment</InputLabel>
          <Select
            labelId="safety-protect-equip-label"
            id="safety-protect-equip"
            name="Safety_Protect_Equip"
            label="Safety / Protective Equipment"
            defaultValue=""
            value={equipmentList.Safety_Protect_Equip}
            onChange={(e) => handleChange('Safety_Protect_Equip', e.target.value)}
          >
            {humanFactors.map((item, index) => (
              <MenuItem key={index} value={item}>{item}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
        {mechanismInjury.Safety_Protect_Equip === 'Other' &&
          <TextField
            size="small"
            label="Other"
            name="SPE_Other"
            value={mechanismInjury.SPE_Other}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            fullWidth
          />
        }
      </Grid>
      {mechanismInjury.Safety_Protect_Equip === 'Other' &&
        <Grid item xs={12} md={6} sx={{ display: { xs: 'block', md: 'none' } }}>
          <TextField
            size="small"
            label="Other"
            name="SPE_Other"
            value={mechanismInjury.SPE_Other}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            fullWidth
          />
        </Grid>
      }
      <Grid item xs={12} sm={9}>
        <TextField
          id="comments"
          name="Comments"
          value={mechanismInjury.Comments}
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          label="Comments"
          multiline
          rows={6}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Card variant="outlined">
          <CardHeader title="M.V.C." sx={{ textAlign: 'center', color: 'white', bgcolor: 'navy' }} />
          <CardContent>

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default MechanismOfInjury;
