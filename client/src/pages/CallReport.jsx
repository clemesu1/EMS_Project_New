import React from "react";
import { useSelector } from "react-redux";

import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";

import Masonry from "@mui/lab/Masonry";

const CallReport = () => {
  const callTransaction = useSelector((state) => state.callTransaction);
  const incidentDetails = useSelector((state) => state.incidentDetails);
  const patientDetails = useSelector((state) => state.patientDetails);
  const vehicleDetails = useSelector((state) => state.vehicleDetails);
  const patientHistory = useSelector((state) => state.patientHistory);
  const neuroResponse = useSelector((state) => state.neuroResponse);
  const abcs = useSelector((state) => state.abcs);
  const assessFindings = useSelector((state) => state.assessFindings);
  const respiratory = useSelector((state) => state.respiratory);
  const seizureAssessment = useSelector((state) => state.seizureAssessment);
  const toxicExposure = useSelector((state) => state.toxicExposure);
  const cardiacArrest = useSelector((state) => state.cardiacArrest);
  const chestPain = useSelector((state) => state.chestPain);
  const neonatalAssessment = useSelector((state) => state.neonatalAssessment);
  const obstetric = useSelector((state) => state.obstetric);
  const mechanismInjury = useSelector((state) => state.mechanismInjury);
  const traumaAssessment = useSelector((state) => state.traumaAssessment);
  const intervention = useSelector((state) => state.intervention);
  const medications = useSelector((state) => state.medications);
  const vitalSign = useSelector((state) => state.vitalSign);

  const emsData = {
    Call_Transaction: callTransaction,
    Patient_Details: patientDetails,
    Vehicle_Details: vehicleDetails,
    Incident_Details: incidentDetails,
    Patient_History: patientHistory,
    Neuro_Response: neuroResponse,
    ABCs: abcs,
    Assess_Findings: assessFindings,
    Respiratory: respiratory,
    Seizure_Assessment: seizureAssessment,
    ToxicExpo_Assessment: toxicExposure,
    Cardiac_Assessment: cardiacArrest,
    Chestpain_Assessment: chestPain,
    Neonatal_Assessment: neonatalAssessment,
    Obstetric: obstetric,
    Mechanism_Injury: mechanismInjury,
    Trauma_Assessment: traumaAssessment,
  };

  const multiPageData = {
    Interventions: intervention,
    Medications: medications,
    Vital_Sign: vitalSign,
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography gutterBottom variant="h5">
        Call Report
      </Typography>
      <Masonry columns={{ xs: 1, md: 3 }} spacing={3}>
        {/* <Grid container spacing={3}> */}
        {Object.keys(emsData).map((item, index) => (
          // <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper key={index}>
            <TableContainer>
              <Toolbar
                sx={{
                  pl: { sm: 2 },
                  pr: { xs: 1, sm: 1 },
                }}
              >
                <Typography
                  sx={{ flex: "1 1 100%" }}
                  variant="h6"
                  id="tableTitle"
                  component="div"
                >
                  {item.replace(/_/g, " ")}
                </Typography>
              </Toolbar>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell align="right">Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(emsData[item]).map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>{row.replace(/_/g, " ")}</TableCell>
                      <TableCell align="right">{emsData[item][row]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ))}
        {Object.keys(multiPageData).map((item, index) => (
          // <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Paper key={index}>
            <TableContainer>
              <Toolbar
                sx={{
                  pl: { sm: 2 },
                  pr: { xs: 1, sm: 1 },
                }}
              >
                <Typography
                  sx={{ flex: "1 1 100%" }}
                  variant="h6"
                  id="tableTitle"
                  component="div"
                >
                  {item.replace(/_/g, " ")}
                </Typography>
              </Toolbar>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Key</TableCell>
                    <TableCell align="right">Value</TableCell>
                    <TableCell align="right">Page</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {multiPageData[item]?.map((row, i) => (
                    <React.Fragment key={i}>
                      {Object.keys(row).map((value, j) => (
                        <TableRow
                          key={j}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {value}
                          </TableCell>
                          <TableCell align="right">{row[value]}</TableCell>
                          <TableCell align="right">{i}</TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ))}
      </Masonry>
    </Box>
  );
};

export default CallReport;
