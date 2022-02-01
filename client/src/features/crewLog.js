import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId: "",
    password: "",
    bioMark: "",
};

export const crewLogSlice = createSlice({
    name: "crewLog",
    initialState,
    reducers: {
        setCredentials: (state, { payload }) => {
            state.userId = payload.userId;
            state.password = payload.password;
        },
    },
});

export const crewLogSelector = (state) => state.crewLog;

// Action creators are generated for each case reducer function
export const { setCredentials } = crewLogSlice.actions;

export default crewLogSlice.reducer;