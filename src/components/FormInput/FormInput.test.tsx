import { render, screen } from "@testing-library/react";
import FormInput from "./FormInput";

describe("Given a FormInput component", () => {
  describe("When it's rendered with the placeholder 'Username'", () => {
    test("Then it should show the corresponding text at the input", () => {
      const expectedUsernameInput = "Username";
      const expectedType = "username";
      const expectedName = "username";

      render(
        <FormInput
          placeholder={expectedUsernameInput}
          type={expectedType}
          name={expectedName}
        />
      );

      const expectedInput = screen.getByPlaceholderText(expectedUsernameInput);
      expect(expectedInput).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the placeholder 'Password'", () => {
    test("Then it should show the corresponding text at the input", () => {
      const expectedPasswordInput = "Password";
      const expectedType = "password";
      const expectedName = "password";

      render(
        <FormInput
          placeholder={expectedPasswordInput}
          type={expectedType}
          name={expectedName}
        />
      );

      const expectedInput = screen.getByPlaceholderText(expectedPasswordInput);
      expect(expectedInput).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the placeholder 'Email'", () => {
    test("Then it should show the corresponding text at the input", () => {
      const expectedEmailInput = "Email";
      const expectedType = "email";
      const expectedName = "email";

      render(
        <FormInput
          placeholder={expectedEmailInput}
          type={expectedType}
          name={expectedName}
        />
      );

      const expectedInput = screen.getByPlaceholderText(expectedEmailInput);
      expect(expectedInput).toBeInTheDocument();
    });
  });

  describe("When it's rendered with the placeholder 'Image'", () => {
    test("Then it should show the corresponding text at the input", () => {
      const expectedImageInput = "Image";
      const expectedType = "image";
      const expectedName = "image";

      render(
        <FormInput
          placeholder={expectedImageInput}
          type={expectedType}
          name={expectedName}
        />
      );

      const expectedInput = screen.getByPlaceholderText(expectedImageInput);
      expect(expectedInput).toBeInTheDocument();
    });
  });
});
