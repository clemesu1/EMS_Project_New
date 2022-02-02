import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: '12345',
    LOC: '',
    Status: [],
    R_Eye_Size: '',
    L_Eye_Size: '',
    R_Eye_React: '',
    L_Eye_React: '',
    Sense_UR: '',
    Sense_UL: '',
    Sense_LR: '',
    Sense_LL: '',
    Motor_UR: '',
    Motor_UL: '',
    Motor_LR: '',
    Motor_LL: '',
};

const neuroResponseSlice = createSlice({
    name: "neuroResponse",
    initialState,
    reducers: {
        setNeuroResponse: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value
            };
        },
        toggleStatusListItem: (state, { payload }) => {
            let exists = state.Status.indexOf(payload) > -1;
            let itemList = state.Status.slice();
            if (exists) itemList = itemList.filter(value => value !== payload)
            else itemList.push(payload);
            return {
                ...state,
                Status: itemList,
            }
        },
    },
});

export const { setNeuroResponse, toggleStatusListItem } = neuroResponseSlice.actions;

export default neuroResponseSlice.reducer;