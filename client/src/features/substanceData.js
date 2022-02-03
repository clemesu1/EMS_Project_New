import { createSlice } from "@reduxjs/toolkit";

const initialState = { amount: "", unit: "" };

const substanceDataSlice = createSlice({
    name: "substanceData",
    initialState,
    reducers: {
        setAmount: (state, { payload }) => {
            return {
                ...state,
                amount: payload,
            };
        },
        setUnit: (state, { payload }) => {
            return {
                ...state,
                unit: payload,
            };
        },
    },
});

export const { setAmount, setUnit } = substanceDataSlice.actions;

export default substanceDataSlice.reducer;