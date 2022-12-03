import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockStore } from "../../mocks/makeWrapper";
import PostsPage from "./PostsPage";

describe("Given a Calendar Page", () => {
  describe("When it's rendered with the post day title", () => {
    test("Then it should show the corresponding text at the screen", () => {
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <PostsPage />
          </Provider>
        </BrowserRouter>
      );

      const expectedPostDayOne = screen.getByRole("heading", {
        name: "Pancake Stack",
      });

      expect(expectedPostDayOne).toBeInTheDocument();
    });
  });
});
