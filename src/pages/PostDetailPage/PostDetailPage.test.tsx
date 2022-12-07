import { act, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockStore } from "../../mocks/makeWrapper";
import PostDetailPage from "./PostDetailPage";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    idPost: "638b38336f2e824ae4cd3a03",
  }),
}));

describe("Given a Calendar Page", () => {
  describe("When it's rendered with the post day title", () => {
    test("Then it should show the corresponding text at the screen", async () => {
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        render(
          <BrowserRouter>
            <Provider store={mockStore}>
              <PostDetailPage />
            </Provider>
          </BrowserRouter>
        );
      });

      await waitFor(() => {
        const expectedPostDayOne = screen.queryByRole("heading", {
          name: "Today's post is amazing... Congratulations!",
        });

        expect(expectedPostDayOne).toBeInTheDocument();
      });
    });
  });
});
