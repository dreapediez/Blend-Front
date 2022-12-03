import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { postPropsMock } from "../../mocks/listOfPostsMock";
import { newStore } from "../../redux/store";
import PostCard from "./PostCard";

describe("Given a PostCard component", () => {
  describe("When it is rendered with a post title 'Santas Milk & Cookies'", () => {
    test("Then it should show the text in a heading of level 3", () => {
      const postTest = postPropsMock;

      render(
        <Provider store={newStore}>
          <PostCard post={postTest} />
        </Provider>
      );

      const post = screen.queryByRole("heading", { name: "Pancake Stack" });

      expect(post).toBeInTheDocument();
    });
  });
});
