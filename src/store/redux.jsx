import { createSlice, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchInputValue";

// const initialState = { weather: {}, error: null };

// const forecastSlice = createSlice({
//   name: "forecast",
//   initialState: initialState,
//   reducer: {
//     weather(state, action) {
//       state.weather = action.payload;
//     },
//     error(state, action) {
//       state.error = action.payload;
//     },
//   },
// });

// const store = configureStore({ reducer: forecastSlice.reducer });

// export const forecastAction = forecastSlice.actions;

const initialState = { appClassName: "app" };

const classSlice = createSlice({
  name: "appClassName",
  initialState: initialState,
  reducers: {
    rain(state) {
      state.appClassName = "app rain";
    },
    haze(state) {
      state.appClassName = "app haze";
    },
    cloud(state) {
      state.appClassName = "app cloud";
    },
    clear(state) {
      state.appClassName = "app clear";
    },
    mist(state) {
      state.appClassName = "app mist";
    },
  },
});

const store = configureStore({
  reducer: {
    weather: classSlice.reducer,
    searchInput: searchReducer,
  },
});

export const classAction = classSlice.actions;

export default store;
