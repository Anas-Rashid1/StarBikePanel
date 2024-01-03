import { combineReducers } from "@reduxjs/toolkit";
import SignInSlice from "../SignInslice";

const CombiningAllreducer = combineReducers({
  SingnIn: SignInSlice.reducer,
});

export default CombiningAllreducer;
