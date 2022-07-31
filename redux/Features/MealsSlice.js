import { createSlice } from "@reduxjs/toolkit";
import { MEALS } from "../../data/DummyData";

const initialState = {
    meals: MEALS,
    filters: {
        isGlutenFree: false,
        isVegan: false,
        isVegettarian: false,
        isLactoseFree: false,
    },
    favoriteMeals: [],
    isDarkMode: false,
};

const MealsSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = {
                ...state.filters,
                [action.payload.filter]: action.payload.value,
            };
        },
        toggleIsFavorite: (state, action) => {
            const indexOfItem = state.favoriteMeals.indexOf(action.payload);
            if (indexOfItem >= 0) {
                state.favoriteMeals.splice(indexOfItem, 1);
            } else {
                state.favoriteMeals.push(action.payload);
            }
        },
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
    extraReducers: {},
});

export const { setFilters, toggleIsFavorite, toggleDarkMode } =
    MealsSlice.actions;

export default MealsSlice.reducer;
