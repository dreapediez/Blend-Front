import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowModalActionPayload, UiState } from "../../../types/modalTypes";

export const uiInitialState: UiState = {
  isLoading: false,
  modal: {
    modalText: "",
    isError: false,
    showModal: false,
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showModal: (
      currentUiState,
      action: PayloadAction<ShowModalActionPayload>
    ) => ({
      ...currentUiState,
      modal: {
        modalText: action.payload.modalText,
        isError: action.payload.isError,
        showModal: true,
      },
    }),

    hideModal: (currentUiState) => ({
      ...currentUiState,
      modal: {
        modalText: "",
        isError: false,
        showModal: false,
      },
    }),

    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;

export const {
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;
