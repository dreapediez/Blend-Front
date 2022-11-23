import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered with the text 'Login'", () => {
    test("Then its should show a button with the text 'Login'", () => {
      const textButton = "Login";
      const buttonTypeDark = "dark";
      const buttonAction = jest.fn();

      render(
        <Button
          styletype={buttonTypeDark}
          text={textButton}
          action={buttonAction}
          type="button"
        />
      );

      const button = screen.queryByRole("button");

      button?.click();

      expect(buttonAction).toBeCalled();
    });

    test("And its should show a button with accessibility 'button'", () => {
      const textButton = "Sign Up";
      const buttonTypeLight = "light";
      const buttonAction = jest.fn();

      render(
        <Button
          type="button"
          styletype={buttonTypeLight}
          text={textButton}
          action={buttonAction}
        />
      );

      const button = screen.queryByRole("button");

      button?.click();

      expect(buttonAction).toBeCalled();
    });

    test("And its should show a button with text 'Delete' on click", () => {
      const textButton = "Delete";
      const buttonTypeDarkSmall = "darkSmall";
      const buttonAction = jest.fn();

      render(
        <Button
          type="button"
          styletype={buttonTypeDarkSmall}
          text={textButton}
          action={buttonAction}
        />
      );

      const button = screen.queryByRole("button");

      button?.click();

      expect(buttonAction).toBeCalled();
    });
  });

  test("And its should show a button with text 'Delete' on click", () => {
    const textButton = "Modify";
    const buttonTypeLightSmall = "lightSmall";
    const buttonAction = jest.fn();

    render(
      <Button
        type="button"
        styletype={buttonTypeLightSmall}
        text={textButton}
        action={buttonAction}
      />
    );

    const button = screen.queryByRole("button");

    button?.click();

    expect(buttonAction).toBeCalled();
  });
});
