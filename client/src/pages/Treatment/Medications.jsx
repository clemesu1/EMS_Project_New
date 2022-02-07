import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMedications } from "../../features/medications";
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const medicationsList = [
  "ASA",
  "Atrovent",
  "Benadryl",
  "Dextrose 25%",
  "Dextrose 5%",
  "Dextrose 50%",
  "Diazepam",
  "Electrical Shock",
  "Epi-Pen Adult",
  "Epi-Pen Jr",
  "Epinephrine 1:1000",
  "Epinephrine 1:10000",
  "Fentanyl",
  "Glucagon",
  "Midazolam",
  "Morphine",
  "Narcan",
  "Nitroglycerine",
  "Oral Glucose",
  "Oxygen",
  "Ringers Lactate",
  "Sodium Chloride 0.9%",
  "Ventolin",
];
const routes = [
  "Aerosol / Nebulizer Mask",
  "Bag valve - Mask/Tube",
  "Biphasic AED",
  "Biphasic Manual Defib",
  "Endotracheal",
  "High Concentration Mask",
  "Intramuscular",
  "Intranasal",
  "Intravenous",
  "MDI/Aerochamber",
  "Monophasic AED",
  "Monophasic Manual Defib",
  "Nasal Cannula",
  "Oral",
  "Other Mask/Device",
  "Pocket mask",
  "Rectal",
  "Simple Face Mask",
  "Subcutaneous",
  "Sublingual",
  "Topical",
  "Venturi Mask",
];
const effectsOnPatient = [
  "No Change",
  "Signs and Symptoms Improved",
  "Signs and Symptoms Eliminated",
  "Deteriorated",
];

const Medications = ({ page }) => {
  let dispatch = useDispatch();
  let medications = useSelector((state) => state.medications);

  const handleChange = (name, value) => {
    let id = page - 1;
    dispatch(setMedications({ name, value, id }));
  };

  return (
    <Container>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6} lg={8}>
          <Typography color="textSecondary" gutterBottom>
            Medication Given At
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack direction="row" spacing={2}>
              <DatePicker
                label="Date"
                defaultValue={null}
                value={Date.parse(medications[page - 1].Medic_Date)}
                onChange={(newValue) =>
                  handleChange("Medic_Date", newValue.toString())
                }
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
              <TextField
                label="Time"
                size="small"
                fullWidth
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                defaultValue=""
                value={medications[page - 1].Medic_Time}
                onChange={(e) => handleChange("Medic_Time", e.target.value)}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Button
            onClick={() => {
              handleChange("Medic_Date", format(new Date(), "MM/dd/yyyy"));
              handleChange("Medic_Time", format(new Date(), "HH:mm"));
            }}
            fullWidth
            variant="outlined"
          >
            Medication Now
          </Button>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel id="medic-given-label">Medication Given</InputLabel>
            <Select
              labelId="medic-given-label"
              id="medic-given"
              label="Medication Given"
              defaultValue=""
              value={medications[page - 1].Medic_Given}
              onChange={(e) => handleChange("Medic_Given", e.target.value)}
            >
              {medicationsList.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item container spacing={1} xs={12}>
          <Grid item xs={12}>
            <Typography color="textSecondary">Amount / Unit</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Amount"
              id="amount"
              size="small"
              fullWidth
              placeholder="0"
              value={medications[page - 1].Medic_Amount}
              onChange={(e) => handleChange("Medic_Amount", e.target.value)}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth size="small">
              <InputLabel id="unit-label">Unit</InputLabel>
              <Select
                labelId="unit-label"
                id="unit"
                label="Unit"
                value={medications[page - 1].Medic_Unit}
                onChange={(e) => handleChange("Medic_Unit", e.target.value)}
              >
                <MenuItem value="g">g</MenuItem>
                <MenuItem value="joules">joules</MenuItem>
                <MenuItem value="l/min">l/min</MenuItem>
                <MenuItem value="mcg">mcg</MenuItem>
                <MenuItem value="mg">mg</MenuItem>
                <MenuItem value="mg/hr">mg/hr</MenuItem>
                <MenuItem value="ml">ml</MenuItem>
                <MenuItem value="ml/hr">ml/hr</MenuItem>
                <MenuItem value="puff(s)">puff(s)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel id="route-label">Route</InputLabel>
            <Select
              labelId="route-label"
              id="route"
              label="Route"
              value={medications[page - 1].Route}
              onChange={(e) => handleChange("Route", e.target.value)}
            >
              {routes.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth size="small">
            <InputLabel id="effect-on-patient-label">
              Effect on Patient
            </InputLabel>
            <Select
              labelId="effect-on-patient-label"
              id="effect-on-patient"
              label="Effect on Patient"
              name="Effect_on_Patient"
              value={medications[page - 1].Effect_on_Patient}
              onChange={(e) =>
                handleChange("Effect_on_Patient", e.target.value)
              }
            >
              {effectsOnPatient.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Paramedic ID"
            id="amount"
            size="small"
            fullWidth
            value={medications[page - 1].Paramedic_ID}
            onChange={(e) => handleChange("Paramedic_ID", e.target.value)}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Medications;
