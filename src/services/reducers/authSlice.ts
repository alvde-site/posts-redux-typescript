import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  loggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      const { loggedIn } = action.payload;
      state.loggedIn = loggedIn;
    },
    signout(state, action) {
      console.log("signout", state, action.payload);
    },
  },
});

export const selectAllAuth = (state: RootState) => state.auth.loggedIn;

export const { signin } = authSlice.actions;

export default authSlice.reducer;
