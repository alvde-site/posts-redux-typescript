import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import postsSlice from "./reducers/postsSlice";
import usersSlice from "./reducers/usersSlice";
import authSlice from "./reducers/authSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: usersSlice,
    auth: authSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
