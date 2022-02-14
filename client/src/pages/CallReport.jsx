import React from "react";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  const forms = [
    {
      title: "Call Transaction",
      data: callTransaction,
    },
    {
      title: "Patient Details",
      data: patientDetails,
    },
    {
      title: "Vehicle Details",
      data: vehicleDetails,
    },
    {
      title: "Incident Details",
      data: incidentDetails,
    },
    {
      title: "Patient History",
      data: patientHistory,
    },
    {
      title: "Patient History",
      data: patientHistory,
    },
    {
      title: "Neuro Response",
      data: neuroResponse,
    },
    {
      title: "ABC's",
      data: abcs,
    },
    {
      title: "Assessment Findings",
      data: assessFindings,
    },
    {
      title: "Respiratory Assessment",
      data: respiratory,
    },
    {
      title: "Seizure Assessment",
      data: seizureAssessment,
    },
    {
      title: "Toxic Exposure Assessment",
      data: toxicExposure,
    },
    {
      title: "Cardiac Arrest Assessment",
      data: cardiacArrest,
    },
    {
      title: "Chest Pain Assessment",
      data: chestPain,
    },
    {
      title: "Neonatal Assessment",
      data: neonatalAssessment,
    },
    {
      title: "Neonatal Assessment",
      data: neonatalAssessment,
    },
    {
      title: "Obstetric Assessment",
      data: obstetric,
    },
    {
      title: "Trauma Assessment",
      data: traumaAssessment,
    },
    {
      title: "Mechanism of Injury",
      data: mechanismInjury,
    },
  ];

  const treatmentForms = [
    {
      title: "Interventions",
      data: intervention,
    },
    {
      title: "Medications",
      data: medications,
    },
    {
      title: "Vital Sign",
      data: vitalSign,
    },
  ];

  // const forms = Object.keys(formData);
  // const treatmentForms = Object.keys(treatmentData);

  return (
    <Container component="main" maxWidth="xl" sx={{ p: 3, mb: 4 }}>
      <Typography
        component="h1"
        variant="h4"
        align="center"
        sx={{ mb: 4 }}
        gutterBottom
      >
        Call Report
      </Typography>
      <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={3}>
        {forms.map((form, i) => (
          <Paper
            key={i}
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? '#f5deda'
                  : '#534341',
            }}
          >
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
                  {form.title}
                </Typography>
              </Toolbar>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Field</TableCell>
                    <TableCell align="right">Data</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(form.data).map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row}
                      </TableCell>
                      <TableCell align="right">{form.data[row]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        ))}
        {treatmentForms.map((form, i) => (
          <Paper key={i}>
            {Object.keys(form.data).map((row, index) => (
              <Accordion
                key={index}
                TransitionProps={{ unmountOnExit: true }}
                sx={{
                  backgroundColor: (theme) =>
                    theme.palette.mode === "light"
                      ? '#f5deda'
                      : '#534341',
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    sx={{ flex: "1 1 100%" }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                  >
                    {form.title} - Page {parseInt(row) + 1}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <TableContainer>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          <TableCell>Field</TableCell>
                          <TableCell align="right">Data</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {Object.keys(form.data[row]).map((item, id) => (
                          <TableRow
                            key={id}
                            sx={{
                              "&:last-child td, &:last-child th": {
                                border: 0,
                              },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {item}
                            </TableCell>
                            <TableCell align="right">
                              {form.data[row][item]}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        ))}
      </Masonry>
    </Container>
  );
};

export default CallReport;
