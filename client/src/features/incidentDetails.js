import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Call_ID: "12345",
    Service_Code: "",
    Service_Type: "",
    Dispatch_Code: "",
    Date_of_Incident: "",
    Inc_Street: "",
    Inc_Community: "",
    Inc_Province: "",
    Inc_PostalCode: "",
    Dest_Determinant: "",
    DD_Other: "",
    Geo_Locator: "",
    Inc_Loc_Type: "",
    Dest_Facility_Code: "",
    Dest_Street: "",
    Dest_Community: "",
    Dest_Province: "",
    Dest_PostalCode: "",
    Dest_Facility: "",
    Scene_Facility_Code: "",
    Fact_Affect_EMS: "",
    Fact_Other: "",
    Patient_Contact: "",
    Patient_Disposition: "",
    Pt_Disp_Other: "",
    Service_Payment_Respons: "",
    Service_Payment_Number: "",
};

const incidentDetailsSlice = createSlice({
    name: "incidentDetails",
    initialState,
    reducers: {
        setIncidentDetails: (state, { payload }) => {
            return {
                ...state,
                [payload.name]: payload.value,
            };
        },

        setIncidentLocation: (state, { payload }) => {
            const { street, city, province, postalCode } = payload;

            return {
                ...state,
                Inc_Street: street,
                Inc_Community: city,
                Inc_Province: province,
                Inc_PostalCode: postalCode,
            };
        },
    },
});

export const { setIncidentDetails, setIncidentLocation } = incidentDetailsSlice.actions;

export default incidentDetailsSlice.reducer;