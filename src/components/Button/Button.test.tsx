import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When its rendered with the text 'Login'", () => {
    test("Then its should show a button with the text 'Login'", () => {
      const textButton = "Login";
      const buttonArialLabel = "button";
      const buttonTypeDark = "dark";

      render(
        <Button
          buttonType={buttonTypeDark}
          text={textButton}
          action={() => {}}
          ariaLabel={buttonArialLabel}
        />
      );

      const showButton = screen.queryByRole("button");

      expect(showButton).toBeInTheDocument();
      expect(showButton?.textContent).toBe(textButton);
    });

    test("And its should show a button with accessibility 'button'", () => {
      const textButton = "Sign Up";
      const buttonArialLabel = "button";
      const buttonTypeLight = "light";
      const expectedAttribute = "aria-label";

      render(
        <Button
          buttonType={buttonTypeLight}
          text={textButton}
          action={() => {}}
          ariaLabel={buttonArialLabel}
        />
      );

      const showButtonType = screen.queryByRole("button");

      expect(showButtonType).toHaveAttribute(
        expectedAttribute,
        buttonArialLabel
      );
    });

    test("And its should show a button with text 'Delete' on click", () => {
      const textButton = "Delete";
      const buttonArialLabel = "button";
      const buttonTypeDarkSmall = "darkSmall";
      const buttonAction = jest.fn();

      render(
        <Button
          buttonType={buttonTypeDarkSmall}
          text={textButton}
          action={buttonAction}
          ariaLabel={buttonArialLabel}
        />
      );

      const button = screen.queryByRole("button");

      button?.click();

      expect(buttonAction).toBeCalled();
    });
  });

  test("And its should show a button with text 'Delete' on click", () => {
    const textButton = "Modify";
    const buttonArialLabel = "button";
    const buttonTypeLightSmall = "lightSmall";
    const buttonAction = jest.fn();

    render(
      <Button
        buttonType={buttonTypeLightSmall}
        text={textButton}
        action={buttonAction}
        ariaLabel={buttonArialLabel}
      />
    );

    const button = screen.queryByRole("button");

    button?.click();

    expect(buttonAction).toBeCalled();
  });
});
