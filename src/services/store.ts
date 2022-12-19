import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import postsReducer from "./reducers/postsSlice";
import usersSlice from "./reducers/usersSlice";

//Образец для разработки
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersSlice,

    //Образец для разработки
    counter: counterReducer,
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
