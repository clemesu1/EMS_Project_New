import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    Call_ID: "12345",
    Proc_Time_Start: "",
    Proc_Time_End: "",
    Treatment_time: "",
    Procedur: "",
    Proc_Other: "",
    Procedur_success: "",
    Procedur_outcome: "",
    Device_Method: "",
    Procedur_Technician: "",
    Device_Size: "",
    Treatment_Type: "",
    Treatment_technician: "",
    Adm_Rt_Other: "",
    Admin_Route: "",
    Dosage_Amount: "",
    Dosage_Unit: "",
    Treatment_Outcome: "",
}, ];

const interventionSlice = createSlice({
    name: "intervention",
    initialState,
    reducers: {
        setIntervention: (state, { payload }) => {
            return state.map((item, index) =>
                index === payload.id ? {
                    ...item,
                    [payload.name]: payload.value,
                } :
                item
            );
        },
        addIntervention: (state) => {
            state.push({
                Call_ID: "12345",
                Proc_Time_Start: "",
                Proc_Time_End: "",
                Treatment_time: "",
                Procedur: "",
                Proc_Other: "",
                Procedur_success: "",
                Procedur_outcome: "",
                Device_Method: "",
                Procedur_Technician: "",
                Device_Size: "",
                Treatment_Type: "",
                Treatment_technician: "",
                Adm_Rt_Other: "",
                Admin_Route: "",
                Dosage_Amount: "",
                Dosage_Unit: "",
                Treatment_Outcome: "",
            });
        },
    },
});

export const { setIntervention, addIntervention } = interventionSlice.actions;

export default interventionSlice.reducer;