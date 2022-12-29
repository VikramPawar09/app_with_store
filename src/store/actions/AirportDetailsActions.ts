import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAirportDetails } from "../../services/getAirportDetails/getAirportDetails";

export const fetchAirportDetails = createAsyncThunk(
  "fetchAirportDetails",
  (airportCode:string) => {
    return getAirportDetails(airportCode);
  }
);
