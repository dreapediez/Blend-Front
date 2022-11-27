import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockStore } from "../../mocks/makeWrapper";
import LogInPage from "./LogInPage";

describe("Given a log in page", () => {
  const usernameInput = /username/i;
  const passwordInput = /password/i;
  const buttonText = /log in/i;

  describe("When it's rendered with the title 'Welcome to Blendcommunity!' and three inputs", () => {
    test("Then it should show the text received as a title and the corresponding three inputs", () => {
      const expectedTitleText = "Welcome to Blendcommunity!";

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <LogInPage />
          </Provider>
        </BrowserRouter>
      );

      const title = screen.queryByRole("heading", {
        name: expectedTitleText,
      });
      const username = screen.getByPlaceholderText(usernameInput);
      const password = screen.getByPlaceholderText(passwordInput);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      }) as HTMLButtonElement;

      expect(title).toBeInTheDocument();
      expect(username).toBeInTheDocument();
      expect(password).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the types username 'User'and password 'user123'", () => {
    test("Then it should show the typed values on the screen", async () => {
      const userInput = {
        username: "User",
        password: "user123",
        email: "user@gmail.com",
      };

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <LogInPage />
          </Provider>
        </BrowserRouter>
      );

      const username = screen.queryByRole("textbox", { name: usernameInput });
      const password = screen.queryByLabelText(passwordInput);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      }) as HTMLButtonElement;

      await userEvent.type(username!, userInput.username);
      await userEvent.type(password!, userInput.password);
      await userEvent.click(renderedButton);

      expect(username).toHaveDisplayValue(userInput.username);
      expect(password).toHaveDisplayValue(userInput.password);
      expect(renderedButton).toBeInTheDocument();
    });
  });
});
