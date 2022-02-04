import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: "12345",
    Airway_Status: "",
    Breath_Effort: "",
    Breath_Rate: "",
    Breath_Rhythm: "",
    Circul_Site: "",
    Circul_Rate: "",
    Circul_Vol: "",
    Circul_Rhythm: "",
};

const abcsSlice = createSlice({
    name: "abcs",
    initialState,
    reducers: {
        setABCs: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value,
            };
        },
    },
});

export const { setABCs } = abcsSlice.actions;

export default abcsSlice.reducer;