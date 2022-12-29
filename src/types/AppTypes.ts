export interface AppStoreState {
    airportDetails: AirportDetails;
  }
  
  export interface AirportDetails {
    id?: number;
    iata?: string;
    icao?: string;
    name?: string;
    location?: string;
    street_number?: string;
    street?: string;
    city?: string;
    county?: string;
    state?: string;
    country_iso?: string;
    country?: string;
    postal_code?: string;
    phone?: string;
    latitude?: number;
    longitude?: number;
    uct?: number;
    website?: string;
  }
  