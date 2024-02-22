import { combineReducers } from "@reduxjs/toolkit";
import SignInSlice from "../SignInslice";
import ScooterData from "../ScooterData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ScooterLed } from "../ScooterData";

const CombiningAllreducer = combineReducers({
  SingnIn: SignInSlice.reducer,
  Scooters: ScooterData.reducer,
  led: ScooterLed.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["Scooters"],
};

export const persistedReducer = persistReducer(
  persistConfig,
  CombiningAllreducer
);

export default CombiningAllreducer;
