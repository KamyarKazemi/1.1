import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const sendData = createAsyncThunk("data/send", async (value) => {
  await axios.post("http://localhost:3001/names", value);
});

export { sendData };
