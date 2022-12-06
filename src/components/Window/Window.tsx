import WindowStyled from "./WindowStyled";
import { ReactComponent as Time } from "../../assets/time.svg";
import { ReactComponent as Temperature } from "../../assets/mini-mug.svg";
import windows from "./windows";

const Window = ({ calendarDay }: { calendarDay: number }): JSX.Element => {
  const window = windows.find((window) => window.day === calendarDay);

  const { brewed, day, ingredients, teaType, temperature, time, title } =
    window!;

  return (
    <WindowStyled>
      <div className="title">
        <span className="title-day">{day}</span>
        <h2 className="title-tea">{title}</h2>
      </div>
      <div className="card">
        <div className="body">
          <h3>Tea type</h3>
          <span>{teaType}</span>
          <h3>Brewed</h3>
          <span>{brewed}</span>
          <h3>Ingredients</h3>
          <span>{ingredients}</span>
        </div>
        <div className="footer">
          <div className="footer__icon">
            <Time height="40" className="footer__icon-time" />
            <span>{time} min</span>
          </div>
          <div className="footer__icon">
            <Temperature className="footer__icon-temperature" />
            <span>{temperature}°</span>
          </div>
        </div>
      </div>
    </WindowStyled>
  );
};

export default Window;
