import LoadingStyled from "./LoadingStyled";
import { ReactComponent as Mug } from "../../assets/mug.svg";
import { ReactComponent as One } from "../../assets/one.svg";
import { ReactComponent as Two } from "../../assets/two.svg";
import { ReactComponent as Three } from "../../assets/three.svg";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <div className="loading">
        <div className="loading__lines">
          <One width="20" height="25" className="loading__lines-one" />
          <Two width="20" height="30" className="loading__lines-two" />
          <Three width="20" height="25" className="loading__lines-three" />
        </div>
        <Mug width="100" height="60" className="loading__mug" />
      </div>
    </LoadingStyled>
  );
};

export default Loading;
