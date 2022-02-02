import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAssessFindings, toggleAssessFindItem, toggleBodyAreaFindItem } from '../../../features/assessFindings';
import { Checkbox, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';

const assessmentFindingsList = ["Abnormal Motor Function", "Abnormal Pulses", "Abnormal Sensation", "Abrasion", "Accessory Muscle Use", "Amputation", "Arterial Bleeding", "Bleeding Controlled", "Breath Sounds Decreased On Left", "Breath Sounds Decreased On Right", "Burn", "Coughing Non-Productive", "Coughing Productive", "Crackles/Rales", "Crowning", "Crush", "Deceased Sound", "Deformity", "Discoloration", "Dislocation Fracture", "Distention", "Drainage", "Edema", "Erythema", "Flail Segment", "Guarding", "Gunshot", "JVD", "Laceration", "Lesion", "Mass", "Murmur", "Normal", "Not Assessed", "Other", "Pain", "Pain On Movement", "Paralysis", "Puncture/Stab", "SQ Air", "Stridor", "Tender Para-Spinous", "Tender Spines Process", "Tenderness", "Tracheal Deviation", "Unstable", "Unstable Pelvis", "Venous Bleeding", "Vomiting", "Weakness", "Wheezing"];
const bodyAreaAssessedList = ["Abdomen (Left Lower Quadrant)", "Abdomen (Left Upper Quadrant)", "Abdomen (Right Lower Quadrant)", "Abdomen (Right Upper Quadrant)", "Arm (Left)", "Arm (Right)", "Back (Cervical)", "Back (Lumbar/Sacral)", "Back (Thoracic)", "Breast (Left)", "Breast (Right)", "Chest (Breath Sounds)", "Chest (Heart)", "Chest (Physical Exam)", "Ear (Left)", "Ear (Right)", "Eye (Left)", "Eye (Right)", "Foot (Left)", "Foot (Right)", "Genitalia", "Hand (Left)", "Hand (Right)", "Head", "Leg (Left)", "Leg (Right)", "Neck (Anterior)", "No Physical Exam", "Other", "Pelvic Area", "Scalp", "Vaginal"];

const AssessmentFindings = () => {

  let dispatch = useDispatch();
  let assessFindings = useSelector(state => state.assessFindings);

  const handleChange = (name, value) => dispatch(setAssessFindings({ name, value }));

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Stack>
          <Typography variant="h6">Assessment Finding</Typography>
          <Paper variant="outlined" sx={{ width: '100%' }}>
            <List sx={{
              width: '100%',
              maxHeight: '25rem',
              overflow: 'auto'
            }}>
              {assessmentFindingsList.map((item, index) => {
                const labelId = `assessment-findings-list-label-${item}`;
                return (
                  <ListItem key={index} component="div" dense disablePadding>
                    <ListItemButton role={undefined} onClick={() => dispatch(toggleAssessFindItem(item))}>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={assessFindings.Assess_Find.indexOf(item) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={item} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack>
          <Typography variant="h6">Body Area Assessed</Typography>
          <Paper variant="outlined" sx={{ width: '100%' }}>
            <List sx={{
              width: '100%',
              maxHeight: '25rem',
              overflow: 'auto'
            }}>
              {bodyAreaAssessedList.map((item, index) => {
                const labelId = `body-area-assessed-list-label-${item}`;
                return (
                  <ListItem key={index} component="div" dense disablePadding>
                    <ListItemButton role={undefined} onClick={() => dispatch(toggleBodyAreaFindItem(item))}>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={assessFindings.Body_Area_Find.indexOf(item) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <ListItemText id={labelId} primary={item} />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Other"
          size="small"
          fullWidth
          value={assessFindings.Find_Other}
          onChange={(e) => handleChange('Find_Other', e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default AssessmentFindings;
