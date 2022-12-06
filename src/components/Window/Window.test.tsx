import { render, screen } from "@testing-library/react";
import Window from "./Window";
import windows from "./windows";

describe("Given a Window component", () => {
  describe("When it's rendered with a day 1 window", () => {
    test("Then it should show the corresponding window with all the information that belongs to that day", () => {
      const window = windows[0];

      render(<Window calendarDay={1} />);

      const windowTitle = screen.queryByRole("heading", {
        name: window.title,
      });

      expect(windowTitle).toBeInTheDocument();
    });
  });
});
