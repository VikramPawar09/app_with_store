import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-RapidAPI-Key": "d11f7c0b99msh04eb845e67bfcfap10ce78jsn23d2f1a41724",
    "X-RapidAPI-Host": "airport-info.p.rapidapi.com"
  }
});
