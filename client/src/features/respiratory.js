import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: '12345',
    Level_of_distress: '',
    Breath_sound_I: '',
    Breath_sound_II: [],
    PreEMS_Medication: '',
    Response_to_Medic: '',
    Pain_Scale: 0,
    Coughing: '',
    Tobacco: '',
    Allerg_Exposure: '',
    Medication_Admin: '',
    JVD: '',
    Periph_Edema: '',
    Acc_Mus_Use: '',
};

const respiratorySlice = createSlice({
    name: "respiratory",
    initialState,
    reducers: {
        setRespiratory: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value
            };
        },
        toggleBreathListItem: (state, { payload }) => {
            let exists = state.Breath_sound_II.indexOf(payload) > -1;
            let itemList = state.Breath_sound_II.slice();
            if (exists) itemList = itemList.filter((value) => value !== payload);
            else itemList.push(payload);
            return {
                ...state,
                Breath_sound_II: itemList,
            };
        },
    },
});

export const { setRespiratory, toggleBreathListItem } = respiratorySlice.actions;

export default respiratorySlice.reducer;