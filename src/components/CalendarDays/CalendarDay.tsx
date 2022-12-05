import { Link } from "react-router-dom";
import CalendarDayStyled from "./CalendarDayStyled";
import { BsPlusCircle } from "react-icons/bs";

interface CalendarDayProps {
  calendarDay: number;
}

const CalendarDay = ({ calendarDay }: CalendarDayProps): JSX.Element => {
  return (
    <CalendarDayStyled className="day">
      {calendarDay === 0 ? (
        <Link to="/new-post" className="day__link">
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
