import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters : []
}

const FiltersSlice = createSlice({
    name: "filterSlice",
    initialState,
    reducers : {},
    extraReducers : {}
})

export default FiltersSlice.reducer
