import { configureStore } from "@reduxjs/toolkit";
import CombiningAllreducer from "../CombiningReducer";
import { persistedReducer } from "../CombiningReducer";
import { persistStore } from "redux-persist";

const Store = configureStore({
  reducer: persistedReducer,
});

export const persister = persistStore(Store);

export default Store;
