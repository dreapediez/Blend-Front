import { UiState } from "../../../types/modalTypes";
import {
  hideLoadingActionCreator,
  hideModalActionCreator,
  showLoadingActionCreator,
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

describe("Given a uiReducer", () => {
  describe("When its reducer showModal is invoked with a payload with isError true and the text 'Something went wrong'", () => {
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

  describe("When its reducer hideModal is invoked when there is a state with showModal is true", () => {
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

  describe("Given a uiReducer showLoading", () => {
    describe("When its reducer showLoading is invoked with a initial state with isLoading false", () => {
      test("Then it should show the loading logo at the screen and isError state at true", () => {
        const expectedUiState = {
          modal: {
            isError: false,
            isOpen: false,
            text: "",
          },
          isLoading: true,
        };

        const newLoadingState = uiReducer(
          mockUiInitialState,
          showLoadingActionCreator()
        );

        expect(expectedUiState.isLoading).toStrictEqual(
          newLoadingState.isLoading
        );
      });
    });
  });

  describe("Given a uiReducer hideLoading", () => {
    describe("When its reducer hideLoading is invoked with a initial state with isLoading true", () => {
      test("Then it should return a copy of the state with isLoading false", () => {
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
          hideLoadingActionCreator()
        );

        expect(newUiState.isLoading).toStrictEqual(expectedUiState.isLoading);
      });
    });
  });
});
