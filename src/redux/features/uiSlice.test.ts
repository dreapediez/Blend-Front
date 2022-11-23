import { UiState } from "../../types/types";
import {
  hideModalActionCreator,
  showModalActionCreator,
  uiReducer,
} from "./uiSlice";

const mockUiInitialState: UiState = {
  modal: {
    modalText: "",
    showModal: false,
    isError: false,
  },
  isLoading: false,
};

describe("Given a uiReducer showModal", () => {
  describe("When it receives an empty initial state and a showModal action with text 'Something went wrong' and isError at true", () => {
    test("Then it should return a new state with the received text and isError true", () => {
      const expectedUiState = {
        modal: {
          isError: true,
          modalText: "Something went wrong",
          showModal: true,
        },
        isLoading: false,
      };
      const expectActionPayload = {
        isError: true,
        modalText: "Something went wrong",
      };

      const newUiState = uiReducer(
        mockUiInitialState,
        showModalActionCreator(expectActionPayload)
      );

      expect(newUiState.modal).toStrictEqual(expectedUiState.modal);
    });
  });
});

describe("Given a uiReducer hideModal", () => {
  describe("When it receives a current state with showModal true and a hideModal action", () => {
    test("Then it should return a new state with showModal false", () => {
      const expectedUiState = {
        modal: {
          isError: false,
          modalText: "",
          showModal: false,
        },
        isLoading: false,
      };

      const newUiState = uiReducer(
        mockUiInitialState,
        hideModalActionCreator()
      );

      expect(newUiState.modal).toStrictEqual(expectedUiState.modal);
    });
  });
});
