import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFound page", () => {
  describe("When it's rendered", () => {
    test("Then it should show an svg with the icon '404'", () => {
      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const icon = screen.queryByTestId("404-icon");

      expect(icon).toBeInTheDocument();
    });
  });
});
