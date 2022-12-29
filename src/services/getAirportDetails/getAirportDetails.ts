import { AirportDetails } from "../../types/AppTypes";
import { axiosInstance } from "../Http/HttpBaseInstance/httpBaseInstance";

export const getAirportDetails = async (
  airportCode: string
): Promise<AirportDetails> => {
  const details = await axiosInstance.get(
    `https://airport-info.p.rapidapi.com/airport?iata=${airportCode}`
  );

  return details.data;
};
