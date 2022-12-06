import { Link } from "react-router-dom";
import CalendarDayStyled from "./CalendarDayStyled";
import { BsPlusCircle } from "react-icons/bs";
import windows from "../Window/windows";
interface CalendarDayProps {
  calendarDay: number;
}

const CalendarDay = ({ calendarDay }: CalendarDayProps): JSX.Element => {
  const title =
    calendarDay > 0 && windows.find((window) => window.day === calendarDay);

  return (
    <CalendarDayStyled className="day">
      {calendarDay === 0 ? (
        <Link
          to={`/new-post?day=${calendarDay}&title=${title}`}
          className="day__link"
        >
          <BsPlusCircle className="day__link-icon" data-testid="plus" />
          <span className="day__link-text">Add Post</span>
        </Link>
      ) : (
        <span className="day__title">{calendarDay}</span>
      )}
    </CalendarDayStyled>
  );
};

export default CalendarDay;
