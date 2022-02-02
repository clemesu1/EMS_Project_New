import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: "12345",
    Assess_Find: [],
    Body_Area_Find: [],
    Find_Other: "",
};

const assessFindingsSlice = createSlice({
    name: "assessFindings",
    initialState,
    reducers: {
        setAssessFindings: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value,
            };
        },
        toggleAssessFindItem: (state, { payload }) => {
            let exists = state.Assess_Find.indexOf(payload) > -1;
            let itemList = state.Assess_Find.slice();
            if (exists) itemList = itemList.filter(value => value !== payload)
            else itemList.push(payload);
            return {
                ...state,
                Assess_Find: itemList,
            }
        },
        toggleBodyAreaFindItem: (state, { payload }) => {
            let exists = state.Body_Area_Find.indexOf(payload) > -1;
            let itemList = state.Body_Area_Find.slice();
            if (exists) itemList = itemList.filter(value => value !== payload)
            else itemList.push(payload);
            return {
                ...state,
                Body_Area_Find: itemList,
            }
        },
    },
});

export const { setAssessFindings, toggleAssessFindItem, toggleBodyAreaFindItem } = assessFindingsSlice.actions;

export default assessFindingsSlice.reducer;