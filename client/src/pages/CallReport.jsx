import React from "react";
import { useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";

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
  const interventions = useSelector((state) => state.interventions);
  const medications = useSelector((state) => state.medications);
  const vitalSign = useSelector((state) => state.vitalSign);

  const data = [
    callTransaction,
    incidentDetails,
    patientDetails,
    vehicleDetails,
    patientHistory,
    neuroResponse,
    abcs,
    assessFindings,
    respiratory,
    seizureAssessment,
    toxicExposure,
    cardiacArrest,
    chestPain,
    neonatalAssessment,
    obstetric,
    mechanismInjury,
    traumaAssessment,
    interventions,
    medications,
    vitalSign,
  ];

  return (
    <Container sx={{ p: 3 }}>
      <Typography gutterBottom variant="h6" component="h6">
        Call Report
      </Typography>
    </Container>
  );
};

export default CallReport;
