import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
