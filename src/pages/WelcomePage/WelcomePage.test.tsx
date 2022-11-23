import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import WelcomePage from "./WelcomePage";

describe("Given a welcome page", () => {
  describe("When it's rendered with the title 'You are my favorite tea moment", () => {
    test("Then it should show the logo with text received", () => {
      const expectedLogoText = "You are my favorite tea moment";

      render(
        <BrowserRouter>
          <Provider store={store}>
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

  describe("When their buttons are rendered with the text 'Log in' and 'Sign Up'", () => {
    test("Then it should show the buttons with the text received", () => {
      const expectedLoginButtonText = "Log in page";
      const expectedSignupButtonText = "Sign up page";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <WelcomePage />
          </Provider>
        </BrowserRouter>
      );

      const loginButton = screen.queryByRole("button", {
        name: expectedLoginButtonText,
      });
      const signupButton = screen.queryByRole("button", {
        name: expectedSignupButtonText,
      });

      expect(loginButton).toBeInTheDocument();
      expect(signupButton).toBeInTheDocument();
    });
  });
});
