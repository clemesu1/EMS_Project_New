import { configureStore } from "@reduxjs/toolkit";
import callTransactionReducer from "../features/callTransaction";
import crewLogReducer from "../features/crewLog";
import drawerToggleReducer from '../features/drawerToggle';
import vehicleDetailsReducer from '../features/vehicleDetails';

export default configureStore({
    reducer: {
        drawerToggle: drawerToggleReducer,
        crewLog: crewLogReducer,
        callTransaction: callTransactionReducer,
        vehicleDetails: vehicleDetailsReducer,
    },
});