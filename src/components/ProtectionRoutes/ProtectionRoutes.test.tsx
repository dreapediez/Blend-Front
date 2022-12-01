import { Provider } from "react-redux";
import { render, screen } from "@testing-library/react";
import { newStore } from "../../redux/store";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import ProtectionRoutes from "./ProtectionRoutes";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import CalendarPage from "../../pages/CalendarPage/CalendarPage";
import { mockStore } from "../../mocks/makeWrapper";
import mockToken from "../../mocks/mockToken";

describe("Given a ProtectionRoute component", () => {
  describe("When it's rendered at welcome page without token at local storage", () => {
    test("Then it should redirects the user to login page", () => {
      const headerText = "You are my favorite tea moment";

      window.localStorage.clear();

      render(
        <Provider store={newStore}>
          <MemoryRouter initialEntries={["/calendar"]}>
            <ProtectionRoutes children={<WelcomePage />} />
          </MemoryRouter>
        </Provider>
      );

      const expectedHeading = screen.queryByRole("heading", {
        name: headerText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered at login page with a token at local storage", () => {
    test("Then it should redirects the user to calendar page", () => {
      const headerText = "Let’s open today’s window!";

      window.localStorage.setItem("token", mockToken);

      render(
        <Provider store={mockStore}>
          <BrowserRouter>
            <ProtectionRoutes children={<CalendarPage />} />
          </BrowserRouter>
        </Provider>
      );

      const expectedHeading = screen.queryByRole("heading", {
        name: headerText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
