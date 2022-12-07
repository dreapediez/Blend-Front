import { act, render, screen } from "@testing-library/react";
import { makeWrapper } from "../../mocks/makeWrapper";
import CalendarPage from "./CalendarPage";

describe("Given a Calendar Page", () => {
  describe("When it's rendered with the title 'Let’s open today’s window!'", () => {
    test("Then it should show the corresponding text at the screen", async () => {
      const title = "Let’s open today’s window!";

      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        render(<CalendarPage />, {
          wrapper: makeWrapper,
        });
      });

      const pageTitle = screen.queryByRole("heading", {
        name: title,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
