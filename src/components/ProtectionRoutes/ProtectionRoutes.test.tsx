import { Provider } from "react-redux";
import { act, render, screen } from "@testing-library/react";
import { newStore } from "../../redux/store";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import ProtectionRoutes from "./ProtectionRoutes";
import WelcomePage from "../../pages/WelcomePage/WelcomePage";
import CalendarPage from "../../pages/CalendarPage/CalendarPage";
import { mockStore } from "../../mocks/makeWrapper";
import mockToken from "../../mocks/mockToken";

describe("Given a ProtectionRoute component", () => {
  describe("When it's rendered at welcome page without token at local storage", () => {
    test("Then it should redirects the user to login page", async () => {
      const headerText = "Welcome to BlendCommunity!";

      window.localStorage.clear();

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        render(
          <Provider store={newStore}>
            <MemoryRouter initialEntries={["/calendar"]}>
              <ProtectionRoutes children={<WelcomePage />} />
            </MemoryRouter>
          </Provider>
        );
      });

      const expectedHeading = screen.queryByRole("heading", {
        name: headerText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });

  describe("When it's rendered at login page with a token at local storage", () => {
    test("Then it should redirects the user to calendar page", async () => {
      const headerText = "Let’s open today’s window!";

      window.localStorage.setItem("token", mockToken);

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        render(
          <Provider store={mockStore}>
            <BrowserRouter>
              <ProtectionRoutes children={<CalendarPage />} />
            </BrowserRouter>
          </Provider>
        );
      });

      const expectedHeading = screen.queryByRole("heading", {
        name: headerText,
      });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
