import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockStore } from "../../mocks/makeWrapper";
import PostFormPage from "./PostFormPage";

describe("Given a register page", () => {
  const ingredientsInput = /answer1/i;
  const songInput = /answer2/i;
  const bookInput = /answer3/i;
  const descriptionInput = /answer4/i;
  const imageInput = /image/i;
  const buttonText = /send/i;

  describe("When it's rendered with the title 'Join our community' and three inputs", () => {
    test("Then it should show the text received as a title and the corresponding three inputs", () => {
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <PostFormPage />
          </Provider>
        </BrowserRouter>
      );

      const ingredients = screen.queryByRole("textbox", {
        name: ingredientsInput,
      });
      const song = screen.queryByRole("textbox", {
        name: songInput,
      });
      const book = screen.queryByRole("textbox", {
        name: bookInput,
      });
      const description = screen.queryByRole("textbox", {
        name: descriptionInput,
      });
      const image = screen.queryByLabelText(imageInput);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(ingredients).toBeInTheDocument();
      expect(song).toBeInTheDocument();
      expect(book).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });
});
