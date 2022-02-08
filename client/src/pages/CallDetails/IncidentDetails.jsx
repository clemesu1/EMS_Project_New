import React from "react";
import {
  Autocomplete,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setIncidentDetails,
  setIncidentLocation,
} from "../../features/incidentDetails";
import ListboxComponent from "../../components/ListboxComponent";
import DispatchCodeMask from "../../components/DispatchCodeMask";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { format } from "date-fns";

const serviceCodes = [
  "1A",
  "1B",
  "1C",
  "1D",
  "1E",
  "1F",
  "1G",
  "1H",
  "1I",
  "1J",
  "1K",
  "1L",
  "1M",
  "1N",
  "1O",
  "1P",
  "1Q",
  "1R",
  "1S",
  "1T",
  "1U",
  "1V",
  "1W",
  "1X",
  "1Y",
  "1Z",
  "2A",
  "2B",
  "2C",
  "2D",
  "2E",
  "2F",
  "2G",
  "2H",
  "2I",
  "2J",
  "2K",
  "2L",
  "2M",
  "2N",
  "2O",
  "2P",
  "2Q",
  "2R",
  "2S",
  "2T",
  "2U",
  "2V",
  "2W",
  "2X",
  "2Y",
  "2Z",
  "3A",
  "3B",
  "3C",
  "3D",
  "3E",
  "3F",
  "3G",
  "3H",
  "3I",
  "3J",
  "3K",
  "3L",
  "3M",
  "3N",
  "3O",
  "3P",
  "3Q",
  "3R",
  "3S",
  "3T",
  "3U",
  "3V",
  "3W",
  "3X",
  "3Y",
  "3Z",
  "4A",
  "4B",
  "4C",
  "4D",
  "4E",
  "4F",
  "4G",
  "4H",
  "4I",
  "4J",
  "4K",
  "4L",
  "4M",
  "4N",
  "4O",
  "4P",
  "4Q",
  "4R",
  "4S",
  "4T",
  "4U",
  "4V",
  "4W",
  "4X",
  "4Y",
  "4Z",
  "5A",
  "5B",
  "5C",
  "5D",
  "5E",
  "5F",
  "5G",
  "5H",
  "5I",
  "5J",
  "5K",
  "5L",
  "5M",
  "5N",
  "5O",
  "5P",
  "5Q",
  "5R",
  "5S",
  "5T",
  "5U",
  "5V",
  "5W",
  "5X",
  "5Y",
  "5Z",
  "6A",
  "6B",
  "6C",
  "6D",
  "6E",
  "6F",
  "6G",
  "6H",
  "6I",
  "6J",
  "6K",
  "6L",
  "6M",
  "6N",
  "6O",
  "6P",
  "6Q",
  "6R",
  "6S",
  "6T",
  "6U",
  "6V",
  "6W",
  "6X",
  "6Y",
  "6Z",
  "7A",
  "7B",
  "7C",
  "7D",
  "7E",
  "7F",
  "7G",
  "7H",
  "7I",
  "7J",
  "7K",
  "7L",
  "7M",
  "7N",
  "7O",
  "7P",
  "7Q",
  "7R",
  "7S",
  "7T",
  "7U",
  "7V",
  "7W",
  "7X",
  "7Y",
  "7Z",
  "8A",
  "8B",
  "8C",
  "8D",
  "8E",
  "8F",
  "8G",
  "8H",
  "8I",
  "8J",
  "8K",
  "8L",
  "8M",
  "8N",
  "8O",
  "8P",
  "8Q",
  "8R",
  "8S",
  "8T",
  "8U",
  "8V",
  "8W",
  "8X",
  "8Y",
  "8Z",
  "9A",
  "9B",
  "9C",
  "9D",
  "9E",
  "9F",
  "9G",
  "9H",
  "9I",
  "9J",
  "9K",
  "9L",
  "9M",
  "9N",
  "9O",
  "9P",
  "9Q",
  "9R",
  "9S",
  "9T",
  "9U",
  "9V",
  "9W",
  "9X",
  "9Y",
  "9Z",
];
const serviceTypes = [
  "911",
  "IHT (Scheduled)",
  "IHT (Unscheduled)",
  "Intercept",
  "Mutual Aid",
  "Stand By",
];
const destinationDeterminations = [
  "Protocol",
  "Patient or Family preference",
  "Closest facility",
  "Diversion",
  "Law Enforcement Choice",
  "On-Line Md Choice",
  "Patient's Md Choice",
  "Specialty Resource Centre",
  "Other",
];
const destinationLocationTypes = [
  "Hospital",
  "EMH ",
  "Nursing home",
  "Recreation / sport area",
  "Doctor's office",
  "Airport",
  "Job site",
  "Highway or street",
  "Residence",
  "Public building",
  "Educational institution",
  "Other EMS unit",
  "Other",
];
const sceneFacilityCodes = [
  "15",
  "39",
  "61",
  "22",
  "51",
  "62",
  "53",
  "41",
  "31",
  "35",
  "42",
  "27",
  "36",
  "63",
  "37",
  "33",
  "72",
  "11",
  "12",
  "34",
  "49",
  "48",
  "13",
  "23",
  "25",
  "43",
  "14",
  "32",
  "21",
  "26",
  "64",
  "38",
];
const facilityCodes = [
  "Saint John Regional Hospital",
  "St. Joseph's Hospital",
  "Ridewood Veterans Wing",
  "Sussex Health Center",
  "Fundy Health Center",
  "Charlotte County Hospital",
  "DECH",
  "Loch Lomond Villa",
  "Saint John Saint Stephen Nursing Home",
  "Kennebec Manor",
  "Centracare",
  "Carleton Kirk Nursing Home",
  "Rocmaura Nursing Home",
  "Ruth Ross",
  "Grand Bay Rehab",
  "Turnbull Nursing Home",
  "VA Snow Center",
];
const patientDispositions = [
  "Treated and Transported By Ambulance Crew",
  "Treated and Transported By Private Vehicle",
  "Treated and Released",
  "Patient Assessed and Transferred to Other Agency at Scene",
  "Advanced Life Support Intercept",
  "No Treatment Rendered",
  "Patient Refused Treatment",
  "DOA",
  "Call Cancelled En Route",
  "No Patient Found",
  "Other",
];
const factorsAffectingEMS = [
  "Adverse weather",
  "Adverse road conditions",
  "Vehicle problems",
  "Unsafe scene",
  "Prolonged extrication (>20 min)",
  "Hazardous materials",
  "Inaccurate or Incomplete directions",
  "Other",
];

const IncidentDetails = () => {
  let dispatch = useDispatch();
  let incidentDetails = useSelector((state) => state.incidentDetails);
  let patientDetails = useSelector((state) => state.patientDetails);

  const handleChange = (name, value) =>
    dispatch(setIncidentDetails({ name, value }));

  const handleSameAddress = (e) => {
    e.preventDefault();

    const street = patientDetails.Street;
    const city = patientDetails.Community;
    const province = patientDetails.Province;
    const postalCode = patientDetails.PostalCode;

    dispatch(setIncidentLocation({ street, city, province, postalCode }));
  };

  const [inputValue, setInputValue] = React.useState("");

  return (
    <Grid container spacing={3}>
      <Grid container item spacing={3} xs={12}>
        <Grid item xs={12} md={4}>
          <Autocomplete
            value={incidentDetails.Service_Code || serviceCodes[0]}
            onChange={(event, newValue) =>
              handleChange("Service_Code", newValue)
            }
            inputValue={inputValue}
            onInputChange={(event, newInputValue) =>
              setInputValue(newInputValue)
            }
            ListboxComponent={ListboxComponent}
            disableListWrap
            defaultValue=""
            options={serviceCodes}
            renderInput={(params) => (
              <TextField {...params} size="small" label="Service Code" />
            )}
            renderOption={(props, option) => [props, option]}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <FormControl fullWidth size="small">
              <InputLabel id="service-type-label">Service Type</InputLabel>
              <Select
                labelId="service-type-label"
                id="service-type"
                name="Service_Type"
                defaultValue=""
                value={incidentDetails.Service_Type}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
                label="Service Code"
              >
                {serviceTypes.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Dispatch Code"
              fullWidth
              size="small"
              name="Dispatch_Code"
              placeholder="__-__-__"
              value={incidentDetails.Dispatch_Code}
              onChange={(e) => handleChange("Dispatch_Code", e.target.value)}
              InputProps={{
                inputComponent: DispatchCodeMask,
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DatePicker
                label="Date of Incident"
                value={incidentDetails.Date_of_Incident}
                onChange={(newValue) =>
                  handleChange("Date_of_Incident", newValue.toString())
                }
                renderInput={(params) => (
                  <TextField fullWidth size="small" {...params} />
                )}
              />
              <TextField
                label="Time of Incident"
                size="small"
                fullWidth
                type="time"
                value={incidentDetails.Time_of_Incident || ""}
                onChange={(e) =>
                  handleChange("Time_of_Incident", e.target.value)
                }
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Stack>
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: 2, w: "100%" }}>
          <Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
            Incident Location
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={9}>
              <TextField
                label="Street Address"
                size="small"
                fullWidth
                value={incidentDetails.Inc_Street}
                onChange={(e) => handleChange("Inc_Street", e.target.value)}
              />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={3}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Button onClick={handleSameAddress} fullWidth variant="outlined">
                Same as Patient Address
              </Button>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="City"
                size="small"
                fullWidth
                value={incidentDetails.Inc_Community}
                onChange={(e) => handleChange("Inc_Community", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Province"
                size="small"
                fullWidth
                value={incidentDetails.Inc_Province}
                onChange={(e) => handleChange("Inc_Province", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Postal Code"
                size="small"
                fullWidth
                value={incidentDetails.Inc_PostalCode}
                onChange={(e) => handleChange("Inc_PostalCode", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sx={{ display: { xs: "block", md: "none" } }}>
              <Button onClick={handleSameAddress} fullWidth variant="outlined">
                Same as Patient Address
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <FormControl size="small" fullWidth>
              <InputLabel id="incident-location-type-label">
                Incident Location Type
              </InputLabel>
              <Select
                labelId="incident-location-type-label"
                id="incident-location-type"
                name="Inc_Loc_Type"
                defaultValue=""
                value={incidentDetails.Inc_Loc_Type}
                onChange={(e) => handleChange("Inc_Loc_Type", e.target.value)}
                label="Incident Location Type"
              >
                <MenuItem value={"Yes"}>Yes</MenuItem>
                <MenuItem value={"No"}>No</MenuItem>
              </Select>
            </FormControl>

            <FormControl size="small" fullWidth>
              <InputLabel id="dest-determinant-label">
                Destination Determination
              </InputLabel>
              <Select
                labelId="dest-determinant-label"
                id="dest-determinant"
                name="Dest_Determinant"
                defaultValue=""
                value={incidentDetails.Dest_Determinant}
                onChange={(e) =>
                  handleChange("Dest_Determinant", e.target.value)
                }
                label="Destination Determination"
              >
                {destinationDeterminations.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {incidentDetails.Dest_Determinant === "Other" && (
              <TextField
                label="Other"
                size="small"
                fullWidth
                value={incidentDetails.DD_Other}
                onChange={(e) => handleChange("DD_Other", e.target.value)}
                sx={{ display: { xs: "block", md: "none" } }}
              />
            )}

            <FormControl size="small" fullWidth>
              <InputLabel id="destination-location-type-label">
                Destination Location Type
              </InputLabel>
              <Select
                labelId="destination-location-type-label"
                id="destination-location-type"
                name="Dest_Loc_Type"
                defaultValue=""
                value={incidentDetails.Dest_Loc_Type}
                onChange={(e) => handleChange("Dest_Loc_Type", e.target.value)}
                label="Destination Location Type"
              >
                {destinationLocationTypes.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            {incidentDetails.Dest_Determinant === "Other" && (
              <TextField
                label="Other"
                size="small"
                fullWidth
                value={incidentDetails.DD_Other}
                onChange={(e) => handleChange("DD_Other", e.target.value)}
                sx={{ display: { xs: "none", md: "block" } }}
              />
            )}
            <TextField
              label="Geographic Locator"
              size="small"
              fullWidth
              value={incidentDetails.Geo_Locator}
              onChange={(e) => handleChange("Geo_Locator", e.target.value)}
            />
            <FormControl size="small" fullWidth>
              <InputLabel id="scene-facility-code-label">
                Scene Facility Code
              </InputLabel>
              <Select
                labelId="scene-facility-code-label"
                id="scene-facility-code"
                name="Scene_Facility_Code"
                defaultValue=""
                value={incidentDetails.Scene_Facility_Code}
                onChange={(e) =>
                  handleChange("Scene_Facility_Code", e.target.value)
                }
                label="Scene Facility Code"
              >
                {sceneFacilityCodes.map((item, index) => (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper variant="outlined" sx={{ p: 2, w: "100%" }}>
          <Typography color="textSecondary" gutterBottom sx={{ mb: 2 }}>
            Destination Location
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth size="small">
                <InputLabel id="dest-facility-code-label">
                  Facility Code
                </InputLabel>
                <Select
                  labelId="dest-facility-code-label"
                  id="dest-facility-code"
                  name="Dest_Facility_Code"
                  defaultValue=""
                  value={incidentDetails.Dest_Facility_Code}
                  onChange={(e) =>
                    handleChange("Dest_Facility_Code", e.target.value)
                  }
                  label="Facility Code"
                >
                  {facilityCodes.map((item, index) => (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Street Address"
                size="small"
                fullWidth
                value={incidentDetails.Dest_Street}
                onChange={(e) => handleChange("Dest_Street", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="City"
                size="small"
                fullWidth
                value={incidentDetails.Dest_Community}
                onChange={(e) => handleChange("Dest_Community", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Province"
                size="small"
                fullWidth
                value={incidentDetails.Dest_Province}
                onChange={(e) => handleChange("Dest_Province", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                label="Postal Code"
                size="small"
                fullWidth
                value={incidentDetails.Dest_PostalCode}
                onChange={(e) =>
                  handleChange("Dest_PostalCode", e.target.value)
                }
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl size="small" fullWidth>
          <InputLabel id="patient-contact-label">Patient Contact</InputLabel>
          <Select
            labelId="patient-contact-label"
            id="patient-contact"
            name="Patient_Contact"
            defaultValue=""
            value={incidentDetails.Patient_Contact}
            onChange={(e) => handleChange("Patient_Contact", e.target.value)}
            label="Patient Contact"
          >
            <MenuItem value={"Yes"}>Yes</MenuItem>
            <MenuItem value={"No"}>No</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={8} container spacing={3}>
        <Grid item xs={12} md={6}>
          <FormControl size="small" fullWidth>
            <InputLabel id="patient-disposition-label">
              Patient Disposition
            </InputLabel>
            <Select
              labelId="patient-disposition-label"
              id="patient-disposition"
              name="Patient_Disposition"
              defaultValue=""
              value={incidentDetails.Patient_Disposition}
              onChange={(e) =>
                handleChange("Patient_Disposition", e.target.value)
              }
              label="Patient Disposition"
            >
              {patientDispositions.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {incidentDetails.Patient_Disposition === "Other" && (
          <Grid item xs={12} md={6}>
            <TextField
              size="small"
              label="Other"
              value={incidentDetails.Pt_Disp_Other}
              onChange={(e) => handleChange("Pt_Disp_Other", e.target.value)}
              fullWidth
            />
          </Grid>
        )}
      </Grid>
      <Grid item container xs={12} md={6} spacing={3}>
        <Grid item xs={12}>
          <FormControl size="small" fullWidth>
            <InputLabel id="fact-affect-ems-label">
              Factors Affecting EMS
            </InputLabel>
            <Select
              labelId="fact-affect-ems-label"
              id="fact-affect-ems"
              name="Fact_Affect_EMS"
              defaultValue=""
              value={incidentDetails.Fact_Affect_EMS}
              onChange={(e) => handleChange("Fact_Affect_EMS", e.target.value)}
              label="Factors Affecting EMS"
            >
              {factorsAffectingEMS.map((item, index) => (
                <MenuItem key={index} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {incidentDetails.Fact_Affect_EMS === "Other" && (
          <Grid item xs={12}>
            <TextField
              size="small"
              label="Other"
              name="Fact_Other"
              value={incidentDetails.Fact_Other}
              onChange={(e) => handleChange("Fact_Other", e.target.value)}
              fullWidth
            />
          </Grid>
        )}
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper variant="outlined" sx={{ p: 2, w: "100%" }}>
          <Typography color="textSecondary" gutterBottom>
            Service Payment
          </Typography>
          <Stack direction="row" spacing={3}>
            <TextField
              size="small"
              label="Response"
              name="Service_Payment_Respons"
              value={incidentDetails.Service_Payment_Respons}
              onChange={(e) =>
                handleChange("Service_Payment_Respons", e.target.value)
              }
              fullWidth
            />
            <TextField
              size="small"
              label="Number"
              name="Service_Payment_Number"
              value={incidentDetails.Service_Payment_Number}
              onChange={(e) =>
                handleChange("Service_Payment_Number", e.target.value)
              }
              fullWidth
            />
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default IncidentDetails;
