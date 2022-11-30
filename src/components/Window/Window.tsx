import WindowStyled from "./WindowStyled";
import { ReactComponent as Time } from "../../assets/time.svg";
import { ReactComponent as Temperature } from "../../assets/mini-mug.svg";
import Button from "../Button/Button";
import { WindowStructure } from "../../types/caledarTypes";

interface WindowProps extends WindowStructure {}

const Window = ({
  brewed,
  day,
  ingredients,
  teaType,
  temperature,
  time,
  title,
}: WindowProps): JSX.Element => {
  return (
    <WindowStyled>
      <div className="title">
        <span className="title__day">{day}</span>
        <h2 className="title__tea">{title}</h2>
      </div>
      <h3>Tea type</h3>
      <span>{teaType}</span>
      <h3>Brewed</h3>
      <span>{brewed}</span>
      <h3>Ingredients</h3>
      <span>{ingredients}</span>
      <div className="footer">
        <div className="footer__box">
          <div className="footer__icon">
            <Time height="40" className="footer__icon-time" />
            <span>{time} min</span>
          </div>
          <div className="footer__icon">
            <Temperature className="footer__icon-temperature" />
            <span>{temperature}°</span>
          </div>
        </div>
        <Button
          type="button"
          className="form-footer__button"
          text="Add Post"
          name="post"
          styletype="darkSmall"
        />
      </div>
    </WindowStyled>
  );
};

export default Window;
