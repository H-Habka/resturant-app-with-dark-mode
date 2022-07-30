import { configureStore, combineReducers } from "@reduxjs/toolkit";
import FiltersSlice from "./Features/FiltersSlice";

const rootReducer = combineReducers({ FiltersSlice });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});
