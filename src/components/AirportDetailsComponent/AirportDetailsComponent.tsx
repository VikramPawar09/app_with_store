import _ from "lodash";
import {
  ChangeEvent,
  useEffect,
  useState,
} from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchAirportDetails } from "../../store/actions/AirportDetailsActions";
import { appDispatch } from "../../store/AppStore";

import { AppStoreState } from "../../types/AppTypes";

export default function AirportDetailsComponent() {
  /* Store */
  const airportDetails = useSelector(
    (state: AppStoreState) => state.airportDetails
  );
  const dispatch: appDispatch = useDispatch();
  const [cityName, setCityName] = useState<string>('');

  useEffect(() => {
    dispatch(fetchAirportDetails("BLR"));
  }, []);

  const onChange = _.debounce((e: ChangeEvent<HTMLInputElement>) => {setCityName(e.target.value)}, 1000);

  const onSubmit = () => { 
    dispatch(fetchAirportDetails(cityName))
  }

  return (
    <div className="App">
      {/* User Input */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="city_name">Enter short name of city </label>
        <input
          type="text"
          id="city_name"
          style={{ width: "20%" }}
          onChange={onChange}
        />
        <button type="submit" onClick={onSubmit}>Get Airport Details</button>
      </div>

      {/* Airport Details */}
      <div>
        <label htmlFor="airport_name"> Name </label>
        <input
          type="text"
          id="airport_id"
          value={airportDetails?.name}
          disabled
          style={{ width: "50%" }}
        />
      </div>
      <div>
        <label htmlFor="airport_postal_code"> Code </label>
        <input
          type="text"
          id="airport_postal_code"
          value={airportDetails?.postal_code}
          disabled
          style={{ width: "50%" }}
        />
      </div>
      <div>
        <label htmlFor="airport_latitude"> Latitude </label>
        <input
          type="text"
          id="airport_latitude"
          value={airportDetails?.latitude}
          disabled
          style={{ width: "50%" }}
        />
      </div>
      <div>
        <label htmlFor="airport_longitude"> Longitude </label>
        <input
          type="text"
          id="airport_longitude"
          value={airportDetails?.longitude}
          disabled
          style={{ width: "50%" }}
        />
      </div>
      <div>
        <label htmlFor="airport_phone"> Phone </label>
        <input
          type="text"
          id="airport_phone"
          value={airportDetails?.phone}
          disabled
          style={{ width: "50%" }}
        />
      </div>
      <div>
        <label htmlFor="airport_website"> Website </label>
        <input
          type="text"
          id="airport_website"
          value={airportDetails?.website}
          disabled
          style={{ width: "50%" }}
        />
      </div>
    </div>
  );
}
