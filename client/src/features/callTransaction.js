import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: "12345",
    MIN: "234545",
    Driver_ID: "",
    Attendant_ID: "",
    Assisting_ID: "",
    Vehicle_ID: "",
    Vehicle_Status: "",
};

export const callTransactionSlice = createSlice({
    name: "callTransaction",
    initialState,
    reducers: {
        setCallTransaction: (state, { payload }) => {
            return {
                ...state,
                Driver_ID: payload.driverId,
                Attendant_ID: payload.attendantId,
                Assisting_ID: payload.assistantId,
                Vehicle_ID: payload.vehicleId,
                Vehicle_Status: payload.vehicleStatus,
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCallTransaction } = callTransactionSlice.actions;

export default callTransactionSlice.reducer;