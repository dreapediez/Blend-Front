import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import RegisterPage from "./RegisterPage";

describe("Given a register page", () => {
  describe("When it's rendered with the title 'Join our community'", () => {
    test("Then it should show the logo with text received", () => {
      const expectedLogoText = "Join our community";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterPage />
          </Provider>
        </BrowserRouter>
      );

      const logo = screen.queryByRole("heading", {
        name: expectedLogoText,
      });

      expect(logo).toBeInTheDocument();
    });
  });
});
