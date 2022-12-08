import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import useToken from "../../hooks/useToken/useToken";
import { makeWrapperMockStore, mockStore } from "../../mocks/makeWrapper";
import LogInPage from "./LogInPage";

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const spyDispatch = jest.spyOn(mockStore, "dispatch");

describe("Given a log in page", () => {
  const usernameInput = /username/i;
  const passwordInput = /password/i;
  const buttonText = /log in/i;

  describe("When it's rendered with the title 'You are back! We missed you...' and three inputs", () => {
    test("Then it should show the text received as a title and the corresponding three inputs", async () => {
      const expectedTitleText = "You are back! We missed you...";

      render(<LogInPage />, { wrapper: makeWrapperMockStore });

      const title = screen.queryByRole("heading", {
        name: expectedTitleText,
      });
      const username = screen.queryByPlaceholderText(usernameInput);
      const password = screen.queryByPlaceholderText(passwordInput);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      }) as HTMLButtonElement;
      await userEvent.click(renderedButton);

      expect(title).toBeInTheDocument();
      expect(username).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the types username 'User'and password 'user123'", () => {
    test("Then it should show the typed values on the screen", async () => {
      const {
        result: { current },
      } = renderHook(() => useToken(), {
        wrapper: makeWrapperMockStore,
      });

      const userInput = {
        username: "User",
        password: "user123",
      };

      render(<LogInPage />, { wrapper: makeWrapperMockStore });

      const username = screen.queryByRole("textbox", { name: usernameInput });
      const password = screen.queryByLabelText(passwordInput);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      }) as HTMLButtonElement;

      await userEvent.type(username!, userInput.username);
      await userEvent.type(password!, userInput.password);
      await userEvent.click(renderedButton);
      await act(() => {
        current.getToken();
      });

      expect(username).toHaveDisplayValue(userInput.username);
      expect(password).toHaveDisplayValue(userInput.password);
      expect(renderedButton).toBeInTheDocument();

      await waitFor(() => {
        expect(spyDispatch).toHaveBeenCalled();
      });
      await waitFor(() => {
        expect(mockNavigate).toHaveBeenCalled();
      });
    });
  });
});
