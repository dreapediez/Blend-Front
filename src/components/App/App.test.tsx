import App from "./App";
import { MemoryRouter } from "react-router-dom";
import TestRenderer from "react-test-renderer";
import { Provider } from "react-redux";
import { act, render, screen, waitFor } from "@testing-library/react";
import {
  mockStore,
  mockStoreLoading,
  mockSuccessStore,
} from "../../mocks/makeWrapper";
import { newStore } from "../../redux/store";
import mockToken from "../../mocks/mockToken";

afterEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});

describe("Given an App component", () => {
  describe("When it's rendered with path '/'", () => {
    test("Then it should render 'not found page'", async () => {
      const expectedApp = TestRenderer.create(
        <Provider store={mockStoreLoading}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(expectedApp).toMatchSnapshot();
    });
  });

  describe("When it's rendered with path '/login'", () => {
    test("Then it should render login page with their header component", async () => {
      const headerText = "Welcome to Blendcommunity!";

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        render(
          <Provider store={newStore}>
            <MemoryRouter initialEntries={["/login"]}>
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: headerText,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/register'", () => {
    test("Then it should render register page with their header component", async () => {
      const headerText = "Join our community";

      render(
        <Provider store={newStore}>
          <MemoryRouter initialEntries={["/register"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: headerText,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/calendar'", () => {
    test("Then it should render calendar page with their header component", async () => {
      const titleText = "Let’s open today’s window!";

      localStorage.setItem("token", mockToken);

      render(
        <Provider store={mockStoreLoading}>
          <MemoryRouter initialEntries={["/calendar"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        const expectedHeading = screen.queryByRole("heading", {
          name: titleText,
        });

        expect(expectedHeading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/posts'", () => {
    test("Then it should render posts page with their header component", async () => {
      const titleText = "Extra ingredients";

      localStorage.setItem("token", mockToken);

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        render(
          <Provider store={mockStoreLoading}>
            <MemoryRouter initialEntries={["/posts"]}>
              <App />
            </MemoryRouter>
          </Provider>
        );
      });

      await waitFor(() => {
        const expectedHeading = screen.queryAllByRole("heading", {
          name: titleText,
        });

        expect(expectedHeading[0]).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with path '/404'", () => {
    test("Then it should render not found page with their header component", async () => {
      render(
        <Provider store={mockStoreLoading}>
          <MemoryRouter initialEntries={["/404"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        const icon = screen.queryByTestId("404-icon");

        expect(icon).toBeInTheDocument();
      });
    });
  });

  describe("When it's render with Loading open", () => {
    test("Then it should render login page with their header component", async () => {
      const informationText = "loading";

      render(
        <Provider store={mockStoreLoading}>
          <MemoryRouter initialEntries={["/login"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        const expectedModal = screen.queryByLabelText(informationText);

        expect(expectedModal).toBeInTheDocument();
      });
    });
  });

  describe("When it's render with an error", () => {
    test("Then it should show Modal Component with 'Something went wrong, please try again in a few minutes'", async () => {
      const informationText = "Error";
      render(
        <Provider store={mockStore}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        const expectedModal = screen.queryByText(informationText);

        expect(expectedModal).toBeInTheDocument();
      });
    });
  });

  describe("When it's render with a success", () => {
    test("Then it should show Modal Component with 'Success'", async () => {
      const informationText = "Success";
      render(
        <Provider store={mockSuccessStore}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      await waitFor(() => {
        const expectedModal = screen.queryByText(informationText);

        expect(expectedModal).toBeInTheDocument();
      });
    });
  });
});
