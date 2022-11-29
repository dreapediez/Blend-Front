import WindowStyled from "./WindowStyled";
import { ReactComponent as Time } from "../../assets/time.svg";
import { ReactComponent as Temperature } from "../../assets/mini-mug.svg";
import Button from "../Button/Button";
// interface WindowProps {

// }

const Window = (): JSX.Element => {
  return (
    <WindowStyled>
      <div className="title">
        <span className="title__day">1</span>
        <h2 className="title__tea">Pancake Stack</h2>
      </div>
      <h3>Tea type</h3>
      <span>Black tea</span>
      <h3>Brewed</h3>
      <span>Good with or without milk</span>
      <h3>Ingredients</h3>
      <span>
        Calendula, sunflower, jasmine petals, natural flavours and real maple
        syrup
      </span>
      <div className="footer">
        <div className="footer__box">
          <div className="footer__icon">
            <Time height="40" className="footer__icon-time" />
            <span>3 - 4 min</span>
          </div>
          <div className="footer__icon">
            <Temperature className="footer__icon-temperature" />
            <span>100°</span>
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
