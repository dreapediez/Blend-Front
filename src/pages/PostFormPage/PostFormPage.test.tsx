import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import useApi from "../../hooks/useApi/useApi";
import { makeWrapperMockStore, mockStore } from "../../mocks/makeWrapper";
import PostFormPage from "./PostFormPage";

const spyDispatch = jest.spyOn(mockStore, "dispatch");

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

  describe("When it's rendered with the create post inputs completed", () => {
    test("Then it should show the typed values on the screen", async () => {
      const {
        result: { current },
      } = renderHook(() => useApi(), {
        wrapper: makeWrapperMockStore,
      });

      const postInput = {
        day: 1,
        title: "Pancake Stack",
        answer1: "Cinnamon",
        answer2: "Last Christmas - Wham!",
        answer3: "Fool - Christopher Moore",
        answer4:
          "The best tea to start the day. I have been able to enjoy it quietly while reading a book.",
        image:
          "https://c.ndtvimg.com/2021-06/2stfrfn8_tea_625x300_16_June_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        id: "638b38336f2e824ae4cd3a03",
      };

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

      await userEvent.type(ingredients!, postInput.answer1);
      await userEvent.type(song!, postInput.answer2);
      await userEvent.type(book!, postInput.answer3);
      await userEvent.type(description!, postInput.answer4);
      await userEvent.type(image!, postInput.image);

      await act(() => {
        current.createPost(postInput);
      });

      expect(ingredients).toHaveDisplayValue(postInput.answer1);
      expect(song).toHaveDisplayValue(postInput.answer2);
      expect(book).toHaveDisplayValue(postInput.answer3);
      expect(description).toHaveDisplayValue(postInput.answer4);
      expect(renderedButton).toBeInTheDocument();

      await waitFor(() => {
        expect(spyDispatch).toHaveBeenCalled();
      });
    });
  });
});
