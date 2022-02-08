import React from "react";
import { useSelector } from "react-redux";
import {
  Button,
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

const SaveDial = () => {
  const [open, setOpen] = React.useState(false);
  const [snackPack, setSnackPack] = React.useState([]);

  const actions = [
    { icon: <FileCopyIcon />, name: "Copy", onClick: () => handleCopy() },
    { icon: <SaveIcon />, name: "Save", onClick: () => handleSave() },
    { icon: <PrintIcon />, name: "Print", onClick: () => handlePrint() },
    { icon: <ShareIcon />, name: "Share", onClick: () => handleShare() },
  ];

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

  const handleCopy = () => {
    const complete = {};

    setOpen(true);

    // For each element in data array
    data.forEach((item) => {
      // For each key value pair in `item`
      for (const key in item) {
        complete[key] = item[key];
      }
    });

    navigator.clipboard.writeText(JSON.stringify(complete));

    // console.log(complete);
  };

  const handleSave = () => {
    console.log("save");
  };

  const handlePrint = () => {
    console.log("print");
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

  return (
    <div>
      <SpeedDial
        ariaLabel="save speed dial"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
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
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Data copied"
        action={
          <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button>
            <IconButton
              aria-label="close"
              color="inherit"
              sx={{ p: 0.5 }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </React.Fragment>
        }
        sx={{ bottom: { xs: 90, sm: 24 } }}
      />
    </div>
  );
};

export default SaveDial;
