import App from "./App";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import { newStore } from "./redux/store";
import { render, screen } from "@testing-library/react";
import {
  mockStore,
  mockStoreLoading,
  mockSuccessStore,
} from "./mocks/makeWrapper";

describe("Given an App component", () => {
  describe("When it's rendered with path '/'", () => {
    test("Then it should render 'not found page'", () => {
      const expectedApp = TestRenderer.create(
        <Provider store={newStore}>
          <MemoryRouter initialEntries={["/*"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });

  describe("When it's rendered with path '/login'", () => {
    test("Then it should render login page with their header component", () => {
      const headerText = "Welcome to Blendcommunity!";
      render(
        <Provider store={newStore}>
          <MemoryRouter initialEntries={["/login"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      const expectedHeading = screen.queryByRole("heading", {
        name: headerText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's render with Loading open", () => {
    test("Then it should render login page with their header component", () => {
      const informationText = "loading";
      render(
        <Provider store={mockStoreLoading}>
          <MemoryRouter initialEntries={["/login"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      const expectedModal = screen.queryByLabelText(informationText);

      expect(expectedModal).toBeInTheDocument();
    });
  });

  describe("When it's render with an error", () => {
    test("Then it should show Modal Component with 'Something went wrong, please try again in a few minutes'", () => {
      const informationText = "Error";
      render(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      const expectedModal = screen.getByText(informationText);

      expect(expectedModal).toBeInTheDocument();
    });
  });

  describe("When it's render with a success", () => {
    test("Then it should show Modal Component with ''", () => {
      const informationText = "Success";
      render(
        <Provider store={mockSuccessStore}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      const expectedModal = screen.getByText(informationText);

      expect(expectedModal).toBeInTheDocument();
    });
  });
});
