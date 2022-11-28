import Loading from "./Loading";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { newStore } from "../../redux/store";

describe("Given a Loading component", () => {
  describe("When it's rendered with an svg image with the data-testid label 'loading'", () => {
    test("Then it should show the Loading logo at the screen", () => {
      render(
        <BrowserRouter>
          <Provider store={newStore}>
            <Loading />
          </Provider>
        </BrowserRouter>
      );

      const loading = screen.queryByTestId("loading");

      expect(loading).toBeInTheDocument();
    });
  });
});
