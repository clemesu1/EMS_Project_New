import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    Call_ID: "12345",
    Vitals_Date: null,
    Vitals_Time: "",
    Heart_Rate: "",
    Heart_Site: "",
    Heart_Site_Oth: "",
    Card_Rhyth: "",
    Card_Rhyth_Oth: "",
    BP_Sys: "",
    BP_Dia: "",
    Resp_Rate: "",
    Oxy_Sat: "",
    Glucose: "",
    Glascow_Eye: "",
    Glascow_Verbal: "",
    Glascow_Motor: "",
    Skin_Color: "",
    Skin_Temp: "",
    Skin_Moisture: "",
    VT_Temp: "",
    VT_Temp_Site: "",
    LOC: "",
}, ];

const vitalSignSlice = createSlice({
    name: "vitalSign",
    initialState,
    reducers: {
        setVitalSign: (state, { payload }) => {
            return state.map((item, index) =>
                index === payload.id ?
                {
                    ...item,
                    [payload.name]: payload.value,
                } :
                item
            );
        },
        addVitalSign: (state) => {
            state.push({
                Call_ID: "12345",
                Medic_Given_Date: null,
                Medic_Given_Time: "",
                Medic_Given: "",
                Medic_Amount: "",
                Medic_Unit: "",
                Route: "",
                Effect_on_Patient: "",
                Paramedic_ID: "",
            });
        },
    },
});

export const { setVitalSign, addVitalSign } = vitalSignSlice.actions;

export default vitalSignSlice.reducer;