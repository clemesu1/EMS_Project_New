import React from "react";
import { useSelector } from "react-redux";
import {
  IconButton,
  Snackbar,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import CloseIcon from "@mui/icons-material/Close";
import { toJson } from "../adapters/snowflake";

const ActionDial = () => {
  const [open, setOpen] = React.useState(false);
  const [dialOpen, setDialOpen] = React.useState(false);
  const [snackPack, setSnackPack] = React.useState([]);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      // Set a new snack when we don't have an active one
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      // Close an active snack when a new one is added
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

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
    Interventions: interventions,
    Medications: medications,
    Vital_Sign: vitalSign,
  };

  const actions = [
    {
      icon: <FileCopyIcon />,
      name: "Copy",
      onClick: () => handleCopy(emsData),
    },
    { icon: <SaveIcon />, name: "Save", onClick: () => handleSave(emsData) },
    { icon: <PrintIcon />, name: "Print", onClick: () => handlePrint(emsData) },
    { icon: <ShareIcon />, name: "Share", onClick: () => handleShare(emsData) },
  ];

  const handleClick = (message) => {
    setSnackPack((prev) => [...prev, { message, key: new Date().getTime() }]);
  };

  const handleCopy = (data) => {
    handleClick("Data copied to clipboard.");
    navigator.clipboard.writeText(JSON.stringify(data));
  };

  const handleSave = (data) => {
    handleClick("Data saved.");
    toJson(data);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    console.log("share");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="save speed dial"
        FabProps={{ color: 'secondary' }}
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        open={dialOpen}
        onClick={() => setDialOpen(!dialOpen)}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.onClick}
          />
        ))}
      </SpeedDial>
      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        TransitionProps={{ onExited: handleExited }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        }
        sx={{ bottom: { xs: 90, sm: 24 } }}
      />
    </div>
  );
};

export default ActionDial;
