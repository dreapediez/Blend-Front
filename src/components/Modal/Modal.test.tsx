import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store";
import Modal from "./Modal";

const dispatchSpy = jest.spyOn(store, "dispatch");

describe("Given a Modal component", () => {
  describe("When it's rendered with the type 'error' and the text 'Something went wrong, please try again in a few minutes', and click the button", () => {
    test("Then it should show a red info alert with the corresponding info and icon data-testid label 'icon'", async () => {
      const expectedModalType = "error";
      const expectedModalText =
        "Something went wrong, please try again in a few minutes";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Modal type={expectedModalType} text={expectedModalText} />
          </Provider>
        </BrowserRouter>
      );

      const icon = screen.queryByTestId("icon");
      const text = screen.queryByText(expectedModalText);
      await userEvent.click(icon!);

      expect(text).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
      expect(dispatchSpy).toHaveBeenCalled();
    });
  });

  describe("When it's rendered with the type 'success' and the text 'You are already one of the Blendcommunity'", () => {
    test("Then it should show a red info alert with the corresponding info and icon data-testid label 'icon'", () => {
      const expectedModalType = "success";
      const expectedModalText = "You are already one of the Blendcommunity";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Modal type={expectedModalType} text={expectedModalText} />
          </Provider>
        </BrowserRouter>
      );

      const text = screen.queryByText(expectedModalText);

      expect(text).toBeInTheDocument();
    });
  });
});
