import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: "12345",
    Chief_Complaint: "",
    G_BodySystem: [],
    G_Inj_Date: "",
    G_Inj_Time: "",
    G_Co_Responders: "",
    G_Treat_Rendered: "",
    G_Pt_Condi_Dest: "",
    G_Pt_Disp: "",
    G_Susp_Intoxi: "",
    G_DNR_Order: false,
    Alr_Drugs: [],
    Alr_Env: [],
    Alr_Others: "",
    Med_Name: [],
    Med_Others: "",
    LM_Comment: "",
    EP_Comment: "",
    PH_History: [],
    PH_Comment: "",
};

const patientHistorySlice = createSlice({
    name: "patientHistory",
    initialState,
    reducers: {
        setPatientHistory: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value,
            };
        },
        toggleBodySystemItem: (state, { payload }) => {
            let exists = state.G_BodySystem.indexOf(payload) > -1;
            let itemList = state.G_BodySystem.slice();
            if (exists) itemList = itemList.filter(value => value !== payload)
            else itemList.push(payload);
            return {
                ...state,
                G_BodySystem: itemList,
            }
        },
        toggleDrugListItem: (state, { payload }) => {
            let exists = state.Alr_Drugs.indexOf(payload) > -1;
            let itemList = state.Alr_Drugs.slice();
            if (exists) itemList = itemList.filter(value => value !== payload)
            else itemList.push(payload);
            return {
                ...state,
                Alr_Drugs: itemList,
            }
        },
        toggleEnvListItem: (state, { payload }) => {
            let exists = state.Alr_Env.indexOf(payload) > -1;
            let itemList = state.Alr_Env.slice();
            if (exists) itemList = itemList.filter(value => value !== payload)
            else itemList.push(payload);
            return {
                ...state,
                Alr_Env: itemList,
            }
        },
        toggleMedicationListItem: (state, { payload }) => {
            let exists = state.Med_Name.indexOf(payload) > -1;
            let itemList = state.Med_Name.slice();
            if (exists) itemList = itemList.filter(value => value !== payload)
            else itemList.push(payload);
            return {
                ...state,
                Med_Name: itemList,
            }
        },
        toggleHistoryListItem: (state, { payload }) => {
            let exists = state.PH_History.indexOf(payload) > -1;
            let itemList = state.PH_History.slice();
            if (exists) itemList = itemList.filter(value => value !== payload)
            else itemList.push(payload);
            return {
                ...state,
                PH_History: itemList,
            }
        },
    },
});


export const { setPatientHistory, toggleBodySystemItem, toggleDrugListItem, toggleEnvListItem, toggleMedicationListItem, toggleHistoryListItem } = patientHistorySlice.actions;

export default patientHistorySlice.reducer;