import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockStore } from "../../mocks/makeWrapper";
import PostFormPage from "./PostFormPage";

const spyDispatch = jest.spyOn(mockStore, "dispatch");

describe("Given a register page", () => {
  const ingredientsInput = /answer1/i;
  const songInput = /answer2/i;
  const bookInput = /answer3/i;
  const descriptionInput = /answer4/i;
  const imageInput = /image/i;
  const buttonText = /send/i;

  describe("When it's rendered with the title 'What a great idea, register and become one of us...' and three inputs", () => {
    test("Then it should show the text received as a title and the corresponding three inputs", async () => {
      const labelOneDay = "Select a calendar day";
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <PostFormPage />
          </Provider>
        </BrowserRouter>
      );

      const postInput = {
        day: 3,
        title: "Santas Milk & Cookies",
        answer1: "Cinnamon",
        answer2: "Last Christmas - Wham!",
        answer3: "Fool - Christopher Moore",
        answer4:
          "The best tea to start the day. I have been able to enjoy it quietly while reading a book.",
        image:
          "https://c.ndtvimg.com/2021-06/2stfrfn8_tea_625x300_16_June_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350",
        id: "638b38336f2e824ae4cd3a03",
      };

      const postDaySelect = screen.queryByRole("combobox");
      const postDayOption = screen.queryByRole("option", {
        name: labelOneDay,
      });

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

      const button = screen.queryByRole("button");

      button?.click();

      await userEvent.selectOptions(postDaySelect!, postDayOption!);

      await userEvent.type(ingredients!, postInput.answer1);
      await userEvent.type(song!, postInput.answer2);
      await userEvent.type(book!, postInput.answer3);
      await userEvent.type(description!, postInput.answer4);
      await userEvent.type(image!, postInput.image);

      expect(ingredients).toBeInTheDocument();
      expect(song).toBeInTheDocument();
      expect(book).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();

      expect(postDaySelect).toBeInTheDocument();
      expect(postDayOption).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the create post inputs completed", () => {
    test("Then it should show the typed values on the screen", async () => {
      const postInput = {
        day: 3,
        title: "Santas Milk & Cookies",
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

  describe("When it's rendered with a select input", () => {
    test("Then it should show all their options to can select between the calendar days", async () => {
      const labelOneDay = "Calendar Day 4";

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <PostFormPage />
          </Provider>
        </BrowserRouter>
      );

      const postDaySelect = screen.queryByRole("combobox");
      const postDayOption = screen.queryByRole("option", {
        name: labelOneDay,
      });

      await userEvent.selectOptions(postDaySelect!, postDayOption!);

      expect(postDaySelect).toBeInTheDocument();
      expect(postDayOption).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a select input and value 0", () => {
    test("Then it should show all their options to can select between the calendar days", async () => {
      const labelOneDay = "Select a calendar day";

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <PostFormPage />
          </Provider>
          o
        </BrowserRouter>
      );

      const postDaySelect = screen.queryByRole("combobox");
      const postDayOption = screen.queryByRole("option", {
        name: labelOneDay,
      });

      await userEvent.selectOptions(postDaySelect!, postDayOption!);

      expect(postDaySelect).toBeInTheDocument();
      expect(postDayOption).toBeInTheDocument();
    });
  });
});
