import { configureStore } from "@reduxjs/toolkit";
import callTransactionReducer from "../features/callTransaction";
import crewLogReducer from "../features/crewLog";
import drawerToggleReducer from '../features/drawerToggle';
import vehicleDetailsReducer from '../features/vehicleDetails';
import patientDetailsReducer from '../features/patientDetails';
import incidentDetailsReducer from '../features/incidentDetails';

export default configureStore({
    reducer: {
        drawerToggle: drawerToggleReducer,
        crewLog: crewLogReducer,
        callTransaction: callTransactionReducer,
        vehicleDetails: vehicleDetailsReducer,
        patientDetails: patientDetailsReducer,
        incidentDetails: incidentDetailsReducer,
    },
});