import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: '12345',
    Witnessed_Seizure: '',
    Cause: '',
    Cause_Other: '',
    Witness_of_Seizure: '',
    S_Other: '',
    Type_of_Seizure: '',
    Type_Other: '',
    No_of_Seizure: 0,
    Seiz_Duration: 0,
};

const seizureAssessmentSlice = createSlice({
    name: "seizureAssessment",
    initialState,
    reducers: {
        setSeizureAssessment: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value
            };
        },
    },
});

export const { setSeizureAssessment } = seizureAssessmentSlice.actions;

export default seizureAssessmentSlice.reducer;