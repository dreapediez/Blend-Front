import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { postInitialState, postReducer } from "./features/postSlice/postSlice";
import { uiInitialState, uiReducer } from "./features/uiSlice/uiSlice";
import { userInitialState, userReducer } from "./features/userSlice/userSlice";

const preloadedState = {
  ui: uiInitialState,
  user: userInitialState,
  post: postInitialState,
};

export const store = ({ user, ui, post } = preloadedState) =>
  configureStore({
    preloadedState: {
      user,
      ui,
      post,
    },
    reducer: {
      user: userReducer,
      ui: uiReducer,
      post: postReducer,
    },
  });

export const newStore = store();

export type AppDispatch = typeof newStore.dispatch;
export type RootState = ReturnType<typeof newStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
