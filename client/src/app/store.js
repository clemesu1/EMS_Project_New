import { configureStore } from "@reduxjs/toolkit";
import callTransactionReducer from "../features/callTransaction";
import crewLogReducer from "../features/crewLog";
import drawerToggleReducer from "../features/drawerToggle";
import vehicleDetailsReducer from "../features/vehicleDetails";
import patientDetailsReducer from "../features/patientDetails";
import incidentDetailsReducer from "../features/incidentDetails";
import patientHistoryReducer from "../features/patientHistory";
import neuroResponseReducer from "../features/neuroResponse";
import abcsReducer from "../features/abcs";
import assessFindingsReducer from "../features/assessFindings";
import respiratoryReducer from "../features/respiratory";
import seizureAssessmentReducer from "../features/seizureAssessment";
import toxicExposureReducer from "../features/toxicExposure";
import substanceDataReducer from "../features/substanceData";
import cardiacArrestReducer from "../features/cardiacArrest";

export default configureStore({
    reducer: {
        drawerToggle: drawerToggleReducer,
        crewLog: crewLogReducer,
        callTransaction: callTransactionReducer,
        vehicleDetails: vehicleDetailsReducer,
        patientDetails: patientDetailsReducer,
        incidentDetails: incidentDetailsReducer,
        patientHistory: patientHistoryReducer,
        neuroResponse: neuroResponseReducer,
        abcs: abcsReducer,
        assessFindings: assessFindingsReducer,
        respiratory: respiratoryReducer,
        seizureAssessment: seizureAssessmentReducer,
        toxicExposure: toxicExposureReducer,
        substanceData: substanceDataReducer,
        cardiacArrest: cardiacArrestReducer,
    },
});