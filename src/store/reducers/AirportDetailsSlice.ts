import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AirportDetails } from "../../types/AppTypes";
import { fetchAirportDetails } from "../actions/AirportDetailsActions";


export const reducerName = "airportDetails";

export const initialState: AirportDetails = {
  id: 0,
  name: ""
};

export const AirportDetailsSlice = createSlice({
  name: "AirportDetails",
  initialState,
  reducers: {},
  extraReducers: {
    /* Add the actions to update the store value */
    [fetchAirportDetails.fulfilled.toString()]: (
      state: AirportDetails,
      action: PayloadAction<AirportDetails>
    ) => {
        const {name, postal_code, latitude, longitude, phone, website} = action.payload;
        state.name = name;
        state.postal_code = postal_code;
        state.latitude = latitude;
        state.longitude = longitude;
        state.phone = phone;
        state.website = website;
    }
  }
});
