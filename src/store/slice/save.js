import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  save: [],
  loading: false,
  error: null,
};

export const saveSlice = createSlice({
  name: "save",
  initialState,
  reducers: {
    fetchSaveStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSaveSuccess: (state, action) => {
      state.loading = false;
      state.save = action.payload;
    },
    fetchSaveFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSaveStart, fetchSaveSuccess, fetchSaveFailure } =
  saveSlice.actions;

export default saveSlice.reducer;
