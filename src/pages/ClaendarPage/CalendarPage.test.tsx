import { render, screen } from "@testing-library/react";
import CalendarPage from "./CalendarPage";

describe("Given a Calendar Page", () => {
  describe("When it's rendered with the title 'Let’s open today’s window!'", () => {
    test("Then it should show the corresponding text at the screen", () => {
      const title = "Let’s open today’s window!";

      render(<CalendarPage />);

      const pageTitle = screen.queryByRole("heading", {
        name: title,
      });

      expect(pageTitle).toBeInTheDocument();
    });
  });
});
