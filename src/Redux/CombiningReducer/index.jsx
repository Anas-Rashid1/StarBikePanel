import { combineReducers } from "@reduxjs/toolkit";
import SignInSlice from "../SignInslice";
import ScooterData from "../ScooterData";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const CombiningAllreducer = combineReducers({
  SingnIn: SignInSlice.reducer,
  ScooterData: ScooterData.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(
  persistConfig,
  CombiningAllreducer
);

export default CombiningAllreducer;
