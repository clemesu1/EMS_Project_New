import { createSlice } from "@reduxjs/toolkit";

export const drawerToggleSlice = createSlice({
    name: "drawerToggle",
    initialState: {
        value: false,
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggle } = drawerToggleSlice.actions;

export default drawerToggleSlice.reducer;