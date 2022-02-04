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
import chestPainReducer from "../features/chestPain";
import neonatalAssessmentReducer from "../features/neonatalAssessment";
import obstetricReducer from "../features/obstetric";
import traumaAssessmentReducer from "../features/traumaAssessment";
import mechanismInjuryReducer from "../features/mechanismInjury";

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
        chestPain: chestPainReducer,
        neonatalAssessment: neonatalAssessmentReducer,
        obstetric: obstetricReducer,
        traumaAssessment: traumaAssessmentReducer,
        mechanismInjury: mechanismInjuryReducer,
    },
});