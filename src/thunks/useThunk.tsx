import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sendData = createAsyncThunk("data/send", async (value) => {
  const response = await axios.post("http://localhost:3001/names", {
    name: value, // Send as object instead of raw value
  });
  return response.data;
});

export { sendData };
