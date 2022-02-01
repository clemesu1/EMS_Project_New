import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: '12345',
    Surname: '',
    Given_Name: '',
    Street: '',
    Community: '',
    Province: '',
    Country: '',
    PostalCode: '',
    Tel_No: '',
    DOB: '',
    Age: '',
    Race: '',
    Gender: '',
    Medicare_No: '',
    Medicare_Origin: '',
    Hospital_Chart_No: '',
    P_Comments: '',
};


const patientDetailsSlice = createSlice({
    name: "patientDetails",
    initialState,
    reducers: {
        setPatientDetails: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value
            };
        },
    },
});

export const { setPatientDetails } = patientDetailsSlice.actions;

export default patientDetailsSlice.reducer;