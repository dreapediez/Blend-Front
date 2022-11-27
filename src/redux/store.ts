import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { uiReducer, uiInitialState } from "./features/uiSlice/uiSlice";
import { userReducer, userInitialState } from "./features/userSlice/userSlice";

const preloadedState = {
  ui: uiInitialState,
  user: userInitialState,
};

export const store = ({ user, ui } = preloadedState) =>
  configureStore({
    preloadedState: {
      user,
      ui,
    },
    reducer: {
      user: userReducer,
      ui: uiReducer,
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
