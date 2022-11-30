import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CalendarStructure } from "../../../types/calendarTypes";

const calendarInitialState: CalendarStructure = {
  userId: "",
  isActive: true,
  createdAt: "",
  windows: [],
};

const calendarSlice = createSlice({
  name: "calendar",
  initialState: calendarInitialState,
  reducers: {
    loadCalendar: (
      currentCalendarState,
      action: PayloadAction<CalendarStructure>
    ) => ({
      ...currentCalendarState,
      ...action.payload,
    }),
  },
});

export const calendarReducer = calendarSlice.reducer;

export const { loadCalendar: loadCalendarActionCreator } =
  calendarSlice.actions;
