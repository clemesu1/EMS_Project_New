import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: '12345',
    Arrest_Clarify: '',
    Witness: '',
    Witns_Other: '',
    Defib_Prior_Ambul_arrival: '',
    Time_of_First_CPR: '',
    Time_of_Crew_CPR: '',
    Time_first_Defib: '',
    No_Defib_Prior_EMS: 0,
    Time_CPR_Discontinue: '',
    Spon_Circ: '',
    Spon_Respir: '',
    Pulse_rate_dest: '',
    Type_of_Ambul_Defib: '',
    Typ_Amb_Defib_Other: '',
    Reason_CPR_Discontinue: '',
    CPR_Discon_Other: '',
    Reason_not_Init_CPR: '',
    NInit_CPR_Other: '',
    Pace_Implant_Defib: '',
    PImp_Defib_Other: '',
};

const cardiacArrestSlice = createSlice({
    name: "cardiacArrest",
    initialState,
    reducers: {
        setCardiacArrest: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value
            };
        },
    },
});

export const { setCardiacArrest } = cardiacArrestSlice.actions;

export default cardiacArrestSlice.reducer;