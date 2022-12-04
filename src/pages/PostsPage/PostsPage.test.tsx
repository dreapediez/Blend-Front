import { act, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockStore } from "../../mocks/makeWrapper";
import PostsPage from "./PostsPage";

describe("Given a Calendar Page", () => {
  describe("When it's rendered with the post day title", () => {
    test("Then it should show the corresponding text at the screen", async () => {
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        render(
          <BrowserRouter>
            <Provider store={mockStore}>
              <PostsPage />
            </Provider>
          </BrowserRouter>
        );
      });

      await waitFor(() => {
        const expectedPostDayOne = screen.queryByRole("heading", {
          name: "Pancake Stack",
        });

        expect(expectedPostDayOne).toBeInTheDocument();
      });
    });
  });
});
