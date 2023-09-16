import { createSlice } from "@reduxjs/toolkit";

const initialSearchState = { search: "" };

const searchSlice = createSlice({
  name: "Search",
  initialState: initialSearchState,
  reducers: {
    searchHandler(state, action) {
      state.search = action.payload;
    },
    updateSearch(state, action) {
      state.search = action.payload;
    },
  },
});

const searchReducer = searchSlice.reducer;

export const searchActions = searchSlice.actions;
export default searchReducer;
