import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    Call_ID: "12345",
    Medic_Given_Date: null,
    Medic_Given_Time: "",
    Medic_Given: "",
    Medic_Amount: "",
    Medic_Unit: "",
    Route: "",
    Effect_on_Patient: "",
    Paramedic_ID: "",
}, ];

const medicationsSlice = createSlice({
    name: "medications",
    initialState,
    reducers: {
        setMedications: (state, { payload }) => {
            return state.map((item) => {
                if (item !== payload.name) {
                    return item;
                }

                return {
                    ...state,
                    [payload.name]: payload.value,
                };
            });
        },
        addMedications: (state) => {
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

export const { setMedications, addMedications } = medicationsSlice.actions;

export default medicationsSlice.reducer;