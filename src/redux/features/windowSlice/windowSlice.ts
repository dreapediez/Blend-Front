import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { WindowState, WindowStructure } from "../../../types/calendarTypes";

const windowsInitialState: WindowState = {
  list: [],
};

const windowSlice = createSlice({
  name: "windows",
  initialState: windowsInitialState,
  reducers: {
    loadWindows: (
      currentWindowState,
      action: PayloadAction<WindowStructure[]>
    ): WindowState => ({
      ...currentWindowState,
      list: [...action.payload],
    }),
    loadWindow: (
      currentWindowState,
      action: PayloadAction<WindowStructure>
    ): WindowState => ({
      ...currentWindowState,
      list: [action.payload],
    }),
  },
});

export const windowReducer = windowSlice.reducer;

export const {
  loadWindow: loadWindowActionCreator,
  loadWindows: loadWindowsActionCreator,
} = windowSlice.actions;
