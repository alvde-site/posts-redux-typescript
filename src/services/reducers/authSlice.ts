import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
