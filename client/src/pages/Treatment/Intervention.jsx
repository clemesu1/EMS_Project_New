import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIntervention } from '../../features/intervention';
import { Button, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material';

const procedureTypes = ["None", "Airway cleared", "Airway patency", "Ventilation", "IV initiation", "Blood sle drawn", "Chest compressions", "Delivery", "Bleeding control", "Extremity immobilization", "Spinal immobilization", "MAST", "Emergency rapid extrication", "Physical restraint", "Other"];

const airwayClearedDevices = ["Suction", "Heimlich maneuver", "Laryngoscopy/Magill forceps"];
const airwayPatencyDevices = ["Manual airway techniques", "OPA", "NPA", "EOA", "EGTA", "Combitube", "PTLA", "LMA", "ETI", "NTI"];
const ventilationDevices = ["Pocket mask", "BVM", "Ventilator"];
const ivInitiationDevices = ["IV Cathlon", "Butterfly"];
const spinalImmobilizationDevices = ["Cervical collar", "Long spine board", "Head immobilizer", "KED", "Short spine board"];
const extremityImmobilizationDevices = ["Commercial extremity immobilization device", "Improvised extremity immobilization device", "Traction splint", "MAST", "Sling"];
const bleedingControlDevices = ["Dressing", "Direct pressure", "Pressure points", "Tourniquet"];

const adminMedication = ["ET", "Inhalation", "IM", "IV ", "PO", "SQ ", "SL ", "IO ", "Rectal ", "Topical"];
const adminOxygen = ["Nasal cannula", "High concentration mask", "Medium concentration mask", "Venturi mask", "Pocket mask", "BVM", "Other positive pressure device"];
const adminIVFluid = ["Left hand", "Right hand", "Left forearm", "Right forearm", "Left antecubital", "Right antecubital", "Left lower extremity", "Right lower extremity", "Left external jugular", "Right external jugular", "Other"];


const Intervention = ({ page }) => {
  let dispatch = useDispatch();
  let intervention = useSelector(state => state.intervention);

  const handleChange = (name, value) => {
    let id = page - 1;
    dispatch(setIntervention({ name, value, id }));
  };

  const renderAdminRoutes = () => {
    switch (intervention[page - 1].Treatment_Type) {
      case "Medication": {
        return adminMedication.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      case "Oxygen": {
        return adminOxygen.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      case "IV Fluid": {
        return adminIVFluid.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      default: return <MenuItem value=""></MenuItem>
    }
  }

  const renderProcedureTypes = () => {
    switch (intervention[page - 1].Procedur) {
      case "Airway cleared": {
        return airwayClearedDevices.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      case "Airway patency": {
        return airwayPatencyDevices.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      case "Ventilation": {
        return ventilationDevices.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      case "IV initiation": {
        return ivInitiationDevices.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      case "Spinal immobilization": {
        return spinalImmobilizationDevices.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      case "Extremity immobilization": {
        return extremityImmobilizationDevices.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      case "Bleeding control": {
        return bleedingControlDevices.map((item, index) => (
          <MenuItem key={index} value={item}>{item}</MenuItem>
        ))
      }
      default: {
        return <MenuItem value=""></MenuItem>
      }
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
          <Typography color="textSecondary" gutterBottom>Procedure</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => handleChange('Proc_Time_Start', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Start Time</Button>
                  <TextField onClick={() => handleChange('Proc_Time_Start', new Date().toLocaleTimeString('en-US'))} value={intervention[page - 1].Proc_Time_Start} fullWidth size="small" />
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => handleChange('Proc_Time_End', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">End Time</Button>
                  <TextField onClick={() => handleChange('Proc_Time_End', new Date().toLocaleTimeString('en-US'))} value={intervention[page - 1].Proc_Time_End} fullWidth size="small" />
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Stack spacing={2}>
                <FormControl fullWidth size="small">
                  <InputLabel id="procedure-label">Type of Procedure</InputLabel>
                  <Select
                    labelId="procedure-label"
                    id="procedure"
                    label="Type of Procedure"
                    defaultValue=""
                    value={intervention[page - 1].Procedur}
                    onChange={(e) => handleChange('Procedur', e.target.value)}
                  >
                    {procedureTypes.map((item, index) => (
                      <MenuItem key={index} value={item}>{item}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth size="small">
                  <InputLabel id="device-method-label">Device / Method</InputLabel>
                  <Select
                    labelId="device-method-label"
                    id="device-method"
                    label="Device / Method"
                    defaultValue=""
                    value={intervention[page - 1].Device_Method}
                    onChange={(e) => handleChange('Device_Method', e.target.value)}
                  >
                    {renderProcedureTypes()}
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} lg={4} alignItems="flex-start">
              {intervention[page - 1].Procedur === "Other" &&
                <TextField
                  size="small"
                  label="Other"
                  name="Proc_Other"
                  value={intervention[page - 1].Proc_Other}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                />
              }
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                size="small"
                label="Technician ID"
                name="Procedur_Technician"
                value={intervention[page - 1].Procedur_Technician}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                size="small"
                label="Device Size"
                name="Device_Size"
                value={intervention[page - 1].Device_Size}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth size="small">
                <InputLabel id="device-method-label">Outcome</InputLabel>
                <Select
                  labelId="device-method-label"
                  id="device-method"
                  label="Outcome"
                  defaultValue=""
                  value={intervention[page - 1].Procedur_outcome}
                  onChange={(e) => handleChange('Procedur_outcome', e.target.value)}
                >
                  <MenuItem value="Stable">Stable</MenuItem>
                  <MenuItem value="Improved">Improved</MenuItem>
                  <MenuItem value="Deteriorated">Deteriorated</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <FormControl>
                <FormLabel id="successful-radio-group">Successful</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="successful-radio-group"
                  name="Procedur_success"
                  value={intervention[page - 1].Procedur_success}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: 2, width: '100%' }}>
          <Typography color="textSecondary" gutterBottom>Treatment</Typography>
          <Grid container spacing={3}>
            <Grid item container xs={12} md={8} spacing={3} alignItems="flex-end">
              <Grid item xs={12} md={6} alignItems="flex-end">
                <TextField
                  size="small"
                  label="Technician ID"
                  name="Treatment_technician"
                  value={intervention[page - 1].Treatment_technician}
                  onChange={(e) => handleChange(e.target.name, e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6} alignItems="flex-end">
                <Stack direction="row" spacing={2}>
                  <Button onClick={() => handleChange('Treatment_time', new Date().toLocaleTimeString('en-US'))} fullWidth variant="outlined">Total Time</Button>
                  <TextField onClick={() => handleChange('Treatment_time', new Date().toLocaleTimeString('en-US'))} value={intervention[page - 1].Treatment_time} fullWidth size="small" />
                </Stack>
              </Grid>
            </Grid>
            <Grid item container spacing={1} xs={12} md={4}>
              <Grid item xs={12}>
                <Typography color="textSecondary">Dosage / Amount</Typography>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label="Amount"
                  id="amount"
                  size="small"
                  fullWidth
                  placeholder="0"
                  value={intervention[page - 1].Dosage_Amount}
                  onChange={(e) => handleChange('Dosage_Amount', e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth size="small">
                  <InputLabel id="unit-label">Unit</InputLabel>
                  <Select
                    labelId="unit-label"
                    id="unit"
                    label="Unit"
                    value={intervention[page - 1].Dosage_Unit}
                    onChange={(e) => handleChange('Dosage_Unit', e.target.value)}
                  >
                    <MenuItem value="mcg">mcg</MenuItem>
                    <MenuItem value="mg">mg</MenuItem>
                    <MenuItem value="g">g</MenuItem>
                    <MenuItem value="cm">cm</MenuItem>
                    <MenuItem value="ml">ml</MenuItem>
                    <MenuItem value="l">l</MenuItem>
                    <MenuItem value="l/min">l/min</MenuItem>
                    <MenuItem value="joules">joules</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={2}>
                <FormControl fullWidth size="small">
                  <InputLabel id="treatment-type-label">Type of Treatment</InputLabel>
                  <Select
                    labelId="treatment-type-label"
                    id="treatment-type"
                    label="Type of Treatment"
                    defaultValue=""
                    value={intervention[page - 1].Treatment_Type}
                    onChange={(e) => handleChange('Treatment_Type', e.target.value)}
                  >
                    <MenuItem value="Medication">Medication</MenuItem>
                    <MenuItem value="IV Fluid">IV Fluid</MenuItem>
                    <MenuItem value="Oxygen">Oxygen</MenuItem>
                    <MenuItem value="Defibrillation">Defibrillation</MenuItem>
                    <MenuItem value="No Treatment">No Treatment</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size="small">
                  <InputLabel id="treatment-outcome-label">Treatment Outcome</InputLabel>
                  <Select
                    labelId="treatment-outcome-label"
                    id="treatment-outcome"
                    label="Treatment Outcome"
                    defaultValue=""
                    value={intervention[page - 1].Treatment_Outcome}
                    onChange={(e) => handleChange('Treatment_Outcome', e.target.value)}
                  >
                    <MenuItem value="Unchanged">Unchanged</MenuItem>
                    <MenuItem value="Improved">Improved</MenuItem>
                    <MenuItem value="Deteriorated">Deteriorated</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6} alignItems="flex-start">
              <Stack spacing={2}>
                <FormControl fullWidth size="small">
                  <InputLabel id="admin-route-label">Administration Route</InputLabel>
                  <Select
                    labelId="admin-route-label"
                    id="admin-route"
                    label="Administration Route"
                    defaultValue=""
                    value={intervention[page - 1].Admin_Route}
                    onChange={(e) => handleChange('Admin_Route', e.target.value)}
                  >
                    {renderAdminRoutes()}
                  </Select>
                </FormControl>
                {intervention[page - 1].Admin_Route === "Other" &&
                  <TextField
                    size="small"
                    label="Other"
                    name="Adm_Rt_Other"
                    value={intervention[page - 1].Adm_Rt_Other}
                    onChange={(e) => handleChange(e.target.name, e.target.value)}
                    fullWidth
                  />
                }
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Intervention;
