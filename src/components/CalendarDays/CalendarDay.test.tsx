import { render, screen } from "@testing-library/react";
import { makeWrapper } from "../../mocks/makeWrapper";
import CalendarDay from "./CalendarDay";

describe("Given a Button component", () => {
  describe("When its rendered with the text 'Login'", () => {
    test("Then its should show a button with the text 'Login'", () => {
      const textDay = "1";
      const expectedDay = 1;

      render(<CalendarDay calendarDay={expectedDay} />, {
        wrapper: makeWrapper,
      });

      const expectedText = screen.queryByText(textDay);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
