import { UiState } from "../../types/modalTypes";

export const mockUiInitialState: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    showModal: false,
    modalText: "",
  },
};

export const mockUiModalOpenState: UiState = {
  isLoading: false,
  modal: {
    isError: true,
    showModal: true,
    modalText: "Error modal",
  },
};
