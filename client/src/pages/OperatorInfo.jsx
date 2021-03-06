import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCallTransaction } from "../features/callTransaction";
import { toggle } from "../features/drawerToggle";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

export default function OperatorInfo() {
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const driverId = data.get("driverId");
    const attendantId = data.get("attendantId");
    const assistantId = data.get("assistantId");
    const vehicleId = data.get("vehicleId");
    const vehicleStatus = data.get("vehicleStatus");

    dispatch(
      setCallTransaction({
        driverId,
        attendantId,
        assistantId,
        vehicleId,
        vehicleStatus,
      })
    );

    dispatch(toggle());
    navigate("/call-details/vehicle-details");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <HeadsetMicIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Operator Information
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            autoFocus
            id="vehicleId"
            label="Vehicle ID"
            name="vehicleId"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="driverId"
            label="Driver ID"
            name="driverId"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="attendantId"
            label="Attendant ID"
            name="attendantId"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="assistantId"
            label="Assistant ID"
            name="assistantId"
          />
          <FormControl margin="normal" required fullWidth>
            <InputLabel id="select-vehicle-status-label">
              Vehicle Status
            </InputLabel>
            <Select
              labelId="select-vehicle-status-label"
              id="vehicleStatus"
              label="Vehicle Status"
              name="vehicleStatus"
              defaultValue=""
            >
              <MenuItem value={"on-site"}>on-site</MenuItem>
              <MenuItem value={"off-site"}>off-site</MenuItem>
              <MenuItem value={"ILT"}>ILT</MenuItem>
            </Select>
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
