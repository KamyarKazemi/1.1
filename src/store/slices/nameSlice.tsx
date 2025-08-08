import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
  name: "nameSlice",
  initialState: {
    value: "",
  },
  reducers: {
    handleInput: (state, action) => {
      state.value = action.payload;
      console.log(state.value);
    },
  },
});

export const { handleInput } = nameSlice.actions;
export const nameReducer = nameSlice.reducer;
