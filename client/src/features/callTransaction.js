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
            state.callTransaction = payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { setCallTransaction } = callTransactionSlice.actions;

export default callTransactionSlice.reducer;