import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: '12345',
    Infant_Time_Breath: '',
    min1_Heartrate: '',
    min1_Respeffort: '',
    min1_Muscletone: '',
    min1_Reflexirrit: '',
    min1_Colour: '',
    min5_Heartrate: '',
    min5_Respeffort: '',
    min5_Muscletone: '',
    min5_Reflexirrit: '',
    min5_Colour: '',
    min1_Total: '',
    min5_Total: '',
};

const neonatalAssessmentSlice = createSlice({
    name: "neonatalAssessment",
    initialState,
    reducers: {
        setNeonatalAssessment: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value
            };
        },
    },
});

export const { setNeonatalAssessment } = neonatalAssessmentSlice.actions;

export default neonatalAssessmentSlice.reducer;