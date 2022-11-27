import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, UserState } from "../../../types/userTypes";

export const userInitialState: UserState = {
  id: "",
  username: "",
  isLogged: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    loginUser: (previousUser, action: PayloadAction<User>) => ({
      ...action.payload,
      isLogged: true,
    }),
    removeUser: (previousUser) => ({
      ...userInitialState,
    }),
  },
});

export const userReducer = userSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  removeUser: removeUserActionCreator,
} = userSlice.actions;
