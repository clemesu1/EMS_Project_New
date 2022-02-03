import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: "12345",
    Nature_of_Expo: "",
    Exposure_time: "",
    Name_of_substance: "",
    Type_of_substance: "",
    Typ_sub_Other: "",
    Amount_of_substance: 0,
    Duration: "",
    Route_of_entry: "",
    Route_Other: "",
    Type_of_reaction: "",
    Reaction_Other: "",
    Evidence: "",
    Evidence_Other: "",
};

const toxicExposureSlice = createSlice({
    name: "toxicExposure",
    initialState,
    reducers: {
        setToxicExposure: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value,
            };
        },
    },
});

export const { setToxicExposure } = toxicExposureSlice.actions;

export default toxicExposureSlice.reducer;