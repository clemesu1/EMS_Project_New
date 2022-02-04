import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: "12345",
    Parity: "",
    Gravidity: "",
    Gestation_Stage: "",
    Delivery: "",
    Deliv_Other: "",
    Baby_Presentation: "",
    Baby_Prsnt_Other: "",
    Time_of_Birth: "",
    Time_Placenta_Delivered: "",
};

const obstetricSlice = createSlice({
    name: "obstetric",
    initialState,
    reducers: {
        setObstetric: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value,
            };
        },
    },
});

export const { setObstetric } = obstetricSlice.actions;

export default obstetricSlice.reducer;