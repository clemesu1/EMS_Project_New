import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: '12345',
    Cause_of_Injury: '',
    COI_Other: '',
    Human_Factor: '',
    HF_Other: '',
    Nature_of_Injury: '',
    Safety_Protect_Equip: '',
    SPE_Other: '',
    Work_related: '',
    Comments: '',
    MVC: '',
};

const mechanismInjurySlice = createSlice({
    name: "mechanismInjury",
    initialState,
    reducers: {
        setMechanismInjury: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value,
            };
        },
    },
});

export const { setMechanismInjury } = mechanismInjurySlice.actions;

export default mechanismInjurySlice.reducer;