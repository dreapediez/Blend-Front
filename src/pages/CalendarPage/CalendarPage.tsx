import CalendarDay from "../../components/CalendarDays/CalendarDay";
import CalendarPageStyled from "./CalendarPageStyled";

const CalendarPage = (): JSX.Element => {
  const calendarDays: number[] = [];

  for (let i = 0; i <= 24; i++) {
    calendarDays.push(i);
  }

  return (
    <CalendarPageStyled>
      <h2>Let’s open today’s window!</h2>
      <div className="days">
        {calendarDays.map((day) => (
          <CalendarDay key={day} calendarDay={day} />
        ))}
      </div>
    </CalendarPageStyled>
  );
};

export default CalendarPage;
