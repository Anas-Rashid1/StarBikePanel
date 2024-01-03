import { configureStore } from "@reduxjs/toolkit";
import CombiningAllreducer from "../CombiningReducer";

const Store = configureStore({
  reducer: CombiningAllreducer,
});

export default Store;
