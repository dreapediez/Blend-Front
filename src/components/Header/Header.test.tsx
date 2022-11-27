import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { newStore } from "../../redux/store";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered with an svg image with the data-testid label 'logo-icon'", () => {
    test("Then it should show the Header image at the screen", () => {
      render(
        <BrowserRouter>
          <Provider store={newStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const logo = screen.queryByTestId("logo-icon");

      expect(logo).toBeInTheDocument();
    });
  });
});
