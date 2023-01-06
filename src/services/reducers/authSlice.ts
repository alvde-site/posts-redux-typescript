import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TInitialAuth } from "../../utils/types";



const initialState: TInitialAuth = {
  loggedIn: false,
  userId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signin(state, action) {
      const { loggedIn, userId } = action.payload;
      state.loggedIn = loggedIn;
      state.userId = userId;
    },
    signout(state, action) {
      const { loggedIn, userId } = action.payload;
      state.loggedIn = loggedIn;
      state.userId = userId;
    },
  },
});

export const selectAllAuth = (state: RootState) => state.auth;

export const { signin } = authSlice.actions;

export default authSlice.reducer;
