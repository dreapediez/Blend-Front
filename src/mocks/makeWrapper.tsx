import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../redux/store";
import MainStyle from "../styles/MainStyle";
import { UiState } from "../types/modalTypes";
import { UserState } from "../types/userTypes";

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
});

export const mockStoreLoading = store({
  user: currentUser,
  ui: currentUiLoading,
});

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
