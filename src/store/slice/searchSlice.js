import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        term: '',
        filterLabel: 'All'
    },
    reducers: {
        changeValueSearch: (state, action) => {
            state.term = action.payload;
        },
        saveFilterLabel: (state, action) => {
            state.filterLabel = action.payload;
        }
    }
})

export const { changeValueSearch, saveFilterLabel } = searchSlice.actions;
export default searchSlice.reducer;