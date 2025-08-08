import { createSlice } from "@reduxjs/toolkit";
import { sendData } from "../../thunks/useThunk";

const nameSlice = createSlice({
  name: "nameSlice",
  initialState: {
    value: "",
    loading: false,
    error: null,
  },
  reducers: {
    handleInput: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendData.fulfilled, (state) => {
        state.loading = false;
        state.value = ""; // Clear input after success
      })
      .addCase(sendData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { handleInput } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
