import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { newStore, store } from "../redux/store";
import MainStyle from "../styles/MainStyle";
import { UiState } from "../types/modalTypes";
import { UserState } from "../types/userTypes";
import { listOfPostsMock } from "./listOfPostsMock";

export const currentUser: UserState = {
  id: "637fb68183264e08d89177ed",
  username: "Melendi",
  isLogged: true,
};

export const currentUi: UiState = {
  isLoading: false,
  modal: {
    isError: true,
    showModal: true,
    modalText: "Error",
  },
};

export const currentSuccessUi: UiState = {
  isLoading: false,
  modal: {
    isError: false,
    showModal: true,
    modalText: "Success",
  },
};

export const currentUiLoading: UiState = {
  isLoading: true,
  modal: {
    isError: false,
    showModal: false,
    modalText: "",
  },
};

export const mockStore = store({
  user: currentUser,
  ui: currentUi,
  post: { list: listOfPostsMock },
});

export const mockSuccessStore = store({
  user: currentUser,
  ui: currentSuccessUi,
  post: { list: listOfPostsMock },
});

export const mockStoreLoading = store({
  user: currentUser,
  ui: currentUiLoading,
  post: { list: listOfPostsMock },
});

export const makeWrapper = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <BrowserRouter>
        <MainStyle />
        <Provider store={newStore}>{children}</Provider>
      </BrowserRouter>
    </>
  );
};

export const makeWrapperMockStore = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <BrowserRouter>
        <MainStyle />
        <Provider store={mockStore}>{children}</Provider>
      </BrowserRouter>
    </>
  );
};
