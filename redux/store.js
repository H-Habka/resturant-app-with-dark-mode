import { configureStore, combineReducers } from "@reduxjs/toolkit";
import MealsSlice from "./Features/MealsSlice";

const rootReducer = combineReducers({ MealsSlice });

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});
