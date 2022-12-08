import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockStore } from "../../mocks/makeWrapper";
import WelcomePage from "./WelcomePage";

describe("Given a welcome page", () => {
  describe("When it's rendered with the title 'Welcome to BlendCommunity!", () => {
    test("Then it should show the logo with text received", () => {
      const expectedLogoText = "Welcome to BlendCommunity!";

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <WelcomePage />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.queryByRole("heading", {
        name: expectedLogoText,
      });

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When their buttons are rendered with the text 'Log in' and 'Register'", () => {
    test("Then it should show the buttons with the text received", () => {
      const expectedLoginLinkText = "Log In";
      const expectedRegisterLinkText = "Register";

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <WelcomePage />
          </Provider>
        </BrowserRouter>
      );

      const loginLink = screen.queryByRole("link", {
        name: expectedLoginLinkText,
      });
      const registerLink = screen.queryByRole("link", {
        name: expectedRegisterLinkText,
      });

      expect(loginLink).toBeInTheDocument();
      expect(registerLink).toBeInTheDocument();
    });
  });
});
