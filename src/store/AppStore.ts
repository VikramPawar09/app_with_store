import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppStoreState } from "../types/AppTypes";

import {
  AirportDetailsSlice,
  initialState,
  reducerName
} from "./reducers/AirportDetailsSlice";

const preloadedState: AppStoreState = {
  [reducerName]: { ...initialState }
};

const reducer = combineReducers({
  [reducerName]: AirportDetailsSlice.reducer
});

export const appStore = configureStore({ reducer, preloadedState });

export type appDispatch = typeof appStore.dispatch;
