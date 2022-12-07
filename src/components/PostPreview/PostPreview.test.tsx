import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { postMock } from "../../mocks/listOfPostsMock";
import { newStore } from "../../redux/store";
import PostPreview from "./PostPreview";

describe("Given a PostPreview component", () => {
  describe("When it is rendered with a post title 'Pancake Stack'", () => {
    test("Then it should show the text in a heading of level 3", async () => {
      const postTest = postMock;
      const buttonText = "Delete";

      render(
        <BrowserRouter>
          <Provider store={newStore}>
            <PostPreview post={postTest} />
          </Provider>
        </BrowserRouter>
      );
      const post = screen.queryByRole("heading", { name: "Pancake Stack" });
      const button = screen.queryAllByRole("button", { name: buttonText });

      await userEvent.click(button[0]!);

      expect(post).toBeInTheDocument();
      expect(button[0]).toBeInTheDocument();
    });
  });
});
